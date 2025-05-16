import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import bankCardReducer from "./slices/bankCardSlice";
import bankCardByIdReducer from "./slices/bankCardByIdSlice";
import bankCardsByUserReducer from "./slices/bankCardsByUserSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        bankCard: bankCardReducer,
        bankCardById: bankCardByIdReducer,
        bankCardsByUser: bankCardsByUserReducer,
    },
});
export default store;
