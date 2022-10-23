import React from 'react'
import { ACTIONS } from '../App'

export default function Digit({dispatch,digit}) {
  return (
    <div  className="button" onClick={()=>dispatch({type:ACTIONS.DIGIT,payload:{digit}})}>{digit}</div>
  )
}
