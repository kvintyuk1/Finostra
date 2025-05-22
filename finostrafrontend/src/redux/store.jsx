import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import bankCardReducer from "./slices/bankCardSlice";
import bankCardByIdReducer from "./slices/bankCardByIdSlice";
import bankCardsByUserReducer from "./slices/bankCardsByUserSlice";
import transactionSliceReducer from "./slices/transactionSlice";
import envelopSliceReducer from "./slices/envelopSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        bankCard: bankCardReducer,
        bankCardById: bankCardByIdReducer,
        bankCardsByUser: bankCardsByUserReducer,
        transaction: transactionSliceReducer,
        envelop: envelopSliceReducer
    },
});
export default store;
