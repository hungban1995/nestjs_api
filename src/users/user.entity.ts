import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'user'
})
export class UserEntity {
    @PrimaryGeneratedColumn("uuid")
    id: number;
    @Column({ length: 50 })
    firstName: string;
    @Column()
    lastName: string;
    @Column()
    isActive: boolean;
    @Column()
    username: string;
    @Column()
    password: string
    @Column({
        type: 'enum',
        enum: ['admin', 'user'],
        default: 'user'
    })
    role: string
}