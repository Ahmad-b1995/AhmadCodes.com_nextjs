import React from "react";
import NavigationWrapper from "./NavigationWrapper";
import Link from "next/link";

const ExperienceSection = () => {
  return (
    <NavigationWrapper elementName="experience">
      <section
        id="experience"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Work experience"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-300 lg:sr-only">
            Experience
          </h2>
        </div>
        <div >
          <ol className="group/list">
            {/* Experience 1: Barriertek */}
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:bg-primary-100/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg rounded-md p-4">
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label="March 2024 to Present"
                >
                  March 2024 — Present
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-400">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-primary-300 focus-visible:text-primary-300 group/link text-base"
                        href="https://barriertek.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Full Stack Developer at Barriertek (opens in a new tab)"
                      >
                        <span>
                          Full Stack Developer · Barriertek
                        </span>
                      </a>
                    </div>
                  </h3>
                  <ul className="list-outside space-y-1 mt-2 text-sm leading-normal">
                    <li>
                      Developed a comprehensive ERP system from scratch using React, NestJS, and PostgreSQL, replacing manual processes and eliminating phone-based communication
                    </li>
                    <li>
                      Onboarded 156+ customers with invitation features, attachments, and real-time updates, significantly improving communication and order transparency
                    </li>
                    <li>
                      Integrated complex NetSuite data synchronization for sales orders and customer data, ensuring real-time consistency across legacy and new systems
                    </li>
                    <li>
                      Established scalable DevOps infrastructure using PostgreSQL, Coolify, Ansible, and Linux, supporting rapid deployment and system reliability
                    </li>
                  </ul>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                        React
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                        NestJS
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                        PostgreSQL
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                        React Native
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                        NetSuite
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                        Ansible
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Experience 2: DexTrading */}
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:bg-primary-100/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg rounded-md p-4">
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label="Dec 2022 to March 2024"
                >
                  Dec 2022 — March 2024
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-400">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-primary-300 focus-visible:text-primary-300 group/link text-base"
                        href="https://dextrading.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Full Stack Developer at DexTrading (opens in a new tab)"
                      >
                        <span>
                          Full Stack Developer · DexTrading
                        </span>
                      </a>
                    </div>
                  </h3>
                  <ul className="list-outside space-y-1 mt-2 text-sm leading-normal">
                    <li>
                      Led a team of 3 developers to enhance platform features, optimize performance, and grow user base
                    </li>
                    <li>
                      Rebuilt the web app frontend with Next.js, TypeScript, and TanStack Query, increasing site speed by 200%
                    </li>
                    <li>
                      Designed and launched a new blog using NestJS, GraphQL, PostgreSQL, and Node.js, increasing daily visitors by 500%
                    </li>
                    <li>
                      Developed an AI ask-and-answer API with Django, contributing to a 10% increase in subscriptions
                    </li>
                    <li>
                      Integrated real-time charting features with Chart.js, D3, and TradingView, boosting user engagement by 50%
                    </li>
                  </ul>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                        Next.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                        TypeScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                        TanStack Query
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                        NestJS
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                        GraphQL
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                        Django
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                        TradingView
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Experience 3: Azer Tech */}
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:bg-primary-100/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg rounded-md p-4">
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label="Jul 2021 to Jan 2023"
                >
                  Jul 2021 — Jan 2023
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-400">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-primary-300 focus-visible:text-primary-300 group/link text-base"
                        href="#"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Full Stack Developer at Azer Tech (opens in a new tab)"
                      >
                        <span>Full Stack Developer · Azer Tech</span>
                      </a>
                    </div>
                  </h3>
                  <ul className="list-outside space-y-1 mt-2 text-sm leading-normal">
                    <li>
                      Collaborated with a team of 5 developers, leading 1 frontend developer under the Lead Developer
                    </li>
                    <li>
                      Developed and launched a multi-language frontend application with Next.js, increasing user engagement by 30%
                    </li>
                    <li>
                      Implemented drag-and-drop functionality with React Beautiful DnD, reducing exam creation time by 40%
                    </li>
                    <li>
                      Provided backend consultation, reducing API response times by 20–50%, improving data flow and platform responsiveness
                    </li>
                  </ul>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                        Next.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                        React
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                        React Beautiful DnD
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                        Docker
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                        GitLab
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Experience 4: Chargoon */}
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:bg-primary-100/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg rounded-md p-4">
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label="Feb 2020 to Aug 2021"
                >
                  Feb 2020 — Aug 2021
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-400">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-primary-300 focus-visible:text-primary-300 group/link text-base"
                        href="https://chargoon.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Full Stack Developer at Chargoon (opens in a new tab)"
                      >
                        <span>Full Stack Developer · Chargoon</span>
                      </a>
                    </div>
                  </h3>
                  <ul className="list-outside space-y-1 mt-2 text-sm leading-normal">
                    <li>
                      Maintained and migrated ERP applications to React and .NET, adding new features based on user requests
                    </li>
                    <li>
                      Collaborated within a 15-person team to modernize software, improving load times by 15%
                    </li>
                    <li>
                      Enhanced backend logic with .NET framework, increasing productivity by 20%
                    </li>
                    <li>
                      Optimized codebase, reducing size by 20%, and led code reviews to decrease errors by 15%
                    </li>
                  </ul>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                        React
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                        .NET
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                        ERP Systems
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Experience 5: Hamisheh */}
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:bg-primary-100/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg rounded-md p-4">
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label="Aug 2018 to Feb 2020"
                >
                  Aug 2018 — Feb 2020
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-400">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-primary-300 focus-visible:text-primary-300 group/link text-base"
                        href="#"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Front End Developer at Hamisheh (opens in a new tab)"
                      >
                        <span>Front End Developer · Hamisheh</span>
                      </a>
                    </div>
                  </h3>
                  <ul className="list-outside space-y-1 mt-2 text-sm leading-normal">
                    <li>
                      Developed a PWA-compatible fitness video streaming platform using Angular, reducing load times by 40%
                    </li>
                    <li>
                      Dockerized the frontend app, streamlining deployment and reducing daily deployment time by 3 hours
                    </li>
                    <li>
                      Designed a CMS dashboard, reducing content upload time by 60%
                    </li>
                    <li>
                      Implemented HTTP Live Streaming (HLS), reducing buffering issues by 50%
                    </li>
                  </ul>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                        Angular
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                        PWA
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                        Docker
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                        HLS
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ol>
        </div>
        <div className="mt-12">
          <a
            className="inline-flex items-baseline leading-tight hover:text-primary-300 focus-visible:text-primary-300 font-semibold text-slate-400 group/link text-base"
            href="https://drive.google.com/file/d/1MkYlq4cLPWFTqDk0x4ZWghZNsXPUhxu9/view?usp=drive_link"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
          >
            <span>
              View Full Résumé{" "}
              <span className="inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
      </section>
    </NavigationWrapper>
  );
};

export default ExperienceSection;
