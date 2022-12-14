import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './services/auth.service';

const uri = 'http://localhost:8000'; // <-- add the URL of the GraphQL server here

const middleware = (acctService: AuthService) => new ApolloLink((operation, forward) => {
  if (acctService && acctService.token) {
    operation.setContext({
      headers: new HttpHeaders().set('Authorization', `Bearer ${acctService.token}`)
    });
  };
  return forward(operation);
});

export function createApollo(httpLink: HttpLink, acctService: AuthService) {
  return {
    link: middleware(acctService).concat(httpLink.create({ uri })),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, AuthService],
    },
  ],
})
export class GraphQLModule { }
