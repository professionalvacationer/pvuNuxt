/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePrivateNote = /* GraphQL */ `
  subscription OnCreatePrivateNote($owner: String!) {
    onCreatePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePrivateNote = /* GraphQL */ `
  subscription OnUpdatePrivateNote($owner: String!) {
    onUpdatePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePrivateNote = /* GraphQL */ `
  subscription OnDeletePrivateNote($owner: String!) {
    onDeletePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateTrip = /* GraphQL */ `
  subscription OnCreateTrip {
    onCreateTrip {
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
export const onUpdateTrip = /* GraphQL */ `
  subscription OnUpdateTrip {
    onUpdateTrip {
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
export const onDeleteTrip = /* GraphQL */ `
  subscription OnDeleteTrip {
    onDeleteTrip {
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
export const onCreateItinerary = /* GraphQL */ `
  subscription OnCreateItinerary {
    onCreateItinerary {
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
export const onUpdateItinerary = /* GraphQL */ `
  subscription OnUpdateItinerary {
    onUpdateItinerary {
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
export const onDeleteItinerary = /* GraphQL */ `
  subscription OnDeleteItinerary {
    onDeleteItinerary {
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
