import './App.css';

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';

const Home = lazy(() => import('./pages/Home'));
const OceanMap = lazy(() => import('./pages/OceanMap'));
const Donations = lazy(() => import('./pages/Donations'));
const Articles = lazy(() => import('./pages/Articles'));
const NoMatch = lazy(() => import('./pages/NoMatch'));

function App() {
  return (
      <>
          <NavBar />
          <Suspense fallback={<div className='container'>Loading...</div>}>
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/oceanmap" element={<OceanMap />}/>
                  <Route path="/donations" element={<Donations />}/>
                  <Route path="/articles" element={<Articles />}/>
                  <Route path='*' element={<NoMatch />}/>
              </Routes>
          </Suspense>
      </>
  );
}

export default App;
