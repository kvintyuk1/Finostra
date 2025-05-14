import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCwByIdCard = createAsyncThunk(
    'bankCard/fetchByIdCard',
    async (cardId, thunkApi) => {
        try {
            const response = await axios.get(`/api/v1/bankCard/${cardId}/cvv`);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response?.data || "Помилка отримання cw по id картки");
        }
    }
);
const getCwByIdCardSlice = createSlice({
    name: "cwByIdCard",
    initialState: {
        cvv: [],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCwByIdCard.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchCwByIdCard.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.cvv = action.payload;
            })
            .addCase(fetchCwByIdCard.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
    }
});
export default getCwByIdCardSlice.reducer;