'use client'

import { useState, useRef } from 'react'
import { clsx } from 'clsx'
import styles from './select.module.scss'
import type { SelectProps, Option } from './select.types'
import { useOutsideClick } from '@/hooks/useOutsideClick'

export const Select = ({
	options,
	value,
	onChange,
	name,
	label,
	required,
	placeholder,
	isValid = true,
	disabled,
	captionMessage,
	selectProps,
}: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const selectRef = useRef<HTMLDivElement>(null)

	useOutsideClick([selectRef], () => {
		setIsOpen(false)
	})

	const selectedOption = options.find(opt => opt.value === value)

	const handleSelect = (option: Option) => {
		onChange(option.value)
		setIsOpen(false)
	}

	return (
		<div className={styles.container} ref={selectRef}>
			{label && (
				<label htmlFor={name}>
					{label} {required && <span>*</span>}
				</label>
			)}

			<select
				id={name}
				name={name}
				value={value}
				disabled={disabled}
				className='hidden'
				{...selectProps}
				onChange={e => onChange(e.target.value)}
			>
				{options.map(opt => (
					<option key={opt.value} value={opt.value}>
						{opt.label}
					</option>
				))}
			</select>

			<div
				className={clsx(styles.select, {
					[styles.invalid]: !isValid,
					[styles.disabled]: disabled,
				})}
				onClick={() => setIsOpen(prev => !prev)}
			>
				{selectedOption?.label || placeholder || 'Выберите...'}
			</div>

			{isOpen && (
				<ul className={styles.options}>
					{options.map(opt => (
						<li
							key={opt.value}
							className={clsx(styles.option, {
								[styles.selected]: opt.value === value,
							})}
							onClick={() => handleSelect(opt)}
						>
							{opt.label}
						</li>
					))}
				</ul>
			)}

			{captionMessage && <p>{captionMessage}</p>}
		</div>
	)
}
