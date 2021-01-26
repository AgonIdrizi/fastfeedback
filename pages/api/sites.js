import db from '@/lib/firebase-admin';

export default async function handler(req, res) {
  console.log(
    'process.env.FIREBASE_PRIVATE_KEY',
    process.env.FIREBASE_PRIVATE_KEY,
    typeof process.env.FIREBASE_PRIVATE_KEY
  );
  const snapshot = await db.collection('sites').get();
  const sites = [];

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  res.status(200).json({ sites });
}
