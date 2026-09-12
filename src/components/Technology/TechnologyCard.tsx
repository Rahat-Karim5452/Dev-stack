import { FaStar } from "react-icons/fa";
import type { Technology } from "../../Types/types";
import { getBadgeColor } from "../../Allcolors/badgeColors";

interface TechnologyCardProps {
  technology: Technology;
  stack: Technology[];
  onAdd: (technology: Technology) => void;
}

const TechnologyCard = ({ technology, stack, onAdd }: TechnologyCardProps) => {
  const isAdded = stack.some((item) => item.id === technology.id);
  const badgeColor = getBadgeColor(technology.badge);

  return (
    <div className="border border-gray-200 rounded-2xl p-4 bg-white flex flex-col">
      <div className="flex justify-between items-center">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-8 h-8 object-contain"
        />
        {technology.badge && (
          <span
            className={`text-[11px] px-2.5 py-1 rounded-full ${badgeColor}`}
          >
            {technology.badge}
          </span>
        )}
      </div>

      <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
        {technology.name}
      </h2>
      <p className="text-xs text-gray-500 leading-relaxed min-h-[62px]">
        {technology.description}
      </p>

      <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-100 text-[11px]">
        <span className="bg-slate-100 px-2 py-1 rounded">
          {technology.category}
        </span>
        <span className="flex-1 text-slate-500">{technology.difficulty}</span>
        <span className="flex items-center gap-1">
          <FaStar className="text-amber-400" />
          {technology.rating}
        </span>
      </div>

      <button
        className="w-full mt-4 py-2.5 rounded-md bg-gray-950 text-white disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-not-allowed"
        disabled={isAdded}
        onClick={() => onAdd(technology)}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
