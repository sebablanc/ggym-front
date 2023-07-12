import Button from '../ui/button/button';
import Input from '../ui/input/input';
import styles from './login.module.css';

export default function Login() {
  return (
    <form className={styles.loginContainer} action='localhost:3000' method='POST'>

      <Input
        type='text'
        name='username'
        placeholder='Ingresá tu usuario'
        label='Nombre de usuario'
      />

      <Input
        type='password'
        name='password'
        placeholder='Ingresá tu password'
        label='Password'
      />
      
      <Button
        type='submit'
        label='Ingresar'
      />
    </form>
  )
}
