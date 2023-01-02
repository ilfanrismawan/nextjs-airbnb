import React from "react";
import MediumCard from "../../components/MediumCard";
async function getData() {
  const res = await fetch("https://www.jsonkeeper.com/b/5NPS");
  return res.json();
}

async function page(searchResults: any) {
  const data = await getData();
  return (
    <div>
      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
        {searchResults.map(({ img, title }: any) => (
          <MediumCard key={img} img={img} title={title} />
        ))}
      </div>
    </div>
  );
}

export default page;
