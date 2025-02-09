"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { transactionQueryOptions } from "@/queries/transaction";
import TransactionCard from "@/components/transactions/card";
import TransactionDialog from "./transaction-dialog";

export default function TransactionsList() {
  const { data, error, isLoading } = useQuery(transactionQueryOptions());

  const [selectedTransactionId, setSelectedTransactionId] = useState<string | null>(null);

  if (isLoading) return <p>Loading transactions...</p>;
  if (error) return <p>Error loading transactions</p>;

  if (!data) return null;

  return (
    <div>
      {data.map((transaction) => (
        <TransactionCard key={transaction.transaction_id} transaction={transaction} onOpen={() => setSelectedTransactionId(transaction.transaction_id)} />
      ))}
      {selectedTransactionId && (
        <TransactionDialog transactionId={selectedTransactionId} onClose={() => {}} />
      )}
    </div>
  );
}