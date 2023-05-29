import * as React from 'react'
import { motion } from 'framer-motion'
export default function Boop({
	x = 0,
	y = 0,
	timing = 150,
	rotation = 0,
	scale = 1,
	children
}) {

	const [isBooped, setIsBooped] = React.useState(false)

	React.useEffect(() => {
		if (!isBooped) {
			return
		}
		const timeoutId = setTimeout(() => setIsBooped(false), timing)

		return () => clearTimeout(timeoutId)
	}, [isBooped, timing])

	const trigger = () => {
		setIsBooped(true)
	}

	return (
		<motion.span
			onMouseEnter={trigger}
			className='inline-block'
			animate={{rotate: isBooped ? rotation : 0, scale: isBooped ? scale : 1, translateX: isBooped ? x : 0, translateY: isBooped ? y : 0}}
			transition={{ type: 'spring', stiffness: 300}}

			>
			{children}
		</motion.span>
	)

}
