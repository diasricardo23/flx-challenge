import { useI18n } from "@/locales/client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export interface PaginationProps {
  page: number;
  total: number;
  perPage: number;
  handlePageChange: (page: number) => void;
}

export default function Pagination({ page, total, perPage, handlePageChange }: PaginationProps) {
  const t = useI18n();

  const total_pages = Math.ceil(total / perPage);

  const onHandleManualPageChange = (page: number) => {
    if (page >= 1 && page <= total_pages) {
      handlePageChange(page);
    }
  }

  return (
    <div className="flex flex-row">
      <Button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>{t('common.button.previous')}</Button>
      <Input className="w-[100px] mx-4" value={page} onChange={(e) => onHandleManualPageChange(parseInt(e.target.value))} />
      <Button onClick={() => handlePageChange(page + 1)} disabled={page === total_pages || total_pages === 0}>{t('common.button.next')}</Button>
    </div>
  );
}