import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//import { isMessage } from './schemaValidators'

export interface Message {
  id: number
  userName: string
  text: string
}

export const webSocketApi = createApi({
  reducerPath: 'webSocketApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (build) => ({
    getMessages: build.query<Message[], void>({
      query: () => `ws/test`,
      async onCacheEntryAdded(arg, { cacheDataLoaded, cacheEntryRemoved }) {
        // create a websocket connection when the cache subscription starts
        //const ws = new WebSocket('ws://localhost:1880/ws/test')

        try {
          await cacheDataLoaded
          console.log('hrer')
          // when data is received from the socket connection to the server,
          // if it is a message and for the appropriate channel,
          // update our query result with the received message

          // ws.addEventListener('message', listener)
        } catch {
          // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
          // in which case `cacheDataLoaded` will throw
        }
        // cacheEntryRemoved will resolve when the cache subscription is no longer active
        await cacheEntryRemoved
        // perform cleanup steps once the `cacheEntryRemoved` promise resolves
        // ws.close()
      },
    }),
  }),
})

export const { useGetMessagesQuery } = webSocketApi
