/**
 * Contact Configuration
 * 
 * IMPORTANT: Replace these placeholder values with real contact details
 * TODO: Update before deployment
 */

export const CONTACT_CONFIG = {
  // WhatsApp contact - using QR link provided by owner
  whatsapp: {
    url: "https://wa.me/qr/OBAPKC5ERBB7K1",
    displayText: "WhatsApp",
  },

  // WeChat contact
  wechat: {
    id: "P0refect", // Capital P, zero, 'refect'
    // TODO: Add WeChat QR code image to /public/images/wechat-qr.png
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
