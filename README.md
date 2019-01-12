# React authenticated iframe

React authenticated iframe is a component that can be used if you want to create an iframe, but the resource to be fetched requires token authentication.

## Usage

This is an example to open an `<iframe>` with a PDF file behind an authenticated API.

```js
import AuthIFrame from "react-auth-iframe";

const MyComponent = () => <div>
    <AuthIFrame
        src="https://api.my-domain.com/files/document.pdf"
        token={token}
        type="application/pdf" />
</div>
```
