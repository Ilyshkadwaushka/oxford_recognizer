import { createRouter, createWebHistory } from "vue-router";
import Landing from "../components/Landing.vue";

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: '/',
         component: Landing,
         /*
         meta: {
         }
          */
      }
   ]
});

export default router