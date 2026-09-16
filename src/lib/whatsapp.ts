import { site } from "./content";

/** Bangun link WhatsApp dengan pesan opsional yang sudah terisi. */
export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export { site };
