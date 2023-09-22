import { Metadata, ResolvingMetadata } from 'next'
import ArticleContainer from '@/components/container/article/articleContainer'
import { fetchArticle, fetchArticleList } from '@/libs/microcms/article'

export const dynamicParams = false

type Props = {
  params: { articleId: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const article = await fetchArticle(params.articleId)
  const title = article.title
  const description = article.summary
  const eyeCatch = article.eyecatch?.url

  if (eyeCatch) {
    return {
      title: title,
      description,
      openGraph: {
        title: title,
        description,
        siteName: 'shinaps tech blog',
        locale: 'ja_JP',
        type: 'website',
        images: [eyeCatch],
      },
      twitter: {
        card: 'summary_large_image',
        title: title,
        description,
        site: '@sh1n4ps',
        creator: '@sh1n4ps',
      },
    }
  }

  return {
    title: title,
    description,
    openGraph: {
      title: title,
      description,
      siteName: 'shinaps tech blog',
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description,
      site: '@sh1n4ps',
      creator: '@sh1n4ps',
    },
  }
}

export async function generateStaticParams() {
  const { contents } = await fetchArticleList()

  const paths = contents.map((article) => {
    return {
      articleId: article.id,
    }
  })

  return [...paths]
}

export default ArticleContainer
