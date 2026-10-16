# 多语言支持文档 / Multilingual Support Documentation

## 支持的语言 / Supported Languages

| 语言 | Locale Code | Native Name |
|------|------------|-------------|
| 简体中文 | `zh` | 简体中文 |
| 繁體中文 | `zh-Hant` | 繁體中文 |
| English | `en` | English |
| Bahasa Melayu | `ms` | Bahasa Melayu |
| Bahasa Indonesia | `id` | Bahasa Indonesia |
| Thai | `th` | ภาษาไทย |
| Vietnamese | `vi` | Tiếng Việt |
| Japanese | `ja` | 日本語 |
| Korean | `ko` | 한국어 |

## 语言检测规则 / Language Detection Rules

1. **优先级 / Priority**:
   - 用户手动选择（存储在 localStorage）/ Manual selection (stored in localStorage)
   - HTML `data-locale` 属性 / HTML `data-locale` attribute
   - 浏览器语言检测 / Browser language detection

2. **浏览器语言映射 / Browser Language Mapping**:
   ```
   zh-TW, zh-HK, zh-MO → zh-Hant (繁體中文)
   zh-*                → zh (简体中文)
   ms-*                → ms (Bahasa Melayu)
   id-*                → id (Bahasa Indonesia)
   th-*                → th (Thai)
   vi-*                → vi (Vietnamese)
   ja-*                → ja (Japanese)
   ko-*                → ko (Korean)
   en-*, others        → en (English, fallback)
   ```

## 文件结构 / File Structure

```
lib/i18n/
├── locales.ts       # 语言配置、检测逻辑 / Locale config & detection
├── messages.ts      # 翻译字典 / Translation dictionaries
└── inner-en.ts      # 内部页面英文映射 / Internal page English mapping

components/layout/
└── LanguageDropdown.tsx  # 语言选择器组件 / Language selector

scripts/
└── validate-i18n.mjs     # 翻译完整性验证 / Translation validation
```

## 使用方法 / Usage

### 在组件中使用翻译 / Using translations in components

```tsx
import { usePreferences } from "@/lib/preferences";

function MyComponent() {
  const { t, locale } = usePreferences();
  
  return (
    <div>
      <h1>{t.nav.home}</h1>
      <p>Current locale: {locale}</p>
    </div>
  );
}
```

### 处理 Copy 类型数据 / Handling Copy type data

```tsx
import { getCopyLang } from "@/components/cases/casesData";
import { usePreferences } from "@/lib/preferences";

function CaseCard({ item }: { item: CaseItem }) {
  const { locale } = usePreferences();
  const lang = getCopyLang(locale); // 返回 "zh" | "en"
  
  return <p>{item.description[lang]}</p>;
}
```

### 验证翻译完整性 / Validating translation completeness

```bash
# 运行验证脚本
node scripts/validate-i18n.mjs

# 预期输出 / Expected output:
# ✅ zh-Hant: All keys present
# ✅ en: All keys present
# ⚠️  ms: 245 extra keys (not in base)
# ... (使用英文回退的语言会显示警告，这是正常的)
```

## SEO 支持 / SEO Support

### HTML Lang 属性 / HTML Lang Attribute

自动设置 `<html lang="...">`:
- `zh` → `zh-CN`
- `zh-Hant` → `zh-TW`
- `en` → `en`
- `ms` → `ms`
- 等等...

### Hreflang 链接 / Hreflang Links

所有页面自动生成 hreflang 替代链接:

```html
<link rel="alternate" hreflang="zh-CN" href="https://jizaoji.top" />
<link rel="alternate" hreflang="zh-TW" href="https://jizaoji.top" />
<link rel="alternate" hreflang="en" href="https://jizaoji.top" />
<!-- ... 其他语言 -->
```

## 翻译策略 / Translation Strategy

### 当前状态 / Current State

- ✅ **完整翻译 / Complete**: `zh` (简体中文), `en` (English)
- ✅ **核心翻译 / Core**: `zh-Hant` (繁體中文) - 基于简体修改
- ⚠️ **基础翻译 / Basic**: `ms`, `id`, `th`, `vi`, `ja`, `ko` - 关键 UI 元素已翻译，内容密集部分使用英文回退

### 后续改进 / Future Improvements

1. **专业翻译审核 / Professional Translation Review**
   - 建议由母语译者审核和完善各语言翻译
   - 特别是内容密集的页面（关于我们、案例详情等）

2. **货币显示本地化 / Currency Display Localization**
   ```tsx
   // 根据语言优先显示对应货币
   {prefersRM(locale) ? "RM 5,000 / ¥8,000" : "¥8,000 / RM 5,000"}
   ```

3. **URL 本地化 / URL Localization**
   - 当前: 所有语言共享 URL (如 `/about`)
   - 未来: 可实现路径本地化 (如 `/en/about`, `/ms/tentang`)

## 测试 / Testing

### 本地测试不同语言 / Testing different languages locally

1. **浏览器开发工具 / Browser DevTools**:
   ```javascript
   // 在 Console 中修改 localStorage
   localStorage.setItem('jzj-locale', 'ms'); // Bahasa Melayu
   location.reload();
   ```

2. **浏览器语言设置 / Browser Language Settings**:
   - Chrome: Settings → Languages → Add Language
   - Firefox: Preferences → Language → Choose
   - 将目标语言移到顶部并刷新页面

3. **命令行测试 / Command Line Testing**:
   ```bash
   # 使用 curl 测试不同 Accept-Language
   curl -H "Accept-Language: ms" http://localhost:3000
   curl -H "Accept-Language: zh-TW" http://localhost:3000
   ```

## 常见问题 / FAQ

### Q: 为什么有些语言显示英文内容？
A: 部分语言使用英文作为内容密集部分的回退。这是标准的国际化策略，可以后续迭代补充完整翻译。

### Q: 如何添加新的翻译内容？
A: 编辑 `lib/i18n/messages.ts`，在对应语言的对象中添加新的翻译键值对。

### Q: 翻译键不完整会报错吗？
A: 开发环境下可能会有 TypeScript 类型错误。运行 `node scripts/validate-i18n.mjs` 检查完整性。

### Q: 如何修改语言检测逻辑？
A: 编辑 `lib/i18n/locales.ts` 中的 `detectLocale()` 函数。

## 贡献 / Contributing

欢迎提交翻译改进！特别是：
- 母语译者的翻译审核和修正
- 新语言支持
- 翻译工具和自动化脚本

---

**Translations welcome!** Native speakers are encouraged to review and improve translations, especially for `ms`, `id`, `th`, `vi`, `ja`, and `ko`.
