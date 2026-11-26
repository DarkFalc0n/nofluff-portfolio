import { NavLink } from 'react-router'

const sections = [
  { label: 'About', to: '/' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blogs', to: '/blogs' },
] as const

/**
 * The center column's section tabs. The active tab uses the foreground color;
 * inactive tabs are the same color at 50% opacity.
 */
export function SectionNav() {
  return (
    <nav aria-label="Sections" className="mb-[32px] flex flex-wrap gap-x-8 gap-y-2">
      {sections.map(({ label, to }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) =>
            [
              'font-body text-[12px] leading-[17px] font-thin uppercase tracking-[6px] text-foreground',
              isActive ? 'opacity-100' : 'opacity-50',
            ].join(' ')
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
