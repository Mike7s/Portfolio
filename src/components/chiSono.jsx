import { motion } from "framer-motion";

function ChiSono() {
  return (
    <section className="h-[calc(100vh-80px)] scroll-mt-20  flex flex-col items-center justify-center bg-[#F8FAFC]  " id="chiSono">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.4 }} 
        className="bg-white p-8 rounded-xl shadow-2xl max-w-3xl text-center "
      >
        <h1 className="text-[#f96c38] leading-relaxed text-4xl font-bold font-[Open_Sans]">
          Mi presento
        </h1>
        <p className="text-[#0F172A] font-[Open_Sans] w-100 pt-10 text-2xl">
          Sono uno sviluppatore front-end appassionato di tecnologia e
          innovazione. <br /> <br /> Il mio obiettivo non è solo scrivere
          codice, ma trasformarlo in soluzioni digitali che danno vita alle idee
          e risolvono problemi reali.
          <br /> <br /> Hai bisogno di una landing page accattivante, di un sito
          web strutturato o di una presenza online ottimizzata? Posso aiutarti a
          realizzare il tuo progetto.
        </p>
      </motion.div>
    </section>
  );
}

export default ChiSono;
