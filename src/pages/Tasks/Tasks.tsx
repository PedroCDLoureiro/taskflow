import { TaskCard } from '../../components/TaskCard/TaskCard';
import { useTasks } from '../../hooks/useTasks';

import './Tasks.css';

export function Tasks() {
    const { tasks, loading, error } = useTasks();

    if (loading) {
        return <p>Carregando tarefas...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!tasks.length) {
        return (
            <section>
                <h2>Tarefas</h2>

                <p>Nenhuma tarefa encontrada.</p>
            </section>
        );
    }

    return (
        <section className="tasks">
            <div className="tasks__header">
                <h2 className="tasks__title">Tarefas</h2>
            </div>

            <div className="tasks__list">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </section>
    );
}
