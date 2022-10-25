const initialData = {
    visitorId:''
}

export const visitorReducer = (state = initialData,{type,payload})=>{
    switch(type){
        case "SET_VISITOR_ID":
            return {...state,visitorId:payload}
        default:
            return state;
    }
}