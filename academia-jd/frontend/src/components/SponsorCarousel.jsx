import { motion } from "framer-motion";
import bt from "../assets/sponsors/teste.png";
import ca from "../assets/sponsors/teste.png";
import fm from "../assets/sponsors/teste.png";
import wc from "../assets/sponsors/teste.png";
import gv from "../assets/sponsors/teste.png";

const logos = [bt, ca, fm, wc, gv];

export default function SponsorCarousel() {
  return (
    <div className="w-full bg-black py-6 overflow-hidden">
      <motion.div
        className="flex gap-16 items-center"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`sponsor-${index}`}
            className="h-24 object-contain opacity-70 hover:opacity-100 transition duration-300"
          />
        ))}
      </motion.div>
    </div>
  );
}
