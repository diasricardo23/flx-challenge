import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { transactionQueryOptions } from "@/queries/transaction";
import TransactionsList from "./transactions-list";

export default async function Home() {

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(transactionQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <header>
        <h1>Transactions</h1>
      </header>
      <div className="p-5 md:p-20">
        <TransactionsList />  
      </div>  
    </HydrationBoundary>
  );
}
