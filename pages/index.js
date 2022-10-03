import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps () {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  };
};

export default function Home({ allPostsData }) {
  return (
    <section className={styles.list}>
      <h2>Blog</h2>
      <ul>
        {allPostsData.filter(({ title }) => title !== undefined).map(({ id, title, date }) => (
          <li key={id}>
            { title }
          </li>
        ))}
      </ul>
    </section>
  )
}
