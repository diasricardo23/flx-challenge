'use client'

import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { useChangeLocale, useCurrentLocale, useI18n } from "@/locales/client";

export default function SwitchLocale() {
  const t = useI18n();

  const currentLocale = useCurrentLocale();

  const changeLocale = useChangeLocale();

  const localeOptions = [
    { value: "en", label: t('common.locale.en') },
    { value: "es", label: t('common.locale.es') }
  ];

  const onChangeLocale = (value: string) => {
    changeLocale(value as any);
  }

  return (
    <Select onValueChange={onChangeLocale} value={currentLocale}>
      <SelectTrigger>
        <SelectValue placeholder={t('common.label.select')} />
      </SelectTrigger>
      <SelectContent>
        {localeOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}