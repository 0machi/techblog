import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
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
    <div>
      <h1>{blog.title}</h1>
      <h2>{time}</h2>
      <div>{parse(blog.content)}</div>
    </div>
  );
}
