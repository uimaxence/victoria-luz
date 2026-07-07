'use client';

import { useEffect, useState, type ReactNode } from 'react';

/**
 * Enveloppe une galerie de visuels sensibles (ex. photos de reconstruction).
 * Par défaut, le contenu est flouté et masqué derrière un voile + avertissement.
 * L'affichage est explicite (clic), jamais au survol ni automatique, et mémorisé
 * pour la session (sessionStorage) : une fois affiché, on ne re-clique pas à
 * chaque image. Accessible au clavier ; le flou par défaut est aussi le rendu SSR.
 */
export default function SensitiveReveal({
  children,
  storageKey = 'vl-sensitive-revealed',
  note = 'Contenu sensible.',
  cta = 'Afficher les photos',
}: {
  children: ReactNode;
  storageKey?: string;
  note?: string;
  cta?: string;
}) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(storageKey) === '1') setRevealed(true);
    } catch {
      /* sessionStorage indisponible : on reste sur l'état masqué par défaut. */
    }
  }, [storageKey]);

  const reveal = () => {
    setRevealed(true);
    try {
      sessionStorage.setItem(storageKey, '1');
    } catch {
      /* ignore */
    }
  };

  const hide = () => {
    setRevealed(false);
    try {
      sessionStorage.removeItem(storageKey);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="relative">
      <div
        className={`transition-[filter] duration-[var(--dur-2)] ease-soft ${
          revealed ? '' : 'pointer-events-none select-none blur-2xl'
        }`}
        aria-hidden={!revealed}
      >
        {children}
      </div>

      {!revealed && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-token bg-nude/90 p-6 text-center backdrop-blur-md">
          <div className="max-w-sm">
            <span
              aria-hidden
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-creme text-chocolat ring-1 ring-line"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
                <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
              </svg>
            </span>
            <p className="mt-4 text-body text-text">{note}</p>
            <button
              type="button"
              onClick={reveal}
              className="mt-5 inline-flex items-center justify-center rounded-token bg-chocolat px-6 py-3 text-small font-medium text-creme transition-colors duration-[var(--dur-1)] ease-soft hover:bg-marron"
            >
              {cta}
            </button>
          </div>
        </div>
      )}

      {revealed && (
        <button
          type="button"
          onClick={hide}
          className="mt-4 inline-flex items-center gap-1.5 text-small font-medium text-text-muted underline-offset-4 transition-colors duration-[var(--dur-1)] ease-soft hover:text-chocolat hover:underline"
        >
          Masquer les photos
        </button>
      )}
    </div>
  );
}
