import React from 'react'
import { ACTIONS } from '../App'

export default function Operation({dispatch,operation}) {
  return (
    <div  className="button" onClick={()=>dispatch({type:ACTIONS.OPERATION,payload:{operation}})}>{operation}</div>
  )
}
