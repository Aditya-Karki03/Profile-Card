import { Card } from "antd";

interface propTypes {
  name: string;
  bio: string;
}

export default function CardComp({ name, bio }: propTypes) {
  return (
    <Card title="Card title" bordered={false} style={{ width: 300 }}>
      <h1>{name}</h1>
      <p>{bio}</p>
    </Card>
  );
}
