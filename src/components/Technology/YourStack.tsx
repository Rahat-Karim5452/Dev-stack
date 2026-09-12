import type { Technology } from "../../Types/types";
import StackItem from "./StackItem";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

const YourStack = ({ stack, onRemove, onRemoveAll }: YourStackProps) => {
  const isEmpty = stack.length === 0;

  return (
    <section className="border border-gray-200 rounded-2xl p-4 bg-white  top-20">
      <h2 className="text-lg font-semibold">Your Stack</h2>
      <p className="text-sm text-slate-400">
        {stack.length} {stack.length === 1 ? "Technology" : "Technologies"}{" "}
        Selected
      </p>

      {isEmpty ? (
        <div className="min-h-20 mt-4 border border-dashed border-gray-200 rounded-xl flex items-center justify-center">
          <p className="text-sm text-slate-400">Your stack is empty.</p>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-2.5 mt-4">
            {stack.map((technology) => (
              <StackItem
                key={technology.id}
                technology={technology}
                onRemove={onRemove}
              />
            ))}
          </div>
          <button
            className="w-full mt-4 py-2.5 rounded-lg border border-red-500 text-red-500 hover:bg-red-50"
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        </>
      )}
    </section>
  );
};

export default YourStack;
