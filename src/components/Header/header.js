import "./header.css";
import MenuIcon from "../../images/menuIcon.png";
import MsgIcon from "../../images/msgIcon.png";
import FlagIcon from "../../images/usaFlag.png";
import UserAvatar from "../../images/johnwick2.jpg";
import { Search } from "./search";
import { FirstDropdown } from "./firstDropdown";
import { SecondDropdown } from "./secondDropDown";
import { Avatar, Badge } from "antd";
import { BellOutlined, ExpandOutlined } from "@ant-design/icons";

export const Header = () => {
  return (
    <div className="mainHeader_div">
      {/* LEFT MENU OF THE HEADER */}
      <div className="headerLeft_div">
        <img src={MenuIcon} className="headerMenu_icon" alt="menuIcon" /> {/* MENU ICON */}
        <Search /> {/* SEARCH BAR */}
        <FirstDropdown /> {/* FIRST DROPDOWN */}
        <SecondDropdown /> {/* 2ND DROPDOWN */}
      </div>
      {/* RIGHT MENU OF THE HEADER */}
      <div className="headerRight_div">
        <Badge color="#447BBF" size="small" count="4">
          <BellOutlined className="headerRight_icon" />
        </Badge>
        <img src={MsgIcon} className="headerRight_icon msgIcon" alt="menuIcon" /> {/* MESSAGE ICON */}
        <Avatar size={22} src={FlagIcon} />
        <ExpandOutlined className="headerRight_icon" />
        <Avatar shape="square" size={35} src={UserAvatar} />
      </div>
    </div>
  );
};
