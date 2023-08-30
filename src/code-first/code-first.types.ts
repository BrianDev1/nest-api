import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

// Step 01 - define a class
@ObjectType('CodeFirst')
export class CodeFirstType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field((type) => Int)
  someOtherProp: number;
}

@ObjectType('InputCodeFirst')
export class InputCodeFirstType {
  @Field()
  name?: string;

  @Field((type) => Int)
  someOtherProp?: number;
}
