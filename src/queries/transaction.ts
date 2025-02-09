import API from "@/services/api"
import { TransactionType } from "@/types/transaction";
import { queryOptions } from "@tanstack/react-query"

const queryBasePath = '/transaction'

const transactionQueryOptions = () => {
  return queryOptions({
    queryKey: ['transactions'],
    queryFn: async () => {
      return API.get(queryBasePath).then<TransactionType[]>((response) => response.data);
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