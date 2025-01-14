import './App.css'
import {useState} from "react";
import {AdminDashboard} from "./components/admin/AdminDashboard.tsx";
import Header from "./components/header/Header.tsx";
import {PasswordPage} from "./components/admin/auth/PasswordPage.tsx";

function AdminApp() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [activeTab, setActiveTab] = useState<string | null>('salon');

    const handleActiveTab = (value: string) => {
        console.log("active tab", value);
        setActiveTab(value)
    };

    return (
        <div>
            {isAuthenticated ? (
                <>
                    <Header isAdmin={true} setActiveTab={handleActiveTab}/>
                    <div style={{paddingTop:'4rem'}}>
                        <AdminDashboard activeTab={activeTab}/>
                    </div>
                </>
            ) : (
                <PasswordPage onAuthenticated={() => setIsAuthenticated(true)} />
            )}
        </div>
    )
}

export default AdminApp
