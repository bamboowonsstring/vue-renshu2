<template>
  <div>
    <textarea rows="10" cols="70" v-model="memo.text"></textarea>
    <button v-on:click="update_memo">メモ更新</button>
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
  beforeMount: function() {
    this.$bind("memo", db.collection("memos").doc(this.$route.params.id)).then(
      () => console.log("バインドしました。 \t" + this.memo.id)
    );
  },
  methods: {
    update_memo: function(event) {
      db.collection("memos")
        .doc(this.memo.id)
        .update({ text: this.memo.text })
        .then(() => console.log("メモ更新成功\t id=" + this.memo.id))
        .catch(error => console.log("メモ更新失敗 \n" + error));
    }
  }
};
</script>

<style>
</style>
