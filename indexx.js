import { createStore, combineReducers } from "https://cdn.skypack.dev/redux";


const countReducer=(state= {value:0},action)=>{
    switch(action.type){
      case 'inc':
        return{
            ...state,
           value: state.value+action.payload
        }
        case 'dec':
            return{
                ...state,
            value:state.value-action.payload
            }
            default: return state
    }

}

const userReducer=(state= {name:""},action)=>{
    switch(action.type){
      case 'theme1':
        return{
            ...state,
           name:action.payload,
        
        }
        case 'theme':
            return{
                ...state,
                name:action.payload,
               
            }
        default:return state
    }

}

function login (name){
    return{
        type:"theme1",
        payload:name
    }
}
function logout(name){
    return{
        type:"theme",
        payload:name
    }
}
function inc (value){
    return{
        type:"inc",
        payload:value
    }
}
function dec(value){
    return{
        type:"dec",
        payload:value
    }
}
const reducer = combineReducers({
   counter:countReducer,
   user:userReducer
})
const store =createStore(reducer)


document.getElementById('btn1').onclick=()=>{
    store.dispatch(inc(1))
}
document.getElementById('btn2').onclick=()=>{
    store.dispatch(dec(1))
}
document.getElementById('btn3').onclick=()=>{
    store.dispatch(color2('red'))
}     
document.getElementById('btn4').onclick=()=>{
    store.dispatch(color1('blue'))
}
store.subscribe(()=>{
document.getElementById('content').innerText=store.getState().counter.value
document.getElementById('cont').innerText=store.getState().user.name
})