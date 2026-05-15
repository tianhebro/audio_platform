import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Community } from './pages/Community';
import { Datasets } from './pages/Datasets';
import { Demos } from './pages/Demos';
import { Home } from './pages/Home';
import { Localization } from './pages/Localization';
import { Models } from './pages/Models';
import { News } from './pages/News';
import { Papers } from './pages/Papers';
import { Repositories } from './pages/Repositories';
import { ResourceDetail } from './pages/ResourceDetail';
import { Research } from './pages/Research';
import { TaskDetail } from './pages/TaskDetail';
import { Tasks } from './pages/Tasks';
import { Trends } from './pages/Trends';
import { Tutorials } from './pages/Tutorials';
import { UserCenter } from './pages/UserCenter';
import { Workshop } from './pages/Workshop';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="tasks/:slug" element={<TaskDetail />} />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="datasets" element={<Datasets />} />
          <Route path="datasets/:id" element={<ResourceDetail kind="dataset" />} />
          <Route path="models" element={<Models />} />
          <Route path="models/:id" element={<ResourceDetail kind="model" />} />
          <Route path="repositories" element={<Repositories />} />
          <Route path="repositories/:id" element={<ResourceDetail kind="repository" />} />
          <Route path="resources" element={<Datasets />} />
          <Route path="localization" element={<Localization />} />
          <Route path="papers" element={<Papers />} />
          <Route path="news" element={<News />} />
          <Route path="workshop" element={<Workshop />} />
          <Route path="demos" element={<Demos />} />
          <Route path="research" element={<Research />} />
          <Route path="trends" element={<Trends />} />
          <Route path="insights" element={<Trends />} />
          <Route path="community" element={<Community />} />
          <Route path="user" element={<UserCenter />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
