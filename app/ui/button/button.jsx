import styles from './button.module.css';

export default function Button({type, label}){
    return(
      <button className={styles.button} type={type}>{label}</button>
    );
}