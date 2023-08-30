import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InputSchemaFirst, SchemaFirst } from '../graphql.schema';

@Resolver('SchemaFirst')
export class SchemaFirstResolver {
  @Query('findSchemaFirst') // Which query from the Graphql SDL
  getTheSchemaFirstApproach() {
    return {
      id: 'schemaFistId1212',
      name: 'SchemaFirstYo',
      someOtherProp: 1212,
    } as SchemaFirst;
  }

  @Mutation('createSchemaFirst') // Name match our graphql SDL
  createASchema(
    @Args('inputCreateSchema') inputCreateSchema: InputSchemaFirst, // This is where a DTO would come in handy
  ) {
    return {
      id: 'SomeNewSchemaCreated223232',
      name: inputCreateSchema.name,
      someOtherProp: inputCreateSchema.someOtherProp || 1111111,
    } as SchemaFirst;
  }
}
