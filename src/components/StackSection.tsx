import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../types/technologyType";
import StackCard from "./StackCard";
import { toast } from "react-toastify";
interface StackTech {
  stack: TechnologyType[];
  setStack: Dispatch<SetStateAction<TechnologyType[]>>;
}
const StackSection = ({ stack, setStack }: StackTech) => {
  const handleRemove = (id: number): void => {
    const removedTech = stack.find((item) => item.id === id);

    setStack((prevStack) => prevStack.filter((item) => item.id !== id));

    toast.error(`${removedTech?.name} removed from stack`);
  };
  const handleRemoveAll = () => {
    setStack([]);
    toast.success("All technologies removed from stack!");
  };

  return (
    <div className="bg-gray-100 px-2 py-3 rounded-2xl">
      <h2 className="font-semibold text-2xl">Your Stack</h2>

      <p className="text-xl text-[#94A3B8]">
        {stack.length === 0 ? (
          "No selected Technology"
        ) : (
          <>
            <span className="font-bold text-[#7c3aed]">{stack.length}</span>{" "}
            Technology Selected
          </>
        )}
      </p>

      {stack.length === 0 ? (
        <div className="h-20 mt-4 bg-white    flex justify-center items-center rounded-2xl border-base-500">
          <h1 className="text-gray-500">Your stack is empty..</h1>
        </div>
      ) : (
        <div>
          {stack.map((stackTech) => (
            <StackCard
              key={stackTech.id}
              stackTech={stackTech}
              handleRemove={handleRemove}
            />
          ))}
          <button
            onClick={handleRemoveAll}
            className="btn border-red w-full border py-2 rounded-2xl mt-10 text-red-400 font-bold text-xl cursor-pointer"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default StackSection;
