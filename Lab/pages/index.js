// export default function Home() {
//     return <h1>Hello, Static Site Generation!</h1>;
//   }
import { getPostData } from '../lib/posts';

export default function Home({ postData }) {
  return (
    <div>
      <h1>{postData.data.title}</h1>
      <p>{postData.data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
    </div>
  );
}

export async function getStaticProps() {
  const postData = getPostData();
  return {
    props: {
      postData,
    },
  };
}
