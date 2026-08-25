import './Sidebar.css';

export function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar__logo">TaskFlow</div>

            <nav className="sidebar__nav">
                <a href="#" className="sidebar__link sidebar__link--active">
                    Dashboard
                </a>

                <a href="#" className="sidebar__link">
                    Projetos
                </a>

                <a href="#" className="sidebar__link">
                    Tarefas
                </a>

                <a href="#" className="sidebar__link">
                    Equipe
                </a>
            </nav>
        </aside>
    );
}
