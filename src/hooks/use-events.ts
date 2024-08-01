"use client";
import { EventType } from "@/@types/events-type";
import { fetchEvents } from "@/server/fetch-events";
import { useCallback, useEffect, useState } from "react";

export const useEvents = () => {
  const [dataEvents, setDataEvents] = useState<EventType[]>([]);
  const [totalEvents, setTotalEvents] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const fetchDataEvents = useCallback(async () => {
    const { data, totalPages } = await fetchEvents(currentPage);
    setDataEvents(data);
    setTotalEvents(totalPages);
  }, [currentPage]);

  useEffect(() => {
    fetchDataEvents();
  }, [fetchDataEvents]);

  return {
    dataEvents,
    totalEvents,
    currentPage,
    previousPage,
    nextPage,
    goToPage,
  };
};
