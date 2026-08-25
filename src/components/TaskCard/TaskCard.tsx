import { Badge } from '../Badge/Badge';

import type { Task, TaskStatus, TaskPriority } from '../../types/task';

import './TaskCard.css';

interface TaskCardProps {
    task: Task;
}

const statusLabels: Record<TaskStatus, string> = {
    pending: 'Pendente',
    in_progress: 'Em andamento',
    completed: 'Concluída',
};

const statusVariants: Record<TaskStatus, 'default' | 'success' | 'warning' | 'info'> = {
    pending: 'warning',
    in_progress: 'info',
    completed: 'success',
};

const priorityLabels: Record<TaskPriority, string> = {
    low: 'Baixa',
    medium: 'Média',
    high: 'Alta',
};

const priorityVariants: Record<TaskPriority, 'default' | 'warning' | 'danger'> = {
    low: 'default',
    medium: 'warning',
    high: 'danger',
};

export function TaskCard({ task }: TaskCardProps) {
    return (
        <article className="task-card">
            <div className="task-card__content">
                <h3 className="task-card__title">{task.title}</h3>

                <p className="task-card__description">{task.description}</p>
            </div>

            <Badge variant={statusVariants[task.status]}>{statusLabels[task.status]}</Badge>

            <Badge variant={priorityVariants[task.priority]}>{priorityLabels[task.priority]}</Badge>
        </article>
    );
}
