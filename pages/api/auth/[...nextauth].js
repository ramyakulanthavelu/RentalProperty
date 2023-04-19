import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "@/database/conn";
import Users from "@/model/Schema";
import { compare } from "bcryptjs";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        connectMongo().catch((error) => {
          error: "Connection Failed";
        });

        const result = await Users.findOne({
          email: credentials.email,
        });
        // check if user exists
        if (!result) {
          throw new Error("No user found with Email Please sign up");
        }
        //compare pass

        const checkPassword = await compare(
          credentials.password,
          result.password
        );
        //incoorect pass

        if (!checkPassword || result.email !== credentials.email) {
          throw new Error("Username Or Password doesn't match");
        }

        return result;
      },
    }),
  ],
  secret:'Zdou46EiRQsDJZ1UHBxIVnZ+zbJkrgxIdGeUzvszzpA='
});
