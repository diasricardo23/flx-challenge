import { useI18n } from "@/locales/client";
import { TransactionPaymentMethod } from "@/types/transaction";

const getBadgeInfoByPaymentMethod = (status: TransactionPaymentMethod): { bgColor: string, messsage: 'cash_pickup' | 'bank_deposit' | 'mobile_wallet' | undefined } => {
  switch (status) {
    case "CASH_PICKUP":
      return { bgColor: "bg-green-500", messsage: "cash_pickup" };
    case "BANK_DEPOSIT":
      return { bgColor: "bg-yellow-500", messsage: "bank_deposit" };
    case "MOBILE_WALLET":
      return { bgColor: "bg-red-500", messsage: "mobile_wallet" };
    default:
      return { bgColor: "bg-gray-500", messsage: undefined };
  }
}


export default function TransactionPaymentMethodBadge({ status }: { status: TransactionPaymentMethod }) {
  const t = useI18n();
  const bagdeInfo = getBadgeInfoByPaymentMethod(status);

  return (
    <span className={`${bagdeInfo.bgColor} text-white rounded-xl px-4 py-1 text-xs font-bold mr-2`}>
      {bagdeInfo.messsage && t(`transaction.payment_method.${bagdeInfo.messsage}`)}
    </span>
  );
}