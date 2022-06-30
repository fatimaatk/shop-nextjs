import React, { useState } from "react";
import Link from "next/link";

const SearchBar = () => {
  const [result, setResult] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResult(e.target.value);
  };

  return (
    <div className="col-sm-4">
      <input
        value={result}
        onChange={handleSearch}
        type="text"
        style={{ marginTop: "30px", width: "60%" }}
        placeholder="Search products..."
      />

      <Link
        href={`/search/${result}`}
        // onClick={() => setResult("")}
      >
        <button
          style={{
            background: "none repeat scroll 0 0 #5a88ca",
            border: "medium none",
            color: "#fff",
            padding: "11px 20px",
            textDecoration: "none",
          }}
        >
          SEARCH
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;
