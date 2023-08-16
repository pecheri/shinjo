import { useState } from 'react';

interface ToggleSwitchProps {
  inactiveLabel: string | React.ReactNode;
  activeLabel: string | React.ReactNode;
}

export const ToggleSwitch = ({ inactiveLabel, activeLabel }: ToggleSwitchProps) => {
  const [active, setActive] = useState(false);
  const handleChange = () => {
    setActive((prev) => !prev);
  };
  const ActiveLabel = activeLabel as React.ReactNode;
  const InactiveLabel = inactiveLabel as React.ReactNode;
  return (
    <label className="toggle-switch">
      <input type="checkbox" onChange={handleChange} checked={active} />
      <span
        className={`toggle-slider text-white-bg flex items-center font-ubuntu text-xs ${
          active ? 'justify-start' : 'justify-end'
        }`}
      >
        <span className="px-1.5">{active ? activeLabel : inactiveLabel}</span>
      </span>
    </label>
  );
};
