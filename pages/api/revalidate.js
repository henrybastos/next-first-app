export default async function revalidateHandler (req, res) {
  const { token, route } = req.query;

  if (token != process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'Invalid token.' });
  }

  if (!route) {
    return res.status(401).json({ message: 'Route undefined.' })
  }

  try {
    await res.revalidate(route);
    return res.json({ revalidated: true });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error revalidating.');
  }
}