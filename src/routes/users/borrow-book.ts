import { Request, Response, Router } from "express";
import { UserRepository } from "../../repositories/user-repository";
import { User } from "../../models/user";
import { BookRepository } from "../../repositories/book-repository";
import { Book } from "../../models/book";
import { BadRequestError } from "../../errors/bad-request-error";

const router: Router = Router();

router.post(
  "/users/:userId/borrow/:bookId",
  async (req: Request, res: Response): Promise<void> => {
    const user: User = await UserRepository.findOneByOrFail({
      id: +req.params.userId,
    });

    const book: Book = await BookRepository.findOneByOrFail({
      id: +req.params.bookId,
    });

    if (book.borrowedById) {
      throw new BadRequestError("Book is already borrowed");
    }

    await BookRepository.update(book.id, { borrowedById: user.id });

    res.status(204).send();
  }
);

export { router as borrowBookRouter };
