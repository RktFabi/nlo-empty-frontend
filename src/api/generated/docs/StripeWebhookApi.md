# StripeWebhookApi

All URIs are relative to */api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**stripeWebhookControllerHandleStripeWebhookCa**](StripeWebhookApi.md#stripewebhookcontrollerhandlestripewebhookca) | **POST** /stripe/webhookCa |  |
| [**stripeWebhookControllerHandleStripeWebhookUs**](StripeWebhookApi.md#stripewebhookcontrollerhandlestripewebhookus) | **POST** /stripe/webhookUs |  |



## stripeWebhookControllerHandleStripeWebhookCa

> stripeWebhookControllerHandleStripeWebhookCa(stripeSignature)



### Example

```ts
import {
  Configuration,
  StripeWebhookApi,
} from '';
import type { StripeWebhookControllerHandleStripeWebhookCaRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new StripeWebhookApi();

  const body = {
    // string
    stripeSignature: stripeSignature_example,
  } satisfies StripeWebhookControllerHandleStripeWebhookCaRequest;

  try {
    const data = await api.stripeWebhookControllerHandleStripeWebhookCa(body);
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
| **stripeSignature** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## stripeWebhookControllerHandleStripeWebhookUs

> stripeWebhookControllerHandleStripeWebhookUs(stripeSignature)



### Example

```ts
import {
  Configuration,
  StripeWebhookApi,
} from '';
import type { StripeWebhookControllerHandleStripeWebhookUsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new StripeWebhookApi();

  const body = {
    // string
    stripeSignature: stripeSignature_example,
  } satisfies StripeWebhookControllerHandleStripeWebhookUsRequest;

  try {
    const data = await api.stripeWebhookControllerHandleStripeWebhookUs(body);
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
| **stripeSignature** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

