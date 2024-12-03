import React from 'react';

export function Background() {
  return (
    <>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,#2D3436_0%,#000000_100%)] opacity-40" />
      <div className="fixed inset-0">
      <div
  className="absolute inset-0 bg-[linear-gradient(to_right,#4ECDC408_1px,transparent_1px),linear-gradient(to_bottom,#4ECDC408_1px,transparent_1px)] bg-[size:37px_37px] bg-center transform translate-x-[-50%] translate-y-[-50%]"
  style={{
    width: "200%",
    height: "200%",
    top: "50%",
    left: "50%",
    position: "absolute",
  }}
/>

        
        {/* Halo 1 */}
        <div
          className="opacity-25 absolute inset-0 bg-[radial-gradient(circle_1000px_at_100%_200px,#4ECDC430,transparent)] "
        />
        
        {/* Halo 2 */}
        <div
          className="opacity-40 absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_800px,#A8E6CF30,transparent)] "
        />
      </div>
    </>
  );
}
