import { motion } from "framer-motion"
import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import { cv, github, linkedin } from "../assets"

const Contact = () => {
  const formRef = useRef()
  const [form, setform] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setform({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      `${import.meta.env.VITE_SERVICE_ID}`,
      `${import.meta.env.VITE_TEMPLATE_ID}`,
      { from_name: form.name, to_name: "BlaZe", from_email: form.email, message: form.message, reply_to: form.email },
      `${import.meta.env.VITE_PUBLIC_KEY}`)
      .then(() => {
        setLoading(false)
        alert('Thank you. I will get back to you as soon as possible.')

        setform({ name: '', email: '', message: '' })
      }, (error) => {
        setLoading(false)
        console.log(error)

        alert('Something went wrong.')
      })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className="flex items-center justify-end gap-2">
          <a href="https://github.com/blaze1402" target="_blank" rel="noreferrer">
            <img src={github} alt="github" className="xs:w-7 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/blaze1402/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="linkedin" className="xs:w-7 w-6" />
          </a>
          <a href="https://drive.google.com/file/d/1Ks6WQEgDu4_ndvOHAI6CA2Ha1fscNI7L/view?usp=drive_link" target="_blank" rel="noreferrer">
            <img src={cv} alt="Resume" className="xs:w-6 w-5" />
          </a>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-6 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea rows="7" name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" required
            />
          </label>
          <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")