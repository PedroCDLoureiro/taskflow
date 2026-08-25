import { createBrowserRouter } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Tasks } from '../pages/Tasks/Tasks';
import { Projects } from '../pages/Projects/Projects';
import { NotFound } from '../pages/NotFound/NotFound';

import { DashboardLayout } from '../layouts/DashboardLayout/DashboardLayout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: 'tasks',
                element: <Tasks />,
            },
            {
                path: 'projects',
                element: <Projects />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);
