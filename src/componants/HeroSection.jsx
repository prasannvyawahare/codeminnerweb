import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

const HeroSection = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="relative min-h-[calc(100vh-5rem)] flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-neutral-900/0 to-neutral-900/0" />

        {/* Content */}
        <div className="flex flex-col items-center mt-1 py-5 px-20">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            CodeMinners – Mining the Depths of{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
              Digital Solutions.
            </span>
          </h1>
          <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
            We craft cutting-edge software solutions that drive innovation and
            deliver exceptional user experiences.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex justify-center my-10">
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md text-white"
            >
              Start Your Project
            </a>
            <a
              href="#"
              className="py-3 px-4 mx-3 rounded-md border border-neutral-600 text-neutral-300"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default HeroSection;
