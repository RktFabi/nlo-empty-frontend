
# RegisterUserDto


## Properties

Name | Type
------------ | -------------
`userEmail` | string
`password` | string

## Example

```typescript
import type { RegisterUserDto } from ''

// TODO: Update the object below with actual values
const example = {
  "userEmail": null,
  "password": null,
} satisfies RegisterUserDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RegisterUserDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


