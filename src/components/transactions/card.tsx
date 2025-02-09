import { TransactionType } from "@/types/transaction";
import TransactionStatusBadge from "./status-badge";
import { useI18n } from "@/locales/client";
import dayjs from "dayjs";
import TransactionPaymentMethodBadge from "./payment-method-badge";
import { currencyFormatter } from "@/utils/formatter";

export default function TransactionCard({ transaction, onOpen }: { transaction: TransactionType, onOpen: () => void }) {
  const t = useI18n();

  return (
    <div className="bg-gray-500 mb-4 rounded-md p-4 grid grid-cols-12">
      {/* <div className="col-span-12 md:col-start-1 md:col-end-3">
        <h2 className="font-bold">{`${t('transaction.label.transaction_id', { id: transaction.transaction_id})}`}</h2>
      </div> */}
      <div className="col-span-12 md:col-start-10 md:col-end-13 flex md:justify-end">
        <div>
          <TransactionPaymentMethodBadge status={transaction.payment_method} />
          <TransactionStatusBadge status={transaction.status} />
        </div>
      </div>
      <div className="col-span-12 md:my-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="font-bold">{`${t('transaction.label.sender')} (${transaction.sender_whatsapp})`}</p>
            <p>{t('transaction.label.amount_sent', { amount: currencyFormatter(transaction.amount_sent, 'USD')})}</p>
          </div>
          <div>
            <p className="font-bold">{t('transaction.label.exchange_rate')}</p>
            <p>{transaction.exchange_rate}</p>
          </div>
          <div>
            <p className="font-bold">{`${t('transaction.label.receiver')} (${transaction.receiver_whatsapp})`}</p>
            <p>{t('transaction.label.amount_received', { amount: currencyFormatter(transaction.amount_received, 'MXN')})}</p>
          </div>
        </div>
      </div>
      <div className="col-span-6 md:col-start-1 md:col-end-4 flex items-end">
        <span className="text-sm font-light italic">{t('transaction.label.transfered_on', { date: dayjs(transaction.date).format('DD MMM YY HH:mm:ss') })}</span>
      </div>
      <div className="col-span-6 md:col-start-10 md:col-end-13 flex justify-end">
        <button className="bg-blue-500 text-white rounded-md p-2" onClick={onOpen}>{t('common.button.viewMore')}</button>
      </div>
    </div>
  );
}