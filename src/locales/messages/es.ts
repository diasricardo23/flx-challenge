export default {
  transaction: {
    label: {
      transaction_id: 'Transacción #{id}',
      sender: 'Remitente',
      receiver: 'Receptor',
      amount_sent: 'Monto enviado: {amount}',
      exchange_rate: 'Tasa de Cambio',
      amount_received: 'Monto recibido: {amount}',
      transfered_on: 'Transferido el {date}',
      transaction_details: 'Detalles de la Transacción',
      status: 'Estado',
      payment_method: 'Método de Pago'
    },
    placeholder: {
      search: 'Buscar por ID de Transacción o WhatsApp del Remitente/Receptor'
    },
    message: {
      no_transactions: 'No se encontraron transacciones',
      loading_transactions: 'Cargando transacciones...',
      error_loading_transactions: 'Error al cargar transacciones',
      error_fetching_transaction_details: 'Error al obtener los detalles de la transacción',
      transaction_details_support: "Revise los detalles de esta transacción. Si tiene alguna inquietud, comuníquese con soporte."
    },
    status: {
      completed: 'Completada',
      pending: 'Pendiente',
      failed: 'Fallida',
      in_progress: 'En Progreso'
    },
    payment_method: {
      cash_pickup: 'Retiro en Efectivo',
      bank_deposit: 'Depósito Bancario',
      mobile_wallet: 'Billetera Móvil'
    }
  },
  common: {
    button: {
      viewMore: 'Ver Más',
      close: 'Cerrar',
      next: 'Siguiente',
      previous: 'Anterior'
    },
    label: {
      select: 'Seleccionar',
      whatsapp: 'WhatsApp'
    },
    message: {
      loading: 'Cargando...'
    }
  }
} as const