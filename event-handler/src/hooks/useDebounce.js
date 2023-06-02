import React, { useEffect } from "react";
import debounce from '../utils/debounce'

export default function useDebounce(callback) {
  const callbackRef = React.useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const debouncedCallback = React.useMemo(() => {
    const func = () => callbackRef.current?.()
    return debounce(func, 500)
  }, [])

  return debouncedCallback
}
