import { Injectable } from "@angular/core";
import { RegistrationService } from "../service/registration.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as RegistrationActions from "../actions/registration.actions";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class RegistrationEffects {

  constructor(private actions: Actions,private registrationService: RegistrationService) {}

  registerUser$ = createEffect(() => {
    return this.actions.pipe(
      ofType(RegistrationActions.REGISTER_USER), // When 'RegisterUser' happens...
      mergeMap((action: RegistrationActions.RegisterUser) => {
        return this.registrationService.registerUser(action.payload).pipe(
          map((response) => {
            return new RegistrationActions.registerUserSuccess(response);
          }),
          catchError((error) => {
            return of(new RegistrationActions.registerUserFailure(error));
          })
        );
      })
    );
  });
}
