type countryType = {
  code?: string;
  label: string;
  phone?: string;
};

interface defaultOptionsContextTypes {
  unit: string;
  city: string;
  country: countryType;
  onSubmitSearch?: () => void;
}

export type { countryType, defaultOptionsContextTypes };
