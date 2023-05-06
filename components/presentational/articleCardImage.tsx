// eslint-disable-next-line import/named
import { MicroCMSImage } from 'microcms-js-sdk'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type articleCardImageProps = {
  id: string
  eyeCatch?: MicroCMSImage
}

export default function ArticleCardImage({ id, eyeCatch }: articleCardImageProps) {
  return (
    <div className={`w-[320px] h-[280px] p-3 grow pc-only`}>
      <Link href={`/articles/${id}`}>
        <div className={`w-full h-full relative`}>
          {eyeCatch ? (
              <Image
                src={eyeCatch.url}
                alt='eyecatch'
                fill={true}
                style={{ objectFit: 'contain' }}
              />
            )
            : (
              <Image
                src='/noimage.png'
                alt='No Image'
                fill={true}
                style={{ objectFit: 'contain' }}
              />
            )
          }
        </div>
      </Link>

    </div>
  )
}