export default {
  transaction: {
    label: {
      transaction_id: 'Transacción #{id}',
      sender: 'Remitente',
      receiver: 'Receptor',
      amount_sent: 'Monto enviado: {amount}',
      exchange_rate: 'Tasa de cambio',
      amount_received: 'Monto recibido: {amount}',
      transfered_on: 'Transferido el {date}',
      transaction_details: 'Detalles de la transacción',
      status: 'Estado',
      payment_method: 'Método de pago'
    },
    placeholder: {
      search: 'Buscar por ID de transacción o WhatsApp del remitente/receptor',
      filter_by_status: 'Filtrar por estado',
      filter_by_payment_method: 'Filtrar por método de pago',
    },
    message: {
      no_transactions: 'No se encontraron transacciones',
      loading_transactions: 'Cargando transacciones...',
      error_loading_transactions: 'Error al cargar las transacciones',
      error_fetching_transaction_details: 'Error al obtener los detalles de la transacción',
      transaction_details_support: "Revise los detalles de esta transacción. Si tiene alguna inquietud, comuníquese con soporte."
    },
    status: {
      completed: 'Completada',
      pending: 'Pendiente',
      failed: 'Fallida',
      in_progress: 'En progreso'
    },
    payment_method: {
      cash_pickup: 'Retiro en efectivo',
      bank_deposit: 'Depósito bancario',
      mobile_wallet: 'Billetera móvil'
    }
  },
  common: {
    button: {
      viewMore: 'Ver más',
      close: 'Cerrar',
      next: 'Siguiente',
      previous: 'Anterior',
      clear: 'Limpiar',
    },
    label: {
      select: 'Seleccionar',
      whatsapp: 'WhatsApp',
      perPage: '{count} Por página'
    },
    message: {
      loading: 'Cargando...'
    },
    locale: {
      en: '🇺🇸  Inglés',
      es: '🇪🇸  Español'
    }
  }
} as const;