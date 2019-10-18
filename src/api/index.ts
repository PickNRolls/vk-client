import '../bootstrapFirebase';
import firebase from 'firebase';

import User from '../typing/User';
import calcAge from '../helpers/calcAge';

const db = firebase.firestore();

const findUser = (firebaseUid: string): Promise<User | null> => {
  return db.collection('users').doc(firebaseUid).get().then(doc => {
    if (!doc.exists) return null;

    const data = doc.data();
    if (!data) return null;

    return {
      fullName: data.fullName,
      firstName: data.firstName,
      lastName: data.lastName,
      age: calcAge(data.birthday),
      id: data.appId,
      online: true,
      status: data.status,
      avatar: data.avatar,
      gender: data.gender,
      friends: data.friends,
      additionalInfo: {
        birthday: data.birthday.toDate().toLocaleDateString(),
        languages: data.languages
      }
    };
  })
};

export default {
  user: {
    async current(): Promise<User | null> {
      const currentUser = firebase.auth().currentUser;
      if (currentUser === null) {
        return Promise.resolve(null);
      }

      return findUser(currentUser.uid);
    },

    async find(uid: string): Promise<User | null> {
      return db.collection('appIdsLinks').doc(uid).get().then(doc => {
        if (!doc.exists) return null;

        const data = doc.data();
        if (!data) return null;

        return data.uid;
      }).then(firebaseUid => {
        return findUser(firebaseUid);
      });
    }
  }
};