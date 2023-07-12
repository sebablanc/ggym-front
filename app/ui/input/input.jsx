import styles from './input.module.css';

export default function Input({type='text', label, name, placeholder}) {
  return (
    <>
      <label className={styles.inputLabel} htmlFor={name}>{label}</label>
      <input className={styles.input} type={type} placeholder={placeholder} name={name} />
    </>
  );
}