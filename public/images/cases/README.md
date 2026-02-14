# 案例配图说明

当前案例页使用 [Lorem Picsum](https://picsum.photos) 的占位图（免费、可商用）。若要替换为与业务更贴合的实图，可按以下步骤操作。

## 1. 下载图片

从以下**免费可商用**图库按主题搜索，下载后按案例 id 命名（如 `1.jpg`、`2.jpg`）保存到本目录 `public/images/cases/`。

### 推荐图库（免注册或可免费使用）

- **Unsplash**（免注册，可商用）：https://unsplash.com  
- **Pexels**（免注册，可商用）：https://www.pexels.com  
- **Pixabay**（免注册，可商用）：https://pixabay.com  

### 按行业/场景的搜索关键词建议

| 案例类型/行业 | 搜索关键词（英文） |
|---------------|--------------------|
| 电商/零售     | ecommerce, retail, shopping, store, warehouse |
| 餐饮/生活服务 | restaurant, cafe, food delivery, tea shop |
| 教育/培训     | education, online learning, classroom, training |
| 企业/办公     | office, teamwork, business, meeting, corporate |
| 网站/品牌     | website, brand, digital, laptop |
| APP/小程序    | mobile app, smartphone, dashboard |
| AI/智能       | AI, technology, data, automation |

### 直接搜索链接（Unsplash）

- 电商：https://unsplash.com/s/photos/ecommerce  
- 餐饮/茶饮：https://unsplash.com/s/photos/restaurant-cafe  
- 教育：https://unsplash.com/s/photos/education  
- 企业办公：https://unsplash.com/s/photos/office-team  
- 科技/数字：https://unsplash.com/s/photos/digital-technology  

### 直接搜索链接（Pexels）

- 电商：https://www.pexels.com/search/ecommerce/  
- 餐饮：https://www.pexels.com/search/restaurant/  
- 教育：https://www.pexels.com/search/education/  
- 办公：https://www.pexels.com/search/office/  

## 2. 文件命名与放置

- 将下载的图片按**案例 id** 命名，例如：`1.jpg`、`2.jpg`、…、`22.jpg`。
- 放在本目录下，即项目中的 `public/images/cases/`。
- 支持格式：`.jpg`、`.jpeg`、`.png`、`.webp`。

## 3. 在数据中启用本地图

在 `components/cases/casesData.ts` 的 `CASES_LIST` 里，给对应案例加上 `image` 字段即可，例如：

```ts
{
  id: "1",
  title: "某家居品牌全渠道数字化",
  // ...
  image: "/images/cases/1.jpg",  // 添加这一行，该案例即显示本地图
},
```

未设置 `image` 的案例会继续使用 Picsum 占位图。

## 4. 案例 id 与主题对应（便于选图）

| id | 标题概要           | 建议配图主题     |
|----|--------------------|------------------|
| 1  | 家居全渠道         | 电商/零售/门店   |
| 2  | 连锁茶饮           | 茶饮/餐饮        |
| 3  | 协同办公           | 办公/团队        |
| 4  | 品牌官网           | 网站/品牌        |
| 5  | 智慧旅游           | 旅游/文旅        |
| 6  | 企业协同 APP       | 移动办公/APP     |
| 7  | 职业培训           | 教育/培训        |
| 8  | 智能推荐与补货     | 电商/AI/数据     |
| 9  | 美妆独立站         | 美妆/电商        |
| 10 | 生鲜前置仓         | 生鲜/仓储/配送   |
| 11 | K12 教培           | 教育/K12         |
| 12 | 连锁餐饮           | 餐饮/多门店      |
| 13 | 制造移动办公       | 制造/办公        |
| 14 | 知识付费训练营     | 教育/在线学习    |
| 15 | 地产官网           | 地产/建筑        |
| 16 | 餐饮外卖到店       | 餐饮/外卖        |
| 17 | 跨境电商           | 电商/跨境        |
| 18 | 集团门户 SSO       | 企业/安全/IT     |
| 19 | 健身瑜伽预约       | 健身/生活服务    |
| 20 | AI 客服            | AI/客服/科技     |
| 21 | SaaS 官网文档      | 产品/文档/科技   |
| 22 | 本地生活平台       | 生活服务/多商户  |

下载好图片并按上述方式命名、放置，再在 `casesData.ts` 中为对应案例添加 `image: "/images/cases/xx.jpg"` 即可生效。
