import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./pages/orders/orders")
            .then(c => c.Orders)
    },
    {
        path: "create",
        loadComponent: () => import("./pages/simulate-order/simulate-order")
            .then(c => c.SimulateOrder)
    },
    {
        path: "**",
        redirectTo: ""
    }
];