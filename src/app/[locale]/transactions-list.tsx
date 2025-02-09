"use client";

import { useQuery } from "@tanstack/react-query";
import { transactionQueryOptions } from "@/queries/transaction";
import TransactionDialog from "./transaction-dialog";
import { useState } from "react";

export default function TransactionsList() {
  const { data, error, isLoading } = useQuery(transactionQueryOptions());

  const [selectedTransactionId, setSelectedTransactionId] = useState<string | null>(null);

  if (isLoading) return <p>Loading transactions...</p>;
  if (error) return <p>Error loading transactions</p>;

  if (!data) return null;

  return (
    <div>
      <h1>Transactions</h1>
      <ul>
        {data.map((transaction) => (
          <li key={transaction.transaction_id} onClick={() => setSelectedTransactionId(transaction.transaction_id)}>{transaction.receiver_whatsapp} - ${transaction.amount_received}</li>
        ))}
      </ul>
      {selectedTransactionId && (
        <TransactionDialog transactionId={selectedTransactionId} onClose={() => {}} />
      )}
    </div>
  );
}