import { useState, useEffect } from "react";
import { FiAlertCircle } from "react-icons/fi";

const DynamicForm = ({
  config,
  initialData = {},
  onSubmit,
  onChange,
  submitLabel = "Submit",
  formId,
  hideSubmit = false,
}) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  // Initialize form data when component mounts or when config changes
  useEffect(() => {
    const filledForm = config.reduce(
      (acc, field) => ({
        ...acc,
        [field.name]: initialData[field.name] || "",
      }),
      {}
    );
    setFormData(filledForm);
  }, [config]);

  // Sync with initialData changes without clearing existing data
  useEffect(() => {
    setFormData(prev => {
      const updated = { ...prev };
      config.forEach(field => {
        if (initialData[field.name] !== undefined && initialData[field.name] !== '') {
          updated[field.name] = initialData[field.name];
        } else if (updated[field.name] === undefined) {
          updated[field.name] = '';
        }
      });
      return updated;
    });
  }, [initialData, config]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      if (onChange) onChange(updated);
      return updated;
    });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    config.forEach((field) => {
      if (field.required && (!formData[field.name] || !formData[field.name].toString().trim())) {
        newErrors[field.name] = field.errorMessage || "This field is required";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
  };

  const renderField = (field) => {
    const fieldValue = formData[field.name] || "";
    const hasError = errors[field.name];
    
    const baseInputClasses = `w-full p-2 text-xs border rounded-md focus:outline-none focus:ring-1 transition-all duration-150 placeholder-gray-100 text-gray-800 ${
      hasError
        ? "border-red-500 focus:ring-red-400"
        : "border-gray-200 focus:ring-blue-400 focus:border-blue-400"
    }`;

    switch (field.type) {
      case "select":
        return (
          <select
            name={field.name}
            value={fieldValue}
            onChange={handleChange}
            className={baseInputClasses}
          >
            <option value="">Select {field.label}</option>
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case "textarea":
        return (
          <textarea
            name={field.name}
            value={fieldValue}
            onChange={handleChange}
            placeholder={field.placeholder || ""}
            rows={3}
            className={baseInputClasses}
          />
        );

      case "checkbox":
        return (
          <div className="flex items-center">
            <input
              type="checkbox"
              name={field.name}
              checked={fieldValue === true || fieldValue === "true"}
              onChange={(e) => {
                const syntheticEvent = {
                  target: {
                    name: field.name,
                    value: e.target.checked
                  }
                };
                handleChange(syntheticEvent);
              }}
              className="h-3.5 w-3.5 text-gray-900 focus:ring-blue-200 border-gray-200 rounded"
            />
            <span className="ml-1.5 text-xs text-gray-800">{field.label}</span>
          </div>
        );

      case "date":
        return (
          <input
            type="date"
            name={field.name}
            value={fieldValue}
            onChange={handleChange}
            placeholder={field.placeholder || ""}
            className={baseInputClasses}
          />
        );

      default:
        return (
          <input
            type={field.type || "text"}
            name={field.name}
            value={fieldValue}
            onChange={handleChange}
            placeholder={field.placeholder || ""}
            className={baseInputClasses}
          />
        );
    }
  };

  return (
    <form id={formId} onSubmit={handleSubmit} className="space-y-4">
      {config.map((field) => (
        <div key={field.name}>
          {field.type !== "checkbox" && (
            <label className="block text-xs font-medium text-gray-800 mb-1 flex items-center">
              {field.label}
              {field.required && (
                <span>*</span>
              )}
            </label>
          )}
          
          {renderField(field)}
          
          {errors[field.name] && (
            <p className="text-red-500 text-[10px] mt-1 flex items-center">
              <FiAlertCircle size={10} className="mr-1" />
              {errors[field.name]}
            </p>
          )}
        </div>
      ))}
      
      {!hideSubmit && (
        <button
          type="submit"
          className="w-full px-3 py-2 text-xs font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 hover:shadow-md transition-all duration-150"
        >
          {submitLabel}
        </button>
      )}
    </form>
  );
};

export default DynamicForm;