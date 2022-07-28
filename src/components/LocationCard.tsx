import { Space, Typography } from "antd";
import Image, { StaticImageData } from "next/image";

interface ILocationCardProps {
  location: string;
  image: StaticImageData;
  imageAlt: string;
}

export const LocationCard: React.FC<ILocationCardProps> = ({
  location,
  image,
  imageAlt,
}) => {
  return (
    <Space
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Image src={image} alt={imageAlt} height={242} width={248} />
      <Typography style={{ padding: "24px 0", fontSize: 22, fontWeight: 500 }}>
        {location}
      </Typography>
    </Space>
  );
};
