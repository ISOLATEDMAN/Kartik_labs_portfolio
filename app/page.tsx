"use client";

import { FadeInText, SlideInLeft, SlideInRight, SlideUp } from "@/components/scroll-animation";
import ThemeToggle from "@/components/theme-toggle";
import Link from "next/link";
import Image from "next/image";
import { TextShimmer } from "@/components/text-shimmer";
import { Typewriter } from "@/components/typewrites";
import { Mail, Twitter, Github, Linkedin, Play, Pause } from "lucide-react";
import { WorkItem } from "@/components/work-item";
import { AchievementItem } from "@/components/acheivments";
import { ProjectListItem } from "@/components/project-list-item";
import { Button } from "@/components/ui/button";
import { Dock } from "@/components/dock";
import { AgeCounter } from "@/components/age-counter";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="oneko.js"]');
    if (existingScript) {
      return;
    }

    // Add oneko cat
    const script = document.createElement('script');
    script.src = 'https://raw.githack.com/adryd325/oneko.js/14bab15a755d0e35cd4ae19c931d96d306f99f42/oneko.js';
    script.async = true;
    document.body.appendChild(script);

    // Try autoplay first
    const attemptAutoplay = () => {
      if (audioRef.current && !hasInteracted) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
          })
          .catch(() => {
            // If autoplay fails, wait for user interaction
            const startAudio = () => {
              if (audioRef.current && !hasInteracted) {
                audioRef.current.play()
                  .then(() => {
                    setIsPlaying(true);
                    setHasInteracted(true);
                  })
                  .catch(() => {});
              }
            };
            
            // Add listeners for first interaction
            document.addEventListener('click', startAudio, { once: true });
            document.addEventListener('keydown', startAudio, { once: true });
            document.addEventListener('touchstart', startAudio, { once: true });
          });
      }
    };

    const timer = setTimeout(attemptAutoplay, 300);

    return () => {
      clearTimeout(timer);
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      // Remove any oneko elements
      const nekoElements = document.querySelectorAll('#oneko');
      nekoElements.forEach(el => el.remove());
    };
  }, [hasInteracted]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handlePageClick = () => {
    if (!hasInteracted && audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch(() => {});
    }
  };

  return (
   <>
   <div className="min-h-screen w-full bg-white dark:bg-black relative" onClick={handlePageClick}>
  {/* Light Mode - Noise Texture (Darker Dots) Background */}
  <div
    className="absolute inset-0 z-0 dark:hidden"
    style={{
      background: "#ffffff",
      backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
      backgroundSize: "20px 20px",
    }}
  />
  {/* Dark Mode - White Dotted Grid Background */}
  <div
    className="absolute inset-0 z-0 hidden dark:block"
    style={{
      background: "#000000",
      backgroundImage: `
        radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)
      `,
      backgroundSize: "30px 30px",
      backgroundPosition: "0 0",
    }}
  />
     <main className="relative z-10 min-h-dvh pb-32 pt-6">
        <nav className="mx-auto mb-4 flex w-full max-w-2xl items-center justify-between px-4 md:px-6 lg:px-8 sticky top-6 z-50">
          <div className="flex w-full items-center justify-between rounded-xl border border-neutral-200 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80">
            <Link
              href="/"
              className="font-semibold text-lg sm:text-xl text-neutral-900 dark:text-neutral-50 transition-colors hover:text-neutral-600 dark:hover:text-neutral-300"
            >
              Kartikeya
            </Link>
            <div className="flex items-center gap-3 sm:gap-5">
              <button
                onClick={toggleMusic}
                aria-label={isPlaying ? "Pause music" : "Play music"}
                className="h-7 w-7 rounded-md border border-neutral-300 text-neutral-700 hover:bg-neutral-100 hover:border-neutral-400 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:border-neutral-600 inline-flex items-center justify-center transition-all duration-200"
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </button>
              <a
                href="#experience"
                className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-300 transition-colors"
              >
                experience
              </a>
              <a
                href="#products"
                className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-300 transition-colors"
              >
                products
              </a>
              <a
                href="#achievements"
                className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-300 transition-colors"
              >
                achievements
              </a>
              <ThemeToggle />
            </div>
          </div>
        </nav>

        {/* Hidden audio element */}
        <audio ref={audioRef} src="/music/videoplayback.webm" loop muted={false} preload="auto" />

        {/* Main Content Container */}
        <div className="mx-auto max-w-2xl px-4 md:px-6 lg:px-8 mt-8">
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/95 dark:bg-neutral-950/70 backdrop-blur-md shadow-xl p-8 md:p-12">
            {/* Content with profile */}
            <div className="flex items-center justify-between gap-8 md:gap-10">
              {/* Left side - Text */}
              <div className="flex-1 space-y-2">
                <SlideInLeft delay={0.1}>
                  <TextShimmer
                    as="p"
                    className="text-base md:text-lg font-medium text-neutral-700 dark:text-neutral-300"
                    duration={2.2}
                    spread={1.2}
                  >
                    Hey there
                  </TextShimmer>
                </SlideInLeft>

                <SlideInLeft delay={0.2}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white leading-tight">
                    Kartikeya
                  </h1>
                </SlideInLeft>
                
                <FadeInText delay={0.3}>
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 text-sm md:text-base text-neutral-600 dark:text-neutral-350 pt-1">
                    <AgeCounter />
                    <span className="text-neutral-400 dark:text-neutral-600">•</span>
                    <span>
                      <Typewriter
                        text={[
                          "Indie Dev",
                          "Full Stack Developer",
                          "Product Engineer",
                          "App Dev",
                        ]}
                        speed={90}
                        waitTime={2000}
                        deleteSpeed={80}
                        cursorChar="|"
                        showCursor={true}
                      />
                    </span>
                  </div>
                </FadeInText>

                <SlideInRight delay={0.4}>
                  <div className="mt-6 flex flex-wrap items-center gap-2 md:gap-3">
                    <a
                      href="https://drive.google.com/file/d/1FFshZ2pNCnmxSa-fjvF1gmAWBTu9fO5_/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Resume"
                      className="px-4 py-2 rounded-lg bg-neutral-900 text-white text-xs md:text-sm font-semibold shadow-md hover:bg-neutral-800 hover:shadow-lg dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white transition-all duration-200"
                    >
                      Resume
                    </a>
                    <a
                      href="mailto:samudralakartikeya@gmail.com"
                      aria-label="Send email"
                      className="h-8 w-8 rounded-lg border border-neutral-300 p-0 text-neutral-600 hover:bg-neutral-100 hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-600 dark:text-neutral-400 dark:hover:bg-neutral-800/50 dark:hover:border-neutral-500 dark:hover:text-neutral-200 inline-flex items-center justify-center transition-all duration-200"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a
                      href="https://x.com/KARTIKEYA_S_1"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow me on X (Twitter)"
                      className="h-8 w-8 rounded-lg border border-neutral-300 p-0 text-neutral-600 hover:bg-neutral-100 hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-600 dark:text-neutral-400 dark:hover:bg-neutral-800/50 dark:hover:border-neutral-500 dark:hover:text-neutral-200 inline-flex items-center justify-center transition-all duration-200"
                    >
                      <Twitter className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <a
                      href="https://github.com/ISOLATEDMAN"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View my GitHub profile"
                      className="h-8 w-8 rounded-lg border border-neutral-300 p-0 text-neutral-600 hover:bg-neutral-100 hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-600 dark:text-neutral-400 dark:hover:bg-neutral-800/50 dark:hover:border-neutral-500 dark:hover:text-neutral-200 inline-flex items-center justify-center transition-all duration-200"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kartikeya-samudrala-59164b252/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Connect with me on LinkedIn"
                      className="h-8 w-8 rounded-lg border border-neutral-300 p-0 text-neutral-600 hover:bg-neutral-100 hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-600 dark:text-neutral-400 dark:hover:bg-neutral-800/50 dark:hover:border-neutral-500 dark:hover:text-neutral-200 inline-flex items-center justify-center transition-all duration-200"
                    >
                      <Linkedin className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </SlideInRight>
              </div>
              
              {/* Right side - Profile Image */}
              <SlideInRight delay={0.15}>
                <div className="flex-shrink-0">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36">
                    <Image
                      src="/images/profile.png"
                      alt="Kartikeya's profile picture"
                      fill
                      priority
                      className="rounded-full object-cover border-3 border-neutral-200 dark:border-neutral-600 shadow-lg"
                    />
                  </div>
                </div>
              </SlideInRight>


            </div>
            
            {/* Bio */}
            <FadeInText delay={0.5}>
              <section className="mt-8 text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300" aria-label="About">
                <p>
                  A 20 year-old developer from India who loves building{" "}
                  <span className="rounded-md bg-yellow-200 dark:bg-yellow-400/90 px-2 py-1 text-sm font-semibold text-neutral-900 dark:text-black">
                    products, apps, and solutions.
                  </span>{" "}
                  With over a year of hands-on experience working with product and SaaS-based companies, 
                  I'm currently balancing a full-time job while pursuing my passion as an indie developer.
                </p>
              </section>
            </FadeInText>

                       {/* Work Experience */}
            <SlideUp delay={0.6}>
              <section id="experience" className="mt-10">
                <FadeInText delay={0.1}>
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50 mb-6">
                    Work Experience.
                  </h3>
                </FadeInText>
                <div className="space-y-6">
                  <SlideInLeft delay={0.2}>
                    <WorkItem
                      icon="building"
                      company="1000xdevs"
                      role="Associate Software Intern"
                      period="October 2025 – Present"
                      summary="Working on cutting-edge software development projects, contributing to scalable solutions and learning from industry experts."
                      logoUrl="/images/companies/1000x-logo.png.webp"
                      showActiveStatus={true}
                    />
                  </SlideInLeft>
                  <SlideInLeft delay={0.3}>
                    <WorkItem
                      icon="building"
                      company="Starkins Solutions"
                      role="Full Stack App Developer"
                      period="February 2025 – May 2025"
                      summary="Developed full-stack applications, implementing end-to-end features and optimizing performance for client projects."
                      logoUrl="/images/companies/starkins.png"
                    />
                  </SlideInLeft>
                  <SlideInLeft delay={0.4}>
                    <WorkItem
                      icon="building"
                      company="Native Farmers"
                      role="App Developer Intern"
                      period="June 2024 – September 2024"
                      summary="Developed mobile applications to connect farmers with consumers, implementing user-friendly interfaces and core app functionality."
                      logoUrl="/images/companies/nativefarmers.png"
                    />
                  </SlideInLeft>
                </div>
              </section>
            </SlideUp>



                        {/* Projects */}
            <SlideUp delay={0.7}>
              <section id="products" className="mt-10">
                <FadeInText delay={0.1}>
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50 mb-6">
                    Projects.
                  </h3>
                </FadeInText>
                <div className="space-y-6">
                  <SlideInLeft delay={0.2}>
                    <ProjectListItem
                      title="Quick Valid. AI"
                      links={[
                        {
                          label: "play store",
                          url: "https://play.google.com/store/apps/details?id=com.kartikships.quickvalidaiapp&hl=en_US",
                        },
                        {
                          label: "website",
                          url: "https://quickvalidai.framer.website",
                        },
                      ]}
                      bullets={[
                        "200+ users, $3 MRR — AI-powered business validation on Google Play Store",
                        "Firebase backend with secure auth, Firestore, Cloud Functions",
                        "OpenAI + Gemini APIs for real-time semantic analysis",
                      ]}
                      tags={["Flutter", "Firebase", "OpenAI API", "Cloud Functions", "Gemini API"]}
                    />
                  </SlideInLeft>
                  <SlideInLeft delay={0.3}>
                    <ProjectListItem
                      title="Agenix"
                      showBuilding={true}
                      links={[
                        {
                          label: "live preview",
                          url: "https://agenix-site-landing-site.vercel.app/",
                        },
                        {
                          label: "github",
                          url: "https://agenix-site-landing-site.vercel.app/",
                        },
                      ]}
                      bullets={[
                        "AI Agents orchestration with LangChain — autonomous dialogue-to-tasks",
                        "Proprietary multi-agent collaboration framework with delegation & resolution",
                        "Full-stack: Python AI engine + Next.js task-validation dashboard",
                      ]}
                      tags={[
                        "Next.js",
                        "Nest.js",
                        "LangChain",
                        "AI Agents",
                        "OpenAI API",
                        "Gemini API",
                      ]}
                    />
                  </SlideInLeft>
                </div>
                <FadeInText delay={0.4}>
                  <div className="mt-6 flex justify-center">
                    <a
                      href="https://github.com/ISOLATEDMAN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-100 hover:border-neutral-400 transition-all duration-200 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:border-neutral-600"
                    >
                      View all projects →
                    </a>
                  </div>
                </FadeInText>
              </section>
            </SlideUp>

            <SlideUp delay={0.8}>
              <section id="achievements" className="mt-10">
                <FadeInText delay={0.1}>
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50 mb-6">
                    Achievements.
                  </h3>
                </FadeInText>
                <ul className="space-y-6">
                  <SlideInLeft delay={0.2}>
                    <li>
                      <AchievementItem
                        title="1st Place – College MicroProject Hackathon"
                        date="2024"
                        description="Secured first place among 200+ competing teams by developing an innovative solution that demonstrated exceptional technical execution and problem-solving capabilities."
                      />
                    </li>
                  </SlideInLeft>
                  <SlideInLeft delay={0.3}>
                    <li>
                      <AchievementItem
                        title="2nd Place – Zenith 2024 Hackathon"
                        date="2024"
                        description="Achieved runner-up position among 150+ teams, showcasing advanced development skills and creative approach to solving real-world challenges."
                      />
                    </li>
                  </SlideInLeft>
                  <SlideInLeft delay={0.4}>
                    <li>
                      <AchievementItem
                        title="3rd Place – Zignas 2023 Hackathon"
                        date="2023"
                        description="Placed third among 200+ teams, demonstrating strong technical fundamentals and collaborative team dynamics under competitive pressure."
                      />
                    </li>
                  </SlideInLeft>
                  <SlideInLeft delay={0.5}>
                    <li>
                      <AchievementItem
                        title="Core Member – GDSC MLRIT"
                        date="2023 - 2024"
                        description="Mentored 150+ students in mobile development through 'Flutter Fire' workshop. Organized and led major community events including Cloud Jam and Hacktoberfest, fostering developer growth and collaboration."
                      />
                    </li>
                  </SlideInLeft>
                </ul>
              </section>
            </SlideUp>

                        {/* Education */}
            <SlideUp delay={0.9}>
              <section className="mt-10">
                <FadeInText delay={0.1}>
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50 mb-6">
                    Education.
                  </h3>
                </FadeInText>
                <ul className="space-y-6">
                  <SlideInLeft delay={0.2}>
                    <li>
                      <AchievementItem
                        title="MLR Institute of Technology"
                        date="2022 – 2026"
                        description="B.Tech in Computer Science & Machine Learning • 8.12 CGPA • Hyderabad, Telangana"
                      />
                    </li>
                  </SlideInLeft>
                  <SlideInLeft delay={0.3}>
                    <li>
                      <AchievementItem
                        title="Sri Chaitanya Junior College"
                        date="2020 – 2022"
                        description="Intermediate (Class XII) • MPC Stream • 95.4%"
                      />
                    </li>
                  </SlideInLeft>
                </ul>
              </section>
            </SlideUp>


                        {/* Get in Touch */}
            <SlideUp delay={0.3}>
              <section className="mt-8 text-center section-lines p-6">
                <FadeInText delay={0.1}>
                  <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                    {"Let's work together."}
                  </h2>
                </FadeInText>
                <FadeInText delay={0.1}>
                  <p className="mx-auto mt-2 max-w-xl text-xs text-neutral-500 dark:text-neutral-400">
                    {
                      "I'm always interested in new opportunities and exciting projects. Whether you have a project in mind or just want to chat about tech, I'd love to hear from you."
                    }
                  </p>
                </FadeInText>

                {/* CTAs */}
                <SlideInLeft delay={0.1}>
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                    <Button
                      size="sm"
                      asChild
                      className="h-9 rounded-lg bg-neutral-900 px-5 text-white shadow-md hover:bg-neutral-800 hover:shadow-lg dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white transition-all duration-200"
                    >
                      <a
                        href="mailto:samudralakartikeya@gmail.com"
                        aria-label="Get in touch via email"
                      >
                        <span className="inline-flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <span>Get in touch</span>
                        </span>
                      </a>
                    </Button>
                  </div>
                </SlideInLeft>

                {/* Social row */}
                <SlideInRight delay={0.1}>
                  <div className="mt-4 flex items-center justify-center gap-2 sm:gap-4 text-neutral-600 dark:text-neutral-300">
                    <a
                      href="https://x.com/KARTIKEYA_S_1"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Twitter"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href="https://github.com/ISOLATEDMAN"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kartikeya-samudrala-59164b252/"
                      aria-label="Open LinkedIn"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </SlideInRight>

                {/* Availability + response time */}
                <FadeInText delay={0.1}>
                  <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
                    Currently available for freelance work and full‑time
                    opportunities
                  </p>
                  <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                    Response time: Usually within 24 hours
                  </p>
                </FadeInText>

                {/* Divider before footer */}
              </section>
            </SlideUp>
          </div>

          <footer className="mt-8 flex justify-center rounded-xl py-3 border border-neutral-200 bg-white/95 shadow-md dark:border-neutral-700 dark:bg-neutral-950/70 backdrop-blur-md">
            <p className="text-xs text-neutral-600 dark:text-neutral-400 section-lines p-2">
              <span className="italic">Never forget, why you started</span> <span aria-hidden="true"> ❤️</span>
            </p>
          </footer>
        </div>
      

      <Dock />
     </main>

</div>

   </>
  );
}
