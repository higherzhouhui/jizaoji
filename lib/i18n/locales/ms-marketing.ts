/** Malay marketing copy overrides (merged onto English base in messages.ts). */
import type { Messages } from "@/lib/i18n/messages";

export const msMarketing = {
  a11y: {
    menu: "Buka menu",
    closeMenu: "Tutup menu",
    theme: "Tukar tema",
    language: "Tukar bahasa",
    main: "Kandungan utama",
  },
  themes: {
    label: "Tema",
    night: "Malam",
    day: "Siang",
    gold: "Emas",
    amber: "Ambar",
  },
  footer: {
    blurb: "Satu kerja, siap untuk digunakan. Laman web, program mini, aplikasi mudah alih, alat AI.",
    rights: "Hak cipta terpelihara",
    icp: "渝ICP备2023007595号-2",
  },
  products: {
    website: "Laman web / kedai",
    app: "Aplikasi mudah alih",
    mini: "Program mini WeChat",
    uni: "Satu kod, dua platform",
    ai: "Alat AI",
  },
  solutions: {
    ecom: "Jualan dalam talian",
    edu: "Pendidikan / latihan",
    food: "Kedai / perkhidmatan",
    enterprise: "Dalaman syarikat",
  },
  hero: {
    kicker: "Pembangun full-stack 10 tahun · Kuala Lumpur · dwibahasa · perkhidmatan hujung ke hujung",
    title: "Anda jelaskan apa yang diperlukan.",
    titleEm: "Saya bina,\nkemudian serahkan kepada anda.",
    lede:
      "Laman web, program mini WeChat, aplikasi mudah alih, dan alat AI. Projek sederhana kecil hingga sederhana secara solo: produk → reka bentuk → pembangunan → ujian → deploy → pemantauan. Skop ditulis dahulu, setiap peringkat boleh dilihat, dan masih boleh dihubungi selepas siap.",
    primary: "Ceritakan projek anda",
    secondary: "Lihat hasil orang lain",
    promises: [
      { k: "Ditulis dahulu", v: "Skop jelas, anda setuju, baru mula" },
      { k: "Kelihatan", v: "Setiap peringkat ada sesuatu untuk dibuka" },
      { k: "Boleh dihubungi", v: "WhatsApp dan WeChat" },
    ],
    ticketKicker: "Tiket contoh",
    ticketNo: "00",
    rows: [
      { k: "Pelanggan", v: "Anda yang sedia serahkan kerja" },
      { k: "Hantaran", v: "Perkara dalam pelan" },
      { k: "Penerimaan", v: "Siap apabila anda sahkan" },
      { k: "Kemajuan", v: "Nampak tanpa perlu mengejar" },
      { k: "Selepas siap", v: "Perubahan selepas live masih ada orang" },
    ],
    place: "Kuala Lumpur",
    note: "Tiket contoh untuk tunjuk cara kerja, bukan nombor pesanan sebenar.",
  },
  casesPage: {
    kicker: "Kes",
    title: "Faham apa yang boleh dibantu dan hasilnya",
    lede: "Setiap kes: masalah, hasil, dan satu nombor yang mudah diingat. Terus hubungi selepas baca.",
    empty: "Tiada kes untuk penapis ini. Cuba penapis lain atau ceritakan projek anda.",
    ask: "Saya mahu begini",
  },
  close: {
    index: "06",
    title: "Ada perkara jelas? Boleh mula berbual.",
    lede: "Tak perlu dokumen teknikal. Cerita dengan kata anda sendiri.",
    primary: "Tinggalkan cara hubungi",
    secondary: "Lihat kes dulu",
    chat: "Atau buka sembang di sudut kanan bawah",
  },
} satisfies Partial<Messages>;
