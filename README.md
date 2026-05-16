# AudioSphere 声音 AI 社区平台

AudioSphere 是一个面向声音 AI 的静态前端原型，目标是把任务导航、数据集、模型、开源仓库、教程、论文、行业资讯、国产化适配、数据工坊和用户中心组织成一个统一入口。

当前项目基于 **React + Vite + TypeScript + Tailwind CSS** 实现，数据全部来自本地 mock data，可直接构建并部署到 GitHub Pages。

## 当前功能

- 首页工作台：知识库问答入口、常见问题、个人资源统计、教程列表、数据集列表、行业资讯、任务入口和最新论文。
- 任务导航：覆盖 ASR、TTS、声音克隆、声纹识别、音频增强、声源分离、音频分类、音乐生成、音频大模型等方向。
- 独立资源入口：数据集、模型、开源仓库分别作为一级页面，支持左侧标签筛选和双列紧凑列表。
- 资源详情页：支持 `/datasets/:id`、`/models/:id`、`/repositories/:id`，展示介绍、标签、统计、使用方式、指标、关联教程/论文和快捷操作。
- 学习中心：按难度、任务、教学形式、国产化/国际化筛选教程，展示学习路线和学习进度。
- 论文库：按 ASR、TTS、降噪、分类、声音克隆、多模态等任务分类浏览论文。
- 行业资讯：报道式资讯页面，包含左侧图文报道流和右侧热门资讯。
- 国产化全栈适配专区：展示智算底座矩阵、硬件/框架/任务/合规筛选、沉浸式瀑布流方案卡、国产化成熟度、性能雷达、TCO、生态地图、国产音频芯片墙和安全合规优势。
- 音频数据工坊：模拟选择数据集、第三方链接、预处理方法和参数，执行 mock 任务并下载结果。
- 在线 Demo：ASR、TTS、降噪对比的前端 mock 体验。
- 用户中心：静态展示个人资料、学习进度、浏览历史、收藏夹、项目贡献、订阅和设置。

## 路由结构

```text
/                         首页
/tasks                    任务导航
/tasks/:slug              任务详情
/datasets                 数据集列表
/datasets/:id             数据集详情
/models                   模型列表
/models/:id               模型详情
/repositories             开源仓库列表
/repositories/:id         开源仓库详情
/tutorials                学习中心
/papers                   论文库
/news                     行业资讯
/localization             国产化全栈适配专区
/workshop                 音频数据工坊
/demos                    在线 Demo
/trends                   趋势观察
/community                社区入口
/user                     用户中心
```

## Mock 边界

已实现的是完整前端原型，不包含真实后端：

- 所有内容来自 `src/data/*.ts` 本地 mock 数据。
- 首页知识库问答会请求 `POST /api/knowledge-chat`，当前仅预留接口，未实现后端。
- Demo、数据工坊、收藏、下载、快速克隆、导出部署清单等操作均为前端展示态。
- 用户中心为静态 mock，不包含真实登录、权限、数据库或持久化。
- 资源外部主页、镜像仓库、政策咨询等入口为占位。

## 技术栈

- React
- Vite
- TypeScript
- Tailwind CSS
- React Router
- Lucide React Icons

## 本地运行

```bash
npm install
npm run dev
```

默认开发地址通常为：

```text
http://localhost:5173/
```

如果端口被占用，Vite 会自动切换到下一个可用端口。

## 类型检查与构建

```bash
npm run typecheck
npm run build
```

构建产物输出到 `dist/`。构建脚本会复制：

```text
dist/index.html -> dist/404.html
```

用于兼容 GitHub Pages 上 SPA 子路由直接访问和刷新。

## GitHub Pages 部署

项目已包含 `.github/workflows/deploy.yml`。推送到 `main` 后，GitHub Actions 会执行：

```bash
npm install
VITE_BASE_PATH=/${{ github.event.repository.name }}/ npm run build
```

然后上传 `dist/` 到 GitHub Pages。

仓库 Pages 设置建议：

1. 进入 GitHub 仓库 `Settings -> Pages`
2. `Build and deployment` 选择 `GitHub Actions`
3. 推送 `main` 分支等待 Actions 完成

访问地址格式：

```text
https://<github-username>.github.io/<repository-name>/
```

如果使用用户根站点或自定义域名，可将 `VITE_BASE_PATH` 调整为 `/`。

## 目录结构

```text
.github/workflows/deploy.yml     GitHub Pages 自动部署
src/components/                  复用 UI 组件
src/data/                        本地 mock 数据
src/pages/                       页面级组件
src/main.tsx                     路由入口
src/index.css                    Tailwind 与全局样式
vite.config.ts                   Vite 配置，支持 VITE_BASE_PATH
```

## 后续可接入能力

- 真实知识库检索：接入后端 RAG、全文检索或向量检索。
- 真实模型推理：为 ASR、TTS、降噪、国产算力实验室接入推理 API。
- 真实账户系统：接入 OAuth、收藏、订阅、投稿、项目管理和学习进度持久化。
- 资源内容工作流：接入 CMS、MDX 或数据库，支持资源审核和版本发布。
- 国产化部署闭环：接入真实镜像仓库、压测服务、硬件队列、TCO 报告导出和信创政策咨询。
