import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = 'http://localhost:8081/api/v1';

export const fetchTransactions = createAsyncThunk(
  'transaction/fetchAll',
  async (thunkAPI) => {
    try {
      const response = await axios.get(`${URL}/transaction`, {
        withCredentials: true
      });
      return response.data.transactions;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Error fetching transactions");
    }
  }
);

export const performCardToCardTransaction = createAsyncThunk(
  'transaction/performCardToCardTransaction',
  async (transactionBody, thunkAPI) => {
    try {
      const response = await axios.post(`${URL}/transaction/cardToCardTransfer`, transactionBody, {
        withCredentials: true
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Error transferring money between cards");
    }
  }
);

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: {
    status: "idle",
    error: null,
    message: null,
    transactions: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchTransactions
      .addCase(fetchTransactions.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.transactions = action.payload;
        state.error = null;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Unknown error";
      })

      // performCardToCardTransaction
      .addCase(performCardToCardTransaction.pending, (state) => {
        state.status = "loading";
        state.message = null;
        state.error = null;
      })
      .addCase(performCardToCardTransaction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message = action.payload.message || "Transaction successful";
        state.error = null;
        if (action.payload.transaction) {
          state.transactions.push(action.payload.transaction);
          // state.transactions = [...state.transactions, newTransaction];
        }
      })
      .addCase(performCardToCardTransaction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Unknown error";
      });
  }
});

export default transactionSlice.reducer;
