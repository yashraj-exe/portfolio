import './Product.css'

const Product = ({img,link}) => {
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} rel="noreferrer" target="_blank">
                <img className='p-img' src={img} alt="" />
            </a>
        </div>
    )
}

export default Product