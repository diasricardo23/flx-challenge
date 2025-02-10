import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { transactionQueryOptions } from "@/queries/transaction";

import TransactionsList from "./transactions-list";
import SwitchLocale from "@/components/switch";


const ITEMS_PER_PAGE = 5;
const PAGE = 1;

export default async function Home() {

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(transactionQueryOptions(PAGE, ITEMS_PER_PAGE, { status: '', search: '', paymentMethod: '', startDate: '', endDate: '' }));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <header className="flex items-end justify-end p-2">
        <div className="w-[150px]">
          <SwitchLocale />
        </div>
      </header>
      <div className="p-5 md:px-20">
        <TransactionsList />  
      </div>  
    </HydrationBoundary>
  );
}
