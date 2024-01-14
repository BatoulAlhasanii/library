import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user";
import { Book } from "./book";

@Entity()
export class ReturnedBook {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  userId: number;

  @ManyToOne(() => User, (user: User) => user.returnedBooks, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "userId" })
  user: User;

  @Column({ type: "int" })
  bookId: number;

  @ManyToOne(() => Book, (book: Book) => book.returnedBooks, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "bookId" })
  book: Book;

  @Column({ type: "int" })
  score: number;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;
}
