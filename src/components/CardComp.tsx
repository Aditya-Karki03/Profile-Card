import { Card, Avatar } from "antd";

interface propTypes {
  name: string;
  bio: string;
}

export default function CardComp({ name, bio }: propTypes) {
  return (
    <Card
      title="Profile Card"
      bordered={true}
      style={{
        width: 300,
        display: "Flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      hoverable={true}
      loading={false}
    >
      <div className="w-full flex justify-center">
        <Avatar
          shape="circle"
          draggable={true}
          src={"https://bbdu.ac.in/wp-content/uploads/2021/11/dummy-image1.jpg"}
          style={{
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1>{name}</h1>
        <p>{bio}</p>
      </div>
    </Card>
  );
}
