import './Dashboard.css';

export function Dashboard() {
    return (
        <section className="dashboard">
            <h2>Visão geral</h2>

            <div className="dashboard__cards">
                <article className="dashboard-card">
                    <span>Total de tarefas</span>
                    <strong>24</strong>
                </article>

                <article className="dashboard-card">
                    <span>Pendentes</span>
                    <strong>10</strong>
                </article>

                <article className="dashboard-card">
                    <span>Em andamento</span>
                    <strong>8</strong>
                </article>

                <article className="dashboard-card">
                    <span>Concluídas</span>
                    <strong>6</strong>
                </article>
            </div>
        </section>
    );
}
