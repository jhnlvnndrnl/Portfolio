import { useEffect, useState } from "react";
import {
    FaDownload,
    FaGithub,
    FaEnvelope,
    FaLinkedinIn,
} from "react-icons/fa6";

export default function Home() {
    const words = ["Full-Stack Developer", "Project Manager", "Continuous Learner"];
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 60 : 230;

    let timeout;

    if (!isDeleting && charIndex === currentWord.length) {
        // Hold the word for 3 seconds before deleting
        timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
        // Move to the next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
    } else {
        timeout = setTimeout(() => {
            setText(currentWord.substring(0, charIndex + (isDeleting ? -1 : 1)));
            setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, typingSpeed);
    }

    return () => clearTimeout(timeout);
}, [charIndex, isDeleting, wordIndex]);

return (
    
    <div className="relative min-h-screen bg-[#000910] text-white font-[Poppins] overflow-x-hidden">
        {/* Ellipse */}
        <div className="absolute -top-70 -left-40 w-120 h-120 rounded-full bg-[#003A6B] opacity-20 blur-xl"></div>
        <div className="absolute bottom-40 right-90 w-80 h-80 rounded-full bg-[#003A6B] opacity-20 blur-xl"></div>

        {/* Hero */}
        <section className="text-center px-7 py-45 relative">
            
            <h2 className="text-1xl md:text-2xl text-gray-400 mb-6">I am Elvin</h2>

            {/* Typing Effect */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-300  bg-clip-text mb-9">
                {text}
                <span className="inline-block animate-blink font-medium">_</span>
            </h1>

            <div className="relative inline-block">
            {/* Stroke Aspiring text behind */}
                <h1 className="absolute top-[-78%] inset-0 flex items-center justify-center text-5xl md:text-7xl font-extrabold text-transparent opacity-30 [-webkit-text-stroke:1px_#305B94] select-none">
                    Aspiring
                </h1>
                {/* Foreground text */}
                <h1 className="relative text-4xl md:text-6xl font-bold text-gray-300 mb-8">
                    Software Engineer
                </h1>
            </div>

            <p className="max-w-xl mx-auto text-sm md:text-base text-gray-300 leading-relaxed mb-8">
            Curious problem-solver who loves breaking challenges into steps,
            finding root causes, and creating better solutions.
            </p>

        {/* Socials */}
        <div className="flex justify-center gap-5 mt-4">
            <a
            href="#"
            className="inline-flex items-center gap-2 border border-[#003A6B] px-6 py-3 rounded-md "
            >
                <FaDownload /> Download CV
            </a>
            <a
            href="#"
            className="flex items-center justify-center w-12 h-12 border border-[#003A6B] rounded-full text-xl text-[#305B94]"
            >
                <FaLinkedinIn />
            </a>
            <a
            href="#"
            className="flex items-center justify-center w-12 h-12 border border-[#003A6B] rounded-full text-xl text-[#305B94]"
            >
                <FaGithub />
            </a>
            <a
            href="#"
            className="flex items-center justify-center w-12 h-12 border border-[#003A6B        ] rounded-full text-xl text-[#305B94]"
            >
                <FaEnvelope />
            </a>
        </div>
        </section>
    </div>
    );
}
