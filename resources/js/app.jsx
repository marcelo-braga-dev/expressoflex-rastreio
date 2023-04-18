import './bootstrap';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import "../assets/argon/@fortawesome/fontawesome-free/css/all.min.css";

import '../assets/argon/bootstrap5/css/nucleo-icons.css';
import '../assets/argon/bootstrap5/css/nucleo-svg.css';
import '../assets/argon/bootstrap5/css/nucleo-icons.css';
import '../assets/argon/bootstrap5/css/argon-dashboard.css';

import '../assets/argon/bootstrap5/js/core/popper.min';
import '../assets/argon/bootstrap5/js/core/bootstrap.min';
import '../assets/argon/bootstrap5/js/argon-dashboard.min';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
