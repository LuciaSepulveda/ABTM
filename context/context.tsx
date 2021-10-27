import React from "react"

import {Page} from "../types/types"

export interface Context {
  state: {
    page: Page
  }
  actions: {
    changePage: (page: Page) => void
  }
}

const UserContext = React.createContext({} as Context)

const UserProvider: React.FC = ({children}) => {
  const [page, setPage] = React.useState<Page>(Page.Index)
  const [update, setUpdate] = React.useState<boolean>(false)

  const handleChangePage = (page: Page) => {
    setPage(page)
    setUpdate(true)
  }

  if (update) {
    setUpdate(false)
  }

  const state: Context["state"] = {
    page,
  }

  const actions = {
    changePage: handleChangePage,
  }

  return <UserContext.Provider value={{state, actions}}>{children}</UserContext.Provider>
}

export {UserContext as default, UserProvider as Provider}
