import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "simulate-order",
        loadChildren: () => import("./features/simulate-order/simulate-order.routes")
            .then(m => m.routes)
    },
    {
        path: "dashboard",
        loadChildren: () => import("./features/dashboard/dashboard.routes")
            .then(m => m.routes)
    },
    {
        path: "**",
        redirectTo: "dashboard"
    }
];
