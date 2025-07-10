/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateEvent = /* GraphQL */ `subscription OnCreateEvent(
  $filter: ModelSubscriptionEventFilterInput
  $owner: String
) {
  onCreateEvent(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEventSubscriptionVariables,
  APITypes.OnCreateEventSubscription
>;
export const onUpdateEvent = /* GraphQL */ `subscription OnUpdateEvent(
  $filter: ModelSubscriptionEventFilterInput
  $owner: String
) {
  onUpdateEvent(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEventSubscriptionVariables,
  APITypes.OnUpdateEventSubscription
>;
export const onDeleteEvent = /* GraphQL */ `subscription OnDeleteEvent(
  $filter: ModelSubscriptionEventFilterInput
  $owner: String
) {
  onDeleteEvent(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEventSubscriptionVariables,
  APITypes.OnDeleteEventSubscription
>;
export const onCreateRegistration = /* GraphQL */ `subscription OnCreateRegistration(
  $filter: ModelSubscriptionRegistrationFilterInput
  $owner: String
) {
  onCreateRegistration(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRegistrationSubscriptionVariables,
  APITypes.OnCreateRegistrationSubscription
>;
export const onUpdateRegistration = /* GraphQL */ `subscription OnUpdateRegistration(
  $filter: ModelSubscriptionRegistrationFilterInput
  $owner: String
) {
  onUpdateRegistration(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRegistrationSubscriptionVariables,
  APITypes.OnUpdateRegistrationSubscription
>;
export const onDeleteRegistration = /* GraphQL */ `subscription OnDeleteRegistration(
  $filter: ModelSubscriptionRegistrationFilterInput
  $owner: String
) {
  onDeleteRegistration(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRegistrationSubscriptionVariables,
  APITypes.OnDeleteRegistrationSubscription
>;
export const onCreateTicket = /* GraphQL */ `subscription OnCreateTicket(
  $filter: ModelSubscriptionTicketFilterInput
  $owner: String
) {
  onCreateTicket(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTicketSubscriptionVariables,
  APITypes.OnCreateTicketSubscription
>;
export const onUpdateTicket = /* GraphQL */ `subscription OnUpdateTicket(
  $filter: ModelSubscriptionTicketFilterInput
  $owner: String
) {
  onUpdateTicket(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTicketSubscriptionVariables,
  APITypes.OnUpdateTicketSubscription
>;
export const onDeleteTicket = /* GraphQL */ `subscription OnDeleteTicket(
  $filter: ModelSubscriptionTicketFilterInput
  $owner: String
) {
  onDeleteTicket(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTicketSubscriptionVariables,
  APITypes.OnDeleteTicketSubscription
>;
