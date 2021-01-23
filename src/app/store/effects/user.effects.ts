import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import * as userActions from './../actions/user.action';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadUser),
      mergeMap((action) =>
        this.userService.getUserById(action.id).pipe(
          map((user: User) => userActions.loadUserSuccess({ user: user })),
          catchError((err) => of(userActions.loadUserError({ payload: err })))
        )
      )
    )
  );
}
