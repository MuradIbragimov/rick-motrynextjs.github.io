'use client'

import { useState } from 'react'
import { SearchInput, Select } from '@/components'
import {
	speciesOptions,
	genderOptions,
	statusOptions,
} from './characterFilterData'

export const CharacterFilter = () => {
	const [searchValue, setSearchValue] = useState('')
	const [selectedSpecies, setSelectedSpecies] = useState('')
	const [selectedGener, setSelectedGender] = useState('')
	const [selectedStatus, setSelectedStatus] = useState('')

	return (
		<div>
			<h2>Фильтр персонажей</h2>

			<SearchInput
				value={searchValue}
				onChange={setSearchValue}
				placeholder='Поиск по имени'
			/>

			<Select
				options={speciesOptions}
				value={selectedSpecies}
				onChange={setSelectedSpecies}
				name='species'
				label='Вид'
				placeholder='Выберите вид'
			/>
			<Select
				options={genderOptions}
				value={selectedGener}
				onChange={setSelectedGender}
				name='species'
				label='Вид'
				placeholder='Выберите вид'
			/>
			<Select
				options={statusOptions}
				value={selectedStatus}
				onChange={setSelectedStatus}
				name='species'
				label='Вид'
				placeholder='Выберите вид'
			/>
		</div>
	)
}
