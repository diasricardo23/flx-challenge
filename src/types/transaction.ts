
export type TransactionType = {
  transaction_id: string;
  sender_whatsapp: string;
  receiver_whatsapp: string;
  amount_sent: number;
  exchange_rate: number;
  amount_received: number;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED';
  payment_method: 'CASH_PICKUP' | 'BANK_DEPOSIT' | 'MOBILE_WALLET';
  date: string;
}