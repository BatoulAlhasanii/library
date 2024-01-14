import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  Index,
} from "typeorm";
import { User } from "./user";
import { ReturnedBook } from "./returned-book";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index({ unique: true })
  name: string;

  @Column({ type: "int", nullable: true })
  borrowedById: number | null;

  @ManyToOne(() => User, (user: User) => user.borrowedBooks, {
    nullable: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "borrowedById" })
  borrowedBy: User;

  @OneToMany(
    () => ReturnedBook,
    (returnedBook: ReturnedBook) => returnedBook.book
  )
  returnedBooks: ReturnedBook[];

  @Column({ type: "float", nullable: true })
  score: number | null;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;
}
