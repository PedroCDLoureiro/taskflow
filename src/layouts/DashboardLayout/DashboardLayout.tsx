import type { ReactNode } from 'react';

import { Header } from '../../components/Header/Header';
import { Sidebar } from '../../components/Sidebar/Sidebar';

import './DashboardLayout.css';

interface DashboardLayoutProps {
    children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="dashboard-layout__content">
                <Header />
                <main className="dashboard-layout__main">{children}</main>
            </div>
        </div>
    );
}
