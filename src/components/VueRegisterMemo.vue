<template>
  <div>
    <textarea rows="10" cols="70" v-model="memo.text"></textarea>
    <button v-on:click="register_memo">メモ登録</button>
  </div>
</template>

<script>
import { db } from "./db";
import firebase from "firebase/app";
import "firebase/firestore";

export default {
  data: function() {
    return {
      memo: {}
    };
  },
  activated: function() {
    this.memo = {};
  },
  methods: {
    register_memo: function(event) {
      db.collection("memos")
        .add({ text: this.memo.text })
        .then(docref => {
          console.log("メモ登録成功\t id=" + docref.id);
          this.$router.push({
            path: "/update/" + docref.id
          });
        })
        .catch(error => console.log("メモ登録失敗\n" + error));
    }
  }
};
</script>

<style>
</style>
