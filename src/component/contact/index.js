import React from "react";
import { useState } from "react";
import '../../assets/css/styles.css';
import MessageBox from '../messagebox/index';

export default function Contact(){
     
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const botToken = "8252941556:AAHrlKErH_ySXmpBHAJdCYIPdw6lCvO6Rwc";
    const chatId = "1818103587";
    const text = `📩 New Message from Portfolio:\n\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n💬 Message: ${formData.message}`;

    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    setShowMessage(true); // show message box
    setTimeout(() => setShowMessage(false), 3000); // hide after 3s
    setFormData({ name: "", email: "", message: "" }); // clear form
  };
    return(
        <section class="contact section" id="contact">
            <sapn class="section__subtitle">Get in touch</sapn>
            <h3 class="section__title">Contact Me</h3>

            <div class="contact__container container grid">
                <div class="contact__content">
                    <h3 class="contact__title contact__title-info">Talk to me</h3>

                    <div class="contact__info">
                        <div class="contact__card">
                            <i class='bx bx-mail-send contact__card-icon'></i>
                            <h3 class="contact__card-title">Email</h3>
                            <span class="contact__card-data">user@gmail.com</span>

                            <a href="mailto:khinhninhtet447@gmail.com" target="_blank" rel="noopener noreferrer" class="contact__button">
                                Write Me <i class='bx bx-right-arrow contact__button-icon'></i>
                            </a>
                        </div>

                        <div class="contact__card">
                            <i class='bx bxl-whatsapp contact__card-icon'></i>
                            <h3 class="contact__card-title">Phone No.</h3>
                            <span class="contact__card-data">+959 775 784 683</span>

                            <a href="+959775784683" target="_blank" rel="noopener noreferrer"
                                class="contact__button">
                                Call Me <i class='bx bx-right-arrow contact__button-icon'></i>
                            </a>
                        </div>

                        <div class="contact__card">
                            <i class='bx bxl-twitter contact__card-icon'></i>
                            <h3 class="contact__card-title">Telegram</h3>
                            <span class="contact__card-data">@KhinHnin21</span>

                            <a href="https://t.me/KhinHnin21" target="_blank" rel="noopener noreferrer" class="contact__button">
                                Write Me <i class='bx bx-right-arrow contact__button-icon'></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="contact__content">
                    <h3 class="contact__title contact__title-form">Write Me your Message</h3>

                     <form onSubmit={handleSubmit} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name"
                className="contact__form-input"
                required
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="contact__form-input"
                required
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                cols="30"
                rows="10"
                placeholder="Write your message"
                className="contact__form-input"
                required
              />
            </div>

            <button type="submit" className="button">
              Send Message
            </button>
          </form>

                </div>
            </div>
            <MessageBox message="✅ Message sent successfully!" show={showMessage} />

        </section>
    )
}