import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import bankCardReducer from "./slices/bankCardSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        bankCard: bankCardReducer,
    },
});
export default store;
