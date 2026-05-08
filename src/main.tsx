import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Community } from './pages/Community';
import { Demos } from './pages/Demos';
import { Home } from './pages/Home';
import { Research } from './pages/Research';
import { Resources } from './pages/Resources';
import { TaskDetail } from './pages/TaskDetail';
import { Tasks } from './pages/Tasks';
import { Trends } from './pages/Trends';
import { Tutorials } from './pages/Tutorials';
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
          <Route path="resources" element={<Resources />} />
          <Route path="demos" element={<Demos />} />
          <Route path="research" element={<Research />} />
          <Route path="trends" element={<Trends />} />
          <Route path="insights" element={<Trends />} />
          <Route path="community" element={<Community />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
