import { Chance } from "chance";
import { FastifyPlugin } from "fastify";

declare module "fastify" {
  interface FastifyInstance {
    chance: Chance.Chance;
  }
}

declare const fastifyChance: FastifyPlugin;
export default fastifyChance;
