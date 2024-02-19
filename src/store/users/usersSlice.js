import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./usersThunk";
export const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/v1/users/${userId}`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// New thunk for updating a user
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ userId, name, complete }, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(`/api/v1/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, complete }),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.message || "Could not update user.");
      return data; // Assuming this is the updated user object
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// Initial state
const initialState = {
  users: [],
  loading: false,
  error: null,
};

// Users slice
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })
      // Handling fetchUserById
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        // Assuming you want to update the state with the fetched user's details
        // This might need adjustment based on your state structure
        state.currentUser = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch user details";
      })
      // Handling updateUser
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        // Update the user in your state as needed
        // This example assumes you want to replace or update the user details in your users array
        const index = state.users.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to update user";
      });
  },
});

export default usersSlice.reducer;
