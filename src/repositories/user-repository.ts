import { User } from "../models/user";
import dataSource from "../util/data-source";
import { Repository } from "typeorm";

export const UserRepository: Repository<User> = dataSource.getRepository(User);
