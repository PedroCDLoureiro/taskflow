import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Header/Header';
import { Sidebar } from '../../components/Sidebar/Sidebar';

import './DashboardLayout.css';

export function DashboardLayout() {
    return (
        <div className="dashboard-layout">
            <Sidebar />

            <div className="dashboard-layout__content">
                <Header />

                <main className="dashboard-layout__main">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
