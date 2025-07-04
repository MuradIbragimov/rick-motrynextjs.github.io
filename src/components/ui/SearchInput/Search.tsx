'use client'

type SearchInputProps = {
	value: string
	onChange: (value: string) => void
	placeholder?: string
}

export const SearchInput = ({
	value,
	onChange,
	placeholder,
}: SearchInputProps) => {
	return (
		<input
			type='text'
			value={value}
			onChange={e => onChange(e.target.value)}
			placeholder={placeholder || 'Поиск...'}
		/>
	)
}
