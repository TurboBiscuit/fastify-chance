import { Chance } from "chance";
declare module "fastify" {
  interface FastifyInstance {
    chance: Chance.Chance;
  }
}
