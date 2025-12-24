# DonationsApi

All URIs are relative to */api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**stripeControllerCreateIntent**](DonationsApi.md#stripecontrollercreateintent) | **POST** /donations/checkout-intent |  |
| [**stripeControllerGetDonationStatus**](DonationsApi.md#stripecontrollergetdonationstatus) | **GET** /donations/{donation_id}/status |  |
| [**stripeControllerGetPaymentInfo**](DonationsApi.md#stripecontrollergetpaymentinfo) | **GET** /donations/{donation_id}/payment-info |  |



## stripeControllerCreateIntent

> CreatePaymentIntentResponseDto stripeControllerCreateIntent(createPaymentDto)



### Example

```ts
import {
  Configuration,
  DonationsApi,
} from '';
import type { StripeControllerCreateIntentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DonationsApi();

  const body = {
    // CreatePaymentDto
    createPaymentDto: ...,
  } satisfies StripeControllerCreateIntentRequest;

  try {
    const data = await api.stripeControllerCreateIntent(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createPaymentDto** | [CreatePaymentDto](CreatePaymentDto.md) |  | |

### Return type

[**CreatePaymentIntentResponseDto**](CreatePaymentIntentResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Payment intent created successfully |  -  |
| **400** | Invalid payment data or validation error |  -  |
| **500** | Payment provider configuration error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## stripeControllerGetDonationStatus

> DonationStatusResponseDto stripeControllerGetDonationStatus(donationId)



### Example

```ts
import {
  Configuration,
  DonationsApi,
} from '';
import type { StripeControllerGetDonationStatusRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DonationsApi();

  const body = {
    // string | The unique donation ID
    donationId: donation_ca-abc123def456,
  } satisfies StripeControllerGetDonationStatusRequest;

  try {
    const data = await api.stripeControllerGetDonationStatus(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **donationId** | `string` | The unique donation ID | [Defaults to `undefined`] |

### Return type

[**DonationStatusResponseDto**](DonationStatusResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Donation status retrieved successfully |  -  |
| **404** | Donation not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## stripeControllerGetPaymentInfo

> PaymentInfoResponseDto stripeControllerGetPaymentInfo(donationId)



### Example

```ts
import {
  Configuration,
  DonationsApi,
} from '';
import type { StripeControllerGetPaymentInfoRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DonationsApi();

  const body = {
    // string | The unique donation ID
    donationId: donation_ca-abc123def456,
  } satisfies StripeControllerGetPaymentInfoRequest;

  try {
    const data = await api.stripeControllerGetPaymentInfo(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **donationId** | `string` | The unique donation ID | [Defaults to `undefined`] |

### Return type

[**PaymentInfoResponseDto**](PaymentInfoResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Payment information retrieved successfully |  -  |
| **404** | Donation not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

