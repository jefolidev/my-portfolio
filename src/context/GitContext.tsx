import { createContext, useEffect, useState } from 'react'

interface GitProviderTypes {
  children: React.ReactNode
}

export interface RepositoriesType {
  id: string
  name: string
  html_url: string
  description: string
}
export interface GitContextTypes {
  repos: RepositoriesType[]
}

export const GitContext = createContext<GitContextTypes | undefined>(undefined)

export const GitProvider = ({ children }: GitProviderTypes) => {
  const [repos, setRepos] = useState<RepositoriesType[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/jefolidev/repos')
      .then((res) => res.json())
      .then((data: RepositoriesType[]) => setRepos(data))
      .catch((err) => console.log(err))
  }, [])

  return <GitContext.Provider value={{ repos }}>{children}</GitContext.Provider>
}
