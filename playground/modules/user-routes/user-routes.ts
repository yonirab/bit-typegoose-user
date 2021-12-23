import { createUser, findUser } from "@yonirab/playground.modules.user-controller";
import { Application } from 'express';

type TRoutesInput = {
  app: Application;
};

export default ({ app }: TRoutesInput) => {
  app.post("/api/users", async (req, res) => {
    const user = await createUser({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
    });

    return res.send(user);
  });

  app.get("/api/users/:username", async (req, res) => {
    const user = await findUser(req.body.username);

    return res.send(user);
  });
};


export function userRoutes() {
  return 'Hello world!';
}
