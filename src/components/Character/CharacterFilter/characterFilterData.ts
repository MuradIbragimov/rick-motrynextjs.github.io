import { Option } from '@/components/ui/Select/select.types'

export const speciesOptions: Option[] = [
	{ value: '', label: 'Все' },
	{ value: 'Human', label: 'Человек' },
	{ value: 'Alien', label: 'Инопланетянин' },
	{ value: 'Robot', label: 'Робот' },
] as const

export const genderOptions: Option[] = [
	{ value: '', label: 'Все' },
	{ value: 'Male', label: 'Мужской' },
	{ value: 'Female', label: 'Женский' },
	{ value: 'Genderless', label: 'Без пола' },
	{ value: 'unknown', label: 'Неизвестно' },
] as const

export const statusOptions: Option[] = [
	{ value: '', label: 'Все' },
	{ value: 'Alive', label: 'Жив' },
	{ value: 'Dead', label: 'Мертв' },
	{ value: 'unknown', label: 'Неизвестно' },
] as const
