import { useState } from "react";
import { Checkbox, Space, Typography } from "antd";

interface ICheckbox {
  isChecked: boolean;
  label: string;
}

export const CheckboxInput: React.FC<ICheckbox> = ({ isChecked, label }) => {
  const [checked, setChecked] = useState(isChecked);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <Space>
      <Checkbox checked={checked} onChange={toggleChecked}>
        <Typography
          className="paragraph-3"
          style={{ color: "var(--brand-color-black)" }}
        >
          {label}
        </Typography>
      </Checkbox>
    </Space>
  );
};
