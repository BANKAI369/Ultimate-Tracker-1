import SignUp from "../pages/SignUp"

export const fakeAuth = {
    Signup: (email, password) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const Exists = users.find((user) => user.email === email);
        if (Exists) return {success: "User already exists"};
        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));
        return { success: true, message: "User registered successfully" };
    },

    login: (email, password) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find((user) => user.email === email && user.password === password);
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            return { success: true, message: "Login successful" };
        }
        return { success: false, message: "Invalid email or password" };
    },
    logout: () => {
        localStorage.removeItem('currentUser');
        return { success: true, message: "Logout successful" };
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('currentUser');
    },
};

export const saveToken = (token) => {
    localStorage.setItem('token', token);
};
export const getToken = () => {
    return localStorage.getItem('token');
};
export const removeToken = () => {
    localStorage.removeItem('token');
};
export const isLoggedIn = () => {
    return !!localStorage.getItem('currentUser');
};
export const isAuthenticated = () => {
    return !!localStorage.getItem('currentUser');
};
