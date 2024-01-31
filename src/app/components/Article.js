import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function (props) {

const [art1, setArt1] = useState(false)
const [art2, setArt2] = useState(false)

  return (
    <div className="my-5">
      <div className="items-center flex flex-col justify-center">
        <p className="text-3xl" style={{ color: props.textColor }}>
          <span style={{ color: props.otherColor }}>dto.</span>pinion
        </p>
        <div
          className="w-60 h-1 m-2"
          style={{ backgroundColor: props.otherColor }}
        ></div>
      </div>
      <div className="mx-12 lg:mx-56 my-16">
        <p>
          “Is it necessary that every single person on this planet, um,
          expresses every single opinion that they have on every single thing
          that occurs all at the same time? ”
        </p>
        <p className="text-right">- Bo Burnham</p>
      </div>
      <div className="mx-12 lg:mx-56 my-16">
        <div className="flex items-center justify-between lg:justify-normal">
        <p className="text-lg font-bold my-3 mr-0 lg:mr-3" style={{color: props.otherColor}}>Opinion about "Opinion"</p>
        <FontAwesomeIcon icon={faChevronDown} style={{color: props.otherColor}} className={`font-bold ${art1 ? 'rotate-180' : ''}`} onClick={()=>setArt1(!art1)}/>
        </div>
        <p style={{display: art1 ? 'block':'none'}}>
          One thing I still believed until this moment, opinion is similiar like
          a  <span style={{ color: props.otherColor }}>shit</span>. With all the nutrients (information) you consume, you'll feel
          overwhelmed and have to expel everything from your mind. However, just
          like a <span style={{ color: props.otherColor }}>shit</span>, you don't have to take seriously every opinions (yours or
          from others to you). Just let it be, and maybe some flush can help.
        </p>
      </div>
      <div className="mx-12 lg:mx-56 my-16">
        <div className="flex items-center justify-between lg:justify-normal">
        <p className="text-lg font-bold my-3 mr-0 lg:mr-3" style={{color: props.otherColor}}>The 3 Requirements</p>
        <FontAwesomeIcon icon={faChevronDown} style={{color: props.otherColor}} className={`font-bold ${art2 ? 'rotate-180' : ''}`} onClick={()=>setArt2(!art2)}/>
        </div>
        <p style={{display: art2 ? 'block':'none'}}>
          I have a rule for myself every time I decide to do something. It has
          to meet three requirements. First, it needs to align with external
          rules applicable in society: <span style={{ color: props.otherColor }}>'Am I allowed to do it?'</span>. Second, it must
          align with my internal capabilities or competency: <span style={{ color: props.otherColor }}>'Can I do it?'</span>.
          Third, it goes even deeper than the second requirement and involves my
          own motivation: <span style={{ color: props.otherColor }}>'Do I want to do it?'</span>. If it doesn't meet all these
          requirements, then I decide not to pursue it. Until I realized there
          is one more requirement that renders the others invalid — it's about
          urgency: <span style={{ color: props.otherColor }}>'Am I supposed to do it?'</span>.
        </p>
      </div>
    </div>
  );
}
