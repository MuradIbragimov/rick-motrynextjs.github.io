'use client'
import { useEffect, type RefObject } from 'react'

export function useOutsideClick(
	refs: RefObject<HTMLElement | null>[],
	callback: (event: MouseEvent) => void
) {
	const handleClick = (event: MouseEvent) => {
		for (const ref of refs) {
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return
			}
		}
		callback(event)
	}

	useEffect(() => {
		document.addEventListener('click', handleClick)

		return () => document.removeEventListener('click', handleClick)
	}, [])
}
