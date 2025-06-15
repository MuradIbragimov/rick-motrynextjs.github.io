export type Option = {
	label: string
	value: string
}

export type SelectProps = {
	options: Option[]
	value: string
	onChange: (value: string) => void
	name: string
	label?: string
	required?: boolean
	placeholder?: string
	isValid?: boolean
	disabled?: boolean
	captionMessage?: string
	selectProps?: React.SelectHTMLAttributes<HTMLSelectElement>
}
