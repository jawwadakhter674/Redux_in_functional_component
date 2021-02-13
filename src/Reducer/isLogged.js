const loggedInn =(state=false, action)=>{
    switch(action.type){
      case "SIGNED_INN":
        return !state ;  //opposite of state its mean it return true
       default:
           return state;
    }
   
   }
   
   export default loggedInn;