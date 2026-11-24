import { ArrowUpRight } from 'lucide-react'
import { Button } from './components/Button'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { ThemeToggle } from './components/ThemeToggle'
import { portfolio } from './data/portfolio'

function App() {
  return (
    <div className="min-h-svh bg-background text-foreground lg:h-svh lg:overflow-hidden">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 pt-12 md:px-10 md:pt-16 max-lg:min-h-svh max-lg:pb-8 lg:h-full lg:flex-row lg:gap-10 lg:px-16 lg:pt-[72px] xl:px-[160px]">
        <aside className="relative flex w-full shrink-0 flex-col lg:h-full lg:w-[268px] lg:pb-8">
          <div className="size-20 rounded-full bg-muted-foreground" />

          <h1 className="mt-[16px] text-heading">{portfolio.name}</h1>

          <a
            href={`mailto:${portfolio.email}`}
            className="block text-body leading-meta hover:underline"
          >
            {portfolio.email}
          </a>

          <ul className="mt-6 w-full space-y-2 text-body leading-list lg:w-[172px]">
            {portfolio.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <Button
            href={portfolio.resume.url}
            target="_blank"
            rel="noreferrer"
            className="mt-8 self-start px-4 py-2 text-body leading-none"
          >
            {portfolio.resume.label}
            <ArrowUpRight size={14} strokeWidth={1.75} />
          </Button>

          <div className="absolute top-0 right-0 flex h-20 items-center lg:static lg:h-auto lg:mt-auto">
            <ThemeToggle />
          </div>
        </aside>

        <main className="min-h-0 lg:h-full lg:flex-1 lg:overflow-y-auto lg:pb-8">
          <ExperienceTimeline items={portfolio.experience} />
        </main>

        <aside className="flex w-full shrink-0 flex-col items-end max-lg:mt-auto lg:h-full lg:w-[268px] lg:pb-8">
          <nav aria-label="Links">
            <ul className="space-y-2 text-right text-body leading-list">
              {portfolio.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  )
}

export default App
