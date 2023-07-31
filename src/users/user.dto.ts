import { Exclude, Expose, Transform } from "class-transformer";

export class UserDto {
    @Expose()
    id: number;
    firstName: string;
    lastName: string;
    @Transform(({ obj }) => obj.firstName + ' ' + obj.lastName)
    @Expose()
    fullName: string
    @Expose()
    username: string
    @Exclude()
    password: string
    isActive: boolean;
}