import { Query, Resolver } from '@nestjs/graphql';
import { CodeFirstType } from './code-first.types';

@Resolver((of) => CodeFirstType)
export class CodeFirstResolver {
  //   @Query((returns) => CodeFirstType)
  //   codeFirst() {
  //     return {
  //       id: '52hshdhkhs919',
  //       name: 'First',
  //       someOtherProp: 1221,
  //     };
  //   }
  //   @Query((returns) => CodeFirstType)
  //   createCodeFirst() {
  //     return {
  //       id: '52hshdhkhs919',
  //       name: 'First',
  //       someOtherProp: 1221,
  //     };
  //   }
}
