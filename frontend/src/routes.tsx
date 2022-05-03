import React, { useEffect, useState } from 'react'
import { FunctionComponent } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  useParams
} from 'react-router-dom'

export const Main: FunctionComponent = () => {
  const {username} = useParams<{username: string}>()
  const [User, setUser] = useState<any>({})
  const [Repos, setRepos] = useState<Array<any>>([])
  useEffect(() => {
    Promise.all([fetch(`/api/v1/users?username=${username}`), fetch(`/api/v1/users/${username}/repositories`)]).then(async ([user, repos]) => {
      setUser(await user.json())
      setRepos(await repos.json())
    })
  }, [username])
  return (
    <>
    <h1>{User.login}</h1>
    {Repos.map(r => <h2>{r.name}</h2>)}
    </>
  )
}

export const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path='/:username' component={Main} />
      <Route path='*'>
        <Redirect to='/yknx4' />
      </Route>
    </Switch>
  </Router>
)
