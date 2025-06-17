import { useState } from 'react'
import Image from 'next/image'

import style from './characterCard.module.scss'
import { Character } from './character.types'

const fallbackImage = '/fallback.png'

export const CharacterCard: React.FC<{ item: Character }> = ({ item }) => {
	const [imgSrc, setImgSrc] = useState(item.image)

	return (
		<li className={style.card}>
			<Image
				src={imgSrc}
				alt={item.name}
				width={240}
				height={168}
				onError={() => setImgSrc(fallbackImage)}
			/>
			<div className={style.cardTitle}>
				<h3>{item.name}</h3>
				<p>{item.species}</p>
			</div>
		</li>
	)
}
