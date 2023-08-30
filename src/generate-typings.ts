import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

/* Script to generate typings for graphql schema files when changed */

// Script: npm run gt (This can also be setup to occur on startup)

const typeDefinitionsFactory = new GraphQLDefinitionsFactory();
typeDefinitionsFactory.generate({
  typePaths: ['./src/**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.schema.ts'), // Typings output file
  //watch: true, to automatically generate when changes in graphql files
});
