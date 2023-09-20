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
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
          }}
        >
          <div
            style={{
              width: '100%',
              fontSize: 60,
              fontStyle: 'normal',
              fontWeight: 'bold',
              color: '#000',
              padding: '0 120px',
              lineHeight: 1.3,
              marginBottom: '30px',
              wordWrap: 'break-word',
            }}
          >
            {article.title}
          </div>
          <div
            style={{
              width: '100%',
              fontSize: 40,
              fontStyle: 'normal',
              fontWeight: 'bold',
              color: '#000',
              padding: '0 120px',
              lineHeight: 1.3,
            }}
          >
            {`✏️ ${article.author}`}
          </div>
        </div>
      ),
      { ...size },
    )
  } else {
    return new Response('Not Found', { status: 404 })
  }
}
