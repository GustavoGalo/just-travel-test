import { Typography } from "antd";

interface IProgressBar {
  percentage: number;
  label: string;
  labelBar?: string;
}

export const ProgressBar: React.FC<IProgressBar> = ({
  percentage,
  label,
  labelBar,
}) => {
  return (
    <div
      style={{ width: "100%", display: "flex", alignItems: "center", gap: 8 }}
    >
      <div
        style={{ height: 30, width: 190, backgroundColor: "var(--support-05)" }}
      >
        <div
          style={{
            height: 30,
            width: `${percentage * 10}%`,
            backgroundColor: "var(--support-03)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            className="paragraph-4"
            style={{ color: "white", paddingLeft: 8 }}
          >
            {labelBar}
          </Typography>
        </div>
      </div>
      <Typography className="paragraph-4" style={{ color: "var(--gray-70)" }}>
        {label}
      </Typography>
    </div>
  );
};
