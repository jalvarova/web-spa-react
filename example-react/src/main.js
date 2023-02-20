
import Hello from './hello'
import Footer from './footer'
import { Title } from './title'
import { MyButton } from './button'
import Profile from './profile'

const Main = () => {
  const now = new Date()
  const a = 10
  const b = 20

  const name = 'Peter'
  const age = 10

  return (
    <div>
      <Profile />
      <Title title="Greetings" />

      <Hello name="Alvaro" age={26 + 10} />
      <Hello name={name} age={age} />

      <p>
        {a} plus {b} is {a + b}
      </p>

      <MyButton />

      <Footer />
    </div>
  )
}

export default Main