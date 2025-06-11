import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axiosInstance";
import Cookies from "js-cookie";


const URL = "/api/v1"

export const attachCredit = createAsyncThunk('creditCard/attachCredit',
    async (creditData, thunkAPI) => {
        try {
            const response = await axios.post(`${URL}/creditCard/attachCredit`, creditData, {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || "Помилка отримання кредита");
        }
    });

export const fetchAllContracts = createAsyncThunk('creditCard/fetchAllContracts',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`${URL}/creditCard/fetchAllContracts`, {
                withCredentials: true
            });
            return response.data.allContractsBlobLinks;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || "Помилка отримання контрактів");
        }
    });

export const carForCredit = createAsyncThunk(
    'creditCard/carForCredit',
    async (creditData, thunkAPI) => {
        try {
            console.log("Відправка даних:", creditData);
            console.log('Токен в куках:', Cookies.get('token'));
            const response = await axios.post(
                `${URL}/creditCard/carForCredit`, creditData, {
                withCredentials: true
            });

            console.log("Відповідь від сервера (лінк):", response.data);
            return response.data;

        } catch (error) {
            console.error("Помилка запита:", error.response ? error.response.data : error.message);
            throw error;
        }
    }
);
export const creditCardSlice = createSlice({
    name: "creditCard",
    initialState: {
        attachStatus: 'idle',
        attachError: null,
        message: null,
        allContracts: [],

        fetchStatus: 'idle',
        fetchError: null,

        carForCreditStatus: 'idle',
        carForCreditError: null,
        carDetails: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(attachCredit.pending, (state) => {
                state.attachStatus = 'loading';
                state.attachError = null
            })
            .addCase(attachCredit.fulfilled, (state, action) => {
                state.attachStatus = 'succeeded';
                state.message = action.payload
            })
            .addCase(attachCredit.rejected, (state, action) => {
                state.attachStatus = 'failed';
                state.attachError = action.payload
            })

            .addCase(fetchAllContracts.pending, (state) => {
                state.fetchStatus = 'loading';
                state.fetchError = null
            })
            .addCase(fetchAllContracts.fulfilled, (state, action) => {
                state.fetchStatus = 'succeeded';
                state.allContracts = action.payload
            })
            .addCase(fetchAllContracts.rejected, (state, action) => {
                state.fetchStatus = 'failed';
                state.fetchError = action.payload
            })

            .addCase(carForCredit.pending, (state) => {
                state.carForCreditStatus = 'loading';
                state.carForCreditError = null
            })
            .addCase(carForCredit.fulfilled, (state, action) => {
                console.log("У fulfilled")
                state.carForCreditStatus = 'succeeded';
                //.state.message = action.payload
                state.carDetails = action.payload
            })
            .addCase(carForCredit.rejected, (state, action) => {
                state.carForCreditStatus = 'failed';
                state.carForCreditError = action.payload
            })
    }
});
export default creditCardSlice.reducer;