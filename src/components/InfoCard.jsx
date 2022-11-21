
const InfoCard = (props) => {
    return (
        <div className="col-xs-11 col-sm-11 col-md-3 border rounded h-96 mt-16 md:w-80 w-[90vw] p-4">
            <div className="flex flex-col items-center justify-center ">
                <div>
                    <img className="h-[200px] w-auto" src={props.image} alt="find-home" />
                </div>
                <div className=" mt-4">
                    <h3 className="text-2xl font-bold">{props.title}</h3>
                </div>
                <div className="mt-2">
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoCard