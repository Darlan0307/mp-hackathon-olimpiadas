"use client";
import { CountryType } from "@/@types/country-type";
import { fetchCountries } from "@/server/fetch-countries";
import { useCallback, useEffect, useState } from "react";

export const useCountries = () => {
  const [dataCountries, setDataCountries] = useState<CountryType[]>([]);
  const [totalCountries, setTotalCountries] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const fetchDataCountries = useCallback(async () => {
    const { data, totalPages } = await fetchCountries(currentPage);
    setDataCountries(data);
    setTotalCountries(totalPages);
  }, [currentPage]);

  useEffect(() => {
    fetchDataCountries();
  }, [fetchDataCountries]);

  return {
    dataCountries,
    totalCountries,
    currentPage,
    previousPage,
    nextPage,
  };
};
