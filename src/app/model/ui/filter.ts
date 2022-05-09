export interface Filter {
  monthOption: string,
  timeOption: string,
  sortProperty: string,
  sortOrder: string,
  months?: number[],
  priceRange: boolean,
  priceMin: number,
  priceMax: number
}

const FILTER_DEFAULTS = {
  monthOption: 'current',
  timeOption: 'current',
  sortProperty: 'value',
  sortOrder: 'descending',
  months: undefined,
  priceRange: false,
  priceMin: 0,
  priceMax: 0
};

export { FILTER_DEFAULTS };
