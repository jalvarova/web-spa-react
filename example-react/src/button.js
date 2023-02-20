import { Button } from '@chakra-ui/react'

function MyButton() {
    return (
        <Button variant="contained" color="success" onClick={sayHello} >
            My Button
        </Button>
    )
}

function sayHello() {
    alert('You clicked me!');
  }
export { MyButton }