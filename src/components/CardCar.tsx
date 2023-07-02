interface IardCar{
    bodyType: string
    modelName: string
    modelType: string
    imageUrl: string
}

export function CardCar(props: IardCar){
    return(
        <div>
            <p>{props.bodyType}</p>
            <div>
                <p>{props.modelName}</p>
                <p>{props.modelType}</p>
            </div>
            <img src={props.imageUrl} alt={props.modelName} />
            <div>
                <a href="">LEARN</a>
                <a href="">SHOP</a>
            </div>
        </div>
    )
}