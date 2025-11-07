import React, { FC } from "react";

import FlexBox from "../../../layout/FlexBox";
import { Text } from "../Text";
import { pickDataAriaRoleProps, WithDataAriaRole } from "../../../utils/DomAttrProps";

interface BaseProps {
  title?: string;
  content?: string;
}

export type TitleAndContentProps = WithDataAriaRole<typeof FlexBox, BaseProps>;

const TitleAndContent: FC<TitleAndContentProps> = ({
  title = "",
  content = "",
  ...rest
}) => (
  <FlexBox {...pickDataAriaRoleProps(rest)}>
    <Text>
      <b>{title}</b>
    </Text>
    <Text>{content}</Text>
  </FlexBox>
);

export default TitleAndContent;
