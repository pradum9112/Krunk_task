import React, { useState } from "react";
import chatBotIcon from "../../assets/images/SIMPLE CHATBOTS.png";
import logo from "../../assets/images/Logo.png";
import paperclip from "../../assets/images/paperclip.png";
import CircleIcon from "@mui/icons-material/Circle";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import varifyIcon from "../../assets/images/Vector (1).png";
// import sendmsgIcon from "../../assets/images/Vector.png"
import TuneIcon from "@mui/icons-material/Tune";

function TimpuChatAssistant() {
  const [chatData, setChatData] = useState({
    messages: [
      {
        id: 1,
        name: "Timpu",
        role: "Chat assistant",
        status: "Online",
        message:
          "Hi Sam! I am your personal shopping assistant, how can i help you today ?",
        time: "4:45 PM",
      },
      {
        id: 2,
        name: "User",
        role: "",
        status: "",
        message: "I am looking for a hand bag, with long strap.",
        time: "4:46 PM",
      },
      {
        id: 3,
        name: "Timpu",
        role: "Chat assistant",
        content: "Bags on Timpu",

        status: "Online",
        suggestion: {
          image:
            "https://s3-alpha-sig.figma.com/img/689e/2faf/68cf127f505e43e548e19296947c8d09?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvJHNTJnVTam5IbdgovtdJjs~9a8CoaetZ9TxA04XJcYBUZm1NceknHk1t7HmanN27TDiDVXjVQFTExU1nuugTqpCmV3TBzPvCClYwB1CK3X5M8J0WJox6-hRVZ4Cy8LqNcuMaR3MXuJxKbOgBYzqlqlnkL0eALLnh0C9nyMlzkoGrIRO-V6pOxocffZoGWw6M3-PFbA83NbfA-Qt9Sc4I8MWZ-QVjeTjuFvBim04A6I1amF4biHstH3OlSpJnd0wMkcj-dz5~6Lv8dBYLe6R32Hy9xGLSRHLU9WGKtKuvnuZzjlKpF~HK37yqkVCFl4XPjlzeIBWm6Udx8zBOTgtw__",
          text: "Bag on Timpu",
          products: "1123 products",
        },
        message: "Or set the filter and help us choose the best beg for you",
        time: "4:48 PM",
      },
      // { id: 2, name: 'User', role: '', status: '', message: 'I am looking for a hand bag, with long strap.', time: '4:46 PM' },
    ],
    selectedFilters: ["Strap - Long", "Colour", "Size", "Brand", "Material"],
    activeFilter: null,
  });
  const removeFilter = (filter) => {
    setChatData((prevChatData) => ({
      ...prevChatData,
      selectedFilters: prevChatData.selectedFilters.filter((f) => f !== filter),
      activeFilter: null, // Reset active filter when one is removed
    }));
  };

  const handleFilterClick = (filter) => {
    setChatData((prevChatData) => ({
      ...prevChatData,
      activeFilter: prevChatData.activeFilter === filter ? null : filter,
    }));
  };
  const chatStatus =
    chatData.status === "Online" ? "text-[red]" : "text-[#3fe225]";

  return (
    <div
      className="bg-gradient-to-br from-[#e6eeff] via-[#e6eeff] to-transparent  h-screen flex  flex-col items-center justify-center "
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className=" bg-white h-screen rounded-[1.5rem] w-[20rem] overflow-hidden  my-[3rem] ">
        {/* Header */}
        <div className="overflow-y-auto  bg-[#eff3fd] rounded-t-[1.5rem] m-1.5">
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
                  <div className="text-md font-semibold  text-[#4c82ef] ">
                    Chat assistant
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <CircleIcon
                  className={chatStatus}
                  style={{ width: "10px", height: "10px", marginTop: "7px" }}
                />
                <div className="text-md font-semibold  text-[#4c82ef] mx-1">
                  Online
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Messages */}
        <div className="flex flex-col h-screen">
          <div className="flex-grow overflow-y-auto ">
            {chatData.messages.map((msg) => (
              <div
                key={msg.id}
                className={`p-2 w-[16rem] flex ${
                  msg.role === "Chat assistant"
                    ? "justify-start"
                    : "justify-end"
                }`}
              >
                <div>
                  <div
                    className={`p-2 text-sm rounded-[1rem] ${
                      msg.role === "Chat assistant"
                        ? "bg-gradient-to-br from-[#e6eeff] via-[#f5f9ff] to-transparent"
                        : "bg-[#dcf7c5]"
                    }`}
                  >
                    {/* Render product suggestion if it exists */}
                    {msg.suggestion && (
                      <div className="flex flex-row item-center justify-center mt-2 p-2 border rounded-md bg-white">
                        <div className="w-[4rem] h-[4rem]">
                          <img
                            src={msg?.suggestion?.image}
                            alt=""
                            className="rounded-2"
                          />
                        </div>

                        <div className="mx-3  ">
                          <div className="font-bold flex">
                            {msg.suggestion.text}
                            <span className="mb-2">
                              <img
                                src={varifyIcon}
                                alt=""
                                className=" w-4 h-4 mt-[0.4rem] ml-2  "
                              />
                            </span>
                          </div>

                          <div className="text-xs text-[#979797]">
                            {msg.suggestion.products}
                            <span className="mx-2 text-[#979797] "><KeyboardArrowRightIcon /></span>
                          </div>
                        </div>
                      </div>
                    )}
                    {msg.message}
                    {/* Render tags if they exist */}
                    {msg.tags && (
                      <div className="flex space-x-2 mt-2">
                        {msg.tags.map((tag, tagIndex) => (
                          <button
                            key={tagIndex}
                            className="bg-blue-200 rounded-full px-4 py-1 text-xs"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{msg.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Footer */}
        <div className="bg-white m-1.5 sticky bottom-0 z-10   h-auto">
          <div className="">
            <div className="mb-1 px-4 pb-4 bg-gradient-to-t from-[#fbfbfb] to-transparent mb-1">
              <div className="flex flex-row justify-between ">
                <span className="text-sm text-xs text-[#949494] text-lg  mt-1">
                  Select filters
                </span>
                <div>
                  <span className="text-[#666666]">
                    <TuneIcon />
                  </span>
                  <span className="text-xs ">Filter</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-2 ">
                {chatData.selectedFilters.map((filter, filterIndex) => (
                  <div
                    key={filterIndex}
                    className={`  flex items-center rounded px-3 py-1 text-xs  ${
                      chatData.activeFilter === filter
                        ? "border-2 border-[#4c82ef] bg-[#f6f9ff] text-[#4c82ef] "
                        : "bg-[#f4f4f4]"
                    } text-[#737373]  `}
                    onClick={() => handleFilterClick(filter)}
                  >
                    <span
                      className={` ${
                        chatData.activeFilter === filter
                          ? "text-[#4c82ef]  "
                          : "text-[#737373]"
                      }`}
                    >
                      {" "}
                      {filter}
                    </span>
                    <button
                      onClick={() => removeFilter(filter)}
                      className={`ml-2  font-bold  ${
                        chatData.activeFilter === filter
                          ? "text-[#4c82ef]  "
                          : "text-[#737373]"
                      }`}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#eff3fd] rounded-b-[1.4rem] p-1 ">
            <div className="flex   relative">
              <input
                className="border border-[#e3ecff] p-4 rounded-lg flex-grow h-[2.3rem] text-xs"
                placeholder="Type your message"
              />
              <div className="absolute right-0 top-0 bottom-0 flex items-center mr-2">
                <img
                  src={paperclip}
                  alt="Upload Icon"
                  className="w-5 h-5 mr-[4.3rem]"
                />
              </div>
              <button className="bg-blue-500 text-white  mx-1 rounded-lg h-9 w-[3.8rem]">
                <KeyboardArrowRightIcon className="h-5" />
              </button>
            </div>
            <div className=" flex flex-row items-center justify-center ">
              <div className="text-xs   ">
                <div className="flex flex-row mt-2 mx-1">
                  <div className="text-[#b1b1b1] mx-1 font-semibold">
                    Powered by
                  </div>
                  <div className="text-[#7a7f8c] font-bold">Krunk.ai</div>
                </div>
              </div>
              <div>
                <img
                  src={logo}
                  alt=""
                  style={{ marginTop: "8px", width: "15px", height: "15px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimpuChatAssistant;
