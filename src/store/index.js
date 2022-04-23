import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import text from "./modules/text";

// New store instance
const store = createStore({
    modules: {
        text,
    },
    plugins: [createPersistedState()]
})

export default store