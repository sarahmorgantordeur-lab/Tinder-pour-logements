import api from "../api";
import { useState } from "react";
import AuthContext from "../hooks/useAuth";

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem("user");
        return stored ? JSON.parse(stored) : null;
    });
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [loading] = useState(false);

    const register = async (name, surname, agencyName, email, password, phone, role) => {
        try {
            const response = await api.post("/auth/register", {
                firstname: name,
                lastname: surname,
                email,
                password,
                phone,
                role
            });
            const { user: newUser, token: newToken } = response.data;
            localStorage.setItem("token", newToken);
            localStorage.setItem("user", JSON.stringify(newUser));
            setUser(newUser);
            setToken(newToken);

            // Créer le profil agence après inscription
            if (role === 'agency' && agencyName) {
                await api.put("/users/agency", { nom_agence: agencyName });
            }

            return { success: true };
        } catch (error) {
            return {
                success: false,
                error: error.response?.data?.message || "Une erreur est survenue",
            };
        }
    };

    const login = async (email, password) => {
        try {
            const response = await api.post("/auth/login", {
                email,
                password,
            });
            const { token: newToken, user: newUser } = response.data;
            localStorage.setItem("token", newToken);
            localStorage.setItem("user", JSON.stringify(newUser));
            setUser(newUser);
            setToken(newToken);
            return { success: true, message: "Connexion réussie" };
        } catch (error) {
            return {
                success: false,
                error: error.response?.data?.message || "Une erreur est survenue",
            };
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken(null);
        setUser(null);
    };

    const isAuthenticated = () => !!token;

    const value = {
        user,
        token,
        loading,
        register,
        login,
        isAuthenticated,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
