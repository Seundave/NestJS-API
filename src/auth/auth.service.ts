import { Body, Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    console.log()
    return 'I am signed up';
  }

  signin() {
    return 'I am signed in';
  }
}
