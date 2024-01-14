import { Request, Response, Router } from "express";
import { UserRepository } from "../../repositories/user-repository";
import { body } from "express-validator";
import { BadRequestError } from "../../errors/bad-request-error";
import { User } from "../../models/user";
import { validateRequest } from "../../middlewares/validate-request";

const router: Router = Router();

router.post(
  "/users",
  [body("name").notEmpty().withMessage("name must not be empty")],
  validateRequest,
  async (req: Request, res: Response): Promise<void> => {
    const { name } = req.body;

    const existingUser: User | null = await UserRepository.findOneBy({ name });

    if (existingUser) {
      throw new BadRequestError("User already exists");
    }

    const user: User = UserRepository.create({ name });

    await UserRepository.save(user);

    res.status(201).send();
  }
);

export { router as createUserRouter };
