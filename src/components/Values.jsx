import React from 'react'
import valuesDot from "../images/Group 1000001074.png"
import { values } from '../data'
import Achievement from "../UI/Achievement";

const Values = () => {
  return (

    <div className="values_overall_container">
      <div className="values_dot-bg1">
        <img src={valuesDot} alt="Dot image 1" />
      </div>

      <div className="values_main containers">
          <div className="values_content">
              {
                values.map(({id, range, title, desc}) => {
                  return (
                    <Achievement className="values-box" key={id}>
                        <h3>{range}</h3>
                        <p className="p1">{title}</p>
                        <p className="p2">{desc}</p>
                    </Achievement>
                  )
                })
              }
          </div>
      </div>

      <div className="values_dot-bg2">
        <img src={valuesDot} alt="Dot image 2" />
      </div>

    </div>
  )
}

export default Values;