 const productReduce = (state, action) => {
    switch (action.type) {
        case "SORT_BY_PRICE":
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

export default  productReduce 
    