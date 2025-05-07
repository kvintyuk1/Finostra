import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBankCardsByUserId = createAsyncThunk(
    'bankCard/fetchByUserId',
    async (userId, thunkAPI) => {
        try {
            const response = await axios.get(`/api/v1/bankCard/user/${userId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Помилка отримання карт користувача');
        }
    }
);

const bankCardsByUserSlice = createSlice({
    name: 'bankCardsByUser',
    initialState: {
        cards: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBankCardsByUserId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBankCardsByUserId.fulfilled, (state, action) => {
                state.loading = false;
                state.cards = action.payload;
            })
            .addCase(fetchBankCardsByUserId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default bankCardsByUserSlice.reducer;