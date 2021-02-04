const fetcher = async (url, token) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin'
  });

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};
export default fetcher;
