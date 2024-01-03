import { load } from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

import type { CheerioAPI } from 'cheerio'

const highlightCodeBlock = ($: CheerioAPI): CheerioAPI => {
  $('pre code').each((_, elm) => {
    const language = $(elm).attr('class')?.replace('language-', '') || 'plaintext'
    const code = $(elm).text()
    const result = hljs.highlight(code, { language })
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })
  return $
}

const highlightInlineCode = ($: CheerioAPI): CheerioAPI => {
  $('code')
    .not('pre > code')
    .each((_, elm) => {
      const code = $(elm).text().replace(/^`|`$/g, '')
      const result = hljs.highlight(code, { language: 'bash' })
      $(elm).html(result.value)
      $(elm).addClass('hljs')
    })
  return $
}

export const highlightCode = (html: string): string => {
  let $html = load(html)
  $html = highlightCodeBlock($html)
  $html = highlightInlineCode($html)
  return $html.html()
}
