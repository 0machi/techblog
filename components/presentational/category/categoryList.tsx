import Link from 'next/link'
import React from 'react'
import { font } from '@/fonts'
import type { Article, Category } from '@/types'

type CategoryListProps = {
  articleList: Article[]
}

export default function CategoryList({ articleList }: CategoryListProps) {
  const getUniqueCategories = (articleList: Article[]) => {
    const categorySet = new Set<string>()
    articleList.forEach((article) => {
      article.categories.forEach((category) => {
        categorySet.add(category.id)
      })
    })

    const uniqueCategories = Array.from(categorySet).map((id) => {
      return articleList
        .flatMap((article) => article.categories)
        .find((category) => category.id === id)
    })

    return uniqueCategories
      .filter((category) => category !== undefined)
      .sort((a, b) => a!.name.localeCompare(b!.name))
  }
  const uniqueCategories = getUniqueCategories(articleList)

  return (
    <div>
      <h2 className={`${font.JP_BOLD} text-violet-600 p-3 text-lg hover:text-black`}>カテゴリ</h2>
      {uniqueCategories.map((category, index, array) => {
        return (
          category && (
            <>
              <li>
                <Link href={`/articles/categories/${category.id}/pages/1`}>
                  <span key={category.id} className={`hover:text-violet-600 cursor-pointer`}>
                    {category.name}
                  </span>
                </Link>
              </li>
            </>
          )
        )
      })}
    </div>
  )
}
