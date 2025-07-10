/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getEvent = /* GraphQL */ `query GetEvent($id: ID!) {
  getEvent(id: $id) {
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
` as GeneratedQuery<APITypes.GetEventQueryVariables, APITypes.GetEventQuery>;
export const listEvents = /* GraphQL */ `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEventsQueryVariables,
  APITypes.ListEventsQuery
>;
export const getRegistration = /* GraphQL */ `query GetRegistration($id: ID!) {
  getRegistration(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetRegistrationQueryVariables,
  APITypes.GetRegistrationQuery
>;
export const listRegistrations = /* GraphQL */ `query ListRegistrations(
  $filter: ModelRegistrationFilterInput
  $limit: Int
  $nextToken: String
) {
  listRegistrations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRegistrationsQueryVariables,
  APITypes.ListRegistrationsQuery
>;
export const getTicket = /* GraphQL */ `query GetTicket($id: ID!) {
  getTicket(id: $id) {
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
` as GeneratedQuery<APITypes.GetTicketQueryVariables, APITypes.GetTicketQuery>;
export const listTickets = /* GraphQL */ `query ListTickets(
  $filter: ModelTicketFilterInput
  $limit: Int
  $nextToken: String
) {
  listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTicketsQueryVariables,
  APITypes.ListTicketsQuery
>;
