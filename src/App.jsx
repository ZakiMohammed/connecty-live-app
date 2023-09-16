import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { useState } from 'react'
import { data } from './data'

function App() {

  const [users, setUsers] = useState(data);

  const remove = (id) => {
    const newUsers = users.filter(i => i.id !== id)
    setUsers(newUsers);
  }

  return (
    <>
      <Header />
      
      <div className='container my-5'>

        {users.map(user => (<Contact user={user} key={user.id} remove={remove} />))}

      </div>

      <Footer />

    </>
  )
}

export default App
