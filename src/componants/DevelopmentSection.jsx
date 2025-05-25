const DevelopmentSection = () => {
  return (
    <section id="development" className="min-h-screen py-10">
      <div id="development_step">
        <section id="process_workflow" className="relative py-24">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-neutral-900/0 to-neutral-900/0" />

          <div className="absolute inset-0 bg-gradient-to-b via-neutral-900/95 to-neutral-900" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span
                className="bg-neutral-900 text-orange-500 rounded-full h-6 *
        text-lg font-medium px-4 py-2 uppercase mx-10 my-10"
              >
                Development
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 mt-10">
                Our Development Process
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                A streamlined approach to deliver exceptional results
              </p>
            </div>
            {/* Process Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-neutral-800" />
              {/* Process Steps */}
              <div className="space-y-16">
                {/* Step 1 */}
                <div className="relative lg:flex items-center justify-between">
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-indigo-600 bg-neutral-900" />
                  <div className="lg:w-5/12 mb-8 lg:mb-0">
                    <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm hover:border-indigo-500/50 transition-colors duration-300">
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-lg bg-indigo-600/10 mr-4">
                          <svg
                            className="w-6 h-6 text-indigo-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          Discovery &amp; Planning
                        </h3>
                      </div>
                      <p className="text-neutral-400">
                        Understanding your requirements and creating a
                        comprehensive project roadmap.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-5/12 lg:text-right">
                    <div className="text-sm text-indigo-400 mb-2">Phase 1</div>
                    <div className="text-neutral-300">2-3 Weeks</div>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="relative lg:flex items-center justify-between">
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-purple-600 bg-neutral-900" />
                  <div className="lg:w-5/12 text-right mb-8 lg:mb-0 lg:order-2">
                    <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm hover:border-purple-500/50 transition-colors duration-300">
                      <div className="flex items-center mb-4 justify-end">
                        <h3 className="text-xl font-bold text-white">
                          Design &amp; Architecture
                        </h3>
                        <div className="p-3 rounded-lg bg-purple-600/10 ml-4">
                          <svg
                            className="w-6 h-6 text-purple-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                            />
                          </svg>
                        </div>
                      </div>
                      <p className="text-neutral-400">
                        Creating detailed designs and technical architecture for
                        your solution.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-5/12 lg:order-1">
                    <div className="text-sm text-purple-400 mb-2">Phase 2</div>
                    <div className="text-neutral-300">3-4 Weeks</div>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="relative lg:flex items-center justify-between">
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-blue-600 bg-neutral-900" />
                  <div className="lg:w-5/12 mb-8 lg:mb-0">
                    <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm hover:border-blue-500/50 transition-colors duration-300">
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-lg bg-blue-600/10 mr-4">
                          <svg
                            className="w-6 h-6 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          Development &amp; Testing
                        </h3>
                      </div>
                      <p className="text-neutral-400">
                        Building your solution with rigorous testing and quality
                        assurance.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-5/12 lg:text-right">
                    <div className="text-sm text-blue-400 mb-2">Phase 3</div>
                    <div className="text-neutral-300">6-8 Weeks</div>
                  </div>
                </div>
                {/* Step 4 */}
                <div className="relative lg:flex items-center justify-between">
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-green-600 bg-neutral-900" />
                  <div className="lg:w-5/12 text-right mb-8 lg:mb-0 lg:order-2">
                    <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm hover:border-green-500/50 transition-colors duration-300">
                      <div className="flex items-center mb-4 justify-end">
                        <h3 className="text-xl font-bold text-white">
                          Deployment &amp; Support
                        </h3>
                        <div className="p-3 rounded-lg bg-green-600/10 ml-4">
                          <svg
                            className="w-6 h-6 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                      <p className="text-neutral-400">
                        Launching your solution and providing ongoing
                        maintenance and support.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-5/12 lg:order-1">
                    <div className="text-sm text-green-400 mb-2">Phase 4</div>
                    <div className="text-neutral-300">2-3 Weeks</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Call to Action */}
            {/* <div className="mt-20 text-center">
              <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors duration-300">
                Start Your Project
              </button>
            </div> */}
          </div>
        </section>
      </div>
    </section>
  );
};

export default DevelopmentSection;
