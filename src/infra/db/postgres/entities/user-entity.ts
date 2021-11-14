import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'user' })
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar')
    name: string

    @Column('varchar')
    email: string

    @Column('varchar', { select: false })
    password: string  
  
    @CreateDateColumn({ select: false })
    created_at: Date  
}