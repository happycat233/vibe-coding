import { useState, useRef, useEffect, useCallback } from 'react'

interface UseScreenSwitchOptions {
  totalScreens: number
}

interface UseScreenSwitchReturn {
  currentScreen: number
  goTo: (screen: number) => void
}

const ANIMATION_DURATION_MS = 600
const THRESHOLD_RATIO = 0.3

export function useScreenSwitch({ totalScreens }: UseScreenSwitchOptions): UseScreenSwitchReturn {
  const [currentScreen, setCurrentScreen] = useState<number>(0)

  const screenRef = useRef<number>(0)
  const accumulatedDelta = useRef<number>(0)
  const isLocked = useRef<boolean>(false)
  const viewportHeight = useRef<number>(window.innerHeight)

  const goTo = useCallback((screen: number) => {
    const clamped = Math.max(0, Math.min(totalScreens - 1, screen))
    if (isLocked.current || clamped === screenRef.current) return

    isLocked.current = true
    accumulatedDelta.current = 0
    screenRef.current = clamped
    setCurrentScreen(clamped)

    setTimeout(() => {
      isLocked.current = false
    }, ANIMATION_DURATION_MS)
  }, [totalScreens])

  useEffect(() => {
    const handleResize = () => {
      viewportHeight.current = window.innerHeight
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (isLocked.current) return

      accumulatedDelta.current += e.deltaY
      const threshold = viewportHeight.current * THRESHOLD_RATIO

      if (accumulatedDelta.current > threshold) {
        goTo(screenRef.current + 1)
      } else if (accumulatedDelta.current < -threshold) {
        goTo(screenRef.current - 1)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('resize', handleResize)
    }
  }, [goTo])

  return { currentScreen, goTo }
}
