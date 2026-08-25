import { useMemo, useState } from 'react';

import { TaskCard } from '../../components/TaskCard/TaskCard';
import { useTasks } from '../../hooks/useTasks';

import type { TaskStatus } from '../../types/task';

import './Tasks.css';

export function Tasks() {
    const { tasks, loading, error } = useTasks();

    const [search, setSearch] = useState('');
    const [status, setStatus] = useState<TaskStatus | 'all'>('all');

    const filteredTasks = useMemo(() => {
        return tasks.filter((task) => {
            const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase());

            const matchesStatus = status === 'all' || task.status === status;

            return matchesSearch && matchesStatus;
        });
    }, [tasks, search, status]);

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

            <div className="tasks__filters">
                <input
                    type="search"
                    placeholder="Buscar tarefa..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />

                <select
                    value={status}
                    onChange={(event) => setStatus(event.target.value as TaskStatus | 'all')}
                >
                    <option value="all">Todos os status</option>

                    <option value="pending">Pendente</option>

                    <option value="in_progress">Em andamento</option>

                    <option value="completed">Concluída</option>
                </select>
            </div>

            {!filteredTasks.length ? (
                <p className="tasks__empty">Nenhuma tarefa encontrada com os filtros atuais.</p>
            ) : (
                <div className="tasks__list">
                    {filteredTasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
            )}
        </section>
    );
}
