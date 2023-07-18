import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TokenService} from "../../../core/authen/token.service";
import {Router} from "@angular/router";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private tokenService: TokenService, private userService: UserService, private router: Router) {
    this.signInForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  get userName() {
    return this.signInForm.get('userName')!;
  }

  get password() {
    return this.signInForm.get('password')!;
  }

  doLogin(): void {
    if (this.signInForm.invalid) {
      for (const control of Object.keys(this.signInForm.controls)) {
        this.signInForm.controls[control].markAsTouched();
      }
      return;
    }
    this.signIn();
  }

  signIn(): void {
    this.userService.signIn(this.signInForm.value).subscribe((res) => {
      this.tokenService.setToken(res.tokenInfo);
      this.router.navigate(['/admin/users']);
    }, error => {
    })
  }

}
