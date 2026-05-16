import './App.css';
import Identity from './components/landing/Identity';
import Navbar from './components/landing/Navbar';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Gallery from './pages/Gallery';
import Projects from './pages/Projects';

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet/>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Identity />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='gallery/:pageId' element={<Projects />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
