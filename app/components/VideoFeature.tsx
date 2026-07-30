"use client";

import { useState } from "react";
import { EDITORIAL_MEDIA } from "@/lib/editorial-media";

const VIDEO_ID = "2a0H9KnjDcA";

export function VideoFeature() {
  const [hasConsent, setHasConsent] = useState(false);
  const poster = EDITORIAL_MEDIA.battery;

  return (
    <div className="video-feature">
      <div className="video-frame">
        {hasConsent ? (
          <iframe
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
            title="Baterías EFB y AGM, vídeo de Bosch Automóvil"
          />
        ) : (
          <button
            aria-label="Reproducir el vídeo sobre baterías EFB y AGM"
            className="video-consent"
            onClick={() => setHasConsent(true)}
            type="button"
          >
            <picture>
              <source srcSet={poster.avifSrc} type="image/avif" />
              <img
                alt=""
                decoding="async"
                height={poster.height}
                loading="lazy"
                src={poster.src}
                width={poster.width}
              />
            </picture>
            <span className="video-play" aria-hidden="true">
              ▶
            </span>
            <span className="video-consent-copy">
              <strong>Reproducir vídeo</strong>
              <small>YouTube solo se conecta después de pulsar</small>
            </span>
          </button>
        )}
      </div>
      <p className="video-source">
        Vídeo externo: Bosch Automóvil.{" "}
        <a
          href={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          Abrir directamente en YouTube
        </a>
        .
      </p>
    </div>
  );
}
