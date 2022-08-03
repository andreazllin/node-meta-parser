# node-meta-parser

Get Open Graph and other metadata from a webpage!

## Get started

To install the package:

```bash
npm install --save node-meta-parser
```

## Example

To the the meta tags values from a website you need to get a webpage raw HTML first, you can use an HTTP client of your liking, the example uses [axios](https://www.npmjs.com/package/axios).

```typescript
import axios from "axios"
import nmp from "node-meta-parser"

void(async(): Promise<void> => {
  const { data: rawHtml } = await axios.get("https://ogp.me/")
  const metadatas = nmp.parseMetadata(rawHtml, ["og:title", "og:type", "og:url", "og:image", "og:description"])
  console.log(metadatas)
})()
```

in this case metadatas is like this:

```json
{
  "og:title": "Open Graph protocol",
  "og:type": "website",
  "og:url": "https://ogp.me/",
  "og:image": "https://ogp.me/logo.png",
  "og:description": "The Open Graph protocol enables any web page to become a rich object in a social graph."
}
```

### To use the latest uploaded build

Add the package to your dependencies:

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

### Dependecies

- [node-html-parser](https://www.npmjs.com/package/node-html-parser) - Fast HTML Parser.
