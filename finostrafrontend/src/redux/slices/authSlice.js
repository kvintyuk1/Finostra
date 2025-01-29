import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

const API_URL = "http://localhost:8081/auth";

export const fetchRegisterUser = createAsyncThunk("auth/registerUser",
    async (userData, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.post("http://localhost:8081/auth/register", userData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const fetchUserData = createAsyncThunk("auth/fetchUserData",
    async (credentials, {rejectWithValue}) => {
        try {
            const {data} = await axiosInstance.post(`${API_URL}/login`, credentials, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            localStorage.setItem('token', data.token);
            return data.token;
        } catch (error) {
            return rejectWithValue(err.response.data);
        }
    })

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRegisterUser.pending, (state)=>{
            state.status = "loading";
            state.error = null;
        }).addCase(fetchRegisterUser.fulfilled, (state, action)=>{
            state.status = "succeeded";
            state.data = action.payload;
            state.isAuthenticated = true;
        }).addCase(fetchRegisterUser.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.payload;

        }).addCase(fetchUserData.pending, (state) => {
            state.status = "loading";
            state.error = null;
        }).addCase(fetchUserData.fulfilled, (state, action) => {
            state.status = "loaded";
            state.data = action.payload;
            state.isAuthenticated = true;
        }).addCase(fetchUserData.rejected, (state, action)=>{
            state.status = "error";
            state.error = action.error.message;
        })
    }
})
export const {} = authSlice.actions;
export default authSlice.reducer;