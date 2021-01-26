import admin from 'firebase-admin';
console.log(
  'process.env.FIREBASE_PRIVATE_KEY',
  process.env.FIREBASE_PRIVATE_KEY,
  typeof process.env.FIREBASE_PRIVATE_KEY
);
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    }),
    databaseURL: 'https://fast-feedback-2812b.firebaseio.com'
  });

  //console.log('admin.firestore', admin.firestore());
}

export default admin.firestore();
