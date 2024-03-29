import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../helpers/FormatPrice';

const product = (curElem) => {
    const{id,name,category,image,price}=curElem;
  return (
    <NavLink to=
        {`/singleproduct/${id}`}>
            <div className="card">
                <figure>
                    <img src={image} alt={name}/>
                    <figcaption className='caption'>{category}</figcaption>
                    </figure>
                    <div className="card-data">
                        <div className="card-data-flex">
                            <h3>{name}</h3>
                            <div className="card-data--price">{<FormatPrice price={price} />}</div>
                        </div>
                    </div>
            </div>
    </NavLink>
  )
}

export default product;