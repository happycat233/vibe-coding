import { motion } from 'framer-motion'

interface HeroProps {
  onViewProjects: () => void
}

const Hero = ({ onViewProjects }: HeroProps) => {
  return (
    <section className="relative h-full flex items-center justify-center overflow-hidden px-6">
      {/* 背景渐变光晕 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-accent-start/20 to-accent-end/20 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* 头像 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-accent-start to-accent-end opacity-70 blur-sm" />
            <img
              src="https://placehold.co/160x160/1a1a2e/ffffff?text=Avatar"
              alt="头像"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-border"
            />
          </div>
        </motion.div>

        {/* 大标题 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          你好，我是
          <span className="bg-gradient-to-r from-accent-start to-accent-end bg-clip-text text-transparent">
            {' '}开发者
          </span>
        </motion.h1>

        {/* 简介 */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          一名热爱技术的全栈开发者，专注于构建优雅、高性能的 Web 应用。
          喜欢用代码将创意变为现实。
        </motion.p>

        {/* CTA 按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onViewProjects}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-accent-start to-accent-end text-white font-medium hover:opacity-90 transition-opacity cursor-pointer"
          >
            查看作品
          </button>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-border text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors"
          >
            联系我
          </a>
        </motion.div>
      </div>

      {/* 底部滚动提示 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={onViewProjects}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-text-secondary/40 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-text-secondary/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
