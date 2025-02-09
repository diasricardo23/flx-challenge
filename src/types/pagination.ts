export type Pagination<T> = {
  records: T[];
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
}