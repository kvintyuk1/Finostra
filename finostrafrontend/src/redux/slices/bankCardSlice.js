import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "http://localhost:8081/api/v1";

export const createBankCard = createAsyncThunk(
  "bankCard/createBankCard",
  async (cardData, thunkAPI) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/bankCard/create`,
        cardData,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(
        error.response?.data || "Помилка створення картки"
      );
    }
  }
);

export const fetchBankCardsByCurrency = createAsyncThunk(
  "bankCard/fetchByCurrency",
  async (currency, thunkAPI) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/bankCard/get`, {
        withCredentials: true,
        params: { currency },
      });
      return response.data.cards;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(
        error.response?.data || "Помилка отримання карток"
      );
    }
  }
);

const bankCardSlice = createSlice({
  name: "bankCard",
  initialState: {
    status: "idle",
    error: null,
    message: null,
    cards: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // createBankCard
      .addCase(createBankCard.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createBankCard.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message = action.payload;
      })
      .addCase(createBankCard.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // fetchBankCardsByCurrency
      .addCase(fetchBankCardsByCurrency.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchBankCardsByCurrency.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cards = action.payload;
      })
      .addCase(fetchBankCardsByCurrency.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default bankCardSlice.reducer;
