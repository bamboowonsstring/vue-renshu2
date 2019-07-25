<template>
  <div>
    ID:
    <input v-model="memo_id" placeholder="メモのIDを入力" />
    <button v-on:click="find_memo">移動</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      memo_id: ""
    };
  },
  methods: {
    find_memo: function() {
      this.$router.push({ path: "/update/" + this.memo_id });
    }
  }
};
</script>

