import type { Messages } from "@/lib/i18n/messages";

export const idMarketing = {
  a11y: {
    menu: "Buka menu",
    closeMenu: "Tutup menu",
    theme: "Ganti tema",
    language: "Ganti bahasa",
    main: "Konten utama",
  },
  themes: {
    label: "Tema",
    night: "Malam",
    day: "Siang",
    gold: "Emas",
    amber: "Amber",
  },
  footer: {
    blurb: "Satu pekerjaan, selesai dan bisa dipakai. Website, program mini, aplikasi mobile, alat AI.",
    rights: "Hak cipta dilindungi",
    icp: "渝ICP备2023007595号-2",
  },
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
