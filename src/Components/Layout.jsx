import React from 'react'
import Banner from '../Pages/Banner'
import SkilllsExperience from '../Pages/SkilllsExperience'
import About from '../Pages/About'
import ContactMe from '../Pages/ContactMe'
import Footer from './Footer'
import Project from '../Pages/Project'

function Layout() {
  return (
    <div>
      <Banner/>
      <SkilllsExperience/>
      <About/>
      <Project/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default Layout
