import React, {useState} from "react";
import Bag from "../media/Bag.png";
import "./Sidebar.css";
// import {UilEstate} from "@iconscout/react-unicons";
import {SidebarData} from "../Data/Data.js";

const Sidebar = () =>
{

  const [selected, setSelected] = useState(0);

  return(
    <div className="Sidebar">
      <div className="Logo">
        <img className="BagLogo" src={Bag} alt="" />
        <span className="LogoText">Shop</span>
      </div>

      <div className="Menu">
        {
          SidebarData.map((item, index) =>
          {
            return(
              <div className={selected === index? "MenuItems active" : "MenuItems"} key={index} onClick={() => setSelected(index)}>
                <item.icon />
                <span>{item.heading}</span>
              </div>

            )
          })
        }
      </div>
    </div>
  );
};

export default Sidebar;