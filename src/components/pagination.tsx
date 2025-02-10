import { useI18n } from "@/locales/client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

export interface PaginationProps {
  page: number;
  total: number;
  pageSize: number;
  pageSizeOptions?: number[];
  handlePageChange: (page: number) => void;
  handlePageSizeChange?: (perPage: number) => void;
}

export default function Pagination({ page, total, pageSize, pageSizeOptions, handlePageChange, handlePageSizeChange }: PaginationProps) {
  const t = useI18n();

  const total_pages = Math.ceil(total / pageSize);

  const pageSizeOptionsParsed = pageSizeOptions?.map((option) => {
    return {
      value: option.toString(),
      label: t('common.label.perPage', { count: option })
    }
  }) || [];

  const onHandleManualPageChange = (page: number) => {
    if (page >= 1 && page <= total_pages) {
      handlePageChange(page);
    }
  }

  const onHandlePageSizeChange = (pageSize: string) => {
    if (handlePageSizeChange) {
      handlePageSizeChange(parseInt(pageSize));
    }
  }

  return (
    <div className="grid grid-cols-12 gap-2">
      <Button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>{t('common.button.previous')}</Button>
      <div className="flex items-center justify-center">
        <Input className="w-[45px] mr-2" value={page} onChange={(e) => onHandleManualPageChange(parseInt(e.target.value))} />
        <p className="">{`/ ${total_pages}`}</p>
      </div>
      <Button onClick={() => handlePageChange(page + 1)} disabled={page === total_pages || total_pages === 0}>{t('common.button.next')}</Button>
      <div className="col-start-12 col-end-13">
        {pageSizeOptionsParsed.length > 0 && 
          <Select onValueChange={(value) => onHandlePageSizeChange(value)} value={pageSize.toString()}>
            <SelectTrigger>
              <SelectValue>{pageSize}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {pageSizeOptionsParsed?.map((option) => (
                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        }
      </div>
    </div>
  );
}