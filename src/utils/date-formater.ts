export const dateFormater = () => {
	const formater = new Intl.DateTimeFormat('ru', {
		year: 'numeric',
		day: 'numeric',
		month: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	});

	return (date: string) => formater.format(Date.parse(date))
}
