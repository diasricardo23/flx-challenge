import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { transactionQueryOptions } from "@/queries/transaction";
import TransactionsList from "./transactions-list";

const ITEMS_PER_PAGE = 5;
const PAGE = 1;

export default async function Home() {

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(transactionQueryOptions(PAGE, ITEMS_PER_PAGE, { status: '', search: '', paymentMethod: '', startDate: '', endDate: '' }));

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
