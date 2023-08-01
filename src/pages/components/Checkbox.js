import { Switch } from "@headlessui/react";
import { AiOutlineCheck } from "react-icons/ai";

export default function Checkbox({ name, checked, onChange, disabled }) {
  return (
    <Switch.Group>
      <div className="flex items-center justify-between">
        <Switch
          checked={checked}
          onChange={onChange}
          name={name}
          disabled={disabled}
          className={`
            relative flex h-6 w-6 items-center justify-center rounded-lg transition-all duration-200 outline-none ring-1 
            ${!checked && !disabled ? "ring-gray-400" : ""}
            ${checked && !disabled ? "ring-primary dark:ring-primaryDark" : ""} 
            ${disabled ? "bg-gray-200 ring-gray-200" : "bg-white"}  
          `}
        >
          <AiOutlineCheck
            size="1rem"
            className={`
             ${checked ? "scale-100" : "scale-0"} 
             ${checked && !disabled ? "text-primary dark:text-primaryDark" : "text-gray-400"} 
             transition-transform duration-200 ease-out`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
}