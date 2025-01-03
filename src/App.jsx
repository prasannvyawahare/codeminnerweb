import React from 'react'
import Navbar from './componants/Navbar'
import HeroSection from './componants/HeroSection'
import FeatureSection from './componants/FeatureSection'
import TechnologySection from './componants/TechnologySection'
import DevelopmentSection from './componants/DevelopmentSection'
import TeamSection from './componants/TeamSection'
import ClientSection from './componants/ClientSection'
import EnquirySection from './componants/EnquirySection'
import FooterSection from './componants/FooterSection'

const App = () => {
  return (
   
   <>

   <Navbar />
   
   <div className="max-w-7xl mx-auto pt-20 px-6">
   
   <HeroSection/>
   <FeatureSection/>    
   <TechnologySection/>
   <DevelopmentSection/>
   <TeamSection/>
   <ClientSection/>
   <EnquirySection/>
   <FooterSection/>
     
   
   </div>
   
   </>
  )
}

export default App
