const TechnologySection = () => {
  return (
    <div id="tech_stack ">
    <section
      id="tech_stack"
      className="relative py-24 rounded-2xl border border-neutral-800" 
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b via-neutral-900/95 to-neutral-900" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 *
        text-lg font-medium px-4 py-2 uppercase">
            Technology Stack
        </span>
        <p className="text-1xl sm:text-2xl lg:text-3xl mt-5 lg:mt-10 tracking-wide">  We leverage cutting-edge technologies to build 
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent
            bg-clip-text"> robust and scalable
        solutions.</span></p>
      </div>
        <div className="text-center mb-16">

        <h1 className="text-3xl md:text-2xl font-bold text-white mt-10">
        WEB Stack  
          </h1>
          
        
        </div>
        {/* Tech Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Technologies */}
          <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-indigo-600/10">
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
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white ml-4">Frontend</h3>
            </div>
            <div className="space-y-4">
              <div className="group flex items-center justify-between p-4 rounded-xl border border-neutral-800 hover:border-indigo-500/50 transition-colors duration-300">
                <span className="text-neutral-300">React.js</span>
                <span className="text-indigo-400">Core</span>
              </div>
              <div className="group flex items-center justify-between p-4 rounded-xl border border-neutral-800 hover:border-indigo-500/50 transition-colors duration-300">
                <span className="text-neutral-300">Next.js</span>
                <span className="text-indigo-400">Framework</span>
              </div>
              <div className="group flex items-center justify-between p-4 rounded-xl border border-neutral-800 hover:border-indigo-500/50 transition-colors duration-300">
                <span className="text-neutral-300">Tailwind CSS</span>
                <span className="text-indigo-400">Styling</span>
              </div>
            </div>
          </div>
          {/* Backend Technologies */}
          <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-green-600/10">
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
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white ml-4">Backend</h3>
            </div>
            <div className="space-y-4">
              <div className="group flex items-center justify-between p-4 rounded-xl border border-neutral-800 hover:border-green-500/50 transition-colors duration-300">
                <span className="text-neutral-300">Java</span>
                <span className="text-green-400">Runtime</span>
              </div>
              <div className="group flex items-center justify-between p-4 rounded-xl border border-neutral-800 hover:border-green-500/50 transition-colors duration-300">
                <span className="text-neutral-300">Spring boot</span>
                <span className="text-green-400">Framework</span>
              </div>
              <div className="group flex items-center justify-between p-4 rounded-xl border border-neutral-800 hover:border-green-500/50 transition-colors duration-300">
                <span className="text-neutral-300">MySql</span>
                <span className="text-green-400">Database</span>
              </div>
            </div>
          </div>
          {/* Cloud & DevOps */}
          <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-blue-600/10">
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
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white ml-4">
                Cloud &amp; DevOps
              </h3>
            </div>
            <div className="space-y-4" >
              <div className="group flex items-center justify-between p-4 rounded-xl border border-neutral-800 hover:border-blue-500/50 transition-colors duration-300">
                <span className="text-neutral-300">AWS</span>
                <span className="text-blue-400">Cloud</span>
              </div>
              <div className="group flex items-center justify-between p-4 rounded-xl border border-neutral-800 hover:border-blue-500/50 transition-colors duration-300">
                <span className="text-neutral-300">Docker</span>
                <span className="text-blue-400">Container</span>
              </div>
              <div className="group flex items-center justify-between p-4 rounded-xl border border-neutral-800 hover:border-blue-500/50 transition-colors duration-300">
                <span className="text-neutral-300">Kubernetes</span>
                <span className="text-blue-400">Orchestration</span>
              </div>
            </div>
          </div>
        </div>
        {/* mobile stack */}
        <div className="text-center">
        <h1 className="text-3xl md:text-2xl font-bold text-white mt-20 my-10">
       Mobile Stack
          </h1>
        </div>
       
        
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* android  */}
          <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg  bg-green-600/10">
              
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
              <path fill="#30dc80" d="M24,14.088C11.427,14.088,1.108,23.716,0,36h48C46.892,23.716,36.573,14.088,24,14.088z M33.179,27.079c0-1.104,0.895-1.999,1.999-1.999c1.104,0,1.999,0.895,1.999,1.999c0,1.104-0.895,1.999-1.999,1.999	C34.074,29.078,33.179,28.183,33.179,27.079z M12.822,29.078c-1.104,0-1.999-0.895-1.999-1.999c0-1.104,0.895-1.999,1.999-1.999	s1.999,0.895,1.999,1.999C14.821,28.183,13.926,29.078,12.822,29.078z"></path><path fill="#30dc80" d="M34.038,19.313c-0.14,0-0.281-0.035-0.41-0.11c-0.393-0.227-0.527-0.729-0.301-1.122l5.197-9.008	c0.227-0.394,0.729-0.529,1.122-0.301c0.393,0.227,0.527,0.729,0.301,1.122l-5.197,9.008C34.598,19.166,34.322,19.313,34.038,19.313	z"></path><path fill="#30dc80" d="M13.962,19.313c-0.284,0-0.56-0.148-0.712-0.411L8.054,9.894C7.827,9.501,7.962,8.999,8.354,8.772	c0.392-0.228,0.895-0.093,1.122,0.301l5.197,9.008c0.227,0.394,0.092,0.896-0.301,1.122C14.243,19.278,14.102,19.313,13.962,19.313z"></path>
              </svg>
              </div>
              <h3 className="text-xl font-bold text-white ml-4">
               Android
              </h3>
            </div>
            <div className="space-y-4" >
              <div className="group flex items-center justify-between p-4 rounded-xl border border-neutral-800 hover:border-green-500/50 transition-colors duration-300">
                <span className="text-neutral-300">Kotlin</span>
                <span className="text-green-400">Language</span>
              </div>
              <div className="group flex items-center justify-between p-4 rounded-xl border border-neutral-800 hover:border-green-500/50 transition-colors duration-300">
                <span className="text-neutral-300">Jetpack Compose</span>
                <span className="text-green-400">UI Design</span>
              </div>
              <div className="group flex items-center justify-between p-4 rounded-xl border border-neutral-800 hover:border-green-500/50 transition-colors duration-300">
                <span className="text-neutral-300">MVVM / MVC</span>
                <span className="text-green-400">Architecture</span>
              </div>
            </div>
          </div>


        {/* Ios  */}
          <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg  bg-pink-600/10">
              
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
              <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"></path>
              </svg>
              </div>
              <h3 className="text-xl font-bold text-white ml-4">
               iOS
              </h3>
            </div>
            <div className="space-y-4" >
              <div className="group flex items-center justify-between p-4 rounded-xl border border-neutral-800 hover:border-pink-500/50 transition-colors duration-300">
                <span className="text-neutral-300">Objective-C</span>
                <span className="text-pink-400">Language</span>
              </div>
              <div className="group flex items-center justify-between p-4 rounded-xl border border-neutral-800 hover:border-pink-500/50 transition-colors duration-300">
                <span className="text-neutral-300">SwiftUI</span>
                <span className="text-pink-400">UI Design</span>
              </div>
              <div className="group flex items-center justify-between p-4 rounded-xl border border-neutral-800 hover:border-pink-500/50 transition-colors duration-300">
                <span className="text-neutral-300">CLEAN / MVC</span>
                <span className="text-pink-400">Architecture</span>
              </div>
            </div>
          </div>
{/*  */}
{/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
<g fill="#ffa500" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M26.707,3.293l-21,21c-0.391,0.391 -0.391,1.024 0,1.414l5.586,5.586c0.391,0.391 1.024,0.391 1.414,0l26.586,-26.586c0.63,-0.63 0.184,-1.707 -0.707,-1.707h-11.172c-0.265,0 -0.519,0.105 -0.707,0.293zM39.293,24.707l-17.293,17.293l-6.293,-6.293c-0.391,-0.391 -0.391,-1.024 0,-1.414l11,-11c0.188,-0.188 0.442,-0.293 0.707,-0.293h11.172c0.891,0 1.337,1.077 0.707,1.707zM39.293,45.293l-7.293,-7.293l-10,4l4.707,4.707c0.188,0.188 0.442,0.293 0.707,0.293h11.172c0.891,0 1.337,-1.077 0.707,-1.707z"></path></g></g>
</svg> */}
         {/* Cross platform  */}
         <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg  bg-pink-600/10">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
<path fill="#FFA500" d="M26.707 3.293l-21 21c-.391.391-.391 1.024 0 1.414l5.586 5.586c.391.391 1.024.391 1.414 0L39.293 4.707C39.923 4.077 39.477 3 38.586 3H27.414C27.149 3 26.895 3.105 26.707 3.293zM39.293 24.707L22 42l-6.293-6.293c-.391-.391-.391-1.024 0-1.414l11-11C26.895 23.105 27.149 23 27.414 23h11.172C39.477 23 39.923 24.077 39.293 24.707zM39.293 45.293L32 38l-10 4 4.707 4.707C26.895 46.895 27.149 47 27.414 47h11.172C39.477 47 39.923 45.923 39.293 45.293z"></path>
</svg>
              {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
              <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"></path>
              </svg> */}
              </div>
              <h3 className="text-xl font-bold text-white ml-4">
               Cross Platform
              </h3>
            </div>
            <div className="space-y-4" >
              <div className="group flex items-center justify-between p-4 rounded-xl border border-neutral-800 hover:border-orange-500/50 transition-colors duration-300">
                <span className="text-neutral-300">Dart</span>
                <span className="text-orange-400">Language</span>
              </div>
              <div className="group flex items-center justify-between p-4 rounded-xl border border-neutral-800 hover:border-orange-500/50 transition-colors duration-300">
                <span className="text-neutral-300">Flutter</span>
                <span className="text-orange-400">UI Design</span>
              </div>
              <div className="group flex items-center justify-between p-4 rounded-xl border border-neutral-800 hover:border-orange-500/50 transition-colors duration-300">
                <span className="text-neutral-300">BLoC / GetX</span>
                <span className="text-orange-400">Architecture</span>
              </div>
            </div>
          </div>


       </div>
          
        



        {/* Technologies Marquee */}
        <div className="mt-20 overflow-hidden items-center">
          <div className="flex items-center justify-center">
            <div className="flex space-x-8 animate-marquee">
              <div className="flex items-center justify-center w-24 h-24 rounded-xl bg-neutral-800/50 border border-neutral-700">
                <span className="text-2xl font-bold text-neutral-400">React</span>
              </div>
              <div className="flex items-center justify-center w-24 h-24 rounded-xl bg-neutral-800/50 border border-neutral-700">
                <span className="text-2xl font-bold text-neutral-400">Node</span>
              </div>
              <div className="flex items-center justify-center w-24 h-24 rounded-xl bg-neutral-800/50 border border-neutral-700">
                <span className="text-2xl font-bold text-neutral-400">AWS</span>
              </div>
              <div className="flex items-center justify-center w-24 h-24 rounded-xl bg-neutral-800/50 border border-neutral-700">
                <span className="text-2xl font-bold text-neutral-400">
                  Docker
                </span>
              </div>
              <div className="flex items-center justify-center w-24 h-24 rounded-xl bg-neutral-800/50 border border-neutral-700">
                <span className="text-2xl font-bold text-neutral-400">K8s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  )
}

export default TechnologySection
