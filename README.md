# node-meta-parser

Get Open Graph and other metadata from a webpage!

## To use the latest uploaded build

Add the package to your dependencies

```json
{
  "dependencies": {
    "node-meta-parser": "github:andreazllin/node-meta-parser#build"
  }
}
```

## To push a new build

Give execute permission to `update.sh` script

```bash
cd scripts
sudo chmod +x update.sh
```

Execute the script, it will transpile the branch `main` and push the folder `/dist/` to the build branch

```bash
npm run update
```
