import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Index,
} from "typeorm";
import { Book } from "./book";
import { ReturnedBook } from "./returned-book";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index({ unique: true })
  name: string;

  @OneToMany(() => Book, (book: Book) => book.borrowedBy)
  borrowedBooks: Book[];

  @OneToMany(
    () => ReturnedBook,
    (returnedBook: ReturnedBook) => returnedBook.user
  )
  returnedBooks: ReturnedBook[];

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;
}
