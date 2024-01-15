import { Title, Text } from "@ui5/webcomponents-react";
import "./PageTitle.scss";

const PageTitle = ({ title, description }) => {
  return (
    <section className="page-title">
      <Title className="title">{title}</Title>
      <Text>{description}</Text>
    </section>
  );
};

export default PageTitle;
