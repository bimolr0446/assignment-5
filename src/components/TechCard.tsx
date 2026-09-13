import { type Dispatch, type SetStateAction } from "react";
import type { TechnologyType } from "../types/technologyType";
import { IoIosStar } from "react-icons/io";
import { toast } from "react-toastify";

interface TechType {
  tech: TechnologyType;
  stack: TechnologyType[];
  setStack: Dispatch<SetStateAction<TechnologyType[]>>;
}
const TechCard = ({ tech, stack, setStack }: TechType) => {
  const isAdded = stack.some((item) => item.id === tech.id);

  const handleAddStack = () => {
    if (isAdded) return;
    const newTechCard = [...stack, tech];
    setStack(newTechCard);
    toast.success(`${tech.name}`);
  };
  return (
    <div>
      <div
        className={`card ${isAdded ? "border-2 rounder-2xl border-green-500/50" : ""} bg-base-200 p-4 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl`}
      >
        {/* Icon + Badge */}
        <div className="flex items-start justify-between">
          <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-base-100 rounded-xl p-2">
            <img
              className="w-full h-full object-contain"
              src={tech.icon}
              alt={tech.name}
            />
          </div>

          <div className="badge badge-sm sm:badge-md">{tech.badge}</div>
        </div>

        {/* Card Content */}
        <div className="card-body p-0 pt-4">
          <h2 className="card-title text-lg sm:text-xl">{tech.name}</h2>

          <p className="text-sm sm:text-base text-base-content/70 line-clamp-3">
            {tech.description}
          </p>

          {/* Info */}
          <div className="flex flex-wrap gap-2 mt-2">
            <div className="bg-base-100 px-3 py-1 rounded-full text-xs sm:text-sm">
              {tech.category}
            </div>

            <div className="bg-base-100 px-3 py-1 rounded-full text-xs sm:text-sm">
              {tech.difficulty}
            </div>

            <div className="flex items-center gap-1 bg-base-100 px-3 py-1 rounded-full text-xs sm:text-sm">
              <span className="text-red-500">
                <IoIosStar />
              </span>
              {tech.rating}
            </div>
          </div>

          {/* Button */}
          <button
            disabled={isAdded}
            onClick={handleAddStack}
            className={`btn ${isAdded ? "techBtn" : "brand-gradient"} text-white  rounded-3xl w-full mt-3 cursor-pointer`}
          >
            {isAdded ? "✓ Added" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default TechCard;
