import { Color_Gradient, Color_Gradient_Text } from "../colors/color";
import HeroImage from "../assets/banner-stack.png";
const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Build Your Ideal <br />
            <span className={Color_Gradient_Text}>Development Stack</span>
          </h1>

          <p className="text-gray-500 max-w-md py-5">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="flex gap-3">
            <a
              href="#"
              className={`${Color_Gradient} text-white font-semibold rounded-xl px-5 py-2.5`}
            >
              Explore Technologies
            </a>
            <a
              href="#"
              className="bg-white text-gray-900 border border-gray-300 rounded-xl px-5 py-2.5"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src={HeroImage}
            alt="development stack"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
