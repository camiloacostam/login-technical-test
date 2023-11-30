interface IIpuntProps {
  id: string;
  placeholder: string;
  label: string;
  required?: boolean;
  type?: string;
  errors?: boolean;
  errorMessage?: string;
}

export function Input({
  id,
  label,
  placeholder,
  required = false,
  type = "text",
  errors,
  errorMessage,
}: IIpuntProps) {
  return (
    <div className="space-y-2 flex flex-col items-start w-ful">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        required={required}
        type={type}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
          errors && "border-red-600"
        }`}
      />
      {errors && <p className="text-red-600 text-sm">{errorMessage}</p>}
    </div>
  );
}
