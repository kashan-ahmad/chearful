import ReactDOM from "react-dom/client";
import React from "react";
import { Banner, Footer, Hero, Nav, Onboarding, ProductGrid } from "./features";
import iconMouse from "./assets/icons/mouse.svg";
import "./index.css";
import { Button } from "./components";

function App() {
  return (
    <React.StrictMode>
      <div className="bg-white container mx-auto">
        <Nav />
        <Hero />
        <div className="mt-10 flex lg:inline-flex flex-col items-center gap-3">
          <img src={iconMouse} alt="mouse" />
          <div className="text-xs">Scroll Down</div>
        </div>
        <ProductGrid />
      </div>
      <Banner />
      <Onboarding />
      <div className="container mx-auto mt-10">
        <ProductGrid product="blogs" />
        <div className="mt-5 flex justify-center">
          <Button className="text-blue-500">View all</Button>
        </div>
        {/* Skipping the `Find your therapist` banner due to shortage of time. */}
      </div>
      <Footer />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
