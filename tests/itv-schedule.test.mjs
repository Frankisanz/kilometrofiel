import assert from "node:assert/strict";
import test from "node:test";
import {
  calculateItvSchedule,
  parseIsoDate as d,
} from "../lib/itv-schedule.ts";

const iso = (date) => date.toISOString().slice(0, 10);

test("a car under four years old has its first ITV at the fourth anniversary", () => {
  const result = calculateItvSchedule({
    type: "turismo",
    registration: d("2023-06-15"),
    today: d("2026-10-11"),
  });
  assert.equal(iso(result.nextDue), "2027-06-15");
  assert.equal(result.currentIntervalMonths, null);
});

test("a car between four and ten years old is inspected every two years", () => {
  const result = calculateItvSchedule({
    type: "turismo",
    registration: d("2020-03-31"),
    today: d("2026-10-11"),
  });
  assert.equal(iso(result.nextDue), "2028-03-31");
  assert.equal(result.currentIntervalMonths, 24);
});

test("a car older than ten years is inspected every year", () => {
  const result = calculateItvSchedule({
    type: "turismo",
    registration: d("2014-05-10"),
    today: d("2026-10-11"),
  });
  assert.equal(iso(result.nextDue), "2027-05-10");
  assert.equal(iso(result.earliestWithoutLosingDate), "2027-04-10");
  assert.equal(result.currentIntervalMonths, 12);
});

test("a late inspection restarts the count from the inspection date", () => {
  const result = calculateItvSchedule({
    type: "turismo",
    registration: d("2012-02-01"),
    lastInspection: d("2025-08-20"),
    today: d("2026-10-11"),
  });
  assert.equal(iso(result.nextDue), "2026-08-20");
  assert.ok(result.daysUntilDue < 0);
});

test("light vans over ten years old are inspected every six months", () => {
  const result = calculateItvSchedule({
    type: "furgoneta",
    registration: d("2015-01-10"),
    lastInspection: d("2026-07-10"),
    today: d("2026-10-11"),
  });
  assert.equal(iso(result.nextDue), "2027-01-10");
  assert.equal(result.currentIntervalMonths, 6);
});

test("rejects impossible calendar dates", () => {
  assert.equal(d("2026-02-30"), null);
  assert.equal(d("11/10/2026"), null);
});
