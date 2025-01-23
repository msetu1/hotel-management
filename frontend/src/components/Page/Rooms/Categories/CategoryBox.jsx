import { useNavigate, useSearchParams} from "react-router-dom";
import queryString from "query-string";

const CategoryBox = ({ label, icon: Icon }) => {
   // eslint-disable-next-line no-unused-vars
   const [params, setParams] = useSearchParams();
   const category = params.get("category");
  const navigate = useNavigate();

  const handleClick = () => {
    // create query string
    const currentQuery = { category: label };
    const url = queryString.stringifyUrl({
      url: "/rooms",
      query: currentQuery,
    });
    // query string
    navigate(url);
  };
  return (
    <div
      onClick={handleClick}
      className={`flex 
  flex-col 
  items-center 
  justify-center 
  gap-2
  p-3
  border-b-2
  hover:text-neutral-800
  transition
  cursor-pointer ${
    category === label && "border-b-neutral-800 text-neutral-800"
  } `}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};
export default CategoryBox;
