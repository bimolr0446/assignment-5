import { use } from "react";
import type { TechnologyType } from "../types/technologyType";

interface DataPromise {
  techDataPromise: Promise<TechnologyType[]>;
}

const TechnologyGrid = ({ techDataPromise }: DataPromise) => {
  const techData = use(techDataPromise);
  console.log(techData);

  return;
};

export default TechnologyGrid;
