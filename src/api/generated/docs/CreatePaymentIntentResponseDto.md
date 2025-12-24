
# CreatePaymentIntentResponseDto


## Properties

Name | Type
------------ | -------------
`clientSecret` | string
`paymentId` | string
`txnId` | string

## Example

```typescript
import type { CreatePaymentIntentResponseDto } from ''

// TODO: Update the object below with actual values
const example = {
  "clientSecret": pi_3QRxyz123456789_secret_abc123def456,
  "paymentId": pi_3QRxyz123456789,
  "txnId": donation_ca-abc123def456,
} satisfies CreatePaymentIntentResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatePaymentIntentResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


