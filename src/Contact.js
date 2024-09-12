import { useState } from "react";
import styled from "styled-components";

const Contact = () => {
  const [user, setUser] = useState({name:'', email:'', desc:''});

  const {name, email, desc} = user;

  const handelChange=(e)=>{
    setUser({...user, [e.target.name]: e.target.value })
  }

  const handelSubmit=(e)=>{
    e.preventDefault();
    console.log(user);
    setUser({name:'', email:'', desc:''})
  }

  return <Wrapper>
    <h1 className="common-heading">Contacts</h1>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.142086501156!2d90.42166437592898!3d23.813545986348124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fb95f16c1%3A0xb333248370356dee!2z4Kav4Kau4KeB4Kao4Ka-IOCmq-Cmv-CmieCmmuCmvuCmsCDgpqrgpr7gprDgp43gppU!5e0!3m2!1sbn!2sbd!4v1717002107675!5m2!1sbn!2sbd" 
    width="100%" 
    height="450" 
    style={{ border:0}}
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">
        <form action="" onSubmit={handelSubmit} className="contact-inputs">
            <input type="text" name="name" required value={name} placeholder="name" onChange={handelChange}/>
            <input type="email" name="email" required value={email} placeholder="Email" onChange={handelChange}/>
            <textarea type="text" name="desc" required value={desc} placeholder="description" onChange={handelChange}/>
            <input type="submit" value="send" onClick={handelSubmit}/>
        </form>
      </div>
    </div>

    </Wrapper>;
};

const Wrapper = styled.section`
height: 100%;
  padding: 9rem 0 5rem 0;
  text-align: center;
  margin-bottom: 6rem;

  .container {
    margin-top: 6rem;
    

    .contact-form {
      max-width: 50rem;
      margin: auto;
      align-items: center;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;
          margin-bottom: 6rem;
          

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
