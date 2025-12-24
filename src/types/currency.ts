import type { MoneyAmountDto } from '@/api/generated';

export function makeMoneyAmount(amount: { currency: string, amount: number }): MoneyAmountDto {
    return {
        currency: { tag: 'CurrencyName', value: amount.currency },
        amount: { tag: 'CurrencyAmount', value: amount.amount },
    };
}