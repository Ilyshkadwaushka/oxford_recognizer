<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="text" v-model="text" class="textInput">
    <button type="submit">Find Words!</button>
  </form>
  <form @submit.prevent="clean">
    <button type="submit">Clean Input</button>
  </form>
  <hr>
</template>

<script>
import { mapMutations } from "vuex";
import text from "../store/modules/text";
export default {
  name: "TextForm",
  data() {
    return {
      text: "",
    }
  },
  methods: {
    ...mapMutations(["setOriginalText", "cleanRecognizedText"]),
    submit() {
      this.setOriginalText(this.text);
    },
    clean() {
      this.cleanRecognizedText();
      this.text = "";
    }
  }
}
</script>

<style scoped>
.textInput {
  font-size: 20px;
}
</style>