import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// get user data from localstorage
const userData = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: userData ? userData : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
const API_URL = "/signup";

//signup function
export const signup = createAsyncThunk(
  "/user/signup",
  async (user, thunkAPI) => {
    try {
      const singupUser = async (userData) => {
        const response = await fetch("http://localhost:4000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("user", JSON.stringify(data));
          return data;
        } else {
          // handle non-successful response
          const { error } = await response.json();
          return thunkAPI.rejectWithValue(error);
        }
      };
      return await singupUser(user);
    } catch (error) {
      // handle network or other errors
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.tostring();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
//login function
export const login = createAsyncThunk("/user/login", async (user, thunkAPI) => {
  try {
    const loginUser = async (userData) => {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data));
        return data;
      } else {
        // handle non-successful response
        const { error } = await response.json();
        console.log(error);
        return thunkAPI.rejectWithValue(error);
      }
    };
    return await loginUser(user);
  } catch (error) {
    // handle network or other errors
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.tostring();
    // console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

// logout
export const logout = createAsyncThunk("user/logout", async (user) => {
  localStorage.removeItem("user");
});
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isSuccess = true;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
      });
  },
});

// Action creators are generated for each case reducer function
export const { reset } = authSlice.actions;

export default authSlice.reducer;
