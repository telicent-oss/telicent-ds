import { default as React, PropsWithChildren } from 'react';

export type UserStatusProps = PropsWithChildren & {
    fullName: string;
};
declare const UserStatus: React.FC<UserStatusProps>;
export default UserStatus;
