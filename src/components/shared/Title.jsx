import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "peepChat",
  description = "Chat with your peeps",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
