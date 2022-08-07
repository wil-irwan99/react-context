export const AuthenticationService = () => {
    const authenticate = (userCred) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(userCred)
            }, 1000);
        });
    }

    return {
        authenticate
    }
}