import './ProductList.css'
import React from 'react'
import Product from '../Product/Product'
import img1 from '../../Images/a.png'
import img2 from '../../Images/2.png'
import img3 from '../../Images/3.png'
import img4 from '../../Images/4.png'
import img5 from '../../Images/5.png'
import img6 from '../../Images/6.png'
export default function ProductList() {
    return (
        <div className='pl'>
            <div className="pl">
                <div className="pl-texts">
                    <h1 className="pl-title">Create & inspire. It's Lama</h1>
                    <p className="pl-desc">
                        Lama is a creative portfolio that your work has been waiting for.
                        Beautiful homes, stunning portfolio styles & a whole lot more awaits
                        inside.
                    </p>
                </div>
                <div className="pl-list">

                    <Product link={'http://lama.dev'} img={img1} />
                    <Product link={'http://lama.dev'} img={img2} />
                    <Product link={'http://lama.dev'} img={img3} />
                    <Product link={'http://lama.dev'} img={img4} />
                    <Product link={'http://lama.dev'} img={img5} />
                    <Product link={'http://lama.dev'} img={img6} />


                </div>
            </div>
        </div>
    )
}
