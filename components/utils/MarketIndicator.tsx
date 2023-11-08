// import React from "react";

// function UpIndicator({ marketStatus, upText }) {
//   return (
//     <svg fill={marketStatus === "up" ? "green" : "neutralColor"}>
//       {/* SVG for market going up */}
//       <text
//         x="50%"
//         y="50%"
//         textAnchor="middle"
//         fill="white"
//         fontSize="20px"
//         fontFamily="Verdana"
//         dy=".3em"
//       >
//         {upText}
//       </text>
//     </svg>
//   );
// }

// function DownIndicator({ marketStatus, downText }) {
//   return (
//     <svg fill={marketStatus === "down" ? "purple" : "neutralColor"}>
//       {/* SVG for market going down */}
//       <text
//         x="50%"
//         y="50%"
//         textAnchor="middle"
//         fill="white"
//         fontSize="20px"
//         fontFamily="Verdana"
//         dy=".3em"
//       >
//         {downText}
//       </text>
//     </svg>
//   );
// }

// function MarketIndicator({ marketStatus, upText, downText }) {
//   return (
//     <>
//       <UpIndicator marketStatus={marketStatus} upText={upText} />
//       <DownIndicator marketStatus={marketStatus} downText={downText} />
//     </>
//   );
// }

// export default MarketIndicator;
