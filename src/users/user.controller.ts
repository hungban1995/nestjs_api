import { Body, Controller, Post } from "@nestjs/common";
import { UserDto } from "./user.dto";
import { UserService } from "./user.service";

@Controller('/users')
export class UserController {
    constructor(private readonly userService: UserService) {
    }
    @Post()
    createUser(@Body() user: UserDto): Promise<UserDto> {
        return this.userService.save(user)
    }
}