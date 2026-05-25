import { AlertCircle, HeartOff, Loader } from "lucide-react";
import type { ReactNode } from "react";
import styles from "./StatusMessage.module.scss";

type StatusMessageVariant = "loading" | "error" | "empty";

interface VariantConfig {
  icon: ReactNode;
  title: string;
  description?: string;
}

const VARIANT_DEFAULTS: Record<StatusMessageVariant, VariantConfig> = {
  loading: {
    icon: <Loader size={32} />,
    title: "Loading..."
  },
  error: {
    icon: <AlertCircle size={32} />,
    title: "Something went wrong",
    description: "Please try again later."
  },
  empty: {
    icon: <HeartOff size={32} />,
    title: "No favourites yet",
    description: "Mark a character as favourite to see them here."
  }
};

interface StatusMessageProps {
  variant: StatusMessageVariant;
  icon?: ReactNode;
  title?: string;
  description?: string;
}

export function StatusMessage({
  variant,
  icon,
  title,
  description
}: StatusMessageProps) {
  const defaults = VARIANT_DEFAULTS[variant];

  const resolvedIcon = icon ?? defaults.icon;
  const resolvedTitle = title ?? defaults.title;
  const resolvedDescription = description ?? defaults.description;

  return (
    <div className={`${styles.container} ${styles[`container--${variant}`]}`}>
      <span className={styles.icon}>{resolvedIcon}</span>
      <p className={styles.title}>{resolvedTitle}</p>
      {resolvedDescription && (
        <p className={styles.description}>{resolvedDescription}</p>
      )}
    </div>
  );
}
