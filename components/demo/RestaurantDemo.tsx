"use client";

import { useState } from "react";

export function RestaurantDemo() {
  const [locale, setLocale] = useState<"zh" | "en">("zh");
  
  const t = locale === "zh" ? {
    banner: "演示项目",
    name: "香悦轩",
    tagline: "正宗湘菜 · 地道风味",
    cta: "WhatsApp 预约",
    aboutTitle: "关于我们",
    aboutText: "香悦轩坐落于吉隆坡市中心，为您呈现正宗的湘菜风味。我们的厨师团队来自湖南，坚持使用新鲜食材，为您带来地道的湘菜体验。",
    menuTitle: "招牌菜品",
    menu: [
      { name: "剁椒鱼头", desc: "新鲜鱼头配特制剁椒，香辣鲜美", price: "RM 68" },
      { name: "毛氏红烧肉", desc: "肥而不腻，入口即化", price: "RM 42" },
      { name: "小炒黄牛肉", desc: "嫩滑牛肉，辣椒爆炒", price: "RM 38" },
      { name: "口味虾", desc: "鲜活小龙虾，麻辣鲜香", price: "RM 58" },
    ],
    locationTitle: "位置",
    locationText: "Jalan Bukit Bintang, Kuala Lumpur",
    hoursTitle: "营业时间",
    hoursText: "周一至周日 11:00 - 22:00",
  } : {
    banner: "DEMO PROJECT",
    name: "Xiangyue Xuan",
    tagline: "Authentic Hunan Cuisine · Local Flavors",
    cta: "WhatsApp Booking",
    aboutTitle: "About Us",
    aboutText: "Located in the heart of Kuala Lumpur, Xiangyue Xuan brings you authentic Hunan cuisine. Our chefs from Hunan use fresh ingredients to deliver a genuine culinary experience.",
    menuTitle: "Signature Dishes",
    menu: [
      { name: "Chopped Chili Fish Head", desc: "Fresh fish head with special chili, spicy and savory", price: "RM 68" },
      { name: "Mao's Braised Pork", desc: "Tender and rich, melts in your mouth", price: "RM 42" },
      { name: "Stir-fried Beef", desc: "Tender beef with peppers", price: "RM 38" },
      { name: "Spicy Crayfish", desc: "Fresh crayfish, spicy and aromatic", price: "RM 58" },
    ],
    locationTitle: "Location",
    locationText: "Jalan Bukit Bintang, Kuala Lumpur",
    hoursTitle: "Hours",
    hoursText: "Mon - Sun 11:00 - 22:00",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Demo Banner */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 py-2 text-center text-sm font-semibold text-white">
        {t.banner} | DEMO PROJECT
      </div>

      {/* Language Toggle */}
      <div className="fixed right-4 top-16 z-50">
        <button
          onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
          className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm transition hover:bg-white/20"
        >
          {locale === "zh" ? "EN" : "中文"}
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 via-orange-900/30 to-yellow-900/20" />
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-2 backdrop-blur-sm">
            <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z"/>
            </svg>
            <span className="text-sm font-medium">{locale === "zh" ? "正宗湘菜" : "Authentic Hunan"}</span>
          </div>
          <h1 className="mb-4 bg-gradient-to-r from-amber-200 via-orange-200 to-red-200 bg-clip-text text-6xl font-bold text-transparent sm:text-7xl">
            {t.name}
          </h1>
          <p className="mb-8 text-xl text-slate-300 sm:text-2xl">
            {t.tagline}
          </p>
          <a
            href="https://wa.me/60XXXXXXXXX"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {t.cta}
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="border-t border-white/10 bg-slate-900/50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-6 text-center text-4xl font-bold">{t.aboutTitle}</h2>
          <p className="text-center text-lg leading-relaxed text-slate-300">
            {t.aboutText}
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">{t.menuTitle}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.menu.map((dish, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 backdrop-blur-sm transition hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{dish.name}</h3>
                <p className="mb-4 text-sm text-slate-400">{dish.desc}</p>
                <p className="text-2xl font-bold text-amber-400">{dish.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="border-t border-white/10 bg-slate-900/50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-800/50 p-8 backdrop-blur-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">{t.locationTitle}</h3>
              <p className="text-slate-300">{t.locationText}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-800/50 p-8 backdrop-blur-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">{t.hoursTitle}</h3>
              <p className="text-slate-300">{t.hoursText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        <p>{t.banner} | DEMO PROJECT</p>
      </footer>
    </div>
  );
}
