// Footer.jsx
import React from "react";
import logo from "../../assets/images/Logo.png";
import paperclip from "../../assets/images/paperclip.png";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TuneIcon from "@mui/icons-material/Tune";




function Footer({ chatData, handleFilterClick, removeFilter }) {
  return (
    <div className="bg-white m-[0.3rem] sticky bottom-[.3rem] z-10   h-auto ">
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
                className={`flex items-center rounded px-3 py-1 text-xs  ${
                  chatData.activeFilter === filter
                    ? "border-[.1rem] border-[#4c82ef] bg-[#f6f9ff] text-[#4c82ef] "
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
            className="border border-[#e3ecff] p-2 rounded-lg flex-grow  h-[2.1rem] text-xs"
            placeholder="Type your message"
          />
          <div className="absolute right-0 top-0 bottom-0 flex  items-center mr-2">
            <img
              src={paperclip}
              alt="Upload Icon"
              className="w-5 h-5 mr-[4.3rem]"
            />
          </div>
          <button className="bg-blue-500 text-white  h-[2.1rem] mx-1  rounded-lg  w-[3.8rem]">
            <ArrowForwardIosIcon  className="flex item-center justify-center font-bold text-lg mb-1" style={{height:"1.3rem"}}/>
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
  );
}

export default Footer;
