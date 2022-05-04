import React, { useEffect, useState } from 'react'
import { FunctionComponent } from 'react'
import {
  //Route,
  //BrowserRouter as Router,
  //Switch,
  //Redirect,
  useParams
} from 'react-router-dom';
import { ThemeProvider, Navbar, Container, Row, Col, Badge, Dropdown, Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsStar, BsPeople, BsBuilding, BsGeoAlt, BsLink45Deg } from "react-icons/bs";
import '../../styles/style.css'
import Header from '../Header/index'
import Footer from '../Footer/index'

const Main: FunctionComponent = () => {

  const url = 'https://api.github.com'
  const {username} = useParams<{username: string}>()
  const [User, setUser] = useState<any>({})
  const [Repos, setRepos] = useState<Array<any>>([])
  const [filterRepos, setFilterRepos] = useState<Array<any>>([])
  const [search, setSearch] = useState<string>('')
  const mitIcon = <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-law mr-1"><path fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path></svg>;
  const [theme, setTheme] = useState<boolean>(true)

  const handleSearch = (e: any) => {  
    let reposFiltered = Repos;
    reposFiltered = reposFiltered.filter((repo) => repo.name.toLowerCase().includes(e.target.value.toLowerCase()) )
    
    setFilterRepos(reposFiltered)
    setSearch(e.target.value)
  }
  
  useEffect(() => {
    try {
      Promise.all([fetch(`${url}/users/${username}`), fetch(`${url}/users/${username}/repos`)]).then(async ([user, repos]) => {
        setUser(await user.json())
        setRepos(await repos.json())
      })
    } catch (error) {
      console.log('error ->', error)
    }
    
    
  }, [username])

  useEffect(() => {
    setFilterRepos(Repos)
  }, [Repos])
  
  return (
    //console.log('user',User),
    //console.log('repos', Repos),
    //console.log('default', filterRepos),
    <>
    <div>
      <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
       
        <Header urlAvatar={User?.avatar_url} themeDefault={theme} callback={setTheme}/>

        {Repos.length < 1? <Row className='row-spinner'><Spinner animation="grow" /></Row> : ''}
        
        <Container fluid className={theme? 'theme-dark' : 'theme-light'}>
          <Container>
            <Row>
              <Col md={4} xs={12}>
                <Row>
                  <img className='big-avatar' src={User?.avatar_url} />
                </Row>
                <p className='big-name'>{User?.name}</p>
                <h1 className='big-login'>{User?.login}</h1>
                <p>
                  <Button variant="warning">Follow</Button>
                </p>
                <p className='txt-bio'>{User?.bio}</p>
                <p><BsPeople /><span>{' '}{User?.followers} Followers {User?.following} Following</span></p>
                <ul className='txt-list'>
                  <li><BsBuilding />{' '}{User?.company}</li>
                  <li><BsGeoAlt />{' '}{User?.location}</li>
                  <li><BsLink45Deg />{' '}{User?.blog}</li>
                </ul>
              </Col>
              <Col md={8} xs={12}>
                <Row className='row-search'>
                  <input type="text" value={search} placeholder='Find a repository…' onChange={(e) => handleSearch(e)} className='search-repo'/>
                </Row>
                
                
                {filterRepos.map(r => {
                  return <>
                    <Row className='item-repo'>
                      <Col md={8} xs={10}>
                        <div key={r.id}>
                        <h3 className='card-title'>{r.name} <Badge pill bg="secondary">{r.visibility}</Badge></h3>
                        <p>{r.description}</p>
                        <p>{r?.topics.map((topic: string) => <Badge pill bg="primary">{topic}</Badge> )} </p>
                        <p className='languaje'>{r?.language? <><span className='circle'>⬤</span>{' '}{r?.language}</> : ""}{' '}{r?.license?.name? <><span className='mitIcon'>{mitIcon}</span>{' '}{r?.license?.name}</> : ''}</p>
                        </div>
                      </Col>
                      <Col md={4} xs={2}>
                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                            <BsStar />
                          </Dropdown.Toggle>
                          <Dropdown.Menu variant={theme? 'dark' : 'light'}>
                            <Dropdown.Item eventKey="1">Feature ideas</Dropdown.Item>
                            <Dropdown.Item eventKey="2">My stack</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Inspiration</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Create list</Dropdown.Item>
                          </Dropdown.Menu>
                          
                        </Dropdown>
                      </Col>
                    </Row>
                  </>
                })}
                
              </Col>
            </Row>
          </Container>
        </Container>

        <Footer themeDefault={theme} callback={setTheme}/>
      </ThemeProvider>
      </div>
    </>
  )
}

export default Main