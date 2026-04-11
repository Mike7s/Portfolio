import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contatti() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_portfolio_id",
        "template_byen6k4",
        form.current,
        "19HU4SWX-_qfx20Bw"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Messaggio inviato con successo!");
          form.current.reset();
        },
        (error) => {
          console.log("Failed", error.text);
          alert("Messaggio non inviato");
        }
      );
  };

  return (
    <section
      id="contatti"
      className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC] px-4 py-16"
    >
      <motion.div
        className="grid place-items-center w-full max-w-2xl"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-[#f96c38] mb-6 font-[Open_Sans]">
          Contattami
        </h1>

        <p className="text-[#0F172A] mb-6 text-base sm:text-xl md:text-2xl font-[Open_Sans] text-center">
          Scrivimi! Sarò felice di ascoltare le tue idee e aiutarti a
          svilupparle.
        </p>

        <form ref={form} onSubmit={sendEmail} className="mt-8 sm:mt-12 w-full max-w-lg">
          <div>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              name="nome"
              required
              className="border border-gray-300 mb-2 rounded-md p-2 w-full mt-3 bg-gray-200"
              placeholder="Inserisci il tuo nome"
            />
          </div>

          <div>
            <label htmlFor="cognome">Cognome</label>
            <input
              type="text"
              name="cognome"
              required
              className="border border-gray-300 mb-2 rounded-md p-2 w-full mt-3 bg-gray-200"
              placeholder="Inserisci il tuo cognome"
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              required
              className="border border-gray-300 rounded-md p-2 w-full mt-3 bg-gray-200"
              placeholder="Inserisci la tua email"
            />
          </div>

          <div>
            <label htmlFor="message"></label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="border border-gray-300 rounded-md p-2 w-full mt-3 bg-gray-200"
              placeholder="Scrivi il tuo messaggio qui..."
            ></textarea>

            <button
              type="submit"
              className="mt-4 bg-[#f96c38] py-2 px-4 rounded-md w-full text-white font-medium"
            >
              Invia
            </button>
          </div>
        </form>

        <ul className="space-y-4 text-lg sm:text-2xl text-[#0F172A] mt-6">
          <li className="flex items-center gap-4">
            <FaLinkedin className="text-blue-600 text-2xl sm:text-3xl" />
            <a
              href="https://www.linkedin.com/in/michele-simonetti-b88877350"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-600"
            >
              LinkedIn
            </a>
          </li>

          <li className="flex items-center gap-4">
            <FaGithub className="text-black text-2xl sm:text-3xl" />
            <a
              href="https://github.com/mike7s"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-gray-700"
            >
              GitHub
            </a>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}

export default Contatti;