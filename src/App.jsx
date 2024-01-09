import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/vans/Vans";
import VanDetail from "./pages/vans/VanDetail";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostedVans from "./pages/host/hosted/HostedVans";
import HostedVanDetail from "./pages/host/hosted/HostedVanDetail";
import HostedVanInfo from "./pages/host/hosted/HostedVanInfo";
import HostedVanPricing from "./pages/host/hosted/HostedVanPricing";
import HostedVanPhotos from "./pages/host/hosted/HostedVanPhotos";
import NotFound from "./pages/NotFound";
import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostedVans />} />
            <Route path="vans/:id" element={<HostedVanDetail />}>
              <Route index element={<HostedVanInfo />} />
              <Route path="pricing" element={<HostedVanPricing />} />
              <Route path="photos" element={<HostedVanPhotos />} />
            </Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
