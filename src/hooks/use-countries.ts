"use client";
import { CountryType } from "@/@types/country-type";
import { fetchCountries } from "@/server/fetch-countries";
import { useCallback, useEffect, useState } from "react";

export const useCountries = () => {
  const [dataCountries, setDataCountries] = useState<CountryType[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCountries, setTotalCountries] = useState(0);

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const fetchDataCountries = useCallback(async () => {
    const { data, totalPages, totalCountries } = await fetchCountries(
      currentPage
    );
    setDataCountries(data);
    setTotalPages(totalPages);
    setTotalCountries(totalCountries);
  }, [currentPage]);

  useEffect(() => {
    fetchDataCountries();
  }, [fetchDataCountries]);

  return {
    dataCountries,
    totalPages,
    totalCountries,
    currentPage,
    previousPage,
    nextPage,
    goToPage,
  };
};
