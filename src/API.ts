/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEventInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  date: string,
  location?: string | null,
  organizerId: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelEventConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  date?: ModelStringInput | null,
  location?: ModelStringInput | null,
  organizerId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Event = {
  __typename: "Event",
  id: string,
  title: string,
  description?: string | null,
  date: string,
  location?: string | null,
  organizerId: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type UpdateEventInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  date?: string | null,
  location?: string | null,
  organizerId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteEventInput = {
  id: string,
};

export type CreateRegistrationInput = {
  id?: string | null,
  eventId: string,
  userId: string,
  timestamp: string,
  ticketId?: string | null,
  status?: string | null,
};

export type ModelRegistrationConditionInput = {
  eventId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  timestamp?: ModelStringInput | null,
  ticketId?: ModelIDInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelRegistrationConditionInput | null > | null,
  or?: Array< ModelRegistrationConditionInput | null > | null,
  not?: ModelRegistrationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type Registration = {
  __typename: "Registration",
  id: string,
  eventId: string,
  userId: string,
  timestamp: string,
  ticketId?: string | null,
  status?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateRegistrationInput = {
  id: string,
  eventId?: string | null,
  userId?: string | null,
  timestamp?: string | null,
  ticketId?: string | null,
  status?: string | null,
};

export type DeleteRegistrationInput = {
  id: string,
};

export type CreateTicketInput = {
  id?: string | null,
  registrationId: string,
  qrCode: string,
  s3Link: string,
  status: string,
};

export type ModelTicketConditionInput = {
  registrationId?: ModelIDInput | null,
  qrCode?: ModelStringInput | null,
  s3Link?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelTicketConditionInput | null > | null,
  or?: Array< ModelTicketConditionInput | null > | null,
  not?: ModelTicketConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type Ticket = {
  __typename: "Ticket",
  id: string,
  registrationId: string,
  qrCode: string,
  s3Link: string,
  status: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateTicketInput = {
  id: string,
  registrationId?: string | null,
  qrCode?: string | null,
  s3Link?: string | null,
  status?: string | null,
};

export type DeleteTicketInput = {
  id: string,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  date?: ModelStringInput | null,
  location?: ModelStringInput | null,
  organizerId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
};

export type ModelRegistrationFilterInput = {
  id?: ModelIDInput | null,
  eventId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  timestamp?: ModelStringInput | null,
  ticketId?: ModelIDInput | null,
  status?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRegistrationFilterInput | null > | null,
  or?: Array< ModelRegistrationFilterInput | null > | null,
  not?: ModelRegistrationFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelRegistrationConnection = {
  __typename: "ModelRegistrationConnection",
  items:  Array<Registration | null >,
  nextToken?: string | null,
};

export type ModelTicketFilterInput = {
  id?: ModelIDInput | null,
  registrationId?: ModelIDInput | null,
  qrCode?: ModelStringInput | null,
  s3Link?: ModelStringInput | null,
  status?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTicketFilterInput | null > | null,
  or?: Array< ModelTicketFilterInput | null > | null,
  not?: ModelTicketFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelTicketConnection = {
  __typename: "ModelTicketConnection",
  items:  Array<Ticket | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionEventFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  organizerId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEventFilterInput | null > | null,
  or?: Array< ModelSubscriptionEventFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionRegistrationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  eventId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  ticketId?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRegistrationFilterInput | null > | null,
  or?: Array< ModelSubscriptionRegistrationFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionTicketFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  registrationId?: ModelSubscriptionIDInput | null,
  qrCode?: ModelSubscriptionStringInput | null,
  s3Link?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTicketFilterInput | null > | null,
  or?: Array< ModelSubscriptionTicketFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    description?: string | null,
    date: string,
    location?: string | null,
    organizerId: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    description?: string | null,
    date: string,
    location?: string | null,
    organizerId: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    description?: string | null,
    date: string,
    location?: string | null,
    organizerId: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateRegistrationMutationVariables = {
  input: CreateRegistrationInput,
  condition?: ModelRegistrationConditionInput | null,
};

export type CreateRegistrationMutation = {
  createRegistration?:  {
    __typename: "Registration",
    id: string,
    eventId: string,
    userId: string,
    timestamp: string,
    ticketId?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateRegistrationMutationVariables = {
  input: UpdateRegistrationInput,
  condition?: ModelRegistrationConditionInput | null,
};

export type UpdateRegistrationMutation = {
  updateRegistration?:  {
    __typename: "Registration",
    id: string,
    eventId: string,
    userId: string,
    timestamp: string,
    ticketId?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteRegistrationMutationVariables = {
  input: DeleteRegistrationInput,
  condition?: ModelRegistrationConditionInput | null,
};

export type DeleteRegistrationMutation = {
  deleteRegistration?:  {
    __typename: "Registration",
    id: string,
    eventId: string,
    userId: string,
    timestamp: string,
    ticketId?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateTicketMutationVariables = {
  input: CreateTicketInput,
  condition?: ModelTicketConditionInput | null,
};

export type CreateTicketMutation = {
  createTicket?:  {
    __typename: "Ticket",
    id: string,
    registrationId: string,
    qrCode: string,
    s3Link: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateTicketMutationVariables = {
  input: UpdateTicketInput,
  condition?: ModelTicketConditionInput | null,
};

export type UpdateTicketMutation = {
  updateTicket?:  {
    __typename: "Ticket",
    id: string,
    registrationId: string,
    qrCode: string,
    s3Link: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteTicketMutationVariables = {
  input: DeleteTicketInput,
  condition?: ModelTicketConditionInput | null,
};

export type DeleteTicketMutation = {
  deleteTicket?:  {
    __typename: "Ticket",
    id: string,
    registrationId: string,
    qrCode: string,
    s3Link: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    description?: string | null,
    date: string,
    location?: string | null,
    organizerId: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      title: string,
      description?: string | null,
      date: string,
      location?: string | null,
      organizerId: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRegistrationQueryVariables = {
  id: string,
};

export type GetRegistrationQuery = {
  getRegistration?:  {
    __typename: "Registration",
    id: string,
    eventId: string,
    userId: string,
    timestamp: string,
    ticketId?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListRegistrationsQueryVariables = {
  filter?: ModelRegistrationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRegistrationsQuery = {
  listRegistrations?:  {
    __typename: "ModelRegistrationConnection",
    items:  Array< {
      __typename: "Registration",
      id: string,
      eventId: string,
      userId: string,
      timestamp: string,
      ticketId?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTicketQueryVariables = {
  id: string,
};

export type GetTicketQuery = {
  getTicket?:  {
    __typename: "Ticket",
    id: string,
    registrationId: string,
    qrCode: string,
    s3Link: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListTicketsQueryVariables = {
  filter?: ModelTicketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTicketsQuery = {
  listTickets?:  {
    __typename: "ModelTicketConnection",
    items:  Array< {
      __typename: "Ticket",
      id: string,
      registrationId: string,
      qrCode: string,
      s3Link: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
  owner?: string | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    description?: string | null,
    date: string,
    location?: string | null,
    organizerId: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
  owner?: string | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    description?: string | null,
    date: string,
    location?: string | null,
    organizerId: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
  owner?: string | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    description?: string | null,
    date: string,
    location?: string | null,
    organizerId: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateRegistrationSubscriptionVariables = {
  filter?: ModelSubscriptionRegistrationFilterInput | null,
  owner?: string | null,
};

export type OnCreateRegistrationSubscription = {
  onCreateRegistration?:  {
    __typename: "Registration",
    id: string,
    eventId: string,
    userId: string,
    timestamp: string,
    ticketId?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateRegistrationSubscriptionVariables = {
  filter?: ModelSubscriptionRegistrationFilterInput | null,
  owner?: string | null,
};

export type OnUpdateRegistrationSubscription = {
  onUpdateRegistration?:  {
    __typename: "Registration",
    id: string,
    eventId: string,
    userId: string,
    timestamp: string,
    ticketId?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteRegistrationSubscriptionVariables = {
  filter?: ModelSubscriptionRegistrationFilterInput | null,
  owner?: string | null,
};

export type OnDeleteRegistrationSubscription = {
  onDeleteRegistration?:  {
    __typename: "Registration",
    id: string,
    eventId: string,
    userId: string,
    timestamp: string,
    ticketId?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateTicketSubscriptionVariables = {
  filter?: ModelSubscriptionTicketFilterInput | null,
  owner?: string | null,
};

export type OnCreateTicketSubscription = {
  onCreateTicket?:  {
    __typename: "Ticket",
    id: string,
    registrationId: string,
    qrCode: string,
    s3Link: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateTicketSubscriptionVariables = {
  filter?: ModelSubscriptionTicketFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTicketSubscription = {
  onUpdateTicket?:  {
    __typename: "Ticket",
    id: string,
    registrationId: string,
    qrCode: string,
    s3Link: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteTicketSubscriptionVariables = {
  filter?: ModelSubscriptionTicketFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTicketSubscription = {
  onDeleteTicket?:  {
    __typename: "Ticket",
    id: string,
    registrationId: string,
    qrCode: string,
    s3Link: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
