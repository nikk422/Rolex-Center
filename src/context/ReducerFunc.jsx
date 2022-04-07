export const productReduce = (state, action) => {
    console.log("gggg",action.type)
        console.log("ccccc",action.payload,action.type)
    switch (action.type) {
        case "SORT_BY_PRICE":
            console.log(action.payload,"payload")
            return {...state,sort:action.payload}

        case "CATEGORY":
            if(!state.categories.includes(action.payload)){
                return {...state, categories:[...state.categories,action.payload]};
            }else{
                const array = state.categories.filter(data => data !==action.payload);
                return {...state,categories:array};
            }
        case "FILTER_BY_STOCK":
            return {...state,byStock:!state.byStock};
        
        case "FILTER_BY_DELIVERY":
            return {...state,byFastDelivery:!state.byFastDelivery};

        case "RATING":
            return {...state,byRating:action.payload};

        case "RANGE":
            return {...state,byRange:action.payload};

        case "SEARCH":
            return {...state,bySearch:action.payload};

        case "CLEAR":
            return {
                sort :null,
                byStock:false,
                byFastDelivery:false,
                byRating:null,
                byRange:null,
                categories:[],
                bySearch: "",

            }
            default:
                return state;
    }



}