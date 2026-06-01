import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Footer from '../components/Footer';

import strategyDashboard from '../assets/strategy-dashboard.png';
import governanceDashboard from '../assets/governance-dashboard.png';
import optimizationDashboard from '../assets/optimization-dashboard.png';
import multiChannelOps from '../assets/multi_channel_ops.png';
import organicGrowth from '../assets/organic_growth.png';
import contentOperations from '../assets/content_operations.png';

const useCasesData = {
    "strategy-planning": {
        badge: "Strategy Planning",
        title: "Marketing strategy & operational planning built for faster, clearer decisions",
        desc: "Marketing4Sight transforms marketing strategy from disconnected planning into a continuously guided operational system, helping teams identify priorities faster, align execution with business goals, and make sharper decisions through connected intelligence, live visibility, and data-driven direction.",
        heroImg: "Strategy overview and Action Plan dashboard interface view",
        imageSrc: strategyDashboard,
        mattersTitle: "Disconnected marketing slows decisions",
        mattersDesc: "When strategy, execution, and performance operate separately, marketing becomes harder to prioritize, adapt, and scale. Marketing4Sight keeps planning, visibility, and operational workflows continuously connected so teams can move with greater clarity and faster decision-making.",
        compare: [
            ["Planning spread across disconnected documents, meetings, and tools", "Connected planning environment aligned to operational workflows"],
            ["Strategy decisions dependent on manual analysis and fragmented visibility", "Data-assisted decision support connected to business and market context"],
            ["Execution priorities change without centralized visibility", "Structured operational priorities continuously visible across teams"],
            ["Performance visibility separated from planning decisions", "Strategy, implementation, governance, and optimization remain connected"],
            ["Teams operate with different datasets and reporting systems", "Shared marketing intelligence across the operational workflow"],
            ["Market changes identified through delayed manual reviews", "Live visibility into trends, competitors, and operational movement"]
        ],
        centerTitle: "Your central system for marketing decisions",
        centerDesc: "Bring strategy, execution priorities, visibility, and market intelligence together so marketing decisions stay aligned, responsive, and continuously informed.",
        centerImg: "Centralized strategic planning & goal priority dashboard layout status",
        chooseDesc: "Marketing4Sight combines structured workflows, connected intelligence, AI-assisted systems, and data-driven decision making within one operational environment, helping businesses manage marketing with greater direction, responsiveness, and control.",
        features: [
            ["Connected marketing visibility", "Keep strategy, execution, performance, and operational priorities continuously connected across the marketing workflow."],
            ["Data-driven decision making", "Use live performance visibility, market signals, and operational intelligence to support faster and more informed decisions."],
            ["AI-assisted operational support", "Reduce manual effort through intelligent recommendations, structured workflows, and context-aware marketing guidance."],
            ["Shared intelligence environment", "Keep teams aligned through shared visibility across priorities, execution workflows, marketing activities, and outcomes."],
            ["Cross-functional marketing alignment", "Ensure SEO, content, local visibility, social media, websites, funnels, and campaigns operate with shared direction and priorities."],
            ["Competitive and market visibility", "Track movement across competitors, visibility trends, operational shifts, and emerging opportunities continuously."]
        ],
        ctaText: "Move faster with connected marketing approach",
        ctaDesc: "Turn live market signals, business intelligence, and performance visibility into faster decisions and sharper marketing direction.",
        faqs: [
            ["How does Marketing4Sight help with marketing strategy?", "The platform helps businesses structure marketing direction using business context, competitor intelligence, search visibility, operational goals, and market movement to create clearer priorities and connected execution planning."],
            ["Does the platform generate marketing action plans?", "Yes. Marketing4Sight helps translate strategic direction into structured operational workflows, priorities, and implementation layers aligned to marketing goals and visibility opportunities."],
            ["Can strategy evolve based on performance changes?", "Yes. The platform continuously surfaces performance movements, operational changes, competitive shifts, and trend visibility to help businesses dynamically refine their direction."],
            ["How is this different from traditional marketing planning?", "Traditional planning often happens across disconnected systems and static reporting cycles. Marketing4Sight keeps planning, implementation, governance, and optimization connected within one operational environment."],
            ["Does the platform support cross-channel planning?", "Yes. Marketing4Sight connects planning visibility across SEO, content, local visibility, social media, campaigns, website operations, and conversion workflows."],
            ["Is this suitable for agencies and multi-team environments?", "Yes. The platform helps maintain structured planning visibility, operational governance, and connected workflows across multiple brands, teams, and marketing activities."]
        ]
    },
    governance: {
        badge: "Governance",
        title: "Marketing governance & performance visibility built for sharper operational control",
        desc: "Marketing4Sight helps businesses monitor marketing performance, operational progress, execution consistency, and visibility movement through one connected environment, enabling teams to identify what’s working, what needs attention, and where decisions should move next with greater confidence.",
        heroImg: "Traffic & engagement trends and Alerts / opportunity indicators system view",
        imageSrc: governanceDashboard,
        mattersTitle: "Visibility gaps slow marketing decisions",
        mattersDesc: "When performance data, execution tracking, and operational visibility stay fragmented across platforms, it becomes harder to understand progress, identify priorities, and respond quickly. Marketing4Sight keeps governance, reporting, activities, and performance visibility continuously connected so businesses operate with clearer oversight and faster decision-making.",
        compare: [
            ["Performance data spread across multiple dashboards and reports", "Unified operational visibility across marketing activities"],
            ["Teams manually compile updates from disconnected platforms", "Connected governance environment with centralized monitoring"],
            ["Delayed understanding of performance movement", "Live visibility into operational and performance changes"],
            ["Execution progress tracked separately from outcomes", "Activities and performance remain continuously connected"],
            ["Reporting cycles dependent on manual coordination", "Structured visibility accessible across workflows"],
            ["Marketing priorities shift without operational clarity", "Real-time governance visibility aligned to business priorities"]
        ],
        centerTitle: "Your operational command center for marketing visibility",
        centerDesc: "Monitor execution progress, track performance movement, identify operational gaps, and maintain continuous visibility across marketing workflows from one connected environment.",
        centerImg: "Operational performance monitoring tracking center framework",
        chooseDesc: "Marketing4Sight combines governance workflows, performance visibility, operational intelligence, and connected analytics into one structured environment, helping businesses monitor marketing with greater control, responsiveness, and decision clarity.",
        features: [
            ["Unified performance visibility", "Track marketing performance, execution movement, operational progress, and visibility trends from one connected layer."],
            ["Connected governance workflows", "Monitor activities, approvals, implementation progress, and operational consistency across marketing functions."],
            ["Live operational monitoring", "Identify visibility shifts, performance changes, execution gaps, and workflow movement as activities evolve."],
            ["Cross-channel reporting clarity", "Keep SEO, content, social media, GMB, website, and campaign reporting aligned within one environment."],
            ["Goal and priority tracking", "Measure progress against operational priorities, strategic objectives, and marketing direction continuously."],
            ["AI-assisted visibility support", "Surface key movements, anomalies, trends, and operational signals faster through intelligent monitoring layers."]
        ],
        ctaText: "Stay aligned with live marketing visibility",
        ctaDesc: "Turn operational tracking, connected analytics, and performance visibility into faster actions, stronger governance, and more confident marketing decisions.",
        faqs: [
            ["How does Marketing4Sight improve marketing visibility?", "The platform connects performance tracking, execution visibility, operational workflows, and reporting into one environment so businesses can monitor marketing with greater clarity and control."],
            ["Can teams track execution progress inside the platform?", "Yes. Marketing4Sight helps teams monitor ongoing activities, approvals, implementation status, task movement, and workflow progress across connected marketing operations."],
            ["Does the platform support performance reporting across channels?", "Yes. The platform keeps visibility connected across SEO, content, social media, local visibility, websites, campaigns, and operational workflows."],
            ["How does governance work inside Marketing4Sight?", "Governance combines operational monitoring, implementation visibility, activity tracking, and connected reporting so businesses maintain continuous oversight across marketing execution."],
            ["Can businesses identify performance gaps quickly?", "Yes. Marketing4Sight continuously surfaces operational gaps, visibility changes, performance movement, and execution bottlenecks through connected intelligence and live monitoring."],
            ["Is this useful for agencies and multi-team operations?", "Yes. The platform helps agencies and teams maintain centralized governance visibility, connected reporting, and operational consistency across multiple brands and workflows."]
        ]
    },
    optimization: {
        badge: "Optimization",
        title: "Marketing optimization & competitive intelligence built for adaptive growth",
        desc: "Marketing4Sight helps businesses monitor competitive movement, visibility shifts, performance opportunities, and evolving market signals through one connected intelligence environment — enabling teams to optimize faster, respond smarter, and stay aligned with changing market dynamics.",
        heroImg: "Competitor tracking dashboard and keyword movement graph module interface",
        imageSrc: optimizationDashboard,
        mattersTitle: "Markets shift faster than static marketing plans",
        mattersDesc: "Search behavior, competitors, visibility trends, and audience movement continuously evolve. Marketing4Sight helps businesses stay connected to these changes through live intelligence, optimization visibility, and competitive monitoring so marketing direction adapts with greater speed and clarity.",
        compare: [
            ["Competitive analysis handled through periodic manual reviews", "Continuous visibility into competitor and market movement"],
            ["Optimization decisions based on delayed reporting cycles", "Live optimization signals connected to operational workflows"],
            ["Teams manually monitor ranking and visibility changes", "Automated visibility tracking across marketing activities"],
            ["Market trends identified after momentum shifts", "Early visibility into emerging movement and opportunities"],
            ["Performance insights isolated across platforms", "Connected optimization visibility within one environment"],
            ["Strategic adjustments require manual analysis across tools", "AI-assisted optimization support aligned to live signals"]
        ],
        centerTitle: "Your connected layer for optimization and market intelligence",
        centerDesc: "Track visibility shifts, competitor activity, performance movement, trend changes, and optimization opportunities continuously from one connected intelligence environment.",
        centerImg: "Optimization matrices metric charts visual map",
        chooseDesc: "Marketing4Sight combines optimization workflows, live market visibility, competitor intelligence, AI-assisted monitoring, and connected performance insights into one operational environment, helping businesses adapt marketing direction with greater speed and confidence.",
        features: [
            ["Continuous optimization visibility", "Track evolving opportunities, visibility movement, performance shifts, and optimization priorities continuously."],
            ["Competitive intelligence tracking", "Monitor competitor visibility, ranking movement, content activity, and market positioning through connected intelligence."],
            ["Live market signal visibility", "Identify emerging trends, audience movement, and changing visibility patterns across marketing activities."],
            ["AI-assisted optimization support", "Surface opportunities, operational changes, and strategic movement faster through intelligent monitoring layers."],
            ["Opportunity-driven decision visibility", "Keep optimization priorities aligned with performance signals, market conditions, and business goals."],
            ["Connected intelligence environment", "Bring together visibility trends, operational data, market movement, and optimization workflows within one system."]
        ],
        ctaText: "Adapt faster with connected optimization intelligence",
        ctaDesc: "Turn market movement, visibility trends, and competitive insights into faster optimization actions and smarter marketing decisions.",
        faqs: [
            ["How does Marketing4Sight support marketing optimization?", "The platform continuously surfaces visibility movement, operational changes, trend signals, and optimization opportunities so businesses can refine marketing direction faster."],
            ["Can businesses track competitors inside the platform?", "Yes. Marketing4Sight helps monitor competitor visibility, keyword movement, content activity, and broader market positioning through connected intelligence workflows."],
            ["Does the platform identify optimization opportunities automatically?", "Yes. The platform uses connected intelligence and AI-assisted monitoring to highlight operational gaps, performance movement, and optimization opportunities continuously."],
            ["How does competitive intelligence work inside Marketing4Sight?", "Marketing4Sight combines market visibility, competitor movement, trend analysis, and operational insights into one connected intelligence environment for faster decision-making."],
            ["Can teams monitor changing market trends?", "Yes. The platform continuously tracks visibility shifts, audience movement, emerging opportunities, and trend signals across connected marketing activities."],
            ["Is this useful for agencies and multi-brand environments?", "Yes. Marketing4Sight helps agencies and teams maintain centralized optimization visibility and competitive intelligence across multiple brands, industries, and operational workflows."]
        ]
    },
    "multi-channel-ops": {
        badge: "Multi-Channel Ops",
        title: "Multi-channel marketing operations built for connected execution",
        desc: "Marketing4Sight helps businesses manage websites, content, social media, campaigns, visibility, and marketing activities through one connected operational environment, enabling teams to maintain consistency, improve coordination, and execute faster across channels.",
        heroImg: "Social media cross-channel multi-workflow interface configuration",
        imageSrc: multiChannelOps,
        mattersTitle: "Marketing breaks when channels operate separately",
        mattersDesc: "Websites, social media, campaigns, visibility, and content workflows continuously influence each other. Marketing4Sight keeps operational activities connected across channels so businesses maintain stronger alignment, more consistent execution, and greater workflow visibility.",
        compare: [
            ["Marketing activities managed across disconnected tools", "Connected operational workflows across channels"],
            ["Website, content, and social workflows operate separately", "Shared visibility across digital marketing activities"],
            ["Teams manually coordinate execution", "Structured execution aligned across workflows"],
            ["Campaign activities tracked independently", "Unified operational visibility across channels"],
            ["Content consistency dependent on manual coordination", "Centralized workflow visibility and publishing alignment"],
            ["Teams switch platforms to manage marketing activities", "Connected operational environment for execution and monitoring"]
        ],
        centerTitle: "Your connected workspace for multi-channel execution",
        centerDesc: "Manage websites, content workflows, social media operations, publishing activities, and marketing execution from one connected operational layer.",
        centerImg: "Social media content workflow dashboard display output",
        chooseDesc: "Marketing4Sight combines operational workflows, publishing visibility, execution management, connected intelligence, and AI-assisted coordination into one environment, helping businesses maintain faster execution and stronger operational alignment across channels.",
        features: [
            ["Connected operational workflows", "Keep websites, campaigns, content, visibility, and publishing activities continuously connected."],
            ["Centralized execution visibility", "Monitor ongoing marketing activities, workflow progress, publishing schedules, and operational movement from one environment."],
            ["Social media workflow management", "Plan, organize, and track content across Instagram, Facebook, LinkedIn, X, and YouTube through connected workflows."],
            ["Website and digital presence support", "Manage website structure, page workflows, content layers, and digital visibility operations alongside broader marketing activities."],
            ["AI-assisted execution support", "Reduce operational dependency through intelligent workflow support, publishing assistance, and connected activity visibility."],
            ["Cross-channel consistency", "Maintain aligned messaging, operational clarity, and structured execution across multiple marketing touchpoints."]
        ],
        ctaText: "Execute faster across connected marketing channels",
        ctaDesc: "Turn operational visibility, connected workflows, and structured execution into more aligned and scalable marketing operations.",
        faqs: [
            ["How does Marketing4Sight support multi-channel marketing operations?", "The platform connects websites, social media, workflows, campaigns, and operational activities into one environment for more structured execution and visibility."],
            ["Can teams manage social media workflows inside the platform?", "Yes. Marketing4Sight helps teams plan, organize, create, and monitor content across major social media platforms through connected workflows."],
            ["Does the platform support website-related operations?", "Yes. Businesses can manage website core web vitals, content workflows, on-page, off-page, digital presence layers, and operational visibility alongside broader marketing activities."],
            ["How does Marketing4Sight improve operational coordination?", "The platform keeps activities, publishing schedules, workflows, and execution visibility continuously connected so teams operate with stronger alignment."],
            ["Can businesses manage content and campaigns together?", "Yes. Marketing4Sight connects content workflows, publishing activities, campaigns, and operational visibility within one structured environment."],
            ["Is this useful for agencies and large marketing teams?", "Yes. The platform helps agencies and teams maintain centralized workflow visibility, operational coordination, and connected execution across multiple brands and channels."]
        ]
    },
    "organic-growth": {
        badge: "Organic Growth",
        title: "Organic visibility & search growth built for continuous discoverability",
        desc: "Marketing4Sight helps businesses improve search visibility, local discoverability, keyword presence, and organic growth through connected SEO, GMB, content, and search intelligence workflows, enabling teams to strengthen visibility across evolving search behavior and competitive environments.",
        heroImg: "SEO core strategy overview and GMB listing localization parameters snapshot",
        imageSrc: organicGrowth,
        mattersTitle: "Search visibility changes every day",
        mattersDesc: "Search rankings, local visibility, competitor positioning, and audience behavior continuously evolve across search environments. Marketing4Sight keeps SEO, GMB, content, and visibility workflows connected so businesses can maintain stronger discoverability and adapt faster to changing search movement.",
        compare: [
            ["SEO, GMB, and content managed separately", "Connected organic visibility workflows"],
            ["Teams manually track rankings and local visibility", "Unified search visibility monitoring"],
            ["Keyword planning handled in isolated systems", "Shared keyword intelligence across workflows"],
            ["Visibility improvements dependent on fragmented execution", "Structured optimization aligned across activities"],
            ["Performance visibility spread across platforms", "Connected reporting across search operations"],
            ["Search opportunities identified through delayed reviews", "Live visibility into ranking and discoverability movement"]
        ],
        centerTitle: "Your connected environment for organic visibility",
        centerDesc: "Monitor keyword movement, search rankings, local discoverability, optimization priorities, and visibility trends through one connected search intelligence layer.",
        centerImg: "SEO structural ranking optimization graph platform view",
        chooseDesc: "Marketing4Sight combines SEO workflows, keyword intelligence, GMB visibility, optimization tracking, and connected search monitoring into one operational environment, helping businesses strengthen discoverability with greater visibility and control.",
        features: [
            ["Connected search visibility workflows", "Keep SEO, GMB, keyword planning, content, and optimization activities aligned within one environment."],
            ["Unified keyword intelligence", "Build and manage keyword visibility across organic search, local discoverability, content planning, and optimization workflows."],
            ["Local visibility monitoring", "Track GMB performance, local discoverability, reviews, engagement movement, and visibility changes continuously."],
            ["SEO operational visibility", "Monitor rankings, technical visibility, Core Web Vitals, on-page performance, and optimization priorities through connected workflows."],
            ["AI-assisted search support", "Surface ranking movement, optimization opportunities, and discoverability signals faster through intelligent monitoring systems."],
            ["Continuous discoverability tracking", "Maintain visibility into evolving search trends, audience behavior, competitor movement, and organic growth opportunities."]
        ],
        ctaText: "Strengthen visibility across evolving search environments",
        ctaDesc: "Turn search intelligence, optimization visibility, and connected workflows into stronger discoverability and sustainable organic growth.",
        faqs: [
            ["How does Marketing4Sight improve organic visibility?", "The platform connects SEO, GMB, keyword intelligence, content workflows, and optimization visibility into one environment for stronger discoverability and search growth."],
            ["Can businesses track keyword rankings inside the platform?", "Yes. Marketing4Sight helps monitor keyword movement, ranking visibility, search trends, and optimization opportunities continuously."],
            ["Does the platform support local SEO and GMB visibility?", "Yes. Businesses can manage local discoverability, GMB insights, reviews, engagement visibility, and local optimization workflows through connected systems."],
            ["How does keyword planning work inside Marketing4Sight?", "The platform structures keyword planning using business context, market intelligence, competitor visibility, and search intent signals connected across workflows."],
            ["Can teams monitor SEO performance continuously?", "Yes. Marketing4Sight provides ongoing visibility into rankings, technical SEO, Core Web Vitals, optimization priorities, and discoverability movement."],
            ["Is this suitable for businesses managing multiple locations or brands?", "Yes. The platform helps teams and agencies maintain connected visibility, local optimization workflows, and search intelligence across multiple brands and locations."]
        ]
    },
    "content-operations": {
        badge: "Content Operations",
        title: "Content operations & social media management built for consistent brand execution",
        desc: "Marketing4Sight helps businesses manage content planning, social media workflows, publishing schedule, campaign alignment, and audience engagement through one connected environment, enabling teams to create faster, maintain consistency, and execute content operations with greater visibility and control.",
        heroImg: "Content calendar grid and social media cross-channel matrix roadmap",
        imageSrc: contentOperations,
        mattersTitle: "Content moves faster when workflows stay connected",
        mattersDesc: "Content, campaigns, audience engagement, and publishing activities continuously influence brand visibility across platforms. Marketing4Sight keeps planning, creation, and operational visibility connected so businesses maintain stronger consistency, faster execution, and clearer content direction.",
        compare: [
            ["Content planning handled across disconnected tools", "Connected content and publishing workflows"],
            ["Social media activities managed separately by platforms", "Unified operational visibility across channels"],
            ["Teams manually coordinate publishing schedules", "Structured workflow visibility across content operations"],
            ["Campaign content and execution operate independently", "Connected campaign and content alignment"],
            ["Content consistency dependent on scattered approvals", "Centralized visibility into workflows and publishing"],
            ["Performance visibility separated from publishing operations", "Connected content visibility across operational layers"]
        ],
        centerTitle: "Your connected environment for content and social media operations",
        centerDesc: "Manage content workflows, social media execution, publishing visibility, campaign alignment, and operational coordination from one connected content operations layer.",
        centerImg: "Automated content scheduler publishing view screen",
        chooseDesc: "Marketing4Sight combines content workflows, publishing visibility, campaign coordination, AI-assisted execution, and connected social media operations into one environment, helping businesses maintain stronger consistency and faster content execution across platforms.",
        features: [
            ["Connected content workflows", "Keep content planning, campaigns, approvals, and execution continuously aligned."],
            ["Social media operational visibility", "Manage Instagram, Facebook, LinkedIn, X, and YouTube workflows through connected operations."],
            ["Campaign-aligned content execution", "Ensure content activities remain connected to ongoing campaigns, priorities, and audience engagement goals."],
            ["Centralized publishing coordination", "Track schedules, approvals, workflow progress, and execution visibility from one environment."],
            ["AI-assisted content support", "Reduce operational effort through intelligent content assistance, workflow visibility, and connected execution support."],
            ["Consistent cross-platform execution", "Maintain structured messaging, channel alignment, and operational consistency across content touchpoints."]
        ],
        ctaText: "Scale content operations with connected visibility",
        ctaDesc: "Turn content workflows, publishing operations, and social media visibility into faster execution and more consistent brand communication.",
        faqs: [
            ["How does Marketing4Sight support content operations?", "The platform connects content planning, workflow visibility, campaign alignment, and operational coordination into one environment for more structured execution."],
            ["Can teams manage social media workflows inside the platform?", "Yes. Marketing4Sight helps businesses organize workflows across Instagram, Facebook, LinkedIn, X, and YouTube through connected content and operational visibility."],
            ["Can teams create social media content inside the platform?", "Yes. Marketing4Sight helps teams create, organize, and manage social media content across platforms through connected content workflows, AI-assisted support, and centralized visibility."],
            ["Does the platform support content planning and workflow visibility?", "Yes. Teams can organize content calendars, manage workflow progress, maintain publishing visibility, and track ongoing content activities through connected operational workflows."],
            ["How does Marketing4Sight improve content consistency?", "The platform keeps content planning, campaigns, workflows, and operational visibility continuously connected across marketing activities and channels."],
            ["Is this useful for agencies and multi-brand teams?", "Yes. Marketing4Sight helps agencies and teams maintain structured content workflows, operational visibility, and execution consistency across multiple brands and marketing activities."]
        ]
    }
};

export default function SolutionsHub() {
    const [activeSolution, setActiveSolution] = useState('strategy-planning');
    const [isFading, setIsFading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const tab = searchParams.get('tab');
        if (tab && useCasesData[tab] && tab !== activeSolution) {
            handleSolutionChange(tab);
        }
    }, [location.search]);

    const handleSolutionChange = (key) => {
        if (key === activeSolution) return;
        setIsFading(true);
        setTimeout(() => {
            setActiveSolution(key);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsFading(false);
        }, 400);
    };

    const data = useCasesData[activeSolution];

    return (
        <div className="text-[#1C1635] antialiased selection:bg-[#e7eb90] selection:text-[#1C1635] font-['Helvetica_Neue',sans-serif]">
            
            <style dangerouslySetInnerHTML={{__html: `
                details > summary::-webkit-details-marker { display: none; }
            `}} />

            {/* Dynamic Animated Background from ContactUs.jsx */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#e7eb90]/20 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] bg-blue-300/20 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-[#00adc4]/10 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-4000"></div>
                <div className="absolute inset-0 bg-white/40 [1px]"></div>
            </div>

            {/* Mobile Tab Navigation (Sticky) */}
            <div className="lg:hidden sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm overflow-x-auto hide-scrollbar">
                <div className="flex px-4 py-3 gap-2 min-w-max">
                    {Object.keys(useCasesData).map((key) => (
                        <button
                            key={key}
                            onClick={() => handleSolutionChange(key)}
                            className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeSolution === key ? 'bg-[#0859b8] text-white shadow-md' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                        >
                            {useCasesData[key].badge}
                        </button>
                    ))}
                </div>
            </div>

            <div className="relative z-0">
                <div 
                    id="solution-master-engine"
                    className="transition-all duration-400 pt-20"
                    style={{
                        opacity: isFading ? 0 : 1,
                        transform: isFading ? 'translateY(15px)' : 'translateY(0)',
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                >
                    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden flex items-center min-h-[85vh]">
                        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-white/60  border border-gray-200 px-4 py-1.5 rounded-full mb-6 shadow-sm">
                                    <span className="w-2 h-2 rounded-full secondary_bg animate-pulse"></span>
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{data.badge}</span>
                                </div>
                                <h1 className="heading1 text-4xl lg:text-6xl primary_color leading-[1.1] mb-6">{data.title}</h1>
                                <p className="bodyText text-lg text-gray-600 mb-10 leading-relaxed">{data.desc}</p>
                                <Link to="/contact-us" className="primary_bg text-white font-bold py-4 px-10 rounded-2xl hover:opacity-90 transition shadow-[0_10px_30px_rgba(8,89,184,0.3)] text-lg inline-block">Book a Demo</Link>
                            </div>
                            <div className="bg-white/70  p-2 rounded-3xl border border-white shadow-[0_20px_60px_rgba(0,0,0,0.05)] flex items-center justify-center transform hover:scale-[1.02] transition duration-500 overflow-hidden">
                                {data.imageSrc ? (
                                    <img src={data.imageSrc} alt={data.heroImg} className="w-full h-auto object-cover rounded-2xl" />
                                ) : (
                                    <div className="text-center p-8 min-h-[400px] flex flex-col items-center justify-center">
                                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 primary_color shadow-inner">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        </div>
                                        <p className="font-bold text-gray-400 uppercase text-xs tracking-widest mb-3">UI Interface Output</p>
                                        <p className="heading2 text-[#1C1635] font-bold text-sm max-w-sm mx-auto px-4 leading-relaxed">{data.heroImg}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>

                    <section className="py-24 bg-white/40  border-y border-gray-200/50 relative">
                        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-5 gap-16 items-center">
                            <div className="lg:col-span-2">
                                <h2 className="heading1 text-3xl primary_color mb-4">Why It Matters</h2>
                                <h3 className="heading2 text-2xl font-bold text-[#1C1635] mb-6 leading-snug">{data.mattersTitle}</h3>
                                <p className="bodyText text-gray-600 leading-relaxed text-lg">{data.mattersDesc}</p>
                            </div>
                            <div className="lg:col-span-3">
                                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                                    <div className="grid grid-cols-2 bg-gray-50 border-b border-gray-100 p-6">
                                        <div className="font-bold text-gray-400 text-xs uppercase tracking-widest">Traditional Approaches</div>
                                        <div className="font-bold primary_color text-xs uppercase tracking-widest border-l border-gray-200 pl-6">Marketing4Sight</div>
                                    </div>
                                    <div className="divide-y divide-gray-100">
                                        {data.compare.map((row, i) => (
                                            <div key={i} className="grid grid-cols-2 p-6 hover:bg-blue-50/40 transition duration-300">
                                                <div className="bodyText text-gray-500 pr-6 flex gap-3 text-sm"><span className="text-red-400 shrink-0 mt-0.5">✕</span> {row[0]}</div>
                                                <div className="bodyText text-[#1C1635] font-bold pl-6 border-l border-gray-100 flex gap-3 text-sm"><span className="secondary_color shrink-0 mt-0.5">✓</span> {row[1]}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-32 primary_bg text-white text-center relative overflow-hidden">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-400/20 blur-[150px] rounded-full pointer-events-none"></div>
                        
                        <div className="max-w-5xl mx-auto px-6 relative z-10">
                            <h2 className="heading1 text-4xl md:text-5xl mb-6">{data.centerTitle}</h2>
                            <p className="bodyText text-blue-100 text-xl max-w-3xl mx-auto mb-16 leading-relaxed">{data.centerDesc}</p>
                            
                            <Link to="/product#video" className="bg-white/90  rounded-3xl border border-white/20 aspect-[16/9] w-full flex items-center justify-center p-6 shadow-[0_30px_60px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition duration-700 cursor-pointer group block">
                                <div className="text-center transition duration-500 group-hover:-translate-y-2">
                                    <div className="w-20 h-20 bg-[#e7eb90] text-[#1C1635] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(231,235,144,0.4)] group-hover:scale-110 transition duration-500">
                                        <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M5 3l14 9-14 9V3z"/></svg>
                                    </div>
                                    <p className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mb-3">System Workspace Preview</p>
                                    <p className="heading2 text-white max-w-sm mx-auto text-lg">{data.centerImg}</p>
                                </div>
                            </Link>
                        </div>
                    </section>

                    <section className="py-24 relative z-10">
                        <div className="max-w-7xl mx-auto px-6 lg:px-8">
                            <div className="text-center max-w-3xl mx-auto mb-20">
                                <h2 className="heading1 text-4xl primary_color mb-6">Why Businesses Choose Marketing4Sight</h2>
                                <p className="bodyText text-gray-600 text-lg leading-relaxed">{data.chooseDesc}</p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {data.features.map((feat, i) => (
                                    <div key={i} className="bg-white/80  p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(8,89,184,0.08)] hover:-translate-y-2 transition-all duration-500 border-t-4 border-t-[#00adc4] hover:border-t-[#0859b8] group relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#0859b8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none"></div>
                                        <div className="w-14 h-14 bg-[#00adc4]/10 rounded-2xl flex items-center justify-center text-[#00adc4] mb-6 group-hover:bg-[#0859b8] group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-500 relative z-10">
                                            <svg className="w-6 h-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                        </div>
                                        <h3 className="heading2 text-xl font-bold text-[#1C1635] mb-3 group-hover:text-[#0859b8] transition-colors duration-500 relative z-10">{feat[0]}</h3>
                                        <p className="bodyText text-gray-600 text-sm leading-relaxed relative z-10">{feat[1]}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="py-24 bg-gray-50/50  border-y border-gray-200/50 text-center">
                        <div className="max-w-4xl mx-auto px-6">
                            <h2 className="heading1 text-4xl md:text-5xl primary_color mb-6">{data.ctaText}</h2>
                            <p className="bodyText text-gray-600 text-xl mb-12">{data.ctaDesc}</p>
                            <Link to="/contact-us" className="primary_bg text-white font-bold py-4 px-12 rounded-2xl hover:opacity-90 transition shadow-xl shadow-blue-900/20 text-lg inline-block hover:-translate-y-1">Book a Demo</Link>
                        </div>
                    </section>

                    <section className="py-24">
                        <div className="max-w-4xl mx-auto px-6">
                            <h2 className="heading1 text-4xl primary_color text-center mb-16">{data.badge} FAQs</h2>
                            <div className="space-y-4">
                                {data.faqs.map((faq, i) => (
                                    <details key={i} className="group bg-white/80  border border-gray-200 rounded-2xl transition hover:shadow-md">
                                        <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-[#1C1635] text-lg list-none [&::-webkit-details-marker]:hidden">
                                            <span className="heading2">{faq[0]}</span>
                                            <span className="secondary_color group-open:rotate-180 transition-transform duration-300 bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center">&darr;</span>
                                        </summary>
                                        <div className="bodyText px-6 pb-6 text-base text-gray-600 border-t border-gray-100 pt-4 mt-2 leading-relaxed">
                                            {faq[1]}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

                <section id="domains-grid" className="py-24 primary_bg relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-cyan-400/30 w-[600px] h-[600px] blur-[120px] rounded-full pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 bg-blue-900 w-[500px] h-[500px] blur-[100px] rounded-full pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 bg-white/90  border border-white/20 px-4 py-1.5 rounded-full mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#e7eb90] animate-pulse"></span>
                            <span className="text-xs font-bold text-white uppercase tracking-widest">Solutions Hub</span>
                        </div>
                        <h2 className="heading1 text-4xl md:text-5xl text-white mb-12">Explore Our 6 Specialized Domains</h2>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            
                            <div onClick={() => handleSolutionChange('strategy-planning')} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/20 hover:border-white/40 transition-all duration-500 text-left group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,173,196,0.3)] cursor-pointer">
                                <div className="w-14 h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0859b8] group-hover:shadow-lg transition-all duration-500">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                </div>
                                <h3 className="heading2 text-xl font-bold text-white mb-2 group-hover:text-[#0859b8] transition-colors duration-500">Strategy Planning</h3>
                                <p className="bodyText text-blue-100 text-sm group-hover:text-gray-600 transition-colors duration-500">Align teams, set goals, and cascade strategic OKRs.</p>
                            </div>

                            <div onClick={() => handleSolutionChange('governance')} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/20 hover:border-white/40 transition-all duration-500 text-left group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,173,196,0.3)] cursor-pointer">
                                <div className="w-14 h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00adc4] group-hover:shadow-lg transition-all duration-500">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                </div>
                                <h3 className="heading2 text-xl font-bold text-white mb-2 group-hover:text-[#00adc4] transition-colors duration-500">Governance</h3>
                                <p className="bodyText text-blue-100 text-sm group-hover:text-gray-600 transition-colors duration-500">Monitor execution consistency and compliance.</p>
                            </div>

                            <div onClick={() => handleSolutionChange('optimization')} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/20 hover:border-white/40 transition-all duration-500 text-left group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,173,196,0.3)] cursor-pointer">
                                <div className="w-14 h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0859b8] group-hover:shadow-lg transition-all duration-500">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path></svg>
                                </div>
                                <h3 className="heading2 text-xl font-bold text-white mb-2 group-hover:text-[#0859b8] transition-colors duration-500">Optimization</h3>
                                <p className="bodyText text-blue-100 text-sm group-hover:text-gray-600 transition-colors duration-500">Competitor positioning and visibility dashboards.</p>
                            </div>

                            <div onClick={() => handleSolutionChange('multi-channel-ops')} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/20 hover:border-white/40 transition-all duration-500 text-left group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,173,196,0.3)] cursor-pointer">
                                <div className="w-14 h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00adc4] group-hover:shadow-lg transition-all duration-500">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                                </div>
                                <h3 className="heading2 text-xl font-bold text-white mb-2 group-hover:text-[#00adc4] transition-colors duration-500">Multi-Channel Ops</h3>
                                <p className="bodyText text-blue-100 text-sm group-hover:text-gray-600 transition-colors duration-500">Process orchestration and publishing workflows.</p>
                            </div>

                            <div onClick={() => handleSolutionChange('organic-growth')} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/20 hover:border-white/40 transition-all duration-500 text-left group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,173,196,0.3)] cursor-pointer">
                                <div className="w-14 h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0859b8] group-hover:shadow-lg transition-all duration-500">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <h3 className="heading2 text-xl font-bold text-white mb-2 group-hover:text-[#0859b8] transition-colors duration-500">Organic Growth</h3>
                                <p className="bodyText text-blue-100 text-sm group-hover:text-gray-600 transition-colors duration-500">Local search GMB listings and keyword rank universes.</p>
                            </div>

                            <div onClick={() => handleSolutionChange('content-operations')} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/20 hover:border-white/40 transition-all duration-500 text-left group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,173,196,0.3)] cursor-pointer">
                                <div className="w-14 h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00adc4] group-hover:shadow-lg transition-all duration-500">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v12m0 0l-4-4m4 4l4-4M16 17V3m0 0l-4 4m4-4l4 4"></path></svg>
                                </div>
                                <h3 className="heading2 text-xl font-bold text-white mb-2 group-hover:text-[#00adc4] transition-colors duration-500">Content Operations</h3>
                                <p className="bodyText text-blue-100 text-sm group-hover:text-gray-600 transition-colors duration-500">Campaign-aligned asset planning and social flows.</p>
                            </div>

                        </div>
                    </div>
                </section>

                <footer className="bg-transparent text-[#1C1635] py-24 text-center border-t border-gray-200">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="heading1 text-4xl lg:text-5xl mb-8 leading-tight primary_color">Ready to transform your operations?</h2>
                        <p className="bodyText text-gray-600 mb-10 text-lg">Connect your strategy, execution, and performance in one place.</p>
                        <Link to="/contact-us" className="primary_bg text-white font-bold py-4 px-14 rounded-2xl hover:opacity-90 transition text-lg inline-block shadow-xl shadow-blue-900/20">
                            Book a Demo Today
                        </Link>
                    </div>
                </footer>

                <Footer />
            </div>
        </div>
    );
}
