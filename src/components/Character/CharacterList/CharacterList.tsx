import style from './character.module.scss'
import { CharacterListProps } from './character.types'
import { CharacterCard } from './CharacterCard/CharacterCard'

export const CharacterList: React.FC<CharacterListProps> = ({ data }) => {
	return (
		<div className={style.content}>
			<ul className={style.cardCharacter}>
				{data?.results.map(item => (
					<CharacterCard key={item.id} item={item} />
				))}
			</ul>
		</div>
	)
}
