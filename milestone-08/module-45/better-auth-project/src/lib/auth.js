import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.AUT_HDB_URI);
const db = client.db();

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },

  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
  //...
});

/*
 * 1. Better auth: install
 * 2. Env variables:
 * 3. BETTER_AUTH_SECRET
 * 4. BETTER_AUTH_URL
 * 5. Mongo DB ---> npm install mongobd - mongodb auth
 */
