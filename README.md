# &lt;d2l-ajax&gt;

Polymer based web-component for calling micro-services, inspired by [iron-ajax](https://github.com/PolymerElements/iron-ajax). Leverages [superagent-d2l-session-auth](https://github.com/Brightspace/superagent-d2l-session-auth) to do the work necessary for authentication.

## Usage

```html
<d2l-ajax
    auto
    url="http://service.api.brightspace.com/"
    last-error="{{error}}"
    last-response="{{response}}"
    ></d2l-ajax>

```

## Building

Install dependencies

```shell
npm install
```

Build the component

```shell
npm run build
```

## Testing

Manual testing can be done with the demo page, accessible via polyserve. Be sure to build first.

```shell
npm run serve
```

Then access: http://localhost:8080/components/d2l-ajax/demo/index.html
