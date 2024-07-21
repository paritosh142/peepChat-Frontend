import { Avatar, Stack, Typography } from "@mui/material";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment";
import { transformImage } from "../../lib/features";

const Profile = ({ user }) => {
  return (
    <Stack spacing={4} direction="column" alignItems="center">
      <Avatar
        src={transformImage(user?.avatar?.url)}
        sx={{
          width: 150,
          height: 150,
          objectFit: "contain",
          marginBottom: 2,
          border: "2px solid #2E1437",
          borderRadius: "50%",
        }}
      />
      <ProfileCard text={user?.name} Icon={<FaceIcon />} />

      <ProfileCard
        heading={"Username"}
        text={user?.username}
        Icon={<UserNameIcon />}
      />

      <ProfileCard heading={"Bio"} text={user?.bio} />

      <ProfileCard
        heading={"Joined"}
        text={moment(user?.createdAt).fromNow()}
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={2}
    sx={{
      padding: 2,
      backgroundColor: "#2E1437",
      borderRadius: 2,
      boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    }}
  >
    {Icon && <Icon sx={{ fontSize: 24, color: "white" }} />}
    <Stack>
      <Typography variant="body1" sx={{ color: "white" }}>
        {text}
      </Typography>
      <Typography color={"gray"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
