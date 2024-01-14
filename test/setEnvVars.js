process.env = Object.assign(process.env, require("dotenv").config({ path: `.env.test` }).parsed)

