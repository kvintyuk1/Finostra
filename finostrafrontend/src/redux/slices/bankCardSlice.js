import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:8081/api/v1";

export const createBankCard = createAsyncThunk(
  "bankCard/create",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${API}/bankCard/create`, payload, {
        withCredentials: true,
      });
      return data;
    } catch (e) {
      return rejectWithValue(e.response?.data || "Помилка створення картки");
    }
  }
);

export const fetchBankCardsByCurrency = createAsyncThunk(
  "bankCard/fetchByCurrency",
  async (currency, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${API}/bankCard/get`, {
        params: { currency },
        withCredentials: true,
      });
      return data.cards;
    } catch (e) {
      return rejectWithValue(e.response?.data || "Помилка отримання карток");
    }
  }
);

export const fetchUserCards = createAsyncThunk(
  "bankCard/fetchUserCards",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${API}/bankCard/my`, {
        withCredentials: true,
      });
      return data.cards;
    } catch (e) {
      return rejectWithValue(e.response?.data || "Не вдалося отримати картки");
    }
  }
);

const bankCardSlice = createSlice({
  name: "bankCard",
  initialState: {
    cards: [],
    status: "idle",
    error: null,
    fetchStatus: "idle",
    fetchError: null,
    createStatus: "idle",
    createError: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBankCard.pending, (state) => {
        state.createStatus = "loading";
        state.createError = null;
      })
      .addCase(createBankCard.fulfilled, (state, action) => {
        state.createStatus = "succeeded";
        state.message = action.payload;
      })
      .addCase(createBankCard.rejected, (state, action) => {
        state.createStatus = "failed";
        state.createError = action.payload;
      })
      .addCase(fetchBankCardsByCurrency.pending, (state) => {
        state.fetchStatus = "loading";
        state.fetchError = null;
      })
      .addCase(fetchBankCardsByCurrency.fulfilled, (state, action) => {
        state.fetchStatus = "succeeded";
        state.cards = action.payload;
      })
      .addCase(fetchBankCardsByCurrency.rejected, (state, action) => {
        state.fetchStatus = "failed";
        state.fetchError = action.payload;
      })
      .addCase(fetchUserCards.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUserCards.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cards = action.payload;
      })
      .addCase(fetchUserCards.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default bankCardSlice.reducer;
