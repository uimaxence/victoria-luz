'use client';

import { useRef, useState } from 'react';
import { SITE } from '@/lib/site';

/**
 * Formulaire de demande de tatouage (design.md §6 pour les contrôles).
 * Cinq sections numérotées dans la grille éditoriale, champs en filet
 * (border-b), envoi par FormSubmit vers l'e-mail du studio, redirection
 * vers /demande-tatouage/merci.
 */

const TATTOO_TYPES = ['Typographie / écriture', 'Floral', 'Ornemental', 'Autre'] as const;

/** Styles partagés des champs : filet bas, fond transparent, focus chocolat. */
const field =
  'w-full rounded-none border-0 border-b border-line bg-transparent py-3 font-sans text-body text-chocolat placeholder:text-text-muted transition-colors duration-[var(--dur-1)] ease-soft focus:border-chocolat focus:outline-none';

const labelCls = 't-surtitre block';

export default function TattooRequestForm() {
  const [size, setSize] = useState(8);
  const [files, setFiles] = useState<string[]>([]);
  const [sending, setSending] = useState(false);
  const nextRef = useRef<HTMLInputElement>(null);
  const replyToRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  /** Complète les champs cachés dépendants du navigateur avant l'envoi natif. */
  const handleSubmit = () => {
    if (nextRef.current) {
      nextRef.current.value = `${window.location.origin}/demande-tatouage/merci`;
    }
    if (replyToRef.current && emailRef.current) {
      replyToRef.current.value = emailRef.current.value;
    }
    setSending(true);
  };

  return (
    <form
      action={`https://formsubmit.co/${SITE.email}`}
      method="POST"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      className="space-y-16 md:space-y-20"
    >
      {/* ---- Configuration FormSubmit (champs cachés) ---- */}
      <input type="hidden" name="_subject" value="Nouvelle demande de tatouage · victoria-luz.fr" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" ref={nextRef} value="https://victoria-luz.fr/demande-tatouage/merci" />
      <input type="hidden" name="_replyto" ref={replyToRef} value="" />
      {/* Piège anti-spam : champ invisible, ignoré par les humains. */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      {/* ---- 01 · Faisons connaissance ---- */}
      <FormSection num="01" title="Faisons connaissance">
        <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
          <div>
            <label htmlFor="prenom" className={labelCls}>
              Prénom *
            </label>
            <input id="prenom" name="Prénom" type="text" required autoComplete="given-name" className={field} placeholder="Votre prénom" />
          </div>
          <div>
            <label htmlFor="nom" className={labelCls}>
              Nom *
            </label>
            <input id="nom" name="Nom" type="text" required autoComplete="family-name" className={field} placeholder="Votre nom" />
          </div>
          <div>
            <label htmlFor="naissance" className={labelCls}>
              Date de naissance *
            </label>
            <input id="naissance" name="Date de naissance" type="date" required autoComplete="bday" className={field} />
          </div>
          <div>
            <label htmlFor="telephone" className={labelCls}>
              Téléphone *
            </label>
            <input id="telephone" name="Téléphone" type="tel" required autoComplete="tel" className={field} placeholder="06 00 00 00 00" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className={labelCls}>
              E-mail *
            </label>
            <input id="email" name="E-mail" type="email" required autoComplete="email" ref={emailRef} className={field} placeholder="vous@exemple.fr" />
          </div>
        </div>
      </FormSection>

      {/* ---- 02 · Vos disponibilités ---- */}
      <FormSection
        num="02"
        title="Vos disponibilités"
        hint="Facultatif : cela m'aide à vous proposer un créneau plus rapidement."
      >
        <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
          <div>
            <label htmlFor="date-ideale" className={labelCls}>
              Date idéale
            </label>
            <input id="date-ideale" name="Date idéale" type="date" className={field} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="disponibilites" className={labelCls}>
              Vos disponibilités
            </label>
            <textarea
              id="disponibilites"
              name="Disponibilités"
              rows={3}
              className={`${field} resize-y`}
              placeholder="Soirs de semaine, week-ends, périodes de vacances…"
            />
          </div>
        </div>
      </FormSection>

      {/* ---- 03 · Le tatouage ---- */}
      <FormSection num="03" title="Le tatouage">
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <div className="flex items-baseline justify-between gap-4">
              <label htmlFor="taille" className={labelCls}>
                Taille approximative *
              </label>
              <span className="font-display text-h3 text-chocolat" aria-hidden>
                {size} cm
              </span>
            </div>
            <input
              id="taille"
              name="Taille approximative (cm)"
              type="range"
              min={1}
              max={40}
              step={1}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="vl-range mt-6"
              aria-valuetext={`${size} centimètres`}
            />
            <div className="mt-2 flex justify-between text-caption text-text-muted">
              <span>1 cm</span>
              <span>40 cm</span>
            </div>
          </div>
          <div>
            <label htmlFor="type" className={labelCls}>
              Type de tatouage *
            </label>
            <div className="relative">
              <select id="type" name="Type de tatouage" required defaultValue="" className={`${field} appearance-none pr-8`}>
                <option value="" disabled>
                  Choisir un type
                </option>
                {TATTOO_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <span aria-hidden className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-text-muted">
                ↓
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="style" className={labelCls}>
              Précisez votre style
            </label>
            <input id="style" name="Style précisé" type="text" className={field} placeholder="Trait fin, dotwork, inspiration précise…" />
          </div>
        </div>
      </FormSection>

      {/* ---- 04 · Votre idée ---- */}
      <FormSection num="04" title="Votre idée">
        <div className="space-y-10">
          <div>
            <label htmlFor="idee" className={labelCls}>
              Décrivez votre idée *
            </label>
            <textarea
              id="idee"
              name="Description du projet"
              rows={6}
              required
              className={`${field} resize-y`}
              placeholder="Le motif, l'emplacement envisagé, ce que ce tatouage représente pour vous…"
            />
          </div>
          <div>
            <span className={labelCls}>Photos d&rsquo;inspiration</span>
            <label
              htmlFor="photos"
              className="mt-4 flex cursor-pointer flex-col items-start gap-2 rounded-token border border-dashed border-line bg-creme/60 px-6 py-8 transition-colors duration-[var(--dur-1)] ease-soft hover:border-chocolat"
            >
              <span className="text-body text-chocolat">Ajouter des images</span>
              <span className="text-small text-text-muted">
                JPG ou PNG · plusieurs fichiers possibles
              </span>
              {files.length > 0 && (
                <span className="mt-2 text-small text-chocolat">
                  {files.length} fichier{files.length > 1 ? 's' : ''} : {files.join(', ')}
                </span>
              )}
            </label>
            <input
              id="photos"
              name="attachment"
              type="file"
              accept="image/jpeg,image/png"
              multiple
              className="sr-only"
              onChange={(e) => setFiles(Array.from(e.target.files ?? []).map((f) => f.name))}
            />
          </div>
        </div>
      </FormSection>

      {/* ---- 05 · Encore deux choses ---- */}
      <FormSection num="05" title="Encore deux choses">
        <div className="space-y-5">
          <CheckRow name="Premier tatouage" label="C'est mon premier tatouage" />
          <CheckRow name="Certifie être majeur(e)" label="Je certifie être majeur(e) *" required />
          <CheckRow
            name="Consentement contact"
            label="J'accepte que mes informations soient utilisées pour me recontacter au sujet de ma demande. *"
            required
          />
        </div>

        <div className="mt-12">
          <button
            type="submit"
            disabled={sending}
            className="group inline-flex items-center gap-3 whitespace-nowrap rounded-token bg-accent px-5 py-3 font-sans text-small uppercase tracking-[0.12em] text-chocolat transition-all duration-[var(--dur-1)] ease-soft hover:bg-chocolat hover:text-creme disabled:cursor-wait disabled:opacity-60 sm:px-6 sm:tracking-[0.16em]"
          >
            <span>{sending ? 'Envoi en cours…' : 'Envoyer ma demande'}</span>
            <span aria-hidden className="inline-block transition-transform duration-[var(--dur-1)] ease-soft group-hover:translate-x-1">
              →
            </span>
          </button>
          <p className="mt-5 max-w-[48ch] text-small text-text-muted">
            Je reviens vers vous au plus vite avec un lien pour réserver votre rendez-vous.
          </p>
        </div>
      </FormSection>
    </form>
  );
}

/** Section numérotée : numéro + titre à gauche, champs à droite (grille 12). */
function FormSection({
  num,
  title,
  hint,
  children,
}: {
  num: string;
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="grid-12 gap-y-6 border-t border-line pt-8">
      <legend className="sr-only">{title}</legend>
      <div className="col-span-12 md:col-span-4">
        <p aria-hidden className="t-surtitre">
          {num}
        </p>
        <p aria-hidden className="mt-2 font-display text-h3 text-chocolat">
          {title}
        </p>
        {hint && <p className="mt-3 max-w-[32ch] text-small text-text-muted">{hint}</p>}
      </div>
      <div className="col-span-12 md:col-span-7 md:col-start-6">{children}</div>
    </fieldset>
  );
}

/** Case à cocher : contrôle natif teinté accent, libellé cliquable. */
function CheckRow({ name, label, required = false }: { name: string; label: string; required?: boolean }) {
  return (
    <label className="flex cursor-pointer items-start gap-4">
      <input
        type="checkbox"
        name={name}
        value="Oui"
        required={required}
        className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-[var(--marron)]"
      />
      <span className="text-body text-chocolat">{label}</span>
    </label>
  );
}
