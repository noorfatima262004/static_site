import { getPostData } from '../lib/posts';
import Head from 'next/head';

export default function Home({ data }) {
  return (
    <>
      {/* Adding SEO meta tags inside <Head> */}
      <Head>
      <title> My Static Site</title>
      <meta name="description" content="This is a static site built with Next.js." />
        <meta property="og:title" content={data.data.title} />
        <meta property="og:description" content={data.content.substring(0, 160)} /> {/* Add a snippet of the content */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://noorfatima262004.github.io/static_site/" />
        <meta property="og:image" content="/static_site/1.jpg" /> 
        <meta name="robots" content="index, follow" />
      </Head>

      {/* The body content */}
      <div>
        <h1>{data.data.title}</h1>
        <p>{data.data.date}</p>
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
        <img src="/static_site/1.jpg" alt="Example Image" loading="lazy" />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = getPostData();
  return {
    props: {
      data,
    },
  };
}
