"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { transactionQueryOptions } from "@/queries/transaction";
import TransactionCard from "@/components/transactions/card";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { useI18n } from "@/locales/client";
import Pagination from "@/components/pagination";
import { Input } from "@/components/ui/input";
import TransactionDetailsDialog from "@/components/transactions/details-dialog";

const ITEMS_PER_PAGE = 5;
const PAGE = 1;

export default function TransactionsList() {
  const t = useI18n();

  const [selectedTransactionId, setSelectedTransactionId] = useState<string | null>(null);
  const [filters, setFilters] = useState<{ status: string, search: string }>({
    status: '',
    search: ''
  });
  const [page, setPage] = useState(PAGE);
  const [search, setSearch] = useState('');

  const { data, error, isLoading } = useQuery(transactionQueryOptions(page, ITEMS_PER_PAGE, filters));

  const statusOptions = [
    { value: "COMPLETED", label: t('transaction.status.completed') },
    { value: "FAILED", label: t('transaction.status.failed') },
    { value: "IN_PROGRESS", label: t('transaction.status.in_progress') },
    { value: "PENDING", label: t('transaction.status.pending') }
  ];

  const onSelectStatusChange = (value: string) => {
    setFilters({ ...filters, status: value });
    setPage(PAGE);
  }

  const onDebounceSearchChange = (value: string) => {
    setSearch(value);

    setTimeout(() => {
      setFilters({ ...filters, search: value });
      setPage(PAGE);
    } , 500);
  }

  return (
    <div>
      <div className="mb-4 flex flex-row justify-between">
        <Select onValueChange={onSelectStatusChange} value={filters.status}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={t('common.label.select')} />
          </SelectTrigger>
          <SelectContent>
            {statusOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input className="w-[500px]" placeholder={t('transaction.placeholder.search')} value={search} onChange={(e) => onDebounceSearchChange(e.target.value)} />
      </div>
      {isLoading && <p>{t('transaction.message.loading_transactions')}</p>}
      {error && <p>{t('transaction.message.error_loading_transactions')}</p>}
      {data && (
        <>
          {data.records.length === 0 && <p><p>{t('transaction.message.no_transactions')}</p></p>}
          {data.records.map((transaction) => (
            <TransactionCard key={transaction.transaction_id} transaction={transaction} onOpen={() => setSelectedTransactionId(transaction.transaction_id)} />
          ))}
        <div>
          <Pagination page={page} total={data.total} perPage={ITEMS_PER_PAGE} handlePageChange={setPage} />
        </div>
        </>
      )}
      {selectedTransactionId && (
        <TransactionDetailsDialog transactionId={selectedTransactionId} onChangeVisible={() => setSelectedTransactionId(null)} open={!!selectedTransactionId} />
      )}
    </div>
  );
}