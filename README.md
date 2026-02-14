# 极造极信息科技有限公司 - 官网

Next.js + Tailwind CSS + Prisma + TypeScript，部署于 Vercel，使用 Vercel 提供的免费数据库。

## 环境要求

- Node.js 18+
- 本地仅需一个 `.env` 文件

## 本地开发

1. 复制环境变量：

   ```bash
   cp .env.example .env
   ```

2. 在 `.env` 中填写 `DATABASE_URL`（PostgreSQL 连接串）。  
   部署到 Vercel 时，在项目 **Storage** 中创建并连接数据库后，会自动注入 `DATABASE_URL`，无需在 Vercel 再建 `.env`。

3. 安装依赖并启动：

   ```bash
   npm install
   npm run dev
   ```

4. 打开 [http://localhost:3000](http://localhost:3000)。

## 常用脚本

| 命令 | 说明 |
|------|------|
| `npm run dev` | 本地开发 |
| `npm run build` | 生产构建 |
| `npm run start` | 本地运行生产构建 |
| `npm run db:generate` | 生成 Prisma Client |
| `npm run db:push` | 将 schema 推送到数据库（无迁移文件） |
| `npm run db:migrate` | 执行迁移（开发环境） |
| `npm run db:studio` | 打开 Prisma Studio |

## 项目结构（当前）

```
├── app/
│   ├── layout.tsx      # 根布局与全局 meta
│   ├── page.tsx        # 首页
│   └── globals.css     # 全局样式（Tailwind）
├── lib/
│   └── db.ts           # Prisma 单例（适配 Next 与 Vercel）
├── prisma/
│   └── schema.prisma   # 数据模型
├── .env                # 本地环境变量（仅 DATABASE_URL）
├── .env.example
└── ...
```

页面将按需在 `app/` 下逐个添加。
