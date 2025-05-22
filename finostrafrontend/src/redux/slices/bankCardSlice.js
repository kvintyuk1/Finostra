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
        createStatus: "idle",
        createError: null,
        message: null,
        cards: [],

        fetchStatus: 'idle',
        fetchError: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createBankCard.pending, (state) => {
                state.createStatus = 'loading';
                state.createError = null
            })
            .addCase(createBankCard.fulfilled, (state,action)=>{
                state.createStatus = 'succeeded';
                state.message = action.payload;
            })
            .addCase(createBankCard.rejected, (state,action)=>{
                state.createStatus = "failed";
                state.createError = action.payload
            })

            .addCase(fetchBankCardsByCurrency.pending, (state) => {
                state.fetchStatus = "loading";
                state.fetchError = null
            })
            .addCase(fetchBankCardsByCurrency.fulfilled, (state, action) => {
                state.fetchStatus = "succeeded";
                state.cards = action.payload
            })
            .addCase(fetchBankCardsByCurrency.rejected, (state, action) => {
                state.fetchStatus = "failed";
                state.fetchError = action.payload
            });
    },
});
export default bankCardSlice.reducer;
