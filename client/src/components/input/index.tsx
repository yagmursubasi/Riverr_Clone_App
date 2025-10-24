import type { IInput } from "../../types";

const Input = ({
  label,
  name,
  placeholder,
  disabled = false,
  type = "text",
  required = false,
  min,
  max,
  multiple,
}: IInput) => {
  return (
    <div className="mb-5">
      <label className="mb-2 text-sm font-medium text-gray-900" htmlFor={name}>
        {label}{" "}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          required={required}
          disabled={disabled}
          name={name}
          placeholder={placeholder}
          className="input-field min-h-[100px] max-h-[250px] "
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          min={min}
          max={max}
          multiple={multiple}
          required={required}
          disabled={disabled}
          className="input-field"
        />
      )}
    </div>
  );
};

export default Input;
