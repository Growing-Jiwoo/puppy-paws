import { UseFormRegisterReturn } from "react-hook-form";
import * as styles from "./_style/profile.css";

interface TextAreaFieldProps {
  label: string;
  placeholder: string;
  value: string;
  error?: string | undefined;
  register: UseFormRegisterReturn<string>;
}

export function TextAreaField({
  label,
  placeholder,
  value,
  error,
  register,
}: TextAreaFieldProps) {
  return (
    <div className={styles.textAreaContainer}>
      <label className={styles.labelText}>{label}</label>
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
        value={value}
        {...register}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
}
