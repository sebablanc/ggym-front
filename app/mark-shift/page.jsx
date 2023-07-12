import Button from '../ui/button/button';
import Input from '../ui/input/input';
import styles from './markShift.module.css';

export default function MarkShift() {
    return (
        <form className={styles.markShiftContainer} action='localhost:3000' method='POST'>

            <Input
                type='number'
                name='documento'
                placeholder='Ingresá tu documento'
                //label='Documento'
            />

            <Button
                type='submit'
                label='Marcar turno'
            />
        </form>
    );
}