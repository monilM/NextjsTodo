import { firestore } from "./firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";

const getAllDocs = async () => {
  const resp = await getDocs(collection(firestore, "todo"));
  if (resp && !resp.error) {
    const newData = resp.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log("alltodos", newData);
    return newData;
  } else {
    console.log("error", resp);
    return resp;
  }
};

const addTodo = async (userId, { title, description }) => {
  console.log("data", userId);

  try {
    await addDoc(collection(firestore, "todo"), {
      user: userId,
      title: title,
      description: description,
      createdAt: new Date().getTime(),
    });
  } catch (err) {
    console.log("addtaskerr", err);
  }
};
const updateTodo = async (docId, { title, description }) => {
  console.log("id", docId, title);
  try {
    const todoRef = doc(firestore, "todo", docId);
    await updateDoc(todoRef, {
      title,
      description,
    });
  } catch (err) {
    console.log(err);
  }
};
const deleteTodo = async (docId) => {
  try {
    const todoRef = doc(firestore, "todo", docId);
    await deleteDoc(todoRef);
  } catch (err) {
    console.log(err);
  }
};

export { addTodo, updateTodo, deleteTodo, getAllDocs };
