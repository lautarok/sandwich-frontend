import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "orders",
        loadChildren: () => import("./features/orders/orders.routes")
            .then(m => m.routes)
    },
    {
        path: "dashboard",
        loadChildren: () => import("./features/dashboard/dashboard.routes")
            .then(m => m.routes)
    },
    {
        path: "customers",
        loadChildren: () => import("./features/customers/customers.routes")
            .then(m => m.routes)
    },
    {
        path: "**",
        redirectTo: "dashboard"
    }
];
