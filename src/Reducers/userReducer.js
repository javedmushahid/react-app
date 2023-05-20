/* eslint-disable no-lone-blocks */
const initialState = {
    name: "",
};


const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case "UPDATE_NAME": {
            return {
                ...state,
                name: action.payLoad,
            };
        };

        default: return state;
    }
};

export default userReducer;