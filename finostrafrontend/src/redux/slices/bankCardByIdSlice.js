import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBankCardById = createAsyncThunk(
    'bankCard/fetchById',
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`/api/v1/bankCard/${id}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Помилка отримання карти за ID');
        }
    }
);


const bankCardByIdSlice = createSlice({
    name: 'bankCardById',
    initialState: {
        card: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBankCardById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBankCardById.fulfilled, (state, action) => {
                state.loading = false;
                state.card = action.payload;
            })
            .addCase(fetchBankCardById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default bankCardByIdSlice.reducer;
