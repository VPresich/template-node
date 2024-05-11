Users:
1/
POST http://localhost:port/api/auth/register
body: 
{
  "name": "name111",
  "email": "111@111.net",
  "password": "111111"
}

2/
POST http://localhost:port/api/auth/login

body: 
{
  "email": "111@111.net",
  "password": "111111"
}
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2M2UyOGQ4MzdhYzQwMjA2N2E0ZmQ4MyIsImlhdCI6MTcxNTM0OTc0NSwiZXhwIjoxNzE1MzUzMzQ1fQ.D2AMZVheKvxp_Yjn_vpBBBcoQtsvm_1cW8mQ6of61Z4

3/
POST http://localhost:port/api/auth/logout
Headers
Authorization: "Bearer token"

4/ 
GET http://localhost:port/api/users/current

Headers
Authorization: "Bearer token"
 
5/ 
PATCH http://localhost:port/api/users
Headers
Authorization: "Bearer token"
Body 
{
  "subscription": "business"
}  
  /* from enum: ['starter', 'pro', 'business'] */





Contacts:
1/ 
GET http://localhost:port/api/contacts?favorite=true&name=search&page=number&limit=number

Header
Authorization: "Bearer token"

Parameters
favorite: true/false
name: 'search' (String)
page: 1,
limit: 20

Example for JS Script (with axios)
/*
//const url = 'http://localhost:3000/api/contacts?favorite=true&name=john';

const token = 'token';

import axios from 'axios';
const params = {
  headers: {
    Authorization: `Bearer ${token}`,
  }
  favorite: true, 
  name: 'John', 
  page: 1, 
  limit: 10, 
};
axios
  .get('http://localhost:3000/api/contacts', { params })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
*/

2/
GET http://localhost:port/api/contacts/id

Header
Authorization: "Bearer token"

3/
POST http://localhost:port/api/contacts

Header
Authorization: "Bearer token"

Body
{
  "name": "contact-name-1",  
  "email": "contact_email_1@111.com",
  "phone": "(111) 111-1111"
}
663fdc1351a4a141427a2fa5

4/
GET http://localhost:port/api/contacts/id

Header
Authorization: "Bearer token"

5/
PUT http://localhost:port/api/contacts/id

Header
Authorization: "Bearer token"
Body
{    
  "name": "contact-name-1",  
  "email": "contact_email_1@111.com",
  "phone": "(111) 111-1111"
}

6/ 
DELETE http://localhost:port/api/contacts/id
Headers
Authorization: "Bearer token"

7/
PATCH http://localhost:port/api/contacts/id/favorite

Header
Authorization: "Bearer token"
Body
{ 
  "favotite": false/true
}