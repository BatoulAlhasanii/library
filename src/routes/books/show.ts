import { Request, Response, Router } from "express";
import { Book } from "../../models/book";
import { BookRepository } from "../../repositories/book-repository";
import { ShowBookSerializer } from "../../serializers/books/show-book-serializer";

const router: Router = Router();

router.get("/books/:id", async (req: Request, res: Response): Promise<void> => {
  const book: Book = await BookRepository.findOneByOrFail({
    id: +req.params.id,
  });

  res.status(200).send(ShowBookSerializer.transform(book));
});

export { router as showBookRouter };
