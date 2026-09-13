import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../types/technologyType";
import TechCard from "./TechCard";
interface TechPromise {
  techData: TechnologyType[];
  stack: TechnologyType[];
  setStack: Dispatch<SetStateAction<TechnologyType[]>>;
}

const TechnologyCard = ({ techData, stack, setStack }: TechPromise) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {techData.map((tech: TechnologyType) => (
        <TechCard key={tech.id} setStack={setStack} stack={stack} tech={tech} />
      ))}
    </div>
  );
};

export default TechnologyCard;
