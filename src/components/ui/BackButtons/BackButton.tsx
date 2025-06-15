'use client'

import { useRouter } from 'next/navigation'

import Image from 'next/image'

import style from './button.module.scss'
import backButton from '/public/go_back.png'
type BackButtonProps = {
	label?: string
}

export const BackButton = ({ label = 'GO BACK' }: BackButtonProps) => {
	const router = useRouter()

	return (
		<div className={style.backButton}>
			<Image src={backButton} alt='Back' width={24} height={24} />
			<button className={style.button} onClick={() => router.back()}>
				{label}
			</button>
		</div>
	)
}
