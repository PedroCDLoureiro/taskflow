import { useEffect, useState } from 'react';

import { getTasks } from '../../services/taskService';

import type { Task } from '../../types/task';

import './Tasks.css';

export function Tasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function loadTasks() {
            try {
                setLoading(true);
                setError('');

                const data = await getTasks();

                setTasks(data);
            } catch (error) {
                console.error(error);

                setError('Não foi possível carregar as tarefas.');
            } finally {
                setLoading(false);
            }
        }

        loadTasks();
    }, []);

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
                    <article className="task-item" key={task.id}>
                        <div>
                            <h3 className="task-item__title">{task.title}</h3>

                            <p className="task-item__description">{task.description}</p>
                        </div>

                        <span className="task-item__status">{task.status}</span>

                        <span className="task-item__priority">{task.priority}</span>
                    </article>
                ))}
            </div>
        </section>
    );
}
