import { motion } from "framer-motion";

function ChiSono() {
  return (
    <section
      id="chiSono"
      className="min-h-screen scroll-mt-28 flex items-center justify-center bg-[#F8FAFC] px-4 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.4 }}
        className="bg-white w-full max-w-3xl rounded-xl shadow-2xl p-6 sm:p-8 text-center"
      >
        <h1 className="text-[#f96c38] leading-relaxed text-3xl sm:text-4xl font-bold font-[Open_Sans]">
          Mi presento
        </h1>

        <p className="text-[#0F172A] font-[Open_Sans] pt-6 sm:pt-10 text-base sm:text-lg md:text-2xl leading-relaxed">
          Sono uno sviluppatore front-end appassionato di tecnologia e
          innovazione.
          <br />
          <br />
          Il mio obiettivo non è solo scrivere codice, ma trasformarlo in
          soluzioni digitali che danno vita alle idee e risolvono problemi reali.
          <br />
          <br />
          Hai bisogno di una landing page accattivante, di un sito web
          strutturato o di una presenza online ottimizzata? Posso aiutarti a
          realizzare il tuo progetto.
        </p>
      </motion.div>
    </section>
  );
}

export default ChiSono;