export default {
  transaction: {
    label: {
      transaction_id: 'Transaction #{id}',
      sender: 'Sender',
      receiver: 'Receiver',
      amount_sent: 'Amount sent: {amount}',
      exchange_rate: 'Exchange Rate',
      amount_received: 'Amount received: {amount}',
      transfered_on: 'Transfered on {date}',
    },
    placeholder: {
      search: 'Search by Transaction ID or Sender/Receiver WhatsApp'
    },
    message: {
      no_transactions: 'No transactions found',
      loading_transactions: 'Loading transactions...',
      error_loading_transactions: 'Error loading transactions'
    },
    status: {
      completed: 'Completed',
      pending: 'Pending',
      failed: 'Failed',
      in_progress: 'In Progress'
    },
    payment_method: {
      cash_pickup: 'Cash Pickup',
      bank_deposit: 'Bank Deposit',
      mobile_wallet: 'Mobile Wallet'
    }
  },
  common: {
    button: {
      viewMore: 'View More',
      close: 'Close',
      next: 'Next',
      previous: 'Previous'
    },
    label: {
      select: 'Select'
    }
  }
} as const