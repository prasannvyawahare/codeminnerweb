

const EnquirySection = () => {
  return (
    <div id="root">
  <section id="contact_form" className="relative py-24">
    {/* Background Elements */}
    <div className="absolute inset-0 bg-gradient-to-b" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Let's Build Something Amazing
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Get in touch with us to discuss your project requirements
        </p>
      </div>
      {/* Contact Grid */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            {/* Contact Items */}
            <div className="space-y-6">
              <div className="flex items-start">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email Us</h4>
                  <p className="text-neutral-400">contact@codeminner.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-purple-600/10 mr-4">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Call Us</h4>
                  <p className="text-neutral-400">
                    +91 7385788734
                  </p>
                </div>
              </div>
              <div className="flex items-start">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Visit Us</h4>
                  <p className="text-neutral-400">
                    Data-Tech systems
                    Tokdoji Squar, Nagpur
                  </p>
                </div>
              </div>
            </div>
            {/* Social Links */}
            {/* <div className="mt-8">
              <h4 className="text-white font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div> */}
          </div>
        </div>
        {/* Contact Form */}
        {/* <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">
                Subject
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                placeholder="Project Discussion"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                placeholder="Tell us about your project..."
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div> */}
      </div>
    </div>
  </section>
</div>

  )
}

export default EnquirySection
