import { TOGGLE_THEME } from './action';


const initlastate={
    theme: 'light',
   
}

export const themeReducer = (state=initlastate,action) => {
 
    switch(action.type){
        case TOGGLE_THEME:     
     return   { theme: state.theme === 'light' ? 'dark' : 'light'}
     default: return state
    }
}
