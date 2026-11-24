import type { Experience } from '../data/schema'

type ExperienceTimelineProps = {
  items: Experience[]
  title?: string
}

/**
 * Two-column timeline: company/role on the left, location/dates on the right,
 * joined by a rail of dots and a connector line. Experience highlights are
 * intentionally not rendered here.
 */
export function ExperienceTimeline({
  items,
  title = 'Experience',
}: ExperienceTimelineProps) {
  if (items.length === 0) return null

  return (
    <section aria-labelledby="experience-title" className="w-full max-w-[542px]">
      <h2
        id="experience-title"
        className="font-body text-[12px] leading-[17px] font-thin tracking-[6px] uppercase"
      >
        {title}
      </h2>

      <ol className="mt-[18px]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li
              key={`${item.company}-${item.start}`}
              className="relative pb-6 pl-6 last:pb-0"
            >
              <span
                aria-hidden="true"
                className="absolute top-[21px] left-0 size-2 bg-muted-foreground"
              />
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="absolute top-[24px] -bottom-6 left-1 w-px bg-muted-foreground"
                />
              )}

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] lg:gap-x-6">
                <h3 className="col-start-1 row-start-1 text-[20px] leading-[21px] tracking-normal text-muted-foreground">
                  {item.company}
                </h3>
                {item.location ? (
                  <p className="col-start-1 row-start-3 mt-1 text-[12px] leading-[17px] text-muted-foreground lg:col-start-2 lg:row-start-1 lg:mt-0 lg:text-right">
                    {item.location}
                  </p>
                ) : null}
                <p className="col-start-1 row-start-2 text-[12px] leading-[17px]">
                  {item.role}
                </p>
                <p className="col-start-1 row-start-4 text-[12px] leading-[17px] italic lg:col-start-2 lg:row-start-2 lg:text-right">
                  {item.start} - {item.end}
                </p>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
