import { motion } from 'framer-motion'

interface ContactProps {
  onBack: () => void
}

const contactInfo = [
  {
    label: '电话',
    value: '+86 138-0000-0000',
    href: 'tel:+8613800000000',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/your-username',
    href: 'https://github.com/your-username',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: '邮箱',
    value: 'hello@example.com',
    href: 'mailto:hello@example.com',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.3 + i * 0.1, ease: 'easeOut' },
  }),
}

const Contact = ({ onBack }: ContactProps) => {
  return (
    <section className="relative h-full flex items-center justify-center overflow-hidden px-6">
      {/* 背景渐变光晕 */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-accent-end/15 to-accent-start/15 blur-[120px] translate-y-1/3" />
      </div>

      {/* 返回按钮 */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        onClick={onBack}
        className="absolute top-8 left-8 inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors cursor-pointer z-10"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        返回
      </motion.button>

      <div className="relative z-10 max-w-md w-full mx-auto text-center">
        {/* 头像 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-accent-start to-accent-end opacity-50 blur-md" />
            <img
              src="https://placehold.co/120x120/1a1a2e/ffffff?text=Me"
              alt="头像"
              className="relative w-28 h-28 rounded-full object-cover border-2 border-border"
            />
          </div>
        </motion.div>

        {/* 标题 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-bold mb-3"
        >
          联系
          <span className="bg-gradient-to-r from-accent-start to-accent-end bg-clip-text text-transparent">
            我
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="text-text-secondary mb-10"
        >
          期待与你交流，随时欢迎联系。
        </motion.p>

        {/* 联系方式卡片列表 */}
        <div className="flex flex-col gap-4">
          {contactInfo.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="group flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-border
                         hover:border-accent-start/40 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-start/10 flex items-center justify-center text-accent-end group-hover:bg-accent-start/20 transition-colors">
                {item.icon}
              </div>
              <div className="text-left">
                <div className="text-xs text-text-secondary mb-0.5">{item.label}</div>
                <div className="text-sm font-medium text-text-primary">{item.value}</div>
              </div>
              <svg className="w-4 h-4 ml-auto text-text-secondary/40 group-hover:text-text-secondary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
