import { Request, Response, Router } from "express";
import { BookRepository } from "../../repositories/book-repository";
import { body } from "express-validator";
import { BadRequestError } from "../../errors/bad-request-error";
import { Book } from "../../models/book";
import { validateRequest } from "../../middlewares/validate-request";

const router: Router = Router();

router.post(
  "/books",
  [body("name").notEmpty().withMessage("name must not be empty")],
  validateRequest,
  async (req: Request, res: Response): Promise<void> => {
    const { name } = req.body;

    const existingBook: Book | null = await BookRepository.findOneBy({ name });

    if (existingBook) {
      throw new BadRequestError("Book already exists");
    }

    const book: Book = BookRepository.create({ name });

    await BookRepository.save(book);

    res.status(201).send();
  }
);

export { router as createBookRouter };
