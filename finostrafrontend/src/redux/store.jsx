import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import bankCardReducer from "./slices/bankCardSlice";
import bankCardByIdReducer from "./slices/bankCardByIdSlice";
import bankCardsByUserReducer from "./slices/bankCardsByUserSlice";
import envelopReducer from "./slices/envelopSlice";
import creditCardReducer from "./slices/creditCardSlice";
import transactionReducer from "./slices/transactionSlice";
import phoneTransactionReducer from "./slices/phoneTopUpSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        bankCard: bankCardReducer,
        bankCardById: bankCardByIdReducer,
        bankCardsByUser: bankCardsByUserReducer,
        envelop: envelopReducer,
        creditCard: creditCardReducer,
        transaction: transactionReducer,
        phoneTransaction: phoneTransactionReducer
    },
});
export default store;
