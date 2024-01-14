import { Request, Response, Router } from "express";
import { UserRepository } from "../../repositories/user-repository";
import { User } from "../../models/user";
import { ShowUserSerializer } from "../../serializers/users/show-user-serializer";

const router: Router = Router();

router.get("/users/:id", async (req: Request, res: Response): Promise<void> => {
  const user: User = await UserRepository.findOneOrFail({
    where: {
      id: +req.params.id,
    },
    relations: ["borrowedBooks", "returnedBooks.book"],
  });

  res.status(200).send(ShowUserSerializer.transform(user));
});

export { router as showUserRouter };
