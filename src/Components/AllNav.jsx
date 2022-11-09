import React from "react";

export const AllNav = () => {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/favorite" element={<Favorites />} />
      </Routes>
    </div>
  );
};
