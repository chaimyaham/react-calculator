import React from 'react';
import { useReducer } from 'react';
import './App.css';
import Digit from './component/Digit';
import Operation from './component/Operation';
 export const ACTIONS={
  DELETE:'delete',
  EQUAL:'equal',
  DIGIT:'digit',
  OPERATION:'operation',
  CLEAR:'clear'
}
function reducer(state,{type,payload}){
  switch(type){
    case ACTIONS.DIGIT:
      if(state.overwrite){
        return{
          ...state,
          currentOperand:payload.digit,
          overwrite:false
        }
      }
      if(payload.digit=='0' && state.currentOperand=='0') return state
     if(payload.digit==='.' && state.currentOperand.includes('.'))return state
      return{
        ...state,
        currentOperand:`${state.currentOperand || "" }${payload.digit}`
      }
    

      case ACTIONS.OPERATION:
        if(state.currentOperand== null && state.previousOperand==null ){
          return state
        }
        if(state.previousOperand==null){
          return {
            ...state,
            operation: payload.operation,
            previousOperand:state.currentOperand,
            currentOperand:null
          }

        }
        if(state.currentOperand===null){
          return {
            ...state,
            operation:payload.operation
          }
        }
        return {
          ...state,
          operation: payload.operation,
          previousOperand:equal(state),
          currentOperand:null

        }
      case ACTIONS.EQUAL:
        if(state.operation==null || state.currentOperand ==null || state.previousOperand == null)return state

        return{
          ...state,
          overwrite:true,
          previousOperand:null,
          operation:null,
          currentOperand:equal(state)
        }

      case ACTIONS.CLEAR:
        return{}

      case ACTIONS.DELETE:
        if(state.overwrite){
            return{
              ...state,
              overwrite:false,
              currentOperand:null,
            
            }
        }
          if(state.currentOperand==null)return state;
          if(state.currentOperand.length===1){
            return{
              ...state,
              currentOperand:null
            }
          }
          return{
            ...state,
            currentOperand:state.currentOperand.slice(0,-1)
          }
        
  }

}
function equal({currentOperand,previousOperand,operation}){
  const prev=parseFloat(previousOperand)
  const current=parseFloat(currentOperand)
  if(isNaN(prev)|| isNaN(current))return ""
  let compt=""
  switch(operation){
    case '+':
      compt=prev+current
      break
    case '-':
      compt=prev-current
      break
    case '*':
      compt=prev*current
      break
    case '/':
      compt=prev/current
      break
  }
  return compt.toString()
}

function App() {
  const [{currentOperand,previousOperand,operation},dispatch]=useReducer(reducer,{})
  return (
    <section>
    <div className="container">
        <div className="calculaor">
            <div className="output">
                <div  className="previous">{previousOperand}{operation}</div>
                <div  className="current">{currentOperand}</div>
            </div>
            <div class="buttons">
                <div className="button" id="all-clear" onClick={()=>dispatch({type:ACTIONS.CLEAR})}>C</div>
                <Operation operation={'%'} dispatch={dispatch} />
                <Operation operation={'/'} dispatch={dispatch} />
                <div  id="delete" class="button" onClick={()=>dispatch({type:ACTIONS.DELETE})}>&larr;</div>
                <Digit digit={7} dispatch={dispatch}/>
                <Digit digit={8} dispatch={dispatch}/>
                <Digit digit={9} dispatch={dispatch}/>
              
                <Operation operation={'*'} dispatch={dispatch} />
                <Digit digit={4} dispatch={dispatch}/>
                <Digit digit={5} dispatch={dispatch}/>
                <Digit digit={6} dispatch={dispatch}/>
           
                <Operation operation={'-'} dispatch={dispatch} />
                <Digit digit={3} dispatch={dispatch}/>
                <Digit digit={2} dispatch={dispatch}/>
                <Digit digit={1} dispatch={dispatch}/>
                <Operation operation={'+'} dispatch={dispatch} />
                <Digit digit={"00"} dispatch={dispatch}/>
                <Digit digit={0} dispatch={dispatch}/>
                <Digit digit={"."} dispatch={dispatch}/>
                <div  id="equal" className="button" onClick={()=>dispatch({type:ACTIONS.EQUAL})}>=</div>
            </div>


        </div>
    </div>
</section>
  );
}

export default App;
