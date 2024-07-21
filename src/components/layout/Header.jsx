import {
  AppBar,
  Backdrop,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { Suspense, lazy, useState } from "react";

import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../constants/config";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { userNotExists } from "../../redux/reducers/auth";
import {
  setIsMobile,
  setIsNewGroup,
  setIsNotification,
  setIsSearch,
} from "../../redux/reducers/misc";
import { resetNotificationCount } from "../../redux/reducers/chat";
import logo from "../../Images/Logo.png";
import logo1 from "../../Images/Logo1.png";
import ChatIcon from '@mui/icons-material/Chat';



const SearchDialog = lazy(() => import("../specific/Search"));
const NotifcationDialog = lazy(() => import("../specific/Notifications"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isSearch, isNotification, isNewGroup } = useSelector(
    (state) => state.misc
  );
  const { notificationCount } = useSelector((state) => state.chat);

  const handleMobile = () => dispatch(setIsMobile(true));

  const openSearch = () => dispatch(setIsSearch(true));

  const openNewGroup = () => {
    dispatch(setIsNewGroup(true));
  };

  const openNotification = () => {
    dispatch(setIsNotification(true));
    dispatch(resetNotificationCount());
  };

  const navigateToGroup = () => navigate("/groups");

  const logoutHandler = async () => {
    try {
      const { data } = await axios.get(${server}/api/v1/user/logout, {
        withCredentials: true,
      });
      dispatch(userNotExists());
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            height: "4rem",
            backgroundColor: "#2E1437",
            display: "flex",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 1rem",
            }}
          >
            <Box>
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                <img
                  src={logo}
                  height={"50px"}
                  style={{
                    marginLeft: "-1rem",
                  }}
                  alt="Logo"
                />
              </Box>
              <Box
                sx={{
                  display: { xs: "block", sm: "none" },
                }}
              >
                <img
                  src={logo1}
                  height={"50px"}
                  style={{
                    marginLeft: "-1rem",
                  }}
                  alt="Logo"
                />
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: { xs: "block", sm: "none" },
                }}
              >
                <IconBtn
                  title={"Search"}
                  icon={<SearchIcon />}
                  onClick={openSearch}
                />
                <IconBtn
                  title="Menu"
                  icon={<MenuIcon />}
                  onClick={handleMobile}
                />
                <IconBtn
                  title={"Notification"}
                  icon={<NotificationsIcon />}
                  onClick={openNotification}
                />
                <IconBtn
                  title={"Logout"}
                  icon={<LogoutIcon />}
                  onClick={logoutHandler}
                />

              </Box>
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                <IconBtn
                  title={"Search"}
                  icon={<SearchIcon />}
                  onClick={openSearch}
                />
                <IconBtn
                  title={"New Group"}
                  icon={<AddIcon />}
                  onClick={openNewGroup}
                />
                <IconBtn
                  title={"Groups"}
                  icon={<GroupIcon />}
                  onClick={navigateToGroup}
                />
                <IconBtn
                  title={"Notification"}
                  icon={<NotificationsIcon />}
                  onClick={openNotification}
                />
                <IconBtn
                  title={"Logout"}
                  icon={<LogoutIcon />}
                  onClick={logoutHandler}
                />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      )}

      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotifcationDialog />
        </Suspense>
      )}

      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, icon, onClick, value }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {value ? (
          <Badge badgeContent={value} color="error">
            {icon}
          </Badge>
        ) : (
          icon
        )}
      </IconButton>
    </Tooltip>
  );
};

export default Header;