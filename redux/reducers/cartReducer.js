/* eslint-disable keyword-spacing */
/* eslint-disable quotes */
let defaultState = {
    selectedItems:{items:[] , restaurantName: ''}
};

let cartReducer = (state = defaultState, action) => {
    switch (action.type){
        case 'ADD_TO_CART' : {
            let newState = {...state};
            if(action.payload.checkboxValue){
            console.log("action.payload.restaurantName :",action.payload.restaurantName)

            const foodz = action.payload.food.filter(obj => obj.count !== 0) 
            return {
                selectedItems : { items: foodz , restaurantName: action.payload.restaurantName  }
            }
        }else {
            //console.log("REMOVE FROM CART");
            newState.selectedItems = {
                items:[
                    ...newState.selectedItems.items.filter((item) => item.title !== action.payload.title ),

                ],
                restaurantName: action.payload.restaurantName,
            };
        }
         //console.log(newState,"hi");
            return newState;
    }
        default:
            return state;
    }
};


export default cartReducer;