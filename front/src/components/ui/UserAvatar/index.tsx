import React from "react";
import Avatar from "@material-ui/core/Avatar";

interface AvatarProps {
  size?: "small" | "medium" | "large";
  url?: string;
}

const UserAvatar: React.FC<AvatarProps> = ({ size, url }): JSX.Element => {
  const styles = {
    width: size === "small" ? 45 : 40,
    height: size === "small" ? 45 : 40,
  };
  return (
    <Avatar
      alt='user'
      style={styles}
      src={
        url
          ? url
          : "https://img1.goodfon.ru/original/3830x2550/d/48/nastroeniya-devushka-ulybka-3172.jpg"
      }
    />
  );
};

export default UserAvatar;
