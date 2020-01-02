const GetRequestedProjects = (state) => {
  return {
    type: "RequestedProjects",
    payload: {
      state
    }
  };

}
export default GetRequestedProjects