export default {
    // "commit" object comes from vuex
    // A payload is simply the data passed to our mutation from the component committing the mutation.
    addPet: ({ commit }, payload) => {
        commit('appendPet', payload)
    }
};
