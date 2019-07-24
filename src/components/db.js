import * as firebase from "firebase/app";
import "firebase/firestore";

export const db = firebase
  .initializeApp({ projectId: "fir-test01-5a90b" })
  .firestore();
