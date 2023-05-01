import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import gfm from 'remark-gfm';
import { getBlogDetail, getBlogList } from '../../libs/microcms';

export async function generateStaticParams() {
  const { contents } = await getBlogList();

  const paths = contents.map((blog) => {
    return {
      blogId: blog.id,
    };
  });

  return [...paths];
}

export default async function StaticDetailPage({
  params: { blogId },
}: {
  params: { blogId: string };
}) {
  const blog = await getBlogDetail(blogId);

  // ページの生成された時間を取得
  const time = new Date().toLocaleString();

  if (!blog) {
    notFound();
  }

  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[gfm]}
      className="prose prose-stone mt-5 max-w-4xl m-auto"
    >
      {blog.content}
    </ReactMarkdown>
  );
}
