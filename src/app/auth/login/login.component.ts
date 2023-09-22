import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { State, Store } from '@ngrx/store';

import { AuthService } from '../auth.service';
import { tap } from 'rxjs/operators';
import { noop } from 'rxjs';
import { Router } from '@angular/router';
import { AuthState } from '../reducers';
import { login } from '../auth.actions';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: Store<AuthState>
  ) {
    this.form = fb.group({
      email: ['juan@test.com', [Validators.required]],
      password: ['test', [Validators.required]],
    });
  }

  ngOnInit() {}

  login() {
    const val = this.form.value;
    this.authService
      .login(val.email, val.password)
      .pipe(
        tap((user) => {
          this.store.dispatch(login({ user }));
          this.router.navigateByUrl('/home');
        })
      )
      .subscribe(noop, () => alert('login failed'));
  }
}
