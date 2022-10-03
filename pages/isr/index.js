export default function IncrementalStaticRegeneration () {
  return (
    <section>
      <h1>Incremental Static Regeneration</h1>
      <p>This page is revalidated/rebuilt through the API route <code>/api/revalidate</code>. To revalidate it receives two query parameters:</p>

      <h2><code>token</code></h2>
      <p>Defined in the local <code>.env.local</code> file.</p>
      <p>Example: <code>/api/revalidate?token=123321</code></p>

      <h2><code>route</code></h2>
      <p>The route desired to be revalidated.</p>
      <p>Example: <code>/api/revalidate?route=/isr</code></p>
    </section>
  )
}