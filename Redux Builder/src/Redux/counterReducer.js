import React from 'react'
import { DECREMENT, INCREMENT } from './action'

    
   const initlastate={
    counter:0
  }
export const counterReducer = (state=initlastate,action) => {
  
   
      switch (action.type) {
        case INCREMENT:
            return {counter:state.counter+action.payload}
            case DECREMENT:
                return {counter:state.counter-action.payload}
                
        default: return state 
      }
   
  
}

 
