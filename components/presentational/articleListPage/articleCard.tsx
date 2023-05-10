import ArticleCardImage from '@/components/presentational/articleCardImage'
import ArticleCardDetail from '@/components/presentational/articleListPage/articleCardDetail'
import HorizontalLine from '@/components/presentational/ui/horizontalLine'
import VerticalLine from '@/components/presentational/ui/verticalLine'
import type { Article } from '@/types'

interface ArticleCardProps {
  article: Article
  isEven: boolean
}

export default function ArticleCard({ article, isEven }: ArticleCardProps) {
  return (
    <>
      {isEven ? (
        <>
          <div
            className={`min-h-[300px] max-w-5xl max-lg:max-w-3xl mx-auto flex items-center justify-between max-lg:justify-center border-x border-dashed border-slate-200`}
          >
            <ArticleCardDetail article={article} />
            <VerticalLine isPcOnly={true} />
            <ArticleCardImage id={article.id} eyeCatch={article.eyecatch} />
          </div>
          <HorizontalLine />
        </>
      ) : (
        <>
          <div
            className={`min-h-[300px] max-w-5xl max-lg:max-w-3xl mx-auto flex items-center justify-between max-lg:justify-center border-x border-dashed border-slate-200`}
          >
            <ArticleCardImage id={article.id} eyeCatch={article.eyecatch} />
            <VerticalLine isPcOnly={true} />
            <ArticleCardDetail article={article} />
          </div>
          <HorizontalLine />
        </>
      )}
    </>
  )
}
