"use server";

import { DataResponseType } from "@/@types/country-type";

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
      return data.data;
    } else {
      throw new Error("Invalid data format");
    }
  } catch (error: any) {
    console.log(error);
    return [];
  }
};
