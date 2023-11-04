import dynamic from 'next/dynamic';
import NotFound from 'app/(website)/not-found';

async function loadContent(id: string) {
  return dynamic(() => import(`../${id}.mdx`).catch(() => NotFound));
}

export default async function DocsPage({ params }: { params: { id: string } }) {
  const Page = await loadContent(params.id);

  return <Page />;
}
