import { CalendarDays, Gift, Info, Tag } from "lucide-react";

export default function Promo() {
  return (
    <div className="flex flex-col gap-4 font-sans overflow-x-auto">
      {/* Alpha Capital Card */}
      {[1, 2, 3].map(() => (
        <div className="relative flex flex-col md:flex-row items-start md:items-center rounded-xl border border-[#2a2a2a] bg-[#121212] p-4">
          <div className="absolute -left-1 top-4 h-12 w-3 rounded-r-full bg-[#8a2be2] hidden md:block"></div>

          {/* Left Section - Discount */}
          <div className="relative mb-4 md:mb-0 md:mr-6 flex h-[72px] w-full md:w-[180px] flex-col items-center justify-center rounded-lg border border-[#3d2952] bg-gradient-to-r from-[#1e0a2e] to-[#2a1139] px-4 py-3">
            <div className="absolute -left-1 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#8a2be2]">
              <Gift className="h-4 w-4 text-white" />
            </div>
            <div className="text-2xl font-bold text-[#d252ff]">20% OFF</div>
            <div className="flex items-center gap-1 text-xs text-[#ffa726]">
              <Gift className="h-3 w-3" />
              <span>+ FREE ACCOUNT</span>
            </div>
          </div>

          {/* Middle Section - Company Info */}
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="h-16 w-16 overflow-hidden rounded-lg bg-[#0039cb]">
              <div className="flex h-full w-full items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  className="text-white"
                >
                  <path
                    fill="currentColor"
                    d="M12 2L4 12l8 10 8-10L12 2zm0 3.5L17.5 12 12 18.5 6.5 12 12 5.5z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <div className="text-lg font-semibold text-white">
                Alpha Capital
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-8 items-center justify-center rounded bg-[#2a2a2a] text-sm font-medium text-white">
                  4.4
                </span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      className={`${i < 4 ? "text-[#ffa726]" : "text-[#555]"}`}
                    >
                      <path
                        fill="currentColor"
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                      />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-[#d252ff]">637</span>
              </div>
            </div>
          </div>

          {/* Right Section - Actions */}
          <div className="flex flex-wrap items-center justify-between w-full md:justify-end md:ml-auto md:w-auto gap-3 md:gap-4">
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2a2a2a] order-1 md:order-1">
              <Info className="h-4 w-4 text-white" />
            </button>

            <div className="flex flex-col items-start md:items-end gap-2 order-3 md:order-2">
              <div className="rounded-full border border-dashed border-[#d252ff] px-3 py-1">
                <div className="flex items-center gap-1 text-sm">
                  <span className="text-[#888]">Code</span>
                  <span className="font-semibold text-white">MATCH</span>
                  <Tag className="h-3.5 w-3.5 text-[#d252ff]" />
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm text-[#888]">
                <CalendarDays className="h-3.5 w-3.5" />
                <span>Ends Mar 31</span>
              </div>
            </div>

            <button className="rounded-full bg-gradient-to-r from-[#c239ea] to-[#e534a6] px-6 py-2 font-medium text-white order-2 md:order-3">
              Buy
            </button>
          </div>
        </div>
      ))}

      {/* Blueberry Funded Card */}
      {[1, 2, 3].map(() => (
         <div className="relative flex flex-col md:flex-row items-start md:items-center rounded-xl border border-[#2a2a2a] bg-[#121212] p-4">
         <div className="absolute -left-1 top-4 h-12 w-3 rounded-r-full bg-[#8a2be2] hidden md:block"></div>
 
         {/* Left Section - Discount */}
         <div className="relative mb-4 md:mb-0 md:mr-6 flex h-[72px] w-full md:w-[180px] flex-col items-center justify-center rounded-lg border border-[#3d2952] bg-gradient-to-r from-[#1e0a2e] to-[#2a1139] px-4 py-3">
           <div className="absolute -left-1 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#8a2be2]">
             <Gift className="h-4 w-4 text-white" />
           </div>
           <div className="text-2xl font-bold text-[#d252ff]">25% OFF</div>
           <div className="flex items-center gap-1 text-xs text-[#ffa726]">
             <Gift className="h-3 w-3" />
             <span>+ FREE ACCOUNT</span>
           </div>
         </div>
 
         {/* Middle Section - Company Info */}
         <div className="flex items-center gap-3 mb-4 md:mb-0">
           <div className="h-16 w-16 overflow-hidden rounded-lg bg-[#7c4dff]">
             <div className="flex h-full w-full items-center justify-center">
               <span className="text-2xl font-bold text-white">B</span>
             </div>
           </div>
           <div>
             <div className="text-lg font-semibold text-white">Blueberry Funded</div>
             <div className="flex items-center gap-2">
               <span className="flex h-6 w-8 items-center justify-center rounded bg-[#2a2a2a] text-sm font-medium text-white">
                 4.0
               </span>
               <div className="flex">
                 {[1, 2, 3, 4, 5].map((star, i) => (
                   <svg
                     key={i}
                     viewBox="0 0 24 24"
                     width="16"
                     height="16"
                     className={`${i < 4 ? "text-[#ffa726]" : "text-[#555]"}`}
                   >
                     <path
                       fill="currentColor"
                       d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                     />
                   </svg>
                 ))}
               </div>
               <span className="text-sm text-[#d252ff]">32</span>
             </div>
           </div>
         </div>
 
         {/* Right Section - Actions */}
         <div className="flex flex-wrap items-center justify-between w-full md:justify-end md:ml-auto md:w-auto gap-3 md:gap-4">
           <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2a2a2a] order-1 md:order-1">
             <Info className="h-4 w-4 text-white" />
           </button>
 
           <div className="flex flex-col items-start md:items-end gap-2 order-3 md:order-2">
             <div className="rounded-full border border-dashed border-[#d252ff] px-3 py-1">
               <div className="flex items-center gap-1 text-sm">
                 <span className="text-[#888]">Code</span>
                 <span className="font-semibold text-white">MATCH25</span>
                 <Tag className="h-3.5 w-3.5 text-[#d252ff]" />
               </div>
             </div>
             <div className="flex items-center gap-1 text-sm text-[#888]">
               <CalendarDays className="h-3.5 w-3.5" />
               <span>Ends Mar 31</span>
             </div>
           </div>
 
           <button className="rounded-full bg-gradient-to-r from-[#c239ea] to-[#e534a6] px-6 py-2 font-medium text-white order-2 md:order-3">
             Buy
           </button>
         </div>
       </div>
      ))}
    </div>
  );
}
