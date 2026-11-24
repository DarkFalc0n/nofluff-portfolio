import { z } from 'zod'
import raw from './portfolio.json'
import { portfolioSchema, type Portfolio } from './schema'

const result = portfolioSchema.safeParse(raw)

if (!result.success) {
  throw new Error(
    [
      'Invalid data in src/data/portfolio.json:',
      '',
      z.prettifyError(result.error),
      '',
      'Fix the JSON above and rebuild.',
    ].join('\n'),
  )
}

export const portfolio: Portfolio = result.data
