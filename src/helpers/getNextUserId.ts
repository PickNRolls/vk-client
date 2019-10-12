import incNumString from "./incNumString";

export default async (document: firebase.firestore.DocumentSnapshot, uid: string) => {
  const data = document.data();
  if (!data) return;

  const currentId: string = data.id;
  const nextId = incNumString(currentId);

  return nextId;
};
