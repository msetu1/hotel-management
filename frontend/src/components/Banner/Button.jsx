
const Button = ({buttonName}) => {
    return (
        <div>
            <button className="bg-rose-500 hover:bg-black text-[16px] font-bold rounded-full w-[205px] py-3  text-white">{buttonName}</button>
        </div>
    );
};

export default Button;