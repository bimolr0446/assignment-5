import heroImg from "../assets/banner-stack.png";

const HeroBanner = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <div className="w-3/5">
          <h1 className="font-extrabold text-6xl text-black">
            Build You Ideal
          </h1>

          <h1 className="font-extrabold text-6xl brand-gradient bg-clip-text text-transparent">
            Development Stack
          </h1>

          <p className="mt-5 text-lg leading-7 text-gray-600">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-7 flex items-center gap-4">
            <button className="brand-gradient rounded-lg px-6 py-3 text-white cursor-pointer">
              Explore Technologies
            </button>

            <button
              className="rounded-lg border-2 border-[#7c3ceb]
              px-6 py-3 font-semibold text-[#7c3ceb]
              transition duration-300 cursor-pointer "
            >
              Learn More
            </button>
          </div>
        </div>

        <div>
          <img
            src={heroImg}
            alt=""
            className="w-112.5 transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
