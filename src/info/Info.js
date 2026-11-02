import self from "../img/self.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Fanqi",
    lastName: "Lin",
    initials: "fl",
    position: "an MSCE Student at Northwestern University",
    selfPortrait: self,
    resume: "/resume.pdf", // Put your resume PDF in the 'public' folder
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🌎',
            text: 'Based in Evanston, IL, U.S.'
        },
        {
            emoji: "📖",
            text: "MSCE @ Northwestern University"
        },
        {
            emoji: "📮",
            text: "fanqilinn@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/lfq0921",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/fanqi-lin/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
    ],
    bio: "Hello! I'm Fanqi, an MSCE student at Northwestern University with a B.S. in Computer Science from Nanjing University. I have hands-on experience as an AI Engineer Intern and a strong background in high-performance computing, parallel systems, and full-stack development. I'm passionate about building scalable systems and leveraging AI to solve complex problems.",
    skills: {
        'Languages': ['C/C++', 'Python', 'Go', 'Java', 'SQL', 'Verilog', 'LaTeX'],
        'AI & Systems': ['Distributed Systems', 'HPC (OpenMP)', 'RAG', 'LLM Agents', 'PyTorch', 'Linux Kernel', 'Computer Architecture'],
        'Infrastructure & Tools': ['Docker', 'Git', 'CMake', 'Vim', 'VS Code', 'Qt', 'Conda', 'Linux Shell (Bash/Zsh)']
    },
    hobbies: [
        {
            label: 'photography',
            emoji: '📷'
        },
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'debate',
            emoji: '🗣️'
        },
        {
            label: 'coding',
            emoji: '💻'
        }
    ],
    // Journey: Education & Experience combined, sorted by most recent first
    journey: [
        // Education
        {
            type: "education",
            startDate: "Sep 2025",
            endDate: "Expected Jun 2027",
            title: "Master of Science in Computer Engineering (MSCE)",
            company: "Northwestern University",
            location: "Evanston, Illinois, U.S.",
            description: "",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Northwestern_Wildcats_logo.svg/1200px-Northwestern_Wildcats_logo.svg.png"
        },
        {
            type: "education",
            startDate: "Sep 2021",
            endDate: "Jun 2025",
            title: "B.S. in Computer Science, Kuangyaming Honors School",
            company: "Nanjing University",
            location: "Nanjing, Jiangsu, China",
            description: "",
            logo: "/Nanjing_University-logo.svg"
        },
        {
            type: "education",
            startDate: "Jan 2024",
            endDate: "May 2024",
            title: "Exchange Student in Computer Science",
            company: "University of California, Berkeley",
            location: "Berkeley, California, U.S.",
            description: "",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png"
        },
        // Experience
        {
            type: "experience",
            startDate: "Jun 2024",
            endDate: "Aug 2024",
            title: "AI Engineer Intern",
            company: "Nanjing Research Institute",
            location: "Nanjing, China",
            description: "Conducted cross-language functional audits for a Network-level Load Balancing (NSLB) system. Identified and resolved implementation discrepancies in GPU load distribution logic. Optimized code review workflow by implementing segment-based analysis.",
            logo: ""
        }
    ],
    // Projects from resume
    portfolio: [
        {
            title: "GPU-Accelerated Stereo Vision & Depth Estimation System",
            date: "Jan 2026 - Present",
            description: "Designing a high-performance stereo matching pipeline to compute 3D depth maps from 2D image pairs. Parallelizing the Stereo Rectification and patch-matching processes by offloading computationally intensive cost calculations (SAD) to GPU kernels. Optimizing GPU throughput by implementing Coalesced Memory Access patterns and leveraging shared memory to minimize global memory latency.",
            skills: ["CUDA", "C++", "OpenCV", "GPU Programming", "Stereo Vision"]
        },
        {
            title: "Legal-RAG Agent: Standardized Benchmark & Efficient LLM System",
            date: "Nov 2025 - Present",
            description: "Engineered a standardized evaluation oracle bridging the LegalAgentBench dataset with the A2A protocol, ensuring interoperability and reproducible scoring for legal LLM agents. Architected a Hybrid-RAG system using Voyage 3 Large Embeddings and Matryoshka Representation Learning, achieving an 85% reduction in token usage while supporting 32k context windows. Developed HalluGraph, a novel graph-based audit system that maps agent reasoning steps against a Ground Truth Knowledge Graph to detect subtle semantic hallucinations.",
            skills: ["LLM", "RAG", "Python", "LangChain", "Knowledge Graph", "NLP"]
        },
        {
            title: "Voice-Activated Intelligent Recipe Assistant",
            date: "Nov 2025 - Dec 2025",
            description: "Designed a microservices-based architecture consisting of 3 decoupled components (Voice Client, Rasa Server, Action Server), communicating via RESTful APIs to ensure modularity and scalability. Engineered a robust backend handling 6 distinct query categories, including navigation, parameter extraction, and external API integration, fulfilling complex user requirements with 100% functional coverage.",
            skills: ["Rasa", "Python", "RESTful APIs", "Microservices", "NLU", "Speech Recognition"]
        },
        {
            title: "High-Performance Computing and Parallel Systems Development",
            date: "Sep 2025 - Dec 2025",
            description: "Designed and implemented a multi-process matrix multiplier using ProcessPoolExecutor, achieving near-linear speedup (~3.8× on 4 cores) via efficient task partitioning. Developed a concurrent BFS algorithm, engineering Mutexes and Atomic Operations for thread safety, demonstrating parallel efficiency of over 75%. Optimized image kernels using OpenMP reduction to solve race conditions, achieving ~5× performance improvement over the sequential baseline.",
            skills: ["C++", "OpenMP", "Python", "Parallel Computing", "Mutex", "Multi-threading"]
        },
        {
            title: "Secure File Sharing System",
            date: "Feb 2024 - Mar 2024",
            description: "Built a resilient file-sharing product with robust encryption and HMAC verification, ensuring data integrity in production-grade scenarios. Designed sophisticated permission management APIs to handle dynamic user revocation and access control.",
            skills: ["Go", "Cryptography", "HMAC", "Security", "API Design"]
        },
        {
            title: "Operating System",
            date: "Mar 2023 - Jun 2023",
            description: "Implemented page-based memory management with page tables, handling page faults and disk-RAM swapping. Developed kernel-level threads for parallel execution and cooperative multitasking with coroutines. Created debugging tools, including process tree printing, performance diagnostics, and an interactive shell.",
            skills: ["C", "Memory Management", "Kernel Development", "Multitasking", "Coroutines"]
        },
        {
            title: "Computer Systems Fundamentals",
            date: "Sep 2022 - Jan 2023",
            description: "Developed monitors for single-step execution, memory scanning, and expression evaluation. Implemented RISC-V CPU instructions and device-memory mappings for key peripherals. Built system calls, C library functions, and a file system to support executable programs. Introduced time-sharing multitasking on a single-core CPU.",
            skills: ["C", "RISC-V", "System Calls", "File System", "CPU Architecture"]
        }
    ]
}