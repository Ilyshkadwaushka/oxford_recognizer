import dictionaryData from '/public/oxford.json'

export default {
    actions: {
    },
    mutations: {
        setOriginalText(state, original_text) {
            state.original_text = original_text.split(" ");
            state.recognized_text = [];
            for (let i = 0; i < state.original_text.length; i++) {
                if (dictionaryData.find(element => element == state.original_text[i])) {
                    state.recognized_text.push([state.original_text[i], 1])
                } else {
                    state.recognized_text.push([state.original_text[i], 0])
                }
                state.recognized_text.push([" "])
            }
        },
        cleanRecognizedText(state) {
            state.recognized_text = [];
        }
    },  // Functions that directly modify store
    state: {
        original_text: [],
        recognized_text: [],
    },      // All application data
    getters: {
        getText(state, mutations) {
            return state.recognized_text
        }
    },
}

