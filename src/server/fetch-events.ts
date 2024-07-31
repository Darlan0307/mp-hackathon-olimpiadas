"use server";

import { EventsResponseType } from "@/@types/events-type";

export const fetchEvents = async (page: number) => {
  try {
    const response = await fetch(
      `https://apis.codante.io/olympic-games/events?page=${page}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }
    const data: EventsResponseType = await response.json();
    if (data && data.data) {
      return {
        data: data.data,
        totalPages: data.meta.total,
      };
    } else {
      throw new Error("Invalid data format");
    }
  } catch (error: any) {
    console.log(error);
    return {
      data: [],
      totalPages: 0,
    };
  }
};
