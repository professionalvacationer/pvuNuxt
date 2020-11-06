/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const createPrivateNote = /* GraphQL */ `
  mutation CreatePrivateNote(
    $input: CreatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    createPrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePrivateNote = /* GraphQL */ `
  mutation UpdatePrivateNote(
    $input: UpdatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    updatePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePrivateNote = /* GraphQL */ `
  mutation DeletePrivateNote(
    $input: DeletePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    deletePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createTrip = /* GraphQL */ `
  mutation CreateTrip(
    $input: CreateTripInput!
    $condition: ModelTripConditionInput
  ) {
    createTrip(input: $input, condition: $condition) {
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
export const updateTrip = /* GraphQL */ `
  mutation UpdateTrip(
    $input: UpdateTripInput!
    $condition: ModelTripConditionInput
  ) {
    updateTrip(input: $input, condition: $condition) {
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
export const deleteTrip = /* GraphQL */ `
  mutation DeleteTrip(
    $input: DeleteTripInput!
    $condition: ModelTripConditionInput
  ) {
    deleteTrip(input: $input, condition: $condition) {
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
export const createItinerary = /* GraphQL */ `
  mutation CreateItinerary(
    $input: CreateItineraryInput!
    $condition: ModelItineraryConditionInput
  ) {
    createItinerary(input: $input, condition: $condition) {
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
export const updateItinerary = /* GraphQL */ `
  mutation UpdateItinerary(
    $input: UpdateItineraryInput!
    $condition: ModelItineraryConditionInput
  ) {
    updateItinerary(input: $input, condition: $condition) {
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
export const deleteItinerary = /* GraphQL */ `
  mutation DeleteItinerary(
    $input: DeleteItineraryInput!
    $condition: ModelItineraryConditionInput
  ) {
    deleteItinerary(input: $input, condition: $condition) {
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
