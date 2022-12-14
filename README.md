# node-meta-parser

Get Open Graph and other metadata from a webpage!

## Get started

To install the package:

```bash
npm install --save node-meta-parser
```

## Methods

### `parseMetadata`

Returns the `<meta>` tags from an HTML page in the following object format

```json
{
  "propertyName": "contentValue"
}
```

```typescript
parseMetadata(rawHtml: string, properties: string[])
```

- **rawHtml**: is the *string* representing the HTML for the requested webpage.
- **properties**: is an *array of strings* that are the property (or name) of a `<meta>` tag

```html
<!-- propertyName: "og:title" contentValue: "Open Graph protocol" -->
<meta property="og:title" content="Open Graph protocol">

<!-- propertyName: "description" contentValue: "The Open Graph protocol enables any web page to become a rich object in a social graph." -->
<meta name="description" content="The Open Graph protocol enables any web page to become a rich object in a social graph.">
```

### `getFavicon`

Returns the URL of the favicon

```typescript
getFavicon(rawHtml: string)
```

- **rawHtml**: is the *string* representing the HTML for the requested webpage.

## Example

To get the `<meta>` tags values from a website you need to get a webpage's raw HTML first, you can use an HTTP client of your liking, the example uses [axios](https://www.npmjs.com/package/axios).

```typescript
import axios from "axios"
import nmp from "node-meta-parser"

void(async(): Promise<void> => {
  const { data: rawHtml } = await axios.get("https://ogp.me/")
  const metadata = nmp.parseMetadata(rawHtml, ["og:title", "og:type", "og:url", "og:image", "og:description"])
  console.log(metadata)
})()
```

in this case `metadata` is like this:

```json
{
  "og:title": "Open Graph protocol",
  "og:type": "website",
  "og:url": "https://ogp.me/",
  "og:image": "https://ogp.me/logo.png",
  "og:description": "The Open Graph protocol enables any web page to become a rich object in a social graph."
}
```

## Dependecies

- [node-html-parser](https://www.npmjs.com/package/node-html-parser) - Fast HTML Parser.

## Notes for myself

### To use the latest build uploaded to GitHub

To add the package to the dependencies:

```json
{
  "dependencies": {
    "node-meta-parser": "github:andreazllin/node-meta-parser#build"
  }
}
```

### To push a new build

Give execute permission to `update.sh` script:

```bash
cd scripts
sudo chmod +x update.sh
```

Execute the script, it will transpile the branch `main` and push the folder `/dist/` to the build branch:

```bash
npm run update
```

### Upload a new version to NPM

To upload a new version of the package:

1. Change version in `package.json`.
2. `npm run install` to update `package-lock.json` version.
3. Commit and push changes to `main` branch.
4. Checkout to `build` branch.
5. `npm run update` to build and push latest version to GitHub.
6. `npm publish` to publish a new version to NPM
