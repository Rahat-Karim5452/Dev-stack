import { toast } from "react-toastify";
import type { Technology } from "../../Types/types";
import TechnologyCard from "./TechnologyCard";

interface TechnologiesProps {
  technologies: Technology[];
  stack: Technology[];
  setStack: React.Dispatch<React.SetStateAction<Technology[]>>;
}

const Technologies = ({ technologies, stack, setStack }: TechnologiesProps) => {
  const handleAdd = (technology: Technology) => {
    const isAlreadyAdded = stack.some((item) => item.id === technology.id);
    if (isAlreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }
    setStack([...stack, technology]);
    toast.success(`${technology.name} added to your stack`);
  };

  const handleRemove = (id: number) => {
    const technology = stack.find((item) => item.id === id);
    const updatedStack = stack.filter((item) => item.id !== id);
    setStack(updatedStack);

    if (technology) {
      toast.info(`${technology.name} removed from your stack`);
    }
  };
  const handleRemoveAll = () => {
    setStack([]);
    toast.info("Stack cleared");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 my-10">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Explore the <span className="">Technologies</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_330px] gap-6 items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              stack={stack}
              onAdd={handleAdd}
            />
          ))}
        </div>

        <YourStack
          stack={stack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </section>
  );
};

export default Technologies;
