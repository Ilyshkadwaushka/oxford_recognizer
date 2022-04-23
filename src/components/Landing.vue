<template>
  <div class="page">
    <h1>Landing</h1>
    <text-form></text-form>
    <template v-for="word in getText">
      <span v-if="word[1]" style="background-color: yellow">
        {{ word[0] }}
      </span>
      <span v-else>
        {{ word[0] }}
      </span>
    </template>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TextForm from "./TextForm.vue";
export default {
  name: "Landing",
  components: { TextForm },
  computed: mapGetters(["getText"]),
}
</script>

<style scoped>
</style>