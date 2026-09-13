import { Suspense } from "react";
import "./App.css";
import HeroBanner from "./components/HeroBanner";
import Nav from "./components/Nav";
import type { TechnologyType } from "./types/technologyType";
import TechnologyGrid from "./components/TechnologyGrid";

const techDataPromise = async (): Promise<TechnologyType[]> => {
  const res = await fetch("/techData.json");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
      <Nav></Nav>
      <HeroBanner></HeroBanner>
      <Suspense
        fallback={
          <div className="text-center py-10 text-red-500">
            Loading technology data...
          </div>
        }
      >
        <TechnologyGrid techDataPromise={techDataPromise()}></TechnologyGrid>
      </Suspense>
    </>
  );
}

export default App;
