import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb as faDarkbulb} from '@fortawesome/free-solid-svg-icons'

import { faLightbulb } from '@fortawesome/free-regular-svg-icons'

export default function (props) {

    const clickTheme = () =>{
        if (props.theme === 'light'){
            props.setTheme('dark')
        } else {props.setTheme('light')}
    }

    return (
    <div className="flex flex-row  items-center justify-between py-10 px-5 lg:px-20">
        <h1 style={{color: props.otherColor}} className='text-2xl font-bold pb-5 lg:pb-0'>dto.</h1>
        <button onClick={()=>clickTheme()} style={{border: `${props.otherColor} solid 1px`}} className='rounded-full p-1 lg:p-3'><FontAwesomeIcon icon={props.theme === 'light' ? faLightbulb : faDarkbulb} /></button>
    </div>
    )
}