import { createStore } from "https://cdn.skypack.dev/redux";

function counter(value){
    return{
        type:"increment",
        payload:value
    }
}
function counterr(value){
    return{
        type:"decrement",
        payload:value
    }
}
 const reducer = (prev= {value:0},action)=>{
    switch(action.type){
        case 'increment':
            return{
                ...prev,
                value:prev.value+action.payload
            }
        case 'decrement':
            return{
                ...prev,
                value:prev.value-action.payload
            }
            default:
                return prev
                
            }
 }
 const store = createStore(reducer)
 const state = store.getState()
 console.log(state);
 
 store.subscribe(()=>{
 document.getElementById('statee').innerText=store.getState().value;
 })

  document.getElementById('inc').onclick=()=>{
//    store.dispatch({type:"increment"});
store.dispatch(counter(5))
  }
  document.getElementById('dec').onclick=()=>{
    // store.dispatch({type:"decrement"});
store.dispatch(counterr(1))
  }