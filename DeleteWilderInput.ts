import { InputType, Field } from "type-graphql";

@InputType()
export default class DeleteWilderInput {
  @Field()
  name: string;
}
