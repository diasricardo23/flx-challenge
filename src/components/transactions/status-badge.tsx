import { useI18n } from "@/locales/client";
import { TransactionStatus } from "@/types/transaction";

const getBadgeInfoByStatus = (status: TransactionStatus): { bgColor: string, messsage: 'completed' | 'pending' | 'failed' | 'in_progress' | undefined } => {
  switch (status) {
    case "COMPLETED":
      return { bgColor: "bg-green-500", messsage: "completed" };
    case "PENDING":
      return { bgColor: "bg-yellow-500", messsage: "pending" };
    case "FAILED":
      return { bgColor: "bg-red-500", messsage: "failed" };
    case "IN_PROGRESS":
      return { bgColor: "bg-blue-500", messsage: "in_progress" };
    default:
      return { bgColor: "bg-gray-500", messsage: undefined };
  }
}


export default function TransactionStatusBadge({ status }: { status: TransactionStatus }) {
  const t = useI18n();
  const bagdeInfo = getBadgeInfoByStatus(status);

  return (
    <span className={`${bagdeInfo.bgColor} text-white rounded-xl px-4 py-1 text-xs font-bold`}>
      {bagdeInfo.messsage && t(`transaction.status.${bagdeInfo.messsage}`)}
    </span>
  );
}