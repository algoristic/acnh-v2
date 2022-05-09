export interface Filter {
  monthOption: string,
  timeOption: string,
  sortProperty: string,
  sortOrder: string
}

const FILTER_DEFAULTS = {
  monthOption: 'current',
  timeOption: 'current',
  sortProperty: 'value',
  sortOrder: 'descending'
};

export { FILTER_DEFAULTS };
