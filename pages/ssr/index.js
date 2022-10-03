export function getServerSideProps (context) {
  const time = new Date();

  function formatTime (time) {
    return time.toString().replace(/(^[0-9]$)/, '0$&');
  }

  return {
    props: {
      hours: formatTime(time.getHours()),
      minutes: formatTime(time.getMinutes()),
      seconds: formatTime(time.getSeconds())
    }
  }
}

export default function ServerSideRendering ({ hours, minutes, seconds }) {
  return (
    <section>
      <h1>Server-side Rendering</h1>
      <p>This page is built at every request, staying always up-to-date.</p>
      <h2>{`${ hours }:${ minutes }:${ seconds }`}</h2>
    </section>
  );
}