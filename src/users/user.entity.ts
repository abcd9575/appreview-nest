import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column() // 암호화.
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
