import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Moralis from "moralis";
import axios from "axios";

export const fetchUserCryptoInfo = createAsyncThunk(
  "user/getUserCryptoInfo",
  async () => {
    try {
      return await Moralis.Cloud.run("getCryptoInfo");
    } catch (e) {
      console.error(e);
    }
  }
);

export const fetchUserSolInfo = createAsyncThunk(
  "user/getUserSolInfo",
  async () => {
    try {
      const address = Moralis.User.current().get("solAddress");
      const { data } = await axios.get(
        `https://solana-gateway.moralis.io/account/mainnet/${address}/portfolio`,
        {
          headers: {
            "X-API-Key":
              "LAYok9g6GzODy2yiVAVKfVvbqqbMyI8AiHbtaZPFruEZlE9he3aDzeBZebzLJZjM",
            accept: "application/json",
          },
        }
      );

      return data;
    } catch (e) {
      console.error(e);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    nfts: null,
    coins: null,
    solInfo: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserCryptoInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserCryptoInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.nfts = action.payload.nfts;
        state.coins = action.payload.coins;
      })
      .addCase(fetchUserCryptoInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchUserSolInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserSolInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.solInfo = action.payload;
      })
      .addCase(fetchUserSolInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
