import { Field, InputType } from "type-graphql";

@InputType()
export default class SkillInput {
  @Field()
  name: string;

  @Field()
  votes: number;
}
