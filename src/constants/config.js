

export const API_NOTIFICATION_MESSAGES = {
    loading : {
        title : "Loading",
        message : "Data is being loading"
    },
    success : {
        title : "Success",
        message : "The Data is successfully fetched"
    },
    responsefailure : {
        title : "Error",
        message : "Error while fetching response"
    },
    requestfailure : {
        title : "Error",
        message : "Error while parsing request"
    },
    networderror : {
        title : "Error",
        message : "Unable to connect with server. Please check internet connectivity and try again later."
    }
}


// sample req : { url:"/", method: "POST/GET/PUT/DELETE", params: true/false, query: true/false}
export const SERVICE_URLS = {
    userSignUp : { url: '/signUp', method: 'POST'} ,
    userLogin : { url : '/login', method : 'POST'}
}

