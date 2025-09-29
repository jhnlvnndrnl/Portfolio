import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { PuffLoader } from "react-spinners"; 
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#000910]">
        {/* React spinner */}
        <PuffLoader color="#ffffff" size={200} />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Home />
      <Services />  
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
