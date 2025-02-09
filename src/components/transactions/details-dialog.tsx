import { TransactionType } from "@/types/transaction";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { transactionDetailsQueryOptions } from "@/queries/transaction";
import { useQuery } from "@tanstack/react-query";
import { useI18n } from "@/locales/client";
import TransactionStatusBadge from "./status-badge";
import TransactionPaymentMethodBadge from "./payment-method-badge";
import dayjs from "dayjs";
import { currencyFormatter } from "@/utils/formatter";

export interface TransactionDetailsDialogProps {
  transactionId: string ;
  onChangeVisible: (open: boolean) => void;
  open: boolean;
}

export default function TransactionDetailsDialog({ transactionId, onChangeVisible, open }: TransactionDetailsDialogProps) {
  const t = useI18n();

  const { data, isLoading, error } = useQuery(transactionDetailsQueryOptions(transactionId));

  return (
    <Dialog open={open} onOpenChange={onChangeVisible}>
      <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>{`${t('transaction.label.transaction_details')} (#${transactionId})`}</DialogTitle>
            <DialogDescription>
              {t('transaction.message.transaction_details_support')}
            </DialogDescription>
          </DialogHeader>
          {isLoading && <p>{t('common.message.loading')}</p>}
          {error && <p>{t('transaction.message.error_fetching_transaction_details')}</p>}
          {data && (
            <div className="grid grid-cols-4 gap-x-1 gap-y-4">
            <div className="col-span-2">
              <p className="font-bold">{t('transaction.label.sender')}</p>
              <p>{`${t('common.label.whatsapp')}: ${data.sender_whatsapp}`}</p>
              <p>{t('transaction.label.amount_sent', { amount: currencyFormatter(data.amount_sent, 'USD')})}</p>
            </div>
            <div className="col-span-2">
            <p className="font-bold">{t('transaction.label.receiver')}</p>
            <p>{`${t('common.label.whatsapp')}: ${data.receiver_whatsapp}`}</p>
            <p>{t('transaction.label.amount_received', { amount: currencyFormatter(data.amount_received, 'MXN')})}</p>
            </div>
            <div>
            <p className="font-bold">{t('transaction.label.status')}</p>
              <TransactionStatusBadge status={data.status} />
            </div>
            <div>
            <p className="font-bold">{t('transaction.label.payment_method')}</p>
              <TransactionPaymentMethodBadge status={data.payment_method} />
            </div>
            <div className="col-span-2">
              <p className="font-bold">{t('transaction.label.exchange_rate')}</p>
              <p>{data.exchange_rate}</p>
            </div>
            <div className="col-span-2">
              <span className="text-sm font-light italic">{t('transaction.label.transfered_on', { date: dayjs(data.date).format('DD MMM YY HH:mm:ss') })}</span>
            </div>
          </div>
          )}
          
        </DialogContent>
    </Dialog>
  );
}