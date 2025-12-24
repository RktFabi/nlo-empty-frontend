# NeedListApi

All URIs are relative to */api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**needListControllerCreate**](NeedListApi.md#needlistcontrollercreate) | **POST** /need-list |  |
| [**needListControllerFindAll**](NeedListApi.md#needlistcontrollerfindall) | **GET** /need-list |  |
| [**needListControllerFindOne**](NeedListApi.md#needlistcontrollerfindone) | **GET** /need-list/{id} |  |



## needListControllerCreate

> needListControllerCreate(createNeedListDto)



### Example

```ts
import {
  Configuration,
  NeedListApi,
} from '';
import type { NeedListControllerCreateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NeedListApi();

  const body = {
    // CreateNeedListDto
    createNeedListDto: ...,
  } satisfies NeedListControllerCreateRequest;

  try {
    const data = await api.needListControllerCreate(body);
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
| **createNeedListDto** | [CreateNeedListDto](CreateNeedListDto.md) |  | |

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
| **201** | Create a new need list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## needListControllerFindAll

> Array&lt;AllNeedListsDto&gt; needListControllerFindAll(sort, startAfter, limit)



### Example

```ts
import {
  Configuration,
  NeedListApi,
} from '';
import type { NeedListControllerFindAllRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NeedListApi();

  const body = {
    // string | Sort the need lists by specific fields (optional)
    sort: created_at:desc,
    // string | Pagination cursor (values from the last item’s sort fields) (optional)
    startAfter: 150,2025-10-18T14:23:00Z,
    // number | Limit the number of results returned (optional)
    limit: 10,
  } satisfies NeedListControllerFindAllRequest;

  try {
    const data = await api.needListControllerFindAll(body);
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
| **sort** | `string` | Sort the need lists by specific fields | [Optional] [Defaults to `undefined`] |
| **startAfter** | `string` | Pagination cursor (values from the last item’s sort fields) | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Limit the number of results returned | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;AllNeedListsDto&gt;**](AllNeedListsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully retrieved need lists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## needListControllerFindOne

> needListControllerFindOne(id)



### Example

```ts
import {
  Configuration,
  NeedListApi,
} from '';
import type { NeedListControllerFindOneRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NeedListApi();

  const body = {
    // string
    id: id_example,
  } satisfies NeedListControllerFindOneRequest;

  try {
    const data = await api.needListControllerFindOne(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Get one need list by ID |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

