import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Moapp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  app_id: string;

  @Column()
  app_name: string;

  @Column()
  OS: string;
}
