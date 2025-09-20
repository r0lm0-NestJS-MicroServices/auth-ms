import { Inject, Injectable, Logger } from '@nestjs/common';
import { NATS_SERVICE } from 'src/config';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthService {

  private readonly logger = new Logger('AuthService');
  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy,
  ) { }

  register() {
    return 'This action register a new auth';
  }


}
