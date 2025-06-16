import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { characterApi } from './api/characterApi'

import type { Action, ThunkAction } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
	[characterApi.reducerPath]: characterApi.reducer,
})

export const makeStore = (preloadedState?: Partial<RootState>) => {
	const store = configureStore({
		reducer: rootReducer,
		preloadedState,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(characterApi.middleware),
	})
	return store
}

export const store = makeStore()

export type AppStore = typeof store
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ThunkReturnType = void> = ThunkAction<
	ThunkReturnType,
	RootState,
	unknown,
	Action
>
