import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const sendLoginSms = createAsyncThunk(
  "auth/sendLoginSms",
  async (phone, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/api/v1/user/verification/login",
        { phoneNumber: phone },
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const confirmLoginSms = createAsyncThunk(
  "auth/confirmLoginSms",
  async ({ phone, code }, { rejectWithValue }) => {
    try {
      await axiosInstance.post(
        "/api/v1/user/verification/confirmLogin",
        { phoneNumber: phone, verificationCode: code },
        { withCredentials: true }
      );
      const me = await axiosInstance.get(
        "/api/v1/user/verification/me",
        { withCredentials: true }
      );
      return me.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const createProfile = createAsyncThunk(
  "auth/createProfile",
  async (profileData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/api/v1/userProfile/create",
        profileData,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "auth/fetchCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        "/api/v1/user/verification/me",
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchLogout = createAsyncThunk(
  "auth/fetchLogout",
  async (_, { rejectWithValue }) => {
    try {
      await axiosInstance.post(
        "/api/v1/user/verification/logout",
        {},
        { withCredentials: true }
      );
      return;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "idle",
    error: null,
    user: null,
    isAuthenticated: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendLoginSms.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(sendLoginSms.fulfilled, (state) => {
        state.status = "smsSent";
      })
      .addCase(sendLoginSms.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(confirmLoginSms.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(confirmLoginSms.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(confirmLoginSms.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createProfile.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createProfile.fulfilled, (state) => {
        state.status = "profileCreated";
      })
      .addCase(createProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchCurrentUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(fetchLogout.fulfilled, (state) => {
        state.status = "idle";
        state.error = null;
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export default authSlice.reducer;