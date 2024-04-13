import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import varifyIcon from "../../assets/images/Vector (1).png";
// import sendmsgIcon from "../../assets/images/Vector.png"
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Carousel from "../Carousel";

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
        content: "Popular tags for handling",

        status: "Online",
        suggestion: {
          items:["clutch" ,"fibric-linning" ,"baggit","multicolor"],
          image:
            "https://s3-alpha-sig.figma.com/img/689e/2faf/68cf127f505e43e548e19296947c8d09?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvJHNTJnVTam5IbdgovtdJjs~9a8CoaetZ9TxA04XJcYBUZm1NceknHk1t7HmanN27TDiDVXjVQFTExU1nuugTqpCmV3TBzPvCClYwB1CK3X5M8J0WJox6-hRVZ4Cy8LqNcuMaR3MXuJxKbOgBYzqlqlnkL0eALLnh0C9nyMlzkoGrIRO-V6pOxocffZoGWw6M3-PFbA83NbfA-Qt9Sc4I8MWZ-QVjeTjuFvBim04A6I1amF4biHstH3OlSpJnd0wMkcj-dz5~6Lv8dBYLe6R32Hy9xGLSRHLU9WGKtKuvnuZzjlKpF~HK37yqkVCFl4XPjlzeIBWm6Udx8zBOTgtw__",
          text: "Bags on Timpu",
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
      <div className=" bg-white  rounded-[1.5rem] w-[20rem] overflow-hidden  my-[3rem] ">
        {/* Header */}
        <Header chatStatus={chatStatus} />
          
        {/* Messages */}
        <div className="mx-2 flex flex-col h-screen ">
          <div className="flex-grow overflow-y-auto">
            {chatData.messages.map((msg) => (
              <div
                key={msg.id}
                className={`p-2 w-[15rem] flex ${
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
                      
                      //  <Carousel items={msg.suggestion.items} />
                      <div className="flex h-[4rem]">

                        
                       <div className="h-[3.1rem] flex flex-row item-center justify-center mt-1 p-1 border rounded-xl bg-white">
                        <div className="w-[4rem] h-[5rem]">
                          <img
                            src={msg?.suggestion?.image}
                            alt=""
                            style={{borderRadius:"5px"}}
                          />
                        </div>

                        <div className="mx-3  ">
                          <div className="font-semibold flex text-xs ">
                            {msg.suggestion.text}
                            <span >
                              <img
                                src={varifyIcon}
                                alt=""
                                className=" w-4 h-4 mt-[0.1rem] ml-2"
                              />
                            </span>
                          </div>

                          <div className="text-xs text-[#979797]">
                            {msg.suggestion.products}
                            <span className="ms-2 text-[#979797] ">
                              <KeyboardArrowRightIcon />
                            </span>
                          </div>
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
        <Footer
          chatData={chatData}
          handleFilterClick={handleFilterClick}
          removeFilter={removeFilter}
        />
      </div>
    </div>
  );
}

export default TimpuChatAssistant;
