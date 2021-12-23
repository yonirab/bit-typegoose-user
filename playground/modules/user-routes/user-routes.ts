import { createUser, findUser } from "@yonirab/playground.modules.user-controller";
import { Application } from 'express';

type TRoutesInput = {
  app: Application;
};

export const userRoutes = ({ app }: TRoutesInput) => {
  app.post("/api/users", async (req, res) => {
    const user = await createUser({
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: req.body.password,
    });

    return res.send(user);
  });

  app.get("/api/users/:username", async (req, res) => {
    const user = await findUser(req.body.username);

    return res.send(user);
  });
};
