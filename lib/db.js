import firebase from './firebase';

const firestore = firebase.firestore();

export function createUser(uid, data) {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}

export function createSite(data) {
  return firestore.collection('sites').add(data);
}

export async function createFeedback(data) {
  const res = await firestore.collection('feedback').add(data);
  console.log('response', res.id);
  return res;
}

export function deleteFeedback(id) {
  return firestore.collection('feedback').doc(id).delete();
}
