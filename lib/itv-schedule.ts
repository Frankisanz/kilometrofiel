// Periodicidad de la ITV según el artículo 6.1 del Real Decreto 920/2017.
// Cada tramo indica desde qué antigüedad (en años) se aplica un intervalo
// (en meses). Un intervalo nulo significa que el vehículo está exento.

export type ItvVehicleType = "turismo" | "furgoneta" | "motocicleta" | "ciclomotor";

type FrequencyBand = { fromYears: number; months: number | null };

export const ITV_VEHICLE_LABELS: Record<ItvVehicleType, string> = {
  turismo: "Turismo de uso particular (hasta 9 plazas)",
  furgoneta: "Furgoneta o camión ligero (hasta 3.500 kg)",
  motocicleta: "Motocicleta, triciclo o cuadriciclo",
  ciclomotor: "Ciclomotor",
};

export const ITV_FREQUENCIES: Record<ItvVehicleType, readonly FrequencyBand[]> = {
  turismo: [
    { fromYears: 0, months: null },
    { fromYears: 4, months: 24 },
    { fromYears: 10, months: 12 },
  ],
  furgoneta: [
    { fromYears: 0, months: null },
    { fromYears: 2, months: 24 },
    { fromYears: 6, months: 12 },
    { fromYears: 10, months: 6 },
  ],
  motocicleta: [
    { fromYears: 0, months: null },
    { fromYears: 4, months: 24 },
  ],
  ciclomotor: [
    { fromYears: 0, months: null },
    { fromYears: 3, months: 24 },
  ],
};

export const ITV_FREQUENCY_SUMMARY: Record<ItvVehicleType, string> = {
  turismo: "Exento hasta 4 años · cada 2 años de 4 a 10 · cada año a partir de 10",
  furgoneta:
    "Exenta hasta 2 años · cada 2 años de 2 a 6 · cada año de 6 a 10 · cada 6 meses a partir de 10",
  motocicleta: "Exenta hasta 4 años · cada 2 años a partir de 4",
  ciclomotor: "Exento hasta 3 años · cada 2 años a partir de 3",
};

export function parseIsoDate(value: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;
  const [, y, m, d] = match.map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.getUTCMonth() === m - 1 ? date : null;
}

export function addMonths(date: Date, months: number): Date {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + months;
  const day = date.getUTCDate();
  const lastDay = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  return new Date(Date.UTC(year, month, Math.min(day, lastDay)));
}

export function fullYearsBetween(from: Date, to: Date): number {
  let years = to.getUTCFullYear() - from.getUTCFullYear();
  if (addMonths(from, years * 12) > to) years -= 1;
  return years;
}

function intervalAt(type: ItvVehicleType, ageYears: number): number | null {
  let months: number | null = null;
  for (const band of ITV_FREQUENCIES[type]) {
    if (ageYears >= band.fromYears) months = band.months;
  }
  return months;
}

function firstInspectionYears(type: ItvVehicleType): number {
  return ITV_FREQUENCIES[type].find((band) => band.months !== null)!.fromYears;
}

export type ItvSchedule = {
  ageYears: number;
  currentIntervalMonths: number | null;
  nextDue: Date;
  earliestWithoutLosingDate: Date;
  daysUntilDue: number;
  basis: "registration" | "last-inspection";
};

const DAY_MS = 24 * 60 * 60 * 1000;

export function calculateItvSchedule({
  type,
  registration,
  lastInspection,
  today,
}: {
  type: ItvVehicleType;
  registration: Date;
  lastInspection?: Date | null;
  today: Date;
}): ItvSchedule {
  const ageYears = fullYearsBetween(registration, today);
  let nextDue: Date;
  let basis: ItvSchedule["basis"];

  if (lastInspection) {
    // Art. 6.5: la validez se cuenta desde la fecha de la inspección
    // favorable (salvo adelanto dentro de los 30 días previos al vencimiento).
    const ageAtInspection = fullYearsBetween(registration, lastInspection);
    const months = intervalAt(type, ageAtInspection) ?? 24;
    nextDue = addMonths(lastInspection, months);
    basis = "last-inspection";
  } else {
    // Calendario teórico desde la matriculación, suponiendo que cada
    // inspección se pasó en su fecha.
    nextDue = addMonths(registration, firstInspectionYears(type) * 12);
    while (nextDue < today) {
      const age = fullYearsBetween(registration, nextDue);
      nextDue = addMonths(nextDue, intervalAt(type, age) ?? 24);
    }
    basis = "registration";
  }

  return {
    ageYears,
    currentIntervalMonths: intervalAt(type, ageYears),
    nextDue,
    earliestWithoutLosingDate: new Date(nextDue.getTime() - 30 * DAY_MS),
    daysUntilDue: Math.round((nextDue.getTime() - today.getTime()) / DAY_MS),
    basis,
  };
}
