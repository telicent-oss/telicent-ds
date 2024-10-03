import React, { FC } from "react";

import FlexBox from "../../../layout/FlexBox";
import { Text } from "../../Text/Text";

export interface UserProfileItemProps {
  title?: string;
  content?: string;
}

const UserProfileItem: FC<UserProfileItemProps> = ({ title, content }) => (
  <FlexBox>
    <Text>
      <b>{title}</b>
    </Text>
    <Text>{content}</Text>
  </FlexBox>
);

export default UserProfileItem;
