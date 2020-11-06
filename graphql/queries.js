/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPrivateNote = /* GraphQL */ `
  query GetPrivateNote($id: ID!) {
    getPrivateNote(id: $id) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPrivateNotes = /* GraphQL */ `
  query ListPrivateNotes(
    $filter: ModelPrivateNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        firstName
        lastName
        age
        location
        bio
        interests
        createdAt
        updatedAt
        trips {
          nextToken
        }
        itineraries {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      firstName
      lastName
      age
      location
      bio
      interests
      createdAt
      updatedAt
      trips {
        items {
          id
          title
          createdAt
          budget
          duration
          overallRating
          authorId
          overview
          story
          updatedAt
        }
        nextToken
      }
      itineraries {
        items {
          id
          title
          createdAt
          authorId
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const getTrip = /* GraphQL */ `
  query GetTrip($id: ID!) {
    getTrip(id: $id) {
      id
      title
      createdAt
      budget
      duration
      overallRating
      authorId
      overview
      story
      updatedAt
      author {
        id
        email
        firstName
        lastName
        age
        location
        bio
        interests
        createdAt
        updatedAt
        trips {
          nextToken
        }
        itineraries {
          nextToken
        }
      }
    }
  }
`;
export const listTrips = /* GraphQL */ `
  query ListTrips(
    $filter: ModelTripFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrips(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        budget
        duration
        overallRating
        authorId
        overview
        story
        updatedAt
        author {
          id
          email
          firstName
          lastName
          age
          location
          bio
          interests
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getItinerary = /* GraphQL */ `
  query GetItinerary($id: ID!) {
    getItinerary(id: $id) {
      id
      title
      createdAt
      transportation {
        id
        style
        day
        length
        cost
        locationStart
        locationFinish
        note
      }
      dining {
        id
        cost
        location
        day
        type
        name
        note
      }
      accomodation {
        id
        day
        lengthOfStay
        cost
        location
        name
        type
        note
      }
      activity {
        id
        cost
        location
        day
        name
        note
      }
      authorId
      updatedAt
      author {
        id
        email
        firstName
        lastName
        age
        location
        bio
        interests
        createdAt
        updatedAt
        trips {
          nextToken
        }
        itineraries {
          nextToken
        }
      }
    }
  }
`;
export const listItinerarys = /* GraphQL */ `
  query ListItinerarys(
    $filter: ModelItineraryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItinerarys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        transportation {
          id
          style
          day
          length
          cost
          locationStart
          locationFinish
          note
        }
        dining {
          id
          cost
          location
          day
          type
          name
          note
        }
        accomodation {
          id
          day
          lengthOfStay
          cost
          location
          name
          type
          note
        }
        activity {
          id
          cost
          location
          day
          name
          note
        }
        authorId
        updatedAt
        author {
          id
          email
          firstName
          lastName
          age
          location
          bio
          interests
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
