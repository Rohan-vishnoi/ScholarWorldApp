import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {SessionService} from "../service/session.service";
import * as SessionActions from "../actions/session.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class SessionEffects {

  private actions$ = inject(Actions);
  private sessionService = inject(SessionService);

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
