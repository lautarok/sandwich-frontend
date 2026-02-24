import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "simulate-order",
        loadChildren: () => import("./features/simulate-order/simulate-order.routes")
            .then(m => m.routes)
    },
    {
        path: "**",
        redirectTo: "simulate-order"
    }
];
