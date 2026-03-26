export interface Project {
  id: number
  title: string
  description: string
  image: string
  techStack: string[]
  link: string
  github?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: '示例项目一',
    description: '这是一个示例项目的简短描述，展示了项目的核心功能和亮点。',
    image: 'https://placehold.co/600x400/1a1a2e/ffffff?text=Project+1',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 2,
    title: '示例项目二',
    description: '另一个示例项目，使用了不同的技术栈来实现特定的业务需求。',
    image: 'https://placehold.co/600x400/1a1a2e/ffffff?text=Project+2',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL'],
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 3,
    title: '示例项目三',
    description: '第三个示例项目，重点展示了前端动画和交互设计的能力。',
    image: 'https://placehold.co/600x400/1a1a2e/ffffff?text=Project+3',
    techStack: ['Vue.js', 'Framer Motion', 'Firebase'],
    link: 'https://example.com',
  },
]
