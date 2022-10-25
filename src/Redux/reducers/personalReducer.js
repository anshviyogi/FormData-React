const initialData = {
    personalData:[]
}

export const personalReducer = (state = initialData,{type,payload})=>{
    switch(type){
        case "SET_PERSONAL_DATA":
            return {...state,browser:payload}
        default:
            return state;
    }
}