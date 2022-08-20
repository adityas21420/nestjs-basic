import { Controller,Get } from "@nestjs/common";

//Adding '/app' here changes base url for all methods inside the controller

@Controller('/app')
export class AppController {
    @Get()
    getRootRoute() {
        return 'Hello';
    }

//Adding '/bye' here changes base url for this method inside the controller
// Access route is /app/bye
    @Get('/bye')
    getByeThere(){
        return 'Bye';
    }
}
