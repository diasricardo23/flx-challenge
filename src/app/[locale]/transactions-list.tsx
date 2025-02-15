"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { TransactionFilters, transactionQueryOptions } from "@/queries/transaction";
import TransactionCard from "@/components/transactions/card";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { useI18n } from "@/locales/client";
import Pagination from "@/components/pagination";
import { Input } from "@/components/ui/input";
import TransactionDetailsDialog from "@/components/transactions/details-dialog";
import { DatePickerWithRange } from "@/components/datepicker";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";

const ITEMS_PER_PAGE = 4;
const PAGE = 1;

export default function TransactionsList() {
  const t = useI18n();

  const [selectedTransactionId, setSelectedTransactionId] = useState<string | null>(null);
  const [filters, setFilters] = useState<TransactionFilters>({
    status: '',
    search: '',
    paymentMethod: '',
    startDate: '',
    endDate: ''
  });
  const [page, setPage] = useState(PAGE);
  const [pageSize, setPageSize] = useState(ITEMS_PER_PAGE);
  const [search, setSearch] = useState('');
  const [date, setDate] = useState<DateRange | undefined>();

  const queryOptions = transactionQueryOptions(page, pageSize, filters);
  const { data, error, isLoading, isFetching } = useQuery({
    ...queryOptions,
    placeholderData: (prev) => prev || { records: [], total: 0, page: PAGE, per_page: ITEMS_PER_PAGE, total_pages: 0 }
  });

  const statusOptions = [
    { value: "COMPLETED", label: t('transaction.status.completed') },
    { value: "FAILED", label: t('transaction.status.failed') },
    { value: "IN_PROGRESS", label: t('transaction.status.in_progress') },
    { value: "PENDING", label: t('transaction.status.pending') }
  ];

  const paymentMethodOptions = [
    { value: "BANK_DEPOSIT", label: t('transaction.payment_method.bank_deposit') },
    { value: "MOBILE_WALLET", label: t('transaction.payment_method.mobile_wallet') },
    { value: "CASH_PICKUP", label: t('transaction.payment_method.cash_pickup') },
  ];

  const cleanFilters = () => {
    setFilters({
      status: '',
      search: '',
      paymentMethod: '',
      startDate: '',
      endDate: ''
    });
    setPage(PAGE);
    setSearch('');
    setDate(undefined);
  }

  const onSelectStatusChange = (value: string) => {
    setFilters({ ...filters, status: value });
    setPage(PAGE);
  }

  const onSelectPaymentMethodChange = (value: string) => {
    setFilters({ ...filters, paymentMethod: value });
    setPage(PAGE);
  }

  const onSelectPageSizeChange = (value: number) => {
    setPageSize(value);
    setPage(PAGE);
  }

  const onDebounceSearchChange = (value: string) => {
    setSearch(value);

    setTimeout(() => {
      setFilters({ ...filters, search: value });
      setPage(PAGE);
    } , 500);
  }

  const onDebounceDateChange = (value: DateRange | undefined) => {
    setDate(value);

    setTimeout(() => {
      setFilters({ ...filters, startDate: value?.from?.toISOString(), endDate: value?.to?.toISOString() });
      setPage(PAGE);
    } , 500);
  }

  return (
    <div>
      <div className="mb-4">
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div className="col-span-2 sm:col-span-1 order-2 sm:order-1">
            <Input className="sm:w-[450px]" placeholder={t('transaction.placeholder.search')} value={search} onChange={(e) => onDebounceSearchChange(e.target.value)} />
          </div>
          <div className="col-span-2 sm:col-span-1 flex justify-end order-1 sm:order-2">
            <Button variant='outline' className="w-[100px]" onClick={cleanFilters}>{t('common.button.clear')}</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <div className="">
            <Select onValueChange={onSelectStatusChange} value={filters.status}>
              <SelectTrigger>
                <SelectValue placeholder={t('transaction.placeholder.filter_by_status')} />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="">
            <Select onValueChange={onSelectPaymentMethodChange} value={filters.paymentMethod}>
              <SelectTrigger>
              <SelectValue placeholder={t('transaction.placeholder.filter_by_payment_method')} />
              </SelectTrigger>
              <SelectContent>
                {paymentMethodOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <DatePickerWithRange onChangeDate={onDebounceDateChange} value={date} />
          </div>
        </div>
      </div>
      {isFetching && <p className="mb-2">{t('transaction.message.loading_transactions')}</p>}
      {isLoading && <p className="mb-2">{t('transaction.message.loading_transactions')}</p>}
      {error && <p className="mb-2">{t('transaction.message.error_loading_transactions')}</p>}
      {data && (
        <>
          {data.records.length === 0 && <p className="mb-2">{t('transaction.message.no_transactions')}</p>}
          {data.records.map((transaction) => (
            <TransactionCard key={transaction.transaction_id} transaction={transaction} onOpen={() => setSelectedTransactionId(transaction.transaction_id)} />
          ))}
        <div>
          <Pagination page={page} total={data.total} pageSize={pageSize} handlePageChange={setPage} handlePageSizeChange={onSelectPageSizeChange} pageSizeOptions={[4,10,15]} />
        </div>
        </>
      )}
      {selectedTransactionId && (
        <TransactionDetailsDialog transactionId={selectedTransactionId} onChangeVisible={() => setSelectedTransactionId(null)} open={!!selectedTransactionId} />
      )}
    </div>
  );
}