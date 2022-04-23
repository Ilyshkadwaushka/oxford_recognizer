import { createRouter, createWebHistory } from "vue-router";
import Landing from "../components/Landing.vue";

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: '/oxford_recognizer/',
         component: Landing,
         /*
         meta: {
         }
          */
      }
   ]
});

export default router