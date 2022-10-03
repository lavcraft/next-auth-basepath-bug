## Reproduce basePath next-auth bug

Follow next steps

1. clone repository and go into cloned directory
2. `npm ci`
3. `npm run dev`
4. open http://localhost:3001/custom/me
5. invalid callbackUrl in query param because redirect is invalid
```
   http://localhost:3001/custom/api/auth/signin?callbackUrl=%2Fme
   instead of
   http://localhost:3001/custom/api/auth/signin?callbackUrl=%2Fcustom%2Fme

```
    