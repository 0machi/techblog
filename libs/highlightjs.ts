import { load } from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

export const highlightCodeBlock = (html: string): string => {
  const $ = load(html)
  $('pre code').each((_, elm) => {
    const language = $(elm).attr('class')?.replace('language-', '') || 'plaintext'
    const code = $(elm).text()
    const result = hljs.highlight(code, { language })
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })
  const highlightedHtml = $.html()
  return highlightedHtml
}
