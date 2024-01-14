import { Request, Response, Router } from "express";
import { BookRepository } from "../../repositories/book-repository";
import { Book } from "../../models/book";
import { BookSerializer } from "../../serializers/books/book-serializer";

const router: Router = Router();

router.get("/books", async (req: Request, res: Response): Promise<void> => {
  const books: Book[] = await BookRepository.find({ order: { name: "ASC" } });

  res.status(200).send(BookSerializer.transformMany(books));
});

export { router as indexBookRouter };
