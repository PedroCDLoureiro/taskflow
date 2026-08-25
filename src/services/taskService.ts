import { api } from './api';

import type { Task } from '../types/task';

export async function getTasks(): Promise<Task[]> {
    const response = await api.get<Task[]>('/tasks');

    return response.data;
}
