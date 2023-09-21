import { ImageResponse } from 'next/server'
import { fetchArticle } from '@/libs/microcms/article'

/** ImageResponse対応 */
export const runtime = 'edge'
/** 有効期間 */
export const revalidate = 10

/** 13.3.0では下記を動的に変更不可 */
export const alt = '記事のアイキャッチ画像'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function og({ params: { articleId } }: { params: { articleId: string } }) {
  const article = await fetchArticle(articleId)

  const lineFont = fetch(new URL('../../../fonts/LINE/LINESeedJP_A_TTF_Eb.ttf', import.meta.url), {
    cache: 'no-store',
  }).then((res) => res.arrayBuffer())

  if (article) {
    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage: 'url(https://tech.shinaps.jp/bg.png)',
            backgroundColor: '#fff',
            backgroundSize: '100% 100%',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'left',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '820px',
              fontSize: 60,
              fontStyle: 'normal',
              color: '#000',
              wordWrap: 'break-word',
            }}
          >
            {article.title}
          </div>
        </div>
      ),
      {
        ...size,
        fonts: [
          {
            name: 'Inter',
            data: await lineFont,
            style: 'normal',
            weight: 800,
          },
        ],
      },
    )
  } else {
    return new Response('Not Found', { status: 404 })
  }
}
