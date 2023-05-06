import { load } from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

export const highlightCodeBlock = (html: string): string => {
  const $ = load(html)
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })
  const highlightedHtml = $.html()
  return highlightedHtml
}
