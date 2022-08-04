import { parse, HTMLElement } from "node-html-parser"

export interface Metadata {
  [key: string]: string
}

const getPropertyContent = (metaElement: HTMLElement, name: string): string | null => {
  const propertyName = metaElement.getAttribute("property") || metaElement.getAttribute("name")
  return propertyName == name ? metaElement.getAttribute("content") || "" : null
}

export const parseMetadata = (html: string, properties: string[]): Metadata => {
  const $ = parse(html)

  const metas = $.querySelectorAll("meta")

  const metadatas: Metadata = {}

  metas.forEach((meta) => {
    properties.forEach((prop) => {
      const content = getPropertyContent(meta, prop)
      if (content) {
        metadatas[prop] = content
      }
    })
  })

  return metadatas
}

export const getFavicon = (html: string): string | undefined => {
  const $ = parse(html)

  const links = $.querySelectorAll("link")

  const icon = links.find((link) => link.getAttribute("rel")?.includes("icon"))

  return icon?.getAttribute("href")
}