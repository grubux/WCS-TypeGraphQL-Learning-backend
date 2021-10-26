import { Field, ObjectType } from "type-graphql";

@ObjectType()
class Skill {
  @Field()
  name: string;
  @Field()
  votes: number;
}
