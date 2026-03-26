import { useState, useRef, useEffect, useCallback } from 'react'

type ScreenIndex = 0 | 1

interface UseScreenSwitchReturn {
  currentScreen: ScreenIndex
  goTo: (screen: ScreenIndex) => void
}

const ANIMATION_DURATION_MS = 600
const THRESHOLD_RATIO = 0.3

export function useScreenSwitch(): UseScreenSwitchReturn {
  const [currentScreen, setCurrentScreen] = useState<ScreenIndex>(0)

  const accumulatedDelta = useRef<number>(0)
  const isLocked = useRef<boolean>(false)
  const viewportHeight = useRef<number>(window.innerHeight)

  const goTo = useCallback((screen: ScreenIndex) => {
    if (isLocked.current || screen === currentScreen) return

    isLocked.current = true
    accumulatedDelta.current = 0
    setCurrentScreen(screen)

    setTimeout(() => {
      isLocked.current = false
    }, ANIMATION_DURATION_MS)
  }, [currentScreen])

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
        goTo(1)
      } else if (accumulatedDelta.current < -threshold) {
        goTo(0)
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
