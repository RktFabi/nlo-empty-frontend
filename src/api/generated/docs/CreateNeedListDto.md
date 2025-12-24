
# CreateNeedListDto


## Properties

Name | Type
------------ | -------------
`needlistName` | string
`needlistStatus` | string
`totalDonated` | number
`totalItems` | number
`totalPrice` | number
`totalTax` | number
`dueDate` | string
`groupId` | object
`orgId` | object
`userId` | object
`locationId` | object
`createdAt` | string
`lastUpdated` | string

## Example

```typescript
import type { CreateNeedListDto } from ''

// TODO: Update the object below with actual values
const example = {
  "needlistName": Food Donation Drive,
  "needlistStatus": Draft,
  "totalDonated": 0,
  "totalItems": 0,
  "totalPrice": 0,
  "totalTax": 0,
  "dueDate": Sep 30, 2025,
  "groupId": ["/groups/i5bu4dnoSy...","/groups/aB12cdEfG..."],
  "orgId": /organization/U63tWq...,
  "userId": /users/RzKs6he1...,
  "locationId": /locations/dL34sP...,
  "createdAt": 2023-10-01T12:00:00Z,
  "lastUpdated": 2023-10-01T12:00:00Z,
} satisfies CreateNeedListDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateNeedListDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


