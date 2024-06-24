import { useState, useEffect } from "react"
import { motion, useSpring, useTransform } from "framer-motion"

const useCountUp = (target: number, duration: number = 1) => {
  const [count, setCount] = useState(0)
  
  const spring = useSpring(0, { duration: duration * 1000 })
  const value = useTransform(spring, [0, target], [0, target])
  
  useEffect(() => {
    spring.set(target)
    const unsubscribe = value.onChange((latest) => {
      setCount(Math.round(latest))
    })
    return () => unsubscribe()
  }, [target, duration, spring, value])

  return count
}

export default useCountUp
