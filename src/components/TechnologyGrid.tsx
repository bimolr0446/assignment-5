import { use, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import type { TechnologyType } from "../types/technologyType";
import StackSection from "./StackSection";
interface DataPromise {
  techDataPromise: Promise<TechnologyType[]>;
}

const TechnologyGrid = ({ techDataPromise }: DataPromise) => {
  const [stack, setStack] = useState<TechnologyType[]>([]);
  const techData = use(techDataPromise);

  return (
    <div className="container mx-auto">
      <div className="mb-20 mt-10">
        <h1 className="text-[36px] font-extrabold ">
          Explore the{" "}
          <span className="brand-gradient bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="text-xl text-[#64748B]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-8">
          <TechnologyCard
            techData={techData}
            stack={stack}
            setStack={setStack}
          ></TechnologyCard>
        </div>
        <div className="col-span-4">
          <StackSection setStack={setStack} stack={stack}></StackSection>
        </div>
      </div>
    </div>
  );
};

export default TechnologyGrid;
