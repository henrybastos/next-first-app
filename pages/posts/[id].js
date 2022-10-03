import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ post }) {
  return (
    <>
      <h1>{ post.id }</h1>
      <p>{ post.title }</p>
      <p>{ post.date }</p>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostData(params.id);
  
  return {
    props: {
      post,
    },
  };
}