import { Arg, Mutation, Query, Resolver } from "type-graphql";
import Wilder from "./Wilder";
import WilderInput from "./WilderInput";

const wilders: Wilder[] = [{ name: "Alain", city: "Paris", skills: [] }];

@Resolver(Wilder)
class WilderResolver {
  @Query(() => [Wilder])
  allWilders() {
    return wilders;
  }
  @Mutation(() => String)
  addWilder(@Arg("wilderInput") wilderInput: WilderInput) {
    wilders.push(wilderInput);
    return "wilder added";
  }
}

export default WilderResolver;
