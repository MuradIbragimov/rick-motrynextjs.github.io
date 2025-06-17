'use client'
import { useState } from 'react'
import Image from 'next/image'

import { useGetCharacterListQuery } from '@/store/api/characterApi'

import { CharacterList } from './CharacterList/CharacterList'
import { CharacterFilter } from './CharacterFilter/CharacterFilter'
import { Pagination } from '../pagination/Pagination'
import { BackButton } from '@/components/index'
import CharacterPageLogo from '/public/CharacterPageLogo.png'
import style from './character.module.scss'

export const Character = () => {
	const [page, setPage] = useState(1)
	const { data } = useGetCharacterListQuery(page)
	return (
		<>
			<BackButton />
			<div className={style.content}>
				<Image
					src={CharacterPageLogo}
					alt='Рик и морти'
					width={600}
					height={200}
				></Image>
				<CharacterFilter />
				<CharacterList data={data} />
				<Pagination
					currentPage={page}
					totalPages={data?.info.pages || 1}
					onPageChange={newPage => setPage(newPage)}
				/>
			</div>
		</>
	)
}
