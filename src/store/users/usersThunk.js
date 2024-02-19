import { createAsyncThunk } from "@reduxjs/toolkit";
const API_KEY = "zemvDlvtavG4trFqzcyYlOX0SHH_-hx8_z7YG56INKw9OFLh6A";

export const getUsers = createAsyncThunk("/users/GET", async (_, ThunkAPI) => {
  try {
    const res = await fetch("/api/v1/users", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    const data = await res.json();
    if (data) return ThunkAPI.fulfillWithValue(data.items);
  } catch (error) {
    return ThunkAPI.rejectWithValue("Something went wrong");
  }
});

export const createUser = createAsyncThunk(
  "users/createUser",
  async ({ name, isCompleted }, thunkAPI) => {
    try {
      const response = await fetch("/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Include your API key in headers if needed
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({ name, isCompleted }),
      });
      const data = await response.json();
      return data; // Assuming this is the newly created user object
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
