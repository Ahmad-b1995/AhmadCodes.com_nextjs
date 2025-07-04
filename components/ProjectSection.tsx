import React from 'react';
import NavigationWrapper from './NavigationWrapper';
import Image from 'next/image';

const ProjectSection = () => {
    return (
    <NavigationWrapper elementName="projects">
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-300 lg:sr-only">Projects</h2>
            </div>
            <div>
                <ul className="group/list">
                    {/* Project 1: Barriertek ERP System */}
                    <li className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-primary-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <div className="z-10 sm:order-2 sm:col-span-6">
                                <h3>
                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-primary-300 focus-visible:text-primary-300 group/link text-base" href="https://barriertek.com" target="_blank" rel="noreferrer noopener" aria-label="Barriertek ERP System (opens in a new tab)">
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span>Barriertek ERP System</span>
                                    </a>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                    A comprehensive ERP system built from scratch to replace manual processes and eliminate phone-based communication. Serves 500+ users with real-time updates, NetSuite integration, and multi-platform support.
                                </p>
                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">React</div></li>
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">NestJS</div></li>
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">PostgreSQL</div></li>
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">NetSuite</div></li>
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">Ansible</div></li>
                                </ul>
                            </div>
                            <Image alt="Barriertek ERP system screenshot" loading="lazy" width="200" height="48" decoding="async" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{ color: 'transparent' }} src="/_next/image?url=%2Fimages%2Fprojects%2Fbarriertek-erp.png&w=640&q=75" />
                        </div>
                    </li>

                    {/* Project 2: DexTrading Platform */}
                    <li className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-primary-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <div className="z-10 sm:order-2 sm:col-span-6">
                                <h3>
                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-primary-300 focus-visible:text-primary-300 group/link text-base" href="https://dextrading.com" target="_blank" rel="noreferrer noopener" aria-label="DexTrading Platform (opens in a new tab)">
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span>DexTrading Platform</span>
                                    </a>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                    Complete rebuild of cryptocurrency trading platform with 200% site speed improvement and 50% user engagement boost. Features real-time charting, AI-powered Q&A, and advanced data tables.
                                </p>
                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">Next.js</div></li>
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">TypeScript</div></li>
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">TanStack Query</div></li>
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">GraphQL</div></li>
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">TradingView</div></li>
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">Django</div></li>
                                </ul>
                            </div>
                            <Image alt="DexTrading platform screenshot" loading="lazy" width="200" height="48" decoding="async" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{ color: 'transparent' }} src="/_next/image?url=%2Fimages%2Fprojects%2Fdextrading.png&w=640&q=75" />
                        </div>
                    </li>

                    {/* Project 3: Fitness Streaming Platform */}
                    <li className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-primary-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <div className="z-10 sm:order-2 sm:col-span-6">
                                <h3>
                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-primary-300 focus-visible:text-primary-300 group/link text-base" href="#" target="_blank" rel="noreferrer noopener" aria-label="Fitness Streaming Platform (opens in a new tab)">
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span>Fitness Streaming Platform</span>
                                    </a>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                    PWA-compatible fitness video streaming platform with 40% load time reduction and 30% session duration increase. Features HLS streaming, CMS dashboard, and reduced buffering by 50%.
                                </p>
                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">Angular</div></li>
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">PWA</div></li>
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">HLS</div></li>
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">Docker</div></li>
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">CMS</div></li>
                                </ul>
                            </div>
                            <Image alt="Fitness streaming platform screenshot" loading="lazy" width="200" height="48" decoding="async" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{ color: 'transparent' }} src="/_next/image?url=%2Fimages%2Fprojects%2Ffitness-platform.png&w=640&q=75" />
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        </NavigationWrapper>
    );
};

export default ProjectSection;
