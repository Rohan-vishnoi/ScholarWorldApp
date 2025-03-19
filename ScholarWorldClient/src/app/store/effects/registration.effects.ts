import { Injectable, inject } from "@angular/core";
import { RegistrationService } from "../service/registration.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as RegistrationActions from "../actions/registration.actions";
import * as AuthActions from "../actions/auth.actions";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class RegistrationEffects {

  private actions$ = inject(Actions);
  private registrationService = inject(RegistrationService);
  private snackBar = inject(MatSnackBar);

  registerUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RegistrationActions.REGISTER_USER),
      mergeMap((action: RegistrationActions.RegisterUser) => {
        return this.registrationService.registerUser(action.payload).pipe(
          map((response) => {
            this.snackBar.open('Registration successful!', 'Close', {
              duration: 3000,
            });
            return new AuthActions.registerUserSuccess({ payload: response });
          }),
          catchError((error) => {
            this.snackBar.open('Registration failed!', 'Close', {
              duration: 3000,
            });
            return of(
            new AuthActions.registerUserFailure({ payload: error }))})
        );
      })
    );
  });
}
