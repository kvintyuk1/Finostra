import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = 'http://localhost:8081/api/v1';

export const fetchAllEnvelops = createAsyncThunk(
    'envelop/fetchAll',
    async (thunkAPI) => {
        try {

            const response = await axios.get(`${URL}/fetchAllEnvelops`, {
                withCredentials: true
            });
            return response.data.dtos;
        } catch (error) {
            thunkAPI.rejectWithValue(error.response?.data || "Error fetching envelops")
        }
    }
);

const envelopSlice = createSlice({
    name: "envelop",
    initialState: {
        status: "idle",
        error: null,
        message: null,
        envelops: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllEnvelops.pending, (state) => {
                state.status = "loading",
                state.error = null,
                state.message = "Loading fetchAllEnvelops"
            })
            .addCase(fetchAllEnvelops.fulfilled, (state, action) => {
                state.status = "success",
                state.error = null,
                state.message = "Fetched all envelops successfully",
                state.envelops = action.payload
            })
            .addCase(fetchAllEnvelops.rejected, (state, action) => {
                state.status = "failed",
                state.error = action.payload || "Unknown Error",
                state.message = "Error fetching all envelops"
            })
    }
});

export default envelopSlice.reducer;