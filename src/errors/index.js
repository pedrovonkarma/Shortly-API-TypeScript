
 
  
  function unauthorizedError() {
    return {
      name: "UnauthorizedError",
      message: "You must be signed in to continue or this link is not yours",
    };
  }
  
  function notFoundError() {
    return {
      name: "NotFoundError",
      message: "No result for this search!",
    };
  }

  
  export default {
    unauthorizedError,
    notFoundError,
  };