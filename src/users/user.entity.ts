import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column() // μνΈν.
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
