import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const createBankCard = createAsyncThunk('bankCard/createBankCard',
    async (cardData, thunkAPI) => {
        try {
            const response = await axios.post('/api/v1/bankCard', cardData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data || "Помилка створення карточки");
        }
    });
const bankCardSlice = createSlice({
    name: 'bankCard',
    initialState: {
        status: "idle",
        error: null,
        message: null
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
            });
    },
});
export default bankCardSlice.reducer;
