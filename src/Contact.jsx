import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";


const Contact = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <Wrapper>
      <h3 className="common-heading">Contact ME</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14969.115080344136!2d85.8381207333554!3d20.28872517544756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a02602a6077%3A0xf05e2bdfacc51ae9!2sSaheed%20Nagar%2C%20Bhubaneswar%2C%20Odisha%20751007!5e0!3m2!1sen!2sin!4v1701079774689!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="container">
        <div className="contact-form">
          <form
            className="contact-inputs"
            action="https://formspree.io/f/xpzggdkv"
            method="POST"
          >
            <input
              className="input"
              type="text"
              placeholder="username"
              value={isAuthenticated ? user.name : ""}
              name="username"
              required
              autoComplete="off"
            />
            <input
              className="input"
              type="text"
              placeholder="Email"
              value={isAuthenticated ? user.email : ""}
              name="Email"
              required
              autoComplete="off"
            />
            <textarea
              className="input"
              name="Message"
              cols="10"
              rows="10"
              required
              placeholder="Enter your Message"
            />
            <input className="input" type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        .input {
          padding: 2rem;
          border-radius: 1rem;
        }

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;
          text-align: center;
          align-items: center;
          justify-content: center;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export default Contact;
