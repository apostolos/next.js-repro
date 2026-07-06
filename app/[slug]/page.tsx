import { cacheLife } from "next/cache";

import type { Instant } from "next";

type Props = PageProps<"/[slug]">;
type Params = Awaited<Props["params"]>[];

export async function generateStaticParams(): Promise<Params> {
  return [{ slug: "foo" }];
}

// BUG: This should silence the E1403 "link data" error, but it
// doesn't unless the __DEFAULT__ segment also has `instant = false`
// (see app/@modal/default.tsx).
export const instant: Instant = false;

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return (
    <main>
      <Content slug={slug} />
    </main>
  );
}

async function Content({ slug }: { slug: string }) {
  const post = await getPost(slug);
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </article>
  );
}

async function getPost(slug: string) {
  "use cache";
  cacheLife("weeks");
  return {
    title: `Post ${slug}`,
    content: `This is the content of post ${slug}.`,
  };
}
