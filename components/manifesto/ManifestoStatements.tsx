"use client";

import FadeUp from "@/components/ui/FadeUp";
import Editorial from "../ui/typography/Editorial";

const statements = [
  <>
  <div className="space-y-5">
   This is more than clothing.
  </div>
    It is a <span className="italic">house</span> for people building
    <br />
    lives with purpose.
   
   
  </>,

  <>
    Every silhouette is intentional.
    <br />
     <p>Every detail has a reason.</p>
   <p> Every collection adds another <span className="italic">chapter.</span></p>
  </>,
];

export default function ManifestoStatements() {
  return (
    <div className="mt-8 mb-12 space-y-12">

      {/* Statement 1 */}
      <FadeUp>
         <div className="flex justify-center">
          <div className="max-w-2xl">
            <Editorial className="text-center max-w-2xl">
              {statements[0]}
            </Editorial>
          </div>
        </div>
      </FadeUp>

      {/* Statement 2 */}
      <FadeUp>
        <div className="">
          <div className="max-w-2xl">
            <Editorial className="text-left">
              {statements[1]}
            </Editorial>
          </div>
        </div>
      </FadeUp>

    </div>
  );
}