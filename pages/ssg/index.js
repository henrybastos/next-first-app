import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import style from '../../styles/Magic.module.css';
import gamesList from './data.json';

export async function getStaticProps () {
  return {
    props: {
      gamesList
    }
  }
}

export default function StaticSiteGeneration ({ gamesList }) {
  return (
    <>
      <Head>
        <title>SSG</title>
      </Head>
      <h1>Static Site Generation (SSG)</h1>
      <Link href="/">Home</Link>
      <div className={style.image_wrapper}>
        <Image 
          src="/images/profile.jpg"
          alt="Screaming skull."
          height={144}
          width={144}
        />
      </div>
      <h2>Games I play:</h2>
      <div>
        {
          gamesList.map(({ game, owner, achievements, totalAchievements, description, hours }) => (
            <>
              <h3>{ game }</h3>
              <h4>{`by ${ owner }`}</h4>
              <p>{ description }</p>
              <p>{`${ hours }h | ${ achievements } / ${ totalAchievements }`}</p>
            </>
          ))
        }
      </div>
    </>
  );
}