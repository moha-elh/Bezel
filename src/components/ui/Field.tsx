import styles from './Field.module.css';

interface FieldProps {
  label: string;
  children: React.ReactNode;
}

export function Field({ label, children }: FieldProps) {
  return (
    <div className={styles.field}>
      <div className={styles.label}>{label}</div>
      {children}
    </div>
  );
}
