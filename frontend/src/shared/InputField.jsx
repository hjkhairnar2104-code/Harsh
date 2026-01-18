const InputField = ({
  label,
  id,
  type = "text",
  placeholder,
  register,
  required,
  errors,
  min,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {/* Label */}
      <label
        htmlFor={id}
        className="text-sm font-medium text-slate-700"
      >
        {label}
      </label>

      {/* Input */}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id, {
          required,
          minLength: min,
        })}
        className={`
          w-full rounded-md border px-3 py-2 text-sm outline-none
          transition-all duration-200
          ${
            errors[id]
              ? "border-red-500 focus:ring-2 focus:ring-red-300"
              : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          }
        `}
      />

      {/* Error Message */}
      {errors[id] && (
        <p className="text-xs text-red-500">
          {errors[id]?.message || `${label} is invalid`}
        </p>
      )}
    </div>
  );
};

export default InputField;
