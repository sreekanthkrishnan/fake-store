const reducers = (state, action) => {
    switch (action.type) {
        case "UPDATE_PRODUCTS":
            return {
                ...state,
                products: action.products,
            };
    }
};
export default reducers;
