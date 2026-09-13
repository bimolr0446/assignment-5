import { IoCloseSharp } from "react-icons/io5";
import type { TechnologyType } from "../types/technologyType";
interface StackType {
  stackTech: TechnologyType;
  handleRemove: (id: number) => void;
}

const StackCard = ({ stackTech, handleRemove }: StackType) => {
  return (
    <div className="mt-2">
      <div className="card bg-white card-md shadow-sm rounded-2xl">
        <div className="flex justify-between items-center p-4 ">
          <div className="flex gap-2 ">
            <img className="w-13" src={stackTech.icon} alt="" />
            <div className="card-body">
              <h2 className="font-bold">{stackTech.name}</h2>
              <p>{stackTech.category}</p>
            </div>
          </div>
          <div className="justify-end card-actions">
            <button
              onClick={() => handleRemove(stackTech.id)}
              className="btn btn-primary text-2xl text-red-500 cursor-pointer p-2 bg-gray-200 rounded-full"
            >
              <IoCloseSharp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackCard;
