import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="grid w-52 grid-flow-col gap-2 rounded-xl border border-neutral-800 px-5 py-3 text-sm font-normal text-white transition duration-300">
      <Search size={20} className="text-neutral-600" />
      <input
        type="text"
        name="text"
        id="text"
        className="border-non text-neutral-400 focus:outline-none"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
