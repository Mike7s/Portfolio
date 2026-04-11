import { motion } from "framer-motion";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen scroll-mt-[80px] flex items-center justify-center bg-[#F8FAFC]"
    >
      <motion.div
        className="grid place-items-center"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        
      >
        <h1 className="text-8xl text-[#f96c38] font-[Open_Sans] font-bold">
          Hello, I'm Mike!
        </h1>

        <h2 className="text-6xl mt-16 text-[#f96c38] font-[Open_Sans]">
          FRONTEND <br /> DEVELOPER.
        </h2>

        <img
          className="w-48 h-48 rounded-full mt-10"
          src="/img/MicheleCurriculum.jpg"
          alt="avatar"
        />
      </motion.div>
    </section>
  );
}

export default Home;
