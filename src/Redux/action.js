export const personalData = (data)=>{
    return{
        type:"SET_PERSONAL_DATA",
        payload:data
    }
}

export const visitorId = (data)=>{
    return{
        type:"SET_VISITOR_ID",
        payload:data
    }
}

export const userId = (data)=>{
    return{
        type:"SET_USER_ID",
        payload:data
    }
}