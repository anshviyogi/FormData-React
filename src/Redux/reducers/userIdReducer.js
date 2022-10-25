const initialState = {
    userId:''
}

export const userIdReducer = (state = initialState,{type,payload})=>{
    switch(type){
        case "SET_USER_ID":
            return {...state,userId:payload}
        default:
            return state;
    }
}