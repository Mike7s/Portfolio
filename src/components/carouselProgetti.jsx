import ProgettiCarousel from "./Progetti";
import { motion } from "framer-motion";

function Progetti() {
  return (
    <section
      className="min-h-screen scroll-mt-28 flex flex-col items-center bg-[#F8FAFC] px-4 py-16"
      id="progetti"
    >
      <motion.div
        className="grid place-items-center text-center w-full"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <h1 className="font-bold text-3xl sm:text-4xl text-[#f96c38]">
          I miei progetti
        </h1>

        <p className="text-base sm:text-xl md:text-2xl text-[#0F172A] pt-4">
          Questa è una selezione di alcuni dei miei progetti
        </p>

        <ProgettiCarousel />

        <p className="font-[Open_Sans] text-base sm:text-xl md:text-2xl text-[#0F172A] text-center">
          Per vedere tutti i miei progetti clicca{" "}
          <a
            href="https://github.com/Mike7s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            qui
          </a>
          .
        </p>
      </motion.div>
    </section>
  );
}

export default Progetti;