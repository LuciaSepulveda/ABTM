import React from "react"

import UserContext, {Context} from "./context"

export function usePage(): Context["state"]["page"] {
  const {
    state: {page},
  } = React.useContext(UserContext)

  return page
}

export function useChangePage(): Context["actions"]["changePage"] {
  const {
    actions: {changePage},
  } = React.useContext(UserContext)

  return changePage
}
