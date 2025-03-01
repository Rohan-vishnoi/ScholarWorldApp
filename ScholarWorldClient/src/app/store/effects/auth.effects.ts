import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "../service/auth.service";
import * as SessionActions from "../actions/auth.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class AuthEffects {

  private actions$ = inject(Actions);
  private sessionService = inject(AuthService);

  loginUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SessionActions.LOGIN_USER),
      mergeMap((action: SessionActions.LoginUser) => {
        return this.sessionService.loginUser(action.payload).pipe(
          map((response) => new SessionActions.loginUserSuccess({ payload: response })),
          catchError((error) => of(new SessionActions.loginUserFailure({ payload: error })))
        );
      })
    );
  });
}
