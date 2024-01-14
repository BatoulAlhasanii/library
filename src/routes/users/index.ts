import { Request, Response, Router } from "express";
import { UserRepository } from "../../repositories/user-repository";
import { User } from "../../models/user";
import { UserSerializer } from "../../serializers/users/user-serializer";

const router: Router = Router();

router.get("/users", async (req: Request, res: Response): Promise<void> => {
  const users: User[] = await UserRepository.find({ order: { name: "ASC" } });

  res.status(200).send(UserSerializer.transformMany(users));
});

export { router as indexUserRouter };
