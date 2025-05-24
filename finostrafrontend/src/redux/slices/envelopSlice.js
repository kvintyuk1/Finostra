import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../../utils/axiosInstance";

export const createEnvelop = createAsyncThunk("envelop/createEnvelop",
    async (envelopData, thunkAPI) => {
        try {
            const response = await axiosInstance.post('/api/v1/createEnvelop', envelopData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data || "Помилка створення конверта");
        }
    });

export const fetchAllEnvelops = createAsyncThunk('envelop/fetchAllEnvelops',
    async (_, thunkAPI) => {
        try {
            const response = await axiosInstance.get('/api/v1/fetchAllEnvelops');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || "Помилка отримання всіх конвертів");
        }
    });

export const extractMoneyFromEnvelop = createAsyncThunk('envelop/extractMoneyFromEnvelop',
    async (envelopData, thunkAPI) => {
        try {
            const response = await axios.post('/api/v1/extractMoneyFromEnvelop', envelopData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || "Помилка отримання грошей");
        }
    });

export const disableEnvelop = createAsyncThunk(
  'envelop/disableEnvelop',
  async (envPublicUUID, thunkAPI) => {
    console.log('[Thunk disableEnvelop] envPublicUUID:', envPublicUUID);
    try {
      const response = await axiosInstance.put(
        '/api/v1/disableEnvelop',
        { envPublicUUID }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || 'Помилка відключення конверта'
      );
    }
  }
);

const envelopSlice = createSlice({
    name: 'envelop',
    initialState: {
        status: 'idle',
        error: null,
        message: null,
        envelops: [],

        createStatus: 'idle',
        createError: null,

        extractStatus: 'idle',
        extractError: null,

        disableStatus: 'idle',
        disableError: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createEnvelop.pending, (state) => {
                state.createStatus = 'loading';
                state.createError = null;
                state.message = null
            })
            .addCase(createEnvelop.fulfilled, (state, action) => {
                state.createStatus = 'succeeded';
                state.message = action.payload
            })
            .addCase(createEnvelop.rejected, (state, action) => {
                state.createStatus = 'failed';
                state.createError = action.payload
            })

            .addCase(fetchAllEnvelops.pending, (state) => {
                state.status = 'loading';
                state.error = null
            })
            .addCase(fetchAllEnvelops.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.envelops = action.payload
            })
            .addCase(fetchAllEnvelops.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload
            })

            .addCase(extractMoneyFromEnvelop.pending, (state) => {
                state.extractStatus = 'loading';
                state.extractError = null
            })
            .addCase(extractMoneyFromEnvelop.fulfilled, (state, action) => {
                state.extractStatus = 'succeeded';
                state.message = action.payload
            })
            .addCase(extractMoneyFromEnvelop.rejected, (state, action) => {
                state.extractStatus = 'failed';
                state.extractError = action.payload
            })

            .addCase(disableEnvelop.pending, (state) => {
                state.disableStatus = 'loading';
                state.disableError = null
            })
            .addCase(disableEnvelop.fulfilled, (state, action) => {
                state.disableStatus = 'succeeded';
                state.message = action.payload
            })
            .addCase(disableEnvelop.rejected, (state, action) => {
                state.disableStatus = 'failed';
                state.disableError = action.payload
            })
    }
})
export default envelopSlice.reducer;