function App() {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (

<Router history={history}>


<Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>

<Navbar toggle={toggle}/>
<Hero/>

<InfoSection {...homeObjOne} />
<InfoSection {...homeObjTwo} />
<News/>
<Footer/>

<Switch>
{/* <Route path="/" component={Home} exact /> */}
<Route path="/users/new" exact component={UsersNew} />
<Route path="/users/:id" component={UsersShow} exact />
<Route path="/signin" component={SigninPage} exact />
<Route path="/signup" component={UsersNew} exact />
<Route path="/search" component={SearchPage} exact />
</Switch>
</Router>



  );
}

export default App;


