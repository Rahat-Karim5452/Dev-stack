import { Suspense, useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import type { Technology } from "./Types/types";
import Technologies from "./components/Technology/Technologies";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback="Loading...">
        <Technologies technologies={technologies} />
      </Suspense>
    </>
  );
}

export default App;
