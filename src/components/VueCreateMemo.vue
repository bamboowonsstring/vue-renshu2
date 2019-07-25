<template>
  <div>
    <button v-on:click="create_memo">メモ新規作成</button>
  </div>
</template>

<script>
export default {
  methods: {
    create_memo: function() {
      this.$router.push({ path: "/create" });
    }
  }
};
</script>

<style>
</style>
