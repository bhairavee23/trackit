const OptionCard = (props) => {
    return  (
        <div className="max-w-sm bg-white rounded-lg shadow-md hover:shadow-2xl overflow-hidden border m-6 mx-8">                       
                <div className="px-6 pb-6 pt-7">
                    <p className="text-sm text-gray-900 leading-sm text-center">
                        {props.cardDetails}
                    </p>
                </div>
            </div>
    )
}

export default OptionCard;