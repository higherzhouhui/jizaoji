import type { Messages } from "@/lib/i18n/messages";

export const idMarketing = {
  products: {
    website: "Website / toko online",
    app: "Aplikasi mobile",
    mini: "Program mini WeChat",
    uni: "Satu kode, banyak platform",
    ai: "Alat AI",
  },
  solutions: {
    ecom: "Jualan online",
    edu: "Pendidikan / pelatihan",
    food: "Toko / layanan lokal",
    enterprise: "Internal perusahaan",
  },
} satisfies Partial<Messages>;
