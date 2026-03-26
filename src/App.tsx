import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useScreenSwitch } from './hooks/useScreenSwitch'

const SCREEN_LABELS = ['首页', '作品页', '联系页']

function App() {
  const { currentScreen, goTo } = useScreenSwitch({ totalScreens: 3 })

  return (
    <div className="h-screen overflow-hidden bg-bg-primary text-text-primary">
      <motion.div
        className="h-[300vh]"
        animate={{ y: `${-currentScreen * 100}vh` }}
        transition={{ duration: 0.55, ease: [0.45, 0, 0.15, 1] }}
      >
        {/* 第一屏：首页 */}
        <div className="h-screen overflow-hidden">
          <Hero onViewProjects={() => goTo(1)} onContact={() => goTo(2)} />
        </div>

        {/* 第二屏：作品页 */}
        <div className="h-screen overflow-y-auto">
          <Projects onBack={() => goTo(0)} />
        </div>

        {/* 第三屏：联系页 */}
        <div className="h-screen overflow-hidden">
          <Contact onBack={() => goTo(1)} />
        </div>
      </motion.div>

      {/* 屏幕指示器 */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {SCREEN_LABELS.map((label, i) => (
          <button
            key={label}
            onClick={() => goTo(i)}
            aria-label={label}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
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
