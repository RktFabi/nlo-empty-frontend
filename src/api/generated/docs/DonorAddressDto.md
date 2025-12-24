
# DonorAddressDto


## Properties

Name | Type
------------ | -------------
`street` | string
`city` | string
`provinceState` | string
`zipPostalCode` | string
`country` | string

## Example

```typescript
import type { DonorAddressDto } from ''

// TODO: Update the object below with actual values
const example = {
  "street": 123 Test Drive,
  "city": Toronto,
  "provinceState": Ontario,
  "zipPostalCode": M4E1Z2,
  "country": Canada,
} satisfies DonorAddressDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DonorAddressDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


