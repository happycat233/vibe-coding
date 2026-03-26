import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Projects from './components/Projects'
import { useScreenSwitch } from './hooks/useScreenSwitch'

function App() {
  const { currentScreen, goTo } = useScreenSwitch()

  return (
    <div className="h-screen overflow-hidden bg-bg-primary text-text-primary">
      <motion.div
        className="h-[200vh]"
        animate={{ y: currentScreen === 0 ? '0vh' : '-100vh' }}
        transition={{ duration: 0.55, ease: [0.45, 0, 0.15, 1] }}
      >
        {/* 第一屏：首页 */}
        <div className="h-screen overflow-hidden">
          <Hero onViewProjects={() => goTo(1)} />
        </div>

        {/* 第二屏：作品页 */}
        <div className="h-screen overflow-y-auto">
          <Projects onBack={() => goTo(0)} />
        </div>
      </motion.div>

      {/* 屏幕指示器 */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {[0, 1].map((i) => (
          <button
            key={i}
            onClick={() => goTo(i as 0 | 1)}
            aria-label={i === 0 ? '首页' : '作品页'}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentScreen === i
                ? 'bg-gradient-to-b from-accent-start to-accent-end scale-125'
                : 'bg-text-secondary/30 hover:bg-text-secondary/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default App
