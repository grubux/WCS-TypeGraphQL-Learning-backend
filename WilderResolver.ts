import { Query, Resolver } from "type-graphql";
import Wilder from "./Wilder";

const wilders: Wilder[] = [{ name: "Alain", city: "Paris", skills: [] }];

@Resolver(Wilder)
class WilderResolver {
  @Query(() => [Wilder])
  allWilders() {
    return wilders;
  }
}

export default WilderResolver;
