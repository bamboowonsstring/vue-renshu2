import Vue from "vue";
import { firestorePlugin } from "vuefire";
import * as firebase from "firebase/app";
import "firebase/firestore";

Vue.use(firestorePlugin);

export const db = firebase
  .initializeApp({ projectId: "fir-test01-5a90b" })
  .firestore();
