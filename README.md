# Express Error Handling with Node and Typescript

This repo demonstrates how to implement easy-to maintain and extend error handling for an [express](https://github.com/expressjs/express) application with Typescript.

The idea is to create a new subclass for each error type and to return additional fields in the response. Adding a `errorType` property ensures that the client can parse and deserialize the response from the server correctly.

<h3 align="center">Please help this repo with a ⭐️ if you find it useful! 😁</h3>

For updates, please follow [@_jgoebel](https://twitter.com/_jgoebel) on Twitter.


## How to run this project
```
npm i
npm run dev
```

## Endpoints
### `POST /withdraw`
calling this endpoint will throw an `InsufficientFundsError` and return
```
[
    {
        "requestedAmount": 200,
        "availableAmount": 100,
        "message": "Insufficient funds: attempted to disburse 200, but there is only 100 available.",
        "errorType": "INSUFFICIENT_FUNDS_ERROR"
    }
]
```

### `POST /withdraw-async`
The same endpoint as `POST /withdraw` - but with an async handler function. If you attempt to throw within an async handler, you need to make sure that you have the 
[express-async-errors](https://github.com/davidbanham/express-async-errors) package installed.
