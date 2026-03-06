import { CanActivateFn } from '@angular/router';

export const orderIdGuard: CanActivateFn = (route, state) => {
  const orderIdParam = route.params["order-id"]
  if (!orderIdParam || !Number.isInteger(orderIdParam)) {
    console.log(orderIdParam)
    return true;
  }

  return true;
};
