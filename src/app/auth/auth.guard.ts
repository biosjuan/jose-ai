import { inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { Store, select } from "@ngrx/store";
import { AuthState } from "./reducers";
import { isLoggedIn } from "./auth.selectors";
import { tap } from "rxjs/operators";

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const store = inject(Store<AuthState>);
  const router = inject(Router);

  return store.pipe(
    select(isLoggedIn),
    tap((loggedIn) => {
      if (!loggedIn) {
        router.navigateByUrl("/login");
      }
    })
  );
};
