import { ENDPOINTS } from '@/utils/constants'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { GetCharactersListResponse } from './characterApi.types'

const { BASE_URL_SEGMENT } = ENDPOINTS
const { GET_CHARACTER_LIST } = ENDPOINTS.CHARACTER_SERVICE

export const characterApi = createApi({
	reducerPath: 'characterApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL_SEGMENT }),
	tagTypes: ['Characters'],
	endpoints: builder => ({
		getCharacterList: builder.query<GetCharactersListResponse, number>({
			query: (page = 1) => ({
				url: `${GET_CHARACTER_LIST}?page=${page}`,
				method: 'GET',
			}),
		}),
	}),
})

export const { useGetCharacterListQuery } = characterApi
