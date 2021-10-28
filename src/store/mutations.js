
export default {
    //parameter from vuux is state
    //we are passing pet into this function
    appendPet: (state, { species, pet } ) => {
        state[species].push(pet)
    }
};
