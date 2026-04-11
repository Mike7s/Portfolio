import { motion } from "framer-motion";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen scroll-mt-28 flex items-center justify-center bg-[#F8FAFC] px-4 pt-28 pb-10"
    >
      <motion.div
        className="grid place-items-center text-center"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#f96c38] font-[Open_Sans] font-bold leading-tight">
          Hello, I&apos;m Mike!
        </h1>

        <h2 className="mt-6 sm:mt-10 md:mt-12 text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f96c38] font-[Open_Sans] leading-tight">
          FRONTEND <br /> DEVELOPER.
        </h2>

        <img
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mt-8 sm:mt-10 object-cover"
          src="/img/MicheleCurriculum.jpg"
          alt="avatar"
        />
      </motion.div>
    </section>
  );
}

export default Home;