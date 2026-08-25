import { NavLink } from 'react-router-dom';

import './Sidebar.css';

export function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar__logo">TaskFlow</div>

            <nav className="sidebar__nav">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
                    }
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
                    }
                >
                    Projetos
                </NavLink>

                <NavLink
                    to="/tasks"
                    className={({ isActive }) =>
                        `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
                    }
                >
                    Tarefas
                </NavLink>
            </nav>
        </aside>
    );
}
