import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axiosInstance";

const base = "/api/v1";


export const fetchAllEnvelops = createAsyncThunk(
  "envelop/fetchAll",
  async () => {
    const { data } = await axios.get(`${base}/fetchAllEnvelops`);
    return data; 
  }
);

export const createEnvelop = createAsyncThunk(
  "envelop/create",
  async (payload) => {
    await axios.post(`${base}/createEnvelop`, payload);
  }
);

export const disableEnvelop = createAsyncThunk(
  "envelop/disable",
  async ({ name, capacity }) => {
    await axios.put(`${base}/disableEnvelop`, { name, amountCapacity: capacity });
  }
);

export const extractMoneyFromEnvelop = createAsyncThunk(
  "envelop/extract",
  async ({ name, capacity, amount }) => {
    await axios.put(`${base}/extractMoneyFromEnvelop`, {
      name,
      amountCapacity: capacity,
      amount,
    });
  }
);

export const topUpEnvelop = createAsyncThunk(
  "envelop/topUp",
  async ({ name, capacity, cardNumber, amount }) => {
    await axios.put(`${base}/topUpEnvelop`, {
      name,
      capacity,
      cardNumber,
      amount,
    });
  }
);


const envelopSlice = createSlice({
  name: "envelop",
  initialState: { status: "idle", error: null, envelops: { dtos: [] } },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllEnvelops.pending, (s) => {
        s.status = "loading";
      })
      .addCase(fetchAllEnvelops.fulfilled, (s, a) => {
        s.status = "succeeded";
        s.envelops = a.payload;
      })
      .addCase(fetchAllEnvelops.rejected, (s, a) => {
        s.status = "failed";
        s.error = a.error.message;
      })
      .addCase(topUpEnvelop.pending, (s) => {
        s.status = "loading";
      })
      .addCase(topUpEnvelop.fulfilled, (s) => {
        s.status = "succeeded";
      })
      .addCase(extractMoneyFromEnvelop.pending, (s) => {
        s.status = "loading";
      })
      .addCase(extractMoneyFromEnvelop.fulfilled, (s) => {
        s.status = "succeeded";
      })
      .addCase(disableEnvelop.fulfilled, (s) => {
        s.status = "succeeded";
      })
      .addCase(createEnvelop.fulfilled, (s) => {
        s.status = "succeeded";
      });
  },
});

export default envelopSlice.reducer;
