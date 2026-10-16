/**
 * Contact Configuration
 * 
 * IMPORTANT: Replace these placeholder values with real contact details
 * TODO: Update before deployment
 */

export const CONTACT_CONFIG = {
  // WhatsApp contact - using direct phone number
  whatsapp: {
    url: "https://wa.me/601121103890",
    qrUrl: "https://wa.me/qr/OBAPKC5ERBB7K1", // Fallback QR link
    qrImage: "/images/whatsapp-qr.png",
    displayText: "WhatsApp",
  },

  // Phone contact
  phone: {
    number: "+60 11-2110 3890",
    tel: "+601121103890",
  },

  // WeChat contact
  wechat: {
    id: "P0refect", // Capital P, zero, 'refect'
    qrImage: "/images/wechat-qr.png",
  },

  // Optional: Email notification for consultation form
  // Set NOTIFICATION_EMAIL in .env.local to receive form submissions
  email: process.env.NOTIFICATION_EMAIL || "",

  // Optional: Telegram notification
  // Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env.local
  telegram: {
    botToken: process.env.TELEGRAM_BOT_TOKEN || "",
    chatId: process.env.TELEGRAM_CHAT_ID || "",
  },

  // Developer info
  developer: {
    nameZh: "极造极",
    nameEn: "Jizaoji",
    experienceYears: 10,
    experienceSince: 2017,
    locationZh: "吉隆坡",
    locationEn: "Kuala Lumpur",
    languages: ["中文", "English"],
    stack: ["React", "Next.js", "Vue", "微信小程序"],
  },
} as const;
