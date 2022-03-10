## Basic-authentication-api
Express Nodejs + Mysql with Cors

## Instructions

1. Import `Database/nodejs_auth_jwt.sql` on Mysql

2. Configure `.env` file to your own DB settings:

```
DB_HOST=""
DB_USER=""
DB_PASSWORD=""
DB_NAME=""
```
3. Open command prompt window and run the following commands:

```
npm install
```

```
npm run dev
```

4. Use a postman to test the following endpoints:

```
[POST] http://localhost:4000/api/authenticate
```

### Example Body Request

```json
{
    "username": "admin",
    "password": "password123"
}
```

More Example request:

```json
{
    "username": "testuser",
    "password": "123456"
}
```

```json
{
    "username": "testuser",
    "password": "123456"
}
```


### Example Body Response

```json
{
    "message": "success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwidXNlcklkIjoyLCJpYXQiOjE2NDY4MzE5MTEsImV4cCI6MTY0NjkxODMxMX0.x-fa5eVvA26exIKRXWVX13s-Un1DZSYwwuIA-dTDsEg",
    "user": {
        "id": 2,
        "username": "admin",
        "password": "$2a$10$LVjAy5ynXk9lkzvXOCkmYOgXZJg1Gp5JE08R2w6GygbEQf.kdpvVS",
        "last_login": "0000-00-00 00:00:00",
        "isActive": 0,
        "created_at": "2022-03-09T12:53:14.000Z"
    }
}
```

```
[GET] http://localhost:4000/api/welcome
```


### Authorization Token

Copy & Paste the following Token on authenticate api and use it on postman `Authorization` => `Token Bearer`


```
[Token required]
```


### Body Response


```
"Welcome response..."
```


6. For Automated testing just run the following command:

```
npm test
```
![Screenshot](Screenshot/screenshot.PNG)






## Postman test screenshots:

![Screenshot](Screenshot/screenshot_postman1.PNG)

![Screenshot](Screenshot/screenshot_postman.PNG)


End

