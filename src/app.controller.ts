import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    getRootRoute() {
        return 'Radi i kod mene NestJS, šećeri moji slatki!';
    }
}