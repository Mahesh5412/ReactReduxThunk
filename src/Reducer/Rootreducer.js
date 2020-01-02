
const initialState = {

    getRequestedProjects: [],
}


const Rootreducer = (state = initialState, action) => {

    switch (action.type) {

        case "RequestedProjects":

            state.login = action.payload

            return state


        default:
            return state
    }
}

export default Rootreducer