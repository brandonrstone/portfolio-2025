import { useTransform, MotionValue } from 'framer-motion'

export function useSkillTransform(scrollYProgress: MotionValue<number>, index: number, total: number) {
  const start = index / total
  const end = (index + 1) / total

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
  const y = useTransform(scrollYProgress, [start, end], [50, 0])

  return { opacity, y }
}
