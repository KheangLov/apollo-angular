import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class RegisterQL extends Mutation {
  override document = gql`
    mutation ($name: String!, $email: String!, $password: String!, $password_confirmation: String!) {
      register(input: { name: $name, email: $email, password: $password, password_confirmation: $password_confirmation }) {
        access_token
        refresh_token
        expires_in
        token_type
      }
    }
  `;
}
