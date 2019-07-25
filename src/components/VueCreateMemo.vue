<template>
  <div>
    <button v-on:click="register_memo">メモ新規作成</button>
  </div>
</template>

<script>
import { db } from "./db";
import firebase from "firebase/app";
import "firebase/firestore";

export default {
  methods: {
    register_memo: function(event) {
      db.collection("memos")
        .add({ text: "" })
        .then(docref => {
          console.log("メモの登録に成功しました。\n id=" + docref.id);
          this.$router.push({
            path: "/update/" + docref.id
          });
        })
        .catch(error => {
          console.log("メモの登録に問題が発生しました。\n" + error);
        });
    }
  }
};
</script>

<style>
</style>
