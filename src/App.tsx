import { useState, useEffect, Suspense } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technology/Technologies";
import type { Technology } from "./Types/types";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Suspense
        fallback={<p className="text-center py-10 text-gray-500">Loading...</p>}
      >
        <Technologies
          technologies={technologies}
          stack={stack}
          setStack={setStack}
        />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
