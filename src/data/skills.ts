export interface Skill {
  name: string
}

export interface SkillCategory {
  category: string
  items: Skill[]
}

export const skills: SkillCategory[] = [
  {
    category: '前端',
    items: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Next.js' },
    ],
  },
  {
    category: '后端',
    items: [
      { name: 'Node.js' },
      { name: 'Python' },
      { name: 'PostgreSQL' },
    ],
  },
  {
    category: '工具',
    items: [
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'VS Code' },
    ],
  },
]
