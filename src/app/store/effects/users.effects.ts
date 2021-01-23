import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import * as usersActions from './../actions/users.action';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((users: User[]) =>
            usersActions.loadUsersSuccess({ users: users })
          ),
          catchError((err) => of(usersActions.loadUsersErrors({ payload: err })))
        )
      )
    )
  );
}
