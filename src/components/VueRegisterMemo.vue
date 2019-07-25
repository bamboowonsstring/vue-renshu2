<template>
  <div>
    <textarea rows="10" cols="70" v-model="memo_text"></textarea>
    <button v-on:click="register_memo">メモ登録</button>
  </div>
</template>

<script>
import { db } from "./db";
import firebase from "firebase/app";
import "firebase/firestore";

export default {
  name: "VueEditMemo",
  data: function() {
    return {
      memo_text: ""
    };
  },
  methods: {
    register_memo: function(event) {
      db.collection("memos")
        .add({ text: this.memo_text })
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
