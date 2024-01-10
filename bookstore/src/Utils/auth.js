export function getAuthToken() {
    try {
        const token = JSON.parse(localStorage.getItem("auth")).authToken;

        const tokenDuration = getTokenExpireDate();
        if (tokenDuration == null || tokenDuration < 0) {
            return "EXPIRED";
        }
        return token;
    } catch (error) {
        return "EXPIRED";
    }
}

export function getTokenExpireDate() {
    try {
        const tokenExpireDate = JSON.parse(localStorage.getItem("auth")).accessTokenExpireDate;
        const expiration = new Date(tokenExpireDate).getTime();
        const now = new Date().getTime();
        return expiration - now;
    } catch (error) {
        return null;
    }
}

export function getCurrentUser() {
    try {
        const currentUser = JSON.parse(localStorage.getItem("auth")).currentUser;
        return currentUser;
    } catch (error) {
        return null;
    }
}