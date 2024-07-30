import { useContext } from 'react'
import { GitContext, GitContextTypes } from './GitContext'

export const useGit = (): GitContextTypes => {
  const context = useContext(GitContext)
  if (context === undefined) {
    throw new Error('useGit must be used within a GitProvider')
  }
  return context
}
