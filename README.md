# AudioSphere 声音 AI 社区 Demo

“声音 AI 的统一入口：让新手看得懂，让研究者找得到，让从业者跟得上。”

这是一个基于 **React + Vite + TypeScript + Tailwind CSS** 的静态演示网站，用本地 mock data 搭建声音 AI 聚合平台 / 社区入口的信息架构、页面骨架、品牌视觉和基础交互。项目可直接部署到 GitHub Pages。

## 当前实现了什么

- 首页：品牌 Hero、任务入口、新手教程、精选资源、在线 Demo、研究资讯、趋势观察、订阅引导。
- 任务：覆盖 ASR、TTS、声音克隆、声纹识别、音频增强、声源分离、音频分类、音乐生成、音频大模型等任务。
- 任务详情：实现 `/tasks/asr`、`/tasks/tts`、`/tasks/audio-enhancement` 三个完整详情示例。
- 教程：按阶段与任务筛选，并支持前端关键词搜索。
- 资源：数据集、模型、论文、Benchmark、工具 Tab 筛选与搜索。
- Demo：在线语音识别、TTS、降噪对比三个 mock 交互卡片。
- 研究：论文速递、开源项目、Benchmark 观察。
- 趋势：方向图谱、专题调研、月度观察、行业趋势卡片。
- 社区：投稿资源、提交 Demo、共建方向、FAQ 占位入口。

## 真实功能与 Mock 边界

### 已实现的真实前端功能

- 多页面路由与导航跳转。
- 响应式布局，优先桌面端并兼容移动端。
- 教程页、资源页前端搜索与标签筛选。
- Demo 页输入、上传占位、音频控件、模拟推理结果展示。
- GitHub Pages 静态构建与自动部署 workflow。

### 当前仍为 Mock / 占位

- 所有数据来自 `src/data/*.ts` 本地结构化 mock data。
- Demo 不调用真实模型服务，结果由前端模拟生成。
- 登录 / 注册、收藏 / 订阅、投稿表单和外链均为占位。
- 搜索为前端过滤，未接后端全文检索或向量检索。

## 技术栈

- React
- Vite
- TypeScript
- Tailwind CSS
- React Router
- Lucide React Icons

## 本地运行命令

```bash
npm install
npm run dev
```

本地开发地址通常为：`http://localhost:5173/`。

## 构建与预览

```bash
npm run build
npm run preview
```

构建产物输出到 `dist/`。构建脚本会复制 `dist/index.html` 为 `dist/404.html`，以兼容 GitHub Pages 上的 SPA 直接访问路由。

## GitHub Pages 部署步骤

推荐仓库名：`aduio-platform` 或 `audio-ai-community`。

1. 将项目推送到 GitHub 仓库。
2. 在 GitHub 仓库中进入 **Settings → Pages**。
3. 在 **Build and deployment** 中选择 **GitHub Actions**。
4. 确认 `.github/workflows/deploy.yml` 已存在。
5. 推送到 `main` 分支后，GitHub Actions 会执行：
   - `npm install`
   - `VITE_BASE_PATH=/${{ github.event.repository.name }}/ npm run build`
   - 上传 `dist/` 到 GitHub Pages

> 说明：当前仓库未提交 `package-lock.json`，因此 workflow 不启用 `actions/setup-node` 的 npm cache；否则 GitHub Actions 会因为找不到 lockfile 报 `Dependencies lock file is not found`。如果你后续在本地成功执行 `npm install` 并提交 `package-lock.json`，可以再把 `cache: npm` 加回 workflow。

6. 部署完成后访问：

```text
https://<your-github-username>.github.io/<repository-name>/
```

如果你使用自定义域名或用户站点根路径，可将 `VITE_BASE_PATH` 调整为 `/`。

## 目录结构

```text
.github/workflows/deploy.yml     # GitHub Pages 自动部署
src/components/                  # 复用 UI 组件
src/data/                        # 本地结构化 mock 数据
src/pages/                       # 页面级组件
src/main.tsx                     # 路由入口
src/index.css                    # Tailwind 与全局样式
vite.config.ts                   # Vite 配置，支持 VITE_BASE_PATH
```

## 后续演进建议

1. **真实 API 层**：新增 `src/services/`，把当前 `src/data/*.ts` 替换成 REST/GraphQL/API SDK 调用。
2. **真实 Demo 服务**：为 ASR/TTS/降噪接入模型推理 API，加入任务队列、轮询、失败重试和结果缓存。
3. **用户系统**：接入 GitHub/OAuth 登录，支持收藏、订阅、提交资源、提交 Demo。
4. **搜索能力**：从前端过滤升级为 Meilisearch/Typesense/Elasticsearch 或向量检索。
5. **内容工作流**：引入 CMS 或 MDX，支持论文解读、教程、趋势报告的版本化发布。
6. **安全与合规**：声音克隆与生成任务加入授权、溯源、水印、滥用检测和内容审核说明。
