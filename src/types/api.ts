export interface IApiSchema {
  searchData: (
    searchText: string,
    size: number,
    from: number
  ) => Promise<{ data: []; total: number }>;
  getDetails: (packageName: string) => Promise<object>;
}
