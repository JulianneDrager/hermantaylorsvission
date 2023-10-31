import React from 'react'
import ContactStyle from "./contact.module.css"

function Contact() {
    const contactForm = ContactStyle.contactForm
    const contactFlex = ContactStyle.contactFlex
    const contacth1 = ContactStyle.contacth1
    const formContent = ContactStyle.formContent
    const formInput = ContactStyle.formInput
    const submitBtn = ContactStyle.submitBtn
  return (
    <div>
        <form className={contactForm}>
            <h1 className={contacth1}>Contact Us</h1>
            <div className={formContent}>
            <div className={contactFlex}>
            <label>Name</label>    
            <input className={formInput}  type='text' name='name'required/>
            </div>
            <div className={contactFlex}>
            <label>Phone Number</label> 
            <input className={formInput} type='tel' name='tel' required/>
            </div>
            <div className={contactFlex}>
            <label>Email Address</label> 
            <input className={formInput} type='email' name='email' required/>
            </div>
            <div className={contactFlex}>
            <button type='submit'className={submitBtn}>Submit</button> 
            </div>
             
            </div>
        </form>
    </div>
  )
}

export default Contact