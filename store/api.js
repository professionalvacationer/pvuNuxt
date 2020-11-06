import { Amplify, API } from 'aws-amplify'
import * as gqlQueries from '~/graphql/queries'
import * as gqlMutations from '~/graphql/mutations'
import awsconfig from '~/aws-exports'

Amplify.configure({ ...awsconfig, ssr: true })

export const state = {
  trips: [],
  trip: null,
  itineraries: [],
  itinerary: null,
}

export const getters = {
  authMode: (state, getters, rootState) =>
    rootState.auth.isAuthenticated ? 'AMAZON_COGNITO_USER_POOLS' : 'API_KEY',
}

export const mutations = {
  set(state, { key, value }) {
    state[key] = value
  },
}

export const actions = {
  async listTrips({ dispatch }) {
    return await dispatch('query', { key: 'trips', query: 'listTrips' })
  },

  async getTrip({ dispatch }, id) {
    return await dispatch('get', { key: 'trip', query: 'getTrip', id })
  },
  async createTrip({ dispatch }, input) {
    return await dispatch('mutate', {
      key: 'trip',
      mutation: 'createTrip',
      input,
    })
  },
  async updateTrip({ dispatch }, input) {
    return await dispatch('mutate', {
      key: 'trip',
      mutation: 'updateTrip',
      input,
    })
  },
  async deleteTrip({ dispatch }, id) {
    return await dispatch('mutate', { mutation: 'deleteTrip', input: { id } })
  },

  async listItineraries({ dispatch }) {
    return await dispatch('query', {
      key: 'itineraries',
      query: 'listItineraries',
    })
  },

  async getItinerary({ dispatch }, id) {
    return await dispatch('get', {
      key: 'itineraries',
      query: 'getItinerary',
      id,
    })
  },

  async createItinerary({ dispatch }, input) {
    return await dispatch('mutate', {
      key: 'itineraries',
      mutation: 'createItinerary',
      input,
    })
  },

  async updateItinerary({ dispatch }, input) {
    return await dispatch('mutate', {
      key: 'itineraries',
      mutation: 'updateItinerary',
      input,
    })
  },

  async deleteItinerary({ dispatch }, id) {
    return await dispatch('mutate', { mutation: 'deleteTrip', input: { id } })
  },

  async get({ commit, getters }, { key, query, id }) {
    const { data } = await API.graphql({
      query: gqlQueries[query],
      variables: { id },
      authMode: getters.authMode,
    })
    const value = data[query]
    if (key) commit('set', { key, value })
    return value
  },

  async query({ commit, getters }, { key, query, filter }) {
    const { data } = await API.graphql({
      query: gqlQueries[query],
      variables: { filter },
      authMode: getters.authMode,
    })
    const value = data[query].items
    if (key) commit('set', { key, value })
    return value
  },

  async mutate({ commit, getters }, { key, mutation, input }) {
    const { data } = await API.graphql({
      query: gqlMutations[mutation],
      variables: { input },
      authMode: getters.authMode,
    })
    const value = data[mutation]
    if (key) commit('set', { key, value })
    return value
  },
}
