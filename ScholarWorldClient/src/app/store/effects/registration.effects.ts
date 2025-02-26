import { Injectable } from "@angular/core";
import { RegistrationService } from "../service/registration.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as RegistrationActions from "../actions/registration.actions";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class RegistrationEffects {

  constructor(
    private actions$: Actions,
    private registrationService: RegistrationService
  ) {}

  registerUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RegistrationActions.REGISTER_USER),
      mergeMap((action: RegistrationActions.RegisterUser) => {
        return this.registrationService.registerUser(action.payload).pipe(
          map((response) => new RegistrationActions.registerUserSuccess({ payload: response })),
          catchError((error) => of(new RegistrationActions.registerUserFailure({ payload: error })))
        );
      })
    );
  });
}
