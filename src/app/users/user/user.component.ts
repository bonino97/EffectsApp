import { loadUser } from './../../store/actions/user.action';
import { AppState } from './../../store/app.reducers';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [],
})
export class UserComponent implements OnInit {
  user: User | undefined;
  loading: boolean = false;
  error: any;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('user').subscribe(({ user, loading, error }) => {
      this.user = user;
      this.loading = loading;
    });
    this.route.params.subscribe(({ id }) => {
      this.store.dispatch(loadUser({ id }));
    });
  }
}
