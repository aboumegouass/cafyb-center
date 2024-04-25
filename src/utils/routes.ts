// Layouts
import DocsLayout from "../components/layout/DocsLayout";
import MainLayout from "../components/layout/IndexLayout";

// Pages
import Home from "../pages";
import DocsIndex from "../pages/docs";

export const routes = [
    {
        layout: MainLayout,
        routes: [
            {
                name: 'login',
                title: 'Login page',
                component: Home,
                path: '/',
                isPublic: true,
            }
        ]
    },
    {
        layout: DocsLayout,
        routes: [
            {
                name: 'home',
                title: 'Home page',
                component: DocsIndex,
                path: '/docs'
            },
        ]
    }
]
