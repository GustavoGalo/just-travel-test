import { Button, DatePicker, Form, Input } from "antd";

import Search from "../assets/icons/Search.svg";
import Location from "../assets/icons/Location.svg";

export const SearchLocationDateBar: React.FC = () => {
  return (
    <div style={{ height: 48 }}>
      <Form layout="inline" style={{ height: "100%" }}>
        <Input.Group compact>
          <Form.Item>
            <Input
              prefix={<Location />}
              style={{ height: 48 }}
              placeholder="GetYourGuide Tours & Tickets GmbH"
            />
          </Form.Item>
          <Form.Item>
            <DatePicker
              onChange={console.log}
              style={{ height: 48 }}
              placeholder="Selecione uma data"
            />
          </Form.Item>
          <Form.Item name={["location", "search"]}>
            <Button
              size="large"
              icon={<Search style={{ paddingTop: 4 }} />}
              style={{ height: 48, width: 48 }}
            />
          </Form.Item>
        </Input.Group>
      </Form>
    </div>
  );
};
