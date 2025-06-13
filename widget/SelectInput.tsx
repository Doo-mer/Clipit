import React from "react";

interface SelectInputProps {
  label?: string;
  options: string[];
  className?: string;
  defaultValue?: string;
}

export default function SelectInput({
  label,
  options,
  className,
  defaultValue,
}: SelectInputProps) {
  return (
    <div className={`relative ${className}`}>
      {label && (
        <label htmlFor={label} className="sr-only">
          {label}
        </label>
      )}
      <select
        id={label}
        name={label}
        defaultValue={defaultValue}
        className="block w-full px-4 py-2 text-sm font-medium border border-neutral-200 dark:border-neutral-700 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-700 dark:text-neutral-300">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
        </svg>
      </div>
    </div>
  );
} 