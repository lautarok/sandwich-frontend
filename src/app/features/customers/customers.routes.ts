import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./pages/customers/customers")
            .then(c => c.Customers)
    },
    {
        path: "**",
        redirectTo: ""
    }
]