export type CharacterStatus = 'Alive' | 'Dead' | 'unknown'
export type CharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown'

export interface GetCharacterResponseData {
	id: number
	name: string
	status: CharacterStatus
	species: string
	type: string
	gender: CharacterGender
	origin: {
		name: string
		url: string
	}
	location: {
		name: string
		url: string
	}
	image: string
	episode: string[]
	url: string
	created: string
}

export interface GetCharactersListResponse {
	info: {
		count: number
		pages: number
		next: string | null
		prev: string | null
	}
	results: GetCharacterResponseData[]
}
