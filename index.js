import { createStore } from "https://cdn.skypack.dev/redux";
 const reducer = (prev= {value:0},action)=>{
    switch(action.type){
        case 'increment':
            return{
                ...prev,
                value:prev.value+1
            }
        case 'decrement':
            return{
                ...prev,
                value:prev.value-1
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
   store.dispatch({type:"increment"});
  }
  document.getElementById('dec').onclick=()=>{
    store.dispatch({type:"decrement"});
  }