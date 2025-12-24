# UsersApi

All URIs are relative to */api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**userControllerGetCurrentUser**](UsersApi.md#usercontrollergetcurrentuser) | **GET** /users/me | Get profile of the currently authenticated user |
| [**userControllerRegisterUser**](UsersApi.md#usercontrollerregisteruser) | **POST** /users/register | Register a new user |



## userControllerGetCurrentUser

> userControllerGetCurrentUser()

Get profile of the currently authenticated user

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UserControllerGetCurrentUserRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  try {
    const data = await api.userControllerGetCurrentUser();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

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
| **200** | Returns current user profile. |  -  |
| **401** | No or invalid authentication token. |  -  |
| **404** | User profile not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## userControllerRegisterUser

> userControllerRegisterUser(registerUserDto)

Register a new user

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UserControllerRegisterUserRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // RegisterUserDto
    registerUserDto: ...,
  } satisfies UserControllerRegisterUserRequest;

  try {
    const data = await api.userControllerRegisterUser(body);
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
| **registerUserDto** | [RegisterUserDto](RegisterUserDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | User successfully registered. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

