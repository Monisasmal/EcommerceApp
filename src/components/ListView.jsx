import React from 'react'
import styled from 'styled-components'
import FormatPrice from '../helpers/FormatPrice';
import { NavLink } from 'react-router-dom';
import {Button} from '../styles/button';

const ListView = ({products}) => {
  return (
    <Wrapper className='section'>
        <div className='container grid'>
            {products.map((curElem)=>{
             const {id, name, image, price, description} = curElem;

             return(
                <div className='card grid grid-two-column'>
                    <figure>
                        <img src={image} alt={name}/>
                    </figure>

                    <div className='card-data'>
                        <h3>{name}</h3>
                        <p>
                            <FormatPrice price = {price} />
                        </p>
                        <p className='desc-data'>{description.slice(0,90)}.....</p>

                        <NavLink to= {`/singleproduct/${id}`}>
                            <Button>Read More</Button>
                        </NavLink>
                    </div>
                </div>
             )
            })}
        </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`

padding: 9rem 0;

  .container {
    max-width: 120rem;
  }

  .grid {
    gap: 2.2rem;
  }

  figure{
    width: auto;
    display: flex;
    justify-content:center;
    align-items: center;
    position: relative;
    transition: all 0.5s linear;
    over-flow:hidden;

    &:: after{
      content: "";
      position: absolute; 
      top: 0;
      left:0;
      height: 100%;
      width: 0; 
      background-color: rgba( 0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    
    img {
      max-width: 90%;
      margin-top: 1rem;
      height: 20rem;
      transition: all 0.2s linear;
      
    }
  
  }

  .card{
    border: 0.1rem solid rgb(170 170 170 / 80%);
    width: 75%;
    padding-bottom: 1.2rem;
  }
  .card-data{
    padding: 2rem 0;
  }
  .desc-data{
    margin: 1rem 0;
  }

  h3{
    margin: 1rem 0;
    font-width: 300;
    font-size: 2.4rem;
    text-transform: capitalize;
  }
  .btn{
    margin: 2rem 0;
    background-color: rgb(0 0 0 /0%);
    border: 0.1rem solid rgb(98 84 243);
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(98 84 243);

    &:hover{
      background-color: rgb(98 84 243)
    }
     &:hover a{
      color: #fff;
     }
     a {
      color: rgb(98 84 243);
      font-size: 1.4rem;
    }
  }

  .btn-main .btn:hover {
    color: #fff;
  }

  }

`

export default ListView