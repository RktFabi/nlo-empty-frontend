
# AllNeedListsDto


## Properties

Name | Type
------------ | -------------
`id` | string
`needlistName` | string
`needlistStatus` | string
`totalDonated` | number
`totalItems` | number
`totalPrice` | number
`totalTax` | number
`dueDate` | string
`createdAt` | string
`lastUpdated` | string
`userId` | object
`orgId` | object
`locationId` | object
`groupId` | object

## Example

```typescript
import type { AllNeedListsDto } from ''

// TODO: Update the object below with actual values
const example = {
  "id": nL1234567890abcdef,
  "needlistName": Food Donation Drive,
  "needlistStatus": Draft,
  "totalDonated": 0,
  "totalItems": 0,
  "totalPrice": 0,
  "totalTax": 0,
  "dueDate": 2025-10-21T14:33:13.507Z,
  "createdAt": 2025-10-21T14:33:13.507Z,
  "lastUpdated": 2025-10-21T14:33:13.507Z,
  "userId": /users/abc123,
  "orgId": /organization/xyz456,
  "locationId": /locations/lmno789,
  "groupId": ["/groups/documentreference","/groups/documentreference"],
} satisfies AllNeedListsDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AllNeedListsDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


