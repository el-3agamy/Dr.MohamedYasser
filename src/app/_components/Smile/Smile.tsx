// // "use client";

// // import Image from "next/image";
// // import { useRef, useState } from "react";

// // export default function Smile() {
// //   const [sliderPosition, setSliderPosition] = useState(50);
// //   const sliderRef = useRef<HTMLDivElement>(null);

// //   const handleMove = (clientX: number) => {
// //     if (!sliderRef.current) return;

// //     const rect = sliderRef.current.getBoundingClientRect();

// //     let position = ((clientX - rect.left) / rect.width) * 100;

// //     // Keep slider between 0% and 100%
// //     position = Math.max(0, Math.min(100, position));

// //     setSliderPosition(position);
// //   };

// //   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
// //     if (e.buttons !== 1) return;

// //     handleMove(e.clientX);
// //   };

// //   const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
// //     handleMove(e.touches[0].clientX);
// //   };

// //   return (
// //     <section className="flex flex-col justify-center items-center gap-y-4 py-24">

// //       {/* Heading */}
// //       <h1
// //         className="
// //           relative
// //           font-bold
// //           text-emerald-800
// //           text-2xl
// //           after:bottom-0
// //           after:left-0
// //           after:absolute
// //           after:h-[2px]
// //           after:bg-amber-200
// //           after:w-[70px]
// //         "
// //       >
// //         Smile Transformations
// //       </h1>

// //       {/* Description */}
// //       <p className="text-center font-medium text-[18px] text-emerald-600">
// //         See the remarkable difference our expert dental care can make.
// //         Before and after,
// //         <br />
// //         the journey to your perfect smile begins here!
// //       </p>

// //       {/* Before / After buttons */}
// //       <div className="flex items-center gap-x-8 mt-6">

// //         <button
// //           onClick={() => setSliderPosition(0)}
// //           className={`
// //             font-semibold
// //             transition
// //             duration-200
// //             ${
// //               sliderPosition < 50
// //                 ? "text-emerald-800"
// //                 : "text-gray-400"
// //             }
// //           `}
// //         >
// //           BEFORE
// //         </button>

// //         <button
// //           onClick={() => setSliderPosition(100)}
// //           className={`
// //             font-semibold
// //             transition
// //             duration-200
// //             ${
// //               sliderPosition >= 50
// //                 ? "text-emerald-800"
// //                 : "text-gray-400"
// //             }
// //           `}
// //         >
// //           AFTER
// //         </button>

// //       </div>

// //       {/* Slider */}
// //       <div
// //         ref={sliderRef}
// //         onMouseMove={handleMouseMove}
// //         onTouchMove={handleTouchMove}
// //         className="
// //           relative
// //           w-[450px]
// //           h-[450px]
// //           overflow-hidden
// //           select-none
// //           touch-none
// //           rounded-xl
// //           shadow-lg
// //         "
// //       >

// //         {/* BEFORE IMAGE - Background */}
// //         <Image
// //           src="/dr.jfif"
// //           alt="Smile before dental treatment"
// //           fill
// //           className="object-cover"
// //           draggable={false}
// //         />

// //         {/* AFTER IMAGE - Clipped */}
// //         <div
// //           className="absolute top-0 left-0 h-full overflow-hidden"
// //           style={{
// //             width: `${sliderPosition}%`,
// //           }}
// //         >
// //           <Image
// //             src="/dr.jfif"
// //             alt="Smile after dental treatment"
// //             fill
// //             className="object-cover"
// //             draggable={false}
// //           />
// //         </div>

// //         {/* Slider Line */}
// //         <div
// //           className="
// //             absolute
// //             top-0
// //             bottom-0
// //             w-[3px]
// //             bg-white
// //             shadow-md
// //             cursor-ew-resize
// //             -translate-x-1/2
// //           "
// //           style={{
// //             left: `${sliderPosition}%`,
// //           }}
// //         >

// //           {/* Slider Handle */}
// //           <div
// //             className="
// //               absolute
// //               top-1/2
// //               left-1/2
// //               -translate-x-1/2
// //               -translate-y-1/2
// //               w-12
// //               h-12
// //               rounded-full
// //               bg-white
// //               shadow-xl
// //               flex
// //               items-center
// //               justify-center
// //               text-emerald-800
// //               font-bold
// //               cursor-ew-resize
// //             "
// //           >
// //             ←→
// //           </div>

// //         </div>

// //       </div>

// //     </section>
// //   );
// // }

// // // 'use client'

// // // import React, { useState } from 'react'
// // // import Image from 'next/image'

// // // export default function Smile() {
// // //   // Slider position percentage (0 to 100)
// // //   const [sliderPosition, setSliderPosition] = useState(50)

// // //   // Update slider position on drag/input
// // //   const handleSliderChange = (e) => {
// // //     setSliderPosition(Number(e.target.value))
// // //   }

// // //   return (
// // //     <section className="flex flex-col justify-center items-center gap-y-4 py-16 px-4 bg-emerald-50">
// // //       <h1 className="relative font-bold text-emerald-800 text-3xl after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:absolute after:h-[3px] after:bg-amber-400 after:w-[80px] pb-2">
// // //         Smile Transformations
// // //       </h1>
      
// // //       <p className="text-center font-medium text-[18px] text-emerald-700 max-w-xl">
// // //         See the remarkable difference our expert dental care can make.
// // //         Before and after, the journey to your perfect smile begins here!
// // //       </p>

// // //       {/* Quick Action Buttons */}
// // //       <div className="flex gap-4 my-2">
// // //         <button
// // //           onClick={() => setSliderPosition(100)}
// // //           className={`px-4 py-2 rounded-lg font-semibold border transition-all ${
// // //             sliderPosition === 100
// // //               ? 'bg-emerald-700 text-white border-emerald-700'
// // //               : 'bg-white text-emerald-800 border-emerald-300 hover:bg-emerald-100'
// // //           }`}
// // //         >
// // //           Show 100% Before
// // //         </button>
// // //         <button
// // //           onClick={() => setSliderPosition(50)}
// // //           className="px-4 py-2 rounded-lg font-semibold bg-amber-400 text-emerald-950 hover:bg-amber-500 transition-all"
// // //         >
// // //           Reset (50/50)
// // //         </button>
// // //         <button
// // //           onClick={() => setSliderPosition(0)}
// // //           className={`px-4 py-2 rounded-lg font-semibold border transition-all ${
// // //             sliderPosition === 0
// // //               ? 'bg-emerald-700 text-white border-emerald-700'
// // //               : 'bg-white text-emerald-800 border-emerald-300 hover:bg-emerald-100'
// // //           }`}
// // //         >
// // //           Show 100% After
// // //         </button>
// // //       </div>

// // //       {/* Comparison Container */}
// // //       <div className="relative w-full max-w-[600px] h-[350px] sm:h-[450px] rounded-2xl overflow-hidden shadow-2xl select-none">
        
// // //         {/* AFTER Image (Base Layer - 100% visible under clip) */}
// // //         <Image
// // //           src="/after-smile.jpg" // Replace with your "After" image path
// // //           alt="Smile After Treatment"
// // //           fill
// // //           className="object-cover"
// // //           priority
// // //         />
// // //         <span className="absolute bottom-4 right-4 bg-emerald-900/80 text-white text-xs px-3 py-1 rounded-full font-bold z-10 pointer-events-none">
// // //           AFTER
// // //         </span>

// // //         {/* BEFORE Image (Clipped Layer controlled by state) */}
// // //         <div
// // //           className="absolute inset-0 overflow-hidden"
// // //           style={{ width: `${sliderPosition}%` }}
// // //         >
// // //           {/* We lock image width to parent container width so it doesn't squish during crop */}
// // //           <div className="relative w-[600px] h-[350px] sm:h-[450px]">
// // //             <Image
// // //               src="/dr.jfif" // Replace with your "Before" image path
// // //               alt="Smile Before Treatment"
// // //               fill
// // //               className="object-cover"
// // //               priority
// // //             />
// // //           </div>
// // //           <span className="absolute bottom-4 left-4 bg-amber-500/90 text-emerald-950 text-xs px-3 py-1 rounded-full font-bold z-10 pointer-events-none">
// // //             BEFORE
// // //           </span>
// // //         </div>

// // //         {/* Vertical Divider Line & Handle */}
// // //         <div
// // //           className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 pointer-events-none"
// // //           style={{ left: `${sliderPosition}%` }}
// // //         >
// // //           {/* Center Handle Knob */}
// // //           <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-amber-400 border-2 border-white rounded-full flex items-center justify-center shadow-md text-emerald-900 font-bold">
// // //             ↔
// // //           </div>
// // //         </div>

// // //         {/* Invisible Native Range Input overlaid on top for smooth dragging */}
// // //         <input
// // //           type="range"
// // //           min="0"
// // //           max="100"
// // //           value={sliderPosition}
// // //           onChange={handleSliderChange}
// // //           className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
// // //           aria-label="Before and After Slider"
// // //         />
// // //       </div>
// // //     </section>
// // //   )
// // // }

// 'use client'

// import React, { useState } from 'react'
// import Image from 'next/image'

// export default function Smile() {
//   const [sliderPosition, setSliderPosition] = useState(50)

//   const handleSliderChange = (e) => {
//     setSliderPosition(Number(e.target.value))
//   }

//   return (
//     <section className="flex flex-col justify-center items-center gap-y-4 py-16 px-4 bg-emerald-50">
//       <h1 className="relative font-bold text-emerald-800 text-3xl after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:absolute after:h-[3px] after:bg-amber-400 after:w-[80px] pb-2">
//         Smile Transformations
//       </h1>
      
//       <p className="text-center font-medium text-[18px] text-emerald-700 max-w-xl">
//         See the remarkable difference our expert dental care can make.
//         Before and after, the journey to your perfect smile begins here!
//       </p>

//       {/* Action Buttons for 100% Views */}
//       <div className="flex gap-3 my-2">
//         <button
//           type="button"
//           onClick={() => setSliderPosition(100)}
//           className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all ${
//             sliderPosition === 100
//               ? 'bg-emerald-800 text-white border-emerald-800 shadow'
//               : 'bg-white text-emerald-800 border-emerald-300 hover:bg-emerald-100'
//           }`}
//         >
//           Show 100% Before
//         </button>
        
//         <button
//           type="button"
//           onClick={() => setSliderPosition(50)}
//           className="px-4 py-2 rounded-lg text-sm font-semibold bg-amber-400 text-emerald-950 hover:bg-amber-500 shadow-sm transition-all"
//         >
//           Reset (50/50)
//         </button>

//         <button
//           type="button"
//           onClick={() => setSliderPosition(0)}
//           className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all ${
//             sliderPosition === 0
//               ? 'bg-emerald-800 text-white border-emerald-800 shadow'
//               : 'bg-white text-emerald-800 border-emerald-300 hover:bg-emerald-100'
//           }`}
//         >
//           Show 100% After
//         </button>
//       </div>

//       {/* Comparison Container */}
//       <div className="relative w-full max-w-[600px] h-[350px] sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl select-none">
        
//         {/* AFTER Image (Bottom Base Layer) */}
//         <Image
//           src="/dr.jfif" 
//           alt="Smile After Treatment"
//           fill
//           className="object-cover"
//           priority
//         />
//         <span className="absolute bottom-4 right-4 bg-emerald-900/80 text-white text-xs px-3 py-1 rounded-full font-bold z-10 pointer-events-none">
//           AFTER
//         </span>

//         {/* BEFORE Image (Top Layer clipped by state width) */}
//         <div
//           className="absolute inset-0 overflow-hidden"
//           style={{ width: `${sliderPosition}%` }}
//         >
//           {/* Inner div maintains fixed 600px width so image crops instead of shrinking */}
//           <div className="relative w-[600px] h-[350px] sm:h-[420px]">
//             <Image
//               src="/dr.jfif" 
//               alt="Smile Before Treatment"
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//           <span className="absolute bottom-4 left-4 bg-amber-500 text-emerald-950 text-xs px-3 py-1 rounded-full font-bold z-10 pointer-events-none">
//             BEFORE
//           </span>
//         </div>

//         {/* Divider Line & Handle Knob */}
//         <div
//           className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 pointer-events-none"
//           style={{ left: `${sliderPosition}%` }}
//         >
//           <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-amber-400 border-2 border-white rounded-full flex items-center justify-center shadow-lg text-emerald-950 font-bold">
//             ↔
//           </div>
//         </div>

//         {/* Invisible Drag Overlay */}
//         <input
//           type="range"
//           min="0"
//           max="100"
//           value={sliderPosition}
//           onChange={handleSliderChange}
//           className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
//           aria-label="Before and After Slider"
//         />
//       </div>
//     </section>
//   )
// }

"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function Smile() {
  const [position, setPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();

    const newPosition =
      ((clientX - rect.left) / rect.width) * 100;

    setPosition(Math.min(100, Math.max(0, newPosition)));
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    const handleMouseMove = (event: MouseEvent) => {
      updatePosition(event.clientX);
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-y-4 py-24">

      {/* TITLE */}
      <h1
        className="
          relative
          font-bold
          text-2xl
          text-emerald-800
          pb-2
          after:absolute
          after:bottom-0
          after:left-0
          after:h-[2px]
          after:w-[70px]
          after:bg-amber-200
        "
      >
        Smile Transformations
      </h1>

      {/* DESCRIPTION */}
      <p
        className="
          text-center
          text-[18px]
          font-medium
          text-emerald-600
        "
      >
        See the remarkable difference our expert dental care can make.
        <br />
        Before and after, the journey to your perfect smile begins here!
      </p>

      {/* BEFORE / AFTER BUTTONS */}
      <div className="mt-6 flex items-center gap-x-10">

        <button
          type="button"
          onClick={() => setPosition(0)}
          className={`
            text-sm
            font-bold
            transition-all
            duration-300
            ${
              position < 50
                ? "text-emerald-800"
                : "text-gray-400"
            }
          `}
        >
          BEFORE
        </button>

        <button
          type="button"
          onClick={() => setPosition(100)}
          className={`
            text-sm
            font-bold
            transition-all
            duration-300
            ${
              position >= 50
                ? "text-emerald-800"
                : "text-gray-400"
            }
          `}
        >
          AFTER
        </button>

      </div>

      {/* IMAGE COMPARISON */}
      <div
        ref={sliderRef}
        onTouchMove={handleTouchMove}
        className="
          relative
          mt-4
          h-[450px]
          w-[450px]
          max-w-[90vw]
          overflow-hidden
          rounded-xl
          select-none
          touch-none
          shadow-lg
        "
      >

        {/* =========================
            BEFORE IMAGE
        ========================== */}

        <Image
          src="/dr.jfif"
          alt="Smile before treatment"
          fill
          priority
          draggable={false}
          className="pointer-events-none object-cover"
        />

        {/* =========================
            AFTER IMAGE
        ========================== */}

        <div
          className="
            absolute
            left-0
            top-0
            h-full
            overflow-hidden
          "
          style={{
            width: `${position}%`,
          }}
        >
          <div className="relative h-[450px] w-[450px]">
            <Image
              src="/dr.jfif"
              alt="Smile after treatment"
              fill
              priority
              draggable={false}
              className="pointer-events-none object-cover"
            />
          </div>
        </div>

        {/* =========================
            DIVIDER
        ========================== */}

        <div
          className="
            absolute
            top-0
            h-full
            w-[2px]
            -translate-x-1/2
            cursor-ew-resize
            bg-white
            shadow-md
          "
          style={{
            left: `${position}%`,
          }}
          onMouseDown={handleMouseDown}
        >

          {/* HANDLE */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-12
              w-12
              -translate-x-1/2
              -translate-y-1/2
              cursor-ew-resize
              items-center
              justify-center
              rounded-full
              border-2
              border-white
              bg-white
              text-lg
              font-bold
              text-emerald-800
              shadow-lg
            "
          >
            ↔
          </div>

        </div>

      </div>

    </section>
  );
}