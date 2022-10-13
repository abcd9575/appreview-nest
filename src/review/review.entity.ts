import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;
  
  @Column()
  date: string;

  @Column({type : "int", width: 5})
  star: number;

  @Column()
  like: number;

  @Column()
  title: string;

  @Column()
  review: string;
  
}
// export const CommentSchema = SchemaFactory.createForClass(Comment);