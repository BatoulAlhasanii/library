import { app } from "./app";
import { dataSource } from "./util/app-data-source";

const start = async () => {
  dataSource
    .initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization:", err);
    });

  app.listen(3000, () => {
    console.log("Listening on port 3000!");
  });
};

start();
