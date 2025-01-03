

const ClientSection = () => {
  return (
    <div id="root">
    <section id="testimonials" className="relative py-24 bg-neutral-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-900/95 to-neutral-900" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Hear what our clients have to say about their experience working with
            us
          </p>
        </div>
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="relative p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm hover:border-indigo-500/50 transition-colors duration-300">
            <div className="absolute -top-4 right-8">
              <svg
                className="w-8 h-8 text-indigo-600/30"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="text-neutral-300 mb-6">
                "Their expertise in modern web technologies helped us transform
                our digital presence. The team delivered beyond our expectations."
              </p>
              <div className="mt-auto flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src="https://avatar.iran.liara.run/public"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">Abrit</h4>
                  <p className="text-indigo-400">Founder, Lavany Medical Equipment</p>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="relative p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm hover:border-purple-500/50 transition-colors duration-300">
            <div className="absolute -top-4 right-8">
              <svg
                className="w-8 h-8 text-purple-600/30"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="text-neutral-300 mb-6">
                "The mobile app they developed for us has received outstanding
                user feedback. Their attention to detail and user experience is
                remarkable."
              </p>
              <div className="mt-auto flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src="https://avatar.iran.liara.run/public"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">Rutwik Joshi</h4>
                  <p className="text-purple-400">CEO, FitArt</p>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="relative p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm hover:border-blue-500/50 transition-colors duration-300">
            <div className="absolute -top-4 right-8">
              <svg
                className="w-8 h-8 text-blue-600/30"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="text-neutral-300 mb-6">
                "Their cloud architecture expertise helped us scale our platform
                seamlessly. The team's technical knowledge is outstanding."
              </p>
              <div className="mt-auto flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src="https://avatar.iran.liara.run/public"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">Michael Foster</h4>
                  <p className="text-blue-400">CTO, CloudScale Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              98%
            </div>
            <p className="text-neutral-400">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              200+
            </div>
            <p className="text-neutral-400">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              50+
            </div>
            <p className="text-neutral-400">Team Members</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              12+
            </div>
            <p className="text-neutral-400">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  )
}

export default ClientSection
