import React from "react";
import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 100+ Companies</h3>
        <div className="brand-section-slider">
          <div className="slide">
            <img src="Images/company1.png" alt="companyLogo" />
          </div>

          <div className="slide">
            <img src="Images/company2.png" alt="companyLogo" />
          </div>

          <div className="slide">
            <img src="Images/company3.png" alt="companyLogo" />
          </div>

          <div className="slide">
            <img src="Images/company6.png" alt="companyLogo" />
          </div>

          <div className="slide">
            <img src="Images/company5.png" alt="companyLogo" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 7rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 5rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: semibold;
  }
  img {
    min-width: 5rem;
    height: 8rem;
  }
  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin: 3rem 12rem 0 12rem;
    padding: 0rem 15rem 0rem 15rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: center;
      margin: 0rem 0rem 0 0rem;
      padding: 5rem 0rem 5rem 0rem;
    }
  }
`;

export default Trusted;
// import styled from "styled-components";

// const Trusted = () => {
//   return (
//     <Wrapper className="brand-section">
//       <div className="container">
//         <h3>Trusted By 1000+ Companies</h3>
//         <div className="brand-section-slider">
//           {/* my 1st img  */}
//           <div className="slide">
//             <img
//               src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
//               alt="trusted-brands"
//             />
//           </div>
//           <div className="slide">
//             <img
//               src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
//               alt="trusted-brands"
//             />
//           </div>
//           <div className="slide">
//             <img
//               src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
//               alt="trusted-brands"
//             />
//           </div>
//           <div className="slide">
//             <img
//               src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
//               alt="trusted-brands"
//             />
//           </div>
//           <div className="slide">
//             <img
//               src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
//               alt="trusted-brands"
//             />
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 7rem 0;
//   background-color: ${({ theme }) => theme.colors.bg};

//   .brand-section {
//     padding: 5rem 0 0 0;

//   }
//   h3 {
//     text-align: center;
//     text-transform: capitalize;
//     color: ${({ theme }) => theme.colors.text};
//     font-size: 2rem;
//     font-weight: bold;
//   }

//   img {
//     min-width: 5rem;
//     height: 10rem;
//   }

//   .brand-section-slider {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-direction: row;
//     margin: 3rem 12rem 0 12rem;

//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .brand-section-slider {
//       margin-top: 3.2rem;
//       display: grid;
//       grid-template-columns: 1fr 1fr;
//       /* background-color: red; */
//       text-align: center;
//       margin: 3rem 0rem 0 0rem;
//     }
//   }
// `;

// export default Trusted;
