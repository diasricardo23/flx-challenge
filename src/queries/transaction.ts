import API from "@/services/api"
import { Pagination } from "@/types/pagination";
import { TransactionType } from "@/types/transaction";
import { queryOptions } from "@tanstack/react-query"

const queryBasePath = '/transaction'

const transactionQueryOptions = (page: number, limit: number, filters: any) => {
  return queryOptions({
    queryKey: ['transactions', { page, limit, filters }],
    queryFn: async () => {
      return API.get(queryBasePath).then<Pagination<TransactionType>>((response) => {

        let transactions = response.data;

        if (filters) {
          if (filters.status) {
            transactions = transactions.filter((transaction: TransactionType) => transaction.status === filters.status);
          }

          if (filters.search) {
            transactions = transactions.filter((transaction: TransactionType) => {
              return transaction.sender_whatsapp.includes(filters.search) || transaction.receiver_whatsapp.includes(filters.search) || transaction.transaction_id.includes(filters.search);
            });
          }
        }

        const startIndex = (page - 1) * limit;
        
        return {
          records: transactions.slice(startIndex, startIndex + limit),
          total: transactions.length,
          page: page,
          per_page: limit,
          total_pages: Math.ceil(transactions.length / limit)
        }
      });
    }
  })
}

const transactionDetailsQueryOptions = (id: string) => {
  return queryOptions({
    queryKey: ['transactions', id],
    queryFn: async () => {
      return API.get(`${queryBasePath}/${id}`).then<TransactionType>((response) => response.data);
    },
    enabled: !!id,
    staleTime: 1000 * 60
  })
}

export { transactionQueryOptions, transactionDetailsQueryOptions }