import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelloWorld, NotFound } from '@myPages/index.ts';
import App from './App.tsx';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="hello-world" element={<HelloWorld />} />
      </Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);
