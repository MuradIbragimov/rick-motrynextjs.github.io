'use client'
import Image from 'next/image'

import { useGetCharacterListQuery } from '@/store/api/characterApi'

import { CharacterList } from './CharacterList/CharacterList'
import { BackButton } from '@/components/index'
import CharacterPageLogo from '/public/CharacterPageLogo.png'
import style from './character.module.scss'

export const Character = () => {
	const { data } = useGetCharacterListQuery()

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
				<CharacterList data={data} />
			</div>
		</>
	)
}
