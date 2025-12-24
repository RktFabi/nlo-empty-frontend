
# PaymentInfoResponseDto


## Properties

Name | Type
------------ | -------------
`txnId` | string
`status` | string
`donatedAmount` | [MoneyAmountDto](MoneyAmountDto.md)
`paymentProviderFee` | [MoneyAmountDto](MoneyAmountDto.md)
`paymentId` | string
`totalTaxDeductible` | [MoneyAmountDto](MoneyAmountDto.md)
`totalAmount` | [MoneyAmountDto](MoneyAmountDto.md)

## Example

```typescript
import type { PaymentInfoResponseDto } from ''

// TODO: Update the object below with actual values
const example = {
  "txnId": txn_id_ca-abc123def456,
  "status": processing,
  "donatedAmount": null,
  "paymentProviderFee": null,
  "paymentId": pi_3QRxyz123456789,
  "totalTaxDeductible": null,
  "totalAmount": null,
} satisfies PaymentInfoResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PaymentInfoResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


