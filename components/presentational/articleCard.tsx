import ArticleCardDetail from '@/components/presentational/articleCardDetail'
import ArticleCardImage from '@/components/presentational/articleCardImage'
import HorizontalLine from '@/components/presentational/horizontalLine'
import VerticalLine from '@/components/presentational/verticalLine'
import { Article } from '@/types'

interface ArticleCardProps {
  article: Article;
  isEven: boolean;
}


export default function ArticleCard({ article, isEven }: ArticleCardProps) {
  return (
    <>
      {isEven ?
        <>
          <div
            className={`h-[300px] max-w-5xl mx-auto flex items-center justify-between border-x border-dashed border-slate-200`}
          >
            <ArticleCardDetail article={article} />
            <VerticalLine isPcOnly={true} />
            <ArticleCardImage id={article.id} eyeCatch={article.eyecatch} />
          </div>
          <HorizontalLine />
        </>
        :
        <>
          <div
            className={`h-[300px] max-w-5xl mx-auto flex items-center justify-between border-x border-dashed border-slate-200`}
          >
            <ArticleCardImage id={article.id} eyeCatch={article.eyecatch} />
            <VerticalLine isPcOnly={true} />
            <ArticleCardDetail article={article} />
          </div>
          <HorizontalLine />
        </>
      }
    </>
  )
}