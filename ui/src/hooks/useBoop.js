import React from 'react'
import { useSpring } from 'react-spring'


export default function useBoop({
	x = 0,
	y = 0,
	rotation = 0,
	scale = 1,
	timing = 150,
	springConfig = {
		tension: 300,
		friction: 10,
	}
}) {
	const [isBooped, setIsBooped] = React.useState(false)

	 const style = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    config: springConfig,
  });
	
	React.useEffect(() => {
		if (!isBooped) {
			return
		}
		const timeoutId = setTimeout(() => setIsBooped(false), timing)

		return () => clearTimeout(timeoutId)
	}, [timing, isBooped])

	const trigger = React.useCallback(() => {
		setIsBooped(true)
	}, [])

	return [style, trigger]
}





