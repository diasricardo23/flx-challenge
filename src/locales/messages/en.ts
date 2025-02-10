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
      transaction_details: 'Transaction Details',
      status: 'Status',
      payment_method: 'Payment Method'
    },
    placeholder: {
      search: 'Search by Transaction ID or Sender/Receiver WhatsApp',
      filter_by_status: 'Filter by Status',
      filter_by_payment_method: 'Filter by Payment Method',
    },
    message: {
      no_transactions: 'No transactions found',
      loading_transactions: 'Loading transactions...',
      error_loading_transactions: 'Error loading transactions',
      error_fetching_transaction_details: 'Error fetching transaction details',
      transaction_details_support: "Review the details of this transaction. If you have any concerns, please contact support."
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
      previous: 'Previous',
      clear: 'Clear',
    },
    label: {
      select: 'Select',
      whatsapp: 'WhatsApp',
      perPage: '{count} Per Page'
    },
    message: {
      loading: 'Loading...'
    },
    locale: {
      en: '🇺🇸  English',
      es: '🇪🇸  Spanish'
    }
  }
} as const