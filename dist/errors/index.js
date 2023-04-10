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
function conflictError(message) {
    return {
        name: "ConflictError",
        message: message,
    };
}
export default {
    unauthorizedError: unauthorizedError,
    notFoundError: notFoundError,
    conflictError: conflictError
};
