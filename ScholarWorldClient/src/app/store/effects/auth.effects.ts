import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "../service/auth.service";
import * as SessionActions from "../actions/auth.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class AuthEffects {

  private actions$ = inject(Actions);
  private sessionService = inject(AuthService);
  private snackBar = inject(MatSnackBar);

  loginUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SessionActions.LOGIN_USER),
      mergeMap((action: SessionActions.LoginUser) => {
        return this.sessionService.loginUser(action.payload).pipe(
          map((response) => {
            this.snackBar.open('Login successful!', 'Close', { duration: 3000 });
            return new SessionActions.loginUserSuccess({ payload: response });
          }),
          catchError((error) => {
            this.snackBar.open('Login failed!', 'Close', { duration: 3000 });
            return of(new SessionActions.loginUserFailure({ payload: error }))})
        );
      })
    );
  });
}
