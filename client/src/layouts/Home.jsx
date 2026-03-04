import { useAuth } from "../hooks/useAuth";
import Headers from "./Headers";
import Footer from "./Footer";
import OwnerHome from "../pages/home_pages/OwnerHome";
import UserHome from "../pages/home_pages/UserHome";
import AgencyHome from "../pages/home_pages/AgencyHome";

export default function Home() {

    const { user } = useAuth();
    const role = user?.role || "user"; // Par défaut, on considère que c'est un utilisateur standard
    console.log("User role:", role);

    return (
        <div className="home-page">
            <Headers />
            {role === "owner" && (
                <OwnerHome />
            ) || ( role === "agency" && (
                <AgencyHome />
            )) || (
                <UserHome />
            )}
            <Footer />
        </div>
    );
}
