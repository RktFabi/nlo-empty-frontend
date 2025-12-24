
# DonorDto


## Properties

Name | Type
------------ | -------------
`anonymous` | boolean
`fullName` | string
`email` | string
`address` | [DonorAddressDto](DonorAddressDto.md)

## Example

```typescript
import type { DonorDto } from ''

// TODO: Update the object below with actual values
const example = {
  "anonymous": false,
  "fullName": John Doe,
  "email": john@example.com,
  "address": null,
} satisfies DonorDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DonorDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


