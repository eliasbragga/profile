interface TechIconProps {
  name: string
  icon: React.ReactNode
}

export function TechIcon({ name, icon }: TechIconProps) {
  return (
    <div className="group flex flex-col items-center gap-2 p-4 rounded-lg bg-card-gradient border border-border/50 transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 hover:scale-105">
      <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
        {name}
      </span>
    </div>
  )
}

export const TechIcons = {
  Vue: () => <span className="text-[#4FC08D]">🌿</span>,
  React: () => <span className="text-[#61DAFB]">⚛️</span>,
  Angular: () => <span className="text-[#DD0031]">🅰️</span>,
  TypeScript: () => <span className="text-[#3178C6]">📘</span>,
  JavaScript: () => <span className="text-[#F7DF1E]">📜</span>,
  NodeJS: () => <span className="text-[#339933]">⚡</span>,
  Tailwind: () => <span className="text-[#06B6D4]">🎨</span>,
  Git: () => <span className="text-[#F05032]">📚</span>,
  Java: () => <span className="text-[#ED8B00]">☕</span>,
  Spring: () => <span className="text-[#6DB33F]">🍃</span>,
  PostgreSQL: () => <span className="text-[#336791]">🐘</span>,
  AI: () => <span className="text-[#FF6B6B]">🤖</span>,
}