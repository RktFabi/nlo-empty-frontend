// /* eslint-disable */
// /* tslint:disable */

// import { donationsApi } from '@/api/client';
// import {
//   CreatePaymentDto,
//   CreatePaymentIntentResponseDto,
//   DonationStatusResponseDto,
//   PaymentInfoResponseDto,
// } from '@/api/generated';
// // import { MoneyAmount } from '@/types/currency';

// // create copy type of CheckoutIntentDto without amount and currency, adding money
// // export type CheckoutIntentPayload = Omit<CreatePaymentDto, 'amount' | 'currency'> & {
// //   money: MoneyAmount;
// // };

// // convert CheckoutIntentPayload to CheckoutIntentDto
// // const toCheckoutIntentDto = (payload: CheckoutIntentPayload): CreatePaymentDto => ({
// //   ...payload,
// //   amount: payload.money.amount.value,
// //   currency: payload.money.currency.value,
// // });

// // send request to Backend API to create checkout intent
// export const createCheckoutIntent = async (
//   payload: CreatePaymentDto,
// ): Promise<CreatePaymentIntentResponseDto | null> => {
//   try {
//     // const normalized = toCheckoutIntentDto(payload);
//     const response = await donationsApi.stripeControllerCreateIntent({ createPaymentDto: payload });
//     return response;
//   } catch (err) {
//     console.error('checkout-intent failed', err);
//     return null;
//   }
// };

// export const getDonationStatus = async (donationId: string): Promise<DonationStatusResponseDto | null> => {
//   try {
//     const response = await donationsApi.stripeControllerGetDonationStatus({ donationId });
//     return response;
//   } catch (err) {
//     console.error('get-donation-status failed', err);
//     return null;
//   }
// };

// export const getDonationPaymentInfo = async (donationId: string): Promise<PaymentInfoResponseDto> => {
//   try {
//     const response = await donationsApi.stripeControllerGetPaymentInfo({ donationId });
//     return response;
//   } catch (err) {
//     console.error('get-donation-payment-info failed', err);
//     throw err;
//   }
// };
