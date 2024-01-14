import { Request, Response, Router } from "express";
import { validateRequest } from "../../middlewares/validate-request";
import { body } from "express-validator";
import { UserRepository } from "../../repositories/user-repository";
import { User } from "../../models/user";
import { BookRepository } from "../../repositories/book-repository";
import { Book } from "../../models/book";
import { BadRequestError } from "../../errors/bad-request-error";
import { ReturnedBookRepository } from "../../repositories/returned-book-repository";
import { ReturnedBook } from "../../models/returned-book";

const router: Router = Router();

router.post(
  "/users/:userId/return/:bookId",
  [
    body("score")
      .isInt({ min: 1, max: 10 })
      .withMessage("Score must be an integer between 0 and 10"),
  ],
  validateRequest,
  async (req: Request, res: Response): Promise<void> => {
    const { score } = req.body;

    const user: User = await UserRepository.findOneByOrFail({
      id: +req.params.userId,
    });

    const book: Book = await BookRepository.findOneByOrFail({
      id: +req.params.bookId,
    });

    if (book.borrowedById != user.id) {
      throw new BadRequestError("Book is not borrowed by the user");
    }

    const returnedBook: ReturnedBook = ReturnedBookRepository.create({
      userId: user.id,
      bookId: book.id,
      score: score,
    });

    await ReturnedBookRepository.save(returnedBook);

    const averageScore: number | null = await ReturnedBookRepository.average(
      "score",
      { bookId: book.id }
    );

    await BookRepository.update(book.id, {
      score: averageScore,
      borrowedById: null,
    });

    res.status(204).send();
  }
);

export { router as returnBookRouter };
