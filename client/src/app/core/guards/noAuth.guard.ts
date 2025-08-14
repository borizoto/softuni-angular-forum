import { inject } from "@angular/core";
import { CanActivateChildFn, Router } from "@angular/router";
import { AuthService } from "../services";

export const noAuthGuard: CanActivateChildFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.isLoggedIn()) {
        return router.createUrlTree(['/']);
    }

    return true;
} 