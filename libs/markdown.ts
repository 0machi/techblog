import { load } from 'cheerio'
import type { Toc } from '@/types'

export const getToc = (html: string): Toc => {
  const $ = load(html)
  const headings = $('h2').toArray()
  const toc = headings.map((data) => {
    return {
      //@ts-ignore
      text: String(data.children[0].data),
      id: data.attribs.id,
      name: data.name,
    }
  })
  return toc
}
