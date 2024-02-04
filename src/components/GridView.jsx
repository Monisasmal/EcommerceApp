import React from 'react'
import Product from './product'
import styled from 'styled-components'

const GridView = ({products}) => {
  return (
    <Wrapper className="section">
      <div className='container grid grid-three-column'>
        {
            products.map((curElem)=>{
            return <Product key={curElem.id} {...curElem} />
            })
        }
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
padding: 4rem 0;

.container{
  max-width:120rem;
}

.grid{
  gap:3.2rem;
}

figure{
  width:auto;
  display: flex;
  justify-content: center;
  align-items:center;
  position: relative;
  overflow: hidden;
  transition: all 0.5s linear;

  &:: after{
    content: "";
    position: absolute;
    top:0;
    left:0;
    width:0%;
    height:100%;
    background-color: rgba(0,0,0,0.5);
    transition: all 0.5s linear;
    cursor: pointer;
  }
  &: hover::after{
    width:100%;
  }
  &:hover img{
    transform: scale(1.2);
  }
  img{
    max-width:90%;
    margin-top: 1.5rem;
    height:20rem;
    transition: all 0.2 linear;
  }
}

.card{
  background-color: ${({theme})=>theme.colors.bg};
  border-radius: 1rem;

.card-data{
  padding: 0rem 1rem;
}
.card-data-flex{
  margin: 2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
}
.card-data--price{
  color: ${({theme})=>theme.colors.helper};
  font-size: 1.5rem;
}

h3{
  color: ${({theme})=>theme.colors.text};
  text-transform: capitalize;
}
.btn{
  margin: 2rem auto;
  background-color: reg(0 0 0 / 0%);
  border: 0.1rem solid rgb(98 84 243);
  display: flex;
  justify-content:center;
  align-items: center;

  &:hover{
    background-color: rgb(98 84 243);
  }
   &:hover a{
    color: #fff;
   }

   a{
    color: rgb(98 84 243);
    font-size: 1.4rem;
   }
}
}

`

export default GridView