import type { Technology } from "../../Types/types";

interface StackItemProps {
  technology: Technology;
  onRemove: (id: number) => void;
}
const StackItem = ({ technology, onRemove }: StackItemProps) => {
  return (
    <div className="flex items-center gap-2.5 p-2.5 border border-gray-100 rounded-lg">
      <img
        src={technology.icon}
        alt={technology.name}
        className="w-7 h-7 object-contain"
      />
      <div className="flex-1">
        <h4 className="text-[13px] font-medium">{technology.name}</h4>
        <span className="text-[11px] text-slate-400">
          {technology.category}
        </span>
      </div>
      <button
        className="text-red-500 text-base"
        onClick={() => onRemove(technology.id)}
      >
        ✕
      </button>
    </div>
  );
};

export default StackItem;
