import { features } from "../constants"
const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px] mb-10">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 *
        text-lg font-medium px-4 py-2 uppercase">
            features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">Easily build 
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent
            bg-clip-text"> your code</span></h2>
      </div>
      <>
  {/* Bento Grid Layout */}
 <div className="mt-20 lg:mt-20 mx-30">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Custom Software Development */}
    <div className="group p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800/50 transition-all duration-300">
      <div className="p-4 rounded-xl bg-indigo-600/10 w-fit mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-indigo-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">
        Custom Software Development
      </h3>
      <p className="text-neutral-400 mb-4">
        Tailored solutions designed to meet your specific business needs and
        challenges.
      </p>
      <a
        href="#"
        className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
      >
        Learn more
        <svg
          className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
    {/* Web Applications */}
    <div className="group p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800/50 transition-all duration-300">
      <div className="p-4 rounded-xl bg-purple-600/10 w-fit mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-purple-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">Web Applications</h3>
      <p className="text-neutral-400 mb-4">
        Scalable and responsive web applications built with modern technologies.
      </p>
      <a
        href="#"
        className="inline-flex items-center text-purple-400 hover:text-purple-300"
      >
        Learn more
        <svg
          className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
    {/* Mobile Development */}
    <div className="group p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800/50 transition-all duration-300">
      <div className="p-4 rounded-xl bg-blue-600/10 w-fit mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">Mobile Development</h3>
      <p className="text-neutral-400 mb-4">
        Native and cross-platform mobile applications for iOS and Android.
      </p>
      <a
        href="#"
        className="inline-flex items-center text-blue-400 hover:text-blue-300"
      >
        Learn more
        <svg
          className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
    {/* Cloud Solutions */}
    <div className="group p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800/50 transition-all duration-300">
      <div className="p-4 rounded-xl bg-green-600/10 w-fit mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">Cloud Solutions</h3>
      <p className="text-neutral-400 mb-4">
        Secure and scalable cloud infrastructure and deployment solutions.
      </p>
      <a
        href="#"
        className="inline-flex items-center text-green-400 hover:text-green-300"
      >
        Learn more
        <svg
          className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
    {/* AI & Machine Learning */}
    <div className="group p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800/50 transition-all duration-300">
      <div className="p-4 rounded-xl bg-pink-600/10 w-fit mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">
        AI &amp; Machine Learning
      </h3>
      <p className="text-neutral-400 mb-4">
        Intelligent solutions powered by advanced AI and machine learning
        algorithms.
      </p>
      <a
        href="#"
        className="inline-flex items-center text-pink-400 hover:text-pink-300"
      >
        Learn more
        <svg
          className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
    {/* DevOps & Security */}
    <div className="group p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800/50 transition-all duration-300">
      <div className="p-4 rounded-xl bg-orange-600/10 w-fit mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-orange-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">
        DevOps &amp; Security
      </h3>
      <p className="text-neutral-400 mb-4">
        Streamlined development operations and robust security implementations.
      </p>
      <a
        href="#"
        className="inline-flex items-center text-orange-400 hover:text-orange-300"
      >
        Learn more
        <svg
          className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
  </div>
 </div>
</>

    </div>
  )
}

export default FeatureSection
