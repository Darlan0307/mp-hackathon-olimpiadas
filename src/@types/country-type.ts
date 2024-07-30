export interface DataResponseType {
  data: CountryType[];
  links: LinksType;
  meta: MetaType;
}
export interface CountryType {
  id: string;
  name: string;
  continent: string;
  flag_url: string;
  gold_medals: number;
  silver_medals: number;
  bronze_medals: number;
  total_medals: number;
  rank: number;
  rank_total_medals: number;
}

interface LinksType {
  first: string;
  last: string;
  prev: string;
  next: string;
}

interface MetaType {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
}
