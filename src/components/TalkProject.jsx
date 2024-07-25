import React from 'react'
import "../pages/home/home.css"
import { Link } from 'react-router-dom'

const TalkProject = () => {
  return (
      <>
            <div className="do_you_want_project-box">
                <h2>Do you want to talk about</h2>
                <h2 className="sec_h2">your Project?</h2>

                <Link to="/contact" className="btn">Get Started</Link>
            </div>
      </>
   )
}

export default TalkProject;