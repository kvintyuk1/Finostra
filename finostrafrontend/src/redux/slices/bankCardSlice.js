import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const createBankCard = createAsyncThunk('bankCard/createBankCard',
    async (cardData, thunkAPI) => {
        try {
            const response = await axios.post('/api/v1/bankCard/create', cardData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data || "Помилка створення карточки");
        }
    });
export const fetchBankCardsByCurrency = createAsyncThunk(
    'bankCard/fetchByCurrency',
    async (currency, thunkAPI) => {
        try {
            const response = await axios.get('/api/v1/bankCard/get', {
                params: {currency}
            });
            return response.data.cards
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || "Помилка отримання карток");
        }
    }
);

const bankCardSlice = createSlice({
    name: 'bankCard',
    initialState: {
        status: "idle",
        error: null,
        message: null,
        cards: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createBankCard.pending, (state) => {
                state.status = 'loading';
                state.error = null
            })
            .addCase(createBankCard.fulfilled, (state,action)=>{
                state.status = 'succeeded';
                state.message = action.payload;
            })
            .addCase(createBankCard.rejected, (state,action)=>{
                state.status = "failed";
                state.error = action.payload
            })
            .addCase(fetchBankCardsByCurrency.pending, (state) => {
                state.status = "loading";
                state.error = null
            })
            .addCase(fetchBankCardsByCurrency.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.cards = action.payload
            })
            .addCase(fetchBankCardsByCurrency.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload
            });
    },
});
export default bankCardSlice.reducer;
