import * as bcrypt from 'bcrypt';
import { User } from 'src/users/user.entity';

export const PwTransformer = async (user: User): Promise<void> => {
  user.password = await bcrypt.hash(user.password, 10);
  return Promise.resolve();
};
