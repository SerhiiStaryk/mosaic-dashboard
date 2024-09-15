import { THEMES } from '../constants';
import { OptionItem } from '../interfaces';

export type Company = {
  id: string;
  ceo: string;
  cik: string;
  lei: string;
  sic: number;
  name: string;
  sector: string;
  ticker: string;
  hq_state: string;
  template: string;
  employees: number;
  inc_state: string;
  hq_country: string;
  legal_name: string;
  company_url: string;
  hq_address1: string;
  inc_country: string;
  entity_status: string;
  legacy_sector: string;
  thea_enabled: boolean;
  industry_group: string;
  stock_exchange: string;
  hq_address_city: string;
  mailing_address: string;
  business_address: string;
  long_description: string;
  business_phone_no: string;
  entity_legal_form: string;
  industry_category: string;
  short_description: string;
  hq_address2: string | null;
  latest_filing_date: string;
  standardized_active: boolean;
  last_fundamental_date: string;
  last_stock_price_date: string;
  legacy_industry_group: string;
  first_fundamental_date: string;
  first_stock_price_date: string;
  hq_address_postal_code: string;
  legacy_industry_category: string;
};

export type Companies = Company[];

export type OptionForSelect = {
  label: string;
  value: string;
};

export type OptionsForSelect = OptionForSelect[];

export type Theme = keyof typeof THEMES;

export type FetchResult<T> = {
  data: T | null;
  loading: boolean;
  error: { message: string } | null;
};

export type OptionsObject = Record<string, OptionItem>;
