import Button from '../ui/button/button';
import Input from '../ui/input/input';
import styles from './clientRegistation.module.css';

export default function ClientRegistration() {
  return (
    <form className={styles.clientRegistationContainer} action='localhost:3000' method='POST'>

      <Input
        type='number'
        name='documento'
        placeholder='Ingresá el documento del cliente'
        label='Documento'
      />

      <Input
        type='text'
        name='nombre'
        placeholder='Ingresá el nombre del cliente'
        label='Nombre'
      />

      <Input
        type='text'
        name='apellido'
        placeholder='Ingresá el apellido del cliente'
        label='Apellido'
      />
      
      <Button
        type='submit'
        label='Registrar'
      />
    </form>
  )
}
