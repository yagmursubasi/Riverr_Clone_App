import type { ICategory } from "../../types";

type SelectProps = {
  label: string;
  options: ICategory[];
  name?: string;
};

const Select = ({ label, options, name }: SelectProps) => {
  return (
    <div className="mb-5">
      <label className=" block mb-1 font-sm text-gray-900">{label}</label>
      <select
        name={name}
        className="w-full border bg-gray-50 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options.map((option, key) => (
          <option key={key} value={option.name.trim()}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
