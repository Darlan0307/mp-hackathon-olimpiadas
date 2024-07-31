import { CountryType } from "@/@types/country-type";

export interface ContinentType {
  [key: string]: number;
}

export const countContinent = (countries: CountryType[]) => {
  const continents: Record<string, number> = {};

  countries.forEach((country) => {
    if (country.continent) {
      continents[country.continent] = (continents[country.continent] || 0) + 1;
    }
  });

  return [continents];
};
