import { Navigate, type RouteObject } from 'react-router'
import { App } from './App'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { portfolio } from './data/portfolio'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      // About: intentionally empty for now.
      { index: true },
      { path: 'experience', element: <ExperienceTimeline items={portfolio.experience} /> },
      // Projects and Blogs: intentionally empty for now.
      { path: 'projects' },
      { path: 'blogs' },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]
