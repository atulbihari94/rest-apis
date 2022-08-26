# 1. below curl request for insertion of successful data

curl --location --request POST 'http://localhost:3000/api/user' \
--header 'Content-Type: application/json' \
--data-raw '{
    "firstName": "Atul",
    "lastName": "Bihari",
    "email": "atulbihari94@gmail.com",
    "mobile": "7633819451"
}'

## successful insertion response

{
    "message": "success",
    "status": 201,
    "data": {
        "id": 1
    }
} 


# 2. below curl request for validation check 

curl --location --request POST 'http://localhost:3000/api/user' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "atulbihari@gmail.com",
    "mobile": "7633819451"
}'

## if multiple validation failed then response

[
    {
        "field": "firstName",
        "message": "firstName is required"
    },
    {
        "field": "lastName",
        "message": "lastName is required"
    }
]