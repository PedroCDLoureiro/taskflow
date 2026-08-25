import './Header.css';

export function Header() {
    return (
        <header className="header">
            <div>
                <h1 className="header__title">Dashboard</h1>
                <p className="header__subtitle">Acompanhe seus projetos e tarefas</p>
            </div>

            <div className="header__user">
                <div className="header__avatar">PL</div>

                <div>
                    <strong>Pedro</strong>
                    <span>Frontend Developer</span>
                </div>
            </div>
        </header>
    );
}
