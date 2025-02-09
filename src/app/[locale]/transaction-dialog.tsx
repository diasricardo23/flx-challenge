"use client"; // This is a Client Component

import { useQuery } from "@tanstack/react-query";
import { transactionDetailsQueryOptions } from "@/queries/transaction";

export default function TransactionDialog({ transactionId, onClose }: { transactionId: string, onClose: () => void }) {
  const { data, isLoading, error } = useQuery(transactionDetailsQueryOptions(transactionId));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching transaction details</p>;

  if (!data) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Transaction #{data.transaction_id}</h2>
        <p>Amount: ${data.amount_received}</p>
        <p>Date: {data.date}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}