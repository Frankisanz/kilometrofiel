import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Información sobre cookies, almacenamiento local, verificación de AdSense y funcionamiento PWA de Kilómetro Fiel.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Almacenamiento y navegador"
        title="Política de cookies"
        description="Transparencia sobre almacenamiento, script de verificación de Google AdSense y gestión de cookies."
        breadcrumbs={[{ label: "Cookies" }]}
      />
      <div className="site-shell legal-layout">
        <section>
          <p>
            <strong>Última actualización:</strong> 21 de agosto de 2026.
          </p>

          <h2>1. Situación actual y Google AdSense</h2>
          <p className="answer-box">
            El script oficial de Google AdSense está incorporado en la cabecera
            de la web con el propósito exclusivo de verificación de titularidad,
            revisión técnica del dominio por parte de Google y preparación de la
            infraestructura. Actualmente <strong>no se muestran anuncios</strong>,
            no están activos los anuncios automáticos ni se insertan banners en
            el contenido.
          </p>
          <p>
            Mientras la publicidad no se encuentre activa, Kilómetro Fiel no
            utiliza cookies de perfilado ni genera identificadores publicitarios
            para mostrar anuncios a los usuarios en su propio dominio.
          </p>

          <h2>2. Plataforma de consentimiento (CMP) previa a la activación</h2>
          <p>
            Antes de activar la difusión de anuncios y la publicidad
            personalizada dirigida a usuarios del Espacio Económico Europeo
            (EEE) y del Reino Unido, Kilómetro Fiel integrará una solución de
            gestión de consentimiento (CMP) certificada por Google y alineada con
            el estándar IAB TCF (Transparency and Consent Framework).
          </p>
          <p>
            Dicho mecanismo permitirá a los visitantes aceptar, rechazar o
            configurar libremente el tratamiento de cookies e identificadores
            publicitarios con opciones equivalentes, conforme a las directrices
            de la{" "}
            <a
              href="https://www.aepd.es/guias/guia-cookies.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              Agencia Española de Protección de Datos (AEPD)
            </a>{" "}
            y el Reglamento General de Protección de Datos (RGPD).
          </p>

          <h2>3. PWA y caché sin conexión</h2>
          <p>
            La web puede instalarse como aplicación web progresiva (PWA). Su
            service worker guarda recursos estáticos públicos y páginas
            visitadas en la caché del navegador para mejorar el rendimiento y
            permitir la consulta sin conexión. Esta caché no crea perfiles de
            usuario ni contiene identificadores de seguimiento publicitario, y
            puede eliminarse desde los ajustes del navegador.
          </p>

          <h2>4. Enlaces a terceros y afiliación</h2>
          <p>
            Determinados enlaces dirigen a comercios externos, como Amazon.
            Hacer clic en un enlace de afiliado no instala cookies de ese
            tercero en kilometrofiel.es; al acceder a la plataforma externa se
            aplican su propia política de privacidad y sus herramientas de
            consentimiento. Todos los enlaces comerciales están debidamente
            identificados.
          </p>

          <h2>5. Vídeos externos bajo demanda</h2>
          <p>
            La portada incluye un vídeo técnico alojado en YouTube. La web no
            carga el reproductor ni conecta con los servidores de YouTube de
            forma automática al entrar. Solo se establece la conexión cuando
            pulsas expresamente «Reproducir vídeo», momento en el que se aplican
            las políticas y opciones de consentimiento de Google y YouTube.
          </p>

          <h2>6. Cómo gestionar o revocar el almacenamiento</h2>
          <p>
            Puedes restringir, bloquear o eliminar las cookies y los datos de
            sitio en cualquier momento mediante la configuración de tu
            navegador web (Chrome, Firefox, Safari, Edge, etc.). La eliminación
            de los datos locales del navegador no impedirá la navegación por los
            contenidos abiertos de Kilómetro Fiel.
          </p>
        </section>
      </div>
    </>
  );
}
