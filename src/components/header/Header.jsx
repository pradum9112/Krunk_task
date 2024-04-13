import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import varifyIcon from "../../assets/images/Vector (1).png";
import chatBotIcon from "../../assets/images/SIMPLE CHATBOTS.png";

function Header({ chatStatus }) {
  return (
   <div className="overflow-y-auto  bg-[#eff3fd] rounded-t-[1.5rem] m-[.3rem]">
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative">
                  <div className="flex flex-col rounded-full bg-gray-300 w-15 h-15 flex items-center justify-center relative">
                    {/* Icon */}
                    <img src={chatBotIcon} alt="Chat Bot Icon" />

                    <CircleIcon
                      className={chatStatus}
                      style={{
                        position: "absolute",
                        bottom: "1",
                        right: "2",
                        width: "10px",
                        height: "10px",
                      }}
                    />
                  </div>
                </div>

                <div className="ml-2">
                  <div className="flex">
                    <div className="text-lg font-bold text-[#4c82ef] ">
                      Timpu
                    </div>
                    <div>
                      <img
                        src={varifyIcon}
                        alt=""
                        className=" w-4 h-4 mt-[.4rem] ml-3 "
                      />
                    </div>
                  </div>
                  <div className="text-ms font-semibold  text-[#4c82ef] ">
                    Chat assistant
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <CircleIcon
                  className={chatStatus}
                  style={{ width: "10px", height: "10px", marginTop: "7px" }}
                />
                <div className="text-ms font-semibold  text-[#4c82ef] mx-1">
                  Online
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Header;
