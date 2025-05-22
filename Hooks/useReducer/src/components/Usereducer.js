const reducer=(state,action)=>{
    switch(action.type){
        case "INCREMENT":
          return  state=state+1;
        case "DECREMENT":
            let newNum = 0
            state>=1?(newNum=state-1):newNum;
            return newNum;
        default:
          return state
    }
}
export default reducer;