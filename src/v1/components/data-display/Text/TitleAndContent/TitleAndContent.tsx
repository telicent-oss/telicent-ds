import React, { FC } from "react";

import FlexBox from "../../../layout/FlexBox";
import { Text } from "../Text";

export interface TitleAndContentProps {
  title?: string;
  content?: string;
}

const TitleAndContent: FC<TitleAndContentProps> = ({ title, content }) => (
  <FlexBox>
    <Text>
      <b>{title}</b>
    </Text>
    <Text>{content}</Text>
  </FlexBox>
);

export default TitleAndContent;
