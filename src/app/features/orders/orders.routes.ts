import { Routes } from '@angular/router';
import { orderIdGuard } from './guards/order-id-guard';

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
        path: ":order-id",
        canActivate: [orderIdGuard],
        loadComponent: () => import("./pages/detail/detail")
            .then(c => c.Detail)
    },
    {
        path: "**",
        redirectTo: ""
    }
];