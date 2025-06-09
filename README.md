# React Native "WWW-Authenticate" Header Hanging Demo

This is an project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app) to demo a bug.

When a network request is performed in React Native, the request promise can hang and fail to resolve or reject if the following conditions are all met:
1. The device is iOS
2. The response status is `401 Unauthorized`
3. The response contains the header `WWW-Authenticate`

## Get started

To make this demo work:

1. Install dependencies

   ```bash
   pnpm i
   ```

2. In one terminal start the server:

   ```bash
   node server/server.js
   ```

3. Update the `SERVER` value in `app/index.tsx` with the specified address from the server

4. In another terminal, Start the app

   ```bash
   pnpm start
   ```

5. Connect an iOS Device

6. Press the buttons presented to see the output in the console
   1. The Success button should show a successful response in the console
   2. the "Fail W/O Header" button should show a "Request failed with status code 401" error
   3. The "Fail W/ Header" button should hang for 10 seconds then timeout
      1. Comment out the timeout line to see the request get stuck pending using the debugger