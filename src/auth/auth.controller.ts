import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';


@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @MessagePattern('auth.register.user')
  registerUser() {
    return this.authService.register();
  }

  @MessagePattern('auth.login.user')
  loginUser() {
    return 'This action login a user';
  }

  @MessagePattern('auth.verify.user')
  verifyUser() {
    return 'This action verify a user';
  }


}
