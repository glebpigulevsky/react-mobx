interface CurrrenciesResponse {
  time?: {
    updated: string;
    updatedISO: string;
    updateduk: string;
  };
  disclaimer?: string;
  chartName?: string;
  bpi: Array<Currencie>;
}

interface Currencie {
  code?: string;
  description?: string;
  rate?: string;
  rate_float?: number;
  symbol?: string;
}
