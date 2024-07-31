import { LinksType } from "./country-type";

export interface EventsResponseType {
  data: EventType[];
  links: LinksType;
  meta: MetaType;
}

export interface EventType {
  id: number;
  day: string;
  discipline_name: string;
  discipline_pictogram: string;
  name: any;
  venue_name: string;
  event_name: string;
  detailed_event_name: string;
  start_date: string;
  end_date: string;
  status: string;
  is_medal_event: number;
  is_live: number;
  competitors: Competitor[];
}

export interface Competitor {
  country_id: string;
  country_flag_url: string;
  competitor_name: string;
  position: number;
  result_position: string;
  result_winnerLoserTie: string;
  result_mark: string;
}

interface MetaType {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
  links: MetaLinksType[];
}

interface MetaLinksType {
  url: string;
  label: string;
  active: boolean;
}
