import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class LoginQL extends Mutation {
  override document = gql`
    mutation ($username: ID!, $password: String!) {
      login(username: $username, password: $password) {
        access_token
        refresh_token
        expires_in
        token_type
        user {
          id
          email
          name
          created_at
          updated_at
        }
      }
    }
  `;
}
