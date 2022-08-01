import { Rate, Typography } from "antd";

import FilledStar from "../assets/icons/FilledStar.svg";
import OutlineStar from "../assets/icons/OutlineStar.svg";

export const LocationRatings: React.FC = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
    <CustomRate stars={5} reviews={134} />

    <CustomRate stars={4} reviews={134} />

    <CustomRate stars={3} reviews={72} />

    <CustomRate stars={2} reviews={75} />

    <CustomRate stars={1} reviews={7} />
  </div>
);

const CustomRate: React.FC<{ stars: number; reviews: number }> = ({
  stars,
  reviews,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid var(--gray-10)",
        height: 32,
      }}
    >
      <Rate
        disabled
        defaultValue={stars}
        character={({ index }) =>
          Number(index) + 1 <= stars ? <FilledStar /> : <OutlineStar />
        }
      />
      <Typography className="paragraph-4" style={{ color: "var(--gray-30)" }}>
        ({reviews})
      </Typography>
    </div>
  );
};
