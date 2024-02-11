import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Burger, SearchBurgerParams } from "./types";
import pickBy from "lodash/pickBy";
import identity from "lodash/identity";

export const fetchBurgers = createAsyncThunk<Burger[], SearchBurgerParams>(
  "burger/fetchBurgersStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    console.log(params, 4444);
    const { data } = await axios.get<Burger[]>(
      `https://64ad5b42b470006a5ec5d30c.mockapi.io/items`,
      {
        params: pickBy(
          {
            page: currentPage,
            limit: 4,
            category,
            sortBy,
            order,
            search,
          },
          identity
        ),
      }
    );

    return data;
  }
);
