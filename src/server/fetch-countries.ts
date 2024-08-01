"use server";

import { DataResponseType } from "@/@types/country-type";
import { totalmem } from "os";

export const fetchCountries = async (page: number) => {
  try {
    const response = await fetch(
      `https://apis.codante.io/olympic-games/countries?page=${page}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch countries");
    }
    const data: DataResponseType = await response.json();
    if (data && data.data) {
      return {
        data: data.data,
        totalPages: data.meta.last_page,
        totalCountries: data.meta.total,
      };
    } else {
      throw new Error("Invalid data format");
    }
  } catch (error: any) {
    console.log(error);
    return {
      data: [],
      totalPages: 0,
      totalCountries: 0,
    };
  }
};
