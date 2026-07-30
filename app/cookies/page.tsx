import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Información sobre cookies, almacenamiento local y funcionamiento PWA de Kilómetro Fiel.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Almacenamiento y navegador"
        title="Política de cookies"
        description="Actualmente no usamos cookies publicitarias ni de analítica en Kilómetro Fiel."
        breadcrumbs={[{ label: "Cookies" }]}
      />
      <div className="site-shell legal-layout">
        <section>
          <p>
            <strong>Última actualización:</strong> 30 de julio de 2026.
          </p>

          <h2>1. Situación actual</h2>
          <p className="answer-box">
            Kilómetro Fiel no instala actualmente cookies de analítica,
            personalización publicitaria ni seguimiento de afiliación en su
            propio dominio. Por ello no mostramos un panel de consentimiento
            para categorías que todavía no existen.
          </p>

          <h2>2. PWA y caché sin conexión</h2>
          <p>
            La web puede instalarse como aplicación. Su service worker guarda
            archivos públicos y páginas visitadas en la caché del navegador
            para mejorar la velocidad y ofrecer una pantalla sin conexión. Esta
            caché no crea un perfil, no contiene un identificador publicitario y
            puede borrarse desde los ajustes del navegador o desinstalando la
            aplicación.
          </p>

          <h2>3. Enlaces a terceros</h2>
          <p>
            Algunos enlaces llevan a sitios externos, incluida Amazon. Pulsar
            el enlace no instala una cookie de ese tercero en
            kilometrofiel.es; al llegar al sitio externo se aplican su política
            y sus opciones de consentimiento. Los enlaces de afiliado se
            identifican antes de salir de esta web.
          </p>

          <h2>4. Vídeos externos bajo demanda</h2>
          <p>
            La portada incluye un vídeo técnico alojado en YouTube. La web no
            descarga el reproductor ni contacta con YouTube al abrir la página.
            Solo se crea la conexión cuando pulsas expresamente
            «Reproducir vídeo». A partir de ese momento se aplican las políticas
            de Google y YouTube, que pueden tratar datos técnicos, usar
            almacenamiento del navegador o solicitar tus preferencias de
            consentimiento.
          </p>

          <h2>5. Cómo controlar el almacenamiento</h2>
          <p>
            Puedes borrar cookies, datos de sitios y caché desde la
            configuración de privacidad de tu navegador. Eliminar la caché de
            la PWA puede hacer que las páginas dejen de estar disponibles sin
            conexión, pero no impide navegar con conexión.
          </p>

          <h2>6. Cambios futuros</h2>
          <p>
            Si incorporamos Google AdSense, analítica u otra tecnología no
            necesaria, actualizaremos esta política e implementaremos el
            mecanismo de consentimiento exigible antes de activarla. Aceptar y
            rechazar deberán ser opciones equivalentes cuando se solicite el
            consentimiento, conforme a la{" "}
            <a
              href="https://www.aepd.es/guias/guia-cookies.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              orientación de la AEPD
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
}
