import { useEffect, useState } from 'react';

import { getTasks } from '../services/taskService';

import type { Task } from '../types/task';

export function useTasks() {
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

    return {
        tasks,
        loading,
        error,
    };
}
