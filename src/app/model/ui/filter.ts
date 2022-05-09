export interface Filter {
  monthOption: string,
  timeOption: string,
  sortProperty: string,
  sortOrder: string,
  months?: number[]
}

const FILTER_DEFAULTS = {
  monthOption: 'current',
  timeOption: 'current',
  sortProperty: 'value',
  sortOrder: 'descending',
  months: undefined
};

export { FILTER_DEFAULTS };
