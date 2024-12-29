import rectangleImg from '../../assets/Rectangle 68.png'
const HostTitle = ({title}) => {
    return (
        <div className='mb-12'>
            <h2 className="text-3xl font-bold  mb-5 max-w-[250px]">{title}</h2>
            <img src={rectangleImg} alt="" />
        </div>
    );
};

export default HostTitle;