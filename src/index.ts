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