import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:8081/api/v1";

export const getAllPhoneTransaction = createAsyncThunk(
    'phone/fetchAllPhoneTransaction',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${API}/transaction/getPhoneTransactions`, {
                withCredentials: true,
            });
            return data;
        } catch (e) {
            return rejectWithValue(e.response?.data || "Error fetching phone transactions");
        }
    }
);

export const topUpPhone = createAsyncThunk(
    'phone/topUp',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`${API}/transaction/topUpPhone`, payload, {
                withCredentials: true
            });
            return data;
        } catch (e) {
            return rejectWithValue(e.response?.data || "Error fetching phone transactions");
        }
    }
);

const phoneTopUpSlice = createSlice({
  name: "phoneTopUp",
  initialState: {
    phoneTransactions: [],
    status: "idle",
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getAllPhoneTransaction
      .addCase(getAllPhoneTransaction.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getAllPhoneTransaction.fulfilled, (state, action) => {
        state.status = "success";
        state.phoneTransactions = action.payload.transactions || [];
        state.error = null;
      })
      .addCase(getAllPhoneTransaction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Unknown error";
      })

      // topUpPhone
      .addCase(topUpPhone.pending, (state) => {
        state.status = "loading";
        state.message = null;
        state.error = null;
      })
      .addCase(topUpPhone.fulfilled, (state, action) => {
        state.status = "success";
        state.message = action.payload || "Top-up successful";
      })
      .addCase(topUpPhone.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Unknown error";
      });
  },
});

export default phoneTopUpSlice.reducer;