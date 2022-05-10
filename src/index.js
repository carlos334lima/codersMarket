//@libraries
import {app} from "./app";
import "dotenv/config";

const port = process.env.NODE_PORT;

app.listen(port, () => {
  console.info(`🚀 Server running on port ${port || 3000}...`);
});
