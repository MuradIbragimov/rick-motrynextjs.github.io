import type { PaginationProps } from './pagination.types'
import style from './pagination.module.scss'

export const Pagination = ({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) => {
	return (
		<div className={style.container}>
			<button
				className={style.buttonPage}
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				Назад
			</button>
			<span>
				{currentPage} / {totalPages}
			</span>
			<button
				className={style.buttonPage}
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				Вперед
			</button>
		</div>
	)
}
