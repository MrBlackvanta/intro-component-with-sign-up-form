"use client";

import { useId, useState } from "react";
import { cn } from "@/utils/cn";

type FieldName = "firstName" | "lastName" | "email" | "password";

interface Field {
  name: FieldName;
  label: string;
  type: "text" | "email" | "password";
  autoComplete: string;
}

const FIELDS: Field[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    autoComplete: "given-name",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    autoComplete: "family-name",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    autoComplete: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    autoComplete: "new-password",
  },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormValues = Record<FieldName, string>;
type FormErrors = Partial<Record<FieldName, string>>;

const INITIAL_VALUES: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function getFieldError(field: Field, value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return `${field.label} cannot be empty`;
  if (field.type === "email" && !EMAIL_PATTERN.test(trimmed)) {
    return "Looks like this is not an email";
  }
  return undefined;
}

export default function SignupForm() {
  const baseId = useId();
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    const nextErrors: FormErrors = {};
    for (const field of FIELDS) {
      const error = getFieldError(field, values[field.name]);
      if (error) nextErrors[field.name] = error;
    }
    setErrors(nextErrors);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const field = FIELDS.find((item) => item.name === event.currentTarget.name);
    if (!field) return;
    const { value } = event.currentTarget;

    setValues((prev) => ({ ...prev, [field.name]: value }));
    if (submitted) {
      setErrors((prev) => ({
        ...prev,
        [field.name]: getFieldError(field, value),
      }));
    }
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="shadow-card flex flex-col gap-4 rounded-lg bg-white p-6 sm:p-10"
    >
      {FIELDS.map((field) => {
        const error = errors[field.name];
        const inputId = `${baseId}-${field.name}`;
        const errorId = `${inputId}-error`;
        return (
          <div key={field.name}>
            <label htmlFor={inputId} className="sr-only">
              {field.label}
            </label>
            <input
              id={inputId}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              placeholder={field.label}
              value={values[field.name]}
              onChange={handleChange}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? errorId : undefined}
              className={cn("v-field", error && "v-field-error")}
            />
            {error && (
              <p id={errorId} role="alert" className="v-field-message">
                {error}
              </p>
            )}
          </div>
        );
      })}

      <button type="submit" className="v-btn">
        Claim your free trial
      </button>

      <p className="text-grayish-blue px-4 text-center text-xs">
        By clicking the button, you are agreeing to our{" "}
        <a href="#" className="text-red font-bold hover:underline">
          Terms and Services
        </a>
      </p>
    </form>
  );
}
