// import { expect, test } from 'vitest';

// const BASE: string = "https://api-mhvaomhj6q-uc.a.run.app";
// const NEEDLIST_ENDPOINT = "/api/need-list"
// const APIKEY: string = "insert key here"

// const NEEDLIST_BODY: object = {
//     "needlist_name": "Food Donation Drive",
//     "needlist_status": "Draft",
//     "total_donated": 0,
//     "total_items": 0,
//     "total_price": 0,
//     "total_tax": 0,
//     "due_date": "Sep 30, 2025",
//     "group_id": [
//         "/groups/i5bu4dnoSy...",
//         "/groups/aB12cdEfG..."
//     ],
//     "org_id": "/organization/U63tWq...",
//     "user_id": "/users/RzKs6he1...",
//     "location_id": "/locations/dL34sP...",
//     "created_at": "2023-10-01T12:00:00Z",
//     "last_updated": "2023-10-01T12:00:00Z"
// }

// test('api endpoint needlists: fail get', async () => {
//     const invalid_get_req: Response = await fetch(BASE + NEEDLIST_ENDPOINT, {
//         'method': "GET"
//     }).then(r => r.json());
//     expect(invalid_get_req.status).not.toBe(200);
// })

// test('api endpoint needlists: succeed get', async () => {
//     const valid_get_req: Response = await fetch(BASE + NEEDLIST_ENDPOINT, {
//         method: 'GET',
//         headers: { 'Authorization': `Bearer ${APIKEY}` }
//     }).then(r => r.json());

//     expect(valid_get_req.status).toBe(200);

//     const needlists = valid_get_req.body;

//     //put other expectations here: expect a format for the needlists?
// })

// test('api endpoint needlists: fail post', async () => {
//     const invalid_post_req: Response = await fetch(BASE + NEEDLIST_ENDPOINT, {
//         'method': "POST",
//         body: JSON.stringify(NEEDLIST_BODY)
//     }).then(r => r.json());

//     expect(invalid_post_req.status).not.toBe(201);

//     const invalid_post_req_two: Response = await fetch(BASE + NEEDLIST_ENDPOINT, {
//         'method': "POST",
//         body: JSON.stringify({}),
//         headers: { 'Authorization': `Bearer ${APIKEY}` }
//     }).then(r => r.json());

//     expect(invalid_post_req_two.status).not.toBe(201);

// })

// test('api endpoint needlists: valid post req', async () => {
//     const valid_post_req = await await fetch(BASE + NEEDLIST_ENDPOINT, {
//         'method': "POST",
//         body: JSON.stringify(NEEDLIST_BODY),
//         headers: { 'Authorization': `Bearer ${APIKEY}` }
//     }).then(r => r.json());

//     expect(valid_post_req.status).toBe(201); //should have worked

//     //make a get request to confirm that this exists
// })

// test('api endpoint needlists: sort', async () => {
//     const sort_req: Response = await fetch(BASE + NEEDLIST_ENDPOINT, {
//         method: 'GET',
//         headers: { 'Authorization': `Bearer ${APIKEY}` }
//     })
// })
