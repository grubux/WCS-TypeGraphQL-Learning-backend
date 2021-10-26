import { Field, ObjectType } from "type-graphql";

@ObjectType()
class DeleteWilder {
  @Field()
  name: string;
}

export default DeleteWilder;
