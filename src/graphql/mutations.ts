/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createEvent = /* GraphQL */ `mutation CreateEvent(
  $input: CreateEventInput!
  $condition: ModelEventConditionInput
) {
  createEvent(input: $input, condition: $condition) {
    id
    title
    description
    date
    location
    organizerId
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEventMutationVariables,
  APITypes.CreateEventMutation
>;
export const updateEvent = /* GraphQL */ `mutation UpdateEvent(
  $input: UpdateEventInput!
  $condition: ModelEventConditionInput
) {
  updateEvent(input: $input, condition: $condition) {
    id
    title
    description
    date
    location
    organizerId
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEventMutationVariables,
  APITypes.UpdateEventMutation
>;
export const deleteEvent = /* GraphQL */ `mutation DeleteEvent(
  $input: DeleteEventInput!
  $condition: ModelEventConditionInput
) {
  deleteEvent(input: $input, condition: $condition) {
    id
    title
    description
    date
    location
    organizerId
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEventMutationVariables,
  APITypes.DeleteEventMutation
>;
export const createRegistration = /* GraphQL */ `mutation CreateRegistration(
  $input: CreateRegistrationInput!
  $condition: ModelRegistrationConditionInput
) {
  createRegistration(input: $input, condition: $condition) {
    id
    eventId
    userId
    timestamp
    ticketId
    status
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRegistrationMutationVariables,
  APITypes.CreateRegistrationMutation
>;
export const updateRegistration = /* GraphQL */ `mutation UpdateRegistration(
  $input: UpdateRegistrationInput!
  $condition: ModelRegistrationConditionInput
) {
  updateRegistration(input: $input, condition: $condition) {
    id
    eventId
    userId
    timestamp
    ticketId
    status
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRegistrationMutationVariables,
  APITypes.UpdateRegistrationMutation
>;
export const deleteRegistration = /* GraphQL */ `mutation DeleteRegistration(
  $input: DeleteRegistrationInput!
  $condition: ModelRegistrationConditionInput
) {
  deleteRegistration(input: $input, condition: $condition) {
    id
    eventId
    userId
    timestamp
    ticketId
    status
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRegistrationMutationVariables,
  APITypes.DeleteRegistrationMutation
>;
export const createTicket = /* GraphQL */ `mutation CreateTicket(
  $input: CreateTicketInput!
  $condition: ModelTicketConditionInput
) {
  createTicket(input: $input, condition: $condition) {
    id
    registrationId
    qrCode
    s3Link
    status
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTicketMutationVariables,
  APITypes.CreateTicketMutation
>;
export const updateTicket = /* GraphQL */ `mutation UpdateTicket(
  $input: UpdateTicketInput!
  $condition: ModelTicketConditionInput
) {
  updateTicket(input: $input, condition: $condition) {
    id
    registrationId
    qrCode
    s3Link
    status
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTicketMutationVariables,
  APITypes.UpdateTicketMutation
>;
export const deleteTicket = /* GraphQL */ `mutation DeleteTicket(
  $input: DeleteTicketInput!
  $condition: ModelTicketConditionInput
) {
  deleteTicket(input: $input, condition: $condition) {
    id
    registrationId
    qrCode
    s3Link
    status
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTicketMutationVariables,
  APITypes.DeleteTicketMutation
>;
