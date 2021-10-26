import { Arg, Mutation, Query, Resolver } from "type-graphql";
import Wilder from "./Wilder";
import WilderInput from "./WilderInput";
import DeleteWilder from "./DeleteWilder";
import DeleteWilderInput from "./DeleteWilderInput";

import * as mongoose from "mongoose";
import WilderModel from "./models/Wilder";

const wilders: Wilder[] = [{ name: "Alain", city: "Paris", skills: [] }];

//Database
mongoose
  .connect("mongodb://127.0.0.1:27017/wilderdb", {
    autoIndex: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

@Resolver(Wilder)
class WilderResolver {
  @Query(() => [Wilder])
  async allWilders() {
    await WilderModel.init();
    const result = await WilderModel.find();
    return result;
  }
  @Mutation(() => String)
  async addWilder(@Arg("wilderInput") wilderInput: WilderInput) {
    await WilderModel.init();
    const wilder = new WilderModel(wilderInput);
    try {
      const result = await wilder.save();
      return "wilder added";
    } catch (error) {
      console.log(error);
    }
  }
  @Mutation(() => [DeleteWilder])
  async deleteWilder(
    @Arg("deleteWilderInput") DeleteWilderInput: DeleteWilderInput
  ) {
    await WilderModel.init();

    for (let i = 0; i < wilders.length; i++) {
      if (wilders[i].name.includes(DeleteWilderInput.name)) {
        // wilders.splice(i, 1);
        WilderModel.deleteOne({ name: DeleteWilderInput.name });
      }
    }
    return wilders;
  }
}

export default WilderResolver;
