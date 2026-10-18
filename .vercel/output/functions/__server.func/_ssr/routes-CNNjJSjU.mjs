import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as useLanguage } from "./language-provider-DKKj0NBv.mjs";
import { $ as GraduationCap, A as Minus, At as Bike, B as LockKeyhole, C as Plus, Ct as Car, D as Network, Dt as Box, E as Orbit, Et as Braces, F as Megaphone, Ft as ArrowRight, G as Layers, I as Maximize, It as ArrowLeft, J as Image$1, K as Instagram, L as Maximize2, Lt as ArrowDownRight, N as MessageCircle, Nt as Atom, Ot as BookOpen, P as Menu, Pt as ArrowUpRight, Q as Handshake, R as MapPin, S as Quote, St as ChartNoAxesCombined, T as Pause, Tt as CalendarDays, U as Linkedin, V as LocateFixed, W as Lightbulb, X as Hexagon, Y as House, _ as Share2, a as Users, b as RotateCcw, c as TrendingUp, ct as Earth, d as Star, dt as Copy, et as Globe, ft as Compass, g as Share, gt as CircleDot, h as ShipWheel, it as Figma, jt as Backpack, k as MousePointer2, l as Trash2, lt as Download, m as Signal, mt as CodeXml, n as X, nt as Gem, ot as Facebook, p as Sparkles, pt as Command, q as Info, r as Waves, rt as FileText, s as Triangle, st as ExternalLink, t as Youtube, tt as Github, u as Target, ut as Cuboid, v as Send, vt as ChevronRight, w as Play, wt as CalendarRange, x as Rocket, xt as Check, y as Search, yt as ChevronLeft, z as Mail } from "../_libs/lucide-react.mjs";
import { t as Button } from "./select-kZT_4T7Q.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as DialogTitle, i as DialogDescription, n as DialogClose, o as SiteNav, r as DialogContent, t as Dialog } from "./site-nav-RvkA18aU.mjs";
import { t as voices_table_jpg_asset_default } from "./voices-table.jpg.asset-Dm77GlHu.mjs";
import { n as thinkingProducts } from "./products-amuyvifo.mjs";
import { t as ProductPreview } from "./ProductPreview-CJDPlo9O.mjs";
import { a as useMotionValueEvent, i as useScroll, n as useSpring, o as motion, r as useTransform, s as AnimatePresence, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { r as select_default } from "../_libs/d3-drag+d3-selection.mjs";
import { n as identity, t as zoom_default } from "../_libs/d3-zoom.mjs";
import { t as naturalEarth1_default } from "../_libs/d3-geo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CNNjJSjU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
/**
* All portfolio content for "The Trail". Components only render this.
* Anything with `sample: true` is temporary filler: open the site with ?edit=1 to see it outlined.
*/
var u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;
var photos = {
	dora: u("photo-1680182825225-12501e967483"),
	core: u("photo-1708578200684-3aa944b73237"),
	web3conf: u("photo-1471357674240-e1a485acb3e1"),
	token: u("photo-1588107468905-af27ccd44050"),
	pizza: u("photo-1666030433251-f98e43be8241")
};
var stops = [
	{
		id: "gate",
		name: "Departure Gate",
		stamp: "Boarded",
		nav: "Home",
		express: true,
		guide: "Start wherever you like. The trail is open."
	},
	{
		id: "village",
		name: "Communities shelf",
		stamp: "Rooms entered",
		nav: "Community",
		express: false,
		guide: "Meet the communities I've helped build."
	},
	{
		id: "night",
		name: "Night Camp",
		stamp: "Supplies packed",
		nav: "Resources",
		express: false,
		guide: "Pack whatever you'd like. It's all free."
	},
	{
		id: "postcards",
		name: "Postcards",
		stamp: "Voices heard",
		nav: "Testimonials",
		express: true,
		guide: "Flip them. People were kind."
	},
	{
		id: "basecamp",
		name: "Base Camp",
		stamp: "Arrived",
		express: true,
		guide: "You made it. Write him a postcard?"
	}
];
var menuItems = [
	{
		label: "Home",
		target: "gate"
	},
	{
		label: "Community",
		target: "village"
	},
	{
		label: "Resources",
		target: "night"
	},
	{
		label: "Products",
		target: "products"
	},
	{
		label: "Testimonials",
		target: "postcards"
	}
];
var site = {
	name: "Shivam Garg",
	tagline: "Not just a portfolio. A timeline of belief.",
	cvUrl: "/shivam-garg-cv.txt",
	cvSample: true,
	email: "hello@example.com",
	emailSample: true
};
var hero = {
	sub: "I build the infrastructure that turns curiosity into communities.",
	eyebrow: "Community building · Developer relations · Ecosystem growth",
	invitation: "From first conversation to global momentum.",
	note: "Not just a portfolio. A timeline of belief.",
	proof: [
		{
			number: "200K",
			label: "active users in month one",
			context: "Socrates Global",
			target: "village"
		},
		{
			number: "10,000+",
			label: "developers onboarded",
			context: "Quira",
			target: "village"
		},
		{
			number: "5,000+",
			label: "ambassadors across 14+ countries",
			context: "Socrates Global",
			target: "village"
		},
		{
			number: "#1",
			label: "Product of the Day & Week",
			context: "TechUp Labs · Product Hunt",
			target: "products"
		}
	],
	dossier: {
		number: "01 / 09",
		title: "The Trail",
		origin: "A kitchen table",
		destination: "What we built together"
	},
	left: "Hi, I'm Shivam. I've spent the last few years helping Web3, open-source and developer communities feel a little less lonely. In 2025 I started DoraDAO with one stubborn idea: take Web3 to the cities everyone skips.",
	pills: [
		{
			value: "20 lakh+ views",
			target: "case-gwy"
		},
		{
			value: "10,000+ developers",
			target: "role-quira"
		},
		{
			value: "5,000+ ambassadors",
			target: "role-socrates"
		}
	],
	flags: [
		{
			f: "🇮🇳",
			tip: "Where it all started"
		},
		{
			f: "🇬🇧",
			tip: "Socrates and Quira: remote from London"
		},
		{
			f: "🇺🇸",
			tip: "Outdefine: remote from San Francisco"
		},
		{
			f: "🇦🇪",
			tip: "Token2049 pre-event e-meetup, Dubai"
		},
		{
			f: "🇹🇭",
			tip: "Socrates: growth in Thailand"
		},
		{
			f: "🇮🇩",
			tip: "Socrates: SEA growth"
		},
		{
			f: "🇵🇭",
			tip: "Socrates: SEA growth"
		},
		{
			f: "🇻🇳",
			tip: "Socrates: SEA growth"
		},
		{
			f: "🇧🇩",
			tip: "Socrates: South Asia growth"
		},
		{
			f: "🇱🇰",
			tip: "Socrates: South Asia growth"
		},
		{
			f: "🇳🇵",
			tip: "Girls Who Yap partner"
		},
		{
			f: "🇵🇰",
			tip: "Socrates: South Asia growth"
		},
		{
			f: "🇰🇷",
			tip: "Girls Who Yap partner"
		},
		{
			f: "🇨🇳",
			tip: "HeLa Labs: APAC developer relations"
		}
	],
	flagsLine: "Worked across 15+ countries",
	flagsSample: true
};
[
	"Solana",
	"Berachain",
	"Polygon",
	"Chainlink",
	"Core DAO",
	"Token2049",
	"HeLa",
	"Socrates",
	"Quira",
	"GirlScript",
	"FOSSASIA",
	"NASA Space Apps"
].map((t) => ({ t }));
var roles = [
	{
		id: "role-hela",
		company: "HeLa Labs",
		role: "Developer Relations, Global",
		years: "2025 to 2026",
		from: 2025,
		to: 2026,
		sample: true,
		where: "India",
		tags: ["L1 Chain"],
		desc: "A next-generation Layer-1 built for real-world adoption across Web2 and Web3: gaming, DeFi, DePIN and enterprise.",
		did: [
			"Redesigned technical docs on GitBook and wrote the full developer wiki",
			"Built a community flywheel",
			"Structured the Developer Advocate program",
			"Ran 30+ workshops and talks reaching 10,000+ developers",
			"Built onboarding dashboards and playbooks that cut repetitive support",
			"Fed community insight back into the product roadmap"
		],
		highlights: [
			"40 meetups in 60 days",
			"500 projects launched",
			"2,500+ advocate applications",
			"6,000+ developer activations"
		],
		tools: "GitBook and the HeLa developer wiki",
		links: [{
			label: "Visit website",
			href: "https://helalabs.com"
		}, {
			label: "Developer docs",
			href: "https://docs.helalabs.com"
		}]
	},
	{
		id: "role-socrates",
		company: "Socrates Global",
		role: "Head of Ecosystem",
		years: "Oct 2024 to present",
		from: 2024,
		to: 2026,
		where: "London",
		tags: ["SocialFi", "GameFi"],
		desc: "A global Web3 social and entertainment platform where people earn rewards for Q&As, live spaces and sharing knowledge.",
		did: [
			"Launched a full ecosystem growth engine from scratch",
			"Grew SEA, UK and South Asia",
			"Username-NFT campaigns and memecoin education",
			"Ran the native token referral drive and IDO preparation",
			"50+ KOLs on performance deals that lowered acquisition cost",
			"The regional \"Vad ViVad\" AMA campaign",
			"A lean hiring sprint that onboarded 10 core team members",
			"Cut user complaints by 10% and lifted feature retention by 10%"
		],
		highlights: [
			"200K active users in month one",
			"5,000+ ambassadors in 14+ countries",
			"60+ partnerships",
			"45K+ loyal community members after the TGE"
		],
		tools: "Dune, RootData, Galxe, TaskOn, Intract, Lark, Luma, Unstop, Canva, Figma",
		embeds: [{
			label: "Instagram reel",
			href: "https://www.instagram.com/reel/DCaBR4btKe3/"
		}, {
			label: "YouTube video",
			href: "https://youtu.be/kgwoniXGL1o"
		}]
	},
	{
		id: "role-quira",
		company: "Quira",
		role: "Developer Relations",
		years: "Oct 2023 to Oct 2024",
		from: 2023,
		to: 2024,
		where: "London",
		tags: ["Open Source"],
		desc: "A questing platform for dev tools.",
		did: [
			"Onboarded 10,000+ developers",
			"Restructured Discord and lifted channel engagement 60%",
			"50+ cross-border community partnerships",
			"Ran AMAs and workshops with 100+ peak attendees",
			"The global open-source cohort"
		],
		highlights: [
			"10,000+ developers",
			"800+ stars in 48 hours",
			"50+ partnerships",
			"2,000+ onboarded at zero cost"
		]
	},
	{
		id: "role-outdefine",
		company: "Outdefine (Talent Protocol)",
		role: "Head of Community, India",
		years: "Feb to Jun 2024",
		from: 2024,
		to: 2024,
		where: "San Francisco",
		tags: ["Talent"],
		desc: "Contract role on EVM / Polygon L2.",
		did: [
			"15+ on-ground city and university tours",
			"150 ambassadors onboarded",
			"Scaled daily platform posts from 30 to 200 with a token-incentivised system",
			"User acquisition under $0.50 through hackathon and student communities",
			"B2B outreach to hiring partners"
		],
		highlights: [
			"6,000+ members in 4 months",
			"1,000+ ambassador applications in 30 days",
			"3x developer adoption"
		]
	},
	{
		id: "role-nexus",
		company: "Nexus Interactive",
		role: "Head of Marketing, India",
		years: "Jun to Oct 2024",
		from: 2024,
		to: 2024,
		where: "London",
		tags: ["GameFi"],
		desc: "Freelance, GameFi on Berachain.",
		did: [
			"India go-to-market",
			"The Nexus Arcade program",
			"Community tournaments and merchandise",
			"A Web2 to Web3 onboarding funnel"
		],
		highlights: [
			"2,000+ gamers in 2 weeks",
			"70% 15-day retention",
			"26% interest-to-gameplay conversion",
			"6 states, 30+ local gaming clubs"
		]
	},
	{
		id: "role-multichain",
		company: "Multichain",
		role: "Developer Relations / Head of Growth & Marketing, India",
		years: "Jan 2022 to Aug 2024",
		from: 2022,
		to: 2024,
		where: "India",
		tags: ["L1 Chain"],
		highlights: [
			"~31K newsletter subscribers",
			"44% open rate",
			"15+ IRL events",
			"6-figure sponsorships at 40% net margin"
		]
	},
	{
		id: "role-techup",
		company: "TechUp Labs",
		role: "Product and Community Manager",
		years: "Jul to Dec 2023",
		from: 2023,
		to: 2023,
		where: "India",
		tags: ["SaaS"],
		highlights: [
			"Product of the Day and Week in 18 hours",
			"2x user acquisition",
			"10x traffic spike",
			"+60% post-launch engagement"
		]
	},
	{
		id: "role-girlscript",
		company: "GirlScript Foundation",
		role: "Program Manager, APAC",
		years: "Mar to Sep 2023",
		from: 2023,
		to: 2023,
		where: "India",
		tags: ["Open Source"],
		desc: "Project: GirlScript Summer of Code 2023. Social growth: LinkedIn 53K to 77.4K, Twitter 4,290 to 7,607, Instagram 500 to 2,200. Also: 800 projects and 20+ countries across the GSSoC network.",
		highlights: [
			"Registrations up 200% (25,000)",
			"11,000+ Discord members",
			"#GSSoC trending for 2 days",
			"137 college and club partnerships"
		]
	},
	{
		id: "role-fossasia",
		company: "FOSSASIA",
		role: "Project Administrator and Mentor",
		years: "2022 to 2023",
		from: 2022,
		to: 2023,
		sample: true,
		where: "India",
		tags: ["Open Source"],
		desc: "GWoC / SWoC / JWoC.",
		highlights: [
			"100+ contributors on the repository",
			"150+ stars",
			"150+ forks",
			"Mentored 200+ people",
			"Top 5 Project Admin and Mentor"
		]
	}
];
photos.pizza;
var events = [
	{
		id: "ev-pizza",
		name: "Bitcoin Pizza Day",
		city: "Agra",
		country: "India",
		date: "20 to 22 May 2025",
		type: "Meetup",
		lat: 27.2,
		lng: 78,
		cover: photos.pizza,
		story: "Everyone was hosting a fully sponsored Pizza Day. I wanted one with no chain agenda and no 'download my wallet.' Just a sharper goal: build distribution in a Tier 3 city so the next event costs almost nothing. Most students there aren't on LinkedIn or X, and colleges only care about names like Google and Microsoft, not Polygon or Solana. So I got my hands dirty: one student connected me to one college T&P cell, and that became conversations with 10 more colleges. 35 registered, 14 qualified, 71% of those who came were active. We left with 7 college contacts for a 'Hackathon 101 Meetup Tour' and 19 new loyal followers."
	},
	{
		id: "ev-core",
		name: "Core DAO Bangalore mixer",
		city: "Bangalore",
		country: "India",
		date: "2025",
		sample: true,
		type: "Meetup",
		lat: 12.97,
		lng: 77.6,
		cover: photos.core,
		story: "A BTCfi hackathon was running, so we put together a developer mixer in three days. 60+ people registered. It was the first spark of Core in India. Role: ideation, registration, marketing, execution, F&B curation, technical support. About Core: the first Proof of Stake layer for Bitcoin, with self-custodial Bitcoin staking and the largest Bitcoin DeFi ecosystem."
	},
	{
		id: "ev-token",
		name: "Token2049 pre-event e-meetup (an idea)",
		city: "Online / Dubai",
		country: "UAE",
		date: "Apr 2025",
		sample: true,
		type: "Meetup",
		lat: 25.2,
		lng: 55.3,
		cover: photos.token,
		story: "Big conferences create fleeting connections and expensive spotlight. I wanted a friendship network before we landed in Dubai: a verified, gated online space with games, product demos and no agencies, free for the first edition."
	},
	{
		id: "ev-web3conf",
		name: "Web3Conf India",
		city: "Goa",
		country: "India",
		date: "Annual",
		sample: true,
		type: "Conference",
		lat: 15.3,
		lng: 74.1,
		cover: photos.web3conf,
		story: "Registration management, cross-marketing, on-ground execution."
	},
	{
		id: "ev-roadshow",
		name: "University Roadshow by DoraDAO (30+ universities)",
		city: "Pan-India",
		country: "India",
		date: "Jun to Jul 2025",
		sample: true,
		type: "Roadshow",
		lat: 22,
		lng: 80,
		story: "Learn to vibe-code from scratch, launch your ideas, compete for $100k+ in prizes."
	},
	{
		id: "ev-nasa",
		name: "NASA Space Apps Challenge, India",
		city: "Pan-India",
		country: "India",
		date: "Oct 2025",
		sample: true,
		type: "Hackathon",
		lat: 19,
		lng: 73
	},
	{
		id: "ev-gwy",
		name: "Girls Who Yap Fellowship",
		city: "Online (global)",
		country: "Global",
		date: "from 30 Jul 2025",
		type: "Fellowship",
		lat: 5,
		lng: 20,
		caseId: "case-gwy"
	},
	{
		id: "ev-gdg",
		name: "GDG On Campus",
		city: "Sharda University, Agra",
		country: "India",
		date: "Oct 2025",
		sample: true,
		type: "Workshop",
		lat: 27.5,
		lng: 77.6,
		story: "Organised an orientation and multiple tech sessions for 500+ students to introduce them to open source and AI."
	},
	...[
		[
			"Global Open Source Cohort (Quira, online, 2024)",
			"Online",
			51.5,
			-.1,
			"Talk"
		],
		[
			"Socrates Universities Roadshow",
			"SEA",
			13.7,
			100.5,
			"Roadshow"
		],
		[
			"Hive (L1) City Road Show",
			"India",
			28.6,
			77.2,
			"Roadshow"
		],
		[
			"Web3 Carnival",
			"India",
			19.1,
			72.9,
			"Meetup"
		],
		[
			"OpenSource Conf",
			"India",
			17.4,
			78.5,
			"Conference"
		],
		[
			"Chainlink SmartCon",
			"Global",
			40.7,
			-74,
			"Conference"
		],
		[
			"Berachain Connect",
			"Global",
			1.35,
			103.8,
			"Meetup"
		],
		[
			"Google WoW",
			"India",
			12.9,
			80.2,
			"Seminar"
		],
		[
			"Web 3.0 Community Day",
			"India",
			18.5,
			73.9,
			"Seminar"
		],
		[
			"Paintball Madness India Launch",
			"India",
			26.9,
			75.8,
			"Meetup"
		],
		[
			"Podcast: House of Y",
			"Online",
			30.7,
			76.8,
			"Talk"
		]
	].map(([name, city, lat, lng, type], i) => ({
		id: `ev-x${i}`,
		name,
		city,
		country: city,
		date: "Details to be added",
		type,
		lat,
		lng,
		sample: true
	}))
];
var dora = {
	title: "DoraDAO",
	role: "Co-founder",
	cover: photos.dora,
	url: "https://doradao.vercel.app/",
	text: "A chain-agnostic platform focused on empowering the next generation of creators and builders. Built fellowship programs, onboarded 1,500+ yappers and collaborated with 40+ global partners.",
	quote: "I'd rather you be curious than convinced."
};
var shelf = [
	{
		name: "DoraDAO",
		tip: "Co-founder",
		spot: "dora"
	},
	{
		name: "GirlScript",
		tip: "Program Manager, APAC",
		spot: "role-girlscript"
	},
	{
		name: "FOSSASIA",
		tip: "Project Admin and Mentor",
		spot: "role-fossasia"
	},
	{
		name: "Socrates",
		tip: "Head of Ecosystem",
		spot: "role-socrates"
	},
	{
		name: "HeLa",
		tip: "Developer Relations",
		spot: "role-hela"
	},
	{
		name: "Nexus",
		tip: "Head of Marketing, India",
		spot: "role-nexus"
	},
	{
		name: "Quira",
		tip: "Developer Relations",
		spot: "role-quira"
	},
	{
		name: "Outdefine",
		tip: "Head of Community, India",
		spot: "role-outdefine"
	},
	{
		name: "Multichain",
		tip: "Growth & Marketing",
		spot: "role-multichain"
	},
	{
		name: "Web3Conf India",
		tip: "Event partner",
		spot: "ev-web3conf"
	},
	{
		name: "Core DAO",
		tip: "Bangalore mixer",
		spot: "ev-core"
	},
	{
		name: "Solana",
		tip: "Partner"
	},
	{
		name: "Polygon",
		tip: "Partner"
	}
];
var resources = [
	{
		t: "5 Common Web3 GTM Motions",
		f: "PDF · 8 min",
		c: "GTM"
	},
	{
		t: "0 to 1 Playbook for Building an L1 Ecosystem",
		f: "Notion · 12 min",
		c: "GTM"
	},
	{
		t: "KOL Campaign Blueprint, CPA to $0.2 to $1.0",
		f: "PDF · 7 min",
		c: "Templates"
	},
	{
		t: "Building an Iconic Ambassador Program, APAC and EMEA",
		f: "Notion · 10 min",
		c: "Case Studies"
	},
	{
		t: "Building a Bear-Proof Community",
		f: "PDF · 6 min",
		c: "Case Studies"
	},
	{
		t: "How to Get the Most Out of a Web3 Hackathon",
		f: "PDF · 6 min",
		c: "Tools"
	},
	{
		t: "How to Build Social Presence in 100 Days",
		f: "Notion · 9 min",
		c: "Templates"
	},
	{
		t: "Scaling Open-Source Projects to GitHub Trending",
		f: "PDF · 8 min",
		c: "Tools"
	},
	{
		t: "Building an AI Community",
		f: "Notion · 7 min",
		c: "GTM"
	}
].map((r) => ({
	...r,
	sample: true
}));
var testimonials = [
	{
		name: "Baptiste Fernandez",
		role: "Founder @Dymmo, former DevRel Head @Quira, former Analytics & Strategy Head @TikTok @Uber",
		post: "Dymmo",
		q: "Shivam is a polished professional who approaches problems with clarity and structure. In the developer relations space, he has built strong ties across a range of developer communities, driven meaningful engagement, and consistently delivered results. Shivam is dependable and would be a valuable asset to any DevRel team."
	},
	{
		name: "Anubha Maneshwar",
		role: "Founder, GirlScript Foundation and Web3Conf India; Forbes Asia U30",
		post: "GirlScript",
		q: "Shivam is a great resource to add in your team. He is a problem solver and a go getter who has significant tech as well as management skills. GirlScript Summer of Code is one of the biggest programs at our foundation which he managed like a pro and also helped us in executing our other initiatives like Web3Conf. I wish him best for the future endeavors. He will be a great asset in any team he joins."
	},
	{
		name: "Sangam Upadhayay",
		role: "EiR & Chief of Staff, Kadam App",
		post: "Kadam",
		q: "I had the privilege of working alongside Shivam during his tenure as a Community Manager, and I was continually impressed by his ability to spearhead projects with boldness and precision. His natural leadership skills and unwavering commitment to achieving the best outcomes make him a valuable asset for any team. Shivam has a bright future ahead, and I wholeheartedly recommend him."
	}
];
var Ctx = (0, import_react.createContext)(null);
var useJourney = () => {
	const c = (0, import_react.useContext)(Ctx);
	if (!c) throw new Error("JourneyProvider missing");
	return c;
};
var ac = null;
function synth(kind) {
	ac ??= new AudioContext();
	const t = ac.currentTime;
	const noise = (dur, freq, gain = .25) => {
		const buf = ac.createBuffer(1, ac.sampleRate * dur, ac.sampleRate);
		const d = buf.getChannelData(0);
		for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
		const src = ac.createBufferSource();
		src.buffer = buf;
		const f = ac.createBiquadFilter();
		f.type = "bandpass";
		f.frequency.value = freq;
		const g = ac.createGain();
		g.gain.value = gain;
		src.connect(f).connect(g).connect(ac.destination);
		src.start(t);
	};
	const tone = (freq, dur, gain = .3) => {
		const o = ac.createOscillator();
		const g = ac.createGain();
		o.frequency.setValueAtTime(freq, t);
		o.frequency.exponentialRampToValueAtTime(freq / 3, t + dur);
		g.gain.setValueAtTime(gain, t);
		g.gain.exponentialRampToValueAtTime(.001, t + dur);
		o.connect(g).connect(ac.destination);
		o.start(t);
		o.stop(t + dur);
	};
	if (kind === "tear") noise(.35, 2500);
	if (kind === "thump") tone(140, .25, .5);
	if (kind === "click") tone(900, .05, .15);
	if (kind === "page") noise(.25, 1200, .15);
	if (kind === "whoosh") noise(.5, 600, .2);
	if (kind === "crackle") for (let i = 0; i < 6; i++) setTimeout(() => noise(.05, 3e3, .2), i * 90);
}
function JourneyProvider({ children }) {
	const [stamps, setStamps] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [current, setCurrent] = (0, import_react.useState)(0);
	const [guide, setGuide] = (0, import_react.useState)(true);
	const [sound, setSound] = (0, import_react.useState)(false);
	const [reduce, setReduce] = (0, import_react.useState)(false);
	const [plain, setPlain] = (0, import_react.useState)(false);
	const [express, setExpress] = (0, import_react.useState)(false);
	const [autopilot, setAutopilot] = (0, import_react.useState)(false);
	const [edit, setEdit] = (0, import_react.useState)(false);
	const [konami, setKonami] = (0, import_react.useState)(false);
	const [guideOverride, say] = (0, import_react.useState)(null);
	const soundRef = (0, import_react.useRef)(sound);
	soundRef.current = sound;
	(0, import_react.useEffect)(() => {
		setEdit(new URLSearchParams(window.location.search).get("edit") === "1");
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setReduce(true);
			setPlain(true);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("edit-mode", edit);
	}, [edit]);
	const play = (0, import_react.useCallback)((s) => {
		if (soundRef.current) try {
			synth(s);
		} catch {}
	}, []);
	const earn = (0, import_react.useCallback)((i) => setStamps((prev) => {
		if (prev.has(i)) return prev;
		const n = new Set(prev);
		n.add(i);
		play("thump");
		return n;
	}), [play]);
	const travel = (0, import_react.useCallback)((id) => {
		document.getElementById(id)?.scrollIntoView({
			behavior: reduce ? "auto" : "smooth",
			block: "start"
		});
	}, [reduce]);
	const value = (0, import_react.useMemo)(() => ({
		stamps,
		earn,
		current,
		setCurrent,
		guide,
		setGuide,
		sound,
		setSound,
		reduce,
		setReduce,
		plain,
		setPlain,
		express,
		setExpress,
		autopilot,
		setAutopilot,
		edit,
		play,
		travel,
		guideOverride,
		say,
		konami,
		setKonami
	}), [
		stamps,
		earn,
		current,
		guide,
		sound,
		reduce,
		plain,
		express,
		autopilot,
		edit,
		play,
		travel,
		guideOverride,
		konami
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ctx.Provider, {
		value,
		children
	});
}
/** Wraps one stop: awards its stamp at ~40% visibility and reports it as current. */
function Stop({ index, children, className = "", dark = false }) {
	const { earn, setCurrent, express } = useJourney();
	const ref = (0, import_react.useRef)(null);
	const [open, setOpen] = (0, import_react.useState)(false);
	const stop = stops[index];
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => {
			if (!e) return;
			if (e.intersectionRatio >= .4 || e.isIntersecting && e.intersectionRect.height > window.innerHeight * .4) {
				earn(index);
				setCurrent(index);
			}
		}, { threshold: [
			0,
			.1,
			.2,
			.4,
			.6
		] });
		io.observe(el);
		return () => io.disconnect();
	}, [
		earn,
		setCurrent,
		index
	]);
	const collapsed = express && !stop.express && !open;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: stop.id,
		ref,
		"data-stop": index,
		"aria-label": `Stop ${index + 1} of ${stops.length}: ${stop.name}`,
		className: `tactile-stop relative scroll-mt-20 ${dark ? "stop-dark bg-background" : ""} ${className}`,
		children: collapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-content px-6 py-10 md:pl-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setOpen(true),
				className: "label-xs border-b border-dashed py-2 text-trail-ink",
				children: [
					"Stop ",
					index,
					": ",
					stop.name,
					" · Show this stop"
				]
			})
		}) : children
	});
}
var SESSION_KEY = "avocado-opening-seen";
/** Unit step response of an underdamped mass-spring-damper, in seconds. */
function springStep(time, stiffness = 180, damping = 17) {
	if (time <= 0) return 0;
	const decay = damping / 2;
	const frequency = Math.sqrt(stiffness - decay * decay);
	return 1 - Math.exp(-decay * time) * (Math.cos(frequency * time) + decay / frequency * Math.sin(frequency * time));
}
function OpeningBeat({ onComplete }) {
	const [visible, setVisible] = (0, import_react.useState)(true);
	const left = (0, import_react.useRef)(null);
	const right = (0, import_react.useRef)(null);
	const fruit = (0, import_react.useRef)(null);
	const seed = (0, import_react.useRef)(null);
	const seedLeft = (0, import_react.useRef)(null);
	const seedRight = (0, import_react.useRef)(null);
	const shoot = (0, import_react.useRef)(null);
	const hole = (0, import_react.useRef)(null);
	const completed = (0, import_react.useRef)(false);
	const maskId = (0, import_react.useId)();
	const finish = (0, import_react.useCallback)(() => {
		if (completed.current) return;
		completed.current = true;
		try {
			sessionStorage.setItem(SESSION_KEY, "1");
		} catch {}
		setVisible(false);
		onComplete();
	}, [onComplete]);
	(0, import_react.useEffect)(() => {
		if (!visible) return;
		let seen = false;
		try {
			seen = sessionStorage.getItem(SESSION_KEY) === "1";
		} catch {}
		const motion = matchMedia("(prefers-reduced-motion: reduce)");
		if (seen || motion.matches) {
			finish();
			return;
		}
		const overflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const keydown = (event) => {
			if (event.key === "Escape") finish();
		};
		const motionChanged = () => {
			if (motion.matches) finish();
		};
		window.addEventListener("keydown", keydown);
		motion.addEventListener("change", motionChanged);
		let frame = 0;
		let start;
		const animate = (now) => {
			start ??= now;
			const t = (now - start) / 1e3;
			const arrive = springStep(t, 150, 19);
			const split = springStep(t - .55, 150, 15);
			const pop = springStep(t - .88, 220, 15);
			const open = springStep(t - 1.35, 190, 16);
			const grow = springStep(t - 1.48, 180, 18);
			const reveal = springStep(t - 1.92, 90, 18);
			left.current?.setAttribute("transform", `translate(${-98 * split} ${14 * split}) rotate(${-23 * split} 200 230)`);
			right.current?.setAttribute("transform", `translate(${98 * split} ${14 * split}) rotate(${23 * split} 200 230)`);
			seed.current?.setAttribute("transform", `translate(0 ${-30 * pop}) translate(200 245) scale(${1 + .12 * pop}) translate(-200 -245)`);
			seedLeft.current?.setAttribute("transform", `translate(${-14 * open} ${6 * open}) rotate(${-14 * open} 200 270)`);
			seedRight.current?.setAttribute("transform", `translate(${14 * open} ${6 * open}) rotate(${14 * open} 200 270)`);
			shoot.current?.setAttribute("transform", `translate(200 245) scale(${Math.max(0, grow)}) translate(-200 -245)`);
			if (fruit.current) {
				fruit.current.style.transform = `translateY(${18 * (1 - arrive)}px) scale(${.86 + .14 * arrive})`;
				fruit.current.style.opacity = String(Math.max(0, Math.min(1, arrive) * (1 - reveal)));
			}
			hole.current?.setAttribute("r", String(Math.max(0, reveal) * Math.hypot(window.innerWidth, window.innerHeight)));
			if (t >= 2.7) {
				finish();
				return;
			}
			frame = requestAnimationFrame(animate);
		};
		frame = requestAnimationFrame(animate);
		const fallback = window.setTimeout(finish, 4e3);
		return () => {
			cancelAnimationFrame(frame);
			clearTimeout(fallback);
			document.body.style.overflow = overflow;
			window.removeEventListener("keydown", keydown);
			motion.removeEventListener("change", motionChanged);
		};
	}, [finish, visible]);
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "avocado-opening",
		"data-testid": "avocado-loader",
		role: "status",
		"aria-label": "Opening the page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: "avocado-curtain",
				"aria-hidden": "true",
				width: "100%",
				height: "100%",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mask", {
					id: maskId,
					maskUnits: "userSpaceOnUse",
					x: "0",
					y: "0",
					width: "100%",
					height: "100%",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "100%",
						height: "100%",
						className: "avocado-mask-visible"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						ref: hole,
						cx: "50%",
						cy: "50%",
						r: "0",
						className: "avocado-mask-hole"
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "100%",
					height: "100%",
					mask: `url(#${maskId})`,
					className: "avocado-paper"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				ref: fruit,
				className: "avocado-fruit",
				viewBox: "0 0 400 400",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						ref: left,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								className: "avocado-skin",
								d: "M200 57C159 57 146 109 125 149C98 199 80 231 88 271C96 317 139 342 200 342Z"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								className: "avocado-flesh",
								d: "M200 71C170 71 156 120 138 155C112 202 94 234 101 270C109 308 145 327 200 328Z"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								className: "avocado-inner",
								d: "M200 127C181 137 173 173 155 201C138 230 133 251 140 273C148 299 171 310 200 311Z"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								className: "avocado-detail",
								d: "M148 141C154 125 161 110 169 103M115 269C119 287 130 298 145 305"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						ref: right,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								className: "avocado-skin",
								d: "M200 57C241 57 254 109 275 149C302 199 320 231 312 271C304 317 261 342 200 342Z"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								className: "avocado-flesh",
								d: "M200 71C230 71 244 120 262 155C288 202 306 234 299 270C291 308 255 327 200 328Z"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								className: "avocado-inner",
								d: "M200 127C219 137 227 173 245 201C262 230 267 251 260 273C252 299 229 310 200 311Z"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								className: "avocado-detail",
								d: "M266 191C278 213 286 231 286 247"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						ref: seed,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								ref: shoot,
								transform: "translate(200 245) scale(0) translate(-200 -245)",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										className: "avocado-stem",
										d: "M200 248C197 222 205 198 202 177"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										className: "avocado-leaf",
										d: "M202 211C175 214 166 199 166 184C188 181 202 192 202 211ZM202 195C204 170 219 159 238 161C237 182 225 196 202 195Z"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										className: "avocado-vein",
										d: "M202 211L179 195M203 194L226 172"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								ref: seedLeft,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									className: "avocado-pit",
									d: "M200 197C174 197 157 218 157 245C157 273 175 293 200 293L204 267L197 246L204 225Z"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									className: "avocado-pit-light",
									d: "M186 210C174 215 168 227 168 240"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								ref: seedRight,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									className: "avocado-pit",
									d: "M200 197C226 197 243 218 243 245C243 273 225 293 200 293L204 267L197 246L204 225Z"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									className: "avocado-pit-line",
									d: "M227 250C227 265 222 273 214 279"
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "ghost",
				onClick: finish,
				className: "avocado-skip h-11 rounded-full px-5 text-muted-foreground",
				children: ["Skip intro ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
			})
		]
	});
}
function TopBar({ onMenu }) {
	const { current, travel } = useJourney();
	const btn = "min-h-11 px-2 text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "zine-nav pointer-events-auto mx-auto flex min-h-12 max-w-content items-center justify-between gap-3 rounded-full bg-foreground px-2 text-background shadow-lg backdrop-blur md:px-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					onClick: () => travel("gate"),
					className: "h-10 rounded-full px-3 font-display text-lg font-semibold text-background hover:bg-background/10 hover:text-background",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mr-2 inline-grid h-6 w-6 place-items-center rounded-full bg-signpost font-sans text-xs text-foreground",
						children: "SG"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline",
						children: "Shivam Garg"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Primary navigation",
					className: "hidden flex-1 items-center justify-center gap-1 lg:flex",
					children: menuItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => travel(item.target),
						"aria-current": stops[current]?.id === item.target ? "page" : void 0,
						className: `${btn} rounded-full px-3 text-background/70 hover:text-background aria-[current=page]:bg-background/15 aria-[current=page]:text-background`,
						children: item.label
					}, item.target))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.cvUrl,
							download: true,
							className: `${btn} hidden text-background/70 sm:inline-flex sm:items-center`,
							children: "CV"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onMenu,
							className: `${btn} text-background lg:hidden`,
							"aria-haspopup": "dialog",
							children: "Menu"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "ml-1 h-9 rounded-full bg-signpost px-4 text-xs font-semibold text-foreground shadow-none hover:bg-trail",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.linkedin.com/in/meshivamgarg",
								target: "_blank",
								rel: "noopener noreferrer",
								children: "Let’s connect ↗"
							})
						})
					]
				})
			]
		})
	});
}
function MenuOverlay({ open, onClose }) {
	const j = useJourney();
	const closeRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		closeRef.current?.focus();
		const k = (e) => e.key === "Escape" && onClose();
		addEventListener("keydown", k);
		return () => removeEventListener("keydown", k);
	}, [open, onClose]);
	const currentId = stops[j.current].id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Menu",
		"aria-hidden": !open,
		inert: !open,
		style: { clipPath: open ? "circle(150% at 95% 2rem)" : "circle(0% at 95% 2rem)" },
		className: "fixed inset-0 z-[60] overflow-y-auto bg-night text-paper transition-[clip-path] duration-700 ease-in-out",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[90rem] gap-12 px-6 py-6 lg:grid-cols-[2fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-12 items-center justify-between lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-2xl",
					children: "Shivam"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					ref: closeRef,
					onClick: onClose,
					"aria-label": "Close menu",
					className: "inline-flex h-11 w-11 items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-8 space-y-1",
				children: menuItems.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => {
						onClose();
						setTimeout(() => j.travel(m.target), 300);
					},
					className: `group flex items-baseline gap-4 py-1 text-left font-display text-5xl tracking-tight transition-colors md:text-7xl ${m.target === currentId ? "text-trail" : "hover:text-trail"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-sm opacity-60",
						children: [
							"[",
							String(i + 1).padStart(2, "0"),
							"]"
						]
					}), m.label]
				}) }, m.label))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 lg:pt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-xs opacity-60",
						children: "The Trail"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xs font-display text-3xl leading-tight",
						children: "Not just a portfolio. A timeline of belief."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: site.cvUrl,
						download: true,
						className: "mt-6 inline-block min-h-11 border-b py-2",
						children: "Download CV"
					})
				]
			})]
		})
	});
}
function Sky() {
	const { current, plain } = useJourney();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "fixed inset-0 -z-10 transition-colors duration-1000",
		style: { background: plain ? "var(--color-paper)" : "var(--color-stage)" },
		children: !plain && current === 5 && Array.from({ length: 50 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute h-0.5 w-0.5 animate-twinkle rounded-full bg-paper",
			style: {
				left: `${i * 37 % 100}%`,
				top: `${i * 61 % 90}%`,
				animationDelay: `${i % 9 * .3}s`
			}
		}, i))
	});
}
var mascot_v3_00_png_asset_exports = /* @__PURE__ */ __exportAll({
	asset_id: () => asset_id$120,
	content_type: () => content_type$120,
	created_at: () => created_at$120,
	default: () => mascot_v3_00_png_asset_default,
	original_filename: () => original_filename$120,
	project_id: () => project_id$120,
	r2_key: () => r2_key$120,
	size: () => size$120,
	url: () => url$120,
	version: () => 1
});
var asset_id$120 = "355e3db9-588d-4d07-9e8b-31fcf86b2487";
var project_id$120 = "ec948411-6d73-4a52-82cd-02a13cb78a76";
var url$120 = "/__l5e/assets-v1/355e3db9-588d-4d07-9e8b-31fcf86b2487/mascot-v3-00.png";
var r2_key$120 = "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/355e3db9-588d-4d07-9e8b-31fcf86b2487/mascot-v3-00.png";
var original_filename$120 = "mascot-v3-00.png";
var size$120 = 142559;
var content_type$120 = "image/png";
var created_at$120 = "2026-10-05T12:59:01Z";
var mascot_v3_00_png_asset_default = {
	version: 1,
	asset_id: asset_id$120,
	project_id: project_id$120,
	url: url$120,
	r2_key: r2_key$120,
	original_filename: original_filename$120,
	size: size$120,
	content_type: content_type$120,
	created_at: created_at$120
};
var mascot_v3_01_png_asset_exports = /* @__PURE__ */ __exportAll({
	asset_id: () => asset_id$119,
	content_type: () => content_type$119,
	created_at: () => created_at$119,
	default: () => mascot_v3_01_png_asset_default,
	original_filename: () => original_filename$119,
	project_id: () => project_id$119,
	r2_key: () => r2_key$119,
	size: () => size$119,
	url: () => url$119,
	version: () => 1
});
var asset_id$119 = "184b915f-3d55-43a6-874c-a1f479158708";
var project_id$119 = "ec948411-6d73-4a52-82cd-02a13cb78a76";
var url$119 = "/__l5e/assets-v1/184b915f-3d55-43a6-874c-a1f479158708/mascot-v3-01.png";
var r2_key$119 = "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/184b915f-3d55-43a6-874c-a1f479158708/mascot-v3-01.png";
var original_filename$119 = "mascot-v3-01.png";
var size$119 = 116365;
var content_type$119 = "image/png";
var created_at$119 = "2026-10-05T12:59:07Z";
var mascot_v3_01_png_asset_default = {
	version: 1,
	asset_id: asset_id$119,
	project_id: project_id$119,
	url: url$119,
	r2_key: r2_key$119,
	original_filename: original_filename$119,
	size: size$119,
	content_type: content_type$119,
	created_at: created_at$119
};
var mascot_v3_02_png_asset_exports = /* @__PURE__ */ __exportAll({
	asset_id: () => asset_id$118,
	content_type: () => content_type$118,
	created_at: () => created_at$118,
	default: () => mascot_v3_02_png_asset_default,
	original_filename: () => original_filename$118,
	project_id: () => project_id$118,
	r2_key: () => r2_key$118,
	size: () => size$118,
	url: () => url$118,
	version: () => 1
});
var asset_id$118 = "01fcd8f8-b008-4c53-853f-5949c255193e";
var project_id$118 = "ec948411-6d73-4a52-82cd-02a13cb78a76";
var url$118 = "/__l5e/assets-v1/01fcd8f8-b008-4c53-853f-5949c255193e/mascot-v3-02.png";
var r2_key$118 = "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/01fcd8f8-b008-4c53-853f-5949c255193e/mascot-v3-02.png";
var original_filename$118 = "mascot-v3-02.png";
var size$118 = 163581;
var content_type$118 = "image/png";
var created_at$118 = "2026-10-05T12:59:11Z";
var mascot_v3_02_png_asset_default = {
	version: 1,
	asset_id: asset_id$118,
	project_id: project_id$118,
	url: url$118,
	r2_key: r2_key$118,
	original_filename: original_filename$118,
	size: size$118,
	content_type: content_type$118,
	created_at: created_at$118
};
var mascot_v3_03_png_asset_exports = /* @__PURE__ */ __exportAll({
	asset_id: () => asset_id$117,
	content_type: () => content_type$117,
	created_at: () => created_at$117,
	default: () => mascot_v3_03_png_asset_default,
	original_filename: () => original_filename$117,
	project_id: () => project_id$117,
	r2_key: () => r2_key$117,
	size: () => size$117,
	url: () => url$117,
	version: () => 1
});
var asset_id$117 = "e8e5f019-a1d3-4035-a8cb-f45f43c71c94";
var project_id$117 = "ec948411-6d73-4a52-82cd-02a13cb78a76";
var url$117 = "/__l5e/assets-v1/e8e5f019-a1d3-4035-a8cb-f45f43c71c94/mascot-v3-03.png";
var r2_key$117 = "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/e8e5f019-a1d3-4035-a8cb-f45f43c71c94/mascot-v3-03.png";
var original_filename$117 = "mascot-v3-03.png";
var size$117 = 137430;
var content_type$117 = "image/png";
var created_at$117 = "2026-10-05T12:59:16Z";
var mascot_v3_03_png_asset_default = {
	version: 1,
	asset_id: asset_id$117,
	project_id: project_id$117,
	url: url$117,
	r2_key: r2_key$117,
	original_filename: original_filename$117,
	size: size$117,
	content_type: content_type$117,
	created_at: created_at$117
};
var mascot_v3_04_png_asset_exports = /* @__PURE__ */ __exportAll({
	asset_id: () => asset_id$116,
	content_type: () => content_type$116,
	created_at: () => created_at$116,
	default: () => mascot_v3_04_png_asset_default,
	original_filename: () => original_filename$116,
	project_id: () => project_id$116,
	r2_key: () => r2_key$116,
	size: () => size$116,
	url: () => url$116,
	version: () => 1
});
var asset_id$116 = "04080a12-edc3-4102-a498-5c55c693c1cb";
var project_id$116 = "ec948411-6d73-4a52-82cd-02a13cb78a76";
var url$116 = "/__l5e/assets-v1/04080a12-edc3-4102-a498-5c55c693c1cb/mascot-v3-04.png";
var r2_key$116 = "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/04080a12-edc3-4102-a498-5c55c693c1cb/mascot-v3-04.png";
var original_filename$116 = "mascot-v3-04.png";
var size$116 = 157845;
var content_type$116 = "image/png";
var created_at$116 = "2026-10-05T12:59:20Z";
var mascot_v3_04_png_asset_default = {
	version: 1,
	asset_id: asset_id$116,
	project_id: project_id$116,
	url: url$116,
	r2_key: r2_key$116,
	original_filename: original_filename$116,
	size: size$116,
	content_type: content_type$116,
	created_at: created_at$116
};
var mascot_v3_05_png_asset_exports = /* @__PURE__ */ __exportAll({
	asset_id: () => asset_id$115,
	content_type: () => content_type$115,
	created_at: () => created_at$115,
	default: () => mascot_v3_05_png_asset_default,
	original_filename: () => original_filename$115,
	project_id: () => project_id$115,
	r2_key: () => r2_key$115,
	size: () => size$115,
	url: () => url$115,
	version: () => 1
});
var asset_id$115 = "f411b589-716f-4555-9d2f-0ae6b7f0e33c";
var project_id$115 = "ec948411-6d73-4a52-82cd-02a13cb78a76";
var url$115 = "/__l5e/assets-v1/f411b589-716f-4555-9d2f-0ae6b7f0e33c/mascot-v3-05.png";
var r2_key$115 = "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/f411b589-716f-4555-9d2f-0ae6b7f0e33c/mascot-v3-05.png";
var original_filename$115 = "mascot-v3-05.png";
var size$115 = 135488;
var content_type$115 = "image/png";
var created_at$115 = "2026-10-05T12:59:24Z";
var mascot_v3_05_png_asset_default = {
	version: 1,
	asset_id: asset_id$115,
	project_id: project_id$115,
	url: url$115,
	r2_key: r2_key$115,
	original_filename: original_filename$115,
	size: size$115,
	content_type: content_type$115,
	created_at: created_at$115
};
var mascot_v3_06_png_asset_exports = /* @__PURE__ */ __exportAll({
	asset_id: () => asset_id$114,
	content_type: () => content_type$114,
	created_at: () => created_at$114,
	default: () => mascot_v3_06_png_asset_default,
	original_filename: () => original_filename$114,
	project_id: () => project_id$114,
	r2_key: () => r2_key$114,
	size: () => size$114,
	url: () => url$114,
	version: () => 1
});
var asset_id$114 = "e5cddbc5-fbbd-49d0-9504-aebef0105cf6";
var project_id$114 = "ec948411-6d73-4a52-82cd-02a13cb78a76";
var url$114 = "/__l5e/assets-v1/e5cddbc5-fbbd-49d0-9504-aebef0105cf6/mascot-v3-06.png";
var r2_key$114 = "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/e5cddbc5-fbbd-49d0-9504-aebef0105cf6/mascot-v3-06.png";
var original_filename$114 = "mascot-v3-06.png";
var size$114 = 133693;
var content_type$114 = "image/png";
var created_at$114 = "2026-10-05T12:59:27Z";
var mascot_v3_06_png_asset_default = {
	version: 1,
	asset_id: asset_id$114,
	project_id: project_id$114,
	url: url$114,
	r2_key: r2_key$114,
	original_filename: original_filename$114,
	size: size$114,
	content_type: content_type$114,
	created_at: created_at$114
};
var mascot_v3_07_png_asset_exports = /* @__PURE__ */ __exportAll({
	asset_id: () => asset_id$113,
	content_type: () => content_type$113,
	created_at: () => created_at$113,
	default: () => mascot_v3_07_png_asset_default,
	original_filename: () => original_filename$113,
	project_id: () => project_id$113,
	r2_key: () => r2_key$113,
	size: () => size$113,
	url: () => url$113,
	version: () => 1
});
var asset_id$113 = "28c2d59c-848f-4600-8306-b43a228a0f16";
var project_id$113 = "ec948411-6d73-4a52-82cd-02a13cb78a76";
var url$113 = "/__l5e/assets-v1/28c2d59c-848f-4600-8306-b43a228a0f16/mascot-v3-07.png";
var r2_key$113 = "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/28c2d59c-848f-4600-8306-b43a228a0f16/mascot-v3-07.png";
var original_filename$113 = "mascot-v3-07.png";
var size$113 = 123159;
var content_type$113 = "image/png";
var created_at$113 = "2026-10-05T12:59:31Z";
var mascot_v3_07_png_asset_default = {
	version: 1,
	asset_id: asset_id$113,
	project_id: project_id$113,
	url: url$113,
	r2_key: r2_key$113,
	original_filename: original_filename$113,
	size: size$113,
	content_type: content_type$113,
	created_at: created_at$113
};
var mascot_v3_08_png_asset_exports = /* @__PURE__ */ __exportAll({
	asset_id: () => asset_id$112,
	content_type: () => content_type$112,
	created_at: () => created_at$112,
	default: () => mascot_v3_08_png_asset_default,
	original_filename: () => original_filename$112,
	project_id: () => project_id$112,
	r2_key: () => r2_key$112,
	size: () => size$112,
	url: () => url$112,
	version: () => 1
});
var asset_id$112 = "95e8deb6-c636-4037-8440-d2b5593e085c";
var project_id$112 = "ec948411-6d73-4a52-82cd-02a13cb78a76";
var url$112 = "/__l5e/assets-v1/95e8deb6-c636-4037-8440-d2b5593e085c/mascot-v3-08.png";
var r2_key$112 = "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/95e8deb6-c636-4037-8440-d2b5593e085c/mascot-v3-08.png";
var original_filename$112 = "mascot-v3-08.png";
var size$112 = 128400;
var content_type$112 = "image/png";
var created_at$112 = "2026-10-05T12:59:34Z";
var mascot_v3_08_png_asset_default = {
	version: 1,
	asset_id: asset_id$112,
	project_id: project_id$112,
	url: url$112,
	r2_key: r2_key$112,
	original_filename: original_filename$112,
	size: size$112,
	content_type: content_type$112,
	created_at: created_at$112
};
var mascot_v3_09_png_asset_exports = /* @__PURE__ */ __exportAll({
	asset_id: () => asset_id$111,
	content_type: () => content_type$111,
	created_at: () => created_at$111,
	default: () => mascot_v3_09_png_asset_default,
	original_filename: () => original_filename$111,
	project_id: () => project_id$111,
	r2_key: () => r2_key$111,
	size: () => size$111,
	url: () => url$111,
	version: () => 1
});
var asset_id$111 = "023e3047-6bf2-438c-9925-06017b980482";
var project_id$111 = "ec948411-6d73-4a52-82cd-02a13cb78a76";
var url$111 = "/__l5e/assets-v1/023e3047-6bf2-438c-9925-06017b980482/mascot-v3-09.png";
var r2_key$111 = "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/023e3047-6bf2-438c-9925-06017b980482/mascot-v3-09.png";
var original_filename$111 = "mascot-v3-09.png";
var size$111 = 128947;
var content_type$111 = "image/png";
var created_at$111 = "2026-10-05T12:59:37Z";
var mascot_v3_09_png_asset_default = {
	version: 1,
	asset_id: asset_id$111,
	project_id: project_id$111,
	url: url$111,
	r2_key: r2_key$111,
	original_filename: original_filename$111,
	size: size$111,
	content_type: content_type$111,
	created_at: created_at$111
};
var mascot_v3_10_png_asset_exports = /* @__PURE__ */ __exportAll({
	asset_id: () => asset_id$110,
	content_type: () => content_type$110,
	created_at: () => created_at$110,
	default: () => mascot_v3_10_png_asset_default,
	original_filename: () => original_filename$110,
	project_id: () => project_id$110,
	r2_key: () => r2_key$110,
	size: () => size$110,
	url: () => url$110,
	version: () => 1
});
var asset_id$110 = "eab2fc5a-63b7-4e1b-aa3e-d524e6df2e01";
var project_id$110 = "ec948411-6d73-4a52-82cd-02a13cb78a76";
var url$110 = "/__l5e/assets-v1/eab2fc5a-63b7-4e1b-aa3e-d524e6df2e01/mascot-v3-10.png";
var r2_key$110 = "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/eab2fc5a-63b7-4e1b-aa3e-d524e6df2e01/mascot-v3-10.png";
var original_filename$110 = "mascot-v3-10.png";
var size$110 = 153645;
var content_type$110 = "image/png";
var created_at$110 = "2026-10-05T12:59:41Z";
var mascot_v3_10_png_asset_default = {
	version: 1,
	asset_id: asset_id$110,
	project_id: project_id$110,
	url: url$110,
	r2_key: r2_key$110,
	original_filename: original_filename$110,
	size: size$110,
	content_type: content_type$110,
	created_at: created_at$110
};
var mascot_v3_11_png_asset_exports = /* @__PURE__ */ __exportAll({
	asset_id: () => asset_id$109,
	content_type: () => content_type$109,
	created_at: () => created_at$109,
	default: () => mascot_v3_11_png_asset_default,
	original_filename: () => original_filename$109,
	project_id: () => project_id$109,
	r2_key: () => r2_key$109,
	size: () => size$109,
	url: () => url$109,
	version: () => 1
});
var asset_id$109 = "6e184349-44fc-45c8-bcc1-c1d1f15629be";
var project_id$109 = "ec948411-6d73-4a52-82cd-02a13cb78a76";
var url$109 = "/__l5e/assets-v1/6e184349-44fc-45c8-bcc1-c1d1f15629be/mascot-v3-11.png";
var r2_key$109 = "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/6e184349-44fc-45c8-bcc1-c1d1f15629be/mascot-v3-11.png";
var original_filename$109 = "mascot-v3-11.png";
var size$109 = 128200;
var content_type$109 = "image/png";
var created_at$109 = "2026-10-05T12:59:44Z";
var mascot_v3_11_png_asset_default = {
	version: 1,
	asset_id: asset_id$109,
	project_id: project_id$109,
	url: url$109,
	r2_key: r2_key$109,
	original_filename: original_filename$109,
	size: size$109,
	content_type: content_type$109,
	created_at: created_at$109
};
var mascot_v3_12_png_asset_exports = /* @__PURE__ */ __exportAll({
	asset_id: () => asset_id$108,
	content_type: () => content_type$108,
	created_at: () => created_at$108,
	default: () => mascot_v3_12_png_asset_default,
	original_filename: () => original_filename$108,
	project_id: () => project_id$108,
	r2_key: () => r2_key$108,
	size: () => size$108,
	url: () => url$108,
	version: () => 1
});
var asset_id$108 = "30adf6a8-f0a0-4502-b1ae-49b9a3d14750";
var project_id$108 = "ec948411-6d73-4a52-82cd-02a13cb78a76";
var url$108 = "/__l5e/assets-v1/30adf6a8-f0a0-4502-b1ae-49b9a3d14750/mascot-v3-12.png";
var r2_key$108 = "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/30adf6a8-f0a0-4502-b1ae-49b9a3d14750/mascot-v3-12.png";
var original_filename$108 = "mascot-v3-12.png";
var size$108 = 157444;
var content_type$108 = "image/png";
var created_at$108 = "2026-10-05T12:59:49Z";
var mascot_v3_12_png_asset_default = {
	version: 1,
	asset_id: asset_id$108,
	project_id: project_id$108,
	url: url$108,
	r2_key: r2_key$108,
	original_filename: original_filename$108,
	size: size$108,
	content_type: content_type$108,
	created_at: created_at$108
};
var mascot_v3_13_png_asset_exports = /* @__PURE__ */ __exportAll({
	asset_id: () => asset_id$107,
	content_type: () => content_type$107,
	created_at: () => created_at$107,
	default: () => mascot_v3_13_png_asset_default,
	original_filename: () => original_filename$107,
	project_id: () => project_id$107,
	r2_key: () => r2_key$107,
	size: () => size$107,
	url: () => url$107,
	version: () => 1
});
var asset_id$107 = "2ee3705c-b779-4543-a4bd-9800c53ef4e4";
var project_id$107 = "ec948411-6d73-4a52-82cd-02a13cb78a76";
var url$107 = "/__l5e/assets-v1/2ee3705c-b779-4543-a4bd-9800c53ef4e4/mascot-v3-13.png";
var r2_key$107 = "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/2ee3705c-b779-4543-a4bd-9800c53ef4e4/mascot-v3-13.png";
var original_filename$107 = "mascot-v3-13.png";
var size$107 = 126943;
var content_type$107 = "image/png";
var created_at$107 = "2026-10-05T12:59:54Z";
var mascot_v3_13_png_asset_default = {
	version: 1,
	asset_id: asset_id$107,
	project_id: project_id$107,
	url: url$107,
	r2_key: r2_key$107,
	original_filename: original_filename$107,
	size: size$107,
	content_type: content_type$107,
	created_at: created_at$107
};
var mascot_v3_14_png_asset_exports = /* @__PURE__ */ __exportAll({
	asset_id: () => asset_id$106,
	content_type: () => content_type$106,
	created_at: () => created_at$106,
	default: () => mascot_v3_14_png_asset_default,
	original_filename: () => original_filename$106,
	project_id: () => project_id$106,
	r2_key: () => r2_key$106,
	size: () => size$106,
	url: () => url$106,
	version: () => 1
});
var asset_id$106 = "9eda8bd5-33cc-47fe-a0dd-93f85e05c19d";
var project_id$106 = "ec948411-6d73-4a52-82cd-02a13cb78a76";
var url$106 = "/__l5e/assets-v1/9eda8bd5-33cc-47fe-a0dd-93f85e05c19d/mascot-v3-14.png";
var r2_key$106 = "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/9eda8bd5-33cc-47fe-a0dd-93f85e05c19d/mascot-v3-14.png";
var original_filename$106 = "mascot-v3-14.png";
var size$106 = 134357;
var content_type$106 = "image/png";
var created_at$106 = "2026-10-05T12:59:58Z";
var mascot_v3_14_png_asset_default = {
	version: 1,
	asset_id: asset_id$106,
	project_id: project_id$106,
	url: url$106,
	r2_key: r2_key$106,
	original_filename: original_filename$106,
	size: size$106,
	content_type: content_type$106,
	created_at: created_at$106
};
var mascot_v3_15_png_asset_exports = /* @__PURE__ */ __exportAll({
	asset_id: () => asset_id$105,
	content_type: () => content_type$105,
	created_at: () => created_at$105,
	default: () => mascot_v3_15_png_asset_default,
	original_filename: () => original_filename$105,
	project_id: () => project_id$105,
	r2_key: () => r2_key$105,
	size: () => size$105,
	url: () => url$105,
	version: () => 1
});
var asset_id$105 = "85ca1d70-deab-4e5f-a896-47f9706996ee";
var project_id$105 = "ec948411-6d73-4a52-82cd-02a13cb78a76";
var url$105 = "/__l5e/assets-v1/85ca1d70-deab-4e5f-a896-47f9706996ee/mascot-v3-15.png";
var r2_key$105 = "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/85ca1d70-deab-4e5f-a896-47f9706996ee/mascot-v3-15.png";
var original_filename$105 = "mascot-v3-15.png";
var size$105 = 139230;
var content_type$105 = "image/png";
var created_at$105 = "2026-10-05T13:00:01Z";
var mascot_v3_15_png_asset_default = {
	version: 1,
	asset_id: asset_id$105,
	project_id: project_id$105,
	url: url$105,
	r2_key: r2_key$105,
	original_filename: original_filename$105,
	size: size$105,
	content_type: content_type$105,
	created_at: created_at$105
};
var mascot_v3_16_png_asset_exports = /* @__PURE__ */ __exportAll({
	asset_id: () => asset_id$104,
	content_type: () => content_type$104,
	created_at: () => created_at$104,
	default: () => mascot_v3_16_png_asset_default,
	original_filename: () => original_filename$104,
	project_id: () => project_id$104,
	r2_key: () => r2_key$104,
	size: () => size$104,
	url: () => url$104,
	version: () => 1
});
var asset_id$104 = "3e269fd6-e16f-4779-838d-93c00c946da1";
var project_id$104 = "ec948411-6d73-4a52-82cd-02a13cb78a76";
var url$104 = "/__l5e/assets-v1/3e269fd6-e16f-4779-838d-93c00c946da1/mascot-v3-16.png";
var r2_key$104 = "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/3e269fd6-e16f-4779-838d-93c00c946da1/mascot-v3-16.png";
var original_filename$104 = "mascot-v3-16.png";
var size$104 = 115487;
var content_type$104 = "image/png";
var created_at$104 = "2026-10-05T13:00:04Z";
var mascot_v3_16_png_asset_default = {
	version: 1,
	asset_id: asset_id$104,
	project_id: project_id$104,
	url: url$104,
	r2_key: r2_key$104,
	original_filename: original_filename$104,
	size: size$104,
	content_type: content_type$104,
	created_at: created_at$104
};
var mascot_v3_17_png_asset_exports = /* @__PURE__ */ __exportAll({
	asset_id: () => asset_id$103,
	content_type: () => content_type$103,
	created_at: () => created_at$103,
	default: () => mascot_v3_17_png_asset_default,
	original_filename: () => original_filename$103,
	project_id: () => project_id$103,
	r2_key: () => r2_key$103,
	size: () => size$103,
	url: () => url$103,
	version: () => 1
});
var asset_id$103 = "923b714a-beaf-4b8c-89dc-acbf7eea926c";
var project_id$103 = "ec948411-6d73-4a52-82cd-02a13cb78a76";
var url$103 = "/__l5e/assets-v1/923b714a-beaf-4b8c-89dc-acbf7eea926c/mascot-v3-17.png";
var r2_key$103 = "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/923b714a-beaf-4b8c-89dc-acbf7eea926c/mascot-v3-17.png";
var original_filename$103 = "mascot-v3-17.png";
var size$103 = 125425;
var content_type$103 = "image/png";
var created_at$103 = "2026-10-05T13:00:07Z";
var mascot_v3_17_png_asset_default = {
	version: 1,
	asset_id: asset_id$103,
	project_id: project_id$103,
	url: url$103,
	r2_key: r2_key$103,
	original_filename: original_filename$103,
	size: size$103,
	content_type: content_type$103,
	created_at: created_at$103
};
/** True when the visitor asked to save data or is on a 2G-class connection. */
function isLowBandwidth(info) {
	if (!info) return false;
	return Boolean(info.saveData) || info.effectiveType === "slow-2g" || info.effectiveType === "2g";
}
function useLowBandwidth() {
	const [low, setLow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const info = navigator.connection;
		const update = () => setLow(isLowBandwidth(info));
		update();
		info?.addEventListener?.("change", update);
		return () => info?.removeEventListener?.("change", update);
	}, []);
	return low;
}
function HeroActions() {
	const { travel, setExpress } = useJourney();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative z-10 mt-8 flex flex-wrap items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			onClick: () => {
				setExpress(false);
				travel("village");
			},
			className: "h-12 rounded-full bg-trail-ink px-7 text-paper shadow-none hover:bg-trail",
			children: ["Explore the trail ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, { "aria-hidden": true })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "outline",
			onClick: () => {
				setExpress(false);
				travel("products");
			},
			className: "h-12 rounded-full border-trail-ink bg-transparent px-7 text-trail-ink shadow-none hover:bg-trail-ink hover:text-paper",
			children: ["See the products ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { "aria-hidden": true })]
		})]
	});
}
var mascotModules = /* #__PURE__ */ Object.assign({
	"/src/assets/mascot-v3-00.png.asset.json": mascot_v3_00_png_asset_exports,
	"/src/assets/mascot-v3-01.png.asset.json": mascot_v3_01_png_asset_exports,
	"/src/assets/mascot-v3-02.png.asset.json": mascot_v3_02_png_asset_exports,
	"/src/assets/mascot-v3-03.png.asset.json": mascot_v3_03_png_asset_exports,
	"/src/assets/mascot-v3-04.png.asset.json": mascot_v3_04_png_asset_exports,
	"/src/assets/mascot-v3-05.png.asset.json": mascot_v3_05_png_asset_exports,
	"/src/assets/mascot-v3-06.png.asset.json": mascot_v3_06_png_asset_exports,
	"/src/assets/mascot-v3-07.png.asset.json": mascot_v3_07_png_asset_exports,
	"/src/assets/mascot-v3-08.png.asset.json": mascot_v3_08_png_asset_exports,
	"/src/assets/mascot-v3-09.png.asset.json": mascot_v3_09_png_asset_exports,
	"/src/assets/mascot-v3-10.png.asset.json": mascot_v3_10_png_asset_exports,
	"/src/assets/mascot-v3-11.png.asset.json": mascot_v3_11_png_asset_exports,
	"/src/assets/mascot-v3-12.png.asset.json": mascot_v3_12_png_asset_exports,
	"/src/assets/mascot-v3-13.png.asset.json": mascot_v3_13_png_asset_exports,
	"/src/assets/mascot-v3-14.png.asset.json": mascot_v3_14_png_asset_exports,
	"/src/assets/mascot-v3-15.png.asset.json": mascot_v3_15_png_asset_exports,
	"/src/assets/mascot-v3-16.png.asset.json": mascot_v3_16_png_asset_exports,
	"/src/assets/mascot-v3-17.png.asset.json": mascot_v3_17_png_asset_exports
});
var mascots = Object.keys(mascotModules).sort().flatMap((k) => mascotModules[k]?.default.url ?? []);
/** Rotates portraits one at a time: only the current image is in the page and the next is fetched before switching,
*  so slow connections never download all eighteen up front. Data-saver / 2G visitors see a single still portrait. */
function DossierCard() {
	const [i, setI] = (0, import_react.useState)(0);
	const low = useLowBandwidth();
	(0, import_react.useEffect)(() => {
		if (low || mascots.length < 2) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let alive = true;
		let timer = 0;
		const schedule = (current) => {
			const next = (current + 1) % mascots.length;
			const img = new Image();
			img.decoding = "async";
			img.src = mascots[next] ?? "";
			const started = performance.now();
			const advance = () => {
				if (!alive) return;
				const wait = Math.max(0, 3500 - (performance.now() - started));
				timer = window.setTimeout(() => {
					if (!alive) return;
					if (document.hidden) {
						schedule(current);
						return;
					}
					setI(next);
					schedule(next);
				}, wait);
			};
			img.onload = advance;
			img.onerror = advance;
		};
		schedule(0);
		return () => {
			alive = false;
			clearTimeout(timer);
		};
	}, [low]);
	const src = mascots[i];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative mx-auto aspect-square w-full max-w-sm",
		role: "img",
		"aria-label": "Illustrated Shivam in different everyday moments",
		children: src && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt: "",
			decoding: "async",
			fetchPriority: i === 0 ? "high" : "auto",
			width: 512,
			height: 512,
			className: "mascot-fade absolute inset-0 h-full w-full object-contain"
		}, src)
	});
}
function Gate() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stop, {
		index: 0,
		className: "tactile-gate",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "zine-hero relative mx-auto max-w-content px-6 pb-16 pt-10 md:px-12 md:pt-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 font-script text-3xl text-trail-ink md:text-4xl",
							children: hero.note
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-1 font-display text-6xl font-semibold leading-[0.9] md:text-8xl",
							children: ["Shivam Garg", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-trail",
								children: "."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-5 max-w-2xl text-2xl leading-snug",
							children: hero.sub
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid items-center gap-10 lg:grid-cols-[1fr_0.8fr_1fr]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "zine-intro order-2 lg:order-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-script text-3xl leading-snug text-trail-ink",
								children: "Hi, I’m Shivam."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-lg leading-relaxed",
								children: hero.left
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "order-1 lg:order-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DossierCard, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "zine-intro order-3 lg:text-right",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xl leading-relaxed",
									children: hero.invitation
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "marker mt-4 inline text-2xl font-semibold",
									children: [
										hero.proof[0]?.number,
										" ",
										hero.proof[0]?.label
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroActions, {})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-center font-script text-2xl text-muted-foreground",
					children: "This is my story — and you’re part of it."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4",
					"aria-label": "Selected work in numbers",
					children: hero.proof.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `#${item.target}`,
						className: "proof-card group block border border-border bg-card p-5 transition-transform hover:-translate-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center font-display text-4xl leading-none text-trail-ink md:text-5xl",
								children: [item.number, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "ml-2 h-4 w-4 text-trail transition-transform group-hover:-translate-y-1 group-hover:translate-x-1",
									"aria-hidden": true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-3 block text-sm font-medium leading-tight",
								children: item.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block text-xs text-muted-foreground",
								children: item.context
							})
						]
					}, item.number))
				})
			]
		})
	});
}
var community_shelf_portrait_jpg_asset_default = {
	version: 1,
	asset_id: "3d900f56-d5f0-4866-808e-a99f322db3bd",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/3d900f56-d5f0-4866-808e-a99f322db3bd/community-shelf-portrait.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/3d900f56-d5f0-4866-808e-a99f322db3bd/community-shelf-portrait.jpg",
	original_filename: "community-shelf-portrait.jpg",
	size: 152365,
	content_type: "image/jpeg",
	created_at: "2026-10-06T10:38:20Z"
};
var voices_panel_jpg_asset_default = {
	version: 1,
	asset_id: "3ebb06e0-8d18-49dd-bb73-06148bd7d909",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/3ebb06e0-8d18-49dd-bb73-06148bd7d909/voices-panel.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/3ebb06e0-8d18-49dd-bb73-06148bd7d909/voices-panel.jpg",
	original_filename: "voices-panel.jpg",
	size: 31973,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:05:02Z"
};
var voices_planning_jpg_asset_default = {
	version: 1,
	asset_id: "ec3a43f7-730d-431b-ab81-3fe505c5c4b0",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/ec3a43f7-730d-431b-ab81-3fe505c5c4b0/voices-planning.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/ec3a43f7-730d-431b-ab81-3fe505c5c4b0/voices-planning.jpg",
	original_filename: "voices-planning.jpg",
	size: 19577,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:05:09Z"
};
var voices_rooftop_jpg_asset_default = {
	version: 1,
	asset_id: "1438de00-f78f-4a03-bc32-25e5437ab82a",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/1438de00-f78f-4a03-bc32-25e5437ab82a/voices-rooftop.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/1438de00-f78f-4a03-bc32-25e5437ab82a/voices-rooftop.jpg",
	original_filename: "voices-rooftop.jpg",
	size: 40011,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:05:36Z"
};
var voices_token2049_jpg_asset_default = {
	version: 1,
	asset_id: "21be009c-8acb-4cdc-9c56-f84bce741811",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/21be009c-8acb-4cdc-9c56-f84bce741811/voices-token2049.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/21be009c-8acb-4cdc-9c56-f84bce741811/voices-token2049.jpg",
	original_filename: "voices-token2049.jpg",
	size: 24961,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:06:31Z"
};
var communityArtwork = community_shelf_portrait_jpg_asset_default.url;
var communitySnapshots = [
	{
		image: voices_token2049_jpg_asset_default.url,
		label: "Conference conversations"
	},
	{
		image: voices_table_jpg_asset_default.url,
		label: "Around the community table"
	},
	{
		image: voices_planning_jpg_asset_default.url,
		label: "Building together"
	},
	{
		image: voices_panel_jpg_asset_default.url,
		label: "Sharing the stage"
	},
	{
		image: voices_rooftop_jpg_asset_default.url,
		label: "Beyond the event"
	}
];
var communityShelf = shelf.map((item, index) => {
	const role = roles.find((record) => record.id === item.spot);
	const event = events.find((record) => record.id === item.spot);
	const points = item.spot === "dora" ? [
		"Built fellowship programs for the next generation of creators and builders.",
		"Onboarded 1,500+ yappers.",
		"Collaborated with 40+ global partners.",
		"Taking Web3 to Tier 2 and Tier 3 cities."
	] : role?.did ?? role?.highlights ?? (event?.story ? [event.story] : [item.tip]);
	const highlights = role?.highlights ?? [];
	const metrics = item.spot === "dora" ? [
		{
			value: "1,500+",
			label: "yappers onboarded"
		},
		{
			value: "40+",
			label: "global partners"
		},
		{
			value: "30+",
			label: "university roadshow"
		}
	] : highlights.map((text) => {
		const match = text.match(/^(~?[\d,.]+(?:K|x|%|\+)?)(.*)$/i);
		return match?.[1] ? {
			value: match[1],
			label: match[2]?.trim() ?? text
		} : {
			value: "↗",
			label: text
		};
	});
	return {
		id: `community-${index}`,
		name: item.name,
		role: item.tip,
		period: role?.years ?? event?.date ?? (item.spot === "dora" ? "2025 — present" : "Community network"),
		description: item.spot === "dora" ? dora.text : role?.desc ?? event?.story ?? item.tip,
		points,
		metrics: metrics.slice(0, 6),
		sample: Boolean(role?.sample || event?.sample),
		link: item.spot === "dora" ? {
			label: "Visit DoraDAO",
			href: dora.url
		} : role?.links?.[0],
		quote: item.spot === "dora" ? dora.quote : void 0
	};
});
var symbolFor = (name) => name === "DoraDAO" ? "◉" : name === "FOSSASIA" ? "⌘" : name === "Polygon" ? "⬡" : name === "Solana" ? "≋" : "✳";
function CommunityShelf() {
	const [selected, setSelected] = (0, import_react.useState)(communityShelf[0]);
	const [photo, setPhoto] = (0, import_react.useState)(null);
	const [snapshot, setSnapshot] = (0, import_react.useState)(null);
	const [paused, setPaused] = (0, import_react.useState)(false);
	if (!selected) return null;
	const metrics = selected.metrics.slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "communities-shelf",
		className: "community-showcase",
		"aria-label": "Communities shelf",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: communityArtwork,
				className: "community-backdrop",
				alt: "",
				loading: "lazy",
				decoding: "async"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "community-showcase-frame",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "community-showcase-layout",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "community-showcase-gallery",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "community-main-art",
								src: photo ?? communityArtwork,
								alt: photo ? communitySnapshots.find((item) => item.image === photo)?.label : "Portrait with a striped headscarf surrounded by flowers",
								loading: "lazy",
								decoding: "async"
							}),
							photo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "community-art-reset",
								"aria-label": "Return to portrait artwork",
								onClick: () => setPhoto(null),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "community-thumbnails",
								role: "group",
								"aria-label": "Community photo gallery",
								children: communitySnapshots.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									"aria-label": `View ${item.label}`,
									"aria-pressed": photo === item.image,
									onClick: () => setPhoto(item.image),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: item.image,
										alt: "",
										loading: "lazy",
										decoding: "async"
									})
								}, item.image))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "community-details",
						id: "community-details",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"aria-live": "polite",
							"aria-atomic": "true",
							className: "contents",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "community-meta",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "COMMUNITY" }),
											" · ",
											selected.period,
											selected.sample && " · SAMPLE DETAILS"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: selected.name }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "community-role",
										children: selected.role
									})
								] }),
								metrics.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "community-metrics",
									children: metrics.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: item.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: item.value })] }, item.label))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "community-description",
									children: selected.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "community-points",
									children: selected.points.slice(0, 4).map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(index + 1).padStart(2, "0") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item })] }, item))
								}),
								selected.link && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "community-external",
									href: selected.link.href,
									target: "_blank",
									rel: "noreferrer",
									children: [selected.link.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "community-highlights",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { "aria-hidden": true }), " Highlights"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "community-highlights-grid",
									children: communitySnapshots.slice(0, 3).map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "community-highlight",
										"aria-label": `Open photo: ${item.label}`,
										onClick: () => setSnapshot(index),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "community-highlight-media",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: item.image,
												alt: "",
												loading: "lazy",
												decoding: "async"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "community-highlight-text",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "COMMUNITY" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.label })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { "aria-hidden": true })]
										})]
									}, item.image))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
									className: "community-quote",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: selected.quote ?? selected.points[0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: selected.name }), selected.role] })]
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "community-logo-controls",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Communities shelf" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					"aria-label": paused ? "Play community logos" : "Pause community logos",
					onClick: () => setPaused((value) => !value),
					children: paused ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `community-logo-marquees ${paused ? "is-paused" : ""}`,
				children: [communityShelf.slice(0, 7), communityShelf.slice(7)].map((row, rowIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "community-logo-lane",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "community-logo-track",
						children: [0, 1].map((copy) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "community-logo-group",
							"aria-hidden": copy === 1 ? true : void 0,
							children: row.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								tabIndex: copy === 1 ? -1 : 0,
								className: "community-logo",
								"aria-label": `Show ${item.name} community`,
								"aria-controls": "community-details",
								"aria-pressed": selected.id === item.id,
								onClick: () => {
									setSelected(item);
									setPhoto(null);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "community-logo-symbol",
									"aria-hidden": "true",
									children: symbolFor(item.name)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.name })]
							}, item.id))
						}, copy))
					})
				}, rowIndex))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: snapshot !== null,
				onOpenChange: (open) => {
					if (!open) setSnapshot(null);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "community-photo-dialog",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: snapshot !== null ? communitySnapshots[snapshot]?.label : "Community photo" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Photo from the supplied portfolio references; not attributed to a specific community." }),
						snapshot !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: communitySnapshots[snapshot]?.image,
							alt: communitySnapshots[snapshot]?.label,
							decoding: "async"
						})
					]
				})
			})
		]
	});
}
function Village() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stop, {
		index: 1,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommunityShelf, {})
	});
}
function ProductsGallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "products",
		className: "product-gallery",
		"aria-labelledby": "products-heading",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "product-gallery-header",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "product-eyebrow",
				children: "Chapter 5 / Night Camp / Products"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				id: "products-heading",
				children: [
					"Things I built because",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"nobody else was",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "product-heading-dot",
						children: "."
					})
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "product-gallery-aside",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Products, systems & experiments." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "product-eyebrow",
						children: "03 REAL / 03 SAMPLE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {
						size: 30,
						strokeWidth: 1
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "product-gallery-track",
			children: thinkingProducts.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/products/$slug",
				params: { slug: p.slug },
				className: "product-gallery-item",
				"aria-label": `Read ${p.name} Thinking${p.sample ? " — sample product" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductPreview, { product: p }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "product-card-caption",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "product-eyebrow",
							children: [
								"0",
								i + 1,
								" / ",
								p.category
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 20 }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: p.name }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `product-status status-${p.status.toLowerCase()}`,
							children: p.status
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p.sample ? "SAMPLE CONCEPT" : "REAL PRODUCT · NOTES PENDING" })
					]
				})]
			}, p.slug))
		})]
	});
}
var resource_producthunt_jpg_asset_default = {
	version: 1,
	asset_id: "b811bbc9-578c-49c6-b759-1672124ea22f",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/b811bbc9-578c-49c6-b759-1672124ea22f/resource-producthunt.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/b811bbc9-578c-49c6-b759-1672124ea22f/resource-producthunt.jpg",
	original_filename: "resource-producthunt.jpg",
	size: 5274,
	content_type: "image/jpeg",
	created_at: "2026-10-06T08:13:05Z"
};
var resource_ambassador_jpg_asset_default = {
	version: 1,
	asset_id: "bf3fde96-20c3-4cfc-b2f5-f9e5adb38b9c",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/bf3fde96-20c3-4cfc-b2f5-f9e5adb38b9c/resource-ambassador.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/bf3fde96-20c3-4cfc-b2f5-f9e5adb38b9c/resource-ambassador.jpg",
	original_filename: "resource-ambassador.jpg",
	size: 6872,
	content_type: "image/jpeg",
	created_at: "2026-10-06T08:13:09Z"
};
var resource_github_jpg_asset_default = {
	version: 1,
	asset_id: "ddf0460a-dbe2-47ae-a4bc-b2bb46d97978",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/ddf0460a-dbe2-47ae-a4bc-b2bb46d97978/resource-github.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/ddf0460a-dbe2-47ae-a4bc-b2bb46d97978/resource-github.jpg",
	original_filename: "resource-github.jpg",
	size: 5955,
	content_type: "image/jpeg",
	created_at: "2026-10-06T08:13:12Z"
};
var resource_island_jpg_asset_default = {
	version: 1,
	asset_id: "41b6f7db-93dd-4792-88f8-e68deac9d838",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/41b6f7db-93dd-4792-88f8-e68deac9d838/resource-island.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/41b6f7db-93dd-4792-88f8-e68deac9d838/resource-island.jpg",
	original_filename: "resource-island.jpg",
	size: 1750,
	content_type: "image/jpeg",
	created_at: "2026-10-06T08:13:15Z"
};
var resource_tree_jpg_asset_default = {
	version: 1,
	asset_id: "f82e854d-3b56-4a23-bef4-a8d8d91feb2b",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/f82e854d-3b56-4a23-bef4-a8d8d91feb2b/resource-tree.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/f82e854d-3b56-4a23-bef4-a8d8d91feb2b/resource-tree.jpg",
	original_filename: "resource-tree.jpg",
	size: 1811,
	content_type: "image/jpeg",
	created_at: "2026-10-06T08:13:18Z"
};
var resource_hackathon_jpg_asset_default = {
	version: 1,
	asset_id: "c221eb83-37f5-4928-b1b4-f5e323836f09",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/c221eb83-37f5-4928-b1b4-f5e323836f09/resource-hackathon.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/c221eb83-37f5-4928-b1b4-f5e323836f09/resource-hackathon.jpg",
	original_filename: "resource-hackathon.jpg",
	size: 1923,
	content_type: "image/jpeg",
	created_at: "2026-10-06T08:13:22Z"
};
var resource_social_jpg_asset_default = {
	version: 1,
	asset_id: "fbb136dc-8bb5-4b6d-9734-1a30ac5f33cb",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/fbb136dc-8bb5-4b6d-9734-1a30ac5f33cb/resource-social.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/fbb136dc-8bb5-4b6d-9734-1a30ac5f33cb/resource-social.jpg",
	original_filename: "resource-social.jpg",
	size: 2036,
	content_type: "image/jpeg",
	created_at: "2026-10-06T08:13:27Z"
};
var libraryFilters = [
	"All",
	"Playbooks",
	"Templates",
	"Case Studies",
	"Tools"
];
var libraryResources = [
	{
		id: "product-hunt",
		title: "Blueprint to Get Featured on Product Hunt & become #1 Product of the Day",
		description: "A step-by-step playbook to launch, gain traction and get featured on Product Hunt.",
		category: "Playbooks",
		format: "PDF · 8 min",
		image: resource_producthunt_jpg_asset_default.url,
		featured: true,
		sample: true
	},
	{
		id: "ambassador",
		title: "Building an Iconic Ambassador Program, APAC and EMEA",
		description: "Framework, structure, incentives and global expansion playbook.",
		category: "Case Studies",
		format: "Notion · 10 min",
		image: resource_ambassador_jpg_asset_default.url,
		featured: true,
		sample: true
	},
	{
		id: "github",
		title: "Developer’s Guide to GitHub Visibility: Strategies for GitHub Repository trending (Language & Main Page)",
		description: "Practical strategies to get your repositories discovered, ranked and featured on GitHub.",
		category: "Tools",
		format: "PDF · 8 min",
		image: resource_github_jpg_asset_default.url,
		featured: true,
		sample: true
	},
	{
		id: "ecosystem",
		title: "0 to 1 Playbook for Building an L1 Ecosystem",
		description: "Complete framework, strategies and templates from early days to a self-sustaining ecosystem.",
		category: "Playbooks",
		format: "Notion · 12 min",
		image: resource_island_jpg_asset_default.url,
		sample: true
	},
	{
		id: "kol",
		title: "KOL Campaign Blueprint, CPA to $0.2 to $1.0",
		description: "How we scaled creator campaigns, reduced CPA and built long-term partnerships.",
		category: "Templates",
		format: "PDF · 7 min",
		image: resource_github_jpg_asset_default.url,
		sample: true
	},
	{
		id: "bear-proof",
		title: "Building a Bear-Proof Community",
		description: "Lessons, systems and playbooks to build resilient communities through market cycles.",
		category: "Case Studies",
		format: "PDF · 6 min",
		image: resource_tree_jpg_asset_default.url,
		sample: true
	},
	{
		id: "hackathon",
		title: "How to Get the Most Out of a Web3 Hackathon",
		description: "Preparation, execution, judging insights and post-hack growth guide.",
		category: "Tools",
		format: "PDF · 6 min",
		image: resource_hackathon_jpg_asset_default.url,
		sample: true
	},
	{
		id: "social",
		title: "How to Build Social Presence in 100 Days",
		description: "Content strategy, distribution, examples and templates.",
		category: "Templates",
		format: "Notion · 9 min",
		image: resource_social_jpg_asset_default.url,
		sample: true
	},
	...resources.filter((item) => ["5 Common Web3 GTM Motions", "Building an AI Community"].includes(item.t)).map((item, index) => ({
		id: `archive-${index}`,
		title: item.t,
		description: "Community growth and go-to-market notes.",
		category: "Playbooks",
		format: item.f,
		image: resource_island_jpg_asset_default.url,
		sample: true
	}))
];
var featuredLibrary = libraryResources.filter((item) => item.featured);
var defaultLibrary = [
	"ecosystem",
	"kol",
	"ambassador",
	"bear-proof",
	"hackathon",
	"social"
].flatMap((id) => libraryResources.filter((item) => item.id === id));
var resources_background_default = "/assets/resources-background-DL0FHBIC.jpg";
var resource_note_jpg_asset_default = {
	version: 1,
	asset_id: "4868e0d3-36b5-4ad8-969c-2b85dd9afb2a",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/4868e0d3-36b5-4ad8-969c-2b85dd9afb2a/resource-note.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/4868e0d3-36b5-4ad8-969c-2b85dd9afb2a/resource-note.jpg",
	original_filename: "resource-note.jpg",
	size: 2957,
	content_type: "image/jpeg",
	created_at: "2026-10-06T08:13:31Z"
};
var resource_hunt_bottom_jpg_asset_default = {
	version: 1,
	asset_id: "06c5f36e-8c04-4fd0-a971-d9d9f07370c8",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/06c5f36e-8c04-4fd0-a971-d9d9f07370c8/resource-hunt-bottom.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/06c5f36e-8c04-4fd0-a971-d9d9f07370c8/resource-hunt-bottom.jpg",
	original_filename: "resource-hunt-bottom.jpg",
	size: 5740,
	content_type: "image/jpeg",
	created_at: "2026-10-06T08:15:43Z"
};
var resource_ambassador_bottom_jpg_asset_default = {
	version: 1,
	asset_id: "e5286919-6cdf-41e6-97c7-78099c696373",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/e5286919-6cdf-41e6-97c7-78099c696373/resource-ambassador-bottom.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/e5286919-6cdf-41e6-97c7-78099c696373/resource-ambassador-bottom.jpg",
	original_filename: "resource-ambassador-bottom.jpg",
	size: 3951,
	content_type: "image/jpeg",
	created_at: "2026-10-06T08:15:46Z"
};
var resource_github_bottom_jpg_asset_default = {
	version: 1,
	asset_id: "908c820b-6313-4e8e-bd3b-4430120c976e",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/908c820b-6313-4e8e-bd3b-4430120c976e/resource-github-bottom.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/908c820b-6313-4e8e-bd3b-4430120c976e/resource-github-bottom.jpg",
	original_filename: "resource-github-bottom.jpg",
	size: 4854,
	content_type: "image/jpeg",
	created_at: "2026-10-06T08:15:49Z"
};
function ResourceLibrary() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [more, setMore] = (0, import_react.useState)(false);
	const [pack, setPack] = (0, import_react.useState)([]);
	const [packOpen, setPackOpen] = (0, import_react.useState)(false);
	const [reading, setReading] = (0, import_react.useState)(null);
	const rows = filter === "All" ? more ? libraryResources : defaultLibrary : libraryResources.filter((item) => item.category === filter);
	const packed = libraryResources.filter((item) => pack.includes(item.id));
	const toggle = (id) => setPack((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
	const exportPack = () => {
		const text = "# My resource pack\n\nResource overviews — original documents have not been supplied.\n\n" + packed.map((item) => `## ${item.title}\n${item.description}\n${item.format}\n`).join("\n");
		const url = URL.createObjectURL(new Blob([text], { type: "text/markdown" }));
		const link = document.createElement("a");
		link.href = url;
		link.download = "resource-pack-overviews.md";
		link.click();
		URL.revokeObjectURL(url);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "resources",
		className: "resource-reference",
		"aria-label": "Playbooks, templates and things I’ve learned",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "resource-art-stage",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					className: "resource-stage-background",
					src: resources_background_default,
					alt: "",
					loading: "lazy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "resource-featured",
					children: featuredLibrary.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "resource-playbook",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "resource-card-menu",
								"aria-label": `About ${item.title}`,
								onClick: () => setReading(item),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "resource-card-art",
								src: item.image,
								alt: "",
								loading: "lazy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: index === 1 ? "Building an Iconic Ambassador Program in APAC and EMEA Region." : item.title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: index === 1 ? "Complete framework, strategies and systems to build, grow and scale a high-impact ambassador program globally." : item.description }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "resource-read",
								onClick: () => setReading(item),
								children: ["Read Playbook ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "resource-card-bottom",
								src: [
									resource_hunt_bottom_jpg_asset_default.url,
									resource_ambassador_bottom_jpg_asset_default.url,
									resource_github_bottom_jpg_asset_default.url
								][index],
								alt: "",
								loading: "lazy"
							})
						]
					}, item.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "resource-paper-panel",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "resource-library-heading",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "resource-eyebrow",
								children: "RESOURCES"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								"Playbooks, templates",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["and things ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "I’ve learned." })] })
							] })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "resource-header-description",
								children: "Practical resources from real work — community building, growth, partnerships, product and everything in between."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: resource_note_jpg_asset_default.url,
								alt: "Classical painted portrait detail",
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Ideas",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"that help",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"builders."
							] })] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "resource-toolbar",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							role: "group",
							"aria-label": "Filter resources",
							className: "resource-filters",
							children: libraryFilters.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								"aria-pressed": filter === item,
								onClick: () => setFilter(item),
								children: item
							}, item))
						}), pack.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							className: "resource-pack-open",
							"aria-label": `Open resource pack, ${pack.length} items`,
							onClick: () => setPackOpen(true),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Backpack, {}), pack.length]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "resource-library-rows",
						children: rows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								className: "resource-row-main",
								onClick: () => setReading(item),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.image,
									alt: "",
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: item.description })] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "resource-format",
								children: item.format
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": `Download ${item.title}`,
								title: "Original document not yet supplied",
								onClick: () => setReading(item),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								className: "resource-pack-toggle",
								"aria-pressed": pack.includes(item.id),
								onClick: () => toggle(item.id),
								children: [pack.includes(item.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), pack.includes(item.id) ? "Packed" : "Pack"]
							})
						] }, item.id))
					}),
					filter === "All" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						className: "resource-show-more",
						onClick: () => setMore((value) => !value),
						children: [
							more ? "Show less" : "More resources",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: Boolean(reading),
				onOpenChange: (open) => {
					if (!open) setReading(null);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "resource-dialog",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: reading?.title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [reading?.format, " · Resource preview"] }),
						reading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: reading.image,
								alt: ""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: reading.description }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "resource-availability",
								children: "The original playbook or document hasn’t been supplied yet. This is an overview, not the full resource."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								onClick: () => toggle(reading.id),
								children: [pack.includes(reading.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), pack.includes(reading.id) ? "Remove from pack" : "Add to pack"]
							})
						] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: packOpen,
				onOpenChange: setPackOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "resource-dialog",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Your resource pack" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [packed.length, " selected resource overviews"] }),
						packed.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "resource-packed-list",
							children: packed.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": `Remove ${item.title}`,
								onClick: () => toggle(item.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
							})] }, item.id))
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No resources packed yet." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							disabled: !packed.length,
							onClick: exportPack,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "Export overviews"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							disabled: !packed.length,
							onClick: () => setPack([]),
							children: "Clear pack"
						})
					]
				})
			})
		]
	});
}
function NightCamp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stop, {
		index: 2,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceLibrary, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductsGallery, {})]
	});
}
var referenceFooter = {
	eyebrow: "BUILDERS · COMMUNITIES · A MORE OPEN INTERNET.",
	headline: "Let’s build what’s next,",
	emphasis: "together.",
	description: "Open to collaborations, opportunities and conversations around developer ecosystems, community and open source.",
	leftNote: [
		"DIFFERENT",
		"PEOPLE.",
		"SAME",
		"PURPOSE."
	],
	rightNote: [
		"A MORE",
		"OPEN",
		"INTERNET."
	],
	socials: [
		{
			label: "GitHub",
			icon: "github",
			href: "https://github.com/meshivamgarg"
		},
		{
			label: "X (Twitter)",
			icon: "x",
			href: "https://x.com/Shivams_twt"
		},
		{
			label: "LinkedIn",
			icon: "linkedin",
			href: "https://www.linkedin.com/in/meshivamgarg"
		},
		{
			label: "Notion",
			icon: "notion"
		},
		{
			label: "YouTube",
			icon: "youtube",
			href: "https://youtu.be/kgwoniXGL1o"
		},
		{
			label: "Instagram",
			icon: "instagram",
			href: "https://www.instagram.com/reel/DCaBR4btKe3/"
		},
		{
			label: "Email",
			icon: "email"
		}
	],
	navigation: [
		{
			label: "PRODUCTS",
			target: "products"
		},
		{
			label: "COMMUNITY",
			target: "village"
		},
		{
			label: "NGO",
			target: "village"
		},
		{
			label: "WRITING",
			target: "resources"
		},
		{
			label: "OPEN TO",
			target: "basecamp"
		}
	]
};
var footer_table_final_jpg_asset_default = {
	version: 1,
	asset_id: "6e5ec658-5775-43ba-92c8-05e69de02b87",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/6e5ec658-5775-43ba-92c8-05e69de02b87/footer-table-final.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/6e5ec658-5775-43ba-92c8-05e69de02b87/footer-table-final.jpg",
	original_filename: "footer-table-final.jpg",
	size: 265359,
	content_type: "image/jpeg",
	created_at: "2026-10-06T06:51:38Z"
};
function SocialIcon({ icon }) {
	const icons = {
		github: Github,
		linkedin: Linkedin,
		youtube: Youtube,
		instagram: Instagram,
		email: Mail
	};
	if (icon === "x") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M4 3h4.5L20 21h-4.5L4 3Zm16 0L4 21",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.8"
		})
	});
	if (icon === "notion") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "m4 3 14-1 3 3v16L5 22 3 19V5l1-2Zm1 3 16-1M5 6v16",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M8 18V9h2l6 9V9",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.8"
		})]
	});
	const Icon = icons[icon];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { "aria-hidden": "true" });
}
function ReferenceFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "reference-footer",
		"aria-label": "Collaborate and connect",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "reference-footer-copy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "reference-footer-eyebrow",
					children: referenceFooter.eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
					referenceFooter.headline,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: referenceFooter.emphasis })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "reference-footer-description",
					children: referenceFooter.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "reference-footer-socials",
					"aria-label": "Social profiles",
					children: referenceFooter.socials.map((social) => {
						const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcon, { icon: social.icon }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: social.label }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "reference-footer-arrow",
								"aria-hidden": "true"
							})
						] });
						return social.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: social.href,
							target: "_blank",
							rel: "noopener noreferrer",
							children: content
						}, social.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "reference-footer-unavailable",
							"aria-disabled": "true",
							title: `${social.label} contact link has not been supplied`,
							children: content
						}, social.label);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "reference-footer-navigation",
					"aria-label": "Footer sections",
					children: referenceFooter.navigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${item.target}`,
						children: item.label
					}, item.label))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "reference-footer-artwork",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "reference-footer-note reference-footer-note-left",
					children: referenceFooter.leftNote.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: line }, line))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "reference-footer-note reference-footer-note-right",
					children: referenceFooter.rightNote.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: line }, line))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: footer_table_final_jpg_asset_default.url,
					width: 1920,
					height: 290,
					alt: "People from different cultures collaborating around a shared table with laptops and books.",
					loading: "lazy",
					decoding: "async"
				})
			]
		})]
	});
}
var voices_voice_a_jpg_asset_default = {
	version: 1,
	asset_id: "2108db30-de97-4268-960e-0694788cf346",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/2108db30-de97-4268-960e-0694788cf346/voices-voice-a.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/2108db30-de97-4268-960e-0694788cf346/voices-voice-a.jpg",
	original_filename: "voices-voice-a.jpg",
	size: 31965,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:06:38Z"
};
var voices_voice_b_jpg_asset_default = {
	version: 1,
	asset_id: "20612a8a-1170-4d7f-a8b5-8c3b1bbeeb34",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/20612a8a-1170-4d7f-a8b5-8c3b1bbeeb34/voices-voice-b.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/20612a8a-1170-4d7f-a8b5-8c3b1bbeeb34/voices-voice-b.jpg",
	original_filename: "voices-voice-b.jpg",
	size: 16280,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:06:43Z"
};
var voices_voice_c_jpg_asset_default = {
	version: 1,
	asset_id: "7b05392e-8ba4-4b31-aa12-8a552a1da8e4",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/7b05392e-8ba4-4b31-aa12-8a552a1da8e4/voices-voice-c.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/7b05392e-8ba4-4b31-aa12-8a552a1da8e4/voices-voice-c.jpg",
	original_filename: "voices-voice-c.jpg",
	size: 18098,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:06:49Z"
};
var voices_podcast_jpg_asset_default = {
	version: 1,
	asset_id: "d5dc1e44-5f0d-4abb-a5e3-9fa90299d8b5",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/d5dc1e44-5f0d-4abb-a5e3-9fa90299d8b5/voices-podcast.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/d5dc1e44-5f0d-4abb-a5e3-9fa90299d8b5/voices-podcast.jpg",
	original_filename: "voices-podcast.jpg",
	size: 25063,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:05:15Z"
};
var voices_aisha_jpg_asset_default = {
	version: 1,
	asset_id: "385e6f20-df89-49cf-8901-3472c74a7d5b",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/385e6f20-df89-49cf-8901-3472c74a7d5b/voices-aisha.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/385e6f20-df89-49cf-8901-3472c74a7d5b/voices-aisha.jpg",
	original_filename: "voices-aisha.jpg",
	size: 2285,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:04:43Z"
};
var voices_rohan_jpg_asset_default = {
	version: 1,
	asset_id: "dfa15878-2c7e-4d03-84dc-f403b26333ec",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/dfa15878-2c7e-4d03-84dc-f403b26333ec/voices-rohan.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/dfa15878-2c7e-4d03-84dc-f403b26333ec/voices-rohan.jpg",
	original_filename: "voices-rohan.jpg",
	size: 2075,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:05:28Z"
};
var voices_daniel_jpg_asset_default = {
	version: 1,
	asset_id: "5632bd88-202c-4ed9-98aa-cd7fb9e40d97",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/5632bd88-202c-4ed9-98aa-cd7fb9e40d97/voices-daniel.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/5632bd88-202c-4ed9-98aa-cd7fb9e40d97/voices-daniel.jpg",
	original_filename: "voices-daniel.jpg",
	size: 2034,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:04:48Z"
};
var voices_priya_jpg_asset_default = {
	version: 1,
	asset_id: "018fc523-0fe1-4816-b710-10f28b90ece2",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/018fc523-0fe1-4816-b710-10f28b90ece2/voices-priya.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/018fc523-0fe1-4816-b710-10f28b90ece2/voices-priya.jpg",
	original_filename: "voices-priya.jpg",
	size: 2244,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:05:21Z"
};
var voices_kenji_jpg_asset_default = {
	version: 1,
	asset_id: "2700e3b9-95e7-4ce4-a168-6cdc20546e1c",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/2700e3b9-95e7-4ce4-a168-6cdc20546e1c/voices-kenji.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/2700e3b9-95e7-4ce4-a168-6cdc20546e1c/voices-kenji.jpg",
	original_filename: "voices-kenji.jpg",
	size: 2097,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:04:55Z"
};
var voiceFilters = [
	"All",
	"Founders",
	"Team Members",
	"Community",
	"Partners",
	"Creators",
	"Mentors",
	"Friends"
];
var voicesCopy = {
	eyebrow: "09 / VOICES",
	titleStart: "People who",
	titleAccent: "vouch",
	titleEnd: "for him.",
	description: "Across products, communities, events and open source — kind words from founders, teammates, collaborators and community members.",
	leftNote: [
		"Builders",
		"Founders",
		"Teammates",
		"Community",
		"Friends"
	],
	rightNote: [
		"DIFFERENT",
		"PEOPLE.",
		"SAME",
		"PURPOSE."
	],
	internet: "A more open internet.",
	more: "See more stories",
	less: "See fewer stories"
};
var voices = [
	{
		id: "lead",
		kind: "video",
		category: "Creators",
		image: voices_voice_a_jpg_asset_default.url,
		alt: "Woman sharing her story",
		duration: "02:14",
		quote: "An incredible operator and an even better human.",
		role: "Product Lead, Singapore",
		sample: true
	},
	{
		id: "aisha",
		kind: "quote",
		category: "Founders",
		quote: "Shivam combines technical depth with an unmatched ability to bring people together. He doesn’t just run programs, he creates movements.",
		name: "Aisha Khan",
		role: "Co-founder, Web3 Protocol",
		image: voices_aisha_jpg_asset_default.url,
		social: "linkedin",
		sample: true
	},
	{
		id: "token",
		kind: "photo",
		category: "Community",
		image: voices_token2049_jpg_asset_default.url,
		alt: "Friends together at TOKEN2049 Singapore",
		note: "Met at Token2049",
		sample: true
	},
	{
		id: "engineer",
		kind: "video",
		category: "Team Members",
		image: voices_voice_b_jpg_asset_default.url,
		alt: "Engineering lead sharing his perspective",
		duration: "01:32",
		quote: "Sharp thinking, high agency and deeply community-driven.",
		role: "Engineering Lead, US",
		sample: true
	},
	{
		id: "panel",
		kind: "video",
		category: "Partners",
		image: voices_panel_jpg_asset_default.url,
		alt: "A developer community panel discussion",
		duration: "08:20",
		caption: "A conversation on community, growth and open source.",
		sample: true
	},
	{
		id: "rohan",
		kind: "quote",
		category: "Partners",
		quote: "One of the most thoughtful and execution-focused community builders I’ve worked with.",
		name: "Rohan Mehta",
		role: "Partner, Fund",
		image: voices_rohan_jpg_asset_default.url,
		social: "x",
		sample: true
	},
	{
		id: "rooftop",
		kind: "photo",
		category: "Friends",
		image: voices_rooftop_jpg_asset_default.url,
		alt: "Community friends meeting on a rooftop",
		sample: true
	},
	{
		id: "daniel",
		kind: "quote",
		category: "Mentors",
		quote: "He has a rare ability to connect ecosystems, communities and real-world impact.",
		name: "Daniel Park",
		role: "Ecosystem Lead, Global L1",
		image: voices_daniel_jpg_asset_default.url,
		social: "linkedin",
		sample: true
	},
	{
		id: "planning",
		kind: "photo",
		category: "Team Members",
		image: voices_planning_jpg_asset_default.url,
		alt: "Two teammates planning together at a laptop",
		note: "Planning the next chapter",
		sample: true
	},
	{
		id: "podcast",
		kind: "video",
		category: "Creators",
		image: voices_podcast_jpg_asset_default.url,
		alt: "Two people recording a community podcast",
		duration: "46:10",
		caption: "On open source, community and what’s next.",
		sample: true
	},
	{
		id: "priya",
		kind: "quote",
		category: "Community",
		quote: "Turns ideas into communities and communities into real world impact.",
		name: "Priya Sharma",
		role: "Community Lead",
		image: voices_priya_jpg_asset_default.url,
		social: "linkedin",
		sample: true
	},
	{
		id: "table",
		kind: "photo",
		category: "Friends",
		image: voices_table_jpg_asset_default.url,
		alt: "Community members sharing a meal",
		note: "Different places. Same conversations.",
		sample: true
	},
	{
		id: "kenji",
		kind: "quote",
		category: "Founders",
		quote: "A true builder at heart — curious, kind and always finding ways to help others grow.",
		name: "Kenji Tan",
		role: "Founder, Dev Tooling",
		image: voices_kenji_jpg_asset_default.url,
		social: "x",
		sample: true
	},
	{
		id: "closing",
		kind: "video",
		category: "Friends",
		image: voices_voice_c_jpg_asset_default.url,
		alt: "Woman talking with the community",
		duration: "01:05",
		sample: true
	}
];
function Quote$1({ item }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "voices-quote-mark",
			"aria-hidden": true,
			children: "“"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", { children: [
			"“",
			item.quote,
			"”"
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "voices-person",
			children: [
				item.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.image,
					alt: "",
					loading: "lazy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.role })] }),
				item.social === "linkedin" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { "aria-hidden": true }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "voices-x",
					children: "𝕏"
				})
			]
		})
	] });
}
function VoicesCollage() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [expanded, setExpanded] = (0, import_react.useState)(false);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const items = voices.filter((v) => filter === "All" || v.category === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "voices-section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "voices-header",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "voices-left-note",
						"aria-hidden": true,
						children: [voicesCopy.leftNote.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n }, n)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "voices-right-note",
						"aria-hidden": true,
						children: voicesCopy.rightNote.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n }, n))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "voices-community-note",
						"aria-hidden": true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: voicesCopy.internet })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						voicesCopy.titleStart,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: voicesCopy.titleAccent }),
						" ",
						voicesCopy.titleEnd
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "voices-description",
						children: voicesCopy.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "voices-filters",
						role: "group",
						"aria-label": "Filter testimonials",
						children: voiceFilters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							"aria-pressed": filter === f,
							onClick: () => setFilter(f),
							className: "voices-filter",
							children: f
						}, f))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `voices-grid ${filter !== "All" ? "voices-grid-filtered" : ""}`,
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					"data-sample": item.sample ? "" : void 0,
					className: `voice-item voice-${item.id} voice-${item.kind}`,
					children: item.kind === "quote" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote$1, { item }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "voice-media",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.image,
								alt: item.alt,
								loading: "lazy"
							}), item.kind === "video" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "voice-play",
								"aria-label": `Open story: ${item.alt}`,
								onClick: () => setSelected(item),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { fill: "currentColor" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "voice-duration",
								children: item.duration
							})] })]
						}),
						item.id === "lead" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "voice-attached-note",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									children: "♧"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"“",
									item.quote,
									"”"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: item.role })
							]
						}),
						item.id !== "lead" && item.quote && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "voice-caption",
							children: [
								"“",
								item.quote,
								"”",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: item.role })
							]
						}),
						item.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "voice-caption",
							children: [item.caption, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": true })]
						}),
						item.note && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "voice-hand-note",
							children: [
								item.id === "table" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { "aria-hidden": true }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.note }),
								item.id !== "table" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, { "aria-hidden": true })
							]
						})
					] })
				}, item.id))
			}),
			expanded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "voices-more-stories",
				"aria-label": "More testimonials",
				children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "voices-quote-mark",
						"aria-hidden": true,
						children: "“"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { children: t.q }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t.name }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.role })
				] }, t.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "voices-more",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					"aria-expanded": expanded,
					onClick: () => setExpanded(!expanded),
					children: [expanded ? voicesCopy.less : voicesCopy.more, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "voices-invitation",
				"aria-labelledby": "voices-invitation-title",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "voices-invitation-mark",
						"aria-hidden": true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "“" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "voices-invitation-note",
							children: "There’s room for your story, too."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							id: "voices-invitation-title",
							children: ["Ever met him, or ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "worked with him?" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Leave a message, a voice note, or a little video." })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "voices-invitation-link",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/leave-a-note",
							children: ["Leave your story", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: selected !== null,
				onOpenChange: (open) => {
					if (!open) setSelected(null);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "voices-dialog",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: selected?.alt }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "This image is a supplied video still. The original recording has not been provided." }),
						selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: selected.image,
							alt: selected.alt
						}),
						selected?.quote && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", { children: [
							"“",
							selected.quote,
							"”"
						] })
					]
				})
			})
		]
	});
}
function Postcards() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stop, {
		index: 3,
		className: "voices-stop",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoicesCollage, {})
	});
}
function BaseCampEnd() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stop, {
		index: 4,
		className: "reference-footer-stop",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceFooter, {})
	});
}
/** Low-contrast hand-drawn line art scattered through the paper margins. */
var s = {
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
var doodles = [
	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 80",
		...s,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "40",
				r: "30"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "40",
				r: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M40 14 L46 40 L40 66 L34 40Z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M40 4v6M40 70v6M4 40h6M70 40h6" })
		]
	}, "c"),
	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 80",
		...s,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 34h40v18a16 16 0 0 1-16 16h-8a16 16 0 0 1-16-16Z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M56 40h6a7 7 0 0 1 0 14h-7" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M28 26c-4-6 4-8 0-14M40 26c-4-6 4-8 0-14" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 72h52" })
		]
	}, "t"),
	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 80",
		...s,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8",
				y: "14",
				width: "64",
				height: "46",
				rx: "4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 24h64M18 36l8 6-8 6M32 48h14" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M30 60l-4 10h28l-4-10" })
		]
	}, "m"),
	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 80",
		...s,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 66 L30 22 L54 66Z M30 22 L30 66 M22 66 L30 50 L38 66" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 66c-8-6-4-14 0-20 4 6 8 14 0 20Z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M56 70l16-4M56 66l16 4" })
		]
	}, "f"),
	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 80",
		...s,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M26 4 L36 30 M54 4 L44 30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "22",
				y: "30",
				width: "36",
				height: "44",
				rx: "4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "46",
				r: "7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M30 64h20" })
		]
	}, "b"),
	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 80",
		...s,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 70 L28 30 L40 46 L54 22 L76 70Z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M14 66c10-6 18 0 26-10s14-8 20-20",
				strokeDasharray: "3 5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M54 22v-14l10 4-10 4" })
		]
	}, "h")
];
function ChalkDoodles() {
	const spots = Array.from({ length: 18 }, (_, i) => ({
		top: `${3 + i * 5.5}%`,
		side: i % 2 ? { right: `${2.6 + i * 3 % 4 * .4}rem` } : { left: `${2.6 + i * 5 % 4 * .4}rem` },
		rot: i * 37 % 30 - 15,
		d: doodles[i % doodles.length]
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: spots.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "chalk h-20 w-20",
			style: {
				top: p.top,
				...p.side,
				transform: `rotate(${p.rot}deg)`
			},
			children: p.d
		}, i))
	});
}
var hooman_img_01_jpg_asset_default = {
	version: 1,
	asset_id: "dd9ceaa4-e769-4bfd-8617-cfe855abb966",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/dd9ceaa4-e769-4bfd-8617-cfe855abb966/hooman-img-01.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/dd9ceaa4-e769-4bfd-8617-cfe855abb966/hooman-img-01.jpg",
	original_filename: "hooman-img-01.jpg",
	size: 15595,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:36:15Z"
};
var hooman_img_02_jpg_asset_default = {
	version: 1,
	asset_id: "7d130ab7-8cbe-447d-a77d-8634eca058c5",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/7d130ab7-8cbe-447d-a77d-8634eca058c5/hooman-img-02.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/7d130ab7-8cbe-447d-a77d-8634eca058c5/hooman-img-02.jpg",
	original_filename: "hooman-img-02.jpg",
	size: 16959,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:36:18Z"
};
var hooman_img_03_jpg_asset_default = {
	version: 1,
	asset_id: "0bb421ac-a8c5-4066-b298-79d96e414840",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/0bb421ac-a8c5-4066-b298-79d96e414840/hooman-img-03.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/0bb421ac-a8c5-4066-b298-79d96e414840/hooman-img-03.jpg",
	original_filename: "hooman-img-03.jpg",
	size: 17299,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:36:23Z"
};
var hooman_img_04_jpg_asset_default = {
	version: 1,
	asset_id: "e1bbc178-357b-40d7-98aa-4bd134e36e72",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/e1bbc178-357b-40d7-98aa-4bd134e36e72/hooman-img-04.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/e1bbc178-357b-40d7-98aa-4bd134e36e72/hooman-img-04.jpg",
	original_filename: "hooman-img-04.jpg",
	size: 5122,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:36:28Z"
};
var hooman_img_05_jpg_asset_default = {
	version: 1,
	asset_id: "2edf455f-ab51-40be-b827-e671dbde35af",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/2edf455f-ab51-40be-b827-e671dbde35af/hooman-img-05.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/2edf455f-ab51-40be-b827-e671dbde35af/hooman-img-05.jpg",
	original_filename: "hooman-img-05.jpg",
	size: 14522,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:36:33Z"
};
var hooman_img_06_jpg_asset_default = {
	version: 1,
	asset_id: "ed573725-b523-4400-bd34-49cb6e9c6c88",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/ed573725-b523-4400-bd34-49cb6e9c6c88/hooman-img-06.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/ed573725-b523-4400-bd34-49cb6e9c6c88/hooman-img-06.jpg",
	original_filename: "hooman-img-06.jpg",
	size: 12462,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:36:38Z"
};
var hooman_img_07_jpg_asset_default = {
	version: 1,
	asset_id: "ebe5869f-cb26-48d4-ae7d-ae907be2c8f0",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/ebe5869f-cb26-48d4-ae7d-ae907be2c8f0/hooman-img-07.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/ebe5869f-cb26-48d4-ae7d-ae907be2c8f0/hooman-img-07.jpg",
	original_filename: "hooman-img-07.jpg",
	size: 7578,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:36:42Z"
};
var hooman_img_08_jpg_asset_default = {
	version: 1,
	asset_id: "63d0f590-7fd7-4a43-9a30-1ae0958877c5",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/63d0f590-7fd7-4a43-9a30-1ae0958877c5/hooman-img-08.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/63d0f590-7fd7-4a43-9a30-1ae0958877c5/hooman-img-08.jpg",
	original_filename: "hooman-img-08.jpg",
	size: 8809,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:36:47Z"
};
var hooman_img_09_jpg_asset_default = {
	version: 1,
	asset_id: "fecf9474-e44a-433b-9774-19dd0f7f5cf3",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/fecf9474-e44a-433b-9774-19dd0f7f5cf3/hooman-img-09.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/fecf9474-e44a-433b-9774-19dd0f7f5cf3/hooman-img-09.jpg",
	original_filename: "hooman-img-09.jpg",
	size: 17648,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:36:51Z"
};
var hooman_img_10_jpg_asset_default = {
	version: 1,
	asset_id: "fcf2488e-db9f-4230-b634-9c5711f08417",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/fcf2488e-db9f-4230-b634-9c5711f08417/hooman-img-10.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/fcf2488e-db9f-4230-b634-9c5711f08417/hooman-img-10.jpg",
	original_filename: "hooman-img-10.jpg",
	size: 15878,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:36:54Z"
};
var hooman_img_11_jpg_asset_default = {
	version: 1,
	asset_id: "d607bc6e-5faf-41e1-b1b8-b24aaf192212",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/d607bc6e-5faf-41e1-b1b8-b24aaf192212/hooman-img-11.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/d607bc6e-5faf-41e1-b1b8-b24aaf192212/hooman-img-11.jpg",
	original_filename: "hooman-img-11.jpg",
	size: 2351,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:36:58Z"
};
var hooman_img_12_jpg_asset_default = {
	version: 1,
	asset_id: "7a5965ac-045e-4493-9666-15bdd4aa26fe",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/7a5965ac-045e-4493-9666-15bdd4aa26fe/hooman-img-12.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/7a5965ac-045e-4493-9666-15bdd4aa26fe/hooman-img-12.jpg",
	original_filename: "hooman-img-12.jpg",
	size: 4662,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:37:04Z"
};
var hooman_img_13_jpg_asset_default = {
	version: 1,
	asset_id: "2237301b-f1c0-4e10-a2e0-0553938d2ef7",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/2237301b-f1c0-4e10-a2e0-0553938d2ef7/hooman-img-13.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/2237301b-f1c0-4e10-a2e0-0553938d2ef7/hooman-img-13.jpg",
	original_filename: "hooman-img-13.jpg",
	size: 19560,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:37:09Z"
};
var hooman_img_14_jpg_asset_default = {
	version: 1,
	asset_id: "a1c3ae4a-983c-4f9e-b5e6-4728d30b2889",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/a1c3ae4a-983c-4f9e-b5e6-4728d30b2889/hooman-img-14.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/a1c3ae4a-983c-4f9e-b5e6-4728d30b2889/hooman-img-14.jpg",
	original_filename: "hooman-img-14.jpg",
	size: 16209,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:37:13Z"
};
var hooman_img_15_jpg_asset_default = {
	version: 1,
	asset_id: "f80abc20-9a54-4e8b-abfb-956a2538fab4",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/f80abc20-9a54-4e8b-abfb-956a2538fab4/hooman-img-15.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/f80abc20-9a54-4e8b-abfb-956a2538fab4/hooman-img-15.jpg",
	original_filename: "hooman-img-15.jpg",
	size: 2445,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:37:18Z"
};
var hooman_img_16_jpg_asset_default = {
	version: 1,
	asset_id: "f609be1f-784d-471e-b2ac-f12b05f62021",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/f609be1f-784d-471e-b2ac-f12b05f62021/hooman-img-16.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/f609be1f-784d-471e-b2ac-f12b05f62021/hooman-img-16.jpg",
	original_filename: "hooman-img-16.jpg",
	size: 11224,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:37:23Z"
};
var hooman_img_17_jpg_asset_default = {
	version: 1,
	asset_id: "95c06b67-7738-40e6-ab40-df05a97d4d5a",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/95c06b67-7738-40e6-ab40-df05a97d4d5a/hooman-img-17.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/95c06b67-7738-40e6-ab40-df05a97d4d5a/hooman-img-17.jpg",
	original_filename: "hooman-img-17.jpg",
	size: 10072,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:37:28Z"
};
var hooman_img_18_jpg_asset_default = {
	version: 1,
	asset_id: "1e18b33b-97f9-4620-aacc-e969a06e218c",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/1e18b33b-97f9-4620-aacc-e969a06e218c/hooman-img-18.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/1e18b33b-97f9-4620-aacc-e969a06e218c/hooman-img-18.jpg",
	original_filename: "hooman-img-18.jpg",
	size: 23098,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:37:31Z"
};
var hooman_img_19_jpg_asset_default = {
	version: 1,
	asset_id: "e59ec8dd-fe61-4358-a581-37545f48a7a8",
	project_id: "ec948411-6d73-4a52-82cd-02a13cb78a76",
	url: "/__l5e/assets-v1/e59ec8dd-fe61-4358-a581-37545f48a7a8/hooman-img-19.jpg",
	r2_key: "a/v1/ec948411-6d73-4a52-82cd-02a13cb78a76/e59ec8dd-fe61-4358-a581-37545f48a7a8/hooman-img-19.jpg",
	original_filename: "hooman-img-19.jpg",
	size: 23837,
	content_type: "image/jpeg",
	created_at: "2026-10-06T07:37:35Z"
};
var hoomanCopy = {
	eyebrow: "THINGS THAT MAKE ME",
	label: "Things that make me hooman",
	sentence: "Things that make me hooman: curious, hopeful, rooted, fair, connected.",
	scroll: "scroll",
	finalCaption: "Same planet. More chances for everyone."
};
var hoomanPhases = [
	"curious.",
	"hopeful.",
	"rooted.",
	"fair.",
	"connected.",
	"hooman."
];
var phaseStarts = [
	.08,
	.24,
	.4,
	.55,
	.69,
	.83
];
var hoomanValues = [[
	{
		text: "People",
		phase: 4
	},
	{
		text: "Purpose",
		phase: 6
	},
	{
		text: "Nature",
		phase: 3
	},
	{
		text: "Curiosity",
		phase: 1
	},
	{
		text: "Equal Opportunities",
		phase: 4
	}
], [
	{
		text: "Communities",
		phase: 5
	},
	{
		text: "Culture",
		phase: 5
	},
	{
		text: "Learning",
		phase: 2
	},
	{
		text: "A Kinder Internet",
		phase: 5
	}
]];
var hoomanItems = [
	{
		id: "img-06",
		src: hooman_img_06_jpg_asset_default.url,
		alt: "Traveller on a rooftop in a white city",
		phase: 1,
		enterAt: .08,
		desktop: {
			left: 86.5,
			top: 15.7,
			width: 7.7
		},
		mobile: {
			left: 4,
			top: 4,
			width: 40
		},
		rotate: 0,
		depth: .8,
		z: 1,
		width: 139,
		height: 183,
		finalist: true
	},
	{
		id: "img-08",
		src: hooman_img_08_jpg_asset_default.url,
		alt: "Hiker on a mountain ridge",
		phase: 1,
		enterAt: .092,
		desktop: {
			left: 25.4,
			top: 28.9,
			width: 6.4
		},
		mobile: {
			left: 56,
			top: 4,
			width: 40
		},
		rotate: 0,
		depth: 1.2,
		z: 3,
		width: 113,
		height: 169,
		finalist: false
	},
	{
		id: "img-07",
		src: hooman_img_07_jpg_asset_default.url,
		alt: "Small vertical street scene",
		phase: 1,
		enterAt: .104,
		desktop: {
			left: 22.1,
			top: 20.9,
			width: 4.5
		},
		mobile: {
			left: 4,
			top: 14,
			width: 40
		},
		rotate: 0,
		depth: 1,
		z: 2,
		width: 80,
		height: 152,
		finalist: false
	},
	{
		id: "img-03",
		src: hooman_img_03_jpg_asset_default.url,
		alt: "Island harbour with a boat",
		phase: 1,
		enterAt: .116,
		desktop: {
			left: 49.4,
			top: 3,
			width: 9.9
		},
		mobile: {
			left: 56,
			top: 14,
			width: 40
		},
		rotate: .6,
		depth: 1.2,
		z: 1,
		width: 173,
		height: 191,
		finalist: false
	},
	{
		id: "img-01",
		src: hooman_img_01_jpg_asset_default.url,
		alt: "Smiling child in a classroom",
		phase: 2,
		enterAt: .24,
		desktop: {
			left: 8.2,
			top: 6.7,
			width: 12.8
		},
		mobile: {
			left: 56,
			top: 4,
			width: 40
		},
		rotate: 0,
		depth: .8,
		z: 1,
		width: 228,
		height: 155,
		finalist: true
	},
	{
		id: "img-02",
		src: hooman_img_02_jpg_asset_default.url,
		alt: "Teacher sitting with children on the floor",
		phase: 2,
		enterAt: .252,
		desktop: {
			left: 30.7,
			top: 0,
			width: 8.7
		},
		mobile: {
			left: 56,
			top: 4,
			width: 40
		},
		rotate: 0,
		depth: 1,
		z: 1,
		width: 154,
		height: 200,
		finalist: false
	},
	{
		id: "img-14",
		src: hooman_img_14_jpg_asset_default.url,
		alt: "Girl writing on a chalkboard",
		phase: 2,
		enterAt: .264,
		desktop: {
			left: 65.2,
			top: 70.7,
			width: 11.8
		},
		mobile: {
			left: 4,
			top: 14,
			width: 40
		},
		rotate: 0,
		depth: 1.4,
		z: 2,
		width: 208,
		height: 186,
		finalist: false
	},
	{
		id: "img-15",
		src: hooman_img_15_jpg_asset_default.url,
		alt: "Small community portrait",
		phase: 2,
		enterAt: .276,
		desktop: {
			left: 72.9,
			top: 62.3,
			width: 2.2
		},
		mobile: {
			left: 56,
			top: 14,
			width: 40
		},
		rotate: 0,
		depth: .6,
		z: 1,
		width: 39,
		height: 73,
		finalist: false
	},
	{
		id: "img-09",
		src: hooman_img_09_jpg_asset_default.url,
		alt: "Person planting a sapling",
		phase: 3,
		enterAt: .4,
		desktop: {
			left: 5.8,
			top: 38.9,
			width: 10
		},
		mobile: {
			left: 4,
			top: 14,
			width: 40
		},
		rotate: 0,
		depth: 1.4,
		z: 3,
		width: 168,
		height: 166,
		finalist: true
	},
	{
		id: "img-10",
		src: hooman_img_10_jpg_asset_default.url,
		alt: "Child planting",
		phase: 3,
		enterAt: .412,
		desktop: {
			left: 0,
			top: 48.2,
			width: 8.1
		},
		mobile: {
			left: 56,
			top: 4,
			width: 40
		},
		rotate: 0,
		depth: .6,
		z: 1,
		width: 143,
		height: 201,
		finalist: false
	},
	{
		id: "img-11",
		src: hooman_img_11_jpg_asset_default.url,
		alt: "Small plant close-up",
		phase: 3,
		enterAt: .424,
		desktop: {
			left: 4.2,
			top: 38.3,
			width: 4.5
		},
		mobile: {
			left: 4,
			top: 14,
			width: 40
		},
		rotate: 0,
		depth: .8,
		z: 2,
		width: 65,
		height: 43,
		finalist: false
	},
	{
		id: "img-04",
		src: hooman_img_04_jpg_asset_default.url,
		alt: "Outdoor group by a lake",
		phase: 3,
		enterAt: .436,
		desktop: {
			left: 79.6,
			top: 0,
			width: 5.1
		},
		mobile: {
			left: 56,
			top: 14,
			width: 40
		},
		rotate: 0,
		depth: 1.4,
		z: 1,
		width: 88,
		height: 88,
		finalist: false
	},
	{
		id: "img-05",
		src: hooman_img_05_jpg_asset_default.url,
		alt: "Group of women in conversation",
		phase: 4,
		enterAt: .55,
		desktop: {
			left: 68.4,
			top: 11.2,
			width: 10.7
		},
		mobile: {
			left: 56,
			top: 74,
			width: 40
		},
		rotate: 0,
		depth: .6,
		z: 1,
		width: 191,
		height: 140,
		finalist: true
	},
	{
		id: "img-12",
		src: hooman_img_12_jpg_asset_default.url,
		alt: "Two hands holding",
		phase: 4,
		enterAt: .562,
		desktop: {
			left: 66.4,
			top: 41.7,
			width: 4.5
		},
		mobile: {
			left: 56,
			top: 69,
			width: 40
		},
		rotate: 0,
		depth: 1,
		z: 1,
		width: 81,
		height: 111,
		finalist: false
	},
	{
		id: "img-17",
		src: hooman_img_17_jpg_asset_default.url,
		alt: "Volunteers unloading boxes",
		phase: 4,
		enterAt: .574,
		desktop: {
			left: 5.8,
			top: 78.4,
			width: 7.3
		},
		mobile: {
			left: 4,
			top: 74,
			width: 40
		},
		rotate: 0,
		depth: 1,
		z: 1,
		width: 127,
		height: 138,
		finalist: false
	},
	{
		id: "img-13",
		src: hooman_img_13_jpg_asset_default.url,
		alt: "Group watching a sunset",
		phase: 5,
		enterAt: .69,
		desktop: {
			left: 78.2,
			top: 42.5,
			width: 13.6
		},
		mobile: {
			left: 4,
			top: 79,
			width: 40
		},
		rotate: 0,
		depth: 1.2,
		z: 1,
		width: 242,
		height: 195,
		finalist: true
	},
	{
		id: "img-16",
		src: hooman_img_16_jpg_asset_default.url,
		alt: "Group selfie",
		phase: 5,
		enterAt: .702,
		desktop: {
			left: 46.1,
			top: 74.4,
			width: 7.3
		},
		mobile: {
			left: 56,
			top: 69,
			width: 40
		},
		rotate: 0,
		depth: .8,
		z: 1,
		width: 129,
		height: 135,
		finalist: false
	},
	{
		id: "img-18",
		src: hooman_img_18_jpg_asset_default.url,
		alt: "Backpacker on a cliff above the sea",
		phase: 5,
		enterAt: .714,
		desktop: {
			left: 23.3,
			top: 67.4,
			width: 11.6
		},
		mobile: {
			left: 4,
			top: 74,
			width: 40
		},
		rotate: 0,
		depth: 1.2,
		z: 1,
		width: 205,
		height: 223,
		finalist: false
	},
	{
		id: "img-19",
		src: hooman_img_19_jpg_asset_default.url,
		alt: "Person with open arms overlooking a tropical beach",
		phase: 6,
		enterAt: .83,
		desktop: {
			left: 88.1,
			top: 70.7,
			width: 11.9
		},
		mobile: {
			left: 56,
			top: 79,
			width: 40
		},
		rotate: 0,
		depth: 1.4,
		z: 1,
		width: 211,
		height: 207,
		finalist: true
	}
];
var hoomanCaptions = [
	{
		text: "Curiosity takes me places.",
		phase: 1,
		doodle: "arrow",
		desktop: {
			left: 95,
			top: 17.5,
			width: 4.8
		}
	},
	{
		text: "Different places. Same purpose.",
		phase: 1,
		doodle: "mountain",
		desktop: {
			left: 25.8,
			top: 51.7,
			width: 8
		}
	},
	{
		text: "A little island someday?",
		phase: 1,
		doodle: "palm",
		desktop: {
			left: 60.3,
			top: 4.6,
			width: 5.5
		}
	},
	{
		text: "Better education brighter tomorrows.",
		phase: 2,
		doodle: "arrow",
		desktop: {
			left: 2.9,
			top: 9.6,
			width: 5
		}
	},
	{
		text: "Learning should have no boundaries.",
		phase: 2,
		doodle: "underline",
		desktop: {
			left: 40.4,
			top: 8.2,
			width: 6
		}
	},
	{
		text: "Real skills. Real futures.",
		phase: 2,
		doodle: "underline",
		desktop: {
			left: 61.1,
			top: 75,
			width: 4
		}
	},
	{
		text: "Greener communities healthier tomorrows.",
		phase: 3,
		doodle: "leaf",
		desktop: {
			left: 10.3,
			top: 59.2,
			width: 8
		}
	},
	{
		text: "More women in every room.",
		phase: 4,
		doodle: "underline",
		desktop: {
			left: 68.7,
			top: 28.2,
			width: 8
		}
	},
	{
		text: "People first. Always.",
		phase: 4,
		doodle: "underline",
		desktop: {
			left: 71.8,
			top: 44.2,
			width: 5
		}
	},
	{
		text: "Less privilege gap. More opportunities.",
		phase: 4,
		doodle: "people",
		desktop: {
			left: 13.9,
			top: 79.9,
			width: 6
		}
	},
	{
		text: "Conversations that build communities.",
		phase: 5,
		doodle: "speech",
		desktop: {
			left: 92.8,
			top: 46.9,
			width: 7
		}
	},
	{
		text: "A kinder internet. A kinder world.",
		phase: 5,
		doodle: "underline",
		desktop: {
			left: 36.1,
			top: 81.4,
			width: 5
		}
	},
	{
		text: "Same planet. More chances for everyone.",
		phase: 6,
		doodle: "underline",
		desktop: {
			left: 82,
			top: 81.2,
			width: 6
		}
	}
];
var doodlePaths = {
	arrow: "M5 5Q2 26 34 22M27 17l8 5-8 5",
	mountain: "M2 32L14 10l10 17 7-13 13 18M10 18l4 6 4-5M27 22l4 4 3-3",
	palm: "M22 39l-2-24M20 17Q5 2 3 16M20 17Q10 2 20 3M20 17Q30 1 39 12M20 17Q34 9 40 21",
	underline: "M10 18q13-2 26-1M15 23h16",
	leaf: "M10 37Q1 16 30 3Q35 29 10 37M10 37L27 9M15 27l-3-7M21 17l8-1",
	people: "M5 13a3 3 0 1 0 0-6a3 3 0 1 0 0 6M35 13a3 3 0 1 0 0-6a3 3 0 1 0 0 6M1 30l4-15 5 8 10 1 10-1 5-8 5 15M4 25l-2 13M7 25l3 13M33 25l-3 13M36 25l3 13",
	speech: "M8 7Q40 1 39 22Q35 31 18 27l-10 8 2-10Q0 20 8 7M12 17h1M20 17h1M28 17h1",
	sun: "M20 12a8 8 0 1 0 0 16a8 8 0 1 0 0-16M20 1v6M20 33v6M1 20h6M33 20h6M6 6l5 5M29 29l5 5M6 34l5-5M29 11l5-5",
	globe: "M20 3a17 17 0 1 0 0 34a17 17 0 1 0 0-34M12 5l1 7-6 4 4 6 6-1 2 6-2 7M24 4l-3 8 8 3-2 6 7 3M23 36l-1-6 5-4"
};
function DoodleIcon({ kind, draw = 1 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 42 42",
		"aria-hidden": true,
		className: "hooman-doodle",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
			d: doodlePaths[kind],
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.4",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			animate: { pathLength: draw },
			transition: { duration: .35 }
		})
	});
}
function PlaceholderImage({ item }) {
	const [failed, setFailed] = (0, import_react.useState)(false);
	return failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "hooman-placeholder",
		role: "img",
		"aria-label": item.alt,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodleIcon, { kind: "mountain" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
			item.id,
			": ",
			item.alt
		] })]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: item.src,
		alt: item.alt,
		width: item.width,
		height: item.height,
		loading: "lazy",
		decoding: "async",
		onError: () => setFailed(true)
	});
}
function Photo({ item, progress, mobile, staticMode }) {
	const reveal = useTransform(progress, (p) => {
		if (staticMode) return 1;
		const entered = Math.max(0, Math.min(1, (p - item.enterAt) / .03));
		if (!mobile) return entered;
		if (p >= .83) return item.finalist ? 1 : 0;
		const next = phaseStarts[item.phase];
		return next === void 0 || p < next ? entered : entered * .35;
	});
	const finalists = hoomanItems.filter((i) => i.finalist);
	const coords = [
		{
			left: 4,
			top: 4
		},
		{
			left: 56,
			top: 4
		},
		{
			left: 30,
			top: 20
		},
		{
			left: 4,
			top: 70
		},
		{
			left: 56,
			top: 70
		},
		{
			left: 30,
			top: 84
		}
	][item.finalist ? finalists.findIndex((i) => i.id === item.id) : hoomanItems.filter((i) => i.phase === item.phase).findIndex((i) => i.id === item.id) % 3] ?? item.mobile;
	const style = {
		"--left": `${item.desktop.left}%`,
		"--top": `${item.desktop.top}%`,
		"--width": `${item.desktop.width}%`,
		"--mobile-left": `${coords.left}%`,
		"--mobile-top": `${coords.top}%`,
		"--rotation": `${item.rotate}deg`,
		"--depth": item.depth,
		"--reveal": reveal,
		zIndex: item.z
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.figure, {
		className: `hooman-photo ${item.finalist ? "hooman-finalist" : ""}`,
		style,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceholderImage, { item })
	});
}
function HoomanSection() {
	const wrapperRef = (0, import_react.useRef)(null);
	const reduce = useReducedMotion();
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const [mobile, setMobile] = (0, import_react.useState)(false);
	const [narrow, setNarrow] = (0, import_react.useState)(false);
	const [phase, setPhase] = (0, import_react.useState)(0);
	const [edit, setEdit] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const query = window.matchMedia("(max-width: 767px)");
		const small = window.matchMedia("(max-width: 359px)");
		const update = () => {
			setMobile(query.matches);
			setNarrow(small.matches);
		};
		update();
		setHydrated(true);
		setEdit(new URLSearchParams(window.location.search).get("edit") === "1");
		query.addEventListener("change", update);
		small.addEventListener("change", update);
		return () => {
			query.removeEventListener("change", update);
			small.removeEventListener("change", update);
		};
	}, []);
	const staticMode = hydrated && (Boolean(reduce) || narrow);
	const { scrollYProgress } = useScroll({
		target: wrapperRef,
		offset: ["start start", "end end"]
	});
	useMotionValueEvent(scrollYProgress, "change", (p) => {
		setPhase([
			.24,
			.4,
			.55,
			.69,
			.83
		].filter((start) => p >= start).length);
	});
	const scale = useTransform(scrollYProgress, [
		0,
		.92,
		1
	], [
		1.1,
		1,
		1
	]);
	const progressStyle = {
		"--progress": staticMode ? 1 : scrollYProgress,
		scale: staticMode ? 1 : scale
	};
	const current = staticMode ? 5 : phase;
	const mobileCaption = hoomanCaptions.find((c) => c.phase === current + 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: wrapperRef,
		id: "hooman",
		"aria-label": hoomanCopy.label,
		className: `hooman-section ${staticMode ? "hooman-static" : ""} ${edit ? "hooman-edit" : ""}`,
		"data-phase": current,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: hoomanCopy.sentence
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hooman-stage",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "hooman-camera",
				style: progressStyle,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hooman-canvas",
					children: [
						hoomanItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
							item,
							progress: scrollYProgress,
							mobile,
							staticMode
						}, item.id)),
						hoomanCaptions.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							className: "hooman-caption",
							style: {
								left: `${c.desktop.left}%`,
								top: `${c.desktop.top}%`,
								width: `${c.desktop.width}%`,
								"--enter-at": phaseStarts[c.phase - 1] ?? .83
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: c.text }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodleIcon, {
								kind: c.doodle,
								draw: staticMode || current + 1 >= c.phase ? 1 : 0
							})]
						}, c.text)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hooman-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hooman-eyebrow",
									children: hoomanCopy.eyebrow
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "hooman-word",
									"aria-hidden": true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
										initial: false,
										mode: "popLayout",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
											initial: staticMode ? false : {
												y: 24,
												opacity: 0,
												filter: "blur(6px)"
											},
											animate: {
												y: 0,
												opacity: 1,
												filter: "blur(0px)"
											},
											exit: {
												y: -24,
												opacity: 0,
												filter: "blur(6px)"
											},
											transition: {
												duration: .35,
												ease: "easeOut"
											},
											children: hoomanPhases[current]
										}, current)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hooman-values",
									children: hoomanValues.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: row.map((value, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: staticMode || current + 1 >= value.phase ? "hooman-value-lit" : "",
										children: [j > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
											"aria-hidden": true,
											children: " · "
										}), value.text]
									}, value.text)) }, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hooman-globe",
									style: { opacity: current === 5 ? 1 : 0 },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodleIcon, {
										kind: "globe",
										draw: current === 5 ? 1 : 0
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "hooman-scroll",
									children: [
										hoomanCopy.scroll,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": true,
											children: "↓"
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hooman-mobile-caption",
							children: current === 5 ? hoomanCopy.finalCaption : mobileCaption?.text
						})
					]
				})
			})
		})]
	});
}
var collectionPhotos = (ids) => ids.flatMap((id) => {
	const photo = hoomanItems.find((item) => item.id === id);
	return photo ? [{
		src: photo.src,
		alt: photo.alt
	}] : [];
});
var hoomanBoard = {
	label: "Things that make me hooman — aspirations",
	eyebrow: "THINGS THAT MAKES ME",
	titleStart: "hoo",
	titleAccent: "man",
	titleEnd: ".",
	introduction: ["The places I want to see. The people I want to help.", "The things I still want to learn."],
	values: ["People. Places. Purpose. Curiosity. Kindness. Failure.", "Adventure. Learning. Giving back. And a few unreasonable dreams."],
	aspirations: [
		["TRAVEL", "Explore more of the world"],
		["LEARN", "Keep being a student"],
		["CREATE", "Build products that matter"],
		["COMMUNITY", "Bring people together"],
		["TEACH", "Share what I know"],
		["GIVE BACK", "Work on projects that reduce poverty"],
		["ENVIRONMENT", "Plant trees and protect ecosystems"],
		["WOMEN", "Support more women in tech"],
		["OPPORTUNITY", "Help underrepresented groups"],
		["ISLAND", "Own a small island someday"],
		["CULTURE", "Experience different cultures deeply"],
		["HEALTH", "Stay curious and healthy"],
		["FRIENDS", "Keep amazing people around"],
		["FREEDOM", "Design a location-independent life"],
		["IMPACT", "Leave things better than I found them"],
		["STORIES", "Document the journey"],
		["KINDNESS", "Choose kindness, always"],
		["BALANCE", "Build a life I enjoy waking up to"],
		["BELONG", "Be part of a kinder internet"],
		["HOOMAN", "Stay real, stay grounded"]
	],
	collections: [
		{
			label: "Places",
			coverId: "img-03",
			photos: collectionPhotos([
				"img-03",
				"img-06",
				"img-07",
				"img-08",
				"img-18",
				"img-19"
			])
		},
		{
			label: "People",
			coverId: "img-16",
			photos: collectionPhotos([
				"img-04",
				"img-05",
				"img-13",
				"img-16"
			])
		},
		{
			label: "Purpose",
			coverId: "img-09",
			photos: collectionPhotos([
				"img-01",
				"img-02",
				"img-09",
				"img-10",
				"img-11",
				"img-12",
				"img-14",
				"img-17"
			])
		}
	],
	conversations: [
		{
			title: "Tell me your story",
			description: "Have you done something from this list? I’d genuinely love to hear about it.",
			icon: "book",
			href: "https://www.linkedin.com/in/meshivamgarg"
		},
		{
			title: "You’ve got one too",
			description: "Found something here that you’ve been dreaming about? Share the excitement.",
			icon: "spark",
			href: "https://x.com/Shivams_twt"
		},
		{
			title: "Come say hi",
			description: "No agenda. No pitch. Let’s do it together.",
			icon: "people",
			href: "https://www.linkedin.com/in/meshivamgarg"
		}
	]
};
var hooman_board_landscape_default = "/assets/hooman-board-landscape-ac_LNuE_.png";
function BoardCollections() {
	const [active, setActive] = (0, import_react.useState)(null);
	const [pinned, setPinned] = (0, import_react.useState)(null);
	const [viewer, setViewer] = (0, import_react.useState)(null);
	const collection = active === null ? null : hoomanBoard.collections[active];
	const viewedCollection = viewer ? hoomanBoard.collections[viewer.collection] : null;
	const photo = viewer && viewedCollection ? viewedCollection.photos[viewer.photo] : null;
	const step = (delta) => setViewer((current) => {
		if (!current) return current;
		const selected = hoomanBoard.collections[current.collection];
		if (!selected || !selected.photos.length) return current;
		const length = selected.photos.length;
		return {
			...current,
			photo: (current.photo + delta + length) % length
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "hooman-collection-region",
		onMouseLeave: () => setActive(pinned),
		onBlur: (event) => {
			if (!event.currentTarget.contains(event.relatedTarget)) setActive(pinned);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hooman-board-collections",
				children: hoomanBoard.collections.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					className: "hooman-collection-trigger",
					"aria-label": `${item.label} photo collection`,
					"aria-expanded": active === index,
					"aria-controls": "hooman-collection-gallery",
					onMouseEnter: () => setActive(index),
					onFocus: () => setActive(index),
					onClick: () => {
						const next = pinned === index ? null : index;
						setPinned(next);
						setActive(next);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hooman-collection-stack",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hooman-stack-back hooman-print-layer",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hooman-stack-middle hooman-print-layer",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "hooman-stack-cover hooman-print-layer",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: hoomanItems.find((photo) => photo.id === item.coverId)?.src,
										alt: hoomanItems.find((photo) => photo.id === item.coverId)?.alt ?? item.label,
										loading: "lazy",
										decoding: "async",
										width: "240",
										height: "240"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hooman-print-caption",
										children: item.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hooman-board-count",
										children: item.photos.length
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hooman-collection-label",
						children: item.label
					})]
				}) }, item.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "hooman-collection-gallery",
				className: "hooman-collection-expansion",
				"data-open": Boolean(collection),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: collection && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hooman-collection-gallery",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [collection.label, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [collection.photos.length, " photographs"] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hooman-collection-grid",
						children: collection.photos.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							className: "hooman-gallery-photo",
							"aria-label": `View ${item.alt}`,
							onClick: () => {
								if (active !== null) setViewer({
									collection: active,
									photo: index
								});
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.src,
								alt: item.alt,
								loading: "lazy",
								decoding: "async"
							})
						}, item.src))
					})]
				}) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: Boolean(viewer),
				onOpenChange: (open) => {
					if (!open) setViewer(null);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "hooman-photo-dialog",
					onKeyDown: (event) => {
						if (event.key === "ArrowLeft") {
							event.preventDefault();
							step(-1);
						}
						if (event.key === "ArrowRight") {
							event.preventDefault();
							step(1);
						}
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: viewedCollection?.label }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: photo?.alt }),
						photo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "hooman-lightbox-image",
							src: photo.src,
							alt: photo.alt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hooman-lightbox-controls",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "icon",
									"aria-label": "Previous photograph",
									onClick: () => step(-1),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									"aria-live": "polite",
									children: [
										viewer ? viewer.photo + 1 : 0,
										" / ",
										viewedCollection?.photos.length
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "icon",
									"aria-label": "Next photograph",
									onClick: () => step(1),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
								})
							]
						})
					]
				})
			})
		]
	});
}
function PaperStipple() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: "hooman-board-stipple",
		viewBox: "0 0 1000 195",
		preserveAspectRatio: "none",
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M0 130Q90 160 160 138T350 90T570 128T800 133T1000 150V195H0Z",
			fill: "currentColor",
			opacity: ".3"
		}), Array.from({ length: 2400 }, (_, i) => {
			const random = (seed) => {
				const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
				return value - Math.floor(value);
			};
			const x = random(i + 1) * 1e3;
			const y = random(i + 4901) * 195;
			return y > 55 + 55 * Math.sin(x / 130) + 20 * Math.cos(x / 75) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: x,
				cy: y,
				r: .7 + i % 4 * .25,
				opacity: .2 + y / 195 * .5
			}, i) : null;
		})]
	});
}
function HoomanBoard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "hooman-aspirations",
		"aria-label": hoomanBoard.label,
		className: "hooman-board-section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			className: "hooman-board-landscape",
			src: hooman_board_landscape_default,
			alt: "",
			loading: "lazy",
			decoding: "async"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hooman-board-paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperStipple, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hooman-board-content",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "hooman-board-list",
						children: hoomanBoard.aspirations.map(([label, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							tabIndex: 0,
							className: "hooman-wishlist-item",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: text })]
						}, label))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hooman-board-story",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hooman-board-eyebrow",
								children: hoomanBoard.eyebrow
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								hoomanBoard.titleStart,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: hoomanBoard.titleAccent }),
								hoomanBoard.titleEnd
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hooman-board-intro",
								children: hoomanBoard.introduction.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: line }, line))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hooman-board-values",
								children: hoomanBoard.values.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line }, line))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoardCollections, {})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hooman-board-conversations",
					children: hoomanBoard.conversations.map((item) => {
						const Icon = item.icon === "book" ? BookOpen : item.icon === "spark" ? Sparkles : Users;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							className: "hooman-board-conversation",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: item.href,
								target: "_blank",
								rel: "noreferrer",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { "aria-hidden": true }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: item.description })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										"aria-hidden": true,
										className: "hooman-board-arrow"
									})
								]
							})
						}, item.title);
					})
				})
			]
		})]
	});
}
var VOICE_PROMPT_SESSION_KEY = "trail-voice-prompt-seen";
var sectionVoices = {
	gate: "aisha",
	village: "priya",
	"communities-shelf": "priya",
	"night-camp": "rohan",
	resources: "daniel",
	products: "aisha",
	hooman: "kenji",
	"hooman-aspirations": "kenji"
};
function voiceForSection(section) {
	const id = sectionVoices[section];
	return id ? voices.find((voice) => voice.id === id && voice.name && voice.image && voice.quote) : void 0;
}
function VoicePrompt({ enabled }) {
	const [voice, setVoice] = (0, import_react.useState)(null);
	const [opened, setOpened] = (0, import_react.useState)(false);
	const [finished, setFinished] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!enabled || finished || voice) return;
		try {
			if (sessionStorage.getItem("trail-voice-prompt-seen")) return;
		} catch {}
		let section = "";
		let started = Date.now();
		const timer = window.setInterval(() => {
			if (document.hidden || document.querySelector("[role=\"dialog\"]:not([aria-hidden=\"true\"]):not([inert])")) {
				section = "";
				started = Date.now();
				return;
			}
			const current = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2)?.closest("section[id]")?.id ?? "";
			const candidate = voiceForSection(current);
			if (!candidate || current !== section) {
				section = current;
				started = Date.now();
				return;
			}
			if (Date.now() - started < 7e3) return;
			setVoice(candidate);
			try {
				sessionStorage.setItem(VOICE_PROMPT_SESSION_KEY, "1");
			} catch {}
			window.clearInterval(timer);
		}, 500);
		return () => window.clearInterval(timer);
	}, [
		enabled,
		finished,
		voice
	]);
	const dismiss = () => {
		setOpened(false);
		setVoice(null);
		setFinished(true);
	};
	(0, import_react.useEffect)(() => {
		if (!voice || opened) return;
		const escape = (event) => {
			if (event.key === "Escape") {
				setVoice(null);
				setFinished(true);
			}
		};
		window.addEventListener("keydown", escape);
		return () => window.removeEventListener("keydown", escape);
	}, [voice, opened]);
	if (!voice || !enabled) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [!opened && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "voice-prompt",
		"aria-label": "A testimonial for Shivam",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "ghost",
			className: "voice-prompt-story",
			onClick: () => setOpened(true),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: voice.image,
				alt: "",
				width: "52",
				height: "52",
				decoding: "async"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"See what ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: voice.name }),
				" has to say about Shivam.",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { "aria-hidden": true })
			] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "icon",
			className: "voice-prompt-close",
			"aria-label": "Dismiss testimonial suggestion",
			title: "Dismiss",
			onClick: dismiss,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: opened,
		onOpenChange: (open) => {
			if (!open) dismiss();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "voice-prompt-dialog",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: voice.image,
					alt: "",
					width: "64",
					height: "64"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: [voice.name, " on Shivam"] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [voice.role, voice.sample ? " · Sample testimonial; identity and quote await confirmation." : ""] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", { children: [
					"“",
					voice.quote,
					"”"
				] })
			]
		})
	})] });
}
var background_port39_webp_asset_default = {
	version: 1,
	asset_id: "902ad917-794e-411f-8962-7e9fbdd38d34",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/902ad917-794e-411f-8962-7e9fbdd38d34/background-port39.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/902ad917-794e-411f-8962-7e9fbdd38d34/background-port39.webp",
	original_filename: "background-port39.webp",
	size: 111802,
	content_type: "image/webp",
	created_at: "2026-10-07T13:11:03Z"
};
var paper_webp_asset_default = {
	version: 1,
	asset_id: "5b8df9ac-21b6-4038-883c-1a9dc75cd3b4",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/5b8df9ac-21b6-4038-883c-1a9dc75cd3b4/intro-paper.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/5b8df9ac-21b6-4038-883c-1a9dc75cd3b4/intro-paper.webp",
	original_filename: "intro-paper.webp",
	size: 4400,
	content_type: "image/webp",
	created_at: "2026-10-07T09:30:59Z"
};
var portrait_optimized_webp_asset_default = {
	version: 1,
	asset_id: "06bab64e-5559-4269-b0b7-8c293df05813",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/06bab64e-5559-4269-b0b7-8c293df05813/intro-portrait-optimized.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/06bab64e-5559-4269-b0b7-8c293df05813/intro-portrait-optimized.webp",
	original_filename: "intro-portrait-optimized.webp",
	size: 41758,
	content_type: "image/webp",
	created_at: "2026-10-07T13:29:17Z"
};
var statistics = [
	{
		icon: Compass,
		value: "20+",
		label: "Communities",
		target: ".journey-section",
		filter: "Community"
	},
	{
		icon: Users,
		value: "50K+",
		label: "Community Members",
		target: ".journey-section",
		filter: "Community"
	},
	{
		icon: CalendarDays,
		value: "200+",
		label: "Events & Programs",
		target: ".journey-section",
		filter: "Community"
	},
	{
		icon: Handshake,
		value: "40+",
		label: "Global Partners",
		target: ".work-section"
	},
	{
		icon: CodeXml,
		value: "500+",
		label: "Builders Supported",
		target: ".journey-section",
		filter: "Developer Tools"
	},
	{
		icon: ChartNoAxesCombined,
		value: "5M+",
		label: "Total Impressions",
		target: ".work-section"
	}
];
function goTo(selector) {
	document.querySelector(selector)?.scrollIntoView({
		behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
		block: "start"
	});
}
function Introduction() {
	const { t, language } = useLanguage();
	const sectionRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const section = sectionRef.current;
		if (!section) return;
		const left = section.querySelector(".intro-left");
		const right = section.querySelector(".intro-right");
		if (!left || !right) return;
		const update = () => {
			const height = window.innerWidth <= 700 ? Math.max(left.offsetTop + left.offsetHeight, right.offsetTop + right.offsetHeight) + 165 : language !== "en" ? 150 + Math.max(left.offsetHeight, right.offsetHeight) + 165 : Math.max((left.offsetHeight + 32) / .637, (right.offsetHeight + 32) / .607);
			section.style.setProperty("--intro-required-height", `${Math.ceil(height)}px`);
		};
		const observer = new ResizeObserver(update);
		observer.observe(left);
		observer.observe(right);
		window.addEventListener("resize", update);
		update();
		return () => {
			observer.disconnect();
			window.removeEventListener("resize", update);
		};
	}, [language]);
	const [dialog, setDialog] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [activeStat, setActiveStat] = (0, import_react.useState)(null);
	const openStat = (stat) => {
		setActiveStat(stat.label);
		window.setTimeout(() => {
			if ("filter" in stat && stat.filter) window.dispatchEvent(new CustomEvent("journey-filter", { detail: stat.filter }));
			goTo(stat.target);
			window.setTimeout(() => setActiveStat(null), 1400);
		}, 380);
	};
	const move = (event) => {
		if (event.pointerType !== "mouse") return;
		const rect = event.currentTarget.getBoundingClientRect();
		event.currentTarget.style.setProperty("--intro-x", `${((event.clientX - rect.left) / rect.width - .5) * 8}px`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: sectionRef,
		className: "intro-section",
		id: "introduction",
		"aria-label": t("Introduction"),
		onPointerMove: move,
		onPointerLeave: (event) => event.currentTarget.style.setProperty("--intro-x", "0px"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "intro-background",
				src: background_port39_webp_asset_default.url,
				alt: "",
				fetchPriority: "high",
				decoding: "async"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("picture", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
				media: "(max-width: 700px)",
				srcSet: paper_webp_asset_default.url
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "intro-mobile-paper",
				alt: "",
				decoding: "async"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "intro-nav",
				"aria-label": t("Main navigation"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => goTo(".expertise-page"),
						children: t("Services")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							children: t("About")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => setDialog("principles"),
						children: t("Our Principles")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => goTo(".journey-section"),
						children: t("Community")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => setDialog("contact"),
						children: t("Contact")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "intro-socials",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": t("Instagram"),
							title: t("Instagram"),
							onClick: () => setDialog("instagram"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": t("Facebook"),
							title: t("Facebook"),
							onClick: () => setDialog("facebook"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, {})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "intro-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "intro-eyebrow",
						children: t("INTRODUCTION")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
						t("Hy! I Am"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("John Deo.") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", {
							className: "intro-rays",
							"aria-hidden": "true",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {})
							]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "intro-biography",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t("Hi, I'm Shivam.") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("Hi, I'm Shivam. I've spent the last few years helping Web3, open-source and developer communities feel a little less lonely. In 2025 I started DoraDAO with one stubborn idea: take Web3 to the cities everyone skips.") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "intro-underline",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								className: "intro-experience",
								onClick: () => goTo(".work-section"),
								"aria-label": t("Explore eight years of experience"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "08" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									t("YEARS"),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									t("EXPERIENCE")
								] })]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("picture", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
				media: "(max-width: 700px)",
				srcSet: portrait_optimized_webp_asset_default.url
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "intro-mobile-portrait",
				alt: t("Pixel-art illustration of Shivam in a yellow hoodie and backpack"),
				decoding: "async"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "intro-right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "intro-manifesto",
					children: [
						t("I design beautifully simple things,"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						t("and I love what I do."),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "intro-underline",
							"aria-hidden": "true"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "intro-outcome",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							t("From first conversation to global"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							" ",
							t("momentum.")
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t("200K active users in month one.") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "intro-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "intro-primary",
								onClick: () => goTo(".journey-section"),
								children: [t("Explore the trail "), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								className: "intro-secondary",
								onClick: () => goTo(".work-section"),
								children: [t("See the work "), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "intro-statistics",
				"aria-label": t("Community impact"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "intro-statistics-track",
					children: [0, 1].map((copy) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "intro-statistics-set",
						"aria-hidden": copy === 1,
						children: statistics.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							className: "intro-stat",
							"data-active": activeStat === stat.label,
							onClick: () => openStat(stat),
							tabIndex: copy === 1 ? -1 : 0,
							title: t(String(`Explore ${stat.label.toLowerCase()}`)),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(stat.icon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: stat.value }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t(String(stat.label)) })] })]
						}, stat.label))
					}, copy))
				})
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: dialog !== null,
		onOpenChange: (open) => {
			if (!open) {
				setDialog(null);
				setCopied(false);
			}
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "intro-dialog",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: t(String(dialog === "principles" ? "Different communities. Same purpose." : dialog === "contact" ? "Let’s start a conversation." : dialog === "instagram" ? "Instagram" : "Facebook")) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: t(String(dialog === "principles" ? "Take Web3 to the cities everyone skips. Make developer communities feel a little less lonely." : dialog === "contact" ? "Find the communities, products and people behind DoraDAO." : "The profile link has not been provided yet.")) }),
				dialog === "principles" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "intro-principles",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }), t(" Communities first.")] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02" }), t(" Make room for builders.")] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03" }), t(" From local conversations to global momentum.")] })
					]
				}),
				dialog === "contact" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					className: "intro-copy",
					onClick: async () => {
						try {
							const url = new URL(window.location.href);
							url.hash = "";
							await navigator.clipboard.writeText(url.href);
							setCopied(true);
						} catch {
							setCopied(false);
						}
					},
					children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), t(String(copied ? "Portfolio link copied" : "Copy portfolio link"))]
				})
			]
		})
	})] });
}
var campus_webp_asset_default = {
	version: 1,
	asset_id: "f813da2a-c924-4b58-9ac5-e60bfebe541d",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/f813da2a-c924-4b58-9ac5-e60bfebe541d/campus.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/f813da2a-c924-4b58-9ac5-e60bfebe541d/campus.webp",
	original_filename: "campus.webp",
	size: 14242,
	content_type: "image/webp",
	created_at: "2026-10-06T19:31:50Z"
};
var nexus_webp_asset_default = {
	version: 1,
	asset_id: "9ead2eb9-9413-4efc-a728-8ffc0de9abff",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/9ead2eb9-9413-4efc-a728-8ffc0de9abff/nexus.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/9ead2eb9-9413-4efc-a728-8ffc0de9abff/nexus.webp",
	original_filename: "nexus.webp",
	size: 2118,
	content_type: "image/webp",
	created_at: "2026-10-06T19:32:06Z"
};
var dora_webp_asset_default = {
	version: 1,
	asset_id: "260308aa-2676-47a5-b2c7-5e743d73ac32",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/260308aa-2676-47a5-b2c7-5e743d73ac32/dora.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/260308aa-2676-47a5-b2c7-5e743d73ac32/dora.webp",
	original_filename: "dora.webp",
	size: 2262,
	content_type: "image/webp",
	created_at: "2026-10-06T19:31:59Z"
};
var zoth_webp_asset_default = {
	version: 1,
	asset_id: "04bd77ee-7710-4e9a-98b9-826d48d652ea",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/04bd77ee-7710-4e9a-98b9-826d48d652ea/zoth.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/04bd77ee-7710-4e9a-98b9-826d48d652ea/zoth.webp",
	original_filename: "zoth.webp",
	size: 1634,
	content_type: "image/webp",
	created_at: "2026-10-06T19:32:25Z"
};
var code_webp_asset_default = {
	version: 1,
	asset_id: "221dff51-ccd0-465b-a0e0-07087580218d",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/221dff51-ccd0-465b-a0e0-07087580218d/code.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/221dff51-ccd0-465b-a0e0-07087580218d/code.webp",
	original_filename: "code.webp",
	size: 1322,
	content_type: "image/webp",
	created_at: "2026-10-06T19:31:54Z"
};
var solana_webp_asset_default = {
	version: 1,
	asset_id: "8f47a563-5347-42ea-bb7a-dfbe3e401532",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/8f47a563-5347-42ea-bb7a-dfbe3e401532/solana.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/8f47a563-5347-42ea-bb7a-dfbe3e401532/solana.webp",
	original_filename: "solana.webp",
	size: 1202,
	content_type: "image/webp",
	created_at: "2026-10-06T19:32:21Z"
};
var opensource_webp_asset_default = {
	version: 1,
	asset_id: "e7297a1b-a0da-4fe0-9b95-f56d07047f06",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/e7297a1b-a0da-4fe0-9b95-f56d07047f06/opensource.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/e7297a1b-a0da-4fe0-9b95-f56d07047f06/opensource.webp",
	original_filename: "opensource.webp",
	size: 1272,
	content_type: "image/webp",
	created_at: "2026-10-06T19:32:15Z"
};
var avatar_1_webp_asset_default = {
	version: 1,
	asset_id: "f503dfb3-99ab-42d1-8dbf-f592f458fae3",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/f503dfb3-99ab-42d1-8dbf-f592f458fae3/avatar-1.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/f503dfb3-99ab-42d1-8dbf-f592f458fae3/avatar-1.webp",
	original_filename: "avatar-1.webp",
	size: 650,
	content_type: "image/webp",
	created_at: "2026-10-06T19:31:20Z"
};
var avatar_2_webp_asset_default = {
	version: 1,
	asset_id: "ba5bb41a-98c3-4e9c-a219-aabf6f1b3c3c",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/ba5bb41a-98c3-4e9c-a219-aabf6f1b3c3c/avatar-2.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/ba5bb41a-98c3-4e9c-a219-aabf6f1b3c3c/avatar-2.webp",
	original_filename: "avatar-2.webp",
	size: 584,
	content_type: "image/webp",
	created_at: "2026-10-06T19:31:29Z"
};
var avatar_3_webp_asset_default = {
	version: 1,
	asset_id: "3a09c6ae-6f2c-4589-be52-e51f18b1e20e",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/3a09c6ae-6f2c-4589-be52-e51f18b1e20e/avatar-3.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/3a09c6ae-6f2c-4589-be52-e51f18b1e20e/avatar-3.webp",
	original_filename: "avatar-3.webp",
	size: 606,
	content_type: "image/webp",
	created_at: "2026-10-06T19:31:38Z"
};
var avatar_4_webp_asset_default = {
	version: 1,
	asset_id: "6cd285d1-f598-4cba-90a3-9333da984b9c",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/6cd285d1-f598-4cba-90a3-9333da984b9c/avatar-4.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/6cd285d1-f598-4cba-90a3-9333da984b9c/avatar-4.webp",
	original_filename: "avatar-4.webp",
	size: 610,
	content_type: "image/webp",
	created_at: "2026-10-06T19:31:43Z"
};
var map_dots_default = /*#__PURE__*/ JSON.parse("[[111.0,154.4],[105.0,151.0],[108.0,151.0],[111.0,151.0],[108.0,147.7],[111.0,147.7],[249.0,147.7],[108.0,144.3],[111.0,144.3],[348.0,144.3],[108.0,141.0],[111.0,141.0],[114.0,141.0],[327.0,141.0],[351.0,141.0],[108.0,137.6],[111.0,137.6],[114.0,137.6],[117.0,137.6],[324.0,137.6],[108.0,134.3],[111.0,134.3],[114.0,134.3],[117.0,134.3],[120.0,134.3],[123.0,134.3],[321.0,134.3],[324.0,134.3],[327.0,134.3],[111.0,130.9],[114.0,130.9],[117.0,130.9],[120.0,130.9],[123.0,130.9],[126.0,130.9],[201.0,130.9],[204.0,130.9],[297.0,130.9],[318.0,130.9],[321.0,130.9],[324.0,130.9],[327.0,130.9],[330.0,130.9],[111.0,127.6],[114.0,127.6],[117.0,127.6],[120.0,127.6],[123.0,127.6],[126.0,127.6],[198.0,127.6],[201.0,127.6],[204.0,127.6],[207.0,127.6],[210.0,127.6],[297.0,127.6],[300.0,127.6],[303.0,127.6],[306.0,127.6],[309.0,127.6],[312.0,127.6],[315.0,127.6],[318.0,127.6],[321.0,127.6],[324.0,127.6],[327.0,127.6],[330.0,127.6],[333.0,127.6],[111.0,124.2],[114.0,124.2],[117.0,124.2],[120.0,124.2],[123.0,124.2],[126.0,124.2],[129.0,124.2],[198.0,124.2],[201.0,124.2],[204.0,124.2],[207.0,124.2],[210.0,124.2],[297.0,124.2],[300.0,124.2],[303.0,124.2],[306.0,124.2],[309.0,124.2],[312.0,124.2],[315.0,124.2],[318.0,124.2],[321.0,124.2],[324.0,124.2],[327.0,124.2],[330.0,124.2],[333.0,124.2],[111.0,120.8],[114.0,120.8],[117.0,120.8],[120.0,120.8],[123.0,120.8],[126.0,120.8],[129.0,120.8],[132.0,120.8],[195.0,120.8],[198.0,120.8],[201.0,120.8],[204.0,120.8],[207.0,120.8],[210.0,120.8],[213.0,120.8],[225.0,120.8],[294.0,120.8],[297.0,120.8],[300.0,120.8],[303.0,120.8],[306.0,120.8],[309.0,120.8],[312.0,120.8],[315.0,120.8],[318.0,120.8],[321.0,120.8],[324.0,120.8],[327.0,120.8],[330.0,120.8],[111.0,117.5],[114.0,117.5],[117.0,117.5],[120.0,117.5],[123.0,117.5],[126.0,117.5],[129.0,117.5],[132.0,117.5],[135.0,117.5],[138.0,117.5],[195.0,117.5],[198.0,117.5],[201.0,117.5],[204.0,117.5],[207.0,117.5],[210.0,117.5],[213.0,117.5],[225.0,117.5],[228.0,117.5],[294.0,117.5],[297.0,117.5],[300.0,117.5],[303.0,117.5],[306.0,117.5],[309.0,117.5],[312.0,117.5],[315.0,117.5],[318.0,117.5],[321.0,117.5],[324.0,117.5],[327.0,117.5],[111.0,114.1],[114.0,114.1],[117.0,114.1],[120.0,114.1],[123.0,114.1],[126.0,114.1],[129.0,114.1],[132.0,114.1],[135.0,114.1],[138.0,114.1],[195.0,114.1],[198.0,114.1],[201.0,114.1],[204.0,114.1],[207.0,114.1],[210.0,114.1],[213.0,114.1],[225.0,114.1],[228.0,114.1],[303.0,114.1],[306.0,114.1],[309.0,114.1],[312.0,114.1],[315.0,114.1],[318.0,114.1],[321.0,114.1],[324.0,114.1],[108.0,110.8],[111.0,110.8],[114.0,110.8],[117.0,110.8],[120.0,110.8],[123.0,110.8],[126.0,110.8],[129.0,110.8],[132.0,110.8],[135.0,110.8],[138.0,110.8],[141.0,110.8],[192.0,110.8],[195.0,110.8],[198.0,110.8],[201.0,110.8],[204.0,110.8],[207.0,110.8],[210.0,110.8],[213.0,110.8],[216.0,110.8],[219.0,110.8],[228.0,110.8],[306.0,110.8],[309.0,110.8],[312.0,110.8],[315.0,110.8],[324.0,110.8],[105.0,107.4],[108.0,107.4],[111.0,107.4],[114.0,107.4],[117.0,107.4],[120.0,107.4],[123.0,107.4],[126.0,107.4],[129.0,107.4],[132.0,107.4],[135.0,107.4],[138.0,107.4],[141.0,107.4],[195.0,107.4],[198.0,107.4],[201.0,107.4],[204.0,107.4],[207.0,107.4],[210.0,107.4],[213.0,107.4],[216.0,107.4],[219.0,107.4],[312.0,107.4],[315.0,107.4],[102.0,104.1],[105.0,104.1],[108.0,104.1],[111.0,104.1],[114.0,104.1],[117.0,104.1],[120.0,104.1],[123.0,104.1],[126.0,104.1],[129.0,104.1],[132.0,104.1],[135.0,104.1],[138.0,104.1],[141.0,104.1],[195.0,104.1],[198.0,104.1],[201.0,104.1],[204.0,104.1],[207.0,104.1],[210.0,104.1],[213.0,104.1],[216.0,104.1],[219.0,104.1],[300.0,104.1],[102.0,100.7],[105.0,100.7],[108.0,100.7],[111.0,100.7],[114.0,100.7],[117.0,100.7],[120.0,100.7],[123.0,100.7],[126.0,100.7],[129.0,100.7],[132.0,100.7],[135.0,100.7],[138.0,100.7],[141.0,100.7],[144.0,100.7],[195.0,100.7],[198.0,100.7],[201.0,100.7],[204.0,100.7],[207.0,100.7],[210.0,100.7],[213.0,100.7],[216.0,100.7],[219.0,100.7],[288.0,100.7],[291.0,100.7],[294.0,100.7],[321.0,100.7],[324.0,100.7],[99.0,97.3],[102.0,97.3],[105.0,97.3],[108.0,97.3],[111.0,97.3],[114.0,97.3],[117.0,97.3],[120.0,97.3],[123.0,97.3],[126.0,97.3],[129.0,97.3],[132.0,97.3],[135.0,97.3],[138.0,97.3],[141.0,97.3],[192.0,97.3],[195.0,97.3],[198.0,97.3],[201.0,97.3],[204.0,97.3],[207.0,97.3],[210.0,97.3],[213.0,97.3],[216.0,97.3],[219.0,97.3],[285.0,97.3],[300.0,97.3],[315.0,97.3],[318.0,97.3],[321.0,97.3],[324.0,97.3],[102.0,94.0],[105.0,94.0],[108.0,94.0],[111.0,94.0],[114.0,94.0],[117.0,94.0],[120.0,94.0],[123.0,94.0],[126.0,94.0],[132.0,94.0],[189.0,94.0],[192.0,94.0],[195.0,94.0],[198.0,94.0],[201.0,94.0],[204.0,94.0],[207.0,94.0],[210.0,94.0],[213.0,94.0],[216.0,94.0],[219.0,94.0],[282.0,94.0],[291.0,94.0],[294.0,94.0],[297.0,94.0],[300.0,94.0],[312.0,94.0],[102.0,90.6],[105.0,90.6],[108.0,90.6],[111.0,90.6],[114.0,90.6],[117.0,90.6],[120.0,90.6],[123.0,90.6],[126.0,90.6],[129.0,90.6],[192.0,90.6],[195.0,90.6],[198.0,90.6],[201.0,90.6],[204.0,90.6],[207.0,90.6],[210.0,90.6],[213.0,90.6],[216.0,90.6],[219.0,90.6],[222.0,90.6],[225.0,90.6],[279.0,90.6],[294.0,90.6],[297.0,90.6],[105.0,87.3],[108.0,87.3],[111.0,87.3],[114.0,87.3],[117.0,87.3],[120.0,87.3],[123.0,87.3],[126.0,87.3],[171.0,87.3],[174.0,87.3],[186.0,87.3],[189.0,87.3],[192.0,87.3],[195.0,87.3],[198.0,87.3],[201.0,87.3],[204.0,87.3],[207.0,87.3],[210.0,87.3],[213.0,87.3],[216.0,87.3],[219.0,87.3],[222.0,87.3],[225.0,87.3],[228.0,87.3],[276.0,87.3],[282.0,87.3],[297.0,87.3],[99.0,83.9],[102.0,83.9],[105.0,83.9],[108.0,83.9],[111.0,83.9],[114.0,83.9],[117.0,83.9],[120.0,83.9],[168.0,83.9],[171.0,83.9],[174.0,83.9],[177.0,83.9],[180.0,83.9],[183.0,83.9],[186.0,83.9],[189.0,83.9],[192.0,83.9],[195.0,83.9],[198.0,83.9],[201.0,83.9],[204.0,83.9],[207.0,83.9],[210.0,83.9],[213.0,83.9],[216.0,83.9],[219.0,83.9],[222.0,83.9],[225.0,83.9],[228.0,83.9],[261.0,83.9],[279.0,83.9],[297.0,83.9],[303.0,83.9],[306.0,83.9],[96.0,80.6],[108.0,80.6],[111.0,80.6],[165.0,80.6],[168.0,80.6],[171.0,80.6],[174.0,80.6],[177.0,80.6],[180.0,80.6],[183.0,80.6],[186.0,80.6],[189.0,80.6],[192.0,80.6],[195.0,80.6],[198.0,80.6],[201.0,80.6],[204.0,80.6],[207.0,80.6],[210.0,80.6],[213.0,80.6],[216.0,80.6],[219.0,80.6],[222.0,80.6],[228.0,80.6],[231.0,80.6],[258.0,80.6],[279.0,80.6],[285.0,80.6],[288.0,80.6],[90.0,77.2],[93.0,77.2],[96.0,77.2],[165.0,77.2],[168.0,77.2],[171.0,77.2],[174.0,77.2],[177.0,77.2],[180.0,77.2],[183.0,77.2],[186.0,77.2],[189.0,77.2],[192.0,77.2],[195.0,77.2],[198.0,77.2],[201.0,77.2],[204.0,77.2],[207.0,77.2],[210.0,77.2],[213.0,77.2],[216.0,77.2],[219.0,77.2],[225.0,77.2],[255.0,77.2],[258.0,77.2],[279.0,77.2],[282.0,77.2],[285.0,77.2],[288.0,77.2],[303.0,77.2],[81.0,73.8],[84.0,73.8],[87.0,73.8],[90.0,73.8],[165.0,73.8],[168.0,73.8],[171.0,73.8],[174.0,73.8],[177.0,73.8],[180.0,73.8],[183.0,73.8],[186.0,73.8],[189.0,73.8],[192.0,73.8],[195.0,73.8],[198.0,73.8],[201.0,73.8],[204.0,73.8],[207.0,73.8],[210.0,73.8],[213.0,73.8],[216.0,73.8],[219.0,73.8],[225.0,73.8],[228.0,73.8],[231.0,73.8],[234.0,73.8],[255.0,73.8],[258.0,73.8],[261.0,73.8],[276.0,73.8],[279.0,73.8],[282.0,73.8],[285.0,73.8],[75.0,70.5],[78.0,70.5],[81.0,70.5],[90.0,70.5],[105.0,70.5],[165.0,70.5],[168.0,70.5],[171.0,70.5],[174.0,70.5],[177.0,70.5],[180.0,70.5],[183.0,70.5],[186.0,70.5],[189.0,70.5],[192.0,70.5],[195.0,70.5],[198.0,70.5],[201.0,70.5],[204.0,70.5],[207.0,70.5],[210.0,70.5],[213.0,70.5],[216.0,70.5],[222.0,70.5],[225.0,70.5],[228.0,70.5],[231.0,70.5],[234.0,70.5],[237.0,70.5],[255.0,70.5],[258.0,70.5],[261.0,70.5],[264.0,70.5],[276.0,70.5],[279.0,70.5],[282.0,70.5],[285.0,70.5],[75.0,67.1],[78.0,67.1],[81.0,67.1],[99.0,67.1],[165.0,67.1],[168.0,67.1],[171.0,67.1],[174.0,67.1],[177.0,67.1],[180.0,67.1],[183.0,67.1],[186.0,67.1],[189.0,67.1],[192.0,67.1],[195.0,67.1],[198.0,67.1],[201.0,67.1],[204.0,67.1],[207.0,67.1],[210.0,67.1],[213.0,67.1],[219.0,67.1],[222.0,67.1],[225.0,67.1],[228.0,67.1],[231.0,67.1],[234.0,67.1],[237.0,67.1],[249.0,67.1],[252.0,67.1],[255.0,67.1],[258.0,67.1],[261.0,67.1],[264.0,67.1],[267.0,67.1],[270.0,67.1],[273.0,67.1],[276.0,67.1],[279.0,67.1],[282.0,67.1],[285.0,67.1],[288.0,67.1],[291.0,67.1],[294.0,67.1],[72.0,63.8],[75.0,63.8],[78.0,63.8],[81.0,63.8],[99.0,63.8],[168.0,63.8],[171.0,63.8],[174.0,63.8],[177.0,63.8],[180.0,63.8],[183.0,63.8],[186.0,63.8],[189.0,63.8],[192.0,63.8],[195.0,63.8],[198.0,63.8],[201.0,63.8],[204.0,63.8],[207.0,63.8],[210.0,63.8],[213.0,63.8],[219.0,63.8],[222.0,63.8],[225.0,63.8],[228.0,63.8],[240.0,63.8],[243.0,63.8],[246.0,63.8],[249.0,63.8],[252.0,63.8],[255.0,63.8],[258.0,63.8],[261.0,63.8],[264.0,63.8],[267.0,63.8],[270.0,63.8],[273.0,63.8],[276.0,63.8],[279.0,63.8],[282.0,63.8],[285.0,63.8],[288.0,63.8],[291.0,63.8],[294.0,63.8],[297.0,63.8],[66.0,60.4],[69.0,60.4],[72.0,60.4],[75.0,60.4],[78.0,60.4],[81.0,60.4],[84.0,60.4],[99.0,60.4],[171.0,60.4],[174.0,60.4],[177.0,60.4],[180.0,60.4],[183.0,60.4],[186.0,60.4],[189.0,60.4],[192.0,60.4],[195.0,60.4],[198.0,60.4],[201.0,60.4],[204.0,60.4],[207.0,60.4],[210.0,60.4],[216.0,60.4],[219.0,60.4],[222.0,60.4],[225.0,60.4],[228.0,60.4],[231.0,60.4],[234.0,60.4],[237.0,60.4],[240.0,60.4],[243.0,60.4],[246.0,60.4],[249.0,60.4],[252.0,60.4],[255.0,60.4],[258.0,60.4],[261.0,60.4],[264.0,60.4],[267.0,60.4],[270.0,60.4],[273.0,60.4],[276.0,60.4],[279.0,60.4],[282.0,60.4],[285.0,60.4],[288.0,60.4],[291.0,60.4],[294.0,60.4],[297.0,60.4],[300.0,60.4],[66.0,57.1],[69.0,57.1],[72.0,57.1],[75.0,57.1],[78.0,57.1],[81.0,57.1],[84.0,57.1],[87.0,57.1],[90.0,57.1],[93.0,57.1],[96.0,57.1],[99.0,57.1],[171.0,57.1],[174.0,57.1],[177.0,57.1],[180.0,57.1],[183.0,57.1],[186.0,57.1],[189.0,57.1],[192.0,57.1],[195.0,57.1],[201.0,57.1],[204.0,57.1],[216.0,57.1],[219.0,57.1],[222.0,57.1],[225.0,57.1],[228.0,57.1],[231.0,57.1],[234.0,57.1],[237.0,57.1],[240.0,57.1],[243.0,57.1],[246.0,57.1],[249.0,57.1],[252.0,57.1],[255.0,57.1],[258.0,57.1],[261.0,57.1],[264.0,57.1],[267.0,57.1],[270.0,57.1],[273.0,57.1],[276.0,57.1],[279.0,57.1],[282.0,57.1],[285.0,57.1],[288.0,57.1],[291.0,57.1],[294.0,57.1],[297.0,57.1],[60.0,53.7],[63.0,53.7],[66.0,53.7],[69.0,53.7],[72.0,53.7],[75.0,53.7],[78.0,53.7],[81.0,53.7],[84.0,53.7],[87.0,53.7],[90.0,53.7],[93.0,53.7],[96.0,53.7],[99.0,53.7],[102.0,53.7],[174.0,53.7],[177.0,53.7],[180.0,53.7],[183.0,53.7],[186.0,53.7],[189.0,53.7],[213.0,53.7],[216.0,53.7],[219.0,53.7],[222.0,53.7],[225.0,53.7],[228.0,53.7],[231.0,53.7],[234.0,53.7],[237.0,53.7],[240.0,53.7],[243.0,53.7],[246.0,53.7],[249.0,53.7],[252.0,53.7],[255.0,53.7],[258.0,53.7],[261.0,53.7],[264.0,53.7],[267.0,53.7],[270.0,53.7],[273.0,53.7],[276.0,53.7],[279.0,53.7],[282.0,53.7],[285.0,53.7],[288.0,53.7],[291.0,53.7],[294.0,53.7],[297.0,53.7],[315.0,53.7],[318.0,53.7],[57.0,50.3],[60.0,50.3],[63.0,50.3],[66.0,50.3],[69.0,50.3],[72.0,50.3],[75.0,50.3],[78.0,50.3],[81.0,50.3],[84.0,50.3],[87.0,50.3],[90.0,50.3],[93.0,50.3],[96.0,50.3],[99.0,50.3],[102.0,50.3],[174.0,50.3],[177.0,50.3],[195.0,50.3],[204.0,50.3],[210.0,50.3],[213.0,50.3],[216.0,50.3],[219.0,50.3],[222.0,50.3],[225.0,50.3],[228.0,50.3],[234.0,50.3],[237.0,50.3],[240.0,50.3],[243.0,50.3],[246.0,50.3],[249.0,50.3],[252.0,50.3],[255.0,50.3],[258.0,50.3],[261.0,50.3],[264.0,50.3],[267.0,50.3],[270.0,50.3],[273.0,50.3],[276.0,50.3],[279.0,50.3],[282.0,50.3],[285.0,50.3],[288.0,50.3],[291.0,50.3],[294.0,50.3],[297.0,50.3],[306.0,50.3],[57.0,47.0],[60.0,47.0],[63.0,47.0],[66.0,47.0],[69.0,47.0],[72.0,47.0],[75.0,47.0],[78.0,47.0],[81.0,47.0],[84.0,47.0],[87.0,47.0],[90.0,47.0],[93.0,47.0],[96.0,47.0],[99.0,47.0],[102.0,47.0],[105.0,47.0],[174.0,47.0],[177.0,47.0],[180.0,47.0],[189.0,47.0],[195.0,47.0],[201.0,47.0],[204.0,47.0],[207.0,47.0],[210.0,47.0],[213.0,47.0],[216.0,47.0],[219.0,47.0],[222.0,47.0],[225.0,47.0],[228.0,47.0],[237.0,47.0],[240.0,47.0],[243.0,47.0],[246.0,47.0],[249.0,47.0],[252.0,47.0],[255.0,47.0],[258.0,47.0],[261.0,47.0],[264.0,47.0],[267.0,47.0],[270.0,47.0],[273.0,47.0],[276.0,47.0],[279.0,47.0],[282.0,47.0],[285.0,47.0],[288.0,47.0],[291.0,47.0],[294.0,47.0],[297.0,47.0],[300.0,47.0],[303.0,47.0],[306.0,47.0],[309.0,47.0],[57.0,43.6],[60.0,43.6],[63.0,43.6],[66.0,43.6],[69.0,43.6],[72.0,43.6],[75.0,43.6],[78.0,43.6],[81.0,43.6],[84.0,43.6],[87.0,43.6],[90.0,43.6],[93.0,43.6],[96.0,43.6],[99.0,43.6],[102.0,43.6],[105.0,43.6],[108.0,43.6],[114.0,43.6],[180.0,43.6],[183.0,43.6],[186.0,43.6],[192.0,43.6],[198.0,43.6],[201.0,43.6],[204.0,43.6],[207.0,43.6],[222.0,43.6],[225.0,43.6],[231.0,43.6],[234.0,43.6],[237.0,43.6],[240.0,43.6],[243.0,43.6],[246.0,43.6],[249.0,43.6],[252.0,43.6],[255.0,43.6],[258.0,43.6],[261.0,43.6],[264.0,43.6],[267.0,43.6],[270.0,43.6],[273.0,43.6],[276.0,43.6],[279.0,43.6],[282.0,43.6],[285.0,43.6],[288.0,43.6],[291.0,43.6],[294.0,43.6],[297.0,43.6],[300.0,43.6],[303.0,43.6],[306.0,43.6],[309.0,43.6],[312.0,43.6],[315.0,43.6],[324.0,43.6],[57.0,40.3],[60.0,40.3],[63.0,40.3],[66.0,40.3],[69.0,40.3],[72.0,40.3],[75.0,40.3],[78.0,40.3],[81.0,40.3],[84.0,40.3],[87.0,40.3],[90.0,40.3],[93.0,40.3],[96.0,40.3],[99.0,40.3],[102.0,40.3],[105.0,40.3],[108.0,40.3],[111.0,40.3],[114.0,40.3],[126.0,40.3],[180.0,40.3],[183.0,40.3],[186.0,40.3],[189.0,40.3],[192.0,40.3],[195.0,40.3],[198.0,40.3],[201.0,40.3],[204.0,40.3],[207.0,40.3],[210.0,40.3],[213.0,40.3],[216.0,40.3],[222.0,40.3],[225.0,40.3],[228.0,40.3],[234.0,40.3],[237.0,40.3],[240.0,40.3],[243.0,40.3],[246.0,40.3],[249.0,40.3],[252.0,40.3],[255.0,40.3],[258.0,40.3],[261.0,40.3],[264.0,40.3],[267.0,40.3],[270.0,40.3],[273.0,40.3],[276.0,40.3],[279.0,40.3],[282.0,40.3],[285.0,40.3],[288.0,40.3],[291.0,40.3],[294.0,40.3],[297.0,40.3],[300.0,40.3],[303.0,40.3],[306.0,40.3],[309.0,40.3],[312.0,40.3],[315.0,40.3],[318.0,40.3],[54.0,36.9],[57.0,36.9],[60.0,36.9],[63.0,36.9],[66.0,36.9],[69.0,36.9],[72.0,36.9],[75.0,36.9],[78.0,36.9],[81.0,36.9],[84.0,36.9],[87.0,36.9],[90.0,36.9],[93.0,36.9],[96.0,36.9],[99.0,36.9],[102.0,36.9],[105.0,36.9],[108.0,36.9],[111.0,36.9],[123.0,36.9],[183.0,36.9],[186.0,36.9],[189.0,36.9],[192.0,36.9],[195.0,36.9],[198.0,36.9],[201.0,36.9],[204.0,36.9],[207.0,36.9],[210.0,36.9],[213.0,36.9],[216.0,36.9],[219.0,36.9],[222.0,36.9],[225.0,36.9],[228.0,36.9],[231.0,36.9],[234.0,36.9],[237.0,36.9],[240.0,36.9],[243.0,36.9],[246.0,36.9],[249.0,36.9],[252.0,36.9],[255.0,36.9],[258.0,36.9],[261.0,36.9],[264.0,36.9],[267.0,36.9],[270.0,36.9],[273.0,36.9],[276.0,36.9],[279.0,36.9],[282.0,36.9],[285.0,36.9],[288.0,36.9],[291.0,36.9],[294.0,36.9],[297.0,36.9],[300.0,36.9],[303.0,36.9],[306.0,36.9],[309.0,36.9],[312.0,36.9],[315.0,36.9],[318.0,36.9],[324.0,36.9],[48.0,33.6],[51.0,33.6],[54.0,33.6],[57.0,33.6],[60.0,33.6],[63.0,33.6],[66.0,33.6],[69.0,33.6],[72.0,33.6],[75.0,33.6],[78.0,33.6],[81.0,33.6],[84.0,33.6],[87.0,33.6],[90.0,33.6],[93.0,33.6],[96.0,33.6],[99.0,33.6],[102.0,33.6],[105.0,33.6],[108.0,33.6],[111.0,33.6],[114.0,33.6],[117.0,33.6],[120.0,33.6],[123.0,33.6],[171.0,33.6],[177.0,33.6],[180.0,33.6],[186.0,33.6],[189.0,33.6],[192.0,33.6],[195.0,33.6],[198.0,33.6],[201.0,33.6],[204.0,33.6],[207.0,33.6],[210.0,33.6],[213.0,33.6],[216.0,33.6],[219.0,33.6],[222.0,33.6],[225.0,33.6],[228.0,33.6],[231.0,33.6],[234.0,33.6],[237.0,33.6],[240.0,33.6],[243.0,33.6],[246.0,33.6],[249.0,33.6],[252.0,33.6],[255.0,33.6],[258.0,33.6],[261.0,33.6],[264.0,33.6],[267.0,33.6],[270.0,33.6],[273.0,33.6],[276.0,33.6],[279.0,33.6],[282.0,33.6],[285.0,33.6],[288.0,33.6],[291.0,33.6],[294.0,33.6],[297.0,33.6],[300.0,33.6],[303.0,33.6],[306.0,33.6],[309.0,33.6],[312.0,33.6],[315.0,33.6],[318.0,33.6],[21.0,30.2],[51.0,30.2],[54.0,30.2],[57.0,30.2],[60.0,30.2],[63.0,30.2],[66.0,30.2],[69.0,30.2],[72.0,30.2],[75.0,30.2],[78.0,30.2],[81.0,30.2],[84.0,30.2],[87.0,30.2],[90.0,30.2],[105.0,30.2],[108.0,30.2],[111.0,30.2],[114.0,30.2],[117.0,30.2],[189.0,30.2],[192.0,30.2],[204.0,30.2],[207.0,30.2],[210.0,30.2],[213.0,30.2],[216.0,30.2],[219.0,30.2],[222.0,30.2],[225.0,30.2],[228.0,30.2],[231.0,30.2],[234.0,30.2],[237.0,30.2],[240.0,30.2],[243.0,30.2],[246.0,30.2],[249.0,30.2],[252.0,30.2],[255.0,30.2],[258.0,30.2],[261.0,30.2],[264.0,30.2],[267.0,30.2],[270.0,30.2],[273.0,30.2],[276.0,30.2],[279.0,30.2],[282.0,30.2],[285.0,30.2],[288.0,30.2],[291.0,30.2],[294.0,30.2],[297.0,30.2],[300.0,30.2],[303.0,30.2],[306.0,30.2],[309.0,30.2],[312.0,30.2],[315.0,30.2],[336.0,30.2],[339.0,30.2],[342.0,30.2],[21.0,26.9],[24.0,26.9],[42.0,26.9],[45.0,26.9],[48.0,26.9],[51.0,26.9],[54.0,26.9],[57.0,26.9],[60.0,26.9],[63.0,26.9],[66.0,26.9],[69.0,26.9],[72.0,26.9],[75.0,26.9],[78.0,26.9],[81.0,26.9],[84.0,26.9],[102.0,26.9],[105.0,26.9],[108.0,26.9],[111.0,26.9],[177.0,26.9],[189.0,26.9],[192.0,26.9],[195.0,26.9],[204.0,26.9],[207.0,26.9],[210.0,26.9],[213.0,26.9],[216.0,26.9],[219.0,26.9],[222.0,26.9],[225.0,26.9],[228.0,26.9],[231.0,26.9],[234.0,26.9],[237.0,26.9],[240.0,26.9],[243.0,26.9],[246.0,26.9],[249.0,26.9],[252.0,26.9],[255.0,26.9],[258.0,26.9],[261.0,26.9],[264.0,26.9],[267.0,26.9],[270.0,26.9],[273.0,26.9],[276.0,26.9],[279.0,26.9],[282.0,26.9],[285.0,26.9],[288.0,26.9],[291.0,26.9],[294.0,26.9],[297.0,26.9],[300.0,26.9],[303.0,26.9],[306.0,26.9],[309.0,26.9],[312.0,26.9],[315.0,26.9],[318.0,26.9],[321.0,26.9],[342.0,26.9],[15.0,23.5],[18.0,23.5],[21.0,23.5],[24.0,23.5],[27.0,23.5],[30.0,23.5],[33.0,23.5],[36.0,23.5],[39.0,23.5],[42.0,23.5],[45.0,23.5],[48.0,23.5],[51.0,23.5],[54.0,23.5],[57.0,23.5],[60.0,23.5],[63.0,23.5],[66.0,23.5],[69.0,23.5],[72.0,23.5],[75.0,23.5],[78.0,23.5],[81.0,23.5],[84.0,23.5],[102.0,23.5],[105.0,23.5],[132.0,23.5],[135.0,23.5],[186.0,23.5],[189.0,23.5],[192.0,23.5],[195.0,23.5],[204.0,23.5],[207.0,23.5],[210.0,23.5],[213.0,23.5],[216.0,23.5],[219.0,23.5],[222.0,23.5],[225.0,23.5],[228.0,23.5],[231.0,23.5],[234.0,23.5],[237.0,23.5],[240.0,23.5],[243.0,23.5],[246.0,23.5],[249.0,23.5],[252.0,23.5],[255.0,23.5],[258.0,23.5],[261.0,23.5],[264.0,23.5],[267.0,23.5],[270.0,23.5],[273.0,23.5],[276.0,23.5],[279.0,23.5],[282.0,23.5],[285.0,23.5],[288.0,23.5],[291.0,23.5],[294.0,23.5],[297.0,23.5],[300.0,23.5],[303.0,23.5],[306.0,23.5],[309.0,23.5],[312.0,23.5],[315.0,23.5],[318.0,23.5],[321.0,23.5],[324.0,23.5],[327.0,23.5],[330.0,23.5],[333.0,23.5],[336.0,23.5],[339.0,23.5],[342.0,23.5],[345.0,23.5],[348.0,23.5],[351.0,23.5],[354.0,23.5],[6.0,20.1],[15.0,20.1],[18.0,20.1],[21.0,20.1],[24.0,20.1],[27.0,20.1],[30.0,20.1],[33.0,20.1],[36.0,20.1],[39.0,20.1],[42.0,20.1],[45.0,20.1],[48.0,20.1],[51.0,20.1],[54.0,20.1],[57.0,20.1],[60.0,20.1],[63.0,20.1],[66.0,20.1],[69.0,20.1],[72.0,20.1],[75.0,20.1],[78.0,20.1],[81.0,20.1],[84.0,20.1],[87.0,20.1],[90.0,20.1],[96.0,20.1],[102.0,20.1],[105.0,20.1],[108.0,20.1],[111.0,20.1],[129.0,20.1],[132.0,20.1],[135.0,20.1],[138.0,20.1],[159.0,20.1],[162.0,20.1],[165.0,20.1],[192.0,20.1],[195.0,20.1],[198.0,20.1],[201.0,20.1],[207.0,20.1],[210.0,20.1],[213.0,20.1],[222.0,20.1],[225.0,20.1],[228.0,20.1],[231.0,20.1],[234.0,20.1],[237.0,20.1],[240.0,20.1],[243.0,20.1],[246.0,20.1],[249.0,20.1],[252.0,20.1],[255.0,20.1],[258.0,20.1],[261.0,20.1],[264.0,20.1],[267.0,20.1],[270.0,20.1],[273.0,20.1],[276.0,20.1],[279.0,20.1],[282.0,20.1],[285.0,20.1],[288.0,20.1],[291.0,20.1],[294.0,20.1],[297.0,20.1],[300.0,20.1],[303.0,20.1],[306.0,20.1],[309.0,20.1],[312.0,20.1],[315.0,20.1],[318.0,20.1],[321.0,20.1],[324.0,20.1],[327.0,20.1],[330.0,20.1],[333.0,20.1],[336.0,20.1],[339.0,20.1],[342.0,20.1],[345.0,20.1],[348.0,20.1],[351.0,20.1],[354.0,20.1],[357.0,20.1],[3.0,16.8],[15.0,16.8],[18.0,16.8],[21.0,16.8],[24.0,16.8],[27.0,16.8],[30.0,16.8],[33.0,16.8],[36.0,16.8],[39.0,16.8],[42.0,16.8],[45.0,16.8],[48.0,16.8],[51.0,16.8],[54.0,16.8],[57.0,16.8],[60.0,16.8],[63.0,16.8],[75.0,16.8],[81.0,16.8],[87.0,16.8],[90.0,16.8],[96.0,16.8],[108.0,16.8],[111.0,16.8],[114.0,16.8],[129.0,16.8],[132.0,16.8],[135.0,16.8],[138.0,16.8],[141.0,16.8],[144.0,16.8],[147.0,16.8],[198.0,16.8],[201.0,16.8],[204.0,16.8],[207.0,16.8],[210.0,16.8],[213.0,16.8],[216.0,16.8],[219.0,16.8],[225.0,16.8],[231.0,16.8],[234.0,16.8],[237.0,16.8],[240.0,16.8],[243.0,16.8],[246.0,16.8],[249.0,16.8],[252.0,16.8],[255.0,16.8],[258.0,16.8],[261.0,16.8],[264.0,16.8],[267.0,16.8],[270.0,16.8],[273.0,16.8],[276.0,16.8],[279.0,16.8],[282.0,16.8],[285.0,16.8],[288.0,16.8],[291.0,16.8],[294.0,16.8],[297.0,16.8],[300.0,16.8],[303.0,16.8],[306.0,16.8],[309.0,16.8],[312.0,16.8],[315.0,16.8],[318.0,16.8],[321.0,16.8],[324.0,16.8],[327.0,16.8],[330.0,16.8],[333.0,16.8],[336.0,16.8],[339.0,16.8],[342.0,16.8],[345.0,16.8],[348.0,16.8],[351.0,16.8],[354.0,16.8],[357.0,16.8],[24.0,13.4],[63.0,13.4],[66.0,13.4],[69.0,13.4],[72.0,13.4],[75.0,13.4],[84.0,13.4],[87.0,13.4],[93.0,13.4],[96.0,13.4],[99.0,13.4],[102.0,13.4],[105.0,13.4],[108.0,13.4],[132.0,13.4],[135.0,13.4],[138.0,13.4],[141.0,13.4],[144.0,13.4],[147.0,13.4],[150.0,13.4],[153.0,13.4],[156.0,13.4],[204.0,13.4],[234.0,13.4],[249.0,13.4],[252.0,13.4],[255.0,13.4],[261.0,13.4],[264.0,13.4],[267.0,13.4],[270.0,13.4],[273.0,13.4],[276.0,13.4],[279.0,13.4],[282.0,13.4],[285.0,13.4],[288.0,13.4],[291.0,13.4],[294.0,13.4],[297.0,13.4],[300.0,13.4],[303.0,13.4],[306.0,13.4],[309.0,13.4],[312.0,13.4],[315.0,13.4],[318.0,13.4],[321.0,13.4],[324.0,13.4],[327.0,13.4],[330.0,13.4],[336.0,13.4],[57.0,10.1],[60.0,10.1],[63.0,10.1],[87.0,10.1],[126.0,10.1],[129.0,10.1],[132.0,10.1],[135.0,10.1],[138.0,10.1],[141.0,10.1],[144.0,10.1],[147.0,10.1],[150.0,10.1],[153.0,10.1],[156.0,10.1],[237.0,10.1],[264.0,10.1],[270.0,10.1],[273.0,10.1],[276.0,10.1],[279.0,10.1],[282.0,10.1],[285.0,10.1],[288.0,10.1],[321.0,10.1],[60.0,6.7],[63.0,6.7],[84.0,6.7],[93.0,6.7],[96.0,6.7],[99.0,6.7],[111.0,6.7],[114.0,6.7],[117.0,6.7],[120.0,6.7],[123.0,6.7],[126.0,6.7],[129.0,6.7],[132.0,6.7],[135.0,6.7],[138.0,6.7],[141.0,6.7],[144.0,6.7],[147.0,6.7],[150.0,6.7],[153.0,6.7],[156.0,6.7],[159.0,6.7],[276.0,6.7],[282.0,6.7],[285.0,6.7],[81.0,3.4],[84.0,3.4],[87.0,3.4],[90.0,3.4],[96.0,3.4],[99.0,3.4],[102.0,3.4],[105.0,3.4],[108.0,3.4],[117.0,3.4],[120.0,3.4],[123.0,3.4],[126.0,3.4],[129.0,3.4],[132.0,3.4],[135.0,3.4],[138.0,3.4],[141.0,3.4],[144.0,3.4],[147.0,3.4],[150.0,3.4],[153.0,3.4],[156.0,3.4],[159.0,3.4],[162.0,3.4],[201.0,3.4],[204.0,3.4],[207.0,3.4],[231.0,3.4],[276.0,3.4],[279.0,3.4]]");
var avatars = [
	avatar_1_webp_asset_default.url,
	avatar_2_webp_asset_default.url,
	avatar_3_webp_asset_default.url,
	avatar_4_webp_asset_default.url
];
var products = [
	{
		title: "Nexus Chain",
		description: "Ecosystem Growth",
		image: nexus_webp_asset_default.url,
		count: "+12"
	},
	{
		title: "DoraDAO",
		description: "Community Platform",
		image: dora_webp_asset_default.url,
		count: "+8"
	},
	{
		title: "Zoth",
		description: "Stablecoin Neobank",
		image: zoth_webp_asset_default.url,
		count: "+6"
	}
];
var articles = [
	{
		title: "Getting Started with Nexus Chain",
		description: "Tutorial · Blockchain",
		image: code_webp_asset_default.url,
		tags: ["Tutorial", "Blockchain"]
	},
	{
		title: "Building on Solana: A Developer Guide",
		description: "Guide · Web3",
		image: solana_webp_asset_default.url,
		tags: ["Guide", "Web3"]
	},
	{
		title: "Open Source Contributions",
		description: "Open Source · Tools",
		image: opensource_webp_asset_default.url,
		tags: ["Open Source", "Tools"]
	}
];
var regions = [
	{
		name: "North America",
		x: 75,
		y: 68,
		color: "america"
	},
	{
		name: "South America",
		x: 105,
		y: 111,
		color: "south"
	},
	{
		name: "Europe",
		x: 195,
		y: 53,
		color: "europe"
	},
	{
		name: "Asia",
		x: 306,
		y: 62,
		color: "asia"
	},
	{
		name: "Oceania",
		x: 349,
		y: 129,
		color: "oceania"
	}
];
var panels = [
	{
		id: "community",
		title: "Community",
		subtitle: "Events, Hackathons, Fellowships",
		items: [
			{
				icon: Users,
				title: "Organize & Host",
				sub: "Events & Meetups"
			},
			{
				icon: Users,
				title: "Build & Grow",
				sub: "Communities"
			},
			{
				icon: GraduationCap,
				title: "Fellowship Programs",
				sub: "Talents & Mentorship"
			}
		],
		tabs: [
			"Event",
			"Hackathon",
			"Fellowship",
			"Workshop"
		]
	},
	{
		id: "product",
		title: "Product",
		subtitle: "From idea to adoption",
		items: [
			{
				icon: Lightbulb,
				title: "Support Adoption",
				sub: "Feedback & Insights"
			},
			{
				icon: ChartNoAxesCombined,
				title: "Go-to-Market",
				sub: "Positioning & Growth"
			},
			{
				icon: Box,
				title: "Ecosystem Growth",
				sub: "Partnerships & Integrations"
			}
		],
		tabs: [
			"Strategy",
			"Partnerships",
			"Positioning",
			"Launch"
		]
	},
	{
		id: "engineering",
		title: "Engineering",
		subtitle: "Technical content & enablement",
		items: [
			{
				icon: FileText,
				title: "Write & Share",
				sub: "Technical Content"
			},
			{
				icon: CodeXml,
				title: "Simplify Complex Ideas",
				sub: "Guides, Tutorials, Threads"
			},
			{
				icon: Users,
				title: "Enable Builders",
				sub: "Docs, Workshops, Support"
			}
		],
		tabs: []
	},
	{
		id: "gtm",
		title: "GTM",
		subtitle: "Activating regions, communities\nand product growth",
		items: [
			{
				icon: Globe,
				title: "Market Expansion",
				sub: "Region Activation"
			},
			{
				icon: Megaphone,
				title: "Campaigns",
				sub: "Product & Community"
			},
			{
				icon: Share2,
				title: "Partnerships",
				sub: "Collaborations & Alliances"
			}
		],
		tabs: [
			"Region Activation",
			"Campaigns",
			"Partnerships",
			"Growth"
		]
	}
];
function Avatars({ count = "+5" }) {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "people",
		children: [avatars.map((url, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: url,
			alt: t(String(`Community member ${i + 1}`)),
			loading: "lazy",
			decoding: "async"
		}, url)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: count })]
	});
}
function ExpertiseGrid() {
	const { t } = useLanguage();
	const [detail, setDetail] = (0, import_react.useState)(null);
	const [hovered, setHovered] = (0, import_react.useState)(null);
	const move = (e) => {
		if (e.pointerType !== "mouse") return;
		const r = e.currentTarget.getBoundingClientRect();
		e.currentTarget.style.setProperty("--mouse-x", `${((e.clientX - r.left) / r.width - .5) * 14}px`);
		e.currentTarget.style.setProperty("--mouse-y", `${((e.clientY - r.top) / r.height - .5) * 12}px`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "expertise-page",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "expertise-grid",
			"data-active": hovered ?? "none",
			children: [panels.map((panel) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: `expertise-panel panel-${panel.id}`,
				"aria-label": t(String(panel.title)),
				onPointerEnter: () => setHovered(panel.id),
				onPointerDown: () => setHovered(panel.id),
				onFocusCapture: () => setHovered(panel.id),
				onBlurCapture: (e) => {
					if (!e.currentTarget.contains(e.relatedTarget)) setHovered(null);
				},
				onPointerMove: move,
				onPointerLeave: (e) => {
					setHovered(null);
					e.currentTarget.style.setProperty("--mouse-x", "0px");
					e.currentTarget.style.setProperty("--mouse-y", "0px");
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					panel,
					open: setDetail
				})
			}, panel.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid-intersection",
				"aria-hidden": "true"
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: detail !== null,
		onOpenChange: (open) => {
			if (!open) setDetail(null);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "expertise-dialog",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: t(String(detail?.title)) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: t(String(detail?.description)) }),
				detail?.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					className: "detail-image",
					src: detail.image,
					alt: t(String(detail.title)),
					decoding: "async"
				})
			]
		})
	})] });
}
function Panel({ panel, open }) {
	const { t } = useLanguage();
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [tab, setTab] = (0, import_react.useState)(0);
	const [nav, setNav] = (0, import_react.useState)(panel.id === "community" ? 0 : panel.id === "product" ? 2 : panel.id === "engineering" ? 3 : 0);
	const [region, setRegion] = (0, import_react.useState)(null);
	const navIcons = panel.id === "community" ? [
		CalendarDays,
		House,
		Users,
		CalendarDays,
		Globe,
		GraduationCap
	] : [
		panel.id === "product" ? Box : House,
		House,
		Users,
		FileText,
		panel.id === "engineering" ? CodeXml : Globe,
		Globe,
		GraduationCap
	];
	const defaultTitle = panel.id === "community" ? "Campus Hackathon" : panel.id === "product" ? "Product Initiatives" : panel.id === "engineering" ? "Technical Content" : "Global Activation";
	const displayTitle = selected === null ? defaultTitle : panel.id === "community" ? [
		"Campus Hackathon",
		"Community Meetups",
		"Fellowship Programs"
	][selected] : panel.items[selected]?.title ?? defaultTitle;
	const HeaderIcon = panel.id === "community" ? CalendarDays : panel.id === "product" ? ShipWheel : panel.id === "engineering" ? BookOpen : Globe;
	const shownProducts = tab === 1 ? [...products].reverse() : tab === 2 ? [
		products[1],
		products[0],
		products[2]
	] : products;
	const shownArticles = selected === 1 ? [
		articles[1],
		articles[0],
		articles[2]
	] : selected === 2 ? [
		articles[2],
		articles[1],
		articles[0]
	] : articles;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "panel-inner",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "panel-copy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: t(String(panel.title)) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "panel-subtitle",
					children: t(String(panel.subtitle))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "capability-list",
					children: panel.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						className: `capability ${selected === i ? "selected" : ""}`,
						"aria-pressed": selected === i,
						onClick: () => {
							setSelected(selected === i ? null : i);
							setTab(i);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t(String(item.title)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t(String(item.sub)) })] })]
					}, item.title))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "panel-visual",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "stipple",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "accent-strokes",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mini-app",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mini-sidebar",
						"aria-label": t(String(`${panel.title} tools`)),
						children: navIcons.map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: `sidebar-button ${nav === i ? "active" : ""}`,
							title: t(String([
								defaultTitle,
								"Overview",
								"Community",
								"Content",
								"Resources",
								"Global network",
								"Learning"
							][i])),
							"aria-label": t(String(`${panel.title}: ${[
								defaultTitle,
								"Overview",
								"Community",
								"Content",
								"Resources",
								"Global network",
								"Learning"
							][i]}`)),
							"aria-pressed": nav === i,
							onClick: () => {
								setNav(i);
								if (i !== 0) setSelected((i - 1) % 3);
								else setSelected(null);
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {})
						}, i))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mini-content",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mini-header",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderIcon, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t(String(displayTitle)) }),
									panel.id === "community" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "live-label",
										children: t("LIVE")
									}) : panel.id !== "product" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatars, { count: panel.id === "gtm" ? "+3" : "+5" }) : null
								]
							}),
							panel.id === "community" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "event-meta",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									t("Sharda University, Agra"),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									t("200+ participants")
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatars, { count: "+196" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								className: "event-image",
								"aria-label": t(String(`Open ${displayTitle}`)),
								onClick: () => open({
									title: displayTitle ?? defaultTitle,
									description: "Sharda University, Agra · 200+ participants",
									image: campus_webp_asset_default.url
								}),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: campus_webp_asset_default.url,
									alt: t("Build What's Next campus hackathon"),
									loading: "lazy",
									decoding: "async"
								})
							})] }),
							panel.id === "product" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "product-list",
								children: shownProducts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "ghost",
									className: "product-item",
									onClick: () => open(p),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.image,
										alt: t(String(p.title)),
										loading: "lazy",
										decoding: "async"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t(String(p.title)) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t(String(p.description)) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatars, { count: p.count })
									] })]
								}, p.title))
							}),
							panel.id === "engineering" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "article-list",
								children: shownArticles.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "ghost",
									className: "article-item",
									onClick: () => open(a),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: a.image,
										alt: "",
										loading: "lazy",
										decoding: "async"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t(String(a.title)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "article-tags",
										children: a.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t(tag) }, tag))
									})] })]
								}, a.title))
							}),
							panel.id === "gtm" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "world-map",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										viewBox: "0 0 390 165",
										"aria-label": t("Global activation map"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
											className: "map-land",
											children: map_dots_default.map(([x, y], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												cx: x,
												cy: y,
												r: ".75"
											}, i))
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
											className: "map-connections",
											children: regions.filter((r) => r.name !== "North America").map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M75,68 Q${(75 + r.x) / 2},${Math.min(68, r.y) - 55} ${r.x},${r.y}` }, r.name))
										})]
									}),
									regions.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "icon",
										variant: "ghost",
										className: `region-marker marker-${r.color} ${region === r.name ? "selected" : ""}`,
										style: {
											left: `${r.x / 390 * 100}%`,
											top: `${r.y / 165 * 100}%`
										},
										"aria-label": t(String(`Activate ${r.name}`)),
										"aria-pressed": region === r.name,
										title: t(String(r.name)),
										onClick: () => setRegion(region === r.name ? null : r.name),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
									}, r.name)),
									region && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "region-name",
										children: t(String(region))
									})
								]
							}),
							panel.tabs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mini-tabs",
								"aria-label": t(String(`${panel.title} view`)),
								children: panel.tabs.map((tabLabel, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									className: tab === i ? "active" : "",
									"aria-pressed": tab === i,
									onClick: () => {
										setTab(i);
										if (panel.id === "community") setSelected(i === 0 ? null : Math.min(i, 2));
										if (panel.id === "gtm") setRegion(i === 0 ? null : [
											"Europe",
											"Asia",
											"North America"
										][i - 1] ?? null);
									},
									children: t(tabLabel)
								}, tabLabel))
							}),
							panel.id !== "engineering" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `content-lines lines-${tab}`,
								"aria-hidden": "true",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})]
							})
						]
					})]
				})
			]
		})]
	});
}
var hela_logo_webp_asset_default = {
	version: 1,
	asset_id: "32c7fc26-3e72-446f-97e9-2deb8b52ac57",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/32c7fc26-3e72-446f-97e9-2deb8b52ac57/hela-logo.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/32c7fc26-3e72-446f-97e9-2deb8b52ac57/hela-logo.webp",
	original_filename: "hela-logo.webp",
	size: 1628,
	content_type: "image/webp",
	created_at: "2026-10-06T19:57:25Z"
};
var socrates_logo_webp_asset_default = {
	version: 1,
	asset_id: "ad1f598c-63e1-4a36-b0c0-f93b854ca662",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/ad1f598c-63e1-4a36-b0c0-f93b854ca662/socrates-logo.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/ad1f598c-63e1-4a36-b0c0-f93b854ca662/socrates-logo.webp",
	original_filename: "socrates-logo.webp",
	size: 1008,
	content_type: "image/webp",
	created_at: "2026-10-06T19:57:36Z"
};
var nexus_logo_webp_asset_default = {
	version: 1,
	asset_id: "91652a0a-f054-4881-9ee8-b9e8211eb127",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/91652a0a-f054-4881-9ee8-b9e8211eb127/nexus-logo.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/91652a0a-f054-4881-9ee8-b9e8211eb127/nexus-logo.webp",
	original_filename: "nexus-logo.webp",
	size: 1044,
	content_type: "image/webp",
	created_at: "2026-10-06T19:57:27Z"
};
var dora_logo_webp_asset_default = {
	version: 1,
	asset_id: "e9a2caa9-a2a7-4eb4-8b93-00d73a695aee",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/e9a2caa9-a2a7-4eb4-8b93-00d73a695aee/dora-logo.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/e9a2caa9-a2a7-4eb4-8b93-00d73a695aee/dora-logo.webp",
	original_filename: "dora-logo.webp",
	size: 1586,
	content_type: "image/webp",
	created_at: "2026-10-06T19:57:20Z"
};
var zoth_logo_webp_asset_default = {
	version: 1,
	asset_id: "a7a88708-a941-4caf-8356-2939baa92dc9",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/a7a88708-a941-4caf-8356-2939baa92dc9/zoth-logo.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/a7a88708-a941-4caf-8356-2939baa92dc9/zoth-logo.webp",
	original_filename: "zoth-logo.webp",
	size: 1136,
	content_type: "image/webp",
	created_at: "2026-10-06T19:57:47Z"
};
var specops_logo_webp_asset_default = {
	version: 1,
	asset_id: "17377932-4de6-4e36-a1e4-e97b06aac6cb",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/17377932-4de6-4e36-a1e4-e97b06aac6cb/specops-logo.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/17377932-4de6-4e36-a1e4-e97b06aac6cb/specops-logo.webp",
	original_filename: "specops-logo.webp",
	size: 1256,
	content_type: "image/webp",
	created_at: "2026-10-06T19:57:38Z"
};
var projects_logo_webp_asset_default = {
	version: 1,
	asset_id: "943cac04-9690-421a-b700-3da8da29b0d1",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/943cac04-9690-421a-b700-3da8da29b0d1/projects-logo.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/943cac04-9690-421a-b700-3da8da29b0d1/projects-logo.webp",
	original_filename: "projects-logo.webp",
	size: 842,
	content_type: "image/webp",
	created_at: "2026-10-06T19:57:33Z"
};
var stage_webp_asset_default = {
	version: 1,
	asset_id: "c5b2b2f8-ee43-4ea6-9751-9d0d76e20eb4",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/c5b2b2f8-ee43-4ea6-9751-9d0d76e20eb4/work-stage.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/c5b2b2f8-ee43-4ea6-9751-9d0d76e20eb4/work-stage.webp",
	original_filename: "work-stage.webp",
	size: 49244,
	content_type: "image/webp",
	created_at: "2026-10-07T09:10:42Z"
};
var builders_webp_asset_default = {
	version: 1,
	asset_id: "f634d7a6-08ee-4e31-a88c-1a29b3021094",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/f634d7a6-08ee-4e31-a88c-1a29b3021094/work-builders.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/f634d7a6-08ee-4e31-a88c-1a29b3021094/work-builders.webp",
	original_filename: "work-builders.webp",
	size: 5270,
	content_type: "image/webp",
	created_at: "2026-10-07T09:10:43Z"
};
var community_webp_asset_default = {
	version: 1,
	asset_id: "d60e1f3e-9986-4700-957a-510caee7d92c",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/d60e1f3e-9986-4700-957a-510caee7d92c/work-community.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/d60e1f3e-9986-4700-957a-510caee7d92c/work-community.webp",
	original_filename: "work-community.webp",
	size: 5370,
	content_type: "image/webp",
	created_at: "2026-10-07T09:10:45Z"
};
var workGallery = [
	{
		image: stage_webp_asset_default.url,
		title: "Build What’s Next",
		category: "Tech Talks"
	},
	{
		image: builders_webp_asset_default.url,
		title: "Campus Hackathon",
		category: "Hackathon"
	},
	{
		image: {
			version: 1,
			asset_id: "72c82a5d-937d-4bac-93e5-9e798652b16d",
			project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
			url: "/__l5e/assets-v1/72c82a5d-937d-4bac-93e5-9e798652b16d/work-booth.webp",
			r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/72c82a5d-937d-4bac-93e5-9e798652b16d/work-booth.webp",
			original_filename: "work-booth.webp",
			size: 2810,
			content_type: "image/webp",
			created_at: "2026-10-07T09:10:48Z"
		}.url,
		title: "HeLa Labs",
		category: "Community"
	},
	{
		image: {
			version: 1,
			asset_id: "cb2cbc96-3182-42b7-847f-96643c9e44a9",
			project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
			url: "/__l5e/assets-v1/cb2cbc96-3182-42b7-847f-96643c9e44a9/work-stage-wide.webp",
			r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/cb2cbc96-3182-42b7-847f-96643c9e44a9/work-stage-wide.webp",
			original_filename: "work-stage-wide.webp",
			size: 4984,
			content_type: "image/webp",
			created_at: "2026-10-07T09:10:51Z"
		}.url,
		title: "Build What’s Next — on stage",
		category: "Tech Talks"
	}
];
var workResponsibilities = [
	"Redesigned technical docs on GitBook and wrote the full developer wiki",
	"Built a community flywheel",
	"Structured the Developer Advocate program",
	"Ran 30+ workshops and talks reaching 10,000+ developers",
	"Built onboarding dashboards and playbooks that cut repetitive support",
	"Fed community insight back into the product roadmap"
];
var workTechnologies = [
	"GitBook",
	"Notion",
	"Discord",
	"Telegram",
	"Figma",
	"TypeScript",
	"React",
	"Next.js",
	"AWS",
	"Vercel"
];
var workCompanies = [
	{
		id: "hela",
		name: "HeLa Labs",
		role: "DevRel Lead",
		dates: "2025 – 2026",
		logo: hela_logo_webp_asset_default.url
	},
	{
		id: "socrates",
		name: "Socrates Global",
		role: "Head of Ecosystem",
		dates: "2024 – Present",
		logo: socrates_logo_webp_asset_default.url
	},
	{
		id: "nexus",
		name: "Nexus Chain",
		role: "Chief Ecosystem Officer",
		dates: "2024 – Present",
		logo: nexus_logo_webp_asset_default.url
	},
	{
		id: "dora",
		name: "DoraDAO",
		role: "Co-founder",
		dates: "2024 – Present",
		logo: dora_logo_webp_asset_default.url
	},
	{
		id: "zoth",
		name: "Zoth",
		role: "Community Builder",
		dates: "2024 – 2025",
		logo: zoth_logo_webp_asset_default.url
	},
	{
		id: "specops",
		name: "SpecOps / DDS",
		role: "Ops & Community",
		dates: "2024 – 2025",
		logo: specops_logo_webp_asset_default.url
	},
	{
		id: "projects",
		name: "Various Projects",
		role: "Contributor",
		dates: "2021 – Present",
		logo: projects_logo_webp_asset_default.url
	}
];
var companyMetrics = [
	...[
		{
			value: "500+",
			label: "Developers Engaged"
		},
		{
			value: "15+",
			label: "Events & Workshops"
		},
		{
			value: "20+",
			label: "Speakers & Mentors"
		},
		{
			value: "5+",
			label: "Projects & Hackathons"
		},
		{
			value: "500+",
			label: "Students Engaged"
		}
	],
	{
		value: "30+",
		label: "Workshops & Talks"
	},
	{
		value: "10,000+",
		label: "Developers Reached"
	}
];
var impactMetrics = [
	{
		value: "50+",
		label: "Communities Activated"
	},
	{
		value: "250K+",
		label: "Community Members"
	},
	{
		value: "1,200+",
		label: "Events & Programs"
	},
	{
		value: "80+",
		label: "Global Partners"
	},
	{
		value: "5K+",
		label: "Builders Supported"
	},
	{
		value: "50M+",
		label: "Total Impressions"
	},
	{
		value: "30+",
		label: "Cities Activated"
	},
	{
		value: "12+",
		label: "Countries Reached"
	},
	{
		value: "80+",
		label: "Workshops Hosted"
	},
	{
		value: "25+",
		label: "Products Launched"
	},
	{
		value: "150+",
		label: "Mentors Connected"
	},
	{
		value: "100+",
		label: "Campaigns Delivered"
	}
];
var workHighlights = [
	{
		title: "Build What’s Next",
		category: "Tech Talks",
		image: stage_webp_asset_default.url,
		detail: "A builder-focused technical series connecting developers with practical product knowledge, expert speakers, and opportunities to create.",
		tags: [
			"DevRel",
			"Developer Growth",
			"Events"
		]
	},
	{
		title: "Campus Hackathon",
		category: "Hackathon",
		image: builders_webp_asset_default.url,
		detail: "A hands-on campus program where students formed teams, worked with mentors, and turned early ideas into working projects.",
		tags: [
			"DevRel",
			"Ecosystem",
			"Developer Growth",
			"Events"
		]
	},
	{
		title: "GDG Core Team",
		category: "Community",
		image: community_webp_asset_default.url,
		detail: "Community leadership focused on bringing curious builders together through consistent programs, collaboration, and peer learning.",
		tags: ["Community", "Ecosystem"]
	}
];
function getWorkHighlights(tag) {
	return tag ? workHighlights.filter((item) => item.tags.includes(tag)) : workHighlights;
}
var work_tapestry_optimized_webp_asset_default = {
	version: 1,
	asset_id: "9dce8542-baa4-4b01-bd48-8ec769a5652f",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/9dce8542-baa4-4b01-bd48-8ec769a5652f/work-tapestry-optimized.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/9dce8542-baa4-4b01-bd48-8ec769a5652f/work-tapestry-optimized.webp",
	original_filename: "work-tapestry-optimized.webp",
	size: 221504,
	content_type: "image/webp",
	created_at: "2026-10-07T13:29:17Z"
};
var testimonial_avatar_webp_asset_default = {
	version: 1,
	asset_id: "eac7c7af-fbaf-493a-9418-9014c6ca88d0",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/eac7c7af-fbaf-493a-9418-9014c6ca88d0/testimonial-avatar.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/eac7c7af-fbaf-493a-9418-9014c6ca88d0/testimonial-avatar.webp",
	original_filename: "testimonial-avatar.webp",
	size: 800,
	content_type: "image/webp",
	created_at: "2026-10-06T19:57:45Z"
};
var testimonial = "GDG gave me a platform to turn my curiosity into real opportunities, and to bring an amazing community together on campus.";
var impactIcons = [
	Compass,
	Users,
	CalendarDays,
	Handshake,
	CodeXml,
	ChartNoAxesCombined
];
var technologyIcons = [
	BookOpen,
	FileText,
	MessageCircle,
	Send,
	Figma,
	CodeXml,
	Atom,
	CodeXml,
	Globe,
	Triangle
];
function WorkHistory() {
	const { t } = useLanguage();
	const [companyId, setCompanyId] = (0, import_react.useState)("hela");
	const [photoIndex, setPhotoIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const select = (event) => {
			const id = event.detail;
			if (typeof id === "string" && workCompanies.some((item) => item.id === id)) {
				setCompanyId(id);
				setPhotoIndex(0);
			}
		};
		window.addEventListener("museum-company-select", select);
		return () => window.removeEventListener("museum-company-select", select);
	}, []);
	const [detail, setDetail] = (0, import_react.useState)(null);
	const [glowingMetric, setGlowingMetric] = (0, import_react.useState)(null);
	const company = workCompanies.find((item) => item.id === companyId) ?? workCompanies[0];
	const photo = workGallery[photoIndex] ?? workGallery[0];
	const highlights = getWorkHighlights(null);
	const visibleHighlights = [...highlights, ...highlights.slice(0, 2)];
	const changePhoto = (direction) => setPhotoIndex((index) => (index + direction + workGallery.length) % workGallery.length);
	if (!photo) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "work-section",
		"aria-labelledby": "work-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "work-backdrop",
				src: work_tapestry_optimized_webp_asset_default.url,
				alt: "",
				loading: "lazy",
				decoding: "async"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "work-intro",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "work-eyebrow",
						children: [t("COMPANIES"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						id: "work-title",
						children: [t("Where I’ve "), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: t("Worked.") })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						t("A journey across teams, ecosystems and geographies —"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						t("building communities, products and opportunities.")
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "work-sheet",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "work-sidebar",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "work-companies",
						"aria-label": t("Companies"),
						children: workCompanies.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							id: `experience-${item.id}`,
							variant: "ghost",
							className: `work-company ${company.id === item.id ? "is-selected" : ""}`,
							"aria-pressed": company.id === item.id,
							onClick: () => {
								setCompanyId(item.id);
								setPhotoIndex(0);
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.logo,
									alt: "",
									width: 42,
									height: 42,
									loading: "lazy",
									decoding: "async"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "work-company-copy",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t(String(item.name)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t(String(item.role)) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "work-company-date",
									children: t(String(item.dates))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "work-company-arrow",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
								})
							]
						}, item.id))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "work-margin-note",
						children: [
							t("Different teams."),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							t("Same purpose."),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								viewBox: "0 0 65 50",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 43 Q44 48 57 7 M48 13 L57 7 L60 20" })
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "work-main",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "work-meta",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "work-benchmark",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("BENCHMARK") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
									dateTime: "2026-07-09",
									children: t("JULY 9, 2026")
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "work-tenure",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(String(company.dates)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {}), t("Global")] })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "work-feature",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "work-summary",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
										className: "work-company-heading",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: company.logo,
											alt: t(String(`${company.name} logo`)),
											loading: "lazy",
											width: 64,
											height: 64,
											decoding: "async"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "ghost",
											className: "work-name",
											onClick: () => setDetail({
												title: company.name,
												description: `${company.role} · ${company.dates} · Global`,
												image: company.logo
											}),
											children: [t(String(company.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
											t(String(company.role)),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
											t("Layer 1 Blockchain")
										] })] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "work-metrics",
										children: companyMetrics.map((metric) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "ghost",
											className: "work-metric",
											onClick: () => setDetail({
												title: `${metric.value} ${metric.label}`,
												description: `${company.name} · ${company.role} · ${company.dates}`
											}),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: metric.value }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(String(metric.label)) })]
										}, metric.label))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "work-description",
										children: t("A next-generation Layer-1 built for real-world adoption across Web2 and Web3: gaming, DeFi, DePIN and enterprise.")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "work-small-heading",
										children: t("WHAT I DID")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "work-achievements",
										children: workResponsibilities.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t(String(item)) }, item))
									})
								]
							}, company.id), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "work-gallery",
								"aria-label": t(String(`${company.name} memories`)),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "ghost",
									className: "work-gallery-main",
									"aria-label": t(String(`Enlarge ${photo.title} photo`)),
									onClick: () => setDetail({
										title: photo.title,
										description: `${company.name} · ${photo.category}`,
										image: photo.image
									}),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: photo.image,
										alt: t(String(`${photo.title} event`)),
										loading: "lazy",
										decoding: "async"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "work-expand",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, {})
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "work-gallery-controls",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "icon",
											className: "work-gallery-arrow",
											"aria-label": t("Previous photo"),
											title: t("Previous photo"),
											onClick: () => changePhoto(-1),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "work-gallery-thumbnails",
											children: workGallery.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "ghost",
												className: `work-gallery-thumbnail ${photoIndex === index ? "is-selected" : ""}`,
												"aria-label": t(String(`Show ${item.title} photo`)),
												"aria-pressed": photoIndex === index,
												onClick: () => setPhotoIndex(index),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: item.image,
													alt: t(String(item.title)),
													loading: "lazy",
													decoding: "async"
												})
											}, item.title))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "icon",
											className: "work-gallery-arrow",
											"aria-label": t("Next photo"),
											title: t("Next photo"),
											onClick: () => changePhoto(1),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
										})
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "work-highlights",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { fill: "currentColor" }), t("Highlights")] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "work-highlight-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "work-highlight-cards",
									children: visibleHighlights.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "ghost",
										className: "work-highlight",
										"aria-label": t(String(`Read details about ${item.title}`)),
										onClick: () => setDetail({
											title: item.title,
											description: `${item.detail} ${company.name} · ${item.category}.`,
											image: item.image
										}),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: item.image,
												alt: t(String(item.title)),
												loading: "lazy",
												decoding: "async"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "work-highlight-category",
												children: t(String(item.category))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "work-highlight-title",
												children: [t(String(item.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {}) })]
											})
										]
									}, `${item.title}-${index}`))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "ghost",
									className: "work-testimonial",
									"aria-label": t("Read Aarav S. testimonial"),
									onClick: () => setDetail({
										title: "Aarav S. — Core Team Member",
										description: testimonial
									}),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { fill: "currentColor" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(String(testimonial)) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: testimonial_avatar_webp_asset_default.url,
											alt: t("Aarav S."),
											width: 25,
											height: 25,
											loading: "lazy",
											decoding: "async"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t("Aarav S.") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t("Core Team Member") })] })] })
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "work-technologies",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "work-small-heading",
								children: t("TOOLS & TECHNOLOGIES")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: workTechnologies.map((name, index) => {
								const Icon = technologyIcons[index] ?? CodeXml;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "ghost",
									className: `work-technology work-technology-${index}`,
									onClick: () => setDetail({
										title: name,
										description: `${name} · Tools & technologies used across developer programs, community collaboration and product work at ${company.name}.`
									}),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(String(name)) })]
								}, name);
							}) })]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "work-impact",
				"aria-label": t("Overall impact"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "work-impact-track",
					children: [0, 1].map((copy) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "work-impact-group",
						"aria-hidden": copy === 1,
						children: impactMetrics.map((metric, i) => {
							const Icon = impactIcons[i % impactIcons.length] ?? Compass;
							const metricKey = `${metric.value}-${metric.label}`;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								tabIndex: copy === 1 ? -1 : 0,
								variant: "ghost",
								className: `work-impact-item ${glowingMetric === metricKey ? "is-glowing" : ""}`,
								onClick: () => setGlowingMetric(glowingMetric === metricKey ? null : metricKey),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: metric.value }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t(String(metric.label)) })] })]
							}, `${copy}-${metric.label}`);
						})
					}, copy))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: detail !== null,
				onOpenChange: (open) => {
					if (!open) setDetail(null);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "work-dialog",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: t(String(detail?.title)) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: t(String(detail?.description)) }),
						detail?.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "work-detail-photo",
							src: detail.image,
							alt: t(String(detail.title)),
							decoding: "async"
						})
					]
				})
			})
		]
	});
}
var region_north_america_photo_webp_asset_default = {
	version: 1,
	asset_id: "9297131a-d3c4-421f-9a3b-42f168adcc05",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/9297131a-d3c4-421f-9a3b-42f168adcc05/region-north-america-photo.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/9297131a-d3c4-421f-9a3b-42f168adcc05/region-north-america-photo.webp",
	original_filename: "region-north-america-photo.webp",
	size: 11758,
	content_type: "image/webp",
	created_at: "2026-10-07T09:44:14Z"
};
var region_europe_photo_webp_asset_default = {
	version: 1,
	asset_id: "329e6aa9-1509-482d-bcf0-b7e9a76cf1ac",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/329e6aa9-1509-482d-bcf0-b7e9a76cf1ac/region-europe-photo.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/329e6aa9-1509-482d-bcf0-b7e9a76cf1ac/region-europe-photo.webp",
	original_filename: "region-europe-photo.webp",
	size: 12352,
	content_type: "image/webp",
	created_at: "2026-10-07T09:44:19Z"
};
var region_asia_photo_webp_asset_default = {
	version: 1,
	asset_id: "6fa687df-f97a-4fcd-a001-bcd0af4904a5",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/6fa687df-f97a-4fcd-a001-bcd0af4904a5/region-asia-photo.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/6fa687df-f97a-4fcd-a001-bcd0af4904a5/region-asia-photo.webp",
	original_filename: "region-asia-photo.webp",
	size: 9154,
	content_type: "image/webp",
	created_at: "2026-10-07T09:44:23Z"
};
var region_africa_photo_webp_asset_default = {
	version: 1,
	asset_id: "bbfe1a32-b84b-431d-9ee8-7e9dff072a05",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/bbfe1a32-b84b-431d-9ee8-7e9dff072a05/region-africa-photo.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/bbfe1a32-b84b-431d-9ee8-7e9dff072a05/region-africa-photo.webp",
	original_filename: "region-africa-photo.webp",
	size: 15278,
	content_type: "image/webp",
	created_at: "2026-10-07T09:44:26Z"
};
var region_oceania_photo_webp_asset_default = {
	version: 1,
	asset_id: "b6f4bfdc-6822-4781-97ee-6cc7a90f2db7",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/b6f4bfdc-6822-4781-97ee-6cc7a90f2db7/region-oceania-photo.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/b6f4bfdc-6822-4781-97ee-6cc7a90f2db7/region-oceania-photo.webp",
	original_filename: "region-oceania-photo.webp",
	size: 8188,
	content_type: "image/webp",
	created_at: "2026-10-07T09:44:30Z"
};
var gtm_country_squares_default = /*#__PURE__*/ JSON.parse("[[0,-40,\"RU\",\"Russia\",null,95.24,81.17],[300,-40,\"CA\",\"Canada\",null,-88.25,81.17],[305,-40,\"CA\",\"Canada\",null,-85.31,81.17],[310,-40,\"CA\",\"Canada\",null,-82.37,81.17],[320,-40,\"CA\",\"Canada\",null,-76.48,81.17],[325,-40,\"CA\",\"Canada\",null,-73.54,81.17],[330,-40,\"CA\",\"Canada\",null,-70.6,81.17],[335,-40,\"CA\",\"Canada\",null,-67.66,81.17],[350,-40,\"GL\",\"Greenland\",null,-58.83,81.17],[355,-40,\"GL\",\"Greenland\",null,-55.89,81.17],[360,-40,\"GL\",\"Greenland\",null,-52.95,81.17],[365,-40,\"GL\",\"Greenland\",null,-50.01,81.17],[370,-40,\"GL\",\"Greenland\",null,-47.07,81.17],[375,-40,\"GL\",\"Greenland\",null,-44.13,81.17],[380,-40,\"GL\",\"Greenland\",null,-41.18,81.17],[385,-40,\"GL\",\"Greenland\",null,-38.24,81.17],[390,-40,\"GL\",\"Greenland\",null,-35.3,81.17],[395,-40,\"GL\",\"Greenland\",null,-32.36,81.17],[400,-40,\"GL\",\"Greenland\",null,-29.42,81.17],[405,-40,\"GL\",\"Greenland\",null,-26.48,81.17],[410,-40,\"GL\",\"Greenland\",null,-23.53,81.17],[415,-40,\"GL\",\"Greenland\",null,-20.59,81.17],[420,-40,\"GL\",\"Greenland\",null,-17.65,81.17],[425,-40,\"GL\",\"Greenland\",null,-14.71,81.17],[560,-40,\"RU\",\"Russia\",null,64.72,81.17],[605,-40,\"RU\",\"Russia\",null,91.19,81.17],[905,-40,\"CA\",\"Canada\",null,-92.3,81.17],[910,-40,\"CA\",\"Canada\",null,-89.36,81.17],[915,-40,\"CA\",\"Canada\",null,-86.42,81.17],[-5,-35,\"RU\",\"Russia\",null,100.55,78.77],[0,-35,\"RU\",\"Russia\",null,103.4,78.77],[270,-35,\"CA\",\"Canada\",null,-102.64,78.77],[290,-35,\"CA\",\"Canada\",null,-91.23,78.77],[295,-35,\"CA\",\"Canada\",null,-88.38,78.77],[300,-35,\"CA\",\"Canada\",null,-85.53,78.77],[305,-35,\"CA\",\"Canada\",null,-82.68,78.77],[310,-35,\"CA\",\"Canada\",null,-79.83,78.77],[315,-35,\"CA\",\"Canada\",null,-76.98,78.77],[330,-35,\"GL\",\"Greenland\",null,-68.43,78.77],[335,-35,\"GL\",\"Greenland\",null,-65.58,78.77],[340,-35,\"GL\",\"Greenland\",null,-62.72,78.77],[345,-35,\"GL\",\"Greenland\",null,-59.87,78.77],[350,-35,\"GL\",\"Greenland\",null,-57.02,78.77],[355,-35,\"GL\",\"Greenland\",null,-54.17,78.77],[360,-35,\"GL\",\"Greenland\",null,-51.32,78.77],[365,-35,\"GL\",\"Greenland\",null,-48.47,78.77],[370,-35,\"GL\",\"Greenland\",null,-45.62,78.77],[375,-35,\"GL\",\"Greenland\",null,-42.77,78.77],[380,-35,\"GL\",\"Greenland\",null,-39.92,78.77],[385,-35,\"GL\",\"Greenland\",null,-37.06,78.77],[390,-35,\"GL\",\"Greenland\",null,-34.21,78.77],[395,-35,\"GL\",\"Greenland\",null,-31.36,78.77],[400,-35,\"GL\",\"Greenland\",null,-28.51,78.77],[405,-35,\"GL\",\"Greenland\",null,-25.66,78.77],[410,-35,\"GL\",\"Greenland\",null,-22.81,78.77],[475,-35,\"-99\",\"Norway\",null,14.26,78.77],[480,-35,\"-99\",\"Norway\",null,17.11,78.77],[485,-35,\"-99\",\"Norway\",null,19.96,78.77],[630,-35,\"RU\",\"Russia\",null,102.64,78.77],[905,-35,\"CA\",\"Canada\",null,-100.55,78.77],[910,-35,\"CA\",\"Canada\",null,-97.7,78.77],[-10,-30,\"RU\",\"Russia\",null,104.45,76.52],[-5,-30,\"RU\",\"Russia\",null,107.23,76.52],[0,-30,\"RU\",\"Russia\",null,110.01,76.52],[235,-30,\"CA\",\"Canada\",null,-119.44,76.52],[270,-30,\"CA\",\"Canada\",null,-100.0,76.52],[280,-30,\"CA\",\"Canada\",null,-94.44,76.52],[285,-30,\"CA\",\"Canada\",null,-91.66,76.52],[290,-30,\"CA\",\"Canada\",null,-88.89,76.52],[295,-30,\"CA\",\"Canada\",null,-86.11,76.52],[300,-30,\"CA\",\"Canada\",null,-83.33,76.52],[305,-30,\"CA\",\"Canada\",null,-80.55,76.52],[330,-30,\"GL\",\"Greenland\",null,-66.66,76.52],[335,-30,\"GL\",\"Greenland\",null,-63.89,76.52],[340,-30,\"GL\",\"Greenland\",null,-61.11,76.52],[345,-30,\"GL\",\"Greenland\",null,-58.33,76.52],[350,-30,\"GL\",\"Greenland\",null,-55.55,76.52],[355,-30,\"GL\",\"Greenland\",null,-52.78,76.52],[360,-30,\"GL\",\"Greenland\",null,-50.0,76.52],[365,-30,\"GL\",\"Greenland\",null,-47.22,76.52],[370,-30,\"GL\",\"Greenland\",null,-44.44,76.52],[375,-30,\"GL\",\"Greenland\",null,-41.67,76.52],[380,-30,\"GL\",\"Greenland\",null,-38.89,76.52],[385,-30,\"GL\",\"Greenland\",null,-36.11,76.52],[390,-30,\"GL\",\"Greenland\",null,-33.33,76.52],[395,-30,\"GL\",\"Greenland\",null,-30.55,76.52],[400,-30,\"GL\",\"Greenland\",null,-27.78,76.52],[405,-30,\"GL\",\"Greenland\",null,-25.0,76.52],[410,-30,\"GL\",\"Greenland\",null,-22.22,76.52],[570,-30,\"RU\",\"Russia\",null,66.66,76.52],[635,-30,\"RU\",\"Russia\",null,102.77,76.52],[640,-30,\"RU\",\"Russia\",null,105.55,76.52],[645,-30,\"RU\",\"Russia\",null,108.33,76.52],[650,-30,\"RU\",\"Russia\",null,111.11,76.52],[880,-30,\"CA\",\"Canada\",null,-121.12,76.52],[910,-30,\"CA\",\"Canada\",null,-104.45,76.52],[-5,-25,\"RU\",\"Russia\",null,112.98,74.36],[225,-25,\"CA\",\"Canada\",null,-122.15,74.36],[350,-25,\"GL\",\"Greenland\",null,-54.29,74.36],[355,-25,\"GL\",\"Greenland\",null,-51.58,74.36],[360,-25,\"GL\",\"Greenland\",null,-48.86,74.36],[365,-25,\"GL\",\"Greenland\",null,-46.15,74.36],[370,-25,\"GL\",\"Greenland\",null,-43.43,74.36],[375,-25,\"GL\",\"Greenland\",null,-40.72,74.36],[380,-25,\"GL\",\"Greenland\",null,-38.0,74.36],[385,-25,\"GL\",\"Greenland\",null,-35.29,74.36],[390,-25,\"GL\",\"Greenland\",null,-32.57,74.36],[395,-25,\"GL\",\"Greenland\",null,-29.86,74.36],[400,-25,\"GL\",\"Greenland\",null,-27.15,74.36],[405,-25,\"GL\",\"Greenland\",null,-24.43,74.36],[410,-25,\"GL\",\"Greenland\",null,-21.72,74.36],[555,-25,\"RU\",\"Russia\",null,57.01,74.36],[610,-25,\"RU\",\"Russia\",null,86.87,74.36],[615,-25,\"RU\",\"Russia\",null,89.58,74.36],[620,-25,\"RU\",\"Russia\",null,92.29,74.36],[625,-25,\"RU\",\"Russia\",null,95.01,74.36],[630,-25,\"RU\",\"Russia\",null,97.72,74.36],[635,-25,\"RU\",\"Russia\",null,100.44,74.36],[640,-25,\"RU\",\"Russia\",null,103.15,74.36],[645,-25,\"RU\",\"Russia\",null,105.87,74.36],[650,-25,\"RU\",\"Russia\",null,108.58,74.36],[885,-25,\"CA\",\"Canada\",null,-123.84,74.36],[890,-25,\"CA\",\"Canada\",null,-121.12,74.36],[-10,-20,\"RU\",\"Russia\",null,115.44,72.27],[-5,-20,\"RU\",\"Russia\",null,118.1,72.27],[0,-20,\"RU\",\"Russia\",null,120.75,72.27],[5,-20,\"RU\",\"Russia\",null,123.41,72.27],[10,-20,\"RU\",\"Russia\",null,126.07,72.27],[15,-20,\"RU\",\"Russia\",null,128.73,72.27],[35,-20,\"RU\",\"Russia\",null,139.36,72.27],[40,-20,\"RU\",\"Russia\",null,142.02,72.27],[50,-20,\"RU\",\"Russia\",null,147.34,72.27],[215,-20,\"CA\",\"Canada\",null,-124.94,72.27],[220,-20,\"CA\",\"Canada\",null,-122.28,72.27],[230,-20,\"CA\",\"Canada\",null,-116.96,72.27],[235,-20,\"CA\",\"Canada\",null,-114.31,72.27],[240,-20,\"CA\",\"Canada\",null,-111.65,72.27],[245,-20,\"CA\",\"Canada\",null,-108.99,72.27],[250,-20,\"CA\",\"Canada\",null,-106.33,72.27],[260,-20,\"CA\",\"Canada\",null,-101.02,72.27],[265,-20,\"CA\",\"Canada\",null,-98.36,72.27],[285,-20,\"CA\",\"Canada\",null,-87.72,72.27],[295,-20,\"CA\",\"Canada\",null,-82.41,72.27],[300,-20,\"CA\",\"Canada\",null,-79.75,72.27],[305,-20,\"CA\",\"Canada\",null,-77.09,72.27],[350,-20,\"GL\",\"Greenland\",null,-53.17,72.27],[355,-20,\"GL\",\"Greenland\",null,-50.51,72.27],[360,-20,\"GL\",\"Greenland\",null,-47.85,72.27],[365,-20,\"GL\",\"Greenland\",null,-45.19,72.27],[370,-20,\"GL\",\"Greenland\",null,-42.53,72.27],[375,-20,\"GL\",\"Greenland\",null,-39.87,72.27],[380,-20,\"GL\",\"Greenland\",null,-37.22,72.27],[385,-20,\"GL\",\"Greenland\",null,-34.56,72.27],[390,-20,\"GL\",\"Greenland\",null,-31.9,72.27],[395,-20,\"GL\",\"Greenland\",null,-29.24,72.27],[400,-20,\"GL\",\"Greenland\",null,-26.58,72.27],[550,-20,\"RU\",\"Russia\",null,53.17,72.27],[580,-20,\"RU\",\"Russia\",null,69.12,72.27],[585,-20,\"RU\",\"Russia\",null,71.77,72.27],[600,-20,\"RU\",\"Russia\",null,79.75,72.27],[605,-20,\"RU\",\"Russia\",null,82.41,72.27],[610,-20,\"RU\",\"Russia\",null,85.07,72.27],[615,-20,\"RU\",\"Russia\",null,87.72,72.27],[620,-20,\"RU\",\"Russia\",null,90.38,72.27],[625,-20,\"RU\",\"Russia\",null,93.04,72.27],[630,-20,\"RU\",\"Russia\",null,95.7,72.27],[635,-20,\"RU\",\"Russia\",null,98.36,72.27],[640,-20,\"RU\",\"Russia\",null,101.02,72.27],[645,-20,\"RU\",\"Russia\",null,103.67,72.27],[650,-20,\"RU\",\"Russia\",null,106.33,72.27],[655,-20,\"RU\",\"Russia\",null,108.99,72.27],[660,-20,\"RU\",\"Russia\",null,111.65,72.27],[665,-20,\"RU\",\"Russia\",null,114.31,72.27],[670,-20,\"RU\",\"Russia\",null,116.96,72.27],[675,-20,\"RU\",\"Russia\",null,119.62,72.27],[680,-20,\"RU\",\"Russia\",null,122.28,72.27],[685,-20,\"RU\",\"Russia\",null,124.94,72.27],[690,-20,\"RU\",\"Russia\",null,127.6,72.27],[715,-20,\"RU\",\"Russia\",null,140.89,72.27],[720,-20,\"RU\",\"Russia\",null,143.55,72.27],[725,-20,\"RU\",\"Russia\",null,146.21,72.27],[895,-20,\"CA\",\"Canada\",null,-123.41,72.27],[900,-20,\"CA\",\"Canada\",null,-120.75,72.27],[905,-20,\"CA\",\"Canada\",null,-118.1,72.27],[910,-20,\"CA\",\"Canada\",null,-115.44,72.27],[915,-20,\"CA\",\"Canada\",null,-112.78,72.27],[-10,-15,\"RU\",\"Russia\",null,120.14,70.23],[-5,-15,\"RU\",\"Russia\",null,122.75,70.23],[0,-15,\"RU\",\"Russia\",null,125.36,70.23],[5,-15,\"RU\",\"Russia\",null,127.97,70.23],[10,-15,\"RU\",\"Russia\",null,130.57,70.23],[15,-15,\"RU\",\"Russia\",null,133.18,70.23],[20,-15,\"RU\",\"Russia\",null,135.79,70.23],[25,-15,\"RU\",\"Russia\",null,138.39,70.23],[30,-15,\"RU\",\"Russia\",null,141.0,70.23],[35,-15,\"RU\",\"Russia\",null,143.61,70.23],[40,-15,\"RU\",\"Russia\",null,146.22,70.23],[45,-15,\"RU\",\"Russia\",null,148.82,70.23],[50,-15,\"RU\",\"Russia\",null,151.43,70.23],[55,-15,\"RU\",\"Russia\",null,154.04,70.23],[60,-15,\"RU\",\"Russia\",null,156.64,70.23],[65,-15,\"RU\",\"Russia\",null,159.25,70.23],[140,-15,\"US\",\"United States of America\",null,-161.64,70.23],[145,-15,\"US\",\"United States of America\",null,-159.03,70.23],[150,-15,\"US\",\"United States of America\",null,-156.43,70.23],[155,-15,\"US\",\"United States of America\",null,-153.82,70.23],[160,-15,\"US\",\"United States of America\",null,-151.21,70.23],[165,-15,\"US\",\"United States of America\",null,-148.61,70.23],[230,-15,\"CA\",\"Canada\",null,-114.71,70.23],[235,-15,\"CA\",\"Canada\",null,-112.11,70.23],[240,-15,\"CA\",\"Canada\",null,-109.5,70.23],[245,-15,\"CA\",\"Canada\",null,-106.89,70.23],[250,-15,\"CA\",\"Canada\",null,-104.28,70.23],[255,-15,\"CA\",\"Canada\",null,-101.68,70.23],[265,-15,\"CA\",\"Canada\",null,-96.46,70.23],[270,-15,\"CA\",\"Canada\",null,-93.86,70.23],[285,-15,\"CA\",\"Canada\",null,-86.04,70.23],[290,-15,\"CA\",\"Canada\",null,-83.43,70.23],[295,-15,\"CA\",\"Canada\",null,-80.82,70.23],[300,-15,\"CA\",\"Canada\",null,-78.21,70.23],[305,-15,\"CA\",\"Canada\",null,-75.61,70.23],[310,-15,\"CA\",\"Canada\",null,-73.0,70.23],[315,-15,\"CA\",\"Canada\",null,-70.39,70.23],[320,-15,\"CA\",\"Canada\",null,-67.79,70.23],[345,-15,\"GL\",\"Greenland\",null,-54.75,70.23],[350,-15,\"GL\",\"Greenland\",null,-52.14,70.23],[355,-15,\"GL\",\"Greenland\",null,-49.54,70.23],[360,-15,\"GL\",\"Greenland\",null,-46.93,70.23],[365,-15,\"GL\",\"Greenland\",null,-44.32,70.23],[370,-15,\"GL\",\"Greenland\",null,-41.71,70.23],[375,-15,\"GL\",\"Greenland\",null,-39.11,70.23],[380,-15,\"GL\",\"Greenland\",null,-36.5,70.23],[385,-15,\"GL\",\"Greenland\",null,-33.89,70.23],[390,-15,\"GL\",\"Greenland\",null,-31.29,70.23],[395,-15,\"GL\",\"Greenland\",null,-28.68,70.23],[400,-15,\"GL\",\"Greenland\",null,-26.07,70.23],[495,-15,\"-99\",\"Norway\",null,23.46,70.23],[500,-15,\"-99\",\"Norway\",null,26.07,70.23],[505,-15,\"-99\",\"Norway\",null,28.68,70.23],[580,-15,\"RU\",\"Russia\",null,67.79,70.23],[585,-15,\"RU\",\"Russia\",null,70.39,70.23],[595,-15,\"RU\",\"Russia\",null,75.61,70.23],[600,-15,\"RU\",\"Russia\",null,78.21,70.23],[605,-15,\"RU\",\"Russia\",null,80.82,70.23],[610,-15,\"RU\",\"Russia\",null,83.43,70.23],[615,-15,\"RU\",\"Russia\",null,86.04,70.23],[620,-15,\"RU\",\"Russia\",null,88.64,70.23],[625,-15,\"RU\",\"Russia\",null,91.25,70.23],[630,-15,\"RU\",\"Russia\",null,93.86,70.23],[635,-15,\"RU\",\"Russia\",null,96.46,70.23],[640,-15,\"RU\",\"Russia\",null,99.07,70.23],[645,-15,\"RU\",\"Russia\",null,101.68,70.23],[650,-15,\"RU\",\"Russia\",null,104.28,70.23],[655,-15,\"RU\",\"Russia\",null,106.89,70.23],[660,-15,\"RU\",\"Russia\",null,109.5,70.23],[665,-15,\"RU\",\"Russia\",null,112.11,70.23],[670,-15,\"RU\",\"Russia\",null,114.71,70.23],[675,-15,\"RU\",\"Russia\",null,117.32,70.23],[680,-15,\"RU\",\"Russia\",null,119.93,70.23],[685,-15,\"RU\",\"Russia\",null,122.53,70.23],[690,-15,\"RU\",\"Russia\",null,125.14,70.23],[695,-15,\"RU\",\"Russia\",null,127.75,70.23],[700,-15,\"RU\",\"Russia\",null,130.36,70.23],[705,-15,\"RU\",\"Russia\",null,132.96,70.23],[710,-15,\"RU\",\"Russia\",null,135.57,70.23],[715,-15,\"RU\",\"Russia\",null,138.18,70.23],[720,-15,\"RU\",\"Russia\",null,140.78,70.23],[725,-15,\"RU\",\"Russia\",null,143.39,70.23],[730,-15,\"RU\",\"Russia\",null,146.0,70.23],[735,-15,\"RU\",\"Russia\",null,148.61,70.23],[740,-15,\"RU\",\"Russia\",null,151.21,70.23],[745,-15,\"RU\",\"Russia\",null,153.82,70.23],[750,-15,\"RU\",\"Russia\",null,156.43,70.23],[755,-15,\"RU\",\"Russia\",null,159.03,70.23],[830,-15,\"US\",\"United States of America\",null,-161.86,70.23],[835,-15,\"US\",\"United States of America\",null,-159.25,70.23],[840,-15,\"US\",\"United States of America\",null,-156.64,70.23],[845,-15,\"US\",\"United States of America\",null,-154.04,70.23],[850,-15,\"US\",\"United States of America\",null,-151.43,70.23],[855,-15,\"US\",\"United States of America\",null,-148.82,70.23],[-10,-10,\"RU\",\"Russia\",null,124.48,68.24],[-5,-10,\"RU\",\"Russia\",null,127.04,68.24],[0,-10,\"RU\",\"Russia\",null,129.6,68.24],[5,-10,\"RU\",\"Russia\",null,132.16,68.24],[10,-10,\"RU\",\"Russia\",null,134.72,68.24],[15,-10,\"RU\",\"Russia\",null,137.28,68.24],[20,-10,\"RU\",\"Russia\",null,139.84,68.24],[25,-10,\"RU\",\"Russia\",null,142.4,68.24],[30,-10,\"RU\",\"Russia\",null,144.96,68.24],[35,-10,\"RU\",\"Russia\",null,147.52,68.24],[40,-10,\"RU\",\"Russia\",null,150.08,68.24],[45,-10,\"RU\",\"Russia\",null,152.64,68.24],[50,-10,\"RU\",\"Russia\",null,155.2,68.24],[55,-10,\"RU\",\"Russia\",null,157.76,68.24],[60,-10,\"RU\",\"Russia\",null,160.32,68.24],[65,-10,\"RU\",\"Russia\",null,162.88,68.24],[70,-10,\"RU\",\"Russia\",null,165.44,68.24],[75,-10,\"RU\",\"Russia\",null,168.0,68.24],[80,-10,\"RU\",\"Russia\",null,170.56,68.24],[85,-10,\"RU\",\"Russia\",null,173.12,68.24],[90,-10,\"RU\",\"Russia\",null,175.68,68.24],[95,-10,\"RU\",\"Russia\",null,178.24,68.24],[100,-10,\"RU\",\"Russia\",null,-179.2,68.24],[130,-10,\"US\",\"United States of America\",null,-163.84,68.24],[135,-10,\"US\",\"United States of America\",null,-161.28,68.24],[140,-10,\"US\",\"United States of America\",null,-158.72,68.24],[145,-10,\"US\",\"United States of America\",null,-156.16,68.24],[150,-10,\"US\",\"United States of America\",null,-153.6,68.24],[155,-10,\"US\",\"United States of America\",null,-151.04,68.24],[160,-10,\"US\",\"United States of America\",null,-148.48,68.24],[165,-10,\"US\",\"United States of America\",null,-145.92,68.24],[170,-10,\"US\",\"United States of America\",null,-143.36,68.24],[175,-10,\"CA\",\"Canada\",null,-140.8,68.24],[180,-10,\"CA\",\"Canada\",null,-138.24,68.24],[185,-10,\"CA\",\"Canada\",null,-135.68,68.24],[190,-10,\"CA\",\"Canada\",null,-133.12,68.24],[195,-10,\"CA\",\"Canada\",null,-130.56,68.24],[200,-10,\"CA\",\"Canada\",null,-128.0,68.24],[205,-10,\"CA\",\"Canada\",null,-125.44,68.24],[210,-10,\"CA\",\"Canada\",null,-122.88,68.24],[215,-10,\"CA\",\"Canada\",null,-120.32,68.24],[220,-10,\"CA\",\"Canada\",null,-117.76,68.24],[225,-10,\"CA\",\"Canada\",null,-115.2,68.24],[245,-10,\"CA\",\"Canada\",null,-104.96,68.24],[260,-10,\"CA\",\"Canada\",null,-97.28,68.24],[270,-10,\"CA\",\"Canada\",null,-92.16,68.24],[275,-10,\"CA\",\"Canada\",null,-89.6,68.24],[285,-10,\"CA\",\"Canada\",null,-84.48,68.24],[310,-10,\"CA\",\"Canada\",null,-71.68,68.24],[315,-10,\"CA\",\"Canada\",null,-69.12,68.24],[355,-10,\"GL\",\"Greenland\",null,-48.64,68.24],[360,-10,\"GL\",\"Greenland\",null,-46.08,68.24],[365,-10,\"GL\",\"Greenland\",null,-43.52,68.24],[370,-10,\"GL\",\"Greenland\",null,-40.96,68.24],[375,-10,\"GL\",\"Greenland\",null,-38.4,68.24],[380,-10,\"GL\",\"Greenland\",null,-35.84,68.24],[385,-10,\"GL\",\"Greenland\",null,-33.28,68.24],[485,-10,\"-99\",\"Norway\",null,17.92,68.24],[490,-10,\"SE\",\"Sweden\",null,20.48,68.24],[495,-10,\"SE\",\"Sweden\",null,23.04,68.24],[500,-10,\"FI\",\"Finland\",null,25.6,68.24],[505,-10,\"FI\",\"Finland\",null,28.16,68.24],[510,-10,\"RU\",\"Russia\",null,30.72,68.24],[515,-10,\"RU\",\"Russia\",null,33.28,68.24],[520,-10,\"RU\",\"Russia\",null,35.84,68.24],[525,-10,\"RU\",\"Russia\",null,38.4,68.24],[540,-10,\"RU\",\"Russia\",null,46.08,68.24],[550,-10,\"RU\",\"Russia\",null,51.2,68.24],[555,-10,\"RU\",\"Russia\",null,53.76,68.24],[560,-10,\"RU\",\"Russia\",null,56.32,68.24],[565,-10,\"RU\",\"Russia\",null,58.88,68.24],[570,-10,\"RU\",\"Russia\",null,61.44,68.24],[575,-10,\"RU\",\"Russia\",null,64.0,68.24],[580,-10,\"RU\",\"Russia\",null,66.56,68.24],[585,-10,\"RU\",\"Russia\",null,69.12,68.24],[590,-10,\"RU\",\"Russia\",null,71.68,68.24],[600,-10,\"RU\",\"Russia\",null,76.8,68.24],[605,-10,\"RU\",\"Russia\",null,79.36,68.24],[610,-10,\"RU\",\"Russia\",null,81.92,68.24],[615,-10,\"RU\",\"Russia\",null,84.48,68.24],[620,-10,\"RU\",\"Russia\",null,87.04,68.24],[625,-10,\"RU\",\"Russia\",null,89.6,68.24],[630,-10,\"RU\",\"Russia\",null,92.16,68.24],[635,-10,\"RU\",\"Russia\",null,94.72,68.24],[640,-10,\"RU\",\"Russia\",null,97.28,68.24],[645,-10,\"RU\",\"Russia\",null,99.84,68.24],[650,-10,\"RU\",\"Russia\",null,102.4,68.24],[655,-10,\"RU\",\"Russia\",null,104.96,68.24],[660,-10,\"RU\",\"Russia\",null,107.52,68.24],[665,-10,\"RU\",\"Russia\",null,110.08,68.24],[670,-10,\"RU\",\"Russia\",null,112.64,68.24],[675,-10,\"RU\",\"Russia\",null,115.2,68.24],[680,-10,\"RU\",\"Russia\",null,117.76,68.24],[685,-10,\"RU\",\"Russia\",null,120.32,68.24],[690,-10,\"RU\",\"Russia\",null,122.88,68.24],[695,-10,\"RU\",\"Russia\",null,125.44,68.24],[700,-10,\"RU\",\"Russia\",null,128.0,68.24],[705,-10,\"RU\",\"Russia\",null,130.56,68.24],[710,-10,\"RU\",\"Russia\",null,133.12,68.24],[715,-10,\"RU\",\"Russia\",null,135.68,68.24],[720,-10,\"RU\",\"Russia\",null,138.24,68.24],[725,-10,\"RU\",\"Russia\",null,140.8,68.24],[730,-10,\"RU\",\"Russia\",null,143.36,68.24],[735,-10,\"RU\",\"Russia\",null,145.92,68.24],[740,-10,\"RU\",\"Russia\",null,148.48,68.24],[745,-10,\"RU\",\"Russia\",null,151.04,68.24],[750,-10,\"RU\",\"Russia\",null,153.6,68.24],[755,-10,\"RU\",\"Russia\",null,156.16,68.24],[760,-10,\"RU\",\"Russia\",null,158.72,68.24],[765,-10,\"RU\",\"Russia\",null,161.28,68.24],[770,-10,\"RU\",\"Russia\",null,163.84,68.24],[775,-10,\"RU\",\"Russia\",null,166.4,68.24],[780,-10,\"RU\",\"Russia\",null,168.96,68.24],[785,-10,\"RU\",\"Russia\",null,171.52,68.24],[790,-10,\"RU\",\"Russia\",null,174.08,68.24],[795,-10,\"RU\",\"Russia\",null,176.64,68.24],[800,-10,\"RU\",\"Russia\",null,179.2,68.24],[805,-10,\"RU\",\"Russia\",null,-178.24,68.24],[830,-10,\"US\",\"United States of America\",null,-165.44,68.24],[835,-10,\"US\",\"United States of America\",null,-162.88,68.24],[840,-10,\"US\",\"United States of America\",null,-160.32,68.24],[845,-10,\"US\",\"United States of America\",null,-157.76,68.24],[850,-10,\"US\",\"United States of America\",null,-155.2,68.24],[855,-10,\"US\",\"United States of America\",null,-152.64,68.24],[860,-10,\"US\",\"United States of America\",null,-150.08,68.24],[865,-10,\"US\",\"United States of America\",null,-147.52,68.24],[870,-10,\"US\",\"United States of America\",null,-144.96,68.24],[875,-10,\"US\",\"United States of America\",null,-142.4,68.24],[880,-10,\"CA\",\"Canada\",null,-139.84,68.24],[885,-10,\"CA\",\"Canada\",null,-137.28,68.24],[890,-10,\"CA\",\"Canada\",null,-134.72,68.24],[895,-10,\"CA\",\"Canada\",null,-132.16,68.24],[900,-10,\"CA\",\"Canada\",null,-129.6,68.24],[905,-10,\"CA\",\"Canada\",null,-127.04,68.24],[910,-10,\"CA\",\"Canada\",null,-124.48,68.24],[915,-10,\"CA\",\"Canada\",null,-121.92,68.24],[-10,-5,\"RU\",\"Russia\",null,128.51,66.27],[-5,-5,\"RU\",\"Russia\",null,131.02,66.27],[0,-5,\"RU\",\"Russia\",null,133.54,66.27],[5,-5,\"RU\",\"Russia\",null,136.06,66.27],[10,-5,\"RU\",\"Russia\",null,138.57,66.27],[15,-5,\"RU\",\"Russia\",null,141.09,66.27],[20,-5,\"RU\",\"Russia\",null,143.6,66.27],[25,-5,\"RU\",\"Russia\",null,146.12,66.27],[30,-5,\"RU\",\"Russia\",null,148.64,66.27],[35,-5,\"RU\",\"Russia\",null,151.15,66.27],[40,-5,\"RU\",\"Russia\",null,153.67,66.27],[45,-5,\"RU\",\"Russia\",null,156.19,66.27],[50,-5,\"RU\",\"Russia\",null,158.7,66.27],[55,-5,\"RU\",\"Russia\",null,161.22,66.27],[60,-5,\"RU\",\"Russia\",null,163.73,66.27],[65,-5,\"RU\",\"Russia\",null,166.25,66.27],[70,-5,\"RU\",\"Russia\",null,168.77,66.27],[75,-5,\"RU\",\"Russia\",null,171.28,66.27],[80,-5,\"RU\",\"Russia\",null,173.8,66.27],[85,-5,\"RU\",\"Russia\",null,176.32,66.27],[90,-5,\"RU\",\"Russia\",null,178.83,66.27],[95,-5,\"RU\",\"Russia\",null,-178.65,66.27],[100,-5,\"RU\",\"Russia\",null,-176.14,66.27],[105,-5,\"RU\",\"Russia\",null,-173.62,66.27],[110,-5,\"RU\",\"Russia\",null,-171.1,66.27],[135,-5,\"US\",\"United States of America\",null,-158.52,66.27],[140,-5,\"US\",\"United States of America\",null,-156.01,66.27],[145,-5,\"US\",\"United States of America\",null,-153.49,66.27],[150,-5,\"US\",\"United States of America\",null,-150.97,66.27],[155,-5,\"US\",\"United States of America\",null,-148.46,66.27],[160,-5,\"US\",\"United States of America\",null,-145.94,66.27],[165,-5,\"US\",\"United States of America\",null,-143.43,66.27],[170,-5,\"CA\",\"Canada\",null,-140.91,66.27],[175,-5,\"CA\",\"Canada\",null,-138.39,66.27],[180,-5,\"CA\",\"Canada\",null,-135.88,66.27],[185,-5,\"CA\",\"Canada\",null,-133.36,66.27],[190,-5,\"CA\",\"Canada\",null,-130.84,66.27],[195,-5,\"CA\",\"Canada\",null,-128.33,66.27],[200,-5,\"CA\",\"Canada\",null,-125.81,66.27],[205,-5,\"CA\",\"Canada\",null,-123.3,66.27],[210,-5,\"CA\",\"Canada\",null,-120.78,66.27],[215,-5,\"CA\",\"Canada\",null,-118.26,66.27],[220,-5,\"CA\",\"Canada\",null,-115.75,66.27],[225,-5,\"CA\",\"Canada\",null,-113.23,66.27],[230,-5,\"CA\",\"Canada\",null,-110.71,66.27],[235,-5,\"CA\",\"Canada\",null,-108.2,66.27],[240,-5,\"CA\",\"Canada\",null,-105.68,66.27],[245,-5,\"CA\",\"Canada\",null,-103.17,66.27],[250,-5,\"CA\",\"Canada\",null,-100.65,66.27],[255,-5,\"CA\",\"Canada\",null,-98.13,66.27],[260,-5,\"CA\",\"Canada\",null,-95.62,66.27],[265,-5,\"CA\",\"Canada\",null,-93.1,66.27],[270,-5,\"CA\",\"Canada\",null,-90.58,66.27],[275,-5,\"CA\",\"Canada\",null,-88.07,66.27],[305,-5,\"CA\",\"Canada\",null,-72.97,66.27],[310,-5,\"CA\",\"Canada\",null,-70.45,66.27],[315,-5,\"CA\",\"Canada\",null,-67.94,66.27],[320,-5,\"CA\",\"Canada\",null,-65.42,66.27],[325,-5,\"CA\",\"Canada\",null,-62.91,66.27],[350,-5,\"GL\",\"Greenland\",null,-50.32,66.27],[355,-5,\"GL\",\"Greenland\",null,-47.81,66.27],[360,-5,\"GL\",\"Greenland\",null,-45.29,66.27],[365,-5,\"GL\",\"Greenland\",null,-42.78,66.27],[370,-5,\"GL\",\"Greenland\",null,-40.26,66.27],[375,-5,\"GL\",\"Greenland\",null,-37.74,66.27],[380,-5,\"GL\",\"Greenland\",null,-35.23,66.27],[420,-5,\"IS\",\"Iceland\",null,-15.1,66.27],[480,-5,\"-99\",\"Norway\",null,15.1,66.27],[485,-5,\"SE\",\"Sweden\",null,17.61,66.27],[490,-5,\"SE\",\"Sweden\",null,20.13,66.27],[495,-5,\"SE\",\"Sweden\",null,22.65,66.27],[500,-5,\"FI\",\"Finland\",null,25.16,66.27],[505,-5,\"FI\",\"Finland\",null,27.68,66.27],[510,-5,\"RU\",\"Russia\",null,30.19,66.27],[515,-5,\"RU\",\"Russia\",null,32.71,66.27],[525,-5,\"RU\",\"Russia\",null,37.74,66.27],[535,-5,\"RU\",\"Russia\",null,42.78,66.27],[540,-5,\"RU\",\"Russia\",null,45.29,66.27],[545,-5,\"RU\",\"Russia\",null,47.81,66.27],[550,-5,\"RU\",\"Russia\",null,50.32,66.27],[555,-5,\"RU\",\"Russia\",null,52.84,66.27],[560,-5,\"RU\",\"Russia\",null,55.36,66.27],[565,-5,\"RU\",\"Russia\",null,57.87,66.27],[570,-5,\"RU\",\"Russia\",null,60.39,66.27],[575,-5,\"RU\",\"Russia\",null,62.91,66.27],[580,-5,\"RU\",\"Russia\",null,65.42,66.27],[585,-5,\"RU\",\"Russia\",null,67.94,66.27],[590,-5,\"RU\",\"Russia\",null,70.45,66.27],[595,-5,\"RU\",\"Russia\",null,72.97,66.27],[600,-5,\"RU\",\"Russia\",null,75.49,66.27],[605,-5,\"RU\",\"Russia\",null,78.0,66.27],[610,-5,\"RU\",\"Russia\",null,80.52,66.27],[615,-5,\"RU\",\"Russia\",null,83.04,66.27],[620,-5,\"RU\",\"Russia\",null,85.55,66.27],[625,-5,\"RU\",\"Russia\",null,88.07,66.27],[630,-5,\"RU\",\"Russia\",null,90.58,66.27],[635,-5,\"RU\",\"Russia\",null,93.1,66.27],[640,-5,\"RU\",\"Russia\",null,95.62,66.27],[645,-5,\"RU\",\"Russia\",null,98.13,66.27],[650,-5,\"RU\",\"Russia\",null,100.65,66.27],[655,-5,\"RU\",\"Russia\",null,103.17,66.27],[660,-5,\"RU\",\"Russia\",null,105.68,66.27],[665,-5,\"RU\",\"Russia\",null,108.2,66.27],[670,-5,\"RU\",\"Russia\",null,110.71,66.27],[675,-5,\"RU\",\"Russia\",null,113.23,66.27],[680,-5,\"RU\",\"Russia\",null,115.75,66.27],[685,-5,\"RU\",\"Russia\",null,118.26,66.27],[690,-5,\"RU\",\"Russia\",null,120.78,66.27],[695,-5,\"RU\",\"Russia\",null,123.3,66.27],[700,-5,\"RU\",\"Russia\",null,125.81,66.27],[705,-5,\"RU\",\"Russia\",null,128.33,66.27],[710,-5,\"RU\",\"Russia\",null,130.84,66.27],[715,-5,\"RU\",\"Russia\",null,133.36,66.27],[720,-5,\"RU\",\"Russia\",null,135.88,66.27],[725,-5,\"RU\",\"Russia\",null,138.39,66.27],[730,-5,\"RU\",\"Russia\",null,140.91,66.27],[735,-5,\"RU\",\"Russia\",null,143.43,66.27],[740,-5,\"RU\",\"Russia\",null,145.94,66.27],[745,-5,\"RU\",\"Russia\",null,148.46,66.27],[750,-5,\"RU\",\"Russia\",null,150.97,66.27],[755,-5,\"RU\",\"Russia\",null,153.49,66.27],[760,-5,\"RU\",\"Russia\",null,156.01,66.27],[765,-5,\"RU\",\"Russia\",null,158.52,66.27],[770,-5,\"RU\",\"Russia\",null,161.04,66.27],[775,-5,\"RU\",\"Russia\",null,163.56,66.27],[780,-5,\"RU\",\"Russia\",null,166.07,66.27],[785,-5,\"RU\",\"Russia\",null,168.59,66.27],[790,-5,\"RU\",\"Russia\",null,171.1,66.27],[795,-5,\"RU\",\"Russia\",null,173.62,66.27],[800,-5,\"RU\",\"Russia\",null,176.14,66.27],[805,-5,\"RU\",\"Russia\",null,178.65,66.27],[810,-5,\"RU\",\"Russia\",null,-178.83,66.27],[815,-5,\"RU\",\"Russia\",null,-176.32,66.27],[820,-5,\"RU\",\"Russia\",null,-173.8,66.27],[825,-5,\"RU\",\"Russia\",null,-171.28,66.27],[850,-5,\"US\",\"United States of America\",null,-158.7,66.27],[855,-5,\"US\",\"United States of America\",null,-156.19,66.27],[860,-5,\"US\",\"United States of America\",null,-153.67,66.27],[865,-5,\"US\",\"United States of America\",null,-151.15,66.27],[870,-5,\"US\",\"United States of America\",null,-148.64,66.27],[875,-5,\"US\",\"United States of America\",null,-146.12,66.27],[880,-5,\"US\",\"United States of America\",null,-143.6,66.27],[885,-5,\"US\",\"United States of America\",null,-141.09,66.27],[890,-5,\"CA\",\"Canada\",null,-138.57,66.27],[895,-5,\"CA\",\"Canada\",null,-136.06,66.27],[900,-5,\"CA\",\"Canada\",null,-133.54,66.27],[905,-5,\"CA\",\"Canada\",null,-131.02,66.27],[910,-5,\"CA\",\"Canada\",null,-128.51,66.27],[915,-5,\"CA\",\"Canada\",null,-125.99,66.27],[-10,0,\"RU\",\"Russia\",null,132.26,64.34],[-5,0,\"RU\",\"Russia\",null,134.73,64.34],[0,0,\"RU\",\"Russia\",null,137.21,64.34],[5,0,\"RU\",\"Russia\",null,139.68,64.34],[10,0,\"RU\",\"Russia\",null,142.16,64.34],[15,0,\"RU\",\"Russia\",null,144.63,64.34],[20,0,\"RU\",\"Russia\",null,147.11,64.34],[25,0,\"RU\",\"Russia\",null,149.59,64.34],[30,0,\"RU\",\"Russia\",null,152.06,64.34],[35,0,\"RU\",\"Russia\",null,154.54,64.34],[40,0,\"RU\",\"Russia\",null,157.01,64.34],[45,0,\"RU\",\"Russia\",null,159.49,64.34],[50,0,\"RU\",\"Russia\",null,161.96,64.34],[55,0,\"RU\",\"Russia\",null,164.44,64.34],[60,0,\"RU\",\"Russia\",null,166.91,64.34],[65,0,\"RU\",\"Russia\",null,169.39,64.34],[70,0,\"RU\",\"Russia\",null,171.86,64.34],[75,0,\"RU\",\"Russia\",null,174.34,64.34],[80,0,\"RU\",\"Russia\",null,176.82,64.34],[100,0,\"RU\",\"Russia\",null,-173.28,64.34],[125,0,\"US\",\"United States of America\",null,-160.91,64.34],[130,0,\"US\",\"United States of America\",null,-158.43,64.34],[135,0,\"US\",\"United States of America\",null,-155.95,64.34],[140,0,\"US\",\"United States of America\",null,-153.48,64.34],[145,0,\"US\",\"United States of America\",null,-151.0,64.34],[150,0,\"US\",\"United States of America\",null,-148.53,64.34],[155,0,\"US\",\"United States of America\",null,-146.05,64.34],[160,0,\"US\",\"United States of America\",null,-143.58,64.34],[165,0,\"US\",\"United States of America\",null,-141.1,64.34],[170,0,\"CA\",\"Canada\",null,-138.63,64.34],[175,0,\"CA\",\"Canada\",null,-136.15,64.34],[180,0,\"CA\",\"Canada\",null,-133.68,64.34],[185,0,\"CA\",\"Canada\",null,-131.2,64.34],[190,0,\"CA\",\"Canada\",null,-128.72,64.34],[195,0,\"CA\",\"Canada\",null,-126.25,64.34],[200,0,\"CA\",\"Canada\",null,-123.77,64.34],[205,0,\"CA\",\"Canada\",null,-121.3,64.34],[210,0,\"CA\",\"Canada\",null,-118.82,64.34],[215,0,\"CA\",\"Canada\",null,-116.35,64.34],[220,0,\"CA\",\"Canada\",null,-113.87,64.34],[225,0,\"CA\",\"Canada\",null,-111.4,64.34],[230,0,\"CA\",\"Canada\",null,-108.92,64.34],[235,0,\"CA\",\"Canada\",null,-106.45,64.34],[240,0,\"CA\",\"Canada\",null,-103.97,64.34],[245,0,\"CA\",\"Canada\",null,-101.49,64.34],[250,0,\"CA\",\"Canada\",null,-99.02,64.34],[255,0,\"CA\",\"Canada\",null,-96.54,64.34],[260,0,\"CA\",\"Canada\",null,-94.07,64.34],[265,0,\"CA\",\"Canada\",null,-91.59,64.34],[270,0,\"CA\",\"Canada\",null,-89.12,64.34],[280,0,\"CA\",\"Canada\",null,-84.17,64.34],[295,0,\"CA\",\"Canada\",null,-76.74,64.34],[305,0,\"CA\",\"Canada\",null,-71.79,64.34],[310,0,\"CA\",\"Canada\",null,-69.31,64.34],[315,0,\"CA\",\"Canada\",null,-66.84,64.34],[345,0,\"GL\",\"Greenland\",null,-51.98,64.34],[350,0,\"GL\",\"Greenland\",null,-49.51,64.34],[355,0,\"GL\",\"Greenland\",null,-47.03,64.34],[360,0,\"GL\",\"Greenland\",null,-44.56,64.34],[365,0,\"GL\",\"Greenland\",null,-42.08,64.34],[410,0,\"IS\",\"Iceland\",null,-19.8,64.34],[415,0,\"IS\",\"Iceland\",null,-17.33,64.34],[475,0,\"-99\",\"Norway\",null,12.38,64.34],[480,0,\"SE\",\"Sweden\",null,14.85,64.34],[485,0,\"SE\",\"Sweden\",null,17.33,64.34],[490,0,\"SE\",\"Sweden\",null,19.8,64.34],[500,0,\"FI\",\"Finland\",null,24.75,64.34],[505,0,\"FI\",\"Finland\",null,27.23,64.34],[510,0,\"FI\",\"Finland\",null,29.71,64.34],[515,0,\"RU\",\"Russia\",null,32.18,64.34],[520,0,\"RU\",\"Russia\",null,34.66,64.34],[530,0,\"RU\",\"Russia\",null,39.61,64.34],[535,0,\"RU\",\"Russia\",null,42.08,64.34],[540,0,\"RU\",\"Russia\",null,44.56,64.34],[545,0,\"RU\",\"Russia\",null,47.03,64.34],[550,0,\"RU\",\"Russia\",null,49.51,64.34],[555,0,\"RU\",\"Russia\",null,51.98,64.34],[560,0,\"RU\",\"Russia\",null,54.46,64.34],[565,0,\"RU\",\"Russia\",null,56.94,64.34],[570,0,\"RU\",\"Russia\",null,59.41,64.34],[575,0,\"RU\",\"Russia\",null,61.89,64.34],[580,0,\"RU\",\"Russia\",null,64.36,64.34],[585,0,\"RU\",\"Russia\",null,66.84,64.34],[590,0,\"RU\",\"Russia\",null,69.31,64.34],[595,0,\"RU\",\"Russia\",null,71.79,64.34],[600,0,\"RU\",\"Russia\",null,74.26,64.34],[605,0,\"RU\",\"Russia\",null,76.74,64.34],[610,0,\"RU\",\"Russia\",null,79.21,64.34],[615,0,\"RU\",\"Russia\",null,81.69,64.34],[620,0,\"RU\",\"Russia\",null,84.17,64.34],[625,0,\"RU\",\"Russia\",null,86.64,64.34],[630,0,\"RU\",\"Russia\",null,89.12,64.34],[635,0,\"RU\",\"Russia\",null,91.59,64.34],[640,0,\"RU\",\"Russia\",null,94.07,64.34],[645,0,\"RU\",\"Russia\",null,96.54,64.34],[650,0,\"RU\",\"Russia\",null,99.02,64.34],[655,0,\"RU\",\"Russia\",null,101.49,64.34],[660,0,\"RU\",\"Russia\",null,103.97,64.34],[665,0,\"RU\",\"Russia\",null,106.45,64.34],[670,0,\"RU\",\"Russia\",null,108.92,64.34],[675,0,\"RU\",\"Russia\",null,111.4,64.34],[680,0,\"RU\",\"Russia\",null,113.87,64.34],[685,0,\"RU\",\"Russia\",null,116.35,64.34],[690,0,\"RU\",\"Russia\",null,118.82,64.34],[695,0,\"RU\",\"Russia\",null,121.3,64.34],[700,0,\"RU\",\"Russia\",null,123.77,64.34],[705,0,\"RU\",\"Russia\",null,126.25,64.34],[710,0,\"RU\",\"Russia\",null,128.72,64.34],[715,0,\"RU\",\"Russia\",null,131.2,64.34],[720,0,\"RU\",\"Russia\",null,133.68,64.34],[725,0,\"RU\",\"Russia\",null,136.15,64.34],[730,0,\"RU\",\"Russia\",null,138.63,64.34],[735,0,\"RU\",\"Russia\",null,141.1,64.34],[740,0,\"RU\",\"Russia\",null,143.58,64.34],[745,0,\"RU\",\"Russia\",null,146.05,64.34],[750,0,\"RU\",\"Russia\",null,148.53,64.34],[755,0,\"RU\",\"Russia\",null,151.0,64.34],[760,0,\"RU\",\"Russia\",null,153.48,64.34],[765,0,\"RU\",\"Russia\",null,155.95,64.34],[770,0,\"RU\",\"Russia\",null,158.43,64.34],[775,0,\"RU\",\"Russia\",null,160.91,64.34],[780,0,\"RU\",\"Russia\",null,163.38,64.34],[785,0,\"RU\",\"Russia\",null,165.86,64.34],[790,0,\"RU\",\"Russia\",null,168.33,64.34],[795,0,\"RU\",\"Russia\",null,170.81,64.34],[800,0,\"RU\",\"Russia\",null,173.28,64.34],[805,0,\"RU\",\"Russia\",null,175.76,64.34],[855,0,\"US\",\"United States of America\",null,-159.49,64.34],[860,0,\"US\",\"United States of America\",null,-157.01,64.34],[865,0,\"US\",\"United States of America\",null,-154.54,64.34],[870,0,\"US\",\"United States of America\",null,-152.06,64.34],[875,0,\"US\",\"United States of America\",null,-149.59,64.34],[880,0,\"US\",\"United States of America\",null,-147.11,64.34],[885,0,\"US\",\"United States of America\",null,-144.63,64.34],[890,0,\"US\",\"United States of America\",null,-142.16,64.34],[895,0,\"CA\",\"Canada\",null,-139.68,64.34],[900,0,\"CA\",\"Canada\",null,-137.21,64.34],[905,0,\"CA\",\"Canada\",null,-134.73,64.34],[910,0,\"CA\",\"Canada\",null,-132.26,64.34],[915,0,\"CA\",\"Canada\",null,-129.78,64.34],[-10,5,\"RU\",\"Russia\",null,135.76,62.44],[-5,5,\"RU\",\"Russia\",null,138.2,62.44],[0,5,\"RU\",\"Russia\",null,140.63,62.44],[5,5,\"RU\",\"Russia\",null,143.07,62.44],[10,5,\"RU\",\"Russia\",null,145.51,62.44],[15,5,\"RU\",\"Russia\",null,147.95,62.44],[20,5,\"RU\",\"Russia\",null,150.38,62.44],[25,5,\"RU\",\"Russia\",null,152.82,62.44],[30,5,\"RU\",\"Russia\",null,155.26,62.44],[35,5,\"RU\",\"Russia\",null,157.69,62.44],[40,5,\"RU\",\"Russia\",null,160.13,62.44],[45,5,\"RU\",\"Russia\",null,162.57,62.44],[55,5,\"RU\",\"Russia\",null,167.44,62.44],[60,5,\"RU\",\"Russia\",null,169.88,62.44],[65,5,\"RU\",\"Russia\",null,172.32,62.44],[70,5,\"RU\",\"Russia\",null,174.76,62.44],[115,5,\"US\",\"United States of America\",null,-163.31,62.44],[120,5,\"US\",\"United States of America\",null,-160.87,62.44],[125,5,\"US\",\"United States of America\",null,-158.43,62.44],[130,5,\"US\",\"United States of America\",null,-155.99,62.44],[135,5,\"US\",\"United States of America\",null,-153.56,62.44],[140,5,\"US\",\"United States of America\",null,-151.12,62.44],[145,5,\"US\",\"United States of America\",null,-148.68,62.44],[150,5,\"US\",\"United States of America\",null,-146.24,62.44],[155,5,\"US\",\"United States of America\",null,-143.81,62.44],[160,5,\"US\",\"United States of America\",null,-141.37,62.44],[165,5,\"CA\",\"Canada\",null,-138.93,62.44],[170,5,\"CA\",\"Canada\",null,-136.5,62.44],[175,5,\"CA\",\"Canada\",null,-134.06,62.44],[180,5,\"CA\",\"Canada\",null,-131.62,62.44],[185,5,\"CA\",\"Canada\",null,-129.18,62.44],[190,5,\"CA\",\"Canada\",null,-126.75,62.44],[195,5,\"CA\",\"Canada\",null,-124.31,62.44],[200,5,\"CA\",\"Canada\",null,-121.87,62.44],[205,5,\"CA\",\"Canada\",null,-119.43,62.44],[210,5,\"CA\",\"Canada\",null,-117.0,62.44],[215,5,\"CA\",\"Canada\",null,-114.56,62.44],[220,5,\"CA\",\"Canada\",null,-112.12,62.44],[225,5,\"CA\",\"Canada\",null,-109.68,62.44],[230,5,\"CA\",\"Canada\",null,-107.25,62.44],[235,5,\"CA\",\"Canada\",null,-104.81,62.44],[240,5,\"CA\",\"Canada\",null,-102.37,62.44],[245,5,\"CA\",\"Canada\",null,-99.93,62.44],[250,5,\"CA\",\"Canada\",null,-97.5,62.44],[255,5,\"CA\",\"Canada\",null,-95.06,62.44],[280,5,\"CA\",\"Canada\",null,-82.87,62.44],[310,5,\"CA\",\"Canada\",null,-68.25,62.44],[350,5,\"GL\",\"Greenland\",null,-48.75,62.44],[355,5,\"GL\",\"Greenland\",null,-46.31,62.44],[360,5,\"GL\",\"Greenland\",null,-43.87,62.44],[465,5,\"-99\",\"Norway\",null,7.31,62.44],[470,5,\"-99\",\"Norway\",null,9.75,62.44],[475,5,\"-99\",\"Norway\",null,12.19,62.44],[480,5,\"SE\",\"Sweden\",null,14.62,62.44],[485,5,\"SE\",\"Sweden\",null,17.06,62.44],[495,5,\"FI\",\"Finland\",null,21.94,62.44],[500,5,\"FI\",\"Finland\",null,24.37,62.44],[505,5,\"FI\",\"Finland\",null,26.81,62.44],[510,5,\"FI\",\"Finland\",null,29.25,62.44],[515,5,\"RU\",\"Russia\",null,31.69,62.44],[520,5,\"RU\",\"Russia\",null,34.12,62.44],[525,5,\"RU\",\"Russia\",null,36.56,62.44],[530,5,\"RU\",\"Russia\",null,39.0,62.44],[535,5,\"RU\",\"Russia\",null,41.44,62.44],[540,5,\"RU\",\"Russia\",null,43.87,62.44],[545,5,\"RU\",\"Russia\",null,46.31,62.44],[550,5,\"RU\",\"Russia\",null,48.75,62.44],[555,5,\"RU\",\"Russia\",null,51.19,62.44],[560,5,\"RU\",\"Russia\",null,53.62,62.44],[565,5,\"RU\",\"Russia\",null,56.06,62.44],[570,5,\"RU\",\"Russia\",null,58.5,62.44],[575,5,\"RU\",\"Russia\",null,60.94,62.44],[580,5,\"RU\",\"Russia\",null,63.37,62.44],[585,5,\"RU\",\"Russia\",null,65.81,62.44],[590,5,\"RU\",\"Russia\",null,68.25,62.44],[595,5,\"RU\",\"Russia\",null,70.68,62.44],[600,5,\"RU\",\"Russia\",null,73.12,62.44],[605,5,\"RU\",\"Russia\",null,75.56,62.44],[610,5,\"RU\",\"Russia\",null,78.0,62.44],[615,5,\"RU\",\"Russia\",null,80.43,62.44],[620,5,\"RU\",\"Russia\",null,82.87,62.44],[625,5,\"RU\",\"Russia\",null,85.31,62.44],[630,5,\"RU\",\"Russia\",null,87.75,62.44],[635,5,\"RU\",\"Russia\",null,90.18,62.44],[640,5,\"RU\",\"Russia\",null,92.62,62.44],[645,5,\"RU\",\"Russia\",null,95.06,62.44],[650,5,\"RU\",\"Russia\",null,97.5,62.44],[655,5,\"RU\",\"Russia\",null,99.93,62.44],[660,5,\"RU\",\"Russia\",null,102.37,62.44],[665,5,\"RU\",\"Russia\",null,104.81,62.44],[670,5,\"RU\",\"Russia\",null,107.25,62.44],[675,5,\"RU\",\"Russia\",null,109.68,62.44],[680,5,\"RU\",\"Russia\",null,112.12,62.44],[685,5,\"RU\",\"Russia\",null,114.56,62.44],[690,5,\"RU\",\"Russia\",null,117.0,62.44],[695,5,\"RU\",\"Russia\",null,119.43,62.44],[700,5,\"RU\",\"Russia\",null,121.87,62.44],[705,5,\"RU\",\"Russia\",null,124.31,62.44],[710,5,\"RU\",\"Russia\",null,126.75,62.44],[715,5,\"RU\",\"Russia\",null,129.18,62.44],[720,5,\"RU\",\"Russia\",null,131.62,62.44],[725,5,\"RU\",\"Russia\",null,134.06,62.44],[730,5,\"RU\",\"Russia\",null,136.5,62.44],[735,5,\"RU\",\"Russia\",null,138.93,62.44],[740,5,\"RU\",\"Russia\",null,141.37,62.44],[745,5,\"RU\",\"Russia\",null,143.81,62.44],[750,5,\"RU\",\"Russia\",null,146.24,62.44],[755,5,\"RU\",\"Russia\",null,148.68,62.44],[760,5,\"RU\",\"Russia\",null,151.12,62.44],[765,5,\"RU\",\"Russia\",null,153.56,62.44],[770,5,\"RU\",\"Russia\",null,155.99,62.44],[775,5,\"RU\",\"Russia\",null,158.43,62.44],[780,5,\"RU\",\"Russia\",null,160.87,62.44],[790,5,\"RU\",\"Russia\",null,165.74,62.44],[795,5,\"RU\",\"Russia\",null,168.18,62.44],[800,5,\"RU\",\"Russia\",null,170.62,62.44],[805,5,\"RU\",\"Russia\",null,173.06,62.44],[810,5,\"RU\",\"Russia\",null,175.49,62.44],[850,5,\"US\",\"United States of America\",null,-165.01,62.44],[855,5,\"US\",\"United States of America\",null,-162.57,62.44],[860,5,\"US\",\"United States of America\",null,-160.13,62.44],[865,5,\"US\",\"United States of America\",null,-157.69,62.44],[870,5,\"US\",\"United States of America\",null,-155.26,62.44],[875,5,\"US\",\"United States of America\",null,-152.82,62.44],[880,5,\"US\",\"United States of America\",null,-150.38,62.44],[885,5,\"US\",\"United States of America\",null,-147.95,62.44],[890,5,\"US\",\"United States of America\",null,-145.51,62.44],[895,5,\"US\",\"United States of America\",null,-143.07,62.44],[900,5,\"CA\",\"Canada\",null,-140.63,62.44],[905,5,\"CA\",\"Canada\",null,-138.2,62.44],[910,5,\"CA\",\"Canada\",null,-135.76,62.44],[915,5,\"CA\",\"Canada\",null,-133.32,62.44],[-10,10,\"RU\",\"Russia\",null,139.03,60.56],[-5,10,\"RU\",\"Russia\",null,141.43,60.56],[0,10,\"RU\",\"Russia\",null,143.83,60.56],[5,10,\"RU\",\"Russia\",null,146.24,60.56],[10,10,\"RU\",\"Russia\",null,148.64,60.56],[15,10,\"RU\",\"Russia\",null,151.04,60.56],[20,10,\"RU\",\"Russia\",null,153.44,60.56],[40,10,\"RU\",\"Russia\",null,163.05,60.56],[45,10,\"RU\",\"Russia\",null,165.45,60.56],[50,10,\"RU\",\"Russia\",null,167.85,60.56],[55,10,\"RU\",\"Russia\",null,170.25,60.56],[90,10,\"US\",\"United States of America\",null,-172.93,60.56],[110,10,\"US\",\"United States of America\",null,-163.33,60.56],[115,10,\"US\",\"United States of America\",null,-160.92,60.56],[120,10,\"US\",\"United States of America\",null,-158.52,60.56],[125,10,\"US\",\"United States of America\",null,-156.12,60.56],[130,10,\"US\",\"United States of America\",null,-153.72,60.56],[140,10,\"US\",\"United States of America\",null,-148.91,60.56],[150,10,\"US\",\"United States of America\",null,-144.11,60.56],[155,10,\"US\",\"United States of America\",null,-141.71,60.56],[160,10,\"CA\",\"Canada\",null,-139.31,60.56],[165,10,\"CA\",\"Canada\",null,-136.91,60.56],[170,10,\"CA\",\"Canada\",null,-134.5,60.56],[175,10,\"CA\",\"Canada\",null,-132.1,60.56],[180,10,\"CA\",\"Canada\",null,-129.7,60.56],[185,10,\"CA\",\"Canada\",null,-127.3,60.56],[190,10,\"CA\",\"Canada\",null,-124.9,60.56],[195,10,\"CA\",\"Canada\",null,-122.49,60.56],[200,10,\"CA\",\"Canada\",null,-120.09,60.56],[205,10,\"CA\",\"Canada\",null,-117.69,60.56],[210,10,\"CA\",\"Canada\",null,-115.29,60.56],[215,10,\"CA\",\"Canada\",null,-112.89,60.56],[220,10,\"CA\",\"Canada\",null,-110.48,60.56],[225,10,\"CA\",\"Canada\",null,-108.08,60.56],[230,10,\"CA\",\"Canada\",null,-105.68,60.56],[235,10,\"CA\",\"Canada\",null,-103.28,60.56],[240,10,\"CA\",\"Canada\",null,-100.88,60.56],[245,10,\"CA\",\"Canada\",null,-98.48,60.56],[250,10,\"CA\",\"Canada\",null,-96.07,60.56],[290,10,\"CA\",\"Canada\",null,-76.86,60.56],[295,10,\"CA\",\"Canada\",null,-74.46,60.56],[300,10,\"CA\",\"Canada\",null,-72.06,60.56],[360,10,\"GL\",\"Greenland\",null,-43.23,60.56],[465,10,\"-99\",\"Norway\",null,7.21,60.56],[470,10,\"-99\",\"Norway\",null,9.61,60.56],[475,10,\"-99\",\"Norway\",null,12.01,60.56],[480,10,\"SE\",\"Sweden\",null,14.41,60.56],[485,10,\"SE\",\"Sweden\",null,16.81,60.56],[495,10,\"FI\",\"Finland\",null,21.62,60.56],[500,10,\"FI\",\"Finland\",null,24.02,60.56],[505,10,\"FI\",\"Finland\",null,26.42,60.56],[510,10,\"RU\",\"Russia\",null,28.82,60.56],[515,10,\"RU\",\"Russia\",null,31.22,60.56],[520,10,\"RU\",\"Russia\",null,33.63,60.56],[525,10,\"RU\",\"Russia\",null,36.03,60.56],[530,10,\"RU\",\"Russia\",null,38.43,60.56],[535,10,\"RU\",\"Russia\",null,40.83,60.56],[540,10,\"RU\",\"Russia\",null,43.23,60.56],[545,10,\"RU\",\"Russia\",null,45.64,60.56],[550,10,\"RU\",\"Russia\",null,48.04,60.56],[555,10,\"RU\",\"Russia\",null,50.44,60.56],[560,10,\"RU\",\"Russia\",null,52.84,60.56],[565,10,\"RU\",\"Russia\",null,55.24,60.56],[570,10,\"RU\",\"Russia\",null,57.64,60.56],[575,10,\"RU\",\"Russia\",null,60.05,60.56],[580,10,\"RU\",\"Russia\",null,62.45,60.56],[585,10,\"RU\",\"Russia\",null,64.85,60.56],[590,10,\"RU\",\"Russia\",null,67.25,60.56],[595,10,\"RU\",\"Russia\",null,69.65,60.56],[600,10,\"RU\",\"Russia\",null,72.06,60.56],[605,10,\"RU\",\"Russia\",null,74.46,60.56],[610,10,\"RU\",\"Russia\",null,76.86,60.56],[615,10,\"RU\",\"Russia\",null,79.26,60.56],[620,10,\"RU\",\"Russia\",null,81.66,60.56],[625,10,\"RU\",\"Russia\",null,84.06,60.56],[630,10,\"RU\",\"Russia\",null,86.47,60.56],[635,10,\"RU\",\"Russia\",null,88.87,60.56],[640,10,\"RU\",\"Russia\",null,91.27,60.56],[645,10,\"RU\",\"Russia\",null,93.67,60.56],[650,10,\"RU\",\"Russia\",null,96.07,60.56],[655,10,\"RU\",\"Russia\",null,98.48,60.56],[660,10,\"RU\",\"Russia\",null,100.88,60.56],[665,10,\"RU\",\"Russia\",null,103.28,60.56],[670,10,\"RU\",\"Russia\",null,105.68,60.56],[675,10,\"RU\",\"Russia\",null,108.08,60.56],[680,10,\"RU\",\"Russia\",null,110.48,60.56],[685,10,\"RU\",\"Russia\",null,112.89,60.56],[690,10,\"RU\",\"Russia\",null,115.29,60.56],[695,10,\"RU\",\"Russia\",null,117.69,60.56],[700,10,\"RU\",\"Russia\",null,120.09,60.56],[705,10,\"RU\",\"Russia\",null,122.49,60.56],[710,10,\"RU\",\"Russia\",null,124.9,60.56],[715,10,\"RU\",\"Russia\",null,127.3,60.56],[720,10,\"RU\",\"Russia\",null,129.7,60.56],[725,10,\"RU\",\"Russia\",null,132.1,60.56],[730,10,\"RU\",\"Russia\",null,134.5,60.56],[735,10,\"RU\",\"Russia\",null,136.91,60.56],[740,10,\"RU\",\"Russia\",null,139.31,60.56],[745,10,\"RU\",\"Russia\",null,141.71,60.56],[750,10,\"RU\",\"Russia\",null,144.11,60.56],[755,10,\"RU\",\"Russia\",null,146.51,60.56],[760,10,\"RU\",\"Russia\",null,148.91,60.56],[765,10,\"RU\",\"Russia\",null,151.32,60.56],[770,10,\"RU\",\"Russia\",null,153.72,60.56],[790,10,\"RU\",\"Russia\",null,163.33,60.56],[795,10,\"RU\",\"Russia\",null,165.73,60.56],[805,10,\"RU\",\"Russia\",null,170.53,60.56],[860,10,\"US\",\"United States of America\",null,-163.05,60.56],[865,10,\"US\",\"United States of America\",null,-160.65,60.56],[870,10,\"US\",\"United States of America\",null,-158.24,60.56],[875,10,\"US\",\"United States of America\",null,-155.84,60.56],[880,10,\"US\",\"United States of America\",null,-153.44,60.56],[885,10,\"US\",\"United States of America\",null,-151.04,60.56],[890,10,\"US\",\"United States of America\",null,-148.64,60.56],[900,10,\"US\",\"United States of America\",null,-143.83,60.56],[905,10,\"US\",\"United States of America\",null,-141.43,60.56],[910,10,\"CA\",\"Canada\",null,-139.03,60.56],[915,10,\"CA\",\"Canada\",null,-136.63,60.56],[30,15,\"RU\",\"Russia\",null,161.04,58.71],[120,15,\"US\",\"United States of America\",null,-156.33,58.71],[125,15,\"US\",\"United States of America\",null,-153.96,58.71],[160,15,\"US\",\"United States of America\",null,-137.38,58.71],[170,15,\"CA\",\"Canada\",null,-132.64,58.71],[175,15,\"CA\",\"Canada\",null,-130.27,58.71],[180,15,\"CA\",\"Canada\",null,-127.9,58.71],[185,15,\"CA\",\"Canada\",null,-125.54,58.71],[190,15,\"CA\",\"Canada\",null,-123.17,58.71],[195,15,\"CA\",\"Canada\",null,-120.8,58.71],[200,15,\"CA\",\"Canada\",null,-118.43,58.71],[205,15,\"CA\",\"Canada\",null,-116.06,58.71],[210,15,\"CA\",\"Canada\",null,-113.69,58.71],[215,15,\"CA\",\"Canada\",null,-111.32,58.71],[220,15,\"CA\",\"Canada\",null,-108.96,58.71],[225,15,\"CA\",\"Canada\",null,-106.59,58.71],[230,15,\"CA\",\"Canada\",null,-104.22,58.71],[235,15,\"CA\",\"Canada\",null,-101.85,58.71],[240,15,\"CA\",\"Canada\",null,-99.48,58.71],[245,15,\"CA\",\"Canada\",null,-97.11,58.71],[250,15,\"CA\",\"Canada\",null,-94.74,58.71],[285,15,\"CA\",\"Canada\",null,-78.16,58.71],[290,15,\"CA\",\"Canada\",null,-75.8,58.71],[295,15,\"CA\",\"Canada\",null,-73.43,58.71],[300,15,\"CA\",\"Canada\",null,-71.06,58.71],[305,15,\"CA\",\"Canada\",null,-68.69,58.71],[310,15,\"CA\",\"Canada\",null,-66.32,58.71],[315,15,\"CA\",\"Canada\",null,-63.95,58.71],[465,15,\"-99\",\"Norway\",null,7.11,58.71],[475,15,\"SE\",\"Sweden\",null,11.84,58.71],[480,15,\"SE\",\"Sweden\",null,14.21,58.71],[485,15,\"SE\",\"Sweden\",null,16.58,58.71],[500,15,\"EE\",\"Estonia\",null,23.69,58.71],[505,15,\"EE\",\"Estonia\",null,26.05,58.71],[510,15,\"RU\",\"Russia\",null,28.42,58.71],[515,15,\"RU\",\"Russia\",null,30.79,58.71],[520,15,\"RU\",\"Russia\",null,33.16,58.71],[525,15,\"RU\",\"Russia\",null,35.53,58.71],[530,15,\"RU\",\"Russia\",null,37.9,58.71],[535,15,\"RU\",\"Russia\",null,40.27,58.71],[540,15,\"RU\",\"Russia\",null,42.63,58.71],[545,15,\"RU\",\"Russia\",null,45.0,58.71],[550,15,\"RU\",\"Russia\",null,47.37,58.71],[555,15,\"RU\",\"Russia\",null,49.74,58.71],[560,15,\"RU\",\"Russia\",null,52.11,58.71],[565,15,\"RU\",\"Russia\",null,54.48,58.71],[570,15,\"RU\",\"Russia\",null,56.85,58.71],[575,15,\"RU\",\"Russia\",null,59.21,58.71],[580,15,\"RU\",\"Russia\",null,61.58,58.71],[585,15,\"RU\",\"Russia\",null,63.95,58.71],[590,15,\"RU\",\"Russia\",null,66.32,58.71],[595,15,\"RU\",\"Russia\",null,68.69,58.71],[600,15,\"RU\",\"Russia\",null,71.06,58.71],[605,15,\"RU\",\"Russia\",null,73.43,58.71],[610,15,\"RU\",\"Russia\",null,75.8,58.71],[615,15,\"RU\",\"Russia\",null,78.16,58.71],[620,15,\"RU\",\"Russia\",null,80.53,58.71],[625,15,\"RU\",\"Russia\",null,82.9,58.71],[630,15,\"RU\",\"Russia\",null,85.27,58.71],[635,15,\"RU\",\"Russia\",null,87.64,58.71],[640,15,\"RU\",\"Russia\",null,90.01,58.71],[645,15,\"RU\",\"Russia\",null,92.38,58.71],[650,15,\"RU\",\"Russia\",null,94.74,58.71],[655,15,\"RU\",\"Russia\",null,97.11,58.71],[660,15,\"RU\",\"Russia\",null,99.48,58.71],[665,15,\"RU\",\"Russia\",null,101.85,58.71],[670,15,\"RU\",\"Russia\",null,104.22,58.71],[675,15,\"RU\",\"Russia\",null,106.59,58.71],[680,15,\"RU\",\"Russia\",null,108.96,58.71],[685,15,\"RU\",\"Russia\",null,111.32,58.71],[690,15,\"RU\",\"Russia\",null,113.69,58.71],[695,15,\"RU\",\"Russia\",null,116.06,58.71],[700,15,\"RU\",\"Russia\",null,118.43,58.71],[705,15,\"RU\",\"Russia\",null,120.8,58.71],[710,15,\"RU\",\"Russia\",null,123.17,58.71],[715,15,\"RU\",\"Russia\",null,125.54,58.71],[720,15,\"RU\",\"Russia\",null,127.9,58.71],[725,15,\"RU\",\"Russia\",null,130.27,58.71],[730,15,\"RU\",\"Russia\",null,132.64,58.71],[735,15,\"RU\",\"Russia\",null,135.01,58.71],[740,15,\"RU\",\"Russia\",null,137.38,58.71],[745,15,\"RU\",\"Russia\",null,139.75,58.71],[790,15,\"RU\",\"Russia\",null,161.06,58.71],[880,15,\"US\",\"United States of America\",null,-156.3,58.71],[885,15,\"US\",\"United States of America\",null,-153.93,58.71],[15,20,\"RU\",\"Russia\",null,156.64,56.88],[20,20,\"RU\",\"Russia\",null,158.97,56.88],[25,20,\"RU\",\"Russia\",null,161.31,56.88],[165,20,\"US\",\"United States of America\",null,-133.24,56.88],[170,20,\"CA\",\"Canada\",null,-130.9,56.88],[175,20,\"CA\",\"Canada\",null,-128.56,56.88],[180,20,\"CA\",\"Canada\",null,-126.23,56.88],[185,20,\"CA\",\"Canada\",null,-123.89,56.88],[190,20,\"CA\",\"Canada\",null,-121.55,56.88],[195,20,\"CA\",\"Canada\",null,-119.21,56.88],[200,20,\"CA\",\"Canada\",null,-116.88,56.88],[205,20,\"CA\",\"Canada\",null,-114.54,56.88],[210,20,\"CA\",\"Canada\",null,-112.2,56.88],[215,20,\"CA\",\"Canada\",null,-109.86,56.88],[220,20,\"CA\",\"Canada\",null,-107.53,56.88],[225,20,\"CA\",\"Canada\",null,-105.19,56.88],[230,20,\"CA\",\"Canada\",null,-102.85,56.88],[235,20,\"CA\",\"Canada\",null,-100.51,56.88],[240,20,\"CA\",\"Canada\",null,-98.18,56.88],[245,20,\"CA\",\"Canada\",null,-95.84,56.88],[250,20,\"CA\",\"Canada\",null,-93.5,56.88],[255,20,\"CA\",\"Canada\",null,-91.16,56.88],[290,20,\"CA\",\"Canada\",null,-74.8,56.88],[295,20,\"CA\",\"Canada\",null,-72.46,56.88],[300,20,\"CA\",\"Canada\",null,-70.13,56.88],[305,20,\"CA\",\"Canada\",null,-67.79,56.88],[310,20,\"CA\",\"Canada\",null,-65.45,56.88],[315,20,\"CA\",\"Canada\",null,-63.11,56.88],[440,20,\"GB\",\"United Kingdom\",null,-4.68,56.88],[445,20,\"GB\",\"United Kingdom\",null,-2.34,56.88],[470,20,\"DK\",\"Denmark\",null,9.35,56.88],[480,20,\"SE\",\"Sweden\",null,14.03,56.88],[485,20,\"SE\",\"Sweden\",null,16.36,56.88],[500,20,\"LV\",\"Latvia\",null,23.38,56.88],[505,20,\"LV\",\"Latvia\",null,25.71,56.88],[510,20,\"RU\",\"Russia\",null,28.05,56.88],[515,20,\"RU\",\"Russia\",null,30.39,56.88],[520,20,\"RU\",\"Russia\",null,32.73,56.88],[525,20,\"RU\",\"Russia\",null,35.06,56.88],[530,20,\"RU\",\"Russia\",null,37.4,56.88],[535,20,\"RU\",\"Russia\",null,39.74,56.88],[540,20,\"RU\",\"Russia\",null,42.08,56.88],[545,20,\"RU\",\"Russia\",null,44.41,56.88],[550,20,\"RU\",\"Russia\",null,46.75,56.88],[555,20,\"RU\",\"Russia\",null,49.09,56.88],[560,20,\"RU\",\"Russia\",null,51.43,56.88],[565,20,\"RU\",\"Russia\",null,53.76,56.88],[570,20,\"RU\",\"Russia\",null,56.1,56.88],[575,20,\"RU\",\"Russia\",null,58.44,56.88],[580,20,\"RU\",\"Russia\",null,60.78,56.88],[585,20,\"RU\",\"Russia\",null,63.11,56.88],[590,20,\"RU\",\"Russia\",null,65.45,56.88],[595,20,\"RU\",\"Russia\",null,67.79,56.88],[600,20,\"RU\",\"Russia\",null,70.13,56.88],[605,20,\"RU\",\"Russia\",null,72.46,56.88],[610,20,\"RU\",\"Russia\",null,74.8,56.88],[615,20,\"RU\",\"Russia\",null,77.14,56.88],[620,20,\"RU\",\"Russia\",null,79.48,56.88],[625,20,\"RU\",\"Russia\",null,81.81,56.88],[630,20,\"RU\",\"Russia\",null,84.15,56.88],[635,20,\"RU\",\"Russia\",null,86.49,56.88],[640,20,\"RU\",\"Russia\",null,88.83,56.88],[645,20,\"RU\",\"Russia\",null,91.16,56.88],[650,20,\"RU\",\"Russia\",null,93.5,56.88],[655,20,\"RU\",\"Russia\",null,95.84,56.88],[660,20,\"RU\",\"Russia\",null,98.18,56.88],[665,20,\"RU\",\"Russia\",null,100.51,56.88],[670,20,\"RU\",\"Russia\",null,102.85,56.88],[675,20,\"RU\",\"Russia\",null,105.19,56.88],[680,20,\"RU\",\"Russia\",null,107.53,56.88],[685,20,\"RU\",\"Russia\",null,109.86,56.88],[690,20,\"RU\",\"Russia\",null,112.2,56.88],[695,20,\"RU\",\"Russia\",null,114.54,56.88],[700,20,\"RU\",\"Russia\",null,116.88,56.88],[705,20,\"RU\",\"Russia\",null,119.21,56.88],[710,20,\"RU\",\"Russia\",null,121.55,56.88],[715,20,\"RU\",\"Russia\",null,123.89,56.88],[720,20,\"RU\",\"Russia\",null,126.23,56.88],[725,20,\"RU\",\"Russia\",null,128.56,56.88],[730,20,\"RU\",\"Russia\",null,130.9,56.88],[735,20,\"RU\",\"Russia\",null,133.24,56.88],[740,20,\"RU\",\"Russia\",null,135.58,56.88],[745,20,\"RU\",\"Russia\",null,137.91,56.88],[785,20,\"RU\",\"Russia\",null,156.61,56.88],[790,20,\"RU\",\"Russia\",null,158.95,56.88],[795,20,\"RU\",\"Russia\",null,161.29,56.88],[10,25,\"RU\",\"Russia\",null,156.86,55.08],[15,25,\"RU\",\"Russia\",null,159.17,55.08],[20,25,\"RU\",\"Russia\",null,161.47,55.08],[30,25,\"RU\",\"Russia\",null,166.09,55.08],[165,25,\"US\",\"United States of America\",null,-131.58,55.08],[170,25,\"CA\",\"Canada\",null,-129.27,55.08],[175,25,\"CA\",\"Canada\",null,-126.96,55.08],[180,25,\"CA\",\"Canada\",null,-124.66,55.08],[185,25,\"CA\",\"Canada\",null,-122.35,55.08],[190,25,\"CA\",\"Canada\",null,-120.04,55.08],[195,25,\"CA\",\"Canada\",null,-117.73,55.08],[200,25,\"CA\",\"Canada\",null,-115.42,55.08],[205,25,\"CA\",\"Canada\",null,-113.11,55.08],[210,25,\"CA\",\"Canada\",null,-110.81,55.08],[215,25,\"CA\",\"Canada\",null,-108.5,55.08],[220,25,\"CA\",\"Canada\",null,-106.19,55.08],[225,25,\"CA\",\"Canada\",null,-103.88,55.08],[230,25,\"CA\",\"Canada\",null,-101.57,55.08],[235,25,\"CA\",\"Canada\",null,-99.26,55.08],[240,25,\"CA\",\"Canada\",null,-96.95,55.08],[245,25,\"CA\",\"Canada\",null,-94.65,55.08],[250,25,\"CA\",\"Canada\",null,-92.34,55.08],[255,25,\"CA\",\"Canada\",null,-90.03,55.08],[260,25,\"CA\",\"Canada\",null,-87.72,55.08],[265,25,\"CA\",\"Canada\",null,-85.41,55.08],[270,25,\"CA\",\"Canada\",null,-83.1,55.08],[285,25,\"CA\",\"Canada\",null,-76.18,55.08],[290,25,\"CA\",\"Canada\",null,-73.87,55.08],[295,25,\"CA\",\"Canada\",null,-71.56,55.08],[300,25,\"CA\",\"Canada\",null,-69.25,55.08],[305,25,\"CA\",\"Canada\",null,-66.94,55.08],[310,25,\"CA\",\"Canada\",null,-64.64,55.08],[315,25,\"CA\",\"Canada\",null,-62.33,55.08],[320,25,\"CA\",\"Canada\",null,-60.02,55.08],[435,25,\"GB\",\"United Kingdom\",null,-6.93,55.08],[440,25,\"GB\",\"United Kingdom\",null,-4.62,55.08],[445,25,\"GB\",\"United Kingdom\",null,-2.31,55.08],[470,25,\"DK\",\"Denmark\",null,9.23,55.08],[500,25,\"LT\",\"Lithuania\",null,23.08,55.08],[505,25,\"LT\",\"Lithuania\",null,25.39,55.08],[510,25,\"BY\",\"Belarus\",null,27.7,55.08],[515,25,\"BY\",\"Belarus\",null,30.01,55.08],[520,25,\"RU\",\"Russia\",null,32.32,55.08],[525,25,\"RU\",\"Russia\",null,34.63,55.08],[530,25,\"RU\",\"Russia\",null,36.94,55.08],[535,25,\"RU\",\"Russia\",null,39.24,55.08],[540,25,\"RU\",\"Russia\",null,41.55,55.08],[545,25,\"RU\",\"Russia\",null,43.86,55.08],[550,25,\"RU\",\"Russia\",null,46.17,55.08],[555,25,\"RU\",\"Russia\",null,48.48,55.08],[560,25,\"RU\",\"Russia\",null,50.79,55.08],[565,25,\"RU\",\"Russia\",null,53.09,55.08],[570,25,\"RU\",\"Russia\",null,55.4,55.08],[575,25,\"RU\",\"Russia\",null,57.71,55.08],[580,25,\"RU\",\"Russia\",null,60.02,55.08],[585,25,\"RU\",\"Russia\",null,62.33,55.08],[590,25,\"RU\",\"Russia\",null,64.64,55.08],[595,25,\"RU\",\"Russia\",null,66.94,55.08],[600,25,\"KZ\",\"Kazakhstan\",null,69.25,55.08],[605,25,\"RU\",\"Russia\",null,71.56,55.08],[610,25,\"RU\",\"Russia\",null,73.87,55.08],[615,25,\"RU\",\"Russia\",null,76.18,55.08],[620,25,\"RU\",\"Russia\",null,78.49,55.08],[625,25,\"RU\",\"Russia\",null,80.8,55.08],[630,25,\"RU\",\"Russia\",null,83.1,55.08],[635,25,\"RU\",\"Russia\",null,85.41,55.08],[640,25,\"RU\",\"Russia\",null,87.72,55.08],[645,25,\"RU\",\"Russia\",null,90.03,55.08],[650,25,\"RU\",\"Russia\",null,92.34,55.08],[655,25,\"RU\",\"Russia\",null,94.65,55.08],[660,25,\"RU\",\"Russia\",null,96.95,55.08],[665,25,\"RU\",\"Russia\",null,99.26,55.08],[670,25,\"RU\",\"Russia\",null,101.57,55.08],[675,25,\"RU\",\"Russia\",null,103.88,55.08],[680,25,\"RU\",\"Russia\",null,106.19,55.08],[685,25,\"RU\",\"Russia\",null,108.5,55.08],[690,25,\"RU\",\"Russia\",null,110.81,55.08],[695,25,\"RU\",\"Russia\",null,113.11,55.08],[700,25,\"RU\",\"Russia\",null,115.42,55.08],[705,25,\"RU\",\"Russia\",null,117.73,55.08],[710,25,\"RU\",\"Russia\",null,120.04,55.08],[715,25,\"RU\",\"Russia\",null,122.35,55.08],[720,25,\"RU\",\"Russia\",null,124.66,55.08],[725,25,\"RU\",\"Russia\",null,126.96,55.08],[730,25,\"RU\",\"Russia\",null,129.27,55.08],[735,25,\"RU\",\"Russia\",null,131.58,55.08],[740,25,\"RU\",\"Russia\",null,133.89,55.08],[790,25,\"RU\",\"Russia\",null,156.97,55.08],[795,25,\"RU\",\"Russia\",null,159.28,55.08],[800,25,\"RU\",\"Russia\",null,161.59,55.08],[810,25,\"RU\",\"Russia\",null,166.21,55.08],[5,30,\"RU\",\"Russia\",null,156.97,53.29],[10,30,\"RU\",\"Russia\",null,159.25,53.29],[160,30,\"CA\",\"Canada\",null,-132.31,53.29],[165,30,\"CA\",\"Canada\",null,-130.03,53.29],[170,30,\"CA\",\"Canada\",null,-127.75,53.29],[175,30,\"CA\",\"Canada\",null,-125.47,53.29],[180,30,\"CA\",\"Canada\",null,-123.19,53.29],[185,30,\"CA\",\"Canada\",null,-120.91,53.29],[190,30,\"CA\",\"Canada\",null,-118.63,53.29],[195,30,\"CA\",\"Canada\",null,-116.34,53.29],[200,30,\"CA\",\"Canada\",null,-114.06,53.29],[205,30,\"CA\",\"Canada\",null,-111.78,53.29],[210,30,\"CA\",\"Canada\",null,-109.5,53.29],[215,30,\"CA\",\"Canada\",null,-107.22,53.29],[220,30,\"CA\",\"Canada\",null,-104.94,53.29],[225,30,\"CA\",\"Canada\",null,-102.66,53.29],[230,30,\"CA\",\"Canada\",null,-100.38,53.29],[235,30,\"CA\",\"Canada\",null,-98.09,53.29],[240,30,\"CA\",\"Canada\",null,-95.81,53.29],[245,30,\"CA\",\"Canada\",null,-93.53,53.29],[250,30,\"CA\",\"Canada\",null,-91.25,53.29],[255,30,\"CA\",\"Canada\",null,-88.97,53.29],[260,30,\"CA\",\"Canada\",null,-86.69,53.29],[265,30,\"CA\",\"Canada\",null,-84.41,53.29],[270,30,\"CA\",\"Canada\",null,-82.13,53.29],[280,30,\"CA\",\"Canada\",null,-77.56,53.29],[285,30,\"CA\",\"Canada\",null,-75.28,53.29],[290,30,\"CA\",\"Canada\",null,-73.0,53.29],[295,30,\"CA\",\"Canada\",null,-70.72,53.29],[300,30,\"CA\",\"Canada\",null,-68.44,53.29],[305,30,\"CA\",\"Canada\",null,-66.16,53.29],[310,30,\"CA\",\"Canada\",null,-63.88,53.29],[315,30,\"CA\",\"Canada\",null,-61.59,53.29],[320,30,\"CA\",\"Canada\",null,-59.31,53.29],[325,30,\"CA\",\"Canada\",null,-57.03,53.29],[430,30,\"IE\",\"Ireland\",null,-9.13,53.29],[435,30,\"IE\",\"Ireland\",null,-6.84,53.29],[440,30,\"GB\",\"United Kingdom\",null,-4.56,53.29],[445,30,\"GB\",\"United Kingdom\",null,-2.28,53.29],[450,30,\"GB\",\"United Kingdom\",null,0,53.29],[465,30,\"NL\",\"Netherlands\",null,6.84,53.29],[470,30,\"DE\",\"Germany\",null,9.13,53.29],[475,30,\"DE\",\"Germany\",null,11.41,53.29],[480,30,\"DE\",\"Germany\",null,13.69,53.29],[485,30,\"PL\",\"Poland\",null,15.97,53.29],[490,30,\"PL\",\"Poland\",null,18.25,53.29],[495,30,\"PL\",\"Poland\",null,20.53,53.29],[500,30,\"PL\",\"Poland\",null,22.81,53.29],[505,30,\"BY\",\"Belarus\",null,25.09,53.29],[510,30,\"BY\",\"Belarus\",null,27.38,53.29],[515,30,\"BY\",\"Belarus\",null,29.66,53.29],[520,30,\"BY\",\"Belarus\",null,31.94,53.29],[525,30,\"RU\",\"Russia\",null,34.22,53.29],[530,30,\"RU\",\"Russia\",null,36.5,53.29],[535,30,\"RU\",\"Russia\",null,38.78,53.29],[540,30,\"RU\",\"Russia\",null,41.06,53.29],[545,30,\"RU\",\"Russia\",null,43.34,53.29],[550,30,\"RU\",\"Russia\",null,45.63,53.29],[555,30,\"RU\",\"Russia\",null,47.91,53.29],[560,30,\"RU\",\"Russia\",null,50.19,53.29],[565,30,\"RU\",\"Russia\",null,52.47,53.29],[570,30,\"RU\",\"Russia\",null,54.75,53.29],[575,30,\"RU\",\"Russia\",null,57.03,53.29],[580,30,\"RU\",\"Russia\",null,59.31,53.29],[585,30,\"KZ\",\"Kazakhstan\",null,61.59,53.29],[590,30,\"KZ\",\"Kazakhstan\",null,63.88,53.29],[595,30,\"KZ\",\"Kazakhstan\",null,66.16,53.29],[600,30,\"KZ\",\"Kazakhstan\",null,68.44,53.29],[605,30,\"KZ\",\"Kazakhstan\",null,70.72,53.29],[610,30,\"KZ\",\"Kazakhstan\",null,73.0,53.29],[615,30,\"KZ\",\"Kazakhstan\",null,75.28,53.29],[620,30,\"KZ\",\"Kazakhstan\",null,77.56,53.29],[625,30,\"RU\",\"Russia\",null,79.84,53.29],[630,30,\"RU\",\"Russia\",null,82.13,53.29],[635,30,\"RU\",\"Russia\",null,84.41,53.29],[640,30,\"RU\",\"Russia\",null,86.69,53.29],[645,30,\"RU\",\"Russia\",null,88.97,53.29],[650,30,\"RU\",\"Russia\",null,91.25,53.29],[655,30,\"RU\",\"Russia\",null,93.53,53.29],[660,30,\"RU\",\"Russia\",null,95.81,53.29],[665,30,\"RU\",\"Russia\",null,98.09,53.29],[670,30,\"RU\",\"Russia\",null,100.38,53.29],[675,30,\"RU\",\"Russia\",null,102.66,53.29],[680,30,\"RU\",\"Russia\",null,104.94,53.29],[685,30,\"RU\",\"Russia\",null,107.22,53.29],[690,30,\"RU\",\"Russia\",null,109.5,53.29],[695,30,\"RU\",\"Russia\",null,111.78,53.29],[700,30,\"RU\",\"Russia\",null,114.06,53.29],[705,30,\"RU\",\"Russia\",null,116.34,53.29],[710,30,\"RU\",\"Russia\",null,118.63,53.29],[715,30,\"RU\",\"Russia\",null,120.91,53.29],[720,30,\"CN\",\"China\",null,123.19,53.29],[725,30,\"RU\",\"Russia\",null,125.47,53.29],[730,30,\"RU\",\"Russia\",null,127.75,53.29],[735,30,\"RU\",\"Russia\",null,130.03,53.29],[740,30,\"RU\",\"Russia\",null,132.31,53.29],[745,30,\"RU\",\"Russia\",null,134.59,53.29],[750,30,\"RU\",\"Russia\",null,136.88,53.29],[755,30,\"RU\",\"Russia\",null,139.16,53.29],[795,30,\"RU\",\"Russia\",null,157.41,53.29],[800,30,\"RU\",\"Russia\",null,159.69,53.29],[0,35,\"RU\",\"Russia\",null,156.98,51.52],[170,35,\"CA\",\"Canada\",null,-126.33,51.52],[175,35,\"CA\",\"Canada\",null,-124.07,51.52],[180,35,\"CA\",\"Canada\",null,-121.81,51.52],[185,35,\"CA\",\"Canada\",null,-119.56,51.52],[190,35,\"CA\",\"Canada\",null,-117.3,51.52],[195,35,\"CA\",\"Canada\",null,-115.05,51.52],[200,35,\"CA\",\"Canada\",null,-112.79,51.52],[205,35,\"CA\",\"Canada\",null,-110.54,51.52],[210,35,\"CA\",\"Canada\",null,-108.28,51.52],[215,35,\"CA\",\"Canada\",null,-106.02,51.52],[220,35,\"CA\",\"Canada\",null,-103.77,51.52],[225,35,\"CA\",\"Canada\",null,-101.51,51.52],[230,35,\"CA\",\"Canada\",null,-99.26,51.52],[235,35,\"CA\",\"Canada\",null,-97.0,51.52],[240,35,\"CA\",\"Canada\",null,-94.74,51.52],[245,35,\"CA\",\"Canada\",null,-92.49,51.52],[250,35,\"CA\",\"Canada\",null,-90.23,51.52],[255,35,\"CA\",\"Canada\",null,-87.98,51.52],[260,35,\"CA\",\"Canada\",null,-85.72,51.52],[265,35,\"CA\",\"Canada\",null,-83.47,51.52],[270,35,\"CA\",\"Canada\",null,-81.21,51.52],[280,35,\"CA\",\"Canada\",null,-76.7,51.52],[285,35,\"CA\",\"Canada\",null,-74.44,51.52],[290,35,\"CA\",\"Canada\",null,-72.19,51.52],[295,35,\"CA\",\"Canada\",null,-69.93,51.52],[300,35,\"CA\",\"Canada\",null,-67.67,51.52],[305,35,\"CA\",\"Canada\",null,-65.42,51.52],[310,35,\"CA\",\"Canada\",null,-63.16,51.52],[315,35,\"CA\",\"Canada\",null,-60.91,51.52],[320,35,\"CA\",\"Canada\",null,-58.65,51.52],[445,35,\"GB\",\"United Kingdom\",null,-2.26,51.52],[450,35,\"GB\",\"United Kingdom\",null,0,51.52],[460,35,\"NL\",\"Netherlands\",null,4.51,51.52],[465,35,\"DE\",\"Germany\",null,6.77,51.52],[470,35,\"DE\",\"Germany\",null,9.02,51.52],[475,35,\"DE\",\"Germany\",null,11.28,51.52],[480,35,\"DE\",\"Germany\",null,13.53,51.52],[485,35,\"PL\",\"Poland\",null,15.79,51.52],[490,35,\"PL\",\"Poland\",null,18.05,51.52],[495,35,\"PL\",\"Poland\",null,20.3,51.52],[500,35,\"PL\",\"Poland\",null,22.56,51.52],[505,35,\"UA\",\"Ukraine\",null,24.81,51.52],[510,35,\"UA\",\"Ukraine\",null,27.07,51.52],[515,35,\"BY\",\"Belarus\",null,29.33,51.52],[520,35,\"UA\",\"Ukraine\",null,31.58,51.52],[525,35,\"UA\",\"Ukraine\",null,33.84,51.52],[530,35,\"RU\",\"Russia\",null,36.09,51.52],[535,35,\"RU\",\"Russia\",null,38.35,51.52],[540,35,\"RU\",\"Russia\",null,40.6,51.52],[545,35,\"RU\",\"Russia\",null,42.86,51.52],[550,35,\"RU\",\"Russia\",null,45.12,51.52],[555,35,\"RU\",\"Russia\",null,47.37,51.52],[560,35,\"RU\",\"Russia\",null,49.63,51.52],[565,35,\"KZ\",\"Kazakhstan\",null,51.88,51.52],[570,35,\"RU\",\"Russia\",null,54.14,51.52],[575,35,\"RU\",\"Russia\",null,56.4,51.52],[580,35,\"RU\",\"Russia\",null,58.65,51.52],[585,35,\"RU\",\"Russia\",null,60.91,51.52],[590,35,\"KZ\",\"Kazakhstan\",null,63.16,51.52],[595,35,\"KZ\",\"Kazakhstan\",null,65.42,51.52],[600,35,\"KZ\",\"Kazakhstan\",null,67.67,51.52],[605,35,\"KZ\",\"Kazakhstan\",null,69.93,51.52],[610,35,\"KZ\",\"Kazakhstan\",null,72.19,51.52],[615,35,\"KZ\",\"Kazakhstan\",null,74.44,51.52],[620,35,\"KZ\",\"Kazakhstan\",null,76.7,51.52],[625,35,\"KZ\",\"Kazakhstan\",null,78.95,51.52],[630,35,\"RU\",\"Russia\",null,81.21,51.52],[635,35,\"RU\",\"Russia\",null,83.47,51.52],[640,35,\"RU\",\"Russia\",null,85.72,51.52],[645,35,\"RU\",\"Russia\",null,87.98,51.52],[650,35,\"RU\",\"Russia\",null,90.23,51.52],[655,35,\"RU\",\"Russia\",null,92.49,51.52],[660,35,\"RU\",\"Russia\",null,94.74,51.52],[665,35,\"RU\",\"Russia\",null,97.0,51.52],[670,35,\"MN\",\"Mongolia\",null,99.26,51.52],[675,35,\"RU\",\"Russia\",null,101.51,51.52],[680,35,\"RU\",\"Russia\",null,103.77,51.52],[685,35,\"RU\",\"Russia\",null,106.02,51.52],[690,35,\"RU\",\"Russia\",null,108.28,51.52],[695,35,\"RU\",\"Russia\",null,110.54,51.52],[700,35,\"RU\",\"Russia\",null,112.79,51.52],[705,35,\"RU\",\"Russia\",null,115.05,51.52],[710,35,\"RU\",\"Russia\",null,117.3,51.52],[715,35,\"RU\",\"Russia\",null,119.56,51.52],[720,35,\"CN\",\"China\",null,121.81,51.52],[725,35,\"CN\",\"China\",null,124.07,51.52],[730,35,\"CN\",\"China\",null,126.33,51.52],[735,35,\"RU\",\"Russia\",null,128.58,51.52],[740,35,\"RU\",\"Russia\",null,130.84,51.52],[745,35,\"RU\",\"Russia\",null,133.09,51.52],[750,35,\"RU\",\"Russia\",null,135.35,51.52],[755,35,\"RU\",\"Russia\",null,137.61,51.52],[760,35,\"RU\",\"Russia\",null,139.86,51.52],[765,35,\"RU\",\"Russia\",null,142.12,51.52],[170,40,\"CA\",\"Canada\",null,-124.99,49.76],[175,40,\"CA\",\"Canada\",null,-122.76,49.76],[180,40,\"CA\",\"Canada\",null,-120.53,49.76],[185,40,\"CA\",\"Canada\",null,-118.3,49.76],[190,40,\"CA\",\"Canada\",null,-116.07,49.76],[195,40,\"CA\",\"Canada\",null,-113.83,49.76],[200,40,\"CA\",\"Canada\",null,-111.6,49.76],[205,40,\"CA\",\"Canada\",null,-109.37,49.76],[210,40,\"CA\",\"Canada\",null,-107.14,49.76],[215,40,\"CA\",\"Canada\",null,-104.91,49.76],[220,40,\"CA\",\"Canada\",null,-102.67,49.76],[225,40,\"CA\",\"Canada\",null,-100.44,49.76],[230,40,\"CA\",\"Canada\",null,-98.21,49.76],[235,40,\"CA\",\"Canada\",null,-95.98,49.76],[240,40,\"CA\",\"Canada\",null,-93.75,49.76],[245,40,\"CA\",\"Canada\",null,-91.51,49.76],[250,40,\"CA\",\"Canada\",null,-89.28,49.76],[255,40,\"CA\",\"Canada\",null,-87.05,49.76],[260,40,\"CA\",\"Canada\",null,-84.82,49.76],[265,40,\"CA\",\"Canada\",null,-82.59,49.76],[270,40,\"CA\",\"Canada\",null,-80.35,49.76],[275,40,\"CA\",\"Canada\",null,-78.12,49.76],[280,40,\"CA\",\"Canada\",null,-75.89,49.76],[285,40,\"CA\",\"Canada\",null,-73.66,49.76],[290,40,\"CA\",\"Canada\",null,-71.43,49.76],[295,40,\"CA\",\"Canada\",null,-69.19,49.76],[455,40,\"-99\",\"France\",null,2.23,49.76],[460,40,\"-99\",\"France\",null,4.46,49.76],[465,40,\"DE\",\"Germany\",null,6.7,49.76],[470,40,\"DE\",\"Germany\",null,8.93,49.76],[475,40,\"DE\",\"Germany\",null,11.16,49.76],[480,40,\"CZ\",\"Czechia\",null,13.39,49.76],[485,40,\"CZ\",\"Czechia\",null,15.62,49.76],[490,40,\"CZ\",\"Czechia\",null,17.86,49.76],[495,40,\"PL\",\"Poland\",null,20.09,49.76],[500,40,\"PL\",\"Poland\",null,22.32,49.76],[505,40,\"UA\",\"Ukraine\",null,24.55,49.76],[510,40,\"UA\",\"Ukraine\",null,26.78,49.76],[515,40,\"UA\",\"Ukraine\",null,29.02,49.76],[520,40,\"UA\",\"Ukraine\",null,31.25,49.76],[525,40,\"UA\",\"Ukraine\",null,33.48,49.76],[530,40,\"UA\",\"Ukraine\",null,35.71,49.76],[535,40,\"UA\",\"Ukraine\",null,37.94,49.76],[540,40,\"RU\",\"Russia\",null,40.18,49.76],[545,40,\"RU\",\"Russia\",null,42.41,49.76],[550,40,\"RU\",\"Russia\",null,44.64,49.76],[555,40,\"RU\",\"Russia\",null,46.87,49.76],[560,40,\"KZ\",\"Kazakhstan\",null,49.11,49.76],[565,40,\"KZ\",\"Kazakhstan\",null,51.34,49.76],[570,40,\"KZ\",\"Kazakhstan\",null,53.57,49.76],[575,40,\"KZ\",\"Kazakhstan\",null,55.8,49.76],[580,40,\"KZ\",\"Kazakhstan\",null,58.03,49.76],[585,40,\"KZ\",\"Kazakhstan\",null,60.27,49.76],[590,40,\"KZ\",\"Kazakhstan\",null,62.5,49.76],[595,40,\"KZ\",\"Kazakhstan\",null,64.73,49.76],[600,40,\"KZ\",\"Kazakhstan\",null,66.96,49.76],[605,40,\"KZ\",\"Kazakhstan\",null,69.19,49.76],[610,40,\"KZ\",\"Kazakhstan\",null,71.43,49.76],[615,40,\"KZ\",\"Kazakhstan\",null,73.66,49.76],[620,40,\"KZ\",\"Kazakhstan\",null,75.89,49.76],[625,40,\"KZ\",\"Kazakhstan\",null,78.12,49.76],[630,40,\"KZ\",\"Kazakhstan\",null,80.35,49.76],[635,40,\"KZ\",\"Kazakhstan\",null,82.59,49.76],[640,40,\"KZ\",\"Kazakhstan\",null,84.82,49.76],[645,40,\"RU\",\"Russia\",null,87.05,49.76],[650,40,\"RU\",\"Russia\",null,89.28,49.76],[655,40,\"MN\",\"Mongolia\",null,91.51,49.76],[660,40,\"MN\",\"Mongolia\",null,93.75,49.76],[665,40,\"MN\",\"Mongolia\",null,95.98,49.76],[670,40,\"MN\",\"Mongolia\",null,98.21,49.76],[675,40,\"MN\",\"Mongolia\",null,100.44,49.76],[680,40,\"MN\",\"Mongolia\",null,102.67,49.76],[685,40,\"MN\",\"Mongolia\",null,104.91,49.76],[690,40,\"MN\",\"Mongolia\",null,107.14,49.76],[695,40,\"RU\",\"Russia\",null,109.37,49.76],[700,40,\"RU\",\"Russia\",null,111.6,49.76],[705,40,\"MN\",\"Mongolia\",null,113.83,49.76],[710,40,\"MN\",\"Mongolia\",null,116.07,49.76],[715,40,\"RU\",\"Russia\",null,118.3,49.76],[720,40,\"CN\",\"China\",null,120.53,49.76],[725,40,\"CN\",\"China\",null,122.76,49.76],[730,40,\"CN\",\"China\",null,124.99,49.76],[735,40,\"CN\",\"China\",null,127.23,49.76],[740,40,\"RU\",\"Russia\",null,129.46,49.76],[745,40,\"RU\",\"Russia\",null,131.69,49.76],[750,40,\"RU\",\"Russia\",null,133.92,49.76],[755,40,\"RU\",\"Russia\",null,136.15,49.76],[760,40,\"RU\",\"Russia\",null,138.39,49.76],[770,40,\"RU\",\"Russia\",null,142.85,49.76],[170,45,\"US\",\"United States of America\",null,-123.75,48.02],[175,45,\"US\",\"United States of America\",null,-121.54,48.02],[180,45,\"US\",\"United States of America\",null,-119.33,48.02],[185,45,\"US\",\"United States of America\",null,-117.12,48.02],[190,45,\"US\",\"United States of America\",null,-114.91,48.02],[195,45,\"US\",\"United States of America\",null,-112.7,48.02],[200,45,\"US\",\"United States of America\",null,-110.49,48.02],[205,45,\"US\",\"United States of America\",null,-108.28,48.02],[210,45,\"US\",\"United States of America\",null,-106.07,48.02],[215,45,\"US\",\"United States of America\",null,-103.86,48.02],[220,45,\"US\",\"United States of America\",null,-101.65,48.02],[225,45,\"US\",\"United States of America\",null,-99.44,48.02],[230,45,\"US\",\"United States of America\",null,-97.23,48.02],[235,45,\"US\",\"United States of America\",null,-95.02,48.02],[240,45,\"US\",\"United States of America\",null,-92.81,48.02],[245,45,\"US\",\"United States of America\",null,-90.6,48.02],[250,45,\"US\",\"United States of America\",null,-88.39,48.02],[255,45,\"CA\",\"Canada\",null,-86.18,48.02],[260,45,\"CA\",\"Canada\",null,-83.97,48.02],[265,45,\"CA\",\"Canada\",null,-81.76,48.02],[270,45,\"CA\",\"Canada\",null,-79.55,48.02],[275,45,\"CA\",\"Canada\",null,-77.34,48.02],[280,45,\"CA\",\"Canada\",null,-75.13,48.02],[285,45,\"CA\",\"Canada\",null,-72.92,48.02],[290,45,\"CA\",\"Canada\",null,-70.71,48.02],[295,45,\"CA\",\"Canada\",null,-68.5,48.02],[320,45,\"CA\",\"Canada\",null,-57.45,48.02],[325,45,\"CA\",\"Canada\",null,-55.24,48.02],[330,45,\"CA\",\"Canada\",null,-53.04,48.02],[440,45,\"-99\",\"France\",null,-4.42,48.02],[445,45,\"-99\",\"France\",null,-2.21,48.02],[450,45,\"-99\",\"France\",null,0,48.02],[455,45,\"-99\",\"France\",null,2.21,48.02],[460,45,\"-99\",\"France\",null,4.42,48.02],[465,45,\"-99\",\"France\",null,6.63,48.02],[470,45,\"DE\",\"Germany\",null,8.84,48.02],[475,45,\"DE\",\"Germany\",null,11.05,48.02],[480,45,\"AT\",\"Austria\",null,13.26,48.02],[485,45,\"AT\",\"Austria\",null,15.47,48.02],[490,45,\"SK\",\"Slovakia\",null,17.68,48.02],[495,45,\"HU\",\"Hungary\",null,19.89,48.02],[500,45,\"HU\",\"Hungary\",null,22.1,48.02],[505,45,\"UA\",\"Ukraine\",null,24.31,48.02],[510,45,\"RO\",\"Romania\",null,26.52,48.02],[515,45,\"MD\",\"Moldova\",null,28.73,48.02],[520,45,\"UA\",\"Ukraine\",null,30.94,48.02],[525,45,\"UA\",\"Ukraine\",null,33.15,48.02],[530,45,\"UA\",\"Ukraine\",null,35.36,48.02],[535,45,\"UA\",\"Ukraine\",null,37.57,48.02],[540,45,\"RU\",\"Russia\",null,39.78,48.02],[545,45,\"RU\",\"Russia\",null,41.99,48.02],[550,45,\"RU\",\"Russia\",null,44.2,48.02],[555,45,\"RU\",\"Russia\",null,46.41,48.02],[560,45,\"KZ\",\"Kazakhstan\",null,48.62,48.02],[565,45,\"KZ\",\"Kazakhstan\",null,50.83,48.02],[570,45,\"KZ\",\"Kazakhstan\",null,53.04,48.02],[575,45,\"KZ\",\"Kazakhstan\",null,55.24,48.02],[580,45,\"KZ\",\"Kazakhstan\",null,57.45,48.02],[585,45,\"KZ\",\"Kazakhstan\",null,59.66,48.02],[590,45,\"KZ\",\"Kazakhstan\",null,61.87,48.02],[595,45,\"KZ\",\"Kazakhstan\",null,64.08,48.02],[600,45,\"KZ\",\"Kazakhstan\",null,66.29,48.02],[605,45,\"KZ\",\"Kazakhstan\",null,68.5,48.02],[610,45,\"KZ\",\"Kazakhstan\",null,70.71,48.02],[615,45,\"KZ\",\"Kazakhstan\",null,72.92,48.02],[620,45,\"KZ\",\"Kazakhstan\",null,75.13,48.02],[625,45,\"KZ\",\"Kazakhstan\",null,77.34,48.02],[630,45,\"KZ\",\"Kazakhstan\",null,79.55,48.02],[635,45,\"KZ\",\"Kazakhstan\",null,81.76,48.02],[640,45,\"KZ\",\"Kazakhstan\",null,83.97,48.02],[645,45,\"CN\",\"China\",null,86.18,48.02],[650,45,\"CN\",\"China\",null,88.39,48.02],[655,45,\"MN\",\"Mongolia\",null,90.6,48.02],[660,45,\"MN\",\"Mongolia\",null,92.81,48.02],[665,45,\"MN\",\"Mongolia\",null,95.02,48.02],[670,45,\"MN\",\"Mongolia\",null,97.23,48.02],[675,45,\"MN\",\"Mongolia\",null,99.44,48.02],[680,45,\"MN\",\"Mongolia\",null,101.65,48.02],[685,45,\"MN\",\"Mongolia\",null,103.86,48.02],[690,45,\"MN\",\"Mongolia\",null,106.07,48.02],[695,45,\"MN\",\"Mongolia\",null,108.28,48.02],[700,45,\"MN\",\"Mongolia\",null,110.49,48.02],[705,45,\"MN\",\"Mongolia\",null,112.7,48.02],[710,45,\"MN\",\"Mongolia\",null,114.91,48.02],[715,45,\"CN\",\"China\",null,117.12,48.02],[720,45,\"CN\",\"China\",null,119.33,48.02],[725,45,\"CN\",\"China\",null,121.54,48.02],[730,45,\"CN\",\"China\",null,123.75,48.02],[735,45,\"CN\",\"China\",null,125.96,48.02],[740,45,\"CN\",\"China\",null,128.17,48.02],[745,45,\"CN\",\"China\",null,130.38,48.02],[750,45,\"RU\",\"Russia\",null,132.59,48.02],[755,45,\"RU\",\"Russia\",null,134.8,48.02],[760,45,\"RU\",\"Russia\",null,137.01,48.02],[765,45,\"RU\",\"Russia\",null,139.22,48.02],[170,50,\"US\",\"United States of America\",null,-122.58,46.3],[175,50,\"US\",\"United States of America\",null,-120.39,46.3],[180,50,\"US\",\"United States of America\",null,-118.2,46.3],[185,50,\"US\",\"United States of America\",null,-116.02,46.3],[190,50,\"US\",\"United States of America\",null,-113.83,46.3],[195,50,\"US\",\"United States of America\",null,-111.64,46.3],[200,50,\"US\",\"United States of America\",null,-109.45,46.3],[205,50,\"US\",\"United States of America\",null,-107.26,46.3],[210,50,\"US\",\"United States of America\",null,-105.07,46.3],[215,50,\"US\",\"United States of America\",null,-102.88,46.3],[220,50,\"US\",\"United States of America\",null,-100.69,46.3],[225,50,\"US\",\"United States of America\",null,-98.5,46.3],[230,50,\"US\",\"United States of America\",null,-96.32,46.3],[235,50,\"US\",\"United States of America\",null,-94.13,46.3],[240,50,\"US\",\"United States of America\",null,-91.94,46.3],[245,50,\"US\",\"United States of America\",null,-89.75,46.3],[250,50,\"US\",\"United States of America\",null,-87.56,46.3],[255,50,\"US\",\"United States of America\",null,-85.37,46.3],[260,50,\"CA\",\"Canada\",null,-83.18,46.3],[265,50,\"CA\",\"Canada\",null,-80.99,46.3],[270,50,\"CA\",\"Canada\",null,-78.8,46.3],[275,50,\"CA\",\"Canada\",null,-76.61,46.3],[280,50,\"CA\",\"Canada\",null,-74.43,46.3],[285,50,\"CA\",\"Canada\",null,-72.24,46.3],[290,50,\"US\",\"United States of America\",null,-70.05,46.3],[295,50,\"US\",\"United States of America\",null,-67.86,46.3],[300,50,\"CA\",\"Canada\",null,-65.67,46.3],[305,50,\"CA\",\"Canada\",null,-63.48,46.3],[450,50,\"-99\",\"France\",null,0,46.3],[455,50,\"-99\",\"France\",null,2.19,46.3],[460,50,\"-99\",\"France\",null,4.38,46.3],[465,50,\"-99\",\"France\",null,6.57,46.3],[470,50,\"CH\",\"Switzerland\",null,8.76,46.3],[475,50,\"IT\",\"Italy\",null,10.94,46.3],[480,50,\"IT\",\"Italy\",null,13.13,46.3],[485,50,\"SI\",\"Slovenia\",null,15.32,46.3],[490,50,\"HU\",\"Hungary\",null,17.51,46.3],[495,50,\"HU\",\"Hungary\",null,19.7,46.3],[500,50,\"RO\",\"Romania\",null,21.89,46.3],[505,50,\"RO\",\"Romania\",null,24.08,46.3],[510,50,\"RO\",\"Romania\",null,26.27,46.3],[515,50,\"MD\",\"Moldova\",null,28.46,46.3],[520,50,\"UA\",\"Ukraine\",null,30.65,46.3],[525,50,\"UA\",\"Ukraine\",null,32.83,46.3],[530,50,\"UA\",\"Ukraine\",null,35.02,46.3],[540,50,\"RU\",\"Russia\",null,39.4,46.3],[545,50,\"RU\",\"Russia\",null,41.59,46.3],[550,50,\"RU\",\"Russia\",null,43.78,46.3],[555,50,\"RU\",\"Russia\",null,45.97,46.3],[560,50,\"RU\",\"Russia\",null,48.16,46.3],[575,50,\"KZ\",\"Kazakhstan\",null,54.72,46.3],[580,50,\"KZ\",\"Kazakhstan\",null,56.91,46.3],[585,50,\"KZ\",\"Kazakhstan\",null,59.1,46.3],[590,50,\"KZ\",\"Kazakhstan\",null,61.29,46.3],[595,50,\"-99\",\"Baykonur Cosmodrome\",null,63.48,46.3],[600,50,\"KZ\",\"Kazakhstan\",null,65.67,46.3],[605,50,\"KZ\",\"Kazakhstan\",null,67.86,46.3],[610,50,\"KZ\",\"Kazakhstan\",null,70.05,46.3],[615,50,\"KZ\",\"Kazakhstan\",null,72.24,46.3],[620,50,\"KZ\",\"Kazakhstan\",null,74.43,46.3],[625,50,\"KZ\",\"Kazakhstan\",null,76.61,46.3],[630,50,\"KZ\",\"Kazakhstan\",null,78.8,46.3],[635,50,\"KZ\",\"Kazakhstan\",null,80.99,46.3],[640,50,\"CN\",\"China\",null,83.18,46.3],[645,50,\"CN\",\"China\",null,85.37,46.3],[650,50,\"CN\",\"China\",null,87.56,46.3],[655,50,\"CN\",\"China\",null,89.75,46.3],[660,50,\"MN\",\"Mongolia\",null,91.94,46.3],[665,50,\"MN\",\"Mongolia\",null,94.13,46.3],[670,50,\"MN\",\"Mongolia\",null,96.32,46.3],[675,50,\"MN\",\"Mongolia\",null,98.5,46.3],[680,50,\"MN\",\"Mongolia\",null,100.69,46.3],[685,50,\"MN\",\"Mongolia\",null,102.88,46.3],[690,50,\"MN\",\"Mongolia\",null,105.07,46.3],[695,50,\"MN\",\"Mongolia\",null,107.26,46.3],[700,50,\"MN\",\"Mongolia\",null,109.45,46.3],[705,50,\"MN\",\"Mongolia\",null,111.64,46.3],[710,50,\"MN\",\"Mongolia\",null,113.83,46.3],[715,50,\"MN\",\"Mongolia\",null,116.02,46.3],[720,50,\"CN\",\"China\",null,118.2,46.3],[725,50,\"CN\",\"China\",null,120.39,46.3],[730,50,\"CN\",\"China\",null,122.58,46.3],[735,50,\"CN\",\"China\",null,124.77,46.3],[740,50,\"CN\",\"China\",null,126.96,46.3],[745,50,\"CN\",\"China\",null,129.15,46.3],[750,50,\"CN\",\"China\",null,131.34,46.3],[755,50,\"CN\",\"China\",null,133.53,46.3],[760,50,\"RU\",\"Russia\",null,135.72,46.3],[765,50,\"RU\",\"Russia\",null,137.91,46.3],[165,55,\"US\",\"United States of America\",null,-123.66,44.58],[170,55,\"US\",\"United States of America\",null,-121.49,44.58],[175,55,\"US\",\"United States of America\",null,-119.32,44.58],[180,55,\"US\",\"United States of America\",null,-117.15,44.58],[185,55,\"US\",\"United States of America\",null,-114.98,44.58],[190,55,\"US\",\"United States of America\",null,-112.81,44.58],[195,55,\"US\",\"United States of America\",null,-110.64,44.58],[200,55,\"US\",\"United States of America\",null,-108.47,44.58],[205,55,\"US\",\"United States of America\",null,-106.31,44.58],[210,55,\"US\",\"United States of America\",null,-104.14,44.58],[215,55,\"US\",\"United States of America\",null,-101.97,44.58],[220,55,\"US\",\"United States of America\",null,-99.8,44.58],[225,55,\"US\",\"United States of America\",null,-97.63,44.58],[230,55,\"US\",\"United States of America\",null,-95.46,44.58],[235,55,\"US\",\"United States of America\",null,-93.29,44.58],[240,55,\"US\",\"United States of America\",null,-91.12,44.58],[245,55,\"US\",\"United States of America\",null,-88.95,44.58],[250,55,\"US\",\"United States of America\",null,-86.78,44.58],[255,55,\"US\",\"United States of America\",null,-84.61,44.58],[260,55,\"US\",\"United States of America\",null,-82.44,44.58],[265,55,\"CA\",\"Canada\",null,-80.27,44.58],[270,55,\"CA\",\"Canada\",null,-78.1,44.58],[275,55,\"CA\",\"Canada\",null,-75.93,44.58],[280,55,\"US\",\"United States of America\",null,-73.76,44.58],[285,55,\"US\",\"United States of America\",null,-71.59,44.58],[290,55,\"US\",\"United States of America\",null,-69.42,44.58],[300,55,\"CA\",\"Canada\",null,-65.08,44.58],[450,55,\"-99\",\"France\",null,0,44.58],[455,55,\"-99\",\"France\",null,2.17,44.58],[460,55,\"-99\",\"France\",null,4.34,44.58],[465,55,\"-99\",\"France\",null,6.51,44.58],[470,55,\"IT\",\"Italy\",null,8.68,44.58],[475,55,\"IT\",\"Italy\",null,10.85,44.58],[485,55,\"HR\",\"Croatia\",null,15.19,44.58],[490,55,\"BA\",\"Bosnia and Herzegovina\",null,17.36,44.58],[495,55,\"RS\",\"Republic of Serbia\",null,19.53,44.58],[500,55,\"RS\",\"Republic of Serbia\",null,21.69,44.58],[505,55,\"RO\",\"Romania\",null,23.86,44.58],[510,55,\"RO\",\"Romania\",null,26.03,44.58],[515,55,\"RO\",\"Romania\",null,28.2,44.58],[540,55,\"RU\",\"Russia\",null,39.05,44.58],[545,55,\"RU\",\"Russia\",null,41.22,44.58],[550,55,\"RU\",\"Russia\",null,43.39,44.58],[555,55,\"RU\",\"Russia\",null,45.56,44.58],[570,55,\"KZ\",\"Kazakhstan\",null,52.07,44.58],[575,55,\"KZ\",\"Kazakhstan\",null,54.24,44.58],[580,55,\"UZ\",\"Uzbekistan\",null,56.41,44.58],[585,55,\"UZ\",\"Uzbekistan\",null,58.58,44.58],[590,55,\"KZ\",\"Kazakhstan\",null,60.75,44.58],[595,55,\"KZ\",\"Kazakhstan\",null,62.92,44.58],[600,55,\"KZ\",\"Kazakhstan\",null,65.08,44.58],[605,55,\"KZ\",\"Kazakhstan\",null,67.25,44.58],[610,55,\"KZ\",\"Kazakhstan\",null,69.42,44.58],[615,55,\"KZ\",\"Kazakhstan\",null,71.59,44.58],[620,55,\"KZ\",\"Kazakhstan\",null,73.76,44.58],[625,55,\"KZ\",\"Kazakhstan\",null,75.93,44.58],[630,55,\"KZ\",\"Kazakhstan\",null,78.1,44.58],[635,55,\"KZ\",\"Kazakhstan\",null,80.27,44.58],[640,55,\"CN\",\"China\",null,82.44,44.58],[645,55,\"CN\",\"China\",null,84.61,44.58],[650,55,\"CN\",\"China\",null,86.78,44.58],[655,55,\"CN\",\"China\",null,88.95,44.58],[660,55,\"CN\",\"China\",null,91.12,44.58],[665,55,\"CN\",\"China\",null,93.29,44.58],[670,55,\"MN\",\"Mongolia\",null,95.46,44.58],[675,55,\"MN\",\"Mongolia\",null,97.63,44.58],[680,55,\"MN\",\"Mongolia\",null,99.8,44.58],[685,55,\"MN\",\"Mongolia\",null,101.97,44.58],[690,55,\"MN\",\"Mongolia\",null,104.14,44.58],[695,55,\"MN\",\"Mongolia\",null,106.31,44.58],[700,55,\"MN\",\"Mongolia\",null,108.47,44.58],[705,55,\"MN\",\"Mongolia\",null,110.64,44.58],[710,55,\"CN\",\"China\",null,112.81,44.58],[715,55,\"CN\",\"China\",null,114.98,44.58],[720,55,\"CN\",\"China\",null,117.15,44.58],[725,55,\"CN\",\"China\",null,119.32,44.58],[730,55,\"CN\",\"China\",null,121.49,44.58],[735,55,\"CN\",\"China\",null,123.66,44.58],[740,55,\"CN\",\"China\",null,125.83,44.58],[745,55,\"CN\",\"China\",null,128.0,44.58],[750,55,\"CN\",\"China\",null,130.17,44.58],[755,55,\"RU\",\"Russia\",null,132.34,44.58],[760,55,\"RU\",\"Russia\",null,134.51,44.58],[165,60,\"US\",\"United States of America\",null,-122.62,42.87],[170,60,\"US\",\"United States of America\",null,-120.47,42.87],[175,60,\"US\",\"United States of America\",null,-118.32,42.87],[180,60,\"US\",\"United States of America\",null,-116.17,42.87],[185,60,\"US\",\"United States of America\",null,-114.02,42.87],[190,60,\"US\",\"United States of America\",null,-111.87,42.87],[195,60,\"US\",\"United States of America\",null,-109.71,42.87],[200,60,\"US\",\"United States of America\",null,-107.56,42.87],[205,60,\"US\",\"United States of America\",null,-105.41,42.87],[210,60,\"US\",\"United States of America\",null,-103.26,42.87],[215,60,\"US\",\"United States of America\",null,-101.11,42.87],[220,60,\"US\",\"United States of America\",null,-98.96,42.87],[225,60,\"US\",\"United States of America\",null,-96.81,42.87],[230,60,\"US\",\"United States of America\",null,-94.66,42.87],[235,60,\"US\",\"United States of America\",null,-92.5,42.87],[240,60,\"US\",\"United States of America\",null,-90.35,42.87],[245,60,\"US\",\"United States of America\",null,-88.2,42.87],[250,60,\"US\",\"United States of America\",null,-86.05,42.87],[255,60,\"US\",\"United States of America\",null,-83.9,42.87],[260,60,\"CA\",\"Canada\",null,-81.75,42.87],[265,60,\"CA\",\"Canada\",null,-79.6,42.87],[270,60,\"US\",\"United States of America\",null,-77.45,42.87],[275,60,\"US\",\"United States of America\",null,-75.29,42.87],[280,60,\"US\",\"United States of America\",null,-73.14,42.87],[285,60,\"US\",\"United States of America\",null,-70.99,42.87],[430,60,\"ES\",\"Spain\",null,-8.61,42.87],[435,60,\"ES\",\"Spain\",null,-6.45,42.87],[440,60,\"ES\",\"Spain\",null,-4.3,42.87],[445,60,\"ES\",\"Spain\",null,-2.15,42.87],[450,60,\"-99\",\"France\",null,0,42.87],[455,60,\"-99\",\"France\",null,2.15,42.87],[480,60,\"IT\",\"Italy\",null,12.91,42.87],[495,60,\"ME\",\"Montenegro\",null,19.36,42.87],[500,60,\"RS\",\"Republic of Serbia\",null,21.51,42.87],[505,60,\"BG\",\"Bulgaria\",null,23.66,42.87],[510,60,\"BG\",\"Bulgaria\",null,25.82,42.87],[550,60,\"GE\",\"Georgia\",null,43.03,42.87],[555,60,\"RU\",\"Russia\",null,45.18,42.87],[560,60,\"RU\",\"Russia\",null,47.33,42.87],[575,60,\"KZ\",\"Kazakhstan\",null,53.78,42.87],[580,60,\"KZ\",\"Kazakhstan\",null,55.93,42.87],[585,60,\"UZ\",\"Uzbekistan\",null,58.08,42.87],[590,60,\"UZ\",\"Uzbekistan\",null,60.24,42.87],[595,60,\"UZ\",\"Uzbekistan\",null,62.39,42.87],[600,60,\"UZ\",\"Uzbekistan\",null,64.54,42.87],[605,60,\"KZ\",\"Kazakhstan\",null,66.69,42.87],[610,60,\"KZ\",\"Kazakhstan\",null,68.84,42.87],[615,60,\"KZ\",\"Kazakhstan\",null,70.99,42.87],[620,60,\"KZ\",\"Kazakhstan\",null,73.14,42.87],[625,60,\"KZ\",\"Kazakhstan\",null,75.29,42.87],[630,60,\"KG\",\"Kyrgyzstan\",null,77.45,42.87],[635,60,\"KZ\",\"Kazakhstan\",null,79.6,42.87],[640,60,\"CN\",\"China\",null,81.75,42.87],[645,60,\"CN\",\"China\",null,83.9,42.87],[650,60,\"CN\",\"China\",null,86.05,42.87],[655,60,\"CN\",\"China\",null,88.2,42.87],[660,60,\"CN\",\"China\",null,90.35,42.87],[665,60,\"CN\",\"China\",null,92.5,42.87],[670,60,\"CN\",\"China\",null,94.66,42.87],[675,60,\"MN\",\"Mongolia\",null,96.81,42.87],[680,60,\"MN\",\"Mongolia\",null,98.96,42.87],[685,60,\"MN\",\"Mongolia\",null,101.11,42.87],[690,60,\"MN\",\"Mongolia\",null,103.26,42.87],[695,60,\"MN\",\"Mongolia\",null,105.41,42.87],[700,60,\"MN\",\"Mongolia\",null,107.56,42.87],[705,60,\"MN\",\"Mongolia\",null,109.71,42.87],[710,60,\"CN\",\"China\",null,111.87,42.87],[715,60,\"CN\",\"China\",null,114.02,42.87],[720,60,\"CN\",\"China\",null,116.17,42.87],[725,60,\"CN\",\"China\",null,118.32,42.87],[730,60,\"CN\",\"China\",null,120.47,42.87],[735,60,\"CN\",\"China\",null,122.62,42.87],[740,60,\"CN\",\"China\",null,124.77,42.87],[745,60,\"CN\",\"China\",null,126.92,42.87],[750,60,\"CN\",\"China\",null,129.08,42.87],[755,60,\"RU\",\"Russia\",null,131.23,42.87],[760,60,\"RU\",\"Russia\",null,133.38,42.87],[780,60,\"JP\",\"Japan\",null,141.98,42.87],[160,65,\"US\",\"United States of America\",null,-123.78,41.17],[165,65,\"US\",\"United States of America\",null,-121.65,41.17],[170,65,\"US\",\"United States of America\",null,-119.51,41.17],[175,65,\"US\",\"United States of America\",null,-117.38,41.17],[180,65,\"US\",\"United States of America\",null,-115.25,41.17],[185,65,\"US\",\"United States of America\",null,-113.11,41.17],[190,65,\"US\",\"United States of America\",null,-110.98,41.17],[195,65,\"US\",\"United States of America\",null,-108.84,41.17],[200,65,\"US\",\"United States of America\",null,-106.71,41.17],[205,65,\"US\",\"United States of America\",null,-104.57,41.17],[210,65,\"US\",\"United States of America\",null,-102.44,41.17],[215,65,\"US\",\"United States of America\",null,-100.31,41.17],[220,65,\"US\",\"United States of America\",null,-98.17,41.17],[225,65,\"US\",\"United States of America\",null,-96.04,41.17],[230,65,\"US\",\"United States of America\",null,-93.9,41.17],[235,65,\"US\",\"United States of America\",null,-91.77,41.17],[240,65,\"US\",\"United States of America\",null,-89.64,41.17],[245,65,\"US\",\"United States of America\",null,-87.5,41.17],[250,65,\"US\",\"United States of America\",null,-85.37,41.17],[255,65,\"US\",\"United States of America\",null,-83.23,41.17],[260,65,\"US\",\"United States of America\",null,-81.1,41.17],[265,65,\"US\",\"United States of America\",null,-78.96,41.17],[270,65,\"US\",\"United States of America\",null,-76.83,41.17],[275,65,\"US\",\"United States of America\",null,-74.7,41.17],[430,65,\"PT\",\"Portugal\",null,-8.54,41.17],[435,65,\"ES\",\"Spain\",null,-6.4,41.17],[440,65,\"ES\",\"Spain\",null,-4.27,41.17],[445,65,\"ES\",\"Spain\",null,-2.13,41.17],[450,65,\"ES\",\"Spain\",null,0,41.17],[485,65,\"IT\",\"Italy\",null,14.94,41.17],[500,65,\"MK\",\"North Macedonia\",null,21.34,41.17],[505,65,\"GR\",\"Greece\",null,23.48,41.17],[510,65,\"GR\",\"Greece\",null,25.61,41.17],[515,65,\"TR\",\"Turkey\",null,27.74,41.17],[525,65,\"TR\",\"Turkey\",null,32.01,41.17],[530,65,\"TR\",\"Turkey\",null,34.15,41.17],[535,65,\"TR\",\"Turkey\",null,36.28,41.17],[550,65,\"TR\",\"Turkey\",null,42.68,41.17],[555,65,\"AM\",\"Armenia\",null,44.82,41.17],[560,65,\"AZ\",\"Azerbaijan\",null,46.95,41.17],[565,65,\"AZ\",\"Azerbaijan\",null,49.09,41.17],[580,65,\"TM\",\"Turkmenistan\",null,55.49,41.17],[585,65,\"TM\",\"Turkmenistan\",null,57.62,41.17],[590,65,\"TM\",\"Turkmenistan\",null,59.76,41.17],[595,65,\"UZ\",\"Uzbekistan\",null,61.89,41.17],[600,65,\"UZ\",\"Uzbekistan\",null,64.03,41.17],[605,65,\"UZ\",\"Uzbekistan\",null,66.16,41.17],[610,65,\"KZ\",\"Kazakhstan\",null,68.29,41.17],[615,65,\"UZ\",\"Uzbekistan\",null,70.43,41.17],[620,65,\"KG\",\"Kyrgyzstan\",null,72.56,41.17],[625,65,\"KG\",\"Kyrgyzstan\",null,74.7,41.17],[630,65,\"KG\",\"Kyrgyzstan\",null,76.83,41.17],[635,65,\"CN\",\"China\",null,78.96,41.17],[640,65,\"CN\",\"China\",null,81.1,41.17],[645,65,\"CN\",\"China\",null,83.23,41.17],[650,65,\"CN\",\"China\",null,85.37,41.17],[655,65,\"CN\",\"China\",null,87.5,41.17],[660,65,\"CN\",\"China\",null,89.64,41.17],[665,65,\"CN\",\"China\",null,91.77,41.17],[670,65,\"CN\",\"China\",null,93.9,41.17],[675,65,\"CN\",\"China\",null,96.04,41.17],[680,65,\"CN\",\"China\",null,98.17,41.17],[685,65,\"CN\",\"China\",null,100.31,41.17],[690,65,\"CN\",\"China\",null,102.44,41.17],[695,65,\"CN\",\"China\",null,104.57,41.17],[700,65,\"CN\",\"China\",null,106.71,41.17],[705,65,\"CN\",\"China\",null,108.84,41.17],[710,65,\"CN\",\"China\",null,110.98,41.17],[715,65,\"CN\",\"China\",null,113.11,41.17],[720,65,\"CN\",\"China\",null,115.25,41.17],[725,65,\"CN\",\"China\",null,117.38,41.17],[730,65,\"CN\",\"China\",null,119.51,41.17],[735,65,\"CN\",\"China\",null,121.65,41.17],[740,65,\"CN\",\"China\",null,123.78,41.17],[745,65,\"CN\",\"China\",null,125.92,41.17],[750,65,\"KP\",\"North Korea\",null,128.05,41.17],[780,65,\"JP\",\"Japan\",null,140.86,41.17],[160,70,\"US\",\"United States of America\",null,-122.86,39.47],[165,70,\"US\",\"United States of America\",null,-120.74,39.47],[170,70,\"US\",\"United States of America\",null,-118.62,39.47],[175,70,\"US\",\"United States of America\",null,-116.5,39.47],[180,70,\"US\",\"United States of America\",null,-114.38,39.47],[185,70,\"US\",\"United States of America\",null,-112.26,39.47],[190,70,\"US\",\"United States of America\",null,-110.15,39.47],[195,70,\"US\",\"United States of America\",null,-108.03,39.47],[200,70,\"US\",\"United States of America\",null,-105.91,39.47],[205,70,\"US\",\"United States of America\",null,-103.79,39.47],[210,70,\"US\",\"United States of America\",null,-101.67,39.47],[215,70,\"US\",\"United States of America\",null,-99.56,39.47],[220,70,\"US\",\"United States of America\",null,-97.44,39.47],[225,70,\"US\",\"United States of America\",null,-95.32,39.47],[230,70,\"US\",\"United States of America\",null,-93.2,39.47],[235,70,\"US\",\"United States of America\",null,-91.08,39.47],[240,70,\"US\",\"United States of America\",null,-88.96,39.47],[245,70,\"US\",\"United States of America\",null,-86.85,39.47],[250,70,\"US\",\"United States of America\",null,-84.73,39.47],[255,70,\"US\",\"United States of America\",null,-82.61,39.47],[260,70,\"US\",\"United States of America\",null,-80.49,39.47],[265,70,\"US\",\"United States of America\",null,-78.37,39.47],[270,70,\"US\",\"United States of America\",null,-76.25,39.47],[430,70,\"PT\",\"Portugal\",null,-8.47,39.47],[435,70,\"ES\",\"Spain\",null,-6.35,39.47],[440,70,\"ES\",\"Spain\",null,-4.24,39.47],[445,70,\"ES\",\"Spain\",null,-2.12,39.47],[470,70,\"IT\",\"Italy\",null,8.47,39.47],[490,70,\"IT\",\"Italy\",null,16.95,39.47],[500,70,\"GR\",\"Greece\",null,21.18,39.47],[515,70,\"TR\",\"Turkey\",null,27.54,39.47],[520,70,\"TR\",\"Turkey\",null,29.65,39.47],[525,70,\"TR\",\"Turkey\",null,31.77,39.47],[530,70,\"TR\",\"Turkey\",null,33.89,39.47],[535,70,\"TR\",\"Turkey\",null,36.01,39.47],[540,70,\"TR\",\"Turkey\",null,38.13,39.47],[545,70,\"TR\",\"Turkey\",null,40.25,39.47],[550,70,\"TR\",\"Turkey\",null,42.36,39.47],[555,70,\"IR\",\"Iran\",null,44.48,39.47],[560,70,\"AZ\",\"Azerbaijan\",null,46.6,39.47],[565,70,\"AZ\",\"Azerbaijan\",null,48.72,39.47],[580,70,\"TM\",\"Turkmenistan\",null,55.07,39.47],[585,70,\"TM\",\"Turkmenistan\",null,57.19,39.47],[590,70,\"TM\",\"Turkmenistan\",null,59.31,39.47],[595,70,\"TM\",\"Turkmenistan\",null,61.43,39.47],[600,70,\"UZ\",\"Uzbekistan\",null,63.55,39.47],[605,70,\"UZ\",\"Uzbekistan\",null,65.66,39.47],[610,70,\"TJ\",\"Tajikistan\",null,67.78,39.47],[615,70,\"TJ\",\"Tajikistan\",null,69.9,39.47],[620,70,\"KG\",\"Kyrgyzstan\",null,72.02,39.47],[625,70,\"CN\",\"China\",null,74.14,39.47],[630,70,\"CN\",\"China\",null,76.25,39.47],[635,70,\"CN\",\"China\",null,78.37,39.47],[640,70,\"CN\",\"China\",null,80.49,39.47],[645,70,\"CN\",\"China\",null,82.61,39.47],[650,70,\"CN\",\"China\",null,84.73,39.47],[655,70,\"CN\",\"China\",null,86.85,39.47],[660,70,\"CN\",\"China\",null,88.96,39.47],[665,70,\"CN\",\"China\",null,91.08,39.47],[670,70,\"CN\",\"China\",null,93.2,39.47],[675,70,\"CN\",\"China\",null,95.32,39.47],[680,70,\"CN\",\"China\",null,97.44,39.47],[685,70,\"CN\",\"China\",null,99.56,39.47],[690,70,\"CN\",\"China\",null,101.67,39.47],[695,70,\"CN\",\"China\",null,103.79,39.47],[700,70,\"CN\",\"China\",null,105.91,39.47],[705,70,\"CN\",\"China\",null,108.03,39.47],[710,70,\"CN\",\"China\",null,110.15,39.47],[715,70,\"CN\",\"China\",null,112.26,39.47],[720,70,\"CN\",\"China\",null,114.38,39.47],[725,70,\"CN\",\"China\",null,116.5,39.47],[730,70,\"CN\",\"China\",null,118.62,39.47],[750,70,\"KP\",\"North Korea\",null,127.09,39.47],[785,70,\"JP\",\"Japan\",null,141.92,39.47],[160,75,\"US\",\"United States of America\",null,-121.99,37.78],[165,75,\"US\",\"United States of America\",null,-119.88,37.78],[170,75,\"US\",\"United States of America\",null,-117.78,37.78],[175,75,\"US\",\"United States of America\",null,-115.68,37.78],[180,75,\"US\",\"United States of America\",null,-113.57,37.78],[185,75,\"US\",\"United States of America\",null,-111.47,37.78],[190,75,\"US\",\"United States of America\",null,-109.37,37.78],[195,75,\"US\",\"United States of America\",null,-107.27,37.78],[200,75,\"US\",\"United States of America\",null,-105.16,37.78],[205,75,\"US\",\"United States of America\",null,-103.06,37.78],[210,75,\"US\",\"United States of America\",null,-100.96,37.78],[215,75,\"US\",\"United States of America\",null,-98.85,37.78],[220,75,\"US\",\"United States of America\",null,-96.75,37.78],[225,75,\"US\",\"United States of America\",null,-94.65,37.78],[230,75,\"US\",\"United States of America\",null,-92.54,37.78],[235,75,\"US\",\"United States of America\",null,-90.44,37.78],[240,75,\"US\",\"United States of America\",null,-88.34,37.78],[245,75,\"US\",\"United States of America\",null,-86.23,37.78],[250,75,\"US\",\"United States of America\",null,-84.13,37.78],[255,75,\"US\",\"United States of America\",null,-82.03,37.78],[260,75,\"US\",\"United States of America\",null,-79.92,37.78],[265,75,\"US\",\"United States of America\",null,-77.82,37.78],[270,75,\"US\",\"United States of America\",null,-75.72,37.78],[390,75,\"PT\",\"Portugal\",null,-25.24,37.78],[430,75,\"PT\",\"Portugal\",null,-8.41,37.78],[435,75,\"ES\",\"Spain\",null,-6.31,37.78],[440,75,\"ES\",\"Spain\",null,-4.21,37.78],[445,75,\"ES\",\"Spain\",null,-2.1,37.78],[480,75,\"IT\",\"Italy\",null,12.62,37.78],[485,75,\"IT\",\"Italy\",null,14.72,37.78],[505,75,\"GR\",\"Greece\",null,23.14,37.78],[515,75,\"TR\",\"Turkey\",null,27.34,37.78],[520,75,\"TR\",\"Turkey\",null,29.45,37.78],[525,75,\"TR\",\"Turkey\",null,31.55,37.78],[530,75,\"TR\",\"Turkey\",null,33.65,37.78],[535,75,\"TR\",\"Turkey\",null,35.76,37.78],[540,75,\"TR\",\"Turkey\",null,37.86,37.78],[545,75,\"TR\",\"Turkey\",null,39.96,37.78],[550,75,\"TR\",\"Turkey\",null,42.06,37.78],[555,75,\"TR\",\"Turkey\",null,44.17,37.78],[560,75,\"IR\",\"Iran\",null,46.27,37.78],[565,75,\"IR\",\"Iran\",null,48.37,37.78],[580,75,\"TM\",\"Turkmenistan\",null,54.68,37.78],[585,75,\"IR\",\"Iran\",null,56.79,37.78],[590,75,\"TM\",\"Turkmenistan\",null,58.89,37.78],[595,75,\"TM\",\"Turkmenistan\",null,60.99,37.78],[600,75,\"TM\",\"Turkmenistan\",null,63.1,37.78],[605,75,\"TM\",\"Turkmenistan\",null,65.2,37.78],[610,75,\"UZ\",\"Uzbekistan\",null,67.3,37.78],[615,75,\"TJ\",\"Tajikistan\",null,69.41,37.78],[620,75,\"AF\",\"Afghanistan\",null,71.51,37.78],[625,75,\"TJ\",\"Tajikistan\",null,73.61,37.78],[630,75,\"CN\",\"China\",null,75.72,37.78],[635,75,\"CN\",\"China\",null,77.82,37.78],[640,75,\"CN\",\"China\",null,79.92,37.78],[645,75,\"CN\",\"China\",null,82.03,37.78],[650,75,\"CN\",\"China\",null,84.13,37.78],[655,75,\"CN\",\"China\",null,86.23,37.78],[660,75,\"CN\",\"China\",null,88.34,37.78],[665,75,\"CN\",\"China\",null,90.44,37.78],[670,75,\"CN\",\"China\",null,92.54,37.78],[675,75,\"CN\",\"China\",null,94.65,37.78],[680,75,\"CN\",\"China\",null,96.75,37.78],[685,75,\"CN\",\"China\",null,98.85,37.78],[690,75,\"CN\",\"China\",null,100.96,37.78],[695,75,\"CN\",\"China\",null,103.06,37.78],[700,75,\"CN\",\"China\",null,105.16,37.78],[705,75,\"CN\",\"China\",null,107.27,37.78],[710,75,\"CN\",\"China\",null,109.37,37.78],[715,75,\"CN\",\"China\",null,111.47,37.78],[720,75,\"CN\",\"China\",null,113.57,37.78],[725,75,\"CN\",\"China\",null,115.68,37.78],[730,75,\"CN\",\"China\",null,117.78,37.78],[755,75,\"KR\",\"South Korea\",null,128.3,37.78],[785,75,\"JP\",\"Japan\",null,140.92,37.78],[160,80,\"US\",\"United States of America\",null,-121.18,36.09],[165,80,\"US\",\"United States of America\",null,-119.09,36.09],[170,80,\"US\",\"United States of America\",null,-117.0,36.09],[175,80,\"US\",\"United States of America\",null,-114.91,36.09],[180,80,\"US\",\"United States of America\",null,-112.82,36.09],[185,80,\"US\",\"United States of America\",null,-110.73,36.09],[190,80,\"US\",\"United States of America\",null,-108.64,36.09],[195,80,\"US\",\"United States of America\",null,-106.55,36.09],[200,80,\"US\",\"United States of America\",null,-104.46,36.09],[205,80,\"US\",\"United States of America\",null,-102.37,36.09],[210,80,\"US\",\"United States of America\",null,-100.28,36.09],[215,80,\"US\",\"United States of America\",null,-98.19,36.09],[220,80,\"US\",\"United States of America\",null,-96.11,36.09],[225,80,\"US\",\"United States of America\",null,-94.02,36.09],[230,80,\"US\",\"United States of America\",null,-91.93,36.09],[235,80,\"US\",\"United States of America\",null,-89.84,36.09],[240,80,\"US\",\"United States of America\",null,-87.75,36.09],[245,80,\"US\",\"United States of America\",null,-85.66,36.09],[250,80,\"US\",\"United States of America\",null,-83.57,36.09],[255,80,\"US\",\"United States of America\",null,-81.48,36.09],[260,80,\"US\",\"United States of America\",null,-79.39,36.09],[265,80,\"US\",\"United States of America\",null,-77.3,36.09],[455,80,\"DZ\",\"Algeria\",null,2.09,36.09],[460,80,\"DZ\",\"Algeria\",null,4.18,36.09],[465,80,\"DZ\",\"Algeria\",null,6.27,36.09],[470,80,\"TN\",\"Tunisia\",null,8.36,36.09],[475,80,\"TN\",\"Tunisia\",null,10.45,36.09],[540,80,\"SY\",\"Syria\",null,37.61,36.09],[545,80,\"SY\",\"Syria\",null,39.7,36.09],[550,80,\"IQ\",\"Iraq\",null,41.79,36.09],[555,80,\"IQ\",\"Iraq\",null,43.87,36.09],[560,80,\"IR\",\"Iran\",null,45.96,36.09],[565,80,\"IR\",\"Iran\",null,48.05,36.09],[570,80,\"IR\",\"Iran\",null,50.14,36.09],[575,80,\"IR\",\"Iran\",null,52.23,36.09],[580,80,\"IR\",\"Iran\",null,54.32,36.09],[585,80,\"IR\",\"Iran\",null,56.41,36.09],[590,80,\"IR\",\"Iran\",null,58.5,36.09],[595,80,\"IR\",\"Iran\",null,60.59,36.09],[600,80,\"TM\",\"Turkmenistan\",null,62.68,36.09],[605,80,\"AF\",\"Afghanistan\",null,64.77,36.09],[610,80,\"AF\",\"Afghanistan\",null,66.86,36.09],[615,80,\"AF\",\"Afghanistan\",null,68.95,36.09],[620,80,\"AF\",\"Afghanistan\",null,71.03,36.09],[625,80,\"PK\",\"Pakistan\",null,73.12,36.09],[630,80,\"PK\",\"Pakistan\",null,75.21,36.09],[635,80,\"CN\",\"China\",null,77.3,36.09],[640,80,\"CN\",\"China\",null,79.39,36.09],[645,80,\"CN\",\"China\",null,81.48,36.09],[650,80,\"CN\",\"China\",null,83.57,36.09],[655,80,\"CN\",\"China\",null,85.66,36.09],[660,80,\"CN\",\"China\",null,87.75,36.09],[665,80,\"CN\",\"China\",null,89.84,36.09],[670,80,\"CN\",\"China\",null,91.93,36.09],[675,80,\"CN\",\"China\",null,94.02,36.09],[680,80,\"CN\",\"China\",null,96.11,36.09],[685,80,\"CN\",\"China\",null,98.19,36.09],[690,80,\"CN\",\"China\",null,100.28,36.09],[695,80,\"CN\",\"China\",null,102.37,36.09],[700,80,\"CN\",\"China\",null,104.46,36.09],[705,80,\"CN\",\"China\",null,106.55,36.09],[710,80,\"CN\",\"China\",null,108.64,36.09],[715,80,\"CN\",\"China\",null,110.73,36.09],[720,80,\"CN\",\"China\",null,112.82,36.09],[725,80,\"CN\",\"China\",null,114.91,36.09],[730,80,\"CN\",\"China\",null,117.0,36.09],[735,80,\"CN\",\"China\",null,119.09,36.09],[755,80,\"KR\",\"South Korea\",null,127.44,36.09],[780,80,\"JP\",\"Japan\",null,137.89,36.09],[785,80,\"JP\",\"Japan\",null,139.98,36.09],[165,85,\"US\",\"United States of America\",null,-118.34,34.41],[170,85,\"US\",\"United States of America\",null,-116.27,34.41],[175,85,\"US\",\"United States of America\",null,-114.19,34.41],[180,85,\"US\",\"United States of America\",null,-112.11,34.41],[185,85,\"US\",\"United States of America\",null,-110.04,34.41],[190,85,\"US\",\"United States of America\",null,-107.96,34.41],[195,85,\"US\",\"United States of America\",null,-105.88,34.41],[200,85,\"US\",\"United States of America\",null,-103.81,34.41],[205,85,\"US\",\"United States of America\",null,-101.73,34.41],[210,85,\"US\",\"United States of America\",null,-99.66,34.41],[215,85,\"US\",\"United States of America\",null,-97.58,34.41],[220,85,\"US\",\"United States of America\",null,-95.5,34.41],[225,85,\"US\",\"United States of America\",null,-93.43,34.41],[230,85,\"US\",\"United States of America\",null,-91.35,34.41],[235,85,\"US\",\"United States of America\",null,-89.28,34.41],[240,85,\"US\",\"United States of America\",null,-87.2,34.41],[245,85,\"US\",\"United States of America\",null,-85.12,34.41],[250,85,\"US\",\"United States of America\",null,-83.05,34.41],[255,85,\"US\",\"United States of America\",null,-80.97,34.41],[260,85,\"US\",\"United States of America\",null,-78.89,34.41],[435,85,\"MA\",\"Morocco\",null,-6.23,34.41],[440,85,\"MA\",\"Morocco\",null,-4.15,34.41],[445,85,\"MA\",\"Morocco\",null,-2.08,34.41],[450,85,\"DZ\",\"Algeria\",null,0,34.41],[455,85,\"DZ\",\"Algeria\",null,2.08,34.41],[460,85,\"DZ\",\"Algeria\",null,4.15,34.41],[465,85,\"DZ\",\"Algeria\",null,6.23,34.41],[470,85,\"TN\",\"Tunisia\",null,8.3,34.41],[540,85,\"SY\",\"Syria\",null,37.37,34.41],[545,85,\"SY\",\"Syria\",null,39.45,34.41],[550,85,\"IQ\",\"Iraq\",null,41.52,34.41],[555,85,\"IQ\",\"Iraq\",null,43.6,34.41],[560,85,\"IR\",\"Iran\",null,45.68,34.41],[565,85,\"IR\",\"Iran\",null,47.75,34.41],[570,85,\"IR\",\"Iran\",null,49.83,34.41],[575,85,\"IR\",\"Iran\",null,51.9,34.41],[580,85,\"IR\",\"Iran\",null,53.98,34.41],[585,85,\"IR\",\"Iran\",null,56.06,34.41],[590,85,\"IR\",\"Iran\",null,58.13,34.41],[595,85,\"IR\",\"Iran\",null,60.21,34.41],[600,85,\"AF\",\"Afghanistan\",null,62.29,34.41],[605,85,\"AF\",\"Afghanistan\",null,64.36,34.41],[610,85,\"AF\",\"Afghanistan\",null,66.44,34.41],[615,85,\"AF\",\"Afghanistan\",null,68.51,34.41],[620,85,\"AF\",\"Afghanistan\",null,70.59,34.41],[625,85,\"PK\",\"Pakistan\",null,72.67,34.41],[630,85,\"IN\",\"India\",\"Jammu and Kashmir\",74.74,34.41],[635,85,\"IN\",\"India\",\"Jammu and Kashmir\",76.82,34.41],[640,85,\"CN\",\"China\",null,78.89,34.41],[645,85,\"CN\",\"China\",null,80.97,34.41],[650,85,\"CN\",\"China\",null,83.05,34.41],[655,85,\"CN\",\"China\",null,85.12,34.41],[660,85,\"CN\",\"China\",null,87.2,34.41],[665,85,\"CN\",\"China\",null,89.28,34.41],[670,85,\"CN\",\"China\",null,91.35,34.41],[675,85,\"CN\",\"China\",null,93.43,34.41],[680,85,\"CN\",\"China\",null,95.5,34.41],[685,85,\"CN\",\"China\",null,97.58,34.41],[690,85,\"CN\",\"China\",null,99.66,34.41],[695,85,\"CN\",\"China\",null,101.73,34.41],[700,85,\"CN\",\"China\",null,103.81,34.41],[705,85,\"CN\",\"China\",null,105.88,34.41],[710,85,\"CN\",\"China\",null,107.96,34.41],[715,85,\"CN\",\"China\",null,110.04,34.41],[720,85,\"CN\",\"China\",null,112.11,34.41],[725,85,\"CN\",\"China\",null,114.19,34.41],[730,85,\"CN\",\"China\",null,116.27,34.41],[735,85,\"CN\",\"China\",null,118.34,34.41],[755,85,\"KR\",\"South Korea\",null,126.65,34.41],[770,85,\"JP\",\"Japan\",null,132.88,34.41],[170,90,\"US\",\"United States of America\",null,-115.58,32.72],[175,90,\"US\",\"United States of America\",null,-113.52,32.72],[180,90,\"US\",\"United States of America\",null,-111.45,32.72],[185,90,\"US\",\"United States of America\",null,-109.39,32.72],[190,90,\"US\",\"United States of America\",null,-107.33,32.72],[195,90,\"US\",\"United States of America\",null,-105.26,32.72],[200,90,\"US\",\"United States of America\",null,-103.2,32.72],[205,90,\"US\",\"United States of America\",null,-101.13,32.72],[210,90,\"US\",\"United States of America\",null,-99.07,32.72],[215,90,\"US\",\"United States of America\",null,-97.01,32.72],[220,90,\"US\",\"United States of America\",null,-94.94,32.72],[225,90,\"US\",\"United States of America\",null,-92.88,32.72],[230,90,\"US\",\"United States of America\",null,-90.81,32.72],[235,90,\"US\",\"United States of America\",null,-88.75,32.72],[240,90,\"US\",\"United States of America\",null,-86.69,32.72],[245,90,\"US\",\"United States of America\",null,-84.62,32.72],[250,90,\"US\",\"United States of America\",null,-82.56,32.72],[255,90,\"US\",\"United States of America\",null,-80.49,32.72],[430,90,\"MA\",\"Morocco\",null,-8.26,32.72],[435,90,\"MA\",\"Morocco\",null,-6.19,32.72],[440,90,\"MA\",\"Morocco\",null,-4.13,32.72],[445,90,\"MA\",\"Morocco\",null,-2.06,32.72],[450,90,\"DZ\",\"Algeria\",null,0,32.72],[455,90,\"DZ\",\"Algeria\",null,2.06,32.72],[460,90,\"DZ\",\"Algeria\",null,4.13,32.72],[465,90,\"DZ\",\"Algeria\",null,6.19,32.72],[470,90,\"DZ\",\"Algeria\",null,8.26,32.72],[475,90,\"TN\",\"Tunisia\",null,10.32,32.72],[480,90,\"LY\",\"Libya\",null,12.38,32.72],[505,90,\"LY\",\"Libya\",null,22.7,32.72],[535,90,\"IL\",\"Israel\",null,35.09,32.72],[540,90,\"SY\",\"Syria\",null,37.15,32.72],[545,90,\"IQ\",\"Iraq\",null,39.22,32.72],[550,90,\"IQ\",\"Iraq\",null,41.28,32.72],[555,90,\"IQ\",\"Iraq\",null,43.34,32.72],[560,90,\"IQ\",\"Iraq\",null,45.41,32.72],[565,90,\"IR\",\"Iran\",null,47.47,32.72],[570,90,\"IR\",\"Iran\",null,49.54,32.72],[575,90,\"IR\",\"Iran\",null,51.6,32.72],[580,90,\"IR\",\"Iran\",null,53.66,32.72],[585,90,\"IR\",\"Iran\",null,55.73,32.72],[590,90,\"IR\",\"Iran\",null,57.79,32.72],[595,90,\"IR\",\"Iran\",null,59.85,32.72],[600,90,\"AF\",\"Afghanistan\",null,61.92,32.72],[605,90,\"AF\",\"Afghanistan\",null,63.98,32.72],[610,90,\"AF\",\"Afghanistan\",null,66.05,32.72],[615,90,\"AF\",\"Afghanistan\",null,68.11,32.72],[620,90,\"PK\",\"Pakistan\",null,70.17,32.72],[625,90,\"PK\",\"Pakistan\",null,72.24,32.72],[630,90,\"PK\",\"Pakistan\",null,74.3,32.72],[635,90,\"IN\",\"India\",\"Himachal Pradesh\",76.37,32.72],[640,90,\"IN\",\"India\",\"Jammu and Kashmir\",78.43,32.72],[645,90,\"CN\",\"China\",null,80.49,32.72],[650,90,\"CN\",\"China\",null,82.56,32.72],[655,90,\"CN\",\"China\",null,84.62,32.72],[660,90,\"CN\",\"China\",null,86.69,32.72],[665,90,\"CN\",\"China\",null,88.75,32.72],[670,90,\"CN\",\"China\",null,90.81,32.72],[675,90,\"CN\",\"China\",null,92.88,32.72],[680,90,\"CN\",\"China\",null,94.94,32.72],[685,90,\"CN\",\"China\",null,97.01,32.72],[690,90,\"CN\",\"China\",null,99.07,32.72],[695,90,\"CN\",\"China\",null,101.13,32.72],[700,90,\"CN\",\"China\",null,103.2,32.72],[705,90,\"CN\",\"China\",null,105.26,32.72],[710,90,\"CN\",\"China\",null,107.33,32.72],[715,90,\"CN\",\"China\",null,109.39,32.72],[720,90,\"CN\",\"China\",null,111.45,32.72],[725,90,\"CN\",\"China\",null,113.52,32.72],[730,90,\"CN\",\"China\",null,115.58,32.72],[735,90,\"CN\",\"China\",null,117.65,32.72],[740,90,\"CN\",\"China\",null,119.71,32.72],[170,95,\"MX\",\"Mexico\",null,-114.94,31.04],[175,95,\"MX\",\"Mexico\",null,-112.89,31.04],[180,95,\"MX\",\"Mexico\",null,-110.84,31.04],[185,95,\"MX\",\"Mexico\",null,-108.79,31.04],[190,95,\"MX\",\"Mexico\",null,-106.73,31.04],[195,95,\"US\",\"United States of America\",null,-104.68,31.04],[200,95,\"US\",\"United States of America\",null,-102.63,31.04],[205,95,\"US\",\"United States of America\",null,-100.58,31.04],[210,95,\"US\",\"United States of America\",null,-98.52,31.04],[215,95,\"US\",\"United States of America\",null,-96.47,31.04],[220,95,\"US\",\"United States of America\",null,-94.42,31.04],[225,95,\"US\",\"United States of America\",null,-92.37,31.04],[230,95,\"US\",\"United States of America\",null,-90.31,31.04],[235,95,\"US\",\"United States of America\",null,-88.26,31.04],[240,95,\"US\",\"United States of America\",null,-86.21,31.04],[245,95,\"US\",\"United States of America\",null,-84.16,31.04],[250,95,\"US\",\"United States of America\",null,-82.1,31.04],[430,95,\"MA\",\"Morocco\",null,-8.21,31.04],[435,95,\"MA\",\"Morocco\",null,-6.16,31.04],[440,95,\"MA\",\"Morocco\",null,-4.11,31.04],[445,95,\"DZ\",\"Algeria\",null,-2.05,31.04],[450,95,\"DZ\",\"Algeria\",null,0,31.04],[455,95,\"DZ\",\"Algeria\",null,2.05,31.04],[460,95,\"DZ\",\"Algeria\",null,4.11,31.04],[465,95,\"DZ\",\"Algeria\",null,6.16,31.04],[470,95,\"DZ\",\"Algeria\",null,8.21,31.04],[475,95,\"LY\",\"Libya\",null,10.26,31.04],[480,95,\"LY\",\"Libya\",null,12.32,31.04],[485,95,\"LY\",\"Libya\",null,14.37,31.04],[490,95,\"LY\",\"Libya\",null,16.42,31.04],[500,95,\"LY\",\"Libya\",null,20.53,31.04],[505,95,\"LY\",\"Libya\",null,22.58,31.04],[510,95,\"LY\",\"Libya\",null,24.63,31.04],[515,95,\"EG\",\"Egypt\",null,26.68,31.04],[525,95,\"EG\",\"Egypt\",null,30.79,31.04],[530,95,\"EG\",\"Egypt\",null,32.84,31.04],[535,95,\"IL\",\"Israel\",null,34.89,31.04],[540,95,\"JO\",\"Jordan\",null,36.95,31.04],[545,95,\"SA\",\"Saudi Arabia\",null,39.0,31.04],[550,95,\"SA\",\"Saudi Arabia\",null,41.05,31.04],[555,95,\"IQ\",\"Iraq\",null,43.1,31.04],[560,95,\"IQ\",\"Iraq\",null,45.16,31.04],[565,95,\"IQ\",\"Iraq\",null,47.21,31.04],[570,95,\"IR\",\"Iran\",null,49.26,31.04],[575,95,\"IR\",\"Iran\",null,51.31,31.04],[580,95,\"IR\",\"Iran\",null,53.37,31.04],[585,95,\"IR\",\"Iran\",null,55.42,31.04],[590,95,\"IR\",\"Iran\",null,57.47,31.04],[595,95,\"IR\",\"Iran\",null,59.52,31.04],[600,95,\"IR\",\"Iran\",null,61.58,31.04],[605,95,\"AF\",\"Afghanistan\",null,63.63,31.04],[610,95,\"AF\",\"Afghanistan\",null,65.68,31.04],[615,95,\"PK\",\"Pakistan\",null,67.73,31.04],[620,95,\"PK\",\"Pakistan\",null,69.79,31.04],[625,95,\"PK\",\"Pakistan\",null,71.84,31.04],[630,95,\"PK\",\"Pakistan\",null,73.89,31.04],[635,95,\"IN\",\"India\",\"Punjab\",75.95,31.04],[640,95,\"IN\",\"India\",\"Uttaranchal\",78.0,31.04],[645,95,\"CN\",\"China\",null,80.05,31.04],[650,95,\"CN\",\"China\",null,82.1,31.04],[655,95,\"CN\",\"China\",null,84.16,31.04],[660,95,\"CN\",\"China\",null,86.21,31.04],[665,95,\"CN\",\"China\",null,88.26,31.04],[670,95,\"CN\",\"China\",null,90.31,31.04],[675,95,\"CN\",\"China\",null,92.37,31.04],[680,95,\"CN\",\"China\",null,94.42,31.04],[685,95,\"CN\",\"China\",null,96.47,31.04],[690,95,\"CN\",\"China\",null,98.52,31.04],[695,95,\"CN\",\"China\",null,100.58,31.04],[700,95,\"CN\",\"China\",null,102.63,31.04],[705,95,\"CN\",\"China\",null,104.68,31.04],[710,95,\"CN\",\"China\",null,106.73,31.04],[715,95,\"CN\",\"China\",null,108.79,31.04],[720,95,\"CN\",\"China\",null,110.84,31.04],[725,95,\"CN\",\"China\",null,112.89,31.04],[730,95,\"CN\",\"China\",null,114.94,31.04],[735,95,\"CN\",\"China\",null,117.0,31.04],[740,95,\"CN\",\"China\",null,119.05,31.04],[745,95,\"CN\",\"China\",null,121.1,31.04],[170,100,\"MX\",\"Mexico\",null,-114.35,29.36],[175,100,\"MX\",\"Mexico\",null,-112.31,29.36],[180,100,\"MX\",\"Mexico\",null,-110.27,29.36],[185,100,\"MX\",\"Mexico\",null,-108.22,29.36],[190,100,\"MX\",\"Mexico\",null,-106.18,29.36],[195,100,\"MX\",\"Mexico\",null,-104.14,29.36],[200,100,\"MX\",\"Mexico\",null,-102.1,29.36],[205,100,\"US\",\"United States of America\",null,-100.06,29.36],[210,100,\"US\",\"United States of America\",null,-98.01,29.36],[215,100,\"US\",\"United States of America\",null,-95.97,29.36],[250,100,\"US\",\"United States of America\",null,-81.68,29.36],[430,100,\"MA\",\"Morocco\",null,-8.17,29.36],[435,100,\"DZ\",\"Algeria\",null,-6.13,29.36],[440,100,\"DZ\",\"Algeria\",null,-4.08,29.36],[445,100,\"DZ\",\"Algeria\",null,-2.04,29.36],[450,100,\"DZ\",\"Algeria\",null,0,29.36],[455,100,\"DZ\",\"Algeria\",null,2.04,29.36],[460,100,\"DZ\",\"Algeria\",null,4.08,29.36],[465,100,\"DZ\",\"Algeria\",null,6.13,29.36],[470,100,\"DZ\",\"Algeria\",null,8.17,29.36],[475,100,\"LY\",\"Libya\",null,10.21,29.36],[480,100,\"LY\",\"Libya\",null,12.25,29.36],[485,100,\"LY\",\"Libya\",null,14.29,29.36],[490,100,\"LY\",\"Libya\",null,16.34,29.36],[495,100,\"LY\",\"Libya\",null,18.38,29.36],[500,100,\"LY\",\"Libya\",null,20.42,29.36],[505,100,\"LY\",\"Libya\",null,22.46,29.36],[510,100,\"LY\",\"Libya\",null,24.5,29.36],[515,100,\"EG\",\"Egypt\",null,26.55,29.36],[520,100,\"EG\",\"Egypt\",null,28.59,29.36],[525,100,\"EG\",\"Egypt\",null,30.63,29.36],[535,100,\"EG\",\"Egypt\",null,34.71,29.36],[540,100,\"SA\",\"Saudi Arabia\",null,36.76,29.36],[545,100,\"SA\",\"Saudi Arabia\",null,38.8,29.36],[550,100,\"SA\",\"Saudi Arabia\",null,40.84,29.36],[555,100,\"SA\",\"Saudi Arabia\",null,42.88,29.36],[560,100,\"IQ\",\"Iraq\",null,44.92,29.36],[565,100,\"KW\",\"Kuwait\",null,46.97,29.36],[575,100,\"IR\",\"Iran\",null,51.05,29.36],[580,100,\"IR\",\"Iran\",null,53.09,29.36],[585,100,\"IR\",\"Iran\",null,55.13,29.36],[590,100,\"IR\",\"Iran\",null,57.18,29.36],[595,100,\"IR\",\"Iran\",null,59.22,29.36],[600,100,\"IR\",\"Iran\",null,61.26,29.36],[605,100,\"PK\",\"Pakistan\",null,63.3,29.36],[610,100,\"PK\",\"Pakistan\",null,65.34,29.36],[615,100,\"PK\",\"Pakistan\",null,67.38,29.36],[620,100,\"PK\",\"Pakistan\",null,69.43,29.36],[625,100,\"PK\",\"Pakistan\",null,71.47,29.36],[630,100,\"IN\",\"India\",\"Rajasthan\",73.51,29.36],[635,100,\"IN\",\"India\",\"Haryana\",75.55,29.36],[640,100,\"IN\",\"India\",\"Uttar Pradesh\",77.59,29.36],[645,100,\"IN\",\"India\",\"Uttaranchal\",79.64,29.36],[650,100,\"NP\",\"Nepal\",null,81.68,29.36],[655,100,\"CN\",\"China\",null,83.72,29.36],[660,100,\"CN\",\"China\",null,85.76,29.36],[665,100,\"CN\",\"China\",null,87.8,29.36],[670,100,\"CN\",\"China\",null,89.85,29.36],[675,100,\"CN\",\"China\",null,91.89,29.36],[680,100,\"CN\",\"China\",null,93.93,29.36],[685,100,\"CN\",\"China\",null,95.97,29.36],[690,100,\"CN\",\"China\",null,98.01,29.36],[695,100,\"CN\",\"China\",null,100.06,29.36],[700,100,\"CN\",\"China\",null,102.1,29.36],[705,100,\"CN\",\"China\",null,104.14,29.36],[710,100,\"CN\",\"China\",null,106.18,29.36],[715,100,\"CN\",\"China\",null,108.22,29.36],[720,100,\"CN\",\"China\",null,110.27,29.36],[725,100,\"CN\",\"China\",null,112.31,29.36],[730,100,\"CN\",\"China\",null,114.35,29.36],[735,100,\"CN\",\"China\",null,116.39,29.36],[740,100,\"CN\",\"China\",null,118.43,29.36],[745,100,\"CN\",\"China\",null,120.48,29.36],[170,105,\"MX\",\"Mexico\",null,-113.8,27.68],[180,105,\"MX\",\"Mexico\",null,-109.73,27.68],[185,105,\"MX\",\"Mexico\",null,-107.7,27.68],[190,105,\"MX\",\"Mexico\",null,-105.67,27.68],[195,105,\"MX\",\"Mexico\",null,-103.64,27.68],[200,105,\"MX\",\"Mexico\",null,-101.61,27.68],[205,105,\"US\",\"United States of America\",null,-99.57,27.68],[210,105,\"US\",\"United States of America\",null,-97.54,27.68],[250,105,\"US\",\"United States of America\",null,-81.28,27.68],[420,105,\"MA\",\"Morocco\",null,-12.19,27.68],[425,105,\"MA\",\"Morocco\",null,-10.16,27.68],[430,105,\"DZ\",\"Algeria\",null,-8.13,27.68],[435,105,\"DZ\",\"Algeria\",null,-6.1,27.68],[440,105,\"DZ\",\"Algeria\",null,-4.06,27.68],[445,105,\"DZ\",\"Algeria\",null,-2.03,27.68],[450,105,\"DZ\",\"Algeria\",null,0,27.68],[455,105,\"DZ\",\"Algeria\",null,2.03,27.68],[460,105,\"DZ\",\"Algeria\",null,4.06,27.68],[465,105,\"DZ\",\"Algeria\",null,6.1,27.68],[470,105,\"DZ\",\"Algeria\",null,8.13,27.68],[475,105,\"LY\",\"Libya\",null,10.16,27.68],[480,105,\"LY\",\"Libya\",null,12.19,27.68],[485,105,\"LY\",\"Libya\",null,14.22,27.68],[490,105,\"LY\",\"Libya\",null,16.26,27.68],[495,105,\"LY\",\"Libya\",null,18.29,27.68],[500,105,\"LY\",\"Libya\",null,20.32,27.68],[505,105,\"LY\",\"Libya\",null,22.35,27.68],[510,105,\"LY\",\"Libya\",null,24.39,27.68],[515,105,\"EG\",\"Egypt\",null,26.42,27.68],[520,105,\"EG\",\"Egypt\",null,28.45,27.68],[525,105,\"EG\",\"Egypt\",null,30.48,27.68],[530,105,\"EG\",\"Egypt\",null,32.51,27.68],[540,105,\"SA\",\"Saudi Arabia\",null,36.58,27.68],[545,105,\"SA\",\"Saudi Arabia\",null,38.61,27.68],[550,105,\"SA\",\"Saudi Arabia\",null,40.64,27.68],[555,105,\"SA\",\"Saudi Arabia\",null,42.67,27.68],[560,105,\"SA\",\"Saudi Arabia\",null,44.71,27.68],[565,105,\"SA\",\"Saudi Arabia\",null,46.74,27.68],[570,105,\"SA\",\"Saudi Arabia\",null,48.77,27.68],[580,105,\"IR\",\"Iran\",null,52.83,27.68],[585,105,\"IR\",\"Iran\",null,54.87,27.68],[590,105,\"IR\",\"Iran\",null,56.9,27.68],[595,105,\"IR\",\"Iran\",null,58.93,27.68],[600,105,\"IR\",\"Iran\",null,60.96,27.68],[605,105,\"PK\",\"Pakistan\",null,63.0,27.68],[610,105,\"PK\",\"Pakistan\",null,65.03,27.68],[615,105,\"PK\",\"Pakistan\",null,67.06,27.68],[620,105,\"PK\",\"Pakistan\",null,69.09,27.68],[625,105,\"IN\",\"India\",\"Rajasthan\",71.12,27.68],[630,105,\"IN\",\"India\",\"Rajasthan\",73.16,27.68],[635,105,\"IN\",\"India\",\"Rajasthan\",75.19,27.68],[640,105,\"IN\",\"India\",\"Rajasthan\",77.22,27.68],[645,105,\"IN\",\"India\",\"Uttar Pradesh\",79.25,27.68],[650,105,\"IN\",\"India\",\"Uttar Pradesh\",81.28,27.68],[655,105,\"NP\",\"Nepal\",null,83.32,27.68],[660,105,\"NP\",\"Nepal\",null,85.35,27.68],[665,105,\"NP\",\"Nepal\",null,87.38,27.68],[670,105,\"BT\",\"Bhutan\",null,89.41,27.68],[675,105,\"BT\",\"Bhutan\",null,91.44,27.68],[680,105,\"IN\",\"India\",\"Arunachal Pradesh\",93.48,27.68],[685,105,\"IN\",\"India\",\"Assam\",95.51,27.68],[690,105,\"MM\",\"Myanmar\",null,97.54,27.68],[695,105,\"CN\",\"China\",null,99.57,27.68],[700,105,\"CN\",\"China\",null,101.61,27.68],[705,105,\"CN\",\"China\",null,103.64,27.68],[710,105,\"CN\",\"China\",null,105.67,27.68],[715,105,\"CN\",\"China\",null,107.7,27.68],[720,105,\"CN\",\"China\",null,109.73,27.68],[725,105,\"CN\",\"China\",null,111.77,27.68],[730,105,\"CN\",\"China\",null,113.8,27.68],[735,105,\"CN\",\"China\",null,115.83,27.68],[740,105,\"CN\",\"China\",null,117.86,27.68],[745,105,\"CN\",\"China\",null,119.89,27.68],[180,110,\"MX\",\"Mexico\",null,-109.24,26.0],[185,110,\"MX\",\"Mexico\",null,-107.22,26.0],[190,110,\"MX\",\"Mexico\",null,-105.19,26.0],[195,110,\"MX\",\"Mexico\",null,-103.17,26.0],[200,110,\"MX\",\"Mexico\",null,-101.15,26.0],[205,110,\"MX\",\"Mexico\",null,-99.13,26.0],[250,110,\"US\",\"United States of America\",null,-80.92,26.0],[415,110,\"MA\",\"Morocco\",null,-14.16,26.0],[420,110,\"MA\",\"Morocco\",null,-12.14,26.0],[425,110,\"EH\",\"Western Sahara\",null,-10.11,26.0],[430,110,\"MR\",\"Mauritania\",null,-8.09,26.0],[435,110,\"DZ\",\"Algeria\",null,-6.07,26.0],[440,110,\"DZ\",\"Algeria\",null,-4.05,26.0],[445,110,\"DZ\",\"Algeria\",null,-2.02,26.0],[450,110,\"DZ\",\"Algeria\",null,0,26.0],[455,110,\"DZ\",\"Algeria\",null,2.02,26.0],[460,110,\"DZ\",\"Algeria\",null,4.05,26.0],[465,110,\"DZ\",\"Algeria\",null,6.07,26.0],[470,110,\"DZ\",\"Algeria\",null,8.09,26.0],[475,110,\"LY\",\"Libya\",null,10.11,26.0],[480,110,\"LY\",\"Libya\",null,12.14,26.0],[485,110,\"LY\",\"Libya\",null,14.16,26.0],[490,110,\"LY\",\"Libya\",null,16.18,26.0],[495,110,\"LY\",\"Libya\",null,18.21,26.0],[500,110,\"LY\",\"Libya\",null,20.23,26.0],[505,110,\"LY\",\"Libya\",null,22.25,26.0],[510,110,\"LY\",\"Libya\",null,24.28,26.0],[515,110,\"EG\",\"Egypt\",null,26.3,26.0],[520,110,\"EG\",\"Egypt\",null,28.32,26.0],[525,110,\"EG\",\"Egypt\",null,30.34,26.0],[530,110,\"EG\",\"Egypt\",null,32.37,26.0],[545,110,\"SA\",\"Saudi Arabia\",null,38.44,26.0],[550,110,\"SA\",\"Saudi Arabia\",null,40.46,26.0],[555,110,\"SA\",\"Saudi Arabia\",null,42.48,26.0],[560,110,\"SA\",\"Saudi Arabia\",null,44.51,26.0],[565,110,\"SA\",\"Saudi Arabia\",null,46.53,26.0],[570,110,\"SA\",\"Saudi Arabia\",null,48.55,26.0],[575,110,\"BH\",\"Bahrain\",null,50.57,26.0],[595,110,\"IR\",\"Iran\",null,58.67,26.0],[600,110,\"IR\",\"Iran\",null,60.69,26.0],[605,110,\"PK\",\"Pakistan\",null,62.71,26.0],[610,110,\"PK\",\"Pakistan\",null,64.73,26.0],[615,110,\"PK\",\"Pakistan\",null,66.76,26.0],[620,110,\"PK\",\"Pakistan\",null,68.78,26.0],[625,110,\"IN\",\"India\",\"Rajasthan\",70.8,26.0],[630,110,\"IN\",\"India\",\"Rajasthan\",72.83,26.0],[635,110,\"IN\",\"India\",\"Rajasthan\",74.85,26.0],[640,110,\"IN\",\"India\",\"Madhya Pradesh\",76.87,26.0],[645,110,\"IN\",\"India\",\"Madhya Pradesh\",78.9,26.0],[650,110,\"IN\",\"India\",\"Uttar Pradesh\",80.92,26.0],[655,110,\"IN\",\"India\",\"Uttar Pradesh\",82.94,26.0],[660,110,\"IN\",\"India\",\"Bihar\",84.96,26.0],[665,110,\"IN\",\"India\",\"Bihar\",86.99,26.0],[670,110,\"BD\",\"Bangladesh\",null,89.01,26.0],[675,110,\"IN\",\"India\",\"Assam\",91.03,26.0],[680,110,\"IN\",\"India\",\"Assam\",93.06,26.0],[685,110,\"IN\",\"India\",\"Nagaland\",95.08,26.0],[690,110,\"MM\",\"Myanmar\",null,97.1,26.0],[695,110,\"CN\",\"China\",null,99.13,26.0],[700,110,\"CN\",\"China\",null,101.15,26.0],[705,110,\"CN\",\"China\",null,103.17,26.0],[710,110,\"CN\",\"China\",null,105.19,26.0],[715,110,\"CN\",\"China\",null,107.22,26.0],[720,110,\"CN\",\"China\",null,109.24,26.0],[725,110,\"CN\",\"China\",null,111.26,26.0],[730,110,\"CN\",\"China\",null,113.29,26.0],[735,110,\"CN\",\"China\",null,115.31,26.0],[740,110,\"CN\",\"China\",null,117.33,26.0],[745,110,\"CN\",\"China\",null,119.35,26.0],[175,115,\"MX\",\"Mexico\",null,-110.8,24.32],[185,115,\"MX\",\"Mexico\",null,-106.77,24.32],[190,115,\"MX\",\"Mexico\",null,-104.75,24.32],[195,115,\"MX\",\"Mexico\",null,-102.74,24.32],[200,115,\"MX\",\"Mexico\",null,-100.73,24.32],[205,115,\"MX\",\"Mexico\",null,-98.71,24.32],[415,115,\"MA\",\"Morocco\",null,-14.1,24.32],[420,115,\"EH\",\"Western Sahara\",null,-12.09,24.32],[425,115,\"MR\",\"Mauritania\",null,-10.07,24.32],[430,115,\"MR\",\"Mauritania\",null,-8.06,24.32],[435,115,\"ML\",\"Mali\",null,-6.04,24.32],[440,115,\"ML\",\"Mali\",null,-4.03,24.32],[445,115,\"DZ\",\"Algeria\",null,-2.01,24.32],[450,115,\"DZ\",\"Algeria\",null,0,24.32],[455,115,\"DZ\",\"Algeria\",null,2.01,24.32],[460,115,\"DZ\",\"Algeria\",null,4.03,24.32],[465,115,\"DZ\",\"Algeria\",null,6.04,24.32],[470,115,\"DZ\",\"Algeria\",null,8.06,24.32],[475,115,\"DZ\",\"Algeria\",null,10.07,24.32],[480,115,\"LY\",\"Libya\",null,12.09,24.32],[485,115,\"LY\",\"Libya\",null,14.1,24.32],[490,115,\"LY\",\"Libya\",null,16.12,24.32],[495,115,\"LY\",\"Libya\",null,18.13,24.32],[500,115,\"LY\",\"Libya\",null,20.15,24.32],[505,115,\"LY\",\"Libya\",null,22.16,24.32],[510,115,\"LY\",\"Libya\",null,24.17,24.32],[515,115,\"EG\",\"Egypt\",null,26.19,24.32],[520,115,\"EG\",\"Egypt\",null,28.2,24.32],[525,115,\"EG\",\"Egypt\",null,30.22,24.32],[530,115,\"EG\",\"Egypt\",null,32.23,24.32],[535,115,\"EG\",\"Egypt\",null,34.25,24.32],[545,115,\"SA\",\"Saudi Arabia\",null,38.28,24.32],[550,115,\"SA\",\"Saudi Arabia\",null,40.29,24.32],[555,115,\"SA\",\"Saudi Arabia\",null,42.3,24.32],[560,115,\"SA\",\"Saudi Arabia\",null,44.32,24.32],[565,115,\"SA\",\"Saudi Arabia\",null,46.33,24.32],[570,115,\"SA\",\"Saudi Arabia\",null,48.35,24.32],[575,115,\"SA\",\"Saudi Arabia\",null,50.36,24.32],[590,115,\"OM\",\"Oman\",null,56.41,24.32],[620,115,\"PK\",\"Pakistan\",null,68.49,24.32],[625,115,\"IN\",\"India\",\"Gujarat\",70.51,24.32],[630,115,\"IN\",\"India\",\"Gujarat\",72.52,24.32],[635,115,\"IN\",\"India\",\"Rajasthan\",74.54,24.32],[640,115,\"IN\",\"India\",\"Rajasthan\",76.55,24.32],[645,115,\"IN\",\"India\",\"Madhya Pradesh\",78.57,24.32],[650,115,\"IN\",\"India\",\"Madhya Pradesh\",80.58,24.32],[655,115,\"IN\",\"India\",\"Madhya Pradesh\",82.59,24.32],[660,115,\"IN\",\"India\",\"Jharkhand\",84.61,24.32],[665,115,\"IN\",\"India\",\"Jharkhand\",86.62,24.32],[670,115,\"BD\",\"Bangladesh\",null,88.64,24.32],[675,115,\"BD\",\"Bangladesh\",null,90.65,24.32],[680,115,\"IN\",\"India\",\"Mizoram\",92.67,24.32],[685,115,\"MM\",\"Myanmar\",null,94.68,24.32],[690,115,\"MM\",\"Myanmar\",null,96.7,24.32],[695,115,\"CN\",\"China\",null,98.71,24.32],[700,115,\"CN\",\"China\",null,100.73,24.32],[705,115,\"CN\",\"China\",null,102.74,24.32],[710,115,\"CN\",\"China\",null,104.75,24.32],[715,115,\"CN\",\"China\",null,106.77,24.32],[720,115,\"CN\",\"China\",null,108.78,24.32],[725,115,\"CN\",\"China\",null,110.8,24.32],[730,115,\"CN\",\"China\",null,112.81,24.32],[735,115,\"CN\",\"China\",null,114.83,24.32],[740,115,\"CN\",\"China\",null,116.84,24.32],[750,115,\"CN-TW\",\"Taiwan\",null,120.87,24.32],[190,120,\"MX\",\"Mexico\",null,-104.35,22.64],[195,120,\"MX\",\"Mexico\",null,-102.34,22.64],[200,120,\"MX\",\"Mexico\",null,-100.34,22.64],[205,120,\"MX\",\"Mexico\",null,-98.33,22.64],[250,120,\"CU\",\"Cuba\",null,-80.27,22.64],[410,120,\"MA\",\"Morocco\",null,-16.05,22.64],[415,120,\"EH\",\"Western Sahara\",null,-14.05,22.64],[420,120,\"MR\",\"Mauritania\",null,-12.04,22.64],[425,120,\"MR\",\"Mauritania\",null,-10.03,22.64],[430,120,\"MR\",\"Mauritania\",null,-8.03,22.64],[435,120,\"ML\",\"Mali\",null,-6.02,22.64],[440,120,\"ML\",\"Mali\",null,-4.01,22.64],[445,120,\"ML\",\"Mali\",null,-2.01,22.64],[450,120,\"DZ\",\"Algeria\",null,0,22.64],[455,120,\"DZ\",\"Algeria\",null,2.01,22.64],[460,120,\"DZ\",\"Algeria\",null,4.01,22.64],[465,120,\"DZ\",\"Algeria\",null,6.02,22.64],[470,120,\"DZ\",\"Algeria\",null,8.03,22.64],[475,120,\"DZ\",\"Algeria\",null,10.03,22.64],[480,120,\"NE\",\"Niger\",null,12.04,22.64],[485,120,\"NE\",\"Niger\",null,14.05,22.64],[490,120,\"TD\",\"Chad\",null,16.05,22.64],[495,120,\"LY\",\"Libya\",null,18.06,22.64],[500,120,\"LY\",\"Libya\",null,20.07,22.64],[505,120,\"LY\",\"Libya\",null,22.07,22.64],[510,120,\"LY\",\"Libya\",null,24.08,22.64],[515,120,\"EG\",\"Egypt\",null,26.09,22.64],[520,120,\"EG\",\"Egypt\",null,28.09,22.64],[525,120,\"EG\",\"Egypt\",null,30.1,22.64],[530,120,\"EG\",\"Egypt\",null,32.11,22.64],[535,120,\"EG\",\"Egypt\",null,34.11,22.64],[540,120,\"EG\",\"Egypt\",null,36.12,22.64],[550,120,\"SA\",\"Saudi Arabia\",null,40.13,22.64],[555,120,\"SA\",\"Saudi Arabia\",null,42.14,22.64],[560,120,\"SA\",\"Saudi Arabia\",null,44.15,22.64],[565,120,\"SA\",\"Saudi Arabia\",null,46.15,22.64],[570,120,\"SA\",\"Saudi Arabia\",null,48.16,22.64],[575,120,\"SA\",\"Saudi Arabia\",null,50.17,22.64],[580,120,\"SA\",\"Saudi Arabia\",null,52.17,22.64],[585,120,\"SA\",\"Saudi Arabia\",null,54.18,22.64],[590,120,\"OM\",\"Oman\",null,56.19,22.64],[595,120,\"OM\",\"Oman\",null,58.19,22.64],[625,120,\"IN\",\"India\",\"Gujarat\",70.23,22.64],[630,120,\"IN\",\"India\",\"Gujarat\",72.24,22.64],[635,120,\"IN\",\"India\",\"Gujarat\",74.25,22.64],[640,120,\"IN\",\"India\",\"Madhya Pradesh\",76.26,22.64],[645,120,\"IN\",\"India\",\"Madhya Pradesh\",78.26,22.64],[650,120,\"IN\",\"India\",\"Madhya Pradesh\",80.27,22.64],[655,120,\"IN\",\"India\",\"Chhattisgarh\",82.28,22.64],[660,120,\"IN\",\"India\",\"Jharkhand\",84.28,22.64],[665,120,\"IN\",\"India\",\"Jharkhand\",86.29,22.64],[670,120,\"IN\",\"India\",\"West Bengal\",88.3,22.64],[675,120,\"BD\",\"Bangladesh\",null,90.3,22.64],[680,120,\"BD\",\"Bangladesh\",null,92.31,22.64],[685,120,\"MM\",\"Myanmar\",null,94.32,22.64],[690,120,\"MM\",\"Myanmar\",null,96.32,22.64],[695,120,\"MM\",\"Myanmar\",null,98.33,22.64],[700,120,\"CN\",\"China\",null,100.34,22.64],[705,120,\"CN\",\"China\",null,102.34,22.64],[710,120,\"VN\",\"Vietnam\",null,104.35,22.64],[715,120,\"VN\",\"Vietnam\",null,106.36,22.64],[720,120,\"CN\",\"China\",null,108.36,22.64],[725,120,\"CN\",\"China\",null,110.37,22.64],[730,120,\"CN\",\"China\",null,112.38,22.64],[735,120,\"CN\",\"China\",null,114.38,22.64],[750,120,\"CN-TW\",\"Taiwan\",null,120.4,22.64],[190,125,\"MX\",\"Mexico\",null,-103.98,20.95],[195,125,\"MX\",\"Mexico\",null,-101.98,20.95],[200,125,\"MX\",\"Mexico\",null,-99.98,20.95],[205,125,\"MX\",\"Mexico\",null,-97.98,20.95],[225,125,\"MX\",\"Mexico\",null,-89.98,20.95],[230,125,\"MX\",\"Mexico\",null,-87.98,20.95],[255,125,\"CU\",\"Cuba\",null,-77.98,20.95],[260,125,\"CU\",\"Cuba\",null,-75.98,20.95],[410,125,\"MR\",\"Mauritania\",null,-16.0,20.95],[415,125,\"MR\",\"Mauritania\",null,-14.0,20.95],[420,125,\"MR\",\"Mauritania\",null,-12.0,20.95],[425,125,\"MR\",\"Mauritania\",null,-10.0,20.95],[430,125,\"MR\",\"Mauritania\",null,-8.0,20.95],[435,125,\"ML\",\"Mali\",null,-6.0,20.95],[440,125,\"ML\",\"Mali\",null,-4.0,20.95],[445,125,\"ML\",\"Mali\",null,-2.0,20.95],[450,125,\"ML\",\"Mali\",null,0,20.95],[455,125,\"DZ\",\"Algeria\",null,2.0,20.95],[460,125,\"DZ\",\"Algeria\",null,4.0,20.95],[465,125,\"DZ\",\"Algeria\",null,6.0,20.95],[470,125,\"NE\",\"Niger\",null,8.0,20.95],[475,125,\"NE\",\"Niger\",null,10.0,20.95],[480,125,\"NE\",\"Niger\",null,12.0,20.95],[485,125,\"NE\",\"Niger\",null,14.0,20.95],[490,125,\"TD\",\"Chad\",null,16.0,20.95],[495,125,\"TD\",\"Chad\",null,18.0,20.95],[500,125,\"TD\",\"Chad\",null,20.0,20.95],[505,125,\"LY\",\"Libya\",null,22.0,20.95],[510,125,\"LY\",\"Libya\",null,23.99,20.95],[515,125,\"SD\",\"Sudan\",null,25.99,20.95],[520,125,\"SD\",\"Sudan\",null,27.99,20.95],[525,125,\"SD\",\"Sudan\",null,29.99,20.95],[530,125,\"SD\",\"Sudan\",null,31.99,20.95],[535,125,\"SD\",\"Sudan\",null,33.99,20.95],[540,125,\"SD\",\"Sudan\",null,35.99,20.95],[550,125,\"SA\",\"Saudi Arabia\",null,39.99,20.95],[555,125,\"SA\",\"Saudi Arabia\",null,41.99,20.95],[560,125,\"SA\",\"Saudi Arabia\",null,43.99,20.95],[565,125,\"SA\",\"Saudi Arabia\",null,45.99,20.95],[570,125,\"SA\",\"Saudi Arabia\",null,47.99,20.95],[575,125,\"SA\",\"Saudi Arabia\",null,49.99,20.95],[580,125,\"SA\",\"Saudi Arabia\",null,51.99,20.95],[585,125,\"SA\",\"Saudi Arabia\",null,53.99,20.95],[590,125,\"OM\",\"Oman\",null,55.99,20.95],[595,125,\"OM\",\"Oman\",null,57.99,20.95],[635,125,\"IN\",\"India\",\"Maharashtra\",73.98,20.95],[640,125,\"IN\",\"India\",\"Maharashtra\",75.98,20.95],[645,125,\"IN\",\"India\",\"Maharashtra\",77.98,20.95],[650,125,\"IN\",\"India\",\"Maharashtra\",79.98,20.95],[655,125,\"IN\",\"India\",\"Chhattisgarh\",81.98,20.95],[660,125,\"IN\",\"India\",\"Orissa\",83.98,20.95],[665,125,\"IN\",\"India\",\"Orissa\",85.98,20.95],[685,125,\"MM\",\"Myanmar\",null,93.98,20.95],[690,125,\"MM\",\"Myanmar\",null,95.98,20.95],[695,125,\"MM\",\"Myanmar\",null,97.98,20.95],[700,125,\"MM\",\"Myanmar\",null,99.98,20.95],[705,125,\"LA\",\"Laos\",null,101.98,20.95],[710,125,\"VN\",\"Vietnam\",null,103.98,20.95],[715,125,\"VN\",\"Vietnam\",null,105.98,20.95],[725,125,\"CN\",\"China\",null,109.98,20.95],[60,130,\"US\",\"United States of America\",null,-155.46,19.27],[190,130,\"MX\",\"Mexico\",null,-103.64,19.27],[195,130,\"MX\",\"Mexico\",null,-101.64,19.27],[200,130,\"MX\",\"Mexico\",null,-99.65,19.27],[205,130,\"MX\",\"Mexico\",null,-97.66,19.27],[225,130,\"MX\",\"Mexico\",null,-89.69,19.27],[230,130,\"MX\",\"Mexico\",null,-87.69,19.27],[270,130,\"HT\",\"Haiti\",null,-71.75,19.27],[275,130,\"DO\",\"Dominican Republic\",null,-69.76,19.27],[410,130,\"MR\",\"Mauritania\",null,-15.94,19.27],[415,130,\"MR\",\"Mauritania\",null,-13.95,19.27],[420,130,\"MR\",\"Mauritania\",null,-11.96,19.27],[425,130,\"MR\",\"Mauritania\",null,-9.97,19.27],[430,130,\"MR\",\"Mauritania\",null,-7.97,19.27],[435,130,\"MR\",\"Mauritania\",null,-5.98,19.27],[440,130,\"ML\",\"Mali\",null,-3.99,19.27],[445,130,\"ML\",\"Mali\",null,-1.99,19.27],[450,130,\"ML\",\"Mali\",null,0,19.27],[455,130,\"ML\",\"Mali\",null,1.99,19.27],[460,130,\"DZ\",\"Algeria\",null,3.99,19.27],[465,130,\"NE\",\"Niger\",null,5.98,19.27],[470,130,\"NE\",\"Niger\",null,7.97,19.27],[475,130,\"NE\",\"Niger\",null,9.97,19.27],[480,130,\"NE\",\"Niger\",null,11.96,19.27],[485,130,\"NE\",\"Niger\",null,13.95,19.27],[490,130,\"TD\",\"Chad\",null,15.94,19.27],[495,130,\"TD\",\"Chad\",null,17.94,19.27],[500,130,\"TD\",\"Chad\",null,19.93,19.27],[505,130,\"TD\",\"Chad\",null,21.92,19.27],[510,130,\"TD\",\"Chad\",null,23.92,19.27],[515,130,\"SD\",\"Sudan\",null,25.91,19.27],[520,130,\"SD\",\"Sudan\",null,27.9,19.27],[525,130,\"SD\",\"Sudan\",null,29.9,19.27],[530,130,\"SD\",\"Sudan\",null,31.89,19.27],[535,130,\"SD\",\"Sudan\",null,33.88,19.27],[540,130,\"SD\",\"Sudan\",null,35.87,19.27],[555,130,\"SA\",\"Saudi Arabia\",null,41.85,19.27],[560,130,\"SA\",\"Saudi Arabia\",null,43.85,19.27],[565,130,\"SA\",\"Saudi Arabia\",null,45.84,19.27],[570,130,\"SA\",\"Saudi Arabia\",null,47.83,19.27],[575,130,\"SA\",\"Saudi Arabia\",null,49.83,19.27],[580,130,\"SA\",\"Saudi Arabia\",null,51.82,19.27],[585,130,\"OM\",\"Oman\",null,53.81,19.27],[590,130,\"OM\",\"Oman\",null,55.8,19.27],[635,130,\"IN\",\"India\",\"Maharashtra\",73.74,19.27],[640,130,\"IN\",\"India\",\"Maharashtra\",75.74,19.27],[645,130,\"IN\",\"India\",\"Maharashtra\",77.73,19.27],[650,130,\"IN\",\"India\",\"Andhra Pradesh\",79.72,19.27],[655,130,\"IN\",\"India\",\"Chhattisgarh\",81.71,19.27],[660,130,\"IN\",\"India\",\"Orissa\",83.71,19.27],[685,130,\"MM\",\"Myanmar\",null,93.67,19.27],[690,130,\"MM\",\"Myanmar\",null,95.67,19.27],[695,130,\"MM\",\"Myanmar\",null,97.66,19.27],[700,130,\"TH\",\"Thailand\",null,99.65,19.27],[705,130,\"LA\",\"Laos\",null,101.64,19.27],[710,130,\"LA\",\"Laos\",null,103.64,19.27],[715,130,\"VN\",\"Vietnam\",null,105.63,19.27],[725,130,\"CN\",\"China\",null,109.62,19.27],[195,135,\"MX\",\"Mexico\",null,-101.34,17.58],[200,135,\"MX\",\"Mexico\",null,-99.36,17.58],[205,135,\"MX\",\"Mexico\",null,-97.37,17.58],[210,135,\"MX\",\"Mexico\",null,-95.38,17.58],[215,135,\"MX\",\"Mexico\",null,-93.39,17.58],[220,135,\"MX\",\"Mexico\",null,-91.41,17.58],[225,135,\"GT\",\"Guatemala\",null,-89.42,17.58],[270,135,\"DO\",\"Dominican Republic\",null,-71.54,17.58],[410,135,\"MR\",\"Mauritania\",null,-15.9,17.58],[415,135,\"MR\",\"Mauritania\",null,-13.91,17.58],[420,135,\"MR\",\"Mauritania\",null,-11.92,17.58],[425,135,\"MR\",\"Mauritania\",null,-9.94,17.58],[430,135,\"MR\",\"Mauritania\",null,-7.95,17.58],[435,135,\"MR\",\"Mauritania\",null,-5.96,17.58],[440,135,\"ML\",\"Mali\",null,-3.97,17.58],[445,135,\"ML\",\"Mali\",null,-1.99,17.58],[450,135,\"ML\",\"Mali\",null,0,17.58],[455,135,\"ML\",\"Mali\",null,1.99,17.58],[460,135,\"ML\",\"Mali\",null,3.97,17.58],[465,135,\"NE\",\"Niger\",null,5.96,17.58],[470,135,\"NE\",\"Niger\",null,7.95,17.58],[475,135,\"NE\",\"Niger\",null,9.94,17.58],[480,135,\"NE\",\"Niger\",null,11.92,17.58],[485,135,\"NE\",\"Niger\",null,13.91,17.58],[490,135,\"TD\",\"Chad\",null,15.9,17.58],[495,135,\"TD\",\"Chad\",null,17.88,17.58],[500,135,\"TD\",\"Chad\",null,19.87,17.58],[505,135,\"TD\",\"Chad\",null,21.86,17.58],[510,135,\"TD\",\"Chad\",null,23.85,17.58],[515,135,\"SD\",\"Sudan\",null,25.83,17.58],[520,135,\"SD\",\"Sudan\",null,27.82,17.58],[525,135,\"SD\",\"Sudan\",null,29.81,17.58],[530,135,\"SD\",\"Sudan\",null,31.79,17.58],[535,135,\"SD\",\"Sudan\",null,33.78,17.58],[540,135,\"SD\",\"Sudan\",null,35.77,17.58],[545,135,\"SD\",\"Sudan\",null,37.76,17.58],[560,135,\"SA\",\"Saudi Arabia\",null,43.72,17.58],[565,135,\"SA\",\"Saudi Arabia\",null,45.7,17.58],[570,135,\"YE\",\"Yemen\",null,47.69,17.58],[575,135,\"YE\",\"Yemen\",null,49.68,17.58],[580,135,\"YE\",\"Yemen\",null,51.66,17.58],[585,135,\"OM\",\"Oman\",null,53.65,17.58],[635,135,\"IN\",\"India\",\"Maharashtra\",73.52,17.58],[640,135,\"IN\",\"India\",\"Maharashtra\",75.51,17.58],[645,135,\"IN\",\"India\",\"Andhra Pradesh\",77.5,17.58],[650,135,\"IN\",\"India\",\"Andhra Pradesh\",79.48,17.58],[655,135,\"IN\",\"India\",\"Andhra Pradesh\",81.47,17.58],[690,135,\"MM\",\"Myanmar\",null,95.38,17.58],[695,135,\"MM\",\"Myanmar\",null,97.37,17.58],[700,135,\"TH\",\"Thailand\",null,99.36,17.58],[705,135,\"TH\",\"Thailand\",null,101.34,17.58],[710,135,\"TH\",\"Thailand\",null,103.33,17.58],[715,135,\"LA\",\"Laos\",null,105.32,17.58],[755,135,\"PH\",\"Philippines\",null,121.21,17.58],[205,140,\"MX\",\"Mexico\",null,-97.11,15.9],[215,140,\"MX\",\"Mexico\",null,-93.14,15.9],[220,140,\"GT\",\"Guatemala\",null,-91.16,15.9],[225,140,\"GT\",\"Guatemala\",null,-89.18,15.9],[235,140,\"HN\",\"Honduras\",null,-85.22,15.9],[410,140,\"SN\",\"Senegal\",null,-15.85,15.9],[415,140,\"SN\",\"Senegal\",null,-13.87,15.9],[420,140,\"MR\",\"Mauritania\",null,-11.89,15.9],[425,140,\"MR\",\"Mauritania\",null,-9.91,15.9],[430,140,\"MR\",\"Mauritania\",null,-7.93,15.9],[435,140,\"MR\",\"Mauritania\",null,-5.95,15.9],[440,140,\"ML\",\"Mali\",null,-3.96,15.9],[445,140,\"ML\",\"Mali\",null,-1.98,15.9],[450,140,\"ML\",\"Mali\",null,0,15.9],[455,140,\"ML\",\"Mali\",null,1.98,15.9],[460,140,\"NE\",\"Niger\",null,3.96,15.9],[465,140,\"NE\",\"Niger\",null,5.95,15.9],[470,140,\"NE\",\"Niger\",null,7.93,15.9],[475,140,\"NE\",\"Niger\",null,9.91,15.9],[480,140,\"NE\",\"Niger\",null,11.89,15.9],[485,140,\"NE\",\"Niger\",null,13.87,15.9],[490,140,\"TD\",\"Chad\",null,15.85,15.9],[495,140,\"TD\",\"Chad\",null,17.84,15.9],[500,140,\"TD\",\"Chad\",null,19.82,15.9],[505,140,\"TD\",\"Chad\",null,21.8,15.9],[510,140,\"TD\",\"Chad\",null,23.78,15.9],[515,140,\"SD\",\"Sudan\",null,25.76,15.9],[520,140,\"SD\",\"Sudan\",null,27.74,15.9],[525,140,\"SD\",\"Sudan\",null,29.73,15.9],[530,140,\"SD\",\"Sudan\",null,31.71,15.9],[535,140,\"SD\",\"Sudan\",null,33.69,15.9],[540,140,\"SD\",\"Sudan\",null,35.67,15.9],[545,140,\"ER\",\"Eritrea\",null,37.65,15.9],[560,140,\"YE\",\"Yemen\",null,43.6,15.9],[565,140,\"YE\",\"Yemen\",null,45.58,15.9],[570,140,\"YE\",\"Yemen\",null,47.56,15.9],[575,140,\"YE\",\"Yemen\",null,49.54,15.9],[580,140,\"YE\",\"Yemen\",null,51.53,15.9],[640,140,\"IN\",\"India\",\"Karnataka\",75.31,15.9],[645,140,\"IN\",\"India\",\"Andhra Pradesh\",77.29,15.9],[650,140,\"IN\",\"India\",\"Andhra Pradesh\",79.27,15.9],[690,140,\"MM\",\"Myanmar\",null,95.12,15.9],[700,140,\"TH\",\"Thailand\",null,99.09,15.9],[705,140,\"TH\",\"Thailand\",null,101.07,15.9],[710,140,\"TH\",\"Thailand\",null,103.05,15.9],[715,140,\"TH\",\"Thailand\",null,105.03,15.9],[720,140,\"LA\",\"Laos\",null,107.02,15.9],[755,140,\"PH\",\"Philippines\",null,120.89,15.9],[220,145,\"GT\",\"Guatemala\",null,-90.94,14.21],[225,145,\"HN\",\"Honduras\",null,-88.97,14.21],[230,145,\"HN\",\"Honduras\",null,-86.99,14.21],[235,145,\"NI\",\"Nicaragua\",null,-85.01,14.21],[410,145,\"SN\",\"Senegal\",null,-15.82,14.21],[415,145,\"SN\",\"Senegal\",null,-13.84,14.21],[420,145,\"ML\",\"Mali\",null,-11.86,14.21],[425,145,\"ML\",\"Mali\",null,-9.89,14.21],[430,145,\"ML\",\"Mali\",null,-7.91,14.21],[435,145,\"ML\",\"Mali\",null,-5.93,14.21],[440,145,\"ML\",\"Mali\",null,-3.95,14.21],[445,145,\"BF\",\"Burkina Faso\",null,-1.98,14.21],[450,145,\"BF\",\"Burkina Faso\",null,0,14.21],[455,145,\"NE\",\"Niger\",null,1.98,14.21],[460,145,\"NE\",\"Niger\",null,3.95,14.21],[465,145,\"NE\",\"Niger\",null,5.93,14.21],[470,145,\"NE\",\"Niger\",null,7.91,14.21],[475,145,\"NE\",\"Niger\",null,9.89,14.21],[480,145,\"NE\",\"Niger\",null,11.86,14.21],[485,145,\"TD\",\"Chad\",null,13.84,14.21],[490,145,\"TD\",\"Chad\",null,15.82,14.21],[495,145,\"TD\",\"Chad\",null,17.79,14.21],[500,145,\"TD\",\"Chad\",null,19.77,14.21],[505,145,\"TD\",\"Chad\",null,21.75,14.21],[510,145,\"SD\",\"Sudan\",null,23.72,14.21],[515,145,\"SD\",\"Sudan\",null,25.7,14.21],[520,145,\"SD\",\"Sudan\",null,27.68,14.21],[525,145,\"SD\",\"Sudan\",null,29.66,14.21],[530,145,\"SD\",\"Sudan\",null,31.63,14.21],[535,145,\"SD\",\"Sudan\",null,33.61,14.21],[540,145,\"SD\",\"Sudan\",null,35.59,14.21],[545,145,\"ER\",\"Eritrea\",null,37.56,14.21],[550,145,\"ET\",\"Ethiopia\",null,39.54,14.21],[560,145,\"YE\",\"Yemen\",null,43.49,14.21],[565,145,\"YE\",\"Yemen\",null,45.47,14.21],[570,145,\"YE\",\"Yemen\",null,47.45,14.21],[640,145,\"IN\",\"India\",\"Karnataka\",75.13,14.21],[645,145,\"IN\",\"India\",\"Karnataka\",77.1,14.21],[650,145,\"IN\",\"India\",\"Andhra Pradesh\",79.08,14.21],[700,145,\"TH\",\"Thailand\",null,98.85,14.21],[705,145,\"TH\",\"Thailand\",null,100.83,14.21],[710,145,\"TH\",\"Thailand\",null,102.8,14.21],[715,145,\"KH\",\"Cambodia\",null,104.78,14.21],[720,145,\"KH\",\"Cambodia\",null,106.76,14.21],[725,145,\"VN\",\"Vietnam\",null,108.74,14.21],[755,145,\"PH\",\"Philippines\",null,120.6,14.21],[760,145,\"PH\",\"Philippines\",null,122.57,14.21],[230,150,\"NI\",\"Nicaragua\",null,-86.8,12.52],[235,150,\"NI\",\"Nicaragua\",null,-84.83,12.52],[410,150,\"SN\",\"Senegal\",null,-15.78,12.52],[415,150,\"GW\",\"Guinea-Bissau\",null,-13.81,12.52],[420,150,\"SN\",\"Senegal\",null,-11.84,12.52],[425,150,\"ML\",\"Mali\",null,-9.86,12.52],[430,150,\"ML\",\"Mali\",null,-7.89,12.52],[435,150,\"ML\",\"Mali\",null,-5.92,12.52],[440,150,\"BF\",\"Burkina Faso\",null,-3.95,12.52],[445,150,\"BF\",\"Burkina Faso\",null,-1.97,12.52],[450,150,\"BF\",\"Burkina Faso\",null,0,12.52],[455,150,\"BF\",\"Burkina Faso\",null,1.97,12.52],[460,150,\"NG\",\"Nigeria\",null,3.95,12.52],[465,150,\"NG\",\"Nigeria\",null,5.92,12.52],[470,150,\"NG\",\"Nigeria\",null,7.89,12.52],[475,150,\"NG\",\"Nigeria\",null,9.86,12.52],[480,150,\"NG\",\"Nigeria\",null,11.84,12.52],[485,150,\"NG\",\"Nigeria\",null,13.81,12.52],[490,150,\"TD\",\"Chad\",null,15.78,12.52],[495,150,\"TD\",\"Chad\",null,17.76,12.52],[500,150,\"TD\",\"Chad\",null,19.73,12.52],[505,150,\"TD\",\"Chad\",null,21.7,12.52],[510,150,\"SD\",\"Sudan\",null,23.67,12.52],[515,150,\"SD\",\"Sudan\",null,25.65,12.52],[520,150,\"SD\",\"Sudan\",null,27.62,12.52],[525,150,\"SD\",\"Sudan\",null,29.59,12.52],[530,150,\"SD\",\"Sudan\",null,31.56,12.52],[535,150,\"SD\",\"Sudan\",null,33.54,12.52],[540,150,\"SD\",\"Sudan\",null,35.51,12.52],[545,150,\"ET\",\"Ethiopia\",null,37.48,12.52],[550,150,\"ET\",\"Ethiopia\",null,39.46,12.52],[555,150,\"ET\",\"Ethiopia\",null,41.43,12.52],[645,150,\"IN\",\"India\",\"Karnataka\",76.94,12.52],[650,150,\"IN\",\"India\",\"Tamil Nadu\",78.91,12.52],[685,150,\"IN\",\"India\",\"Andaman and Nicobar\",92.72,12.52],[710,150,\"TH\",\"Thailand\",null,102.59,12.52],[715,150,\"KH\",\"Cambodia\",null,104.56,12.52],[720,150,\"KH\",\"Cambodia\",null,106.53,12.52],[725,150,\"VN\",\"Vietnam\",null,108.5,12.52],[765,150,\"PH\",\"Philippines\",null,124.29,12.52],[235,155,\"CR\",\"Costa Rica\",null,-84.67,10.83],[260,155,\"CO\",\"Colombia\",null,-74.83,10.83],[265,155,\"CO\",\"Colombia\",null,-72.86,10.83],[270,155,\"VE\",\"Venezuela\",null,-70.89,10.83],[275,155,\"VE\",\"Venezuela\",null,-68.92,10.83],[295,155,\"TT\",\"Trinidad and Tobago\",null,-61.04,10.83],[415,155,\"GN\",\"Guinea\",null,-13.78,10.83],[420,155,\"GN\",\"Guinea\",null,-11.81,10.83],[425,155,\"GN\",\"Guinea\",null,-9.85,10.83],[430,155,\"ML\",\"Mali\",null,-7.88,10.83],[435,155,\"ML\",\"Mali\",null,-5.91,10.83],[440,155,\"BF\",\"Burkina Faso\",null,-3.94,10.83],[445,155,\"GH\",\"Ghana\",null,-1.97,10.83],[450,155,\"TG\",\"Togo\",null,0,10.83],[455,155,\"BJ\",\"Benin\",null,1.97,10.83],[460,155,\"NG\",\"Nigeria\",null,3.94,10.83],[465,155,\"NG\",\"Nigeria\",null,5.91,10.83],[470,155,\"NG\",\"Nigeria\",null,7.88,10.83],[475,155,\"NG\",\"Nigeria\",null,9.85,10.83],[480,155,\"NG\",\"Nigeria\",null,11.81,10.83],[485,155,\"CM\",\"Cameroon\",null,13.78,10.83],[490,155,\"TD\",\"Chad\",null,15.75,10.83],[495,155,\"TD\",\"Chad\",null,17.72,10.83],[500,155,\"TD\",\"Chad\",null,19.69,10.83],[505,155,\"TD\",\"Chad\",null,21.66,10.83],[510,155,\"SD\",\"Sudan\",null,23.63,10.83],[515,155,\"SD\",\"Sudan\",null,25.6,10.83],[520,155,\"SD\",\"Sudan\",null,27.57,10.83],[525,155,\"SD\",\"Sudan\",null,29.54,10.83],[530,155,\"SD\",\"Sudan\",null,31.51,10.83],[535,155,\"SD\",\"Sudan\",null,33.48,10.83],[540,155,\"ET\",\"Ethiopia\",null,35.44,10.83],[545,155,\"ET\",\"Ethiopia\",null,37.41,10.83],[550,155,\"ET\",\"Ethiopia\",null,39.38,10.83],[555,155,\"ET\",\"Ethiopia\",null,41.35,10.83],[560,155,\"-99\",\"Somaliland\",null,43.32,10.83],[570,155,\"-99\",\"Somaliland\",null,47.26,10.83],[575,155,\"SO\",\"Somalia\",null,49.23,10.83],[645,155,\"IN\",\"India\",\"Kerala\",76.8,10.83],[650,155,\"IN\",\"India\",\"Tamil Nadu\",78.77,10.83],[685,155,\"IN\",\"India\",\"Andaman and Nicobar\",92.55,10.83],[715,155,\"KH\",\"Cambodia\",null,104.37,10.83],[720,155,\"VN\",\"Vietnam\",null,106.33,10.83],[760,155,\"PH\",\"Philippines\",null,122.09,10.83],[240,160,\"PA\",\"Panama\",null,-82.57,9.14],[250,160,\"PA\",\"Panama\",null,-78.64,9.14],[260,160,\"CO\",\"Colombia\",null,-74.71,9.14],[265,160,\"VE\",\"Venezuela\",null,-72.74,9.14],[270,160,\"VE\",\"Venezuela\",null,-70.78,9.14],[275,160,\"VE\",\"Venezuela\",null,-68.81,9.14],[280,160,\"VE\",\"Venezuela\",null,-66.85,9.14],[285,160,\"VE\",\"Venezuela\",null,-64.88,9.14],[290,160,\"VE\",\"Venezuela\",null,-62.91,9.14],[420,160,\"SL\",\"Sierra Leone\",null,-11.8,9.14],[425,160,\"GN\",\"Guinea\",null,-9.83,9.14],[430,160,\"GN\",\"Guinea\",null,-7.86,9.14],[435,160,\"CI\",\"Ivory Coast\",null,-5.9,9.14],[440,160,\"CI\",\"Ivory Coast\",null,-3.93,9.14],[445,160,\"GH\",\"Ghana\",null,-1.97,9.14],[450,160,\"GH\",\"Ghana\",null,0,9.14],[455,160,\"BJ\",\"Benin\",null,1.97,9.14],[460,160,\"NG\",\"Nigeria\",null,3.93,9.14],[465,160,\"NG\",\"Nigeria\",null,5.9,9.14],[470,160,\"NG\",\"Nigeria\",null,7.86,9.14],[475,160,\"NG\",\"Nigeria\",null,9.83,9.14],[480,160,\"NG\",\"Nigeria\",null,11.8,9.14],[485,160,\"CM\",\"Cameroon\",null,13.76,9.14],[490,160,\"TD\",\"Chad\",null,15.73,9.14],[495,160,\"TD\",\"Chad\",null,17.69,9.14],[500,160,\"TD\",\"Chad\",null,19.66,9.14],[505,160,\"CF\",\"Central African Republic\",null,21.63,9.14],[510,160,\"SD\",\"Sudan\",null,23.59,9.14],[515,160,\"SS\",\"South Sudan\",null,25.56,9.14],[520,160,\"SS\",\"South Sudan\",null,27.52,9.14],[525,160,\"SS\",\"South Sudan\",null,29.49,9.14],[530,160,\"SS\",\"South Sudan\",null,31.46,9.14],[535,160,\"SS\",\"South Sudan\",null,33.42,9.14],[540,160,\"ET\",\"Ethiopia\",null,35.39,9.14],[545,160,\"ET\",\"Ethiopia\",null,37.36,9.14],[550,160,\"ET\",\"Ethiopia\",null,39.32,9.14],[555,160,\"ET\",\"Ethiopia\",null,41.29,9.14],[560,160,\"ET\",\"Ethiopia\",null,43.25,9.14],[565,160,\"-99\",\"Somaliland\",null,45.22,9.14],[570,160,\"-99\",\"Somaliland\",null,47.19,9.14],[575,160,\"SO\",\"Somalia\",null,49.15,9.14],[645,160,\"IN\",\"India\",\"Kerala\",76.68,9.14],[655,160,\"LK\",\"Sri Lanka\",null,80.61,9.14],[750,160,\"PH\",\"Philippines\",null,117.96,9.14],[770,160,\"PH\",\"Philippines\",null,125.83,9.14],[245,165,\"PA\",\"Panama\",null,-80.5,7.45],[255,165,\"CO\",\"Colombia\",null,-76.58,7.45],[260,165,\"CO\",\"Colombia\",null,-74.61,7.45],[265,165,\"CO\",\"Colombia\",null,-72.65,7.45],[270,165,\"VE\",\"Venezuela\",null,-70.69,7.45],[275,165,\"VE\",\"Venezuela\",null,-68.72,7.45],[280,165,\"VE\",\"Venezuela\",null,-66.76,7.45],[285,165,\"VE\",\"Venezuela\",null,-64.8,7.45],[290,165,\"VE\",\"Venezuela\",null,-62.83,7.45],[295,165,\"VE\",\"Venezuela\",null,-60.87,7.45],[300,165,\"GY\",\"Guyana\",null,-58.9,7.45],[420,165,\"SL\",\"Sierra Leone\",null,-11.78,7.45],[425,165,\"LR\",\"Liberia\",null,-9.82,7.45],[430,165,\"CI\",\"Ivory Coast\",null,-7.85,7.45],[435,165,\"CI\",\"Ivory Coast\",null,-5.89,7.45],[440,165,\"CI\",\"Ivory Coast\",null,-3.93,7.45],[445,165,\"GH\",\"Ghana\",null,-1.96,7.45],[450,165,\"GH\",\"Ghana\",null,0,7.45],[455,165,\"BJ\",\"Benin\",null,1.96,7.45],[460,165,\"NG\",\"Nigeria\",null,3.93,7.45],[465,165,\"NG\",\"Nigeria\",null,5.89,7.45],[470,165,\"NG\",\"Nigeria\",null,7.85,7.45],[475,165,\"NG\",\"Nigeria\",null,9.82,7.45],[480,165,\"NG\",\"Nigeria\",null,11.78,7.45],[485,165,\"CM\",\"Cameroon\",null,13.74,7.45],[490,165,\"CF\",\"Central African Republic\",null,15.71,7.45],[495,165,\"CF\",\"Central African Republic\",null,17.67,7.45],[500,165,\"CF\",\"Central African Republic\",null,19.63,7.45],[505,165,\"CF\",\"Central African Republic\",null,21.6,7.45],[510,165,\"CF\",\"Central African Republic\",null,23.56,7.45],[515,165,\"SS\",\"South Sudan\",null,25.53,7.45],[520,165,\"SS\",\"South Sudan\",null,27.49,7.45],[525,165,\"SS\",\"South Sudan\",null,29.45,7.45],[530,165,\"SS\",\"South Sudan\",null,31.42,7.45],[535,165,\"SS\",\"South Sudan\",null,33.38,7.45],[540,165,\"ET\",\"Ethiopia\",null,35.34,7.45],[545,165,\"ET\",\"Ethiopia\",null,37.31,7.45],[550,165,\"ET\",\"Ethiopia\",null,39.27,7.45],[555,165,\"ET\",\"Ethiopia\",null,41.23,7.45],[560,165,\"ET\",\"Ethiopia\",null,43.2,7.45],[565,165,\"ET\",\"Ethiopia\",null,45.16,7.45],[570,165,\"ET\",\"Ethiopia\",null,47.12,7.45],[575,165,\"SO\",\"Somalia\",null,49.09,7.45],[655,165,\"LK\",\"Sri Lanka\",null,80.5,7.45],[705,165,\"TH\",\"Thailand\",null,100.14,7.45],[770,165,\"PH\",\"Philippines\",null,125.66,7.45],[255,170,\"CO\",\"Colombia\",null,-76.5,5.76],[260,170,\"CO\",\"Colombia\",null,-74.54,5.76],[265,170,\"CO\",\"Colombia\",null,-72.57,5.76],[270,170,\"CO\",\"Colombia\",null,-70.61,5.76],[275,170,\"CO\",\"Colombia\",null,-68.65,5.76],[280,170,\"VE\",\"Venezuela\",null,-66.69,5.76],[285,170,\"VE\",\"Venezuela\",null,-64.73,5.76],[290,170,\"VE\",\"Venezuela\",null,-62.77,5.76],[295,170,\"GY\",\"Guyana\",null,-60.81,5.76],[300,170,\"GY\",\"Guyana\",null,-58.84,5.76],[305,170,\"SR\",\"Suriname\",null,-56.88,5.76],[310,170,\"SR\",\"Suriname\",null,-54.92,5.76],[425,170,\"LR\",\"Liberia\",null,-9.81,5.76],[430,170,\"LR\",\"Liberia\",null,-7.85,5.76],[435,170,\"CI\",\"Ivory Coast\",null,-5.88,5.76],[440,170,\"CI\",\"Ivory Coast\",null,-3.92,5.76],[445,170,\"GH\",\"Ghana\",null,-1.96,5.76],[450,170,\"GH\",\"Ghana\",null,0,5.76],[465,170,\"NG\",\"Nigeria\",null,5.88,5.76],[470,170,\"NG\",\"Nigeria\",null,7.85,5.76],[475,170,\"CM\",\"Cameroon\",null,9.81,5.76],[480,170,\"CM\",\"Cameroon\",null,11.77,5.76],[485,170,\"CM\",\"Cameroon\",null,13.73,5.76],[490,170,\"CF\",\"Central African Republic\",null,15.69,5.76],[495,170,\"CF\",\"Central African Republic\",null,17.65,5.76],[500,170,\"CF\",\"Central African Republic\",null,19.61,5.76],[505,170,\"CF\",\"Central African Republic\",null,21.58,5.76],[510,170,\"CF\",\"Central African Republic\",null,23.54,5.76],[515,170,\"CF\",\"Central African Republic\",null,25.5,5.76],[520,170,\"SS\",\"South Sudan\",null,27.46,5.76],[525,170,\"SS\",\"South Sudan\",null,29.42,5.76],[530,170,\"SS\",\"South Sudan\",null,31.38,5.76],[535,170,\"SS\",\"South Sudan\",null,33.34,5.76],[540,170,\"ET\",\"Ethiopia\",null,35.31,5.76],[545,170,\"ET\",\"Ethiopia\",null,37.27,5.76],[550,170,\"ET\",\"Ethiopia\",null,39.23,5.76],[555,170,\"ET\",\"Ethiopia\",null,41.19,5.76],[560,170,\"ET\",\"Ethiopia\",null,43.15,5.76],[565,170,\"ET\",\"Ethiopia\",null,45.11,5.76],[570,170,\"SO\",\"Somalia\",null,47.08,5.76],[710,170,\"MY\",\"Malaysia\",null,102.0,5.76],[750,170,\"MY\",\"Malaysia\",null,117.69,5.76],[255,175,\"CO\",\"Colombia\",null,-76.44,4.06],[260,175,\"CO\",\"Colombia\",null,-74.48,4.06],[265,175,\"CO\",\"Colombia\",null,-72.52,4.06],[270,175,\"CO\",\"Colombia\",null,-70.56,4.06],[275,175,\"CO\",\"Colombia\",null,-68.6,4.06],[280,175,\"VE\",\"Venezuela\",null,-66.64,4.06],[285,175,\"BR\",\"Brazil\",null,-64.68,4.06],[290,175,\"VE\",\"Venezuela\",null,-62.72,4.06],[295,175,\"BR\",\"Brazil\",null,-60.76,4.06],[300,175,\"GY\",\"Guyana\",null,-58.8,4.06],[305,175,\"SR\",\"Suriname\",null,-56.84,4.06],[310,175,\"SR\",\"Suriname\",null,-54.88,4.06],[315,175,\"-99\",\"France\",null,-52.92,4.06],[475,175,\"CM\",\"Cameroon\",null,9.8,4.06],[480,175,\"CM\",\"Cameroon\",null,11.76,4.06],[485,175,\"CM\",\"Cameroon\",null,13.72,4.06],[490,175,\"CF\",\"Central African Republic\",null,15.68,4.06],[495,175,\"CF\",\"Central African Republic\",null,17.64,4.06],[500,175,\"CD\",\"Democratic Republic of the Congo\",null,19.6,4.06],[505,175,\"CD\",\"Democratic Republic of the Congo\",null,21.56,4.06],[510,175,\"CD\",\"Democratic Republic of the Congo\",null,23.52,4.06],[515,175,\"CD\",\"Democratic Republic of the Congo\",null,25.48,4.06],[520,175,\"CD\",\"Democratic Republic of the Congo\",null,27.44,4.06],[525,175,\"CD\",\"Democratic Republic of the Congo\",null,29.4,4.06],[530,175,\"SS\",\"South Sudan\",null,31.36,4.06],[535,175,\"SS\",\"South Sudan\",null,33.32,4.06],[540,175,\"KE\",\"Kenya\",null,35.28,4.06],[545,175,\"KE\",\"Kenya\",null,37.24,4.06],[550,175,\"ET\",\"Ethiopia\",null,39.2,4.06],[555,175,\"ET\",\"Ethiopia\",null,41.16,4.06],[560,175,\"SO\",\"Somalia\",null,43.12,4.06],[565,175,\"SO\",\"Somalia\",null,45.08,4.06],[570,175,\"SO\",\"Somalia\",null,47.04,4.06],[700,175,\"ID\",\"Indonesia\",null,98.0,4.06],[710,175,\"MY\",\"Malaysia\",null,101.92,4.06],[745,175,\"ID\",\"Indonesia\",null,115.64,4.06],[750,175,\"ID\",\"Indonesia\",null,117.6,4.06],[250,180,\"CO\",\"Colombia\",null,-78.36,2.37],[255,180,\"CO\",\"Colombia\",null,-76.4,2.37],[260,180,\"CO\",\"Colombia\",null,-74.44,2.37],[265,180,\"CO\",\"Colombia\",null,-72.48,2.37],[270,180,\"CO\",\"Colombia\",null,-70.52,2.37],[275,180,\"CO\",\"Colombia\",null,-68.56,2.37],[280,180,\"VE\",\"Venezuela\",null,-66.6,2.37],[285,180,\"VE\",\"Venezuela\",null,-64.65,2.37],[290,180,\"BR\",\"Brazil\",null,-62.69,2.37],[295,180,\"BR\",\"Brazil\",null,-60.73,2.37],[300,180,\"GY\",\"Guyana\",null,-58.77,2.37],[305,180,\"SR\",\"Suriname\",null,-56.81,2.37],[310,180,\"BR\",\"Brazil\",null,-54.85,2.37],[315,180,\"-99\",\"France\",null,-52.89,2.37],[320,180,\"BR\",\"Brazil\",null,-50.93,2.37],[480,180,\"CM\",\"Cameroon\",null,11.75,2.37],[485,180,\"CM\",\"Cameroon\",null,13.71,2.37],[490,180,\"CM\",\"Cameroon\",null,15.67,2.37],[495,180,\"CG\",\"Republic of the Congo\",null,17.63,2.37],[500,180,\"CD\",\"Democratic Republic of the Congo\",null,19.59,2.37],[505,180,\"CD\",\"Democratic Republic of the Congo\",null,21.55,2.37],[510,180,\"CD\",\"Democratic Republic of the Congo\",null,23.51,2.37],[515,180,\"CD\",\"Democratic Republic of the Congo\",null,25.47,2.37],[520,180,\"CD\",\"Democratic Republic of the Congo\",null,27.43,2.37],[525,180,\"CD\",\"Democratic Republic of the Congo\",null,29.38,2.37],[530,180,\"UG\",\"Uganda\",null,31.34,2.37],[535,180,\"UG\",\"Uganda\",null,33.3,2.37],[540,180,\"KE\",\"Kenya\",null,35.26,2.37],[545,180,\"KE\",\"Kenya\",null,37.22,2.37],[550,180,\"KE\",\"Kenya\",null,39.18,2.37],[555,180,\"SO\",\"Somalia\",null,41.14,2.37],[560,180,\"SO\",\"Somalia\",null,43.1,2.37],[565,180,\"SO\",\"Somalia\",null,45.06,2.37],[700,180,\"ID\",\"Indonesia\",null,97.95,2.37],[705,180,\"ID\",\"Indonesia\",null,99.91,2.37],[715,180,\"MY\",\"Malaysia\",null,103.83,2.37],[735,180,\"MY\",\"Malaysia\",null,111.66,2.37],[740,180,\"MY\",\"Malaysia\",null,113.62,2.37],[745,180,\"ID\",\"Indonesia\",null,115.58,2.37],[750,180,\"ID\",\"Indonesia\",null,117.54,2.37],[770,180,\"ID\",\"Indonesia\",null,125.37,2.37],[250,185,\"EC\",\"Ecuador\",null,-78.34,0.68],[255,185,\"CO\",\"Colombia\",null,-76.38,0.68],[260,185,\"CO\",\"Colombia\",null,-74.42,0.68],[265,185,\"CO\",\"Colombia\",null,-72.46,0.68],[270,185,\"CO\",\"Colombia\",null,-70.51,0.68],[275,185,\"BR\",\"Brazil\",null,-68.55,0.68],[280,185,\"BR\",\"Brazil\",null,-66.59,0.68],[285,185,\"BR\",\"Brazil\",null,-64.63,0.68],[290,185,\"BR\",\"Brazil\",null,-62.67,0.68],[295,185,\"BR\",\"Brazil\",null,-60.71,0.68],[300,185,\"BR\",\"Brazil\",null,-58.76,0.68],[305,185,\"BR\",\"Brazil\",null,-56.8,0.68],[310,185,\"BR\",\"Brazil\",null,-54.84,0.68],[315,185,\"BR\",\"Brazil\",null,-52.88,0.68],[320,185,\"BR\",\"Brazil\",null,-50.92,0.68],[475,185,\"GA\",\"Gabon\",null,9.79,0.68],[480,185,\"GA\",\"Gabon\",null,11.75,0.68],[485,185,\"GA\",\"Gabon\",null,13.71,0.68],[490,185,\"CG\",\"Republic of the Congo\",null,15.67,0.68],[495,185,\"CG\",\"Republic of the Congo\",null,17.63,0.68],[500,185,\"CD\",\"Democratic Republic of the Congo\",null,19.59,0.68],[505,185,\"CD\",\"Democratic Republic of the Congo\",null,21.54,0.68],[510,185,\"CD\",\"Democratic Republic of the Congo\",null,23.5,0.68],[515,185,\"CD\",\"Democratic Republic of the Congo\",null,25.46,0.68],[520,185,\"CD\",\"Democratic Republic of the Congo\",null,27.42,0.68],[525,185,\"CD\",\"Democratic Republic of the Congo\",null,29.38,0.68],[530,185,\"UG\",\"Uganda\",null,31.34,0.68],[535,185,\"UG\",\"Uganda\",null,33.29,0.68],[540,185,\"KE\",\"Kenya\",null,35.25,0.68],[545,185,\"KE\",\"Kenya\",null,37.21,0.68],[550,185,\"KE\",\"Kenya\",null,39.17,0.68],[555,185,\"SO\",\"Somalia\",null,41.13,0.68],[560,185,\"SO\",\"Somalia\",null,43.09,0.68],[705,185,\"ID\",\"Indonesia\",null,99.88,0.68],[710,185,\"ID\",\"Indonesia\",null,101.84,0.68],[730,185,\"ID\",\"Indonesia\",null,109.68,0.68],[735,185,\"ID\",\"Indonesia\",null,111.63,0.68],[740,185,\"ID\",\"Indonesia\",null,113.59,0.68],[745,185,\"ID\",\"Indonesia\",null,115.55,0.68],[750,185,\"ID\",\"Indonesia\",null,117.51,0.68],[760,185,\"ID\",\"Indonesia\",null,121.43,0.68],[765,185,\"ID\",\"Indonesia\",null,123.39,0.68],[245,190,\"EC\",\"Ecuador\",null,-80.3,-1.02],[250,190,\"EC\",\"Ecuador\",null,-78.34,-1.02],[255,190,\"EC\",\"Ecuador\",null,-76.38,-1.02],[260,190,\"PE\",\"Peru\",null,-74.43,-1.02],[265,190,\"CO\",\"Colombia\",null,-72.47,-1.02],[270,190,\"CO\",\"Colombia\",null,-70.51,-1.02],[275,190,\"BR\",\"Brazil\",null,-68.55,-1.02],[280,190,\"BR\",\"Brazil\",null,-66.59,-1.02],[285,190,\"BR\",\"Brazil\",null,-64.63,-1.02],[290,190,\"BR\",\"Brazil\",null,-62.67,-1.02],[295,190,\"BR\",\"Brazil\",null,-60.72,-1.02],[300,190,\"BR\",\"Brazil\",null,-58.76,-1.02],[305,190,\"BR\",\"Brazil\",null,-56.8,-1.02],[310,190,\"BR\",\"Brazil\",null,-54.84,-1.02],[315,190,\"BR\",\"Brazil\",null,-52.88,-1.02],[320,190,\"BR\",\"Brazil\",null,-50.92,-1.02],[325,190,\"BR\",\"Brazil\",null,-48.96,-1.02],[330,190,\"BR\",\"Brazil\",null,-47.01,-1.02],[475,190,\"GA\",\"Gabon\",null,9.79,-1.02],[480,190,\"GA\",\"Gabon\",null,11.75,-1.02],[485,190,\"GA\",\"Gabon\",null,13.71,-1.02],[490,190,\"CG\",\"Republic of the Congo\",null,15.67,-1.02],[495,190,\"CD\",\"Democratic Republic of the Congo\",null,17.63,-1.02],[500,190,\"CD\",\"Democratic Republic of the Congo\",null,19.59,-1.02],[505,190,\"CD\",\"Democratic Republic of the Congo\",null,21.54,-1.02],[510,190,\"CD\",\"Democratic Republic of the Congo\",null,23.5,-1.02],[515,190,\"CD\",\"Democratic Republic of the Congo\",null,25.46,-1.02],[520,190,\"CD\",\"Democratic Republic of the Congo\",null,27.42,-1.02],[525,190,\"CD\",\"Democratic Republic of the Congo\",null,29.38,-1.02],[530,190,\"TZ\",\"United Republic of Tanzania\",null,31.34,-1.02],[535,190,\"TZ\",\"United Republic of Tanzania\",null,33.3,-1.02],[540,190,\"KE\",\"Kenya\",null,35.25,-1.02],[545,190,\"KE\",\"Kenya\",null,37.21,-1.02],[550,190,\"KE\",\"Kenya\",null,39.17,-1.02],[555,190,\"SO\",\"Somalia\",null,41.13,-1.02],[710,190,\"ID\",\"Indonesia\",null,101.84,-1.02],[730,190,\"ID\",\"Indonesia\",null,109.68,-1.02],[735,190,\"ID\",\"Indonesia\",null,111.64,-1.02],[740,190,\"ID\",\"Indonesia\",null,113.6,-1.02],[745,190,\"ID\",\"Indonesia\",null,115.55,-1.02],[760,190,\"ID\",\"Indonesia\",null,121.43,-1.02],[790,190,\"ID\",\"Indonesia\",null,133.18,-1.02],[250,195,\"EC\",\"Ecuador\",null,-78.36,-2.71],[255,195,\"PE\",\"Peru\",null,-76.41,-2.71],[260,195,\"PE\",\"Peru\",null,-74.45,-2.71],[265,195,\"PE\",\"Peru\",null,-72.49,-2.71],[270,195,\"PE\",\"Peru\",null,-70.53,-2.71],[275,195,\"BR\",\"Brazil\",null,-68.57,-2.71],[280,195,\"BR\",\"Brazil\",null,-66.61,-2.71],[285,195,\"BR\",\"Brazil\",null,-64.65,-2.71],[290,195,\"BR\",\"Brazil\",null,-62.69,-2.71],[295,195,\"BR\",\"Brazil\",null,-60.73,-2.71],[300,195,\"BR\",\"Brazil\",null,-58.77,-2.71],[305,195,\"BR\",\"Brazil\",null,-56.81,-2.71],[310,195,\"BR\",\"Brazil\",null,-54.86,-2.71],[315,195,\"BR\",\"Brazil\",null,-52.9,-2.71],[320,195,\"BR\",\"Brazil\",null,-50.94,-2.71],[325,195,\"BR\",\"Brazil\",null,-48.98,-2.71],[330,195,\"BR\",\"Brazil\",null,-47.02,-2.71],[335,195,\"BR\",\"Brazil\",null,-45.06,-2.71],[340,195,\"BR\",\"Brazil\",null,-43.1,-2.71],[480,195,\"CG\",\"Republic of the Congo\",null,11.75,-2.71],[485,195,\"CG\",\"Republic of the Congo\",null,13.71,-2.71],[490,195,\"CG\",\"Republic of the Congo\",null,15.67,-2.71],[495,195,\"CD\",\"Democratic Republic of the Congo\",null,17.63,-2.71],[500,195,\"CD\",\"Democratic Republic of the Congo\",null,19.59,-2.71],[505,195,\"CD\",\"Democratic Republic of the Congo\",null,21.55,-2.71],[510,195,\"CD\",\"Democratic Republic of the Congo\",null,23.51,-2.71],[515,195,\"CD\",\"Democratic Republic of the Congo\",null,25.47,-2.71],[520,195,\"CD\",\"Democratic Republic of the Congo\",null,27.43,-2.71],[525,195,\"RW\",\"Rwanda\",null,29.39,-2.71],[530,195,\"TZ\",\"United Republic of Tanzania\",null,31.35,-2.71],[535,195,\"TZ\",\"United Republic of Tanzania\",null,33.31,-2.71],[540,195,\"TZ\",\"United Republic of Tanzania\",null,35.26,-2.71],[545,195,\"KE\",\"Kenya\",null,37.22,-2.71],[550,195,\"KE\",\"Kenya\",null,39.18,-2.71],[710,195,\"ID\",\"Indonesia\",null,101.87,-2.71],[715,195,\"ID\",\"Indonesia\",null,103.83,-2.71],[725,195,\"ID\",\"Indonesia\",null,107.75,-2.71],[735,195,\"ID\",\"Indonesia\",null,111.67,-2.71],[740,195,\"ID\",\"Indonesia\",null,113.63,-2.71],[745,195,\"ID\",\"Indonesia\",null,115.59,-2.71],[755,195,\"ID\",\"Indonesia\",null,119.51,-2.71],[760,195,\"ID\",\"Indonesia\",null,121.47,-2.71],[790,195,\"ID\",\"Indonesia\",null,133.22,-2.71],[800,195,\"ID\",\"Indonesia\",null,137.14,-2.71],[805,195,\"ID\",\"Indonesia\",null,139.1,-2.71],[810,195,\"PG\",\"Papua New Guinea\",null,141.06,-2.71],[835,195,\"PG\",\"Papua New Guinea\",null,150.85,-2.71],[245,200,\"EC\",\"Ecuador\",null,-80.37,-4.4],[250,200,\"PE\",\"Peru\",null,-78.41,-4.4],[255,200,\"PE\",\"Peru\",null,-76.45,-4.4],[260,200,\"PE\",\"Peru\",null,-74.49,-4.4],[265,200,\"PE\",\"Peru\",null,-72.53,-4.4],[270,200,\"BR\",\"Brazil\",null,-70.57,-4.4],[275,200,\"BR\",\"Brazil\",null,-68.61,-4.4],[280,200,\"BR\",\"Brazil\",null,-66.65,-4.4],[285,200,\"BR\",\"Brazil\",null,-64.69,-4.4],[290,200,\"BR\",\"Brazil\",null,-62.73,-4.4],[295,200,\"BR\",\"Brazil\",null,-60.77,-4.4],[300,200,\"BR\",\"Brazil\",null,-58.81,-4.4],[305,200,\"BR\",\"Brazil\",null,-56.85,-4.4],[310,200,\"BR\",\"Brazil\",null,-54.89,-4.4],[315,200,\"BR\",\"Brazil\",null,-52.93,-4.4],[320,200,\"BR\",\"Brazil\",null,-50.97,-4.4],[325,200,\"BR\",\"Brazil\",null,-49.01,-4.4],[330,200,\"BR\",\"Brazil\",null,-47.05,-4.4],[335,200,\"BR\",\"Brazil\",null,-45.08,-4.4],[340,200,\"BR\",\"Brazil\",null,-43.12,-4.4],[345,200,\"BR\",\"Brazil\",null,-41.16,-4.4],[350,200,\"BR\",\"Brazil\",null,-39.2,-4.4],[480,200,\"CG\",\"Republic of the Congo\",null,11.76,-4.4],[485,200,\"CG\",\"Republic of the Congo\",null,13.72,-4.4],[490,200,\"CD\",\"Democratic Republic of the Congo\",null,15.68,-4.4],[495,200,\"CD\",\"Democratic Republic of the Congo\",null,17.64,-4.4],[500,200,\"CD\",\"Democratic Republic of the Congo\",null,19.6,-4.4],[505,200,\"CD\",\"Democratic Republic of the Congo\",null,21.56,-4.4],[510,200,\"CD\",\"Democratic Republic of the Congo\",null,23.52,-4.4],[515,200,\"CD\",\"Democratic Republic of the Congo\",null,25.48,-4.4],[520,200,\"CD\",\"Democratic Republic of the Congo\",null,27.44,-4.4],[525,200,\"BI\",\"Burundi\",null,29.4,-4.4],[530,200,\"TZ\",\"United Republic of Tanzania\",null,31.36,-4.4],[535,200,\"TZ\",\"United Republic of Tanzania\",null,33.32,-4.4],[540,200,\"TZ\",\"United Republic of Tanzania\",null,35.28,-4.4],[545,200,\"TZ\",\"United Republic of Tanzania\",null,37.24,-4.4],[550,200,\"KE\",\"Kenya\",null,39.2,-4.4],[715,200,\"ID\",\"Indonesia\",null,103.89,-4.4],[720,200,\"ID\",\"Indonesia\",null,105.85,-4.4],[760,200,\"ID\",\"Indonesia\",null,121.53,-4.4],[795,200,\"ID\",\"Indonesia\",null,135.25,-4.4],[800,200,\"ID\",\"Indonesia\",null,137.22,-4.4],[805,200,\"ID\",\"Indonesia\",null,139.18,-4.4],[810,200,\"PG\",\"Papua New Guinea\",null,141.14,-4.4],[815,200,\"PG\",\"Papua New Guinea\",null,143.1,-4.4],[820,200,\"PG\",\"Papua New Guinea\",null,145.06,-4.4],[840,200,\"PG\",\"Papua New Guinea\",null,152.9,-4.4],[245,205,\"PE\",\"Peru\",null,-80.43,-6.09],[250,205,\"PE\",\"Peru\",null,-78.47,-6.09],[255,205,\"PE\",\"Peru\",null,-76.51,-6.09],[260,205,\"PE\",\"Peru\",null,-74.55,-6.09],[265,205,\"BR\",\"Brazil\",null,-72.59,-6.09],[270,205,\"BR\",\"Brazil\",null,-70.63,-6.09],[275,205,\"BR\",\"Brazil\",null,-68.66,-6.09],[280,205,\"BR\",\"Brazil\",null,-66.7,-6.09],[285,205,\"BR\",\"Brazil\",null,-64.74,-6.09],[290,205,\"BR\",\"Brazil\",null,-62.78,-6.09],[295,205,\"BR\",\"Brazil\",null,-60.82,-6.09],[300,205,\"BR\",\"Brazil\",null,-58.85,-6.09],[305,205,\"BR\",\"Brazil\",null,-56.89,-6.09],[310,205,\"BR\",\"Brazil\",null,-54.93,-6.09],[315,205,\"BR\",\"Brazil\",null,-52.97,-6.09],[320,205,\"BR\",\"Brazil\",null,-51.01,-6.09],[325,205,\"BR\",\"Brazil\",null,-49.05,-6.09],[330,205,\"BR\",\"Brazil\",null,-47.08,-6.09],[335,205,\"BR\",\"Brazil\",null,-45.12,-6.09],[340,205,\"BR\",\"Brazil\",null,-43.16,-6.09],[345,205,\"BR\",\"Brazil\",null,-41.2,-6.09],[350,205,\"BR\",\"Brazil\",null,-39.24,-6.09],[355,205,\"BR\",\"Brazil\",null,-37.27,-6.09],[360,205,\"BR\",\"Brazil\",null,-35.31,-6.09],[485,205,\"AO\",\"Angola\",null,13.73,-6.09],[490,205,\"AO\",\"Angola\",null,15.69,-6.09],[495,205,\"CD\",\"Democratic Republic of the Congo\",null,17.66,-6.09],[500,205,\"CD\",\"Democratic Republic of the Congo\",null,19.62,-6.09],[505,205,\"CD\",\"Democratic Republic of the Congo\",null,21.58,-6.09],[510,205,\"CD\",\"Democratic Republic of the Congo\",null,23.54,-6.09],[515,205,\"CD\",\"Democratic Republic of the Congo\",null,25.5,-6.09],[520,205,\"CD\",\"Democratic Republic of the Congo\",null,27.47,-6.09],[525,205,\"CD\",\"Democratic Republic of the Congo\",null,29.43,-6.09],[530,205,\"TZ\",\"United Republic of Tanzania\",null,31.39,-6.09],[535,205,\"TZ\",\"United Republic of Tanzania\",null,33.35,-6.09],[540,205,\"TZ\",\"United Republic of Tanzania\",null,35.31,-6.09],[545,205,\"TZ\",\"United Republic of Tanzania\",null,37.27,-6.09],[550,205,\"TZ\",\"United Republic of Tanzania\",null,39.24,-6.09],[720,205,\"ID\",\"Indonesia\",null,105.94,-6.09],[805,205,\"ID\",\"Indonesia\",null,139.29,-6.09],[810,205,\"PG\",\"Papua New Guinea\",null,141.25,-6.09],[815,205,\"PG\",\"Papua New Guinea\",null,143.21,-6.09],[820,205,\"PG\",\"Papua New Guinea\",null,145.18,-6.09],[825,205,\"PG\",\"Papua New Guinea\",null,147.14,-6.09],[830,205,\"PG\",\"Papua New Guinea\",null,149.1,-6.09],[845,205,\"PG\",\"Papua New Guinea\",null,154.98,-6.09],[250,210,\"PE\",\"Peru\",null,-78.56,-7.79],[255,210,\"PE\",\"Peru\",null,-76.59,-7.79],[260,210,\"PE\",\"Peru\",null,-74.63,-7.79],[265,210,\"BR\",\"Brazil\",null,-72.67,-7.79],[270,210,\"BR\",\"Brazil\",null,-70.7,-7.79],[275,210,\"BR\",\"Brazil\",null,-68.74,-7.79],[280,210,\"BR\",\"Brazil\",null,-66.77,-7.79],[285,210,\"BR\",\"Brazil\",null,-64.81,-7.79],[290,210,\"BR\",\"Brazil\",null,-62.85,-7.79],[295,210,\"BR\",\"Brazil\",null,-60.88,-7.79],[300,210,\"BR\",\"Brazil\",null,-58.92,-7.79],[305,210,\"BR\",\"Brazil\",null,-56.96,-7.79],[310,210,\"BR\",\"Brazil\",null,-54.99,-7.79],[315,210,\"BR\",\"Brazil\",null,-53.03,-7.79],[320,210,\"BR\",\"Brazil\",null,-51.06,-7.79],[325,210,\"BR\",\"Brazil\",null,-49.1,-7.79],[330,210,\"BR\",\"Brazil\",null,-47.14,-7.79],[335,210,\"BR\",\"Brazil\",null,-45.17,-7.79],[340,210,\"BR\",\"Brazil\",null,-43.21,-7.79],[345,210,\"BR\",\"Brazil\",null,-41.24,-7.79],[350,210,\"BR\",\"Brazil\",null,-39.28,-7.79],[355,210,\"BR\",\"Brazil\",null,-37.32,-7.79],[360,210,\"BR\",\"Brazil\",null,-35.35,-7.79],[485,210,\"AO\",\"Angola\",null,13.75,-7.79],[490,210,\"AO\",\"Angola\",null,15.71,-7.79],[495,210,\"CD\",\"Democratic Republic of the Congo\",null,17.68,-7.79],[500,210,\"AO\",\"Angola\",null,19.64,-7.79],[505,210,\"AO\",\"Angola\",null,21.6,-7.79],[510,210,\"CD\",\"Democratic Republic of the Congo\",null,23.57,-7.79],[515,210,\"CD\",\"Democratic Republic of the Congo\",null,25.53,-7.79],[520,210,\"CD\",\"Democratic Republic of the Congo\",null,27.5,-7.79],[525,210,\"CD\",\"Democratic Republic of the Congo\",null,29.46,-7.79],[530,210,\"TZ\",\"United Republic of Tanzania\",null,31.42,-7.79],[535,210,\"TZ\",\"United Republic of Tanzania\",null,33.39,-7.79],[540,210,\"TZ\",\"United Republic of Tanzania\",null,35.35,-7.79],[545,210,\"TZ\",\"United Republic of Tanzania\",null,37.32,-7.79],[550,210,\"TZ\",\"United Republic of Tanzania\",null,39.28,-7.79],[730,210,\"ID\",\"Indonesia\",null,109.98,-7.79],[735,210,\"ID\",\"Indonesia\",null,111.95,-7.79],[740,210,\"ID\",\"Indonesia\",null,113.91,-7.79],[805,210,\"ID\",\"Indonesia\",null,139.44,-7.79],[810,210,\"PG\",\"Papua New Guinea\",null,141.41,-7.79],[815,210,\"PG\",\"Papua New Guinea\",null,143.37,-7.79],[820,210,\"PG\",\"Papua New Guinea\",null,145.33,-7.79],[825,210,\"PG\",\"Papua New Guinea\",null,147.3,-7.79],[255,215,\"PE\",\"Peru\",null,-76.7,-9.48],[260,215,\"PE\",\"Peru\",null,-74.73,-9.48],[265,215,\"PE\",\"Peru\",null,-72.77,-9.48],[270,215,\"BR\",\"Brazil\",null,-70.8,-9.48],[275,215,\"BR\",\"Brazil\",null,-68.83,-9.48],[280,215,\"BR\",\"Brazil\",null,-66.87,-9.48],[285,215,\"BR\",\"Brazil\",null,-64.9,-9.48],[290,215,\"BR\",\"Brazil\",null,-62.93,-9.48],[295,215,\"BR\",\"Brazil\",null,-60.97,-9.48],[300,215,\"BR\",\"Brazil\",null,-59.0,-9.48],[305,215,\"BR\",\"Brazil\",null,-57.03,-9.48],[310,215,\"BR\",\"Brazil\",null,-55.07,-9.48],[315,215,\"BR\",\"Brazil\",null,-53.1,-9.48],[320,215,\"BR\",\"Brazil\",null,-51.13,-9.48],[325,215,\"BR\",\"Brazil\",null,-49.17,-9.48],[330,215,\"BR\",\"Brazil\",null,-47.2,-9.48],[335,215,\"BR\",\"Brazil\",null,-45.23,-9.48],[340,215,\"BR\",\"Brazil\",null,-43.27,-9.48],[345,215,\"BR\",\"Brazil\",null,-41.3,-9.48],[350,215,\"BR\",\"Brazil\",null,-39.33,-9.48],[355,215,\"BR\",\"Brazil\",null,-37.37,-9.48],[485,215,\"AO\",\"Angola\",null,13.77,-9.48],[490,215,\"AO\",\"Angola\",null,15.73,-9.48],[495,215,\"AO\",\"Angola\",null,17.7,-9.48],[500,215,\"AO\",\"Angola\",null,19.67,-9.48],[505,215,\"AO\",\"Angola\",null,21.63,-9.48],[510,215,\"CD\",\"Democratic Republic of the Congo\",null,23.6,-9.48],[515,215,\"CD\",\"Democratic Republic of the Congo\",null,25.57,-9.48],[520,215,\"CD\",\"Democratic Republic of the Congo\",null,27.53,-9.48],[525,215,\"ZM\",\"Zambia\",null,29.5,-9.48],[530,215,\"ZM\",\"Zambia\",null,31.47,-9.48],[535,215,\"TZ\",\"United Republic of Tanzania\",null,33.43,-9.48],[540,215,\"TZ\",\"United Republic of Tanzania\",null,35.4,-9.48],[545,215,\"TZ\",\"United Republic of Tanzania\",null,37.37,-9.48],[550,215,\"TZ\",\"United Republic of Tanzania\",null,39.33,-9.48],[755,215,\"ID\",\"Indonesia\",null,119.96,-9.48],[765,215,\"ID\",\"Indonesia\",null,123.9,-9.48],[825,215,\"PG\",\"Papua New Guinea\",null,147.5,-9.48],[860,215,\"SB\",\"Solomon Islands\",null,161.26,-9.48],[255,220,\"PE\",\"Peru\",null,-76.82,-11.17],[260,220,\"PE\",\"Peru\",null,-74.85,-11.17],[265,220,\"PE\",\"Peru\",null,-72.88,-11.17],[270,220,\"PE\",\"Peru\",null,-70.91,-11.17],[275,220,\"BO\",\"Bolivia\",null,-68.94,-11.17],[280,220,\"BO\",\"Bolivia\",null,-66.97,-11.17],[285,220,\"BR\",\"Brazil\",null,-65.01,-11.17],[290,220,\"BR\",\"Brazil\",null,-63.04,-11.17],[295,220,\"BR\",\"Brazil\",null,-61.07,-11.17],[300,220,\"BR\",\"Brazil\",null,-59.1,-11.17],[305,220,\"BR\",\"Brazil\",null,-57.13,-11.17],[310,220,\"BR\",\"Brazil\",null,-55.16,-11.17],[315,220,\"BR\",\"Brazil\",null,-53.19,-11.17],[320,220,\"BR\",\"Brazil\",null,-51.22,-11.17],[325,220,\"BR\",\"Brazil\",null,-49.25,-11.17],[330,220,\"BR\",\"Brazil\",null,-47.28,-11.17],[335,220,\"BR\",\"Brazil\",null,-45.31,-11.17],[340,220,\"BR\",\"Brazil\",null,-43.34,-11.17],[345,220,\"BR\",\"Brazil\",null,-41.37,-11.17],[350,220,\"BR\",\"Brazil\",null,-39.4,-11.17],[355,220,\"BR\",\"Brazil\",null,-37.43,-11.17],[490,220,\"AO\",\"Angola\",null,15.76,-11.17],[495,220,\"AO\",\"Angola\",null,17.73,-11.17],[500,220,\"AO\",\"Angola\",null,19.7,-11.17],[505,220,\"AO\",\"Angola\",null,21.67,-11.17],[510,220,\"AO\",\"Angola\",null,23.64,-11.17],[515,220,\"CD\",\"Democratic Republic of the Congo\",null,25.61,-11.17],[520,220,\"CD\",\"Democratic Republic of the Congo\",null,27.58,-11.17],[525,220,\"ZM\",\"Zambia\",null,29.55,-11.17],[530,220,\"ZM\",\"Zambia\",null,31.52,-11.17],[535,220,\"MW\",\"Malawi\",null,33.49,-11.17],[540,220,\"TZ\",\"United Republic of Tanzania\",null,35.46,-11.17],[545,220,\"TZ\",\"United Republic of Tanzania\",null,37.43,-11.17],[550,220,\"MZ\",\"Mozambique\",null,39.4,-11.17],[260,225,\"PE\",\"Peru\",null,-75.0,-12.86],[265,225,\"PE\",\"Peru\",null,-73.02,-12.86],[270,225,\"PE\",\"Peru\",null,-71.05,-12.86],[275,225,\"PE\",\"Peru\",null,-69.08,-12.86],[280,225,\"BO\",\"Bolivia\",null,-67.1,-12.86],[285,225,\"BO\",\"Bolivia\",null,-65.13,-12.86],[290,225,\"BO\",\"Bolivia\",null,-63.16,-12.86],[295,225,\"BR\",\"Brazil\",null,-61.18,-12.86],[300,225,\"BR\",\"Brazil\",null,-59.21,-12.86],[305,225,\"BR\",\"Brazil\",null,-57.23,-12.86],[310,225,\"BR\",\"Brazil\",null,-55.26,-12.86],[315,225,\"BR\",\"Brazil\",null,-53.29,-12.86],[320,225,\"BR\",\"Brazil\",null,-51.31,-12.86],[325,225,\"BR\",\"Brazil\",null,-49.34,-12.86],[330,225,\"BR\",\"Brazil\",null,-47.37,-12.86],[335,225,\"BR\",\"Brazil\",null,-45.39,-12.86],[340,225,\"BR\",\"Brazil\",null,-43.42,-12.86],[345,225,\"BR\",\"Brazil\",null,-41.45,-12.86],[350,225,\"BR\",\"Brazil\",null,-39.47,-12.86],[485,225,\"AO\",\"Angola\",null,13.82,-12.86],[490,225,\"AO\",\"Angola\",null,15.79,-12.86],[495,225,\"AO\",\"Angola\",null,17.76,-12.86],[500,225,\"AO\",\"Angola\",null,19.74,-12.86],[505,225,\"AO\",\"Angola\",null,21.71,-12.86],[510,225,\"AO\",\"Angola\",null,23.68,-12.86],[515,225,\"ZM\",\"Zambia\",null,25.66,-12.86],[520,225,\"ZM\",\"Zambia\",null,27.63,-12.86],[525,225,\"CD\",\"Democratic Republic of the Congo\",null,29.6,-12.86],[530,225,\"ZM\",\"Zambia\",null,31.58,-12.86],[535,225,\"MW\",\"Malawi\",null,33.55,-12.86],[540,225,\"MZ\",\"Mozambique\",null,35.52,-12.86],[545,225,\"MZ\",\"Mozambique\",null,37.5,-12.86],[550,225,\"MZ\",\"Mozambique\",null,39.47,-12.86],[575,225,\"MG\",\"Madagascar\",null,49.34,-12.86],[785,225,\"AU\",\"Australia\",null,132.23,-12.86],[790,225,\"AU\",\"Australia\",null,134.21,-12.86],[795,225,\"AU\",\"Australia\",null,136.18,-12.86],[810,225,\"AU\",\"Australia\",null,142.1,-12.86],[260,230,\"PE\",\"Peru\",null,-75.16,-14.55],[265,230,\"PE\",\"Peru\",null,-73.18,-14.55],[270,230,\"PE\",\"Peru\",null,-71.2,-14.55],[275,230,\"PE\",\"Peru\",null,-69.23,-14.55],[280,230,\"BO\",\"Bolivia\",null,-67.25,-14.55],[285,230,\"BO\",\"Bolivia\",null,-65.27,-14.55],[290,230,\"BO\",\"Bolivia\",null,-63.29,-14.55],[295,230,\"BO\",\"Bolivia\",null,-61.32,-14.55],[300,230,\"BR\",\"Brazil\",null,-59.34,-14.55],[305,230,\"BR\",\"Brazil\",null,-57.36,-14.55],[310,230,\"BR\",\"Brazil\",null,-55.38,-14.55],[315,230,\"BR\",\"Brazil\",null,-53.4,-14.55],[320,230,\"BR\",\"Brazil\",null,-51.43,-14.55],[325,230,\"BR\",\"Brazil\",null,-49.45,-14.55],[330,230,\"BR\",\"Brazil\",null,-47.47,-14.55],[335,230,\"BR\",\"Brazil\",null,-45.49,-14.55],[340,230,\"BR\",\"Brazil\",null,-43.51,-14.55],[345,230,\"BR\",\"Brazil\",null,-41.54,-14.55],[350,230,\"BR\",\"Brazil\",null,-39.56,-14.55],[485,230,\"AO\",\"Angola\",null,13.85,-14.55],[490,230,\"AO\",\"Angola\",null,15.82,-14.55],[495,230,\"AO\",\"Angola\",null,17.8,-14.55],[500,230,\"AO\",\"Angola\",null,19.78,-14.55],[505,230,\"AO\",\"Angola\",null,21.76,-14.55],[510,230,\"ZM\",\"Zambia\",null,23.73,-14.55],[515,230,\"ZM\",\"Zambia\",null,25.71,-14.55],[520,230,\"ZM\",\"Zambia\",null,27.69,-14.55],[525,230,\"ZM\",\"Zambia\",null,29.67,-14.55],[530,230,\"MZ\",\"Mozambique\",null,31.65,-14.55],[535,230,\"MW\",\"Malawi\",null,33.62,-14.55],[540,230,\"MW\",\"Malawi\",null,35.6,-14.55],[545,230,\"MZ\",\"Mozambique\",null,37.58,-14.55],[550,230,\"MZ\",\"Mozambique\",null,39.56,-14.55],[575,230,\"MG\",\"Madagascar\",null,49.45,-14.55],[770,230,\"AU\",\"Australia\",null,126.59,-14.55],[780,230,\"AU\",\"Australia\",null,130.54,-14.55],[785,230,\"AU\",\"Australia\",null,132.52,-14.55],[790,230,\"AU\",\"Australia\",null,134.5,-14.55],[810,230,\"AU\",\"Australia\",null,142.41,-14.55],[815,230,\"AU\",\"Australia\",null,144.39,-14.55],[-5,235,\"FJ\",\"Fiji\",null,179.57,-16.23],[265,235,\"PE\",\"Peru\",null,-73.36,-16.23],[270,235,\"PE\",\"Peru\",null,-71.38,-16.23],[275,235,\"PE\",\"Peru\",null,-69.4,-16.23],[280,235,\"BO\",\"Bolivia\",null,-67.41,-16.23],[285,235,\"BO\",\"Bolivia\",null,-65.43,-16.23],[290,235,\"BO\",\"Bolivia\",null,-63.45,-16.23],[295,235,\"BO\",\"Bolivia\",null,-61.47,-16.23],[300,235,\"BR\",\"Brazil\",null,-59.48,-16.23],[305,235,\"BR\",\"Brazil\",null,-57.5,-16.23],[310,235,\"BR\",\"Brazil\",null,-55.52,-16.23],[315,235,\"BR\",\"Brazil\",null,-53.54,-16.23],[320,235,\"BR\",\"Brazil\",null,-51.55,-16.23],[325,235,\"BR\",\"Brazil\",null,-49.57,-16.23],[330,235,\"BR\",\"Brazil\",null,-47.59,-16.23],[335,235,\"BR\",\"Brazil\",null,-45.6,-16.23],[340,235,\"BR\",\"Brazil\",null,-43.62,-16.23],[345,235,\"BR\",\"Brazil\",null,-41.64,-16.23],[350,235,\"BR\",\"Brazil\",null,-39.66,-16.23],[480,235,\"AO\",\"Angola\",null,11.9,-16.23],[485,235,\"AO\",\"Angola\",null,13.88,-16.23],[490,235,\"AO\",\"Angola\",null,15.86,-16.23],[495,235,\"AO\",\"Angola\",null,17.85,-16.23],[500,235,\"AO\",\"Angola\",null,19.83,-16.23],[505,235,\"AO\",\"Angola\",null,21.81,-16.23],[510,235,\"ZM\",\"Zambia\",null,23.79,-16.23],[515,235,\"ZM\",\"Zambia\",null,25.78,-16.23],[520,235,\"ZM\",\"Zambia\",null,27.76,-16.23],[525,235,\"ZW\",\"Zimbabwe\",null,29.74,-16.23],[530,235,\"ZW\",\"Zimbabwe\",null,31.72,-16.23],[535,235,\"MZ\",\"Mozambique\",null,33.71,-16.23],[540,235,\"MZ\",\"Mozambique\",null,35.69,-16.23],[545,235,\"MZ\",\"Mozambique\",null,37.67,-16.23],[550,235,\"MZ\",\"Mozambique\",null,39.66,-16.23],[565,235,\"MG\",\"Madagascar\",null,45.6,-16.23],[570,235,\"MG\",\"Madagascar\",null,47.59,-16.23],[575,235,\"MG\",\"Madagascar\",null,49.57,-16.23],[765,235,\"AU\",\"Australia\",null,124.92,-16.23],[770,235,\"AU\",\"Australia\",null,126.9,-16.23],[775,235,\"AU\",\"Australia\",null,128.88,-16.23],[780,235,\"AU\",\"Australia\",null,130.86,-16.23],[785,235,\"AU\",\"Australia\",null,132.85,-16.23],[790,235,\"AU\",\"Australia\",null,134.83,-16.23],[795,235,\"AU\",\"Australia\",null,136.81,-16.23],[810,235,\"AU\",\"Australia\",null,142.76,-16.23],[815,235,\"AU\",\"Australia\",null,144.74,-16.23],[275,240,\"CL\",\"Chile\",null,-69.59,-17.92],[280,240,\"BO\",\"Bolivia\",null,-67.6,-17.92],[285,240,\"BO\",\"Bolivia\",null,-65.61,-17.92],[290,240,\"BO\",\"Bolivia\",null,-63.62,-17.92],[295,240,\"BO\",\"Bolivia\",null,-61.64,-17.92],[300,240,\"BO\",\"Bolivia\",null,-59.65,-17.92],[305,240,\"BR\",\"Brazil\",null,-57.66,-17.92],[310,240,\"BR\",\"Brazil\",null,-55.67,-17.92],[315,240,\"BR\",\"Brazil\",null,-53.68,-17.92],[320,240,\"BR\",\"Brazil\",null,-51.69,-17.92],[325,240,\"BR\",\"Brazil\",null,-49.71,-17.92],[330,240,\"BR\",\"Brazil\",null,-47.72,-17.92],[335,240,\"BR\",\"Brazil\",null,-45.73,-17.92],[340,240,\"BR\",\"Brazil\",null,-43.74,-17.92],[345,240,\"BR\",\"Brazil\",null,-41.75,-17.92],[350,240,\"BR\",\"Brazil\",null,-39.76,-17.92],[480,240,\"NA\",\"Namibia\",null,11.93,-17.92],[485,240,\"NA\",\"Namibia\",null,13.92,-17.92],[490,240,\"NA\",\"Namibia\",null,15.91,-17.92],[495,240,\"NA\",\"Namibia\",null,17.89,-17.92],[500,240,\"NA\",\"Namibia\",null,19.88,-17.92],[505,240,\"AO\",\"Angola\",null,21.87,-17.92],[510,240,\"NA\",\"Namibia\",null,23.86,-17.92],[515,240,\"ZW\",\"Zimbabwe\",null,25.85,-17.92],[520,240,\"ZW\",\"Zimbabwe\",null,27.84,-17.92],[525,240,\"ZW\",\"Zimbabwe\",null,29.82,-17.92],[530,240,\"ZW\",\"Zimbabwe\",null,31.81,-17.92],[535,240,\"MZ\",\"Mozambique\",null,33.8,-17.92],[540,240,\"MZ\",\"Mozambique\",null,35.79,-17.92],[565,240,\"MG\",\"Madagascar\",null,45.73,-17.92],[570,240,\"MG\",\"Madagascar\",null,47.72,-17.92],[760,240,\"AU\",\"Australia\",null,123.27,-17.92],[765,240,\"AU\",\"Australia\",null,125.26,-17.92],[770,240,\"AU\",\"Australia\",null,127.25,-17.92],[775,240,\"AU\",\"Australia\",null,129.24,-17.92],[780,240,\"AU\",\"Australia\",null,131.22,-17.92],[785,240,\"AU\",\"Australia\",null,133.21,-17.92],[790,240,\"AU\",\"Australia\",null,135.2,-17.92],[795,240,\"AU\",\"Australia\",null,137.19,-17.92],[800,240,\"AU\",\"Australia\",null,139.18,-17.92],[805,240,\"AU\",\"Australia\",null,141.17,-17.92],[810,240,\"AU\",\"Australia\",null,143.15,-17.92],[815,240,\"AU\",\"Australia\",null,145.14,-17.92],[275,245,\"CL\",\"Chile\",null,-69.8,-19.61],[280,245,\"BO\",\"Bolivia\",null,-67.81,-19.61],[285,245,\"BO\",\"Bolivia\",null,-65.81,-19.61],[290,245,\"BO\",\"Bolivia\",null,-63.82,-19.61],[295,245,\"BO\",\"Bolivia\",null,-61.82,-19.61],[300,245,\"PY\",\"Paraguay\",null,-59.83,-19.61],[305,245,\"BR\",\"Brazil\",null,-57.83,-19.61],[310,245,\"BR\",\"Brazil\",null,-55.84,-19.61],[315,245,\"BR\",\"Brazil\",null,-53.85,-19.61],[320,245,\"BR\",\"Brazil\",null,-51.85,-19.61],[325,245,\"BR\",\"Brazil\",null,-49.86,-19.61],[330,245,\"BR\",\"Brazil\",null,-47.86,-19.61],[335,245,\"BR\",\"Brazil\",null,-45.87,-19.61],[340,245,\"BR\",\"Brazil\",null,-43.87,-19.61],[345,245,\"BR\",\"Brazil\",null,-41.88,-19.61],[350,245,\"BR\",\"Brazil\",null,-39.89,-19.61],[485,245,\"NA\",\"Namibia\",null,13.96,-19.61],[490,245,\"NA\",\"Namibia\",null,15.95,-19.61],[495,245,\"NA\",\"Namibia\",null,17.95,-19.61],[500,245,\"NA\",\"Namibia\",null,19.94,-19.61],[505,245,\"BW\",\"Botswana\",null,21.94,-19.61],[510,245,\"BW\",\"Botswana\",null,23.93,-19.61],[515,245,\"BW\",\"Botswana\",null,25.93,-19.61],[520,245,\"ZW\",\"Zimbabwe\",null,27.92,-19.61],[525,245,\"ZW\",\"Zimbabwe\",null,29.91,-19.61],[530,245,\"ZW\",\"Zimbabwe\",null,31.91,-19.61],[535,245,\"MZ\",\"Mozambique\",null,33.9,-19.61],[565,245,\"MG\",\"Madagascar\",null,45.87,-19.61],[570,245,\"MG\",\"Madagascar\",null,47.86,-19.61],[755,245,\"AU\",\"Australia\",null,121.65,-19.61],[760,245,\"AU\",\"Australia\",null,123.65,-19.61],[765,245,\"AU\",\"Australia\",null,125.64,-19.61],[770,245,\"AU\",\"Australia\",null,127.63,-19.61],[775,245,\"AU\",\"Australia\",null,129.63,-19.61],[780,245,\"AU\",\"Australia\",null,131.62,-19.61],[785,245,\"AU\",\"Australia\",null,133.62,-19.61],[790,245,\"AU\",\"Australia\",null,135.61,-19.61],[795,245,\"AU\",\"Australia\",null,137.61,-19.61],[800,245,\"AU\",\"Australia\",null,139.6,-19.61],[805,245,\"AU\",\"Australia\",null,141.59,-19.61],[810,245,\"AU\",\"Australia\",null,143.59,-19.61],[815,245,\"AU\",\"Australia\",null,145.58,-19.61],[275,250,\"CL\",\"Chile\",null,-70.03,-21.29],[280,250,\"BO\",\"Bolivia\",null,-68.03,-21.29],[285,250,\"BO\",\"Bolivia\",null,-66.03,-21.29],[290,250,\"BO\",\"Bolivia\",null,-64.03,-21.29],[295,250,\"PY\",\"Paraguay\",null,-62.03,-21.29],[300,250,\"PY\",\"Paraguay\",null,-60.03,-21.29],[305,250,\"PY\",\"Paraguay\",null,-58.03,-21.29],[310,250,\"BR\",\"Brazil\",null,-56.03,-21.29],[315,250,\"BR\",\"Brazil\",null,-54.03,-21.29],[320,250,\"BR\",\"Brazil\",null,-52.02,-21.29],[325,250,\"BR\",\"Brazil\",null,-50.02,-21.29],[330,250,\"BR\",\"Brazil\",null,-48.02,-21.29],[335,250,\"BR\",\"Brazil\",null,-46.02,-21.29],[340,250,\"BR\",\"Brazil\",null,-44.02,-21.29],[345,250,\"BR\",\"Brazil\",null,-42.02,-21.29],[485,250,\"NA\",\"Namibia\",null,14.01,-21.29],[490,250,\"NA\",\"Namibia\",null,16.01,-21.29],[495,250,\"NA\",\"Namibia\",null,18.01,-21.29],[500,250,\"NA\",\"Namibia\",null,20.01,-21.29],[505,250,\"BW\",\"Botswana\",null,22.01,-21.29],[510,250,\"BW\",\"Botswana\",null,24.01,-21.29],[515,250,\"BW\",\"Botswana\",null,26.01,-21.29],[520,250,\"ZW\",\"Zimbabwe\",null,28.01,-21.29],[525,250,\"ZW\",\"Zimbabwe\",null,30.01,-21.29],[530,250,\"ZW\",\"Zimbabwe\",null,32.02,-21.29],[535,250,\"MZ\",\"Mozambique\",null,34.02,-21.29],[560,250,\"MG\",\"Madagascar\",null,44.02,-21.29],[565,250,\"MG\",\"Madagascar\",null,46.02,-21.29],[570,250,\"MG\",\"Madagascar\",null,48.02,-21.29],[740,250,\"AU\",\"Australia\",null,116.05,-21.29],[745,250,\"AU\",\"Australia\",null,118.06,-21.29],[750,250,\"AU\",\"Australia\",null,120.06,-21.29],[755,250,\"AU\",\"Australia\",null,122.06,-21.29],[760,250,\"AU\",\"Australia\",null,124.06,-21.29],[765,250,\"AU\",\"Australia\",null,126.06,-21.29],[770,250,\"AU\",\"Australia\",null,128.06,-21.29],[775,250,\"AU\",\"Australia\",null,130.06,-21.29],[780,250,\"AU\",\"Australia\",null,132.06,-21.29],[785,250,\"AU\",\"Australia\",null,134.06,-21.29],[790,250,\"AU\",\"Australia\",null,136.06,-21.29],[795,250,\"AU\",\"Australia\",null,138.06,-21.29],[800,250,\"AU\",\"Australia\",null,140.07,-21.29],[805,250,\"AU\",\"Australia\",null,142.07,-21.29],[810,250,\"AU\",\"Australia\",null,144.07,-21.29],[815,250,\"AU\",\"Australia\",null,146.07,-21.29],[820,250,\"AU\",\"Australia\",null,148.07,-21.29],[275,255,\"CL\",\"Chile\",null,-70.29,-22.97],[280,255,\"CL\",\"Chile\",null,-68.28,-22.97],[285,255,\"AR\",\"Argentina\",null,-66.27,-22.97],[290,255,\"AR\",\"Argentina\",null,-64.26,-22.97],[295,255,\"AR\",\"Argentina\",null,-62.25,-22.97],[300,255,\"PY\",\"Paraguay\",null,-60.25,-22.97],[305,255,\"PY\",\"Paraguay\",null,-58.24,-22.97],[310,255,\"PY\",\"Paraguay\",null,-56.23,-22.97],[315,255,\"BR\",\"Brazil\",null,-54.22,-22.97],[320,255,\"BR\",\"Brazil\",null,-52.21,-22.97],[325,255,\"BR\",\"Brazil\",null,-50.21,-22.97],[330,255,\"BR\",\"Brazil\",null,-48.2,-22.97],[335,255,\"BR\",\"Brazil\",null,-46.19,-22.97],[340,255,\"BR\",\"Brazil\",null,-44.18,-22.97],[490,255,\"NA\",\"Namibia\",null,16.07,-22.97],[495,255,\"NA\",\"Namibia\",null,18.07,-22.97],[500,255,\"BW\",\"Botswana\",null,20.08,-22.97],[505,255,\"BW\",\"Botswana\",null,22.09,-22.97],[510,255,\"BW\",\"Botswana\",null,24.1,-22.97],[515,255,\"BW\",\"Botswana\",null,26.11,-22.97],[520,255,\"ZA\",\"South Africa\",null,28.12,-22.97],[525,255,\"ZA\",\"South Africa\",null,30.12,-22.97],[530,255,\"MZ\",\"Mozambique\",null,32.13,-22.97],[535,255,\"MZ\",\"Mozambique\",null,34.14,-22.97],[560,255,\"MG\",\"Madagascar\",null,44.18,-22.97],[565,255,\"MG\",\"Madagascar\",null,46.19,-22.97],[735,255,\"AU\",\"Australia\",null,114.47,-22.97],[740,255,\"AU\",\"Australia\",null,116.48,-22.97],[745,255,\"AU\",\"Australia\",null,118.48,-22.97],[750,255,\"AU\",\"Australia\",null,120.49,-22.97],[755,255,\"AU\",\"Australia\",null,122.5,-22.97],[760,255,\"AU\",\"Australia\",null,124.51,-22.97],[765,255,\"AU\",\"Australia\",null,126.52,-22.97],[770,255,\"AU\",\"Australia\",null,128.53,-22.97],[775,255,\"AU\",\"Australia\",null,130.53,-22.97],[780,255,\"AU\",\"Australia\",null,132.54,-22.97],[785,255,\"AU\",\"Australia\",null,134.55,-22.97],[790,255,\"AU\",\"Australia\",null,136.56,-22.97],[795,255,\"AU\",\"Australia\",null,138.57,-22.97],[800,255,\"AU\",\"Australia\",null,140.58,-22.97],[805,255,\"AU\",\"Australia\",null,142.58,-22.97],[810,255,\"AU\",\"Australia\",null,144.59,-22.97],[815,255,\"AU\",\"Australia\",null,146.6,-22.97],[820,255,\"AU\",\"Australia\",null,148.61,-22.97],[825,255,\"AU\",\"Australia\",null,150.62,-22.97],[275,260,\"CL\",\"Chile\",null,-70.57,-24.66],[280,260,\"CL\",\"Chile\",null,-68.55,-24.66],[285,260,\"AR\",\"Argentina\",null,-66.53,-24.66],[290,260,\"AR\",\"Argentina\",null,-64.52,-24.66],[295,260,\"AR\",\"Argentina\",null,-62.5,-24.66],[300,260,\"AR\",\"Argentina\",null,-60.48,-24.66],[305,260,\"PY\",\"Paraguay\",null,-58.47,-24.66],[310,260,\"PY\",\"Paraguay\",null,-56.45,-24.66],[315,260,\"PY\",\"Paraguay\",null,-54.44,-24.66],[320,260,\"BR\",\"Brazil\",null,-52.42,-24.66],[325,260,\"BR\",\"Brazil\",null,-50.4,-24.66],[330,260,\"BR\",\"Brazil\",null,-48.39,-24.66],[490,260,\"NA\",\"Namibia\",null,16.13,-24.66],[495,260,\"NA\",\"Namibia\",null,18.15,-24.66],[500,260,\"BW\",\"Botswana\",null,20.16,-24.66],[505,260,\"BW\",\"Botswana\",null,22.18,-24.66],[510,260,\"BW\",\"Botswana\",null,24.19,-24.66],[515,260,\"ZA\",\"South Africa\",null,26.21,-24.66],[520,260,\"ZA\",\"South Africa\",null,28.23,-24.66],[525,260,\"ZA\",\"South Africa\",null,30.24,-24.66],[530,260,\"MZ\",\"Mozambique\",null,32.26,-24.66],[535,260,\"MZ\",\"Mozambique\",null,34.27,-24.66],[560,260,\"MG\",\"Madagascar\",null,44.36,-24.66],[565,260,\"MG\",\"Madagascar\",null,46.37,-24.66],[735,260,\"AU\",\"Australia\",null,114.92,-24.66],[740,260,\"AU\",\"Australia\",null,116.94,-24.66],[745,260,\"AU\",\"Australia\",null,118.95,-24.66],[750,260,\"AU\",\"Australia\",null,120.97,-24.66],[755,260,\"AU\",\"Australia\",null,122.98,-24.66],[760,260,\"AU\",\"Australia\",null,125.0,-24.66],[765,260,\"AU\",\"Australia\",null,127.02,-24.66],[770,260,\"AU\",\"Australia\",null,129.03,-24.66],[775,260,\"AU\",\"Australia\",null,131.05,-24.66],[780,260,\"AU\",\"Australia\",null,133.07,-24.66],[785,260,\"AU\",\"Australia\",null,135.08,-24.66],[790,260,\"AU\",\"Australia\",null,137.1,-24.66],[795,260,\"AU\",\"Australia\",null,139.11,-24.66],[800,260,\"AU\",\"Australia\",null,141.13,-24.66],[805,260,\"AU\",\"Australia\",null,143.15,-24.66],[810,260,\"AU\",\"Australia\",null,145.16,-24.66],[815,260,\"AU\",\"Australia\",null,147.18,-24.66],[820,260,\"AU\",\"Australia\",null,149.19,-24.66],[825,260,\"AU\",\"Australia\",null,151.21,-24.66],[280,265,\"CL\",\"Chile\",null,-68.84,-26.34],[285,265,\"AR\",\"Argentina\",null,-66.82,-26.34],[290,265,\"AR\",\"Argentina\",null,-64.79,-26.34],[295,265,\"AR\",\"Argentina\",null,-62.77,-26.34],[300,265,\"AR\",\"Argentina\",null,-60.74,-26.34],[305,265,\"AR\",\"Argentina\",null,-58.72,-26.34],[310,265,\"PY\",\"Paraguay\",null,-56.69,-26.34],[315,265,\"AR\",\"Argentina\",null,-54.67,-26.34],[320,265,\"BR\",\"Brazil\",null,-52.64,-26.34],[325,265,\"BR\",\"Brazil\",null,-50.62,-26.34],[330,265,\"BR\",\"Brazil\",null,-48.59,-26.34],[490,265,\"NA\",\"Namibia\",null,16.2,-26.34],[495,265,\"NA\",\"Namibia\",null,18.22,-26.34],[500,265,\"ZA\",\"South Africa\",null,20.25,-26.34],[505,265,\"BW\",\"Botswana\",null,22.27,-26.34],[510,265,\"ZA\",\"South Africa\",null,24.3,-26.34],[515,265,\"ZA\",\"South Africa\",null,26.32,-26.34],[520,265,\"ZA\",\"South Africa\",null,28.35,-26.34],[525,265,\"ZA\",\"South Africa\",null,30.37,-26.34],[530,265,\"MZ\",\"Mozambique\",null,32.4,-26.34],[730,265,\"AU\",\"Australia\",null,113.39,-26.34],[735,265,\"AU\",\"Australia\",null,115.41,-26.34],[740,265,\"AU\",\"Australia\",null,117.43,-26.34],[745,265,\"AU\",\"Australia\",null,119.46,-26.34],[750,265,\"AU\",\"Australia\",null,121.48,-26.34],[755,265,\"AU\",\"Australia\",null,123.51,-26.34],[760,265,\"AU\",\"Australia\",null,125.53,-26.34],[765,265,\"AU\",\"Australia\",null,127.56,-26.34],[770,265,\"AU\",\"Australia\",null,129.58,-26.34],[775,265,\"AU\",\"Australia\",null,131.61,-26.34],[780,265,\"AU\",\"Australia\",null,133.63,-26.34],[785,265,\"AU\",\"Australia\",null,135.66,-26.34],[790,265,\"AU\",\"Australia\",null,137.68,-26.34],[795,265,\"AU\",\"Australia\",null,139.71,-26.34],[800,265,\"AU\",\"Australia\",null,141.73,-26.34],[805,265,\"AU\",\"Australia\",null,143.76,-26.34],[810,265,\"AU\",\"Australia\",null,145.78,-26.34],[815,265,\"AU\",\"Australia\",null,147.81,-26.34],[820,265,\"AU\",\"Australia\",null,149.83,-26.34],[825,265,\"AU\",\"Australia\",null,151.86,-26.34],[280,270,\"AR\",\"Argentina\",null,-69.16,-28.02],[285,270,\"AR\",\"Argentina\",null,-67.12,-28.02],[290,270,\"AR\",\"Argentina\",null,-65.09,-28.02],[295,270,\"AR\",\"Argentina\",null,-63.05,-28.02],[300,270,\"AR\",\"Argentina\",null,-61.02,-28.02],[305,270,\"AR\",\"Argentina\",null,-58.99,-28.02],[310,270,\"AR\",\"Argentina\",null,-56.95,-28.02],[315,270,\"BR\",\"Brazil\",null,-54.92,-28.02],[320,270,\"BR\",\"Brazil\",null,-52.88,-28.02],[325,270,\"BR\",\"Brazil\",null,-50.85,-28.02],[330,270,\"BR\",\"Brazil\",null,-48.82,-28.02],[490,270,\"NA\",\"Namibia\",null,16.27,-28.02],[495,270,\"NA\",\"Namibia\",null,18.31,-28.02],[500,270,\"ZA\",\"South Africa\",null,20.34,-28.02],[505,270,\"ZA\",\"South Africa\",null,22.37,-28.02],[510,270,\"ZA\",\"South Africa\",null,24.41,-28.02],[515,270,\"ZA\",\"South Africa\",null,26.44,-28.02],[520,270,\"ZA\",\"South Africa\",null,28.48,-28.02],[525,270,\"ZA\",\"South Africa\",null,30.51,-28.02],[530,270,\"ZA\",\"South Africa\",null,32.54,-28.02],[735,270,\"AU\",\"Australia\",null,115.94,-28.02],[740,270,\"AU\",\"Australia\",null,117.97,-28.02],[745,270,\"AU\",\"Australia\",null,120.01,-28.02],[750,270,\"AU\",\"Australia\",null,122.04,-28.02],[755,270,\"AU\",\"Australia\",null,124.08,-28.02],[760,270,\"AU\",\"Australia\",null,126.11,-28.02],[765,270,\"AU\",\"Australia\",null,128.14,-28.02],[770,270,\"AU\",\"Australia\",null,130.18,-28.02],[775,270,\"AU\",\"Australia\",null,132.21,-28.02],[780,270,\"AU\",\"Australia\",null,134.25,-28.02],[785,270,\"AU\",\"Australia\",null,136.28,-28.02],[790,270,\"AU\",\"Australia\",null,138.31,-28.02],[795,270,\"AU\",\"Australia\",null,140.35,-28.02],[800,270,\"AU\",\"Australia\",null,142.38,-28.02],[805,270,\"AU\",\"Australia\",null,144.42,-28.02],[810,270,\"AU\",\"Australia\",null,146.45,-28.02],[815,270,\"AU\",\"Australia\",null,148.48,-28.02],[820,270,\"AU\",\"Australia\",null,150.52,-28.02],[825,270,\"AU\",\"Australia\",null,152.55,-28.02],[280,275,\"AR\",\"Argentina\",null,-69.5,-29.7],[285,275,\"AR\",\"Argentina\",null,-67.45,-29.7],[290,275,\"AR\",\"Argentina\",null,-65.41,-29.7],[295,275,\"AR\",\"Argentina\",null,-63.36,-29.7],[300,275,\"AR\",\"Argentina\",null,-61.32,-29.7],[305,275,\"AR\",\"Argentina\",null,-59.28,-29.7],[310,275,\"AR\",\"Argentina\",null,-57.23,-29.7],[315,275,\"BR\",\"Brazil\",null,-55.19,-29.7],[320,275,\"BR\",\"Brazil\",null,-53.14,-29.7],[325,275,\"BR\",\"Brazil\",null,-51.1,-29.7],[495,275,\"ZA\",\"South Africa\",null,18.4,-29.7],[500,275,\"ZA\",\"South Africa\",null,20.44,-29.7],[505,275,\"ZA\",\"South Africa\",null,22.48,-29.7],[510,275,\"ZA\",\"South Africa\",null,24.53,-29.7],[515,275,\"ZA\",\"South Africa\",null,26.57,-29.7],[520,275,\"LS\",\"Lesotho\",null,28.62,-29.7],[525,275,\"ZA\",\"South Africa\",null,30.66,-29.7],[735,275,\"AU\",\"Australia\",null,116.51,-29.7],[740,275,\"AU\",\"Australia\",null,118.55,-29.7],[745,275,\"AU\",\"Australia\",null,120.6,-29.7],[750,275,\"AU\",\"Australia\",null,122.64,-29.7],[755,275,\"AU\",\"Australia\",null,124.69,-29.7],[760,275,\"AU\",\"Australia\",null,126.73,-29.7],[765,275,\"AU\",\"Australia\",null,128.77,-29.7],[770,275,\"AU\",\"Australia\",null,130.82,-29.7],[775,275,\"AU\",\"Australia\",null,132.86,-29.7],[780,275,\"AU\",\"Australia\",null,134.91,-29.7],[785,275,\"AU\",\"Australia\",null,136.95,-29.7],[790,275,\"AU\",\"Australia\",null,138.99,-29.7],[795,275,\"AU\",\"Australia\",null,141.04,-29.7],[800,275,\"AU\",\"Australia\",null,143.08,-29.7],[805,275,\"AU\",\"Australia\",null,145.13,-29.7],[810,275,\"AU\",\"Australia\",null,147.17,-29.7],[815,275,\"AU\",\"Australia\",null,149.21,-29.7],[820,275,\"AU\",\"Australia\",null,151.26,-29.7],[825,275,\"AU\",\"Australia\",null,153.3,-29.7],[280,280,\"AR\",\"Argentina\",null,-69.86,-31.38],[285,280,\"AR\",\"Argentina\",null,-67.81,-31.38],[290,280,\"AR\",\"Argentina\",null,-65.75,-31.38],[295,280,\"AR\",\"Argentina\",null,-63.7,-31.38],[300,280,\"AR\",\"Argentina\",null,-61.64,-31.38],[305,280,\"AR\",\"Argentina\",null,-59.59,-31.38],[310,280,\"UY\",\"Uruguay\",null,-57.53,-31.38],[315,280,\"UY\",\"Uruguay\",null,-55.48,-31.38],[320,280,\"BR\",\"Brazil\",null,-53.42,-31.38],[495,280,\"ZA\",\"South Africa\",null,18.49,-31.38],[500,280,\"ZA\",\"South Africa\",null,20.55,-31.38],[505,280,\"ZA\",\"South Africa\",null,22.6,-31.38],[510,280,\"ZA\",\"South Africa\",null,24.66,-31.38],[515,280,\"ZA\",\"South Africa\",null,26.71,-31.38],[520,280,\"ZA\",\"South Africa\",null,28.77,-31.38],[735,280,\"AU\",\"Australia\",null,117.12,-31.38],[740,280,\"AU\",\"Australia\",null,119.18,-31.38],[745,280,\"AU\",\"Australia\",null,121.23,-31.38],[750,280,\"AU\",\"Australia\",null,123.29,-31.38],[755,280,\"AU\",\"Australia\",null,125.34,-31.38],[760,280,\"AU\",\"Australia\",null,127.4,-31.38],[765,280,\"AU\",\"Australia\",null,129.45,-31.38],[770,280,\"AU\",\"Australia\",null,131.51,-31.38],[775,280,\"AU\",\"Australia\",null,133.56,-31.38],[780,280,\"AU\",\"Australia\",null,135.62,-31.38],[785,280,\"AU\",\"Australia\",null,137.67,-31.38],[790,280,\"AU\",\"Australia\",null,139.73,-31.38],[795,280,\"AU\",\"Australia\",null,141.78,-31.38],[800,280,\"AU\",\"Australia\",null,143.84,-31.38],[805,280,\"AU\",\"Australia\",null,145.89,-31.38],[810,280,\"AU\",\"Australia\",null,147.94,-31.38],[815,280,\"AU\",\"Australia\",null,150.0,-31.38],[820,280,\"AU\",\"Australia\",null,152.05,-31.38],[280,285,\"CL\",\"Chile\",null,-70.26,-33.06],[285,285,\"AR\",\"Argentina\",null,-68.19,-33.06],[290,285,\"AR\",\"Argentina\",null,-66.12,-33.06],[295,285,\"AR\",\"Argentina\",null,-64.06,-33.06],[300,285,\"AR\",\"Argentina\",null,-61.99,-33.06],[305,285,\"AR\",\"Argentina\",null,-59.92,-33.06],[310,285,\"UY\",\"Uruguay\",null,-57.86,-33.06],[315,285,\"UY\",\"Uruguay\",null,-55.79,-33.06],[320,285,\"UY\",\"Uruguay\",null,-53.72,-33.06],[495,285,\"ZA\",\"South Africa\",null,18.6,-33.06],[500,285,\"ZA\",\"South Africa\",null,20.66,-33.06],[505,285,\"ZA\",\"South Africa\",null,22.73,-33.06],[510,285,\"ZA\",\"South Africa\",null,24.8,-33.06],[515,285,\"ZA\",\"South Africa\",null,26.86,-33.06],[730,285,\"AU\",\"Australia\",null,115.72,-33.06],[735,285,\"AU\",\"Australia\",null,117.78,-33.06],[740,285,\"AU\",\"Australia\",null,119.85,-33.06],[745,285,\"AU\",\"Australia\",null,121.91,-33.06],[750,285,\"AU\",\"Australia\",null,123.98,-33.06],[775,285,\"AU\",\"Australia\",null,134.31,-33.06],[780,285,\"AU\",\"Australia\",null,136.38,-33.06],[785,285,\"AU\",\"Australia\",null,138.44,-33.06],[790,285,\"AU\",\"Australia\",null,140.51,-33.06],[795,285,\"AU\",\"Australia\",null,142.58,-33.06],[800,285,\"AU\",\"Australia\",null,144.64,-33.06],[805,285,\"AU\",\"Australia\",null,146.71,-33.06],[810,285,\"AU\",\"Australia\",null,148.78,-33.06],[815,285,\"AU\",\"Australia\",null,150.84,-33.06],[280,290,\"CL\",\"Chile\",null,-70.68,-34.74],[285,290,\"AR\",\"Argentina\",null,-68.6,-34.74],[290,290,\"AR\",\"Argentina\",null,-66.52,-34.74],[295,290,\"AR\",\"Argentina\",null,-64.44,-34.74],[300,290,\"AR\",\"Argentina\",null,-62.36,-34.74],[305,290,\"AR\",\"Argentina\",null,-60.28,-34.74],[310,290,\"AR\",\"Argentina\",null,-58.2,-34.74],[315,290,\"UY\",\"Uruguay\",null,-56.13,-34.74],[730,290,\"AU\",\"Australia\",null,116.41,-34.74],[785,290,\"AU\",\"Australia\",null,139.27,-34.74],[790,290,\"AU\",\"Australia\",null,141.35,-34.74],[795,290,\"AU\",\"Australia\",null,143.43,-34.74],[800,290,\"AU\",\"Australia\",null,145.51,-34.74],[805,290,\"AU\",\"Australia\",null,147.59,-34.74],[810,290,\"AU\",\"Australia\",null,149.67,-34.74],[280,295,\"CL\",\"Chile\",null,-71.13,-36.43],[285,295,\"AR\",\"Argentina\",null,-69.04,-36.43],[290,295,\"AR\",\"Argentina\",null,-66.94,-36.43],[295,295,\"AR\",\"Argentina\",null,-64.85,-36.43],[300,295,\"AR\",\"Argentina\",null,-62.76,-36.43],[305,295,\"AR\",\"Argentina\",null,-60.67,-36.43],[310,295,\"AR\",\"Argentina\",null,-58.58,-36.43],[785,295,\"AU\",\"Australia\",null,140.16,-36.43],[790,295,\"AU\",\"Australia\",null,142.25,-36.43],[795,295,\"AU\",\"Australia\",null,144.35,-36.43],[800,295,\"AU\",\"Australia\",null,146.44,-36.43],[805,295,\"AU\",\"Australia\",null,148.53,-36.43],[15,300,\"NZ\",\"New Zealand\",null,176.76,-38.12],[280,300,\"CL\",\"Chile\",null,-71.61,-38.12],[285,300,\"AR\",\"Argentina\",null,-69.5,-38.12],[290,300,\"AR\",\"Argentina\",null,-67.4,-38.12],[295,300,\"AR\",\"Argentina\",null,-65.29,-38.12],[300,300,\"AR\",\"Argentina\",null,-63.18,-38.12],[305,300,\"AR\",\"Argentina\",null,-61.08,-38.12],[310,300,\"AR\",\"Argentina\",null,-58.97,-38.12],[785,300,\"AU\",\"Australia\",null,141.11,-38.12],[790,300,\"AU\",\"Australia\",null,143.22,-38.12],[795,300,\"AU\",\"Australia\",null,145.32,-38.12],[800,300,\"AU\",\"Australia\",null,147.43,-38.12],[870,300,\"NZ\",\"New Zealand\",null,176.92,-38.12],[15,305,\"NZ\",\"New Zealand\",null,175.45,-39.81],[280,305,\"CL\",\"Chile\",null,-72.12,-39.81],[285,305,\"AR\",\"Argentina\",null,-70.0,-39.81],[290,305,\"AR\",\"Argentina\",null,-67.88,-39.81],[295,305,\"AR\",\"Argentina\",null,-65.76,-39.81],[300,305,\"AR\",\"Argentina\",null,-63.64,-39.81],[865,305,\"NZ\",\"New Zealand\",null,176.07,-39.81],[15,310,\"NZ\",\"New Zealand\",null,174.04,-41.51],[280,310,\"CL\",\"Chile\",null,-72.68,-41.51],[285,310,\"AR\",\"Argentina\",null,-70.54,-41.51],[290,310,\"AR\",\"Argentina\",null,-68.4,-41.51],[295,310,\"AR\",\"Argentina\",null,-66.26,-41.51],[790,310,\"AU\",\"Australia\",null,145.35,-41.51],[795,310,\"AU\",\"Australia\",null,147.49,-41.51],[855,310,\"NZ\",\"New Zealand\",null,173.14,-41.51],[860,310,\"NZ\",\"New Zealand\",null,175.28,-41.51],[10,315,\"NZ\",\"New Zealand\",null,170.38,-43.21],[15,315,\"NZ\",\"New Zealand\",null,172.53,-43.21],[285,315,\"AR\",\"Argentina\",null,-71.11,-43.21],[290,315,\"AR\",\"Argentina\",null,-68.95,-43.21],[295,315,\"AR\",\"Argentina\",null,-66.8,-43.21],[790,315,\"AU\",\"Australia\",null,146.53,-43.21],[850,315,\"NZ\",\"New Zealand\",null,172.38,-43.21],[10,320,\"NZ\",\"New Zealand\",null,168.75,-44.92],[15,320,\"NZ\",\"New Zealand\",null,170.92,-44.92],[280,320,\"CL\",\"Chile\",null,-73.89,-44.92],[285,320,\"AR\",\"Argentina\",null,-71.72,-44.92],[290,320,\"AR\",\"Argentina\",null,-69.55,-44.92],[295,320,\"AR\",\"Argentina\",null,-67.37,-44.92],[835,320,\"NZ\",\"New Zealand\",null,167.34,-44.92],[840,320,\"NZ\",\"New Zealand\",null,169.52,-44.92],[15,325,\"NZ\",\"New Zealand\",null,169.21,-46.64],[280,325,\"CL\",\"Chile\",null,-74.56,-46.64],[285,325,\"CL\",\"Chile\",null,-72.37,-46.64],[290,325,\"AR\",\"Argentina\",null,-70.18,-46.64],[295,325,\"AR\",\"Argentina\",null,-67.98,-46.64],[280,330,\"CL\",\"Chile\",null,-75.28,-48.37],[285,330,\"CL\",\"Chile\",null,-73.07,-48.37],[290,330,\"AR\",\"Argentina\",null,-70.85,-48.37],[295,330,\"AR\",\"Argentina\",null,-68.64,-48.37],[285,335,\"CL\",\"Chile\",null,-73.81,-50.11],[290,335,\"AR\",\"Argentina\",null,-71.57,-50.11],[295,335,\"AR\",\"Argentina\",null,-69.34,-50.11],[290,340,\"CL\",\"Chile\",null,-72.34,-51.87],[295,340,\"AR\",\"Argentina\",null,-70.08,-51.87],[315,340,\"FK\",\"Falkland Islands\",null,-61.04,-51.87],[320,340,\"FK\",\"Falkland Islands\",null,-58.78,-51.87],[290,345,\"CL\",\"Chile\",null,-73.17,-53.65],[300,345,\"AR\",\"Argentina\",null,-68.6,-53.65],[300,350,\"CL\",\"Chile\",null,-69.42,-55.44]]");
var activityStatuses = [
	{
		id: "active",
		label: "Active Community"
	},
	{
		id: "planned",
		label: "Planning"
	},
	{
		id: "connect",
		label: "Love to Connect"
	}
];
var gtmSummary = [
	{
		value: "50+",
		label: "Countries"
	},
	{
		value: "120+",
		label: "Active Communities"
	},
	{
		value: "10K+",
		label: "Community Members"
	}
];
var indiaMetrics = {
	communities: "20+",
	members: "2.5K+",
	events: "12+"
};
var highlightedCountries = /* @__PURE__ */ new Set([
	"SG",
	"ID",
	"CN",
	"US",
	"GB",
	"CA",
	"RU",
	"PH",
	"JP",
	"KR",
	"CH"
]);
function stableHash(value) {
	return [...value].reduce((hash, char) => hash * 31 + char.charCodeAt(0) >>> 0, 7);
}
function activityStatusForLocation(code, state, lon, lat) {
	if (code === "IN") {
		if (state ? [
			"Jammu and Kashmir",
			"Himachal Pradesh",
			"Punjab",
			"Chandigarh",
			"Haryana",
			"Delhi",
			"Uttaranchal",
			"Uttarakhand",
			"Uttar Pradesh",
			"Tamil Nadu",
			"Kerala",
			"Karnataka",
			"Andhra Pradesh",
			"Telangana",
			"Puducherry",
			"Pondicherry",
			"Lakshadweep"
		].includes(state) : lat >= 25 && lon < 83 || lat <= 18) return "active";
		return stableHash(state ?? `${Math.round(lon)}-${Math.round(lat)}`) % 2 === 0 ? "planned" : "connect";
	}
	const inAfrica = lon > -20 && lon < 52 && lat > -36 && lat < 37;
	if (!highlightedCountries.has(code) && !inAfrica) return null;
	return [
		"active",
		"planned",
		"connect"
	][stableHash(`${code}-${Math.floor(lon / 8)}-${Math.floor(lat / 8)}`) % 3] ?? "connect";
}
function geographicRegion(code, lon, lat) {
	if (lon < -30) return lat < 13 ? "south-america" : "north-america";
	if (lon > 110 && lat < -10) return "oceania";
	if (lon > -20 && lon < 52 && lat < 37 && code !== "TR" && code !== "CY") return "africa";
	if (lon < 45 && lat >= 35) return "europe";
	return "asia";
}
var gtmCountrySquares = gtm_country_squares_default.flatMap((point) => {
	const [x, y, code, country, state, lon, lat] = point;
	if (typeof x !== "number" || typeof y !== "number" || typeof code !== "string" || typeof country !== "string" || typeof lon !== "number" || typeof lat !== "number") return [];
	const stateName = typeof state === "string" ? state : null;
	return [{
		x,
		y,
		code,
		country,
		state: stateName,
		lon,
		lat,
		region: geographicRegion(code, lon, lat),
		status: activityStatusForLocation(code, stateName, lon, lat)
	}];
});
var gtmRegions = [
	{
		id: "north-america",
		label: "North America",
		image: region_north_america_photo_webp_asset_default.url,
		description: "A hub for builders, innovators and early adopters. From hackathons to industry events.",
		factors: [
			{
				label: "Partner Communities",
				value: "12+"
			},
			{
				label: "Entry Ease",
				value: "88%"
			},
			{
				label: "Time to Launch",
				value: "2–4 wks"
			}
		],
		resources: [
			{
				label: "Market Entry Playbook",
				kind: "Document",
				url: "#"
			},
			{
				label: "Hackathon Case Study",
				kind: "Case Study",
				url: "#"
			},
			{
				label: "Ecosystem Notes",
				kind: "Blog",
				url: "#"
			}
		],
		responsibilities: [
			"Connect builders and early adopters through local meetups.",
			"Coordinate hackathons and industry events with ecosystem partners.",
			"Turn community feedback into opportunities for product advocacy."
		]
	},
	{
		id: "europe",
		label: "Europe",
		image: region_europe_photo_webp_asset_default.url,
		description: "Collaborating with universities, protocols and communities to drive open innovation.",
		factors: [
			{
				label: "Partner Communities",
				value: "10+"
			},
			{
				label: "Entry Ease",
				value: "76%"
			},
			{
				label: "Time to Launch",
				value: "4–6 wks"
			}
		],
		resources: [
			{
				label: "University Partnership Guide",
				kind: "Document",
				url: "#"
			},
			{
				label: "Fellowship Case Study",
				kind: "Case Study",
				url: "#"
			},
			{
				label: "Open Innovation Blog",
				kind: "Blog",
				url: "#"
			}
		],
		responsibilities: [
			"Build relationships with universities and protocol communities.",
			"Organize workshops, fellowships and community calls.",
			"Support open innovation through cross-community collaboration."
		]
	},
	{
		id: "asia",
		label: "Asia",
		image: region_asia_photo_webp_asset_default.url,
		description: "A rapidly growing region with vibrant developer and creator communities.",
		factors: [
			{
				label: "Partner Communities",
				value: "15+"
			},
			{
				label: "Entry Ease",
				value: "92%"
			},
			{
				label: "Time to Launch",
				value: "1–3 wks"
			}
		],
		resources: [
			{
				label: "Campus Program Kit",
				kind: "Document",
				url: "#"
			},
			{
				label: "Dev Community Case Study",
				kind: "Case Study",
				url: "#"
			},
			{
				label: "Growth Market Blog",
				kind: "Blog",
				url: "#"
			}
		],
		responsibilities: [
			"Activate campus programs for developers and creators.",
			"Bring builders together through hackathons and meetups.",
			"Support local community leaders and ecosystem partnerships."
		]
	},
	{
		id: "africa",
		label: "Africa",
		image: region_africa_photo_webp_asset_default.url,
		description: "Empowering local communities through education, access and collaboration.",
		factors: [
			{
				label: "Partner Communities",
				value: "8+"
			},
			{
				label: "Entry Ease",
				value: "70%"
			},
			{
				label: "Time to Launch",
				value: "4–8 wks"
			}
		],
		resources: [
			{
				label: "Builder Program Guide",
				kind: "Document",
				url: "#"
			},
			{
				label: "Education Access Case Study",
				kind: "Case Study",
				url: "#"
			},
			{
				label: "Emerging Markets Blog",
				kind: "Blog",
				url: "#"
			}
		],
		responsibilities: [
			"Expand access to developer education and resources.",
			"Coordinate workshops and builder programs with local leaders.",
			"Create collaboration opportunities across emerging communities."
		]
	},
	{
		id: "oceania",
		label: "Oceania",
		image: region_oceania_photo_webp_asset_default.url,
		description: "Connecting with a growing community of builders and researchers.",
		factors: [
			{
				label: "Partner Communities",
				value: "5+"
			},
			{
				label: "Entry Ease",
				value: "81%"
			},
			{
				label: "Time to Launch",
				value: "3–5 wks"
			}
		],
		resources: [
			{
				label: "Research Partnership Brief",
				kind: "Document",
				url: "#"
			},
			{
				label: "Community Case Study",
				kind: "Case Study",
				url: "#"
			},
			{
				label: "Regional Insights Blog",
				kind: "Blog",
				url: "#"
			}
		],
		responsibilities: [
			"Connect builders and researchers through community meetups.",
			"Encourage knowledge sharing and research collaborations.",
			"Build partnerships that strengthen the regional ecosystem."
		]
	},
	{
		id: "south-america",
		label: "South America",
		image: null,
		description: "Regional highlights are coming soon.",
		factors: [],
		resources: [],
		responsibilities: []
	}
];
function filterGtmRegions(filter) {
	return filter === "all" ? gtmRegions.filter((region) => region.image !== null) : gtmRegions.filter((region) => region.id === filter);
}
var MAP_VIEW = {
	x: -45,
	y: -95,
	width: 990,
	height: 525
};
function fitMapPoints(points, maxZoom = 24) {
	if (!points.length) return {
		k: 1,
		x: 0,
		y: 0
	};
	const xs = points.map((p) => p.x), ys = points.map((p) => p.y);
	const left = Math.min(...xs), top = Math.min(...ys), right = Math.max(...xs) + 4, bottom = Math.max(...ys) + 4;
	const k = Math.max(1, Math.min(maxZoom, MAP_VIEW.width * .7 / Math.max(12, right - left), MAP_VIEW.height * .65 / Math.max(12, bottom - top)));
	return {
		k,
		x: MAP_VIEW.x + MAP_VIEW.width / 2 - k * (left + right) / 2,
		y: MAP_VIEW.y + MAP_VIEW.height / 2 - k * (top + bottom) / 2
	};
}
var projection = naturalEarth1_default().scale(168).translate([450, 187]);
var cities = [
	[
		"Delhi",
		77.21,
		28.61
	],
	[
		"Mumbai",
		72.88,
		19.08
	],
	[
		"Bengaluru",
		77.59,
		12.97
	],
	[
		"Chennai",
		80.27,
		13.08
	],
	[
		"Hyderabad",
		78.49,
		17.39
	],
	[
		"Kolkata",
		88.36,
		22.57
	],
	[
		"Agra",
		78.01,
		27.18
	],
	[
		"Jaipur",
		75.79,
		26.91
	],
	[
		"Lucknow",
		80.95,
		26.85
	],
	[
		"Kochi",
		76.27,
		9.93
	],
	[
		"Singapore",
		103.82,
		1.35
	],
	[
		"Jakarta",
		106.85,
		-6.21
	],
	[
		"Beijing",
		116.41,
		39.9
	],
	[
		"Shanghai",
		121.47,
		31.23
	],
	[
		"London",
		-.13,
		51.51
	],
	[
		"New York",
		-74.01,
		40.71
	],
	[
		"San Francisco",
		-122.42,
		37.77
	],
	[
		"Toronto",
		-79.38,
		43.65
	],
	[
		"Moscow",
		37.62,
		55.75
	],
	[
		"Manila",
		120.98,
		14.6
	],
	[
		"Tokyo",
		139.69,
		35.68
	],
	[
		"Seoul",
		126.98,
		37.57
	],
	[
		"Zurich",
		8.54,
		47.38
	],
	[
		"Nairobi",
		36.82,
		-1.29
	],
	[
		"Lagos",
		3.38,
		6.52
	],
	[
		"Cape Town",
		18.42,
		-33.92
	],
	[
		"Sydney",
		151.21,
		-33.87
	],
	[
		"Paris",
		2.35,
		48.86
	],
	[
		"Berlin",
		13.4,
		52.52
	],
	[
		"São Paulo",
		-46.63,
		-23.55
	]
];
var groups = /* @__PURE__ */ new Map();
for (const point of gtmCountrySquares) for (const [key, label, kind] of [[
	point.code,
	point.country,
	"Country"
], ...point.state ? [[
	`${point.code}-${point.state}`,
	point.state,
	"State"
]] : []]) {
	const existing = groups.get(key);
	if (existing) existing.points.push(point);
	else groups.set(key, {
		label,
		kind,
		points: [point],
		point
	});
}
var mapLocations = [
	...gtmRegions.map((region) => ({
		label: region.label,
		kind: "Region",
		points: gtmCountrySquares.filter((point) => point.region === region.id && (region.id !== "asia" || point.lon > 45 && point.lon < 155 && point.lat < 60) && (region.id !== "north-america" || point.lon < -40))
	})),
	...groups.values(),
	...cities.flatMap(([label, lon, lat]) => {
		const xy = projection([lon, lat]);
		if (!xy) return [];
		const point = gtmCountrySquares.reduce((best, p) => Math.hypot(p.x - xy[0], p.y - xy[1]) < Math.hypot(best.x - xy[0], best.y - xy[1]) ? p : best);
		return [{
			label,
			kind: "City",
			points: [{
				x: xy[0],
				y: xy[1]
			}],
			point
		}];
	})
];
function useGtmMapZoom() {
	const svgRef = (0, import_react.useRef)(null);
	const behaviorRef = (0, import_react.useRef)(null);
	const [transform, setTransform] = (0, import_react.useState)(identity);
	(0, import_react.useEffect)(() => {
		const svg = svgRef.current;
		if (!svg) return;
		const behavior = zoom_default().scaleExtent([1, 24]).extent([[MAP_VIEW.x, MAP_VIEW.y], [MAP_VIEW.x + MAP_VIEW.width, MAP_VIEW.y + MAP_VIEW.height]]).translateExtent([[MAP_VIEW.x, MAP_VIEW.y], [MAP_VIEW.x + MAP_VIEW.width, MAP_VIEW.y + MAP_VIEW.height]]).clickDistance(5).on("zoom", (event) => setTransform(event.transform));
		behaviorRef.current = behavior;
		select_default(svg).call(behavior);
		return () => {
			select_default(svg).on(".zoom", null);
			behaviorRef.current = null;
		};
	}, []);
	const reset = () => {
		if (svgRef.current && behaviorRef.current) select_default(svgRef.current).call(behaviorRef.current.transform, identity);
	};
	const scale = (factor) => {
		if (svgRef.current && behaviorRef.current) select_default(svgRef.current).call(behaviorRef.current.scaleBy, factor);
	};
	const focus = (points) => {
		if (!svgRef.current || !behaviorRef.current) return;
		const t = fitMapPoints(points);
		select_default(svgRef.current).call(behaviorRef.current.transform, identity.translate(t.x, t.y).scale(t.k));
	};
	return {
		svgRef,
		transform,
		reset,
		scale,
		focus
	};
}
function RegionSilhouette({ region }) {
	const { t } = useLanguage();
	const points = gtmCountrySquares.filter((point) => point.region === region);
	const xs = points.map((point) => point.x), ys = points.map((point) => point.y);
	const left = Math.min(...xs), top = Math.min(...ys);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className: "gtm-mini-map",
		viewBox: `${left} ${top} ${Math.max(...xs) - left + 5} ${Math.max(...ys) - top + 5}`,
		"aria-hidden": "true",
		children: points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: point.x,
			y: point.y,
			width: "4",
			height: "4"
		}, `${point.x}-${point.y}`))
	});
}
function RegionMetrics({ region }) {
	const { t } = useLanguage();
	if (region.factors.length === 0) return null;
	const icons = [
		Handshake,
		TrendingUp,
		Rocket
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "gtm-metrics",
		children: region.factors.map((factor, index) => {
			const Icon = icons[index] ?? Earth;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "gtm-metric-top",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t(String(factor.value)) })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t(String(factor.label)) })] }, factor.label);
		})
	});
}
function RegionResources({ region }) {
	const { t } = useLanguage();
	if (region.resources.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "gtm-tags",
		children: region.resources.map((resource) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			className: "gtm-resource-link",
			href: resource.url,
			target: "_blank",
			rel: "noreferrer",
			title: t(String(`${resource.kind}: ${resource.label}`)),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t(String(resource.kind)) }),
				t(String(resource.label)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { "aria-hidden": "true" })
			]
		}, resource.label))
	});
}
function CountryContent({ point }) {
	const { t } = useLanguage();
	const region = gtmRegions.find((item) => item.id === point.region);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `gtm-country-status status-${point.status ?? "unassigned"}`,
			children: t(String(activityStatuses.find((item) => item.id === point.status)?.label ?? "Not yet assigned"))
		}),
		point.code === "IN" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "gtm-country-metrics",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t(String(indiaMetrics.communities)) }), t(" Communities")] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t(String(indiaMetrics.members)) }), t(" Members")] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t(String(indiaMetrics.events)) }), t(" Events")] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "gtm-country-note",
			children: t(String(point.status === "active" ? "Part of the active community network." : point.status === "planned" ? "Community activation is being planned." : point.status === "connect" ? "A place to connect with builders and community leaders." : "Country activity has not been assigned yet."))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "gtm-responsibilities",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t(String(point.status === "active" ? "Regional focus" : "Areas to explore")) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: (region?.responsibilities.length ? region.responsibilities : ["Connect with local community leaders.", "Explore developer programs and ecosystem partnerships."]).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t(String(item)) }, item)) })]
		})
	] });
}
function GtmShowcase() {
	const { t } = useLanguage();
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)(null);
	const [hover, setHover] = (0, import_react.useState)(null);
	const [selected, setSelected] = (0, import_react.useState)(() => gtmCountrySquares.find((point) => point.code === "IN" && point.state === "Tamil Nadu") ?? null);
	const [detail, setDetail] = (0, import_react.useState)(null);
	const [countryDetail, setCountryDetail] = (0, import_react.useState)(null);
	const cardsRef = (0, import_react.useRef)(null);
	const mapZoom = useGtmMapZoom();
	const [search, setSearch] = (0, import_react.useState)("");
	const [locationLabel, setLocationLabel] = (0, import_react.useState)("World");
	const results = search.trim() ? mapLocations.filter((location) => [location.label, t(location.label)].some((label) => label.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()))).slice(0, 8) : [];
	const focusLocation = (location) => {
		mapZoom.focus(location.points);
		setLocationLabel(location.label);
		setSearch("");
		setSelected(location.point ?? null);
	};
	const resetMap = () => {
		mapZoom.reset();
		setLocationLabel("World");
		setSearch("");
	};
	const regions = (0, import_react.useMemo)(() => filterGtmRegions(filter), [filter]);
	const chooseRegion = (id) => {
		setFilter(id);
		cardsRef.current?.scrollTo({ left: 0 });
		if (id === "all") resetMap();
		else {
			const location = mapLocations.find((item) => item.kind === "Region" && item.label === gtmRegions.find((region) => region.id === id)?.label);
			if (location) focusLocation(location);
		}
	};
	const scroll = (direction) => cardsRef.current?.scrollBy({
		left: direction * 300,
		behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "gtm-section",
		"aria-labelledby": "gtm-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gtm-top",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "gtm-header",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gtm-title-block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "gtm-eyebrow",
							children: [t("GTM"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							id: "gtm-title",
							children: [
								t("Activating the GTM"),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								t("across the "),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: t("Global.") })
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("Through communities, product advocacy, and tech — turning local energy into global momentum.") })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "gtm-summary",
					children: gtmSummary.map((metric, index) => {
						const Icon = index === 0 ? Earth : Users;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							onClick: () => {
								chooseRegion("all");
								setStatusFilter(index === 0 ? null : "active");
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: metric.value }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}), t(String(metric.label))] })]
						}, metric.label);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gtm-map",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "gtm-legend",
						"aria-label": t("Filter country activity"),
						children: activityStatuses.map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							"aria-pressed": statusFilter === status.id,
							className: statusFilter === status.id ? "is-active" : "",
							onClick: () => setStatusFilter(statusFilter === status.id ? null : status.id),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: `status-${status.id}` }), t(String(status.label))]
						}, status.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gtm-map-search",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "gtm-location-input",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								"aria-label": t("Find a region, country, state or city"),
								placeholder: t("Find a location"),
								value: search,
								onChange: (event) => setSearch(event.target.value),
								onKeyDown: (event) => {
									if (event.key === "Enter" && results[0]) focusLocation(results[0]);
									if (event.key === "Escape") setSearch("");
								}
							})]
						}), search && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "gtm-location-results",
							children: results.length ? results.map((location) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								onClick: () => focusLocation(location),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(String(location.label)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t(String(location.kind)) })]
							}, `${location.kind}-${location.label}`)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("No matching locations") })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gtm-zoom-controls",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": t("Zoom in"),
								title: t("Zoom in"),
								onClick: () => mapZoom.scale(1.5),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": t("Zoom out"),
								title: t("Zoom out"),
								onClick: () => mapZoom.scale(1 / 1.5),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": t("Show whole world"),
								title: t("Show whole world"),
								onClick: resetMap,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("output", {
								"aria-label": t("Map zoom"),
								children: [mapZoom.transform.k.toFixed(1), "×"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gtm-map-location",
						children: t(String(locationLabel))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gtm-map-assistance",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "gtm-map-hint",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MousePointer2, {}), t("Click or zoom to explore regions")]
						}), mapZoom.transform.k > 1.01 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							className: "gtm-reset-view",
							onClick: resetMap,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {}), t("Reset View")]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						ref: mapZoom.svgRef,
						className: "gtm-map-dots",
						viewBox: `${MAP_VIEW.x} ${MAP_VIEW.y} ${MAP_VIEW.width} ${MAP_VIEW.height}`,
						"aria-label": t("Clickable country activity map"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "gtm-square-gradient",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									className: "gtm-glow-start",
									offset: "0%"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									className: "gtm-glow-mid",
									offset: "50%"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									className: "gtm-glow-end",
									offset: "100%"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							transform: mapZoom.transform.toString(),
							children: [gtmCountrySquares.map((point) => {
								const location = `${point.code}-${point.state ?? ""}`;
								const highlighted = hover === location;
								const muted = statusFilter && point.status !== statusFilter || filter !== "all" && point.region !== filter;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: point.x,
									y: point.y,
									width: "3.7",
									height: "3.7",
									role: "button",
									tabIndex: 0,
									"aria-label": t(String(`Explore ${point.state ? `${point.state}, ` : ""}${point.country} — ${activityStatuses.find((status) => status.id === point.status)?.label ?? "unassigned"}`)),
									className: `gtm-map-square status-${point.status ?? "unassigned"} ${highlighted ? "is-glowing" : ""} ${muted ? "is-muted" : ""}`,
									onPointerEnter: () => setHover(location),
									onPointerLeave: () => setHover(null),
									onFocus: () => setHover(location),
									onBlur: () => setHover(null),
									onClick: () => setSelected(point),
									onKeyDown: (event) => {
										if (event.key === "Enter" || event.key === " ") {
											event.preventDefault();
											setSelected(point);
										}
									}
								}, `${point.x}-${point.y}`);
							}), selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								className: `gtm-selected-point status-${selected.status ?? "unassigned"}`,
								cx: selected.x + 2,
								cy: selected.y + 2,
								r: 5 / mapZoom.transform.k,
								strokeWidth: 2 / mapZoom.transform.k
							})]
						})]
					}),
					selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gtm-country-popup",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "gtm-popup-heading",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t(String(selected.country)) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon",
										"aria-label": t(String(`Zoom to ${selected.state ?? selected.country}`)),
										title: t(String(`Zoom to ${selected.state ?? selected.country}`)),
										onClick: () => {
											const location = mapLocations.find((item) => item.label === (selected.state ?? selected.country) && item.kind === (selected.state ? "State" : "Country"));
											if (location) focusLocation(location);
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocateFixed, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon",
										"aria-label": t(String(`Open ${selected.country} activity details`)),
										onClick: () => setCountryDetail(selected),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon",
										"aria-label": t("Close country card"),
										onClick: () => setSelected(null),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
									})
								]
							}),
							selected.state && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t(String(selected.state)) }),
							selected.code === "IN" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "gtm-popup-metrics",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [t(String(indiaMetrics.communities)), t(" Communities")] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [t(String(indiaMetrics.members)), t(" Members")] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [t(String(indiaMetrics.events)), t(" Events")] })
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								t(String(activityStatuses.find((status) => status.id === selected.status)?.label ?? "Not yet assigned")),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								t(String(gtmRegions.find((region) => region.id === selected.region)?.label))
							] })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gtm-highlights",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gtm-toolbar",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "gtm-highlights-heading",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [t("Region Highlights"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gtm-region-controls",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "gtm-filters",
							"aria-label": t("Filter regions"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								"aria-pressed": filter === "all",
								className: filter === "all" ? "is-active" : "",
								onClick: () => chooseRegion("all"),
								children: t("All Regions")
							}), gtmRegions.map((region) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								"aria-pressed": filter === region.id,
								className: filter === region.id ? "is-active" : "",
								onClick: () => chooseRegion(region.id),
								children: t(String(region.label))
							}, region.id))]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "gtm-scroll-controls",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": t("Previous regions"),
								title: t("Previous regions"),
								onClick: () => scroll(-1),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": t("Next regions"),
								title: t("Next regions"),
								onClick: () => scroll(1),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
							})]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "gtm-cards",
					ref: cardsRef,
					children: regions.map((region) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "gtm-card",
						children: [region.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "gtm-card-photo",
							src: region.image,
							alt: t(String(`${region.label} regional landscape`)),
							loading: "lazy"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "gtm-card-photo gtm-photo-pending",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handshake, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "gtm-card-content",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegionSilhouette, { region: region.id }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: t(String(region.label)) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(String(region.description)) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegionMetrics, { region }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "gtm-card-bottom",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegionResources, { region }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon",
										className: "gtm-detail-arrow",
										"aria-label": t(String(`Explore ${region.label}`)),
										title: t(String(`Explore ${region.label}`)),
										onClick: () => setDetail(region),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
									})]
								})
							]
						})]
					}, region.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: detail !== null || countryDetail !== null,
				onOpenChange: (open) => {
					if (!open) {
						setDetail(null);
						setCountryDetail(null);
					}
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					className: "gtm-dialog",
					children: countryDetail ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: [t(String(countryDetail.state ? `${countryDetail.state}, ` : "")), t(String(countryDetail.country))] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [t(String(gtmRegions.find((region) => region.id === countryDetail.region)?.label)), t(" · Community & ecosystem activity")] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryContent, { point: countryDetail })
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						detail?.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "gtm-dialog-photo",
							src: detail.image,
							alt: t(String(detail.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: t(String(detail?.label)) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: t(String(detail?.description)) }),
						detail && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegionMetrics, { region: detail }), detail.responsibilities.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "gtm-responsibilities",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t("Core responsibilities") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: detail.responsibilities.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t(String(item)) }, item)) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegionResources, { region: detail })
							]
						})] })
					] })
				})
			})
		]
	});
}
var talk_webp_asset_default = {
	version: 1,
	asset_id: "711514ff-f6e2-461d-a877-aa07a9b40ff0",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/711514ff-f6e2-461d-a877-aa07a9b40ff0/talk.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/711514ff-f6e2-461d-a877-aa07a9b40ff0/talk.webp",
	original_filename: "talk.webp",
	size: 11582,
	content_type: "image/webp",
	created_at: "2026-10-06T19:57:40Z"
};
var hackathon_webp_asset_default = {
	version: 1,
	asset_id: "412a5aad-f2b4-4128-a449-efa4acb37831",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/412a5aad-f2b4-4128-a449-efa4acb37831/hackathon.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/412a5aad-f2b4-4128-a449-efa4acb37831/hackathon.webp",
	original_filename: "hackathon.webp",
	size: 12246,
	content_type: "image/webp",
	created_at: "2026-10-06T19:57:22Z"
};
var team_webp_asset_default = {
	version: 1,
	asset_id: "c1c0c0a9-67f8-4981-8a48-04a0a3932a13",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/c1c0c0a9-67f8-4981-8a48-04a0a3932a13/team.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/c1c0c0a9-67f8-4981-8a48-04a0a3932a13/team.webp",
	original_filename: "team.webp",
	size: 14690,
	content_type: "image/webp",
	created_at: "2026-10-06T19:57:43Z"
};
var collage_booth_webp_asset_default = {
	version: 1,
	asset_id: "6fa3b5ca-c3df-4f31-b05e-87c610b7642f",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/6fa3b5ca-c3df-4f31-b05e-87c610b7642f/collage-booth.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/6fa3b5ca-c3df-4f31-b05e-87c610b7642f/collage-booth.webp",
	original_filename: "collage-booth.webp",
	size: 33118,
	content_type: "image/webp",
	created_at: "2026-10-06T19:57:12Z"
};
var journeyFilters = [
	"All",
	"L1 Chain",
	"Developer Tools",
	"Community",
	"AI",
	"DePIN",
	"Infrastructure",
	"Education",
	"Fellowship"
];
var journeyItems = [
	{
		id: "hela",
		name: "HeLa Labs",
		role: "DevRel Lead",
		description: "Developer Relations & Community Growth for Web3 Infrastructure.",
		overview: "HeLa Labs is a modular Layer 1 ecosystem focused on making blockchain infrastructure practical for developers and emerging applications. The role connected technical education, builder programs and community-led adoption across global markets.",
		responsibilities: [
			"Designed the developer relations strategy and translated technical products into clear builder journeys.",
			"Led workshops, campus programs, hackathons and community activations with regional partners.",
			"Built relationships with developers, speakers, mentors and ecosystem teams.",
			"Created feedback loops between builders, product teams and leadership."
		],
		outcomes: [
			"Expanded the active developer network through repeatable education programs.",
			"Strengthened product awareness through hands-on technical experiences.",
			"Built a global pipeline of community leaders and ecosystem contributors."
		],
		tags: [
			"DevRel",
			"Community",
			"Ecosystem"
		],
		categories: [
			"L1 Chain",
			"Infrastructure",
			"Community"
		],
		dates: "2025 – 2026",
		place: "Global",
		logo: hela_logo_webp_asset_default.url,
		image: talk_webp_asset_default.url
	},
	{
		id: "socrates",
		name: "Socrates Global",
		role: "Head of Ecosystem",
		description: "Ecosystem growth and partnerships in the Solana ecosystem.",
		overview: "Socrates Global brings builders, communities and ecosystem partners together around high-value collaboration. The work centered on shaping an ecosystem motion that could move from awareness to participation and long-term contribution.",
		responsibilities: [
			"Owned the ecosystem growth roadmap across communities, partners and builder programs.",
			"Developed strategic relationships with protocols, founders and regional ecosystem leaders.",
			"Designed campaigns and collaborative programs for acquisition, education and retention.",
			"Coordinated community insights with product, content and partnership priorities."
		],
		outcomes: [
			"Created stronger pathways from first interaction to active contribution.",
			"Expanded the partner network across multiple regions and community segments.",
			"Established a consistent operating rhythm for ecosystem programs."
		],
		tags: [
			"Ecosystem",
			"Partnerships",
			"Community"
		],
		categories: ["Community", "Education"],
		dates: "Oct 2024 – Present",
		place: "Global",
		logo: socrates_logo_webp_asset_default.url,
		image: hackathon_webp_asset_default.url
	},
	{
		id: "nexus",
		name: "Nexus Chain",
		role: "Chief Ecosystem Officer",
		description: "Leading ecosystem growth for a public Layer 1 blockchain.",
		overview: "Nexus Chain is a public Layer 1 network building the foundations for a broad application ecosystem. The mandate combined ecosystem strategy, go-to-market planning and the systems needed to support builders and partners at scale.",
		responsibilities: [
			"Defined ecosystem positioning, growth priorities and partner categories.",
			"Built programs for developers, applications, infrastructure providers and communities.",
			"Aligned product, marketing and partnerships around shared adoption goals.",
			"Represented ecosystem needs in leadership planning and product feedback."
		],
		outcomes: [
			"Created a structured ecosystem roadmap for an emerging Layer 1 network.",
			"Improved coordination between technical, growth and community workstreams.",
			"Developed a partner and builder pipeline around priority use cases."
		],
		tags: [
			"Ecosystem",
			"Strategy",
			"Growth"
		],
		categories: ["L1 Chain", "Infrastructure"],
		dates: "2024 – Present",
		place: "Global",
		logo: nexus_logo_webp_asset_default.url,
		image: nexus_logo_webp_asset_default.url
	},
	{
		id: "dora",
		name: "DoraDAO",
		role: "Co-founder",
		description: "Building a chain-agnostic platform and fellowship programs.",
		overview: "DoraDAO is a chain-agnostic community platform designed to help people learn, build and collaborate across ecosystems. Its programs bring together contributors, fellows, mentors and partners through practical opportunities.",
		responsibilities: [
			"Shaped the community vision, operating model and cross-ecosystem positioning.",
			"Designed fellowship and contributor programs from application through completion.",
			"Built partnerships with communities, mentors and ecosystem organizations.",
			"Led storytelling, program delivery and contributor experience across APAC and global cohorts."
		],
		outcomes: [
			"Created accessible pathways for new contributors to enter Web3 ecosystems.",
			"Connected builders and mentors across chains, countries and disciplines.",
			"Established a recognizable community-led platform with repeatable programs."
		],
		tags: [
			"Community",
			"Education",
			"Fellowships"
		],
		categories: [
			"Community",
			"Education",
			"Fellowship"
		],
		dates: "2024 – Present",
		place: "APAC & Global",
		logo: dora_logo_webp_asset_default.url,
		image: team_webp_asset_default.url
	},
	{
		id: "zoth",
		name: "Zoth",
		role: "Community Builder",
		description: "Community building for a stablecoin neobank ecosystem.",
		overview: "Zoth develops financial infrastructure connecting stablecoins and real-world financial products. The community role focused on making the product narrative accessible and creating useful touchpoints for users, builders and ecosystem partners.",
		responsibilities: [
			"Developed community programs around stablecoins, real-world assets and product education.",
			"Activated users and partners through campaigns, conversations and collaborative events.",
			"Translated product updates into accessible community narratives and resources.",
			"Collected market feedback and surfaced community needs to internal teams."
		],
		outcomes: [
			"Improved awareness and understanding across a complex product category.",
			"Built stronger engagement around launches and ecosystem milestones.",
			"Connected product education with sustained community participation."
		],
		tags: [
			"Community",
			"Growth",
			"Web3"
		],
		categories: ["DePIN", "Community"],
		dates: "2024 – 2025",
		place: "Global",
		logo: zoth_logo_webp_asset_default.url,
		image: zoth_logo_webp_asset_default.url
	},
	{
		id: "specops",
		name: "SpecOps / DDS",
		role: "Ops & Community",
		description: "Building operational workflows and community for data scaling operations.",
		overview: "SpecOps / DDS brought together operations, contributors and data-focused delivery. The role established dependable workflows while maintaining a connected community around fast-moving, detail-heavy programs.",
		responsibilities: [
			"Designed operational workflows, documentation and recurring delivery processes.",
			"Coordinated contributors across tasks, timelines and quality requirements.",
			"Built community communication systems for updates, support and feedback.",
			"Tracked delivery risks and improved handoffs across distributed teams."
		],
		outcomes: [
			"Made recurring operations clearer and easier for contributors to follow.",
			"Improved delivery consistency across distributed workstreams.",
			"Strengthened communication between operations and community participants."
		],
		tags: [
			"Operations",
			"Community",
			"Data"
		],
		categories: ["AI", "Community"],
		dates: "2024 – 2025",
		place: "India",
		logo: specops_logo_webp_asset_default.url,
		image: collage_booth_webp_asset_default.url
	},
	{
		id: "projects",
		name: "Various Projects",
		role: "Contributor",
		description: "Contributed to multiple open-source and community initiatives.",
		overview: "A collection of open-source, developer-tooling and community initiatives spanning research, content, events and contributor support. Each engagement focused on helping useful ideas reach the people who could build with them.",
		responsibilities: [
			"Contributed research, content and community support across project stages.",
			"Supported launches, educational initiatives and contributor onboarding.",
			"Connected teams with relevant builders, communities and ecosystem opportunities.",
			"Adapted delivery to each project’s product, audience and maturity."
		],
		outcomes: [
			"Supported a broad portfolio of early and growing initiatives.",
			"Built cross-ecosystem context through hands-on contributor work.",
			"Created durable relationships across developer and community networks."
		],
		tags: [
			"Open Source",
			"Community",
			"Tools"
		],
		categories: ["Developer Tools", "Community"],
		dates: "2021 – Present",
		place: "Global",
		logo: projects_logo_webp_asset_default.url,
		image: projects_logo_webp_asset_default.url
	}
];
var ecosystems = [
	"Google Developer Groups",
	"Solana",
	"Polygon",
	"Ethereum",
	"Arbitrum",
	"Avalanche",
	"Aptos",
	"Sui",
	"Optimism",
	"Near",
	"Starknet",
	"Cosmos",
	"TRON",
	"Chainlink"
];
function filterJourneyItems(filter) {
	return filter === "All" ? journeyItems : journeyItems.filter((item) => item.categories.some((category) => category === filter));
}
var work_botanical_optimized_webp_asset_default = {
	version: 1,
	asset_id: "6f649654-6705-4fe9-915f-e0bee218321e",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/6f649654-6705-4fe9-915f-e0bee218321e/work-botanical-optimized.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/6f649654-6705-4fe9-915f-e0bee218321e/work-botanical-optimized.webp",
	original_filename: "work-botanical-optimized.webp",
	size: 55364,
	content_type: "image/webp",
	created_at: "2026-10-07T13:29:17Z"
};
var ecosystemIcons = [
	Command,
	Layers,
	Network,
	Gem,
	Hexagon,
	Triangle,
	Waves,
	CircleDot,
	Sparkles,
	Braces,
	Orbit,
	Cuboid,
	CodeXml,
	Box
];
function JourneySection() {
	const { t } = useLanguage();
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [detail, setDetail] = (0, import_react.useState)(null);
	const [ecosystem, setEcosystem] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const pick = (event) => {
			const next = event.detail;
			if (journeyFilters.includes(next)) setFilter(next);
		};
		window.addEventListener("journey-filter", pick);
		return () => window.removeEventListener("journey-filter", pick);
	}, []);
	const visibleItems = filterJourneyItems(filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "journey-section",
		"aria-labelledby": "journey-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: work_tapestry_optimized_webp_asset_default.url,
				alt: "",
				className: "journey-backdrop",
				loading: "lazy",
				decoding: "async"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "journey-sheet",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "journey-intro",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "journey-eyebrow",
							children: t("JOURNEY")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							id: "journey-title",
							children: [
								t("Communities"),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								t("Products &"),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: t("Impact.") })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("A timeline of the communities, products and ecosystems I’ve worked with — each one shaping ideas, people and opportunities across the world.") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "journey-note",
							children: [
								t("Different"),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								t("communities."),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								t("Same purpose."),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: work_botanical_optimized_webp_asset_default.url,
							alt: "",
							className: "journey-illustration",
							loading: "lazy",
							decoding: "async"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "journey-directory",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "journey-filters",
						"aria-label": t("Filter journey entries"),
						children: journeyFilters.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							className: filter === item ? "is-active" : "",
							"aria-pressed": filter === item,
							onClick: () => setFilter(item),
							children: t(String(item))
						}, item))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "journey-list",
						"aria-live": "polite",
						children: [visibleItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "journey-row",
							role: "button",
							tabIndex: 0,
							"aria-label": t(String(`Open ${item.name} community details`)),
							onClick: () => setDetail(item),
							onKeyDown: (event) => {
								if (event.key === "Enter" || event.key === " ") {
									event.preventDefault();
									setDetail(item);
								}
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "journey-company",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: item.logo,
										alt: "",
										loading: "lazy",
										decoding: "async"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t(String(item.name)) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "journey-role",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t(String(item.role)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(String(item.description)) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "journey-tags",
									children: item.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(String(tag)) }, tag))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "journey-tenure",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t(String(item.dates)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(String(item.place)) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									className: "journey-image",
									onClick: (event) => {
										event.stopPropagation();
										setDetail(item);
									},
									"aria-label": t(String(`View ${item.name} journey details`)),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: item.image,
										alt: "",
										loading: "lazy",
										decoding: "async"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									className: "journey-arrow",
									onClick: (event) => {
										event.stopPropagation();
										setDetail(item);
									},
									"aria-label": t(String(`Open ${item.name}`)),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
								})
							]
						}, item.id)), visibleItems.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "journey-empty",
							children: t("No journey entries in this category yet.")
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "journey-impact",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "journey-impact-count",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "20+" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							t("Communities"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							t("I’ve Worked With")
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "journey-ecosystems",
						children: ecosystems.map((name, index) => {
							const Icon = ecosystemIcons[index] ?? Orbit;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								className: `journey-ecosystem ${ecosystem === name ? "is-active" : ""}`,
								"aria-pressed": ecosystem === name,
								onClick: () => setEcosystem(ecosystem === name ? null : name),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(String(name)) })]
							}, name);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "journey-view-all",
						onClick: () => setFilter("All"),
						children: [t("View all"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: detail !== null,
				onOpenChange: (open) => {
					if (!open) setDetail(null);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					className: "journey-dialog",
					children: detail && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "journey-detail",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "journey-detail-header",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "journey-detail-identity",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: detail.logo,
									alt: "",
									decoding: "async"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("COMMUNITY PROFILE") }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: t(String(detail.name)) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: t(String(detail.role)) })
								] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "journey-detail-meta",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarRange, {}), t(String(detail.dates))] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, {}), t(String(detail.place))] })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "journey-detail-layout",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
								className: "journey-detail-visual",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: detail.image,
										alt: t(String(`${detail.name} community highlight`)),
										decoding: "async"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { children: t("“Different communities. Same purpose.”") }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "journey-detail-tags",
										children: detail.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(String(tag)) }, tag))
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
								className: "journey-detail-copy",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "journey-detail-kicker",
											children: t("THE COMMUNITY")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t("Building context, connection and momentum.") }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(String(detail.overview)) })
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "journey-detail-section-title",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t("Core responsibilities") })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: detail.responsibilities.map((responsibility, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(index + 1).padStart(2, "0") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(String(responsibility)) })] }, responsibility)) })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "journey-detail-section-title",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t("Impact & outcomes") })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "journey-detail-outcomes",
										children: detail.outcomes.map((outcome) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), outcome] }, outcome))
									})] })
								]
							})]
						})]
					})
				})
			})
		]
	});
}
var dora_cutout_webp_asset_default = {
	version: 1,
	asset_id: "34848e98-0dc5-4467-a1ca-3102311334d8",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/34848e98-0dc5-4467-a1ca-3102311334d8/products-dora-cutout.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/34848e98-0dc5-4467-a1ca-3102311334d8/products-dora-cutout.webp",
	original_filename: "products-dora-cutout.webp",
	size: 37112,
	content_type: "image/webp",
	created_at: "2026-10-09T06:45:09Z"
};
var nexus_clean_webp_asset_default = {
	version: 1,
	asset_id: "93232bc2-856e-422d-a9b5-d82dcea769c3",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/93232bc2-856e-422d-a9b5-d82dcea769c3/products-nexus-clean.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/93232bc2-856e-422d-a9b5-d82dcea769c3/products-nexus-clean.webp",
	original_filename: "products-nexus-clean.webp",
	size: 5226,
	content_type: "image/webp",
	created_at: "2026-10-09T06:45:13Z"
};
var hela_polygons_webp_asset_default = {
	version: 1,
	asset_id: "cfbd31bb-c3c4-41aa-81ef-18940881fb1b",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/cfbd31bb-c3c4-41aa-81ef-18940881fb1b/products-hela-polygons.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/cfbd31bb-c3c4-41aa-81ef-18940881fb1b/products-hela-polygons.webp",
	original_filename: "products-hela-polygons.webp",
	size: 1294,
	content_type: "image/webp",
	created_at: "2026-10-09T06:46:04Z"
};
var hat_cutout_webp_asset_default = {
	version: 1,
	asset_id: "4a024e7d-9f3e-4ed8-b40d-932be831a5c8",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/4a024e7d-9f3e-4ed8-b40d-932be831a5c8/products-hat-cutout.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/4a024e7d-9f3e-4ed8-b40d-932be831a5c8/products-hat-cutout.webp",
	original_filename: "products-hat-cutout.webp",
	size: 22608,
	content_type: "image/webp",
	created_at: "2026-10-09T06:45:11Z"
};
var productChapters = [
	"Overview",
	"User persona",
	"Problem",
	"Before / after",
	"UI mockups",
	"Research & insights",
	"Decisions",
	"Outcomes"
];
var showcaseProjects = [
	{
		id: "dora",
		name: "DoraDAO",
		headline: "More voices.\nMore opportunities.",
		description: "A chain-agnostic platform and fellowship turning online voices into real opportunities for the next generation.",
		art: dora_cutout_webp_asset_default.url,
		theme: "dora",
		metrics: [
			["1.5K+", "Community"],
			["10M+", "Views"],
			["40+", "Partners"],
			["10+", "Countries"]
		]
	},
	{
		id: "nexus",
		name: "Nexus Chain",
		headline: "The next generation\nof open infra.",
		description: "A public Layer 1 blockchain protocol focused on real-world adoption and global ecosystem growth.",
		art: nexus_clean_webp_asset_default.url,
		theme: "nexus",
		metrics: [
			["50K+", "Community"],
			["Mainnet", "2025"],
			["200+", "Builders"],
			["15+", "Ecosystem Apps"]
		]
	},
	{
		id: "hela",
		name: "HeLa Labs",
		headline: "Human-Centric\nInfrastructure\nfor Web3.",
		description: "DevRel and ecosystem growth for a global Web3 infrastructure company building real-world products.",
		art: hela_polygons_webp_asset_default.url,
		theme: "hela",
		metrics: [
			["100K+", "Developers"],
			["3+", "Products"],
			["Global", "Presence"],
			["50+", "Partners"]
		]
	},
	{
		id: "hat",
		name: "Magic Hat",
		headline: "Get paid\nto wear a hat.",
		description: "An AI-powered wearable + app ecosystem where creators earn for capturing the world around them.",
		art: hat_cutout_webp_asset_default.url,
		theme: "hat",
		metrics: [
			["900+", "Active Users"],
			["120+", "Communities"],
			["7 Days", "Pilot"],
			["20%", "Referral Bonus"]
		]
	}
];
var rapidoCase = {
	name: "Rapido",
	description: "A ride-hailing app designed to reduce app switching and make urban commute simpler, faster, and more transparent."
};
function nextShowcaseIndex(index, direction) {
	return (index + direction + 5) % 5;
}
var rapidoStudy = {
	audience: "Aarav, 24",
	context: "A student balancing classes, a limited budget and a daily commute needs a reliable pickup without comparing several apps.",
	priority: "The priority: confidence in the fare, the pickup point and the arrival time.",
	needs: [
		"Quick ride booking",
		"Transparent and fair pricing",
		"Shorter wait times",
		"Multiple ride options in one app"
	],
	pains: [
		"Long and uncertain wait times",
		"Price surge confusion",
		"Switching between multiple ride apps",
		"Lack of real-time updates"
	],
	options: [
		"Bike",
		"Auto",
		"Cab"
	],
	action: "Confirm Ride",
	chapters: {
		2: {
			title: "The commute starts before the ride.",
			intro: "Every switch between apps adds friction. Unclear fares and uncertain pickup times turn a simple trip into a series of decisions.",
			items: [
				["Fragmented booking", "Compare ride types without leaving the same screen."],
				["Unclear pricing", "Show fare and wait time before confirmation."],
				["Pickup uncertainty", "Keep the current location and ride status visible."]
			]
		},
		5: {
			title: "Less friction. More confidence.",
			intro: "The design focuses on the everyday moments that matter: choosing a ride, understanding the price and finding the driver.",
			items: [
				["One comparison", "Bike, auto and cab belong together, with comparable fares and arrival times."],
				["Visible context", "The pickup map stays on screen while a rider chooses a vehicle."],
				["Clear next step", "A single confirmation action replaces competing calls to action."]
			]
		},
		6: {
			title: "Every element earns its place.",
			intro: "Reduce the interface to the decisions a rider actually needs to make.",
			items: [
				["Unified ride selector", "Bring all vehicle options into one compact comparison."],
				["Upfront estimates", "Pair each ride option with its fare and arrival time."],
				["One primary action", "Use a clear confirmation button below the ride choices."]
			]
		},
		7: {
			title: "A simpler path from pickup to ride.",
			intro: "A before-and-after design exploration centered on reducing app switching, clarifying fares and making the next step obvious.",
			items: [
				["Clarity", "Ride type, fare and wait time appear together."],
				["Continuity", "The map and pickup location remain in context."],
				["Confidence", "A visible confirmation state closes the booking flow."]
			]
		}
	}
};
var projectFocus = {
	dora: {
		audience: "Builders and contributors",
		needs: [
			"Fellowship Programs",
			"Community",
			"Real-world opportunities"
		],
		pains: [
			"Discoverability",
			"Onboarding and access",
			"Sustained participation"
		],
		options: [
			"Fellowship Programs",
			"Community",
			"Partners"
		],
		action: "Explore Platform"
	},
	nexus: {
		audience: "Developers",
		needs: [
			"Open Source Contributions",
			"Ecosystem Apps",
			"Community"
		],
		pains: [
			"Discoverability",
			"Onboarding and access",
			"Product adoption"
		],
		options: [
			"Builders",
			"Ecosystem Apps",
			"Community"
		],
		action: "Explore Ecosystem"
	},
	hela: {
		audience: "Developers",
		needs: [
			"Products",
			"Partners",
			"Community"
		],
		pains: [
			"Discoverability",
			"Onboarding and access",
			"Real-world opportunities"
		],
		options: [
			"Products",
			"Community",
			"Partners"
		],
		action: "Explore"
	},
	hat: {
		audience: "Creators",
		needs: [
			"Community",
			"Real-world opportunities",
			"Referral Bonus"
		],
		pains: [
			"Onboarding and access",
			"Sustained participation",
			"Product adoption"
		],
		options: [
			"Creators",
			"Communities",
			"Referral Bonus"
		],
		action: "Join Community"
	}
};
function getProductStudy(project) {
	if (!project) return rapidoStudy;
	const focus = projectFocus[project.id];
	return {
		...focus,
		context: project.description,
		priority: "Clear paths to participate",
		chapters: {
			2: {
				title: "Onboarding and access",
				intro: project.description,
				items: focus.pains.map((pain, i) => [pain, focus.needs[i] ?? focus.needs[0] ?? "Community"])
			},
			5: {
				title: "Community feedback",
				intro: "Design exploration",
				items: focus.options.map((option) => [option, "Discoverability"])
			},
			6: {
				title: "A focused product story",
				intro: project.description,
				items: [
					["Clear paths to participate", focus.options.join(" · ")],
					["A connected ecosystem", "Community and partnerships"],
					["Growth and adoption", focus.action]
				]
			},
			7: {
				title: "Product and ecosystem",
				intro: project.description,
				items: project.metrics.slice(0, 3).map(([value, label]) => [label, value])
			}
		}
	};
}
function getCaseStudySegment(chapter) {
	return {
		label: productChapters[chapter] ?? productChapters[0],
		layout: chapter === 0 || chapter === 3 ? "comparison" : chapter === 4 ? "mockups" : chapter === 1 ? "persona" : "insights"
	};
}
var persona_webp_asset_default = {
	version: 1,
	asset_id: "ae54a4a4-479e-4105-b995-871e898d44cd",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/ae54a4a4-479e-4105-b995-871e898d44cd/products-persona-v2.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/ae54a4a4-479e-4105-b995-871e898d44cd/products-persona-v2.webp",
	original_filename: "products-persona-v2.webp",
	size: 2164,
	content_type: "image/webp",
	created_at: "2026-10-09T05:55:07Z"
};
var botanical_webp_asset_default = {
	version: 1,
	asset_id: "c4b05361-bd2b-433e-ab58-9e397c2aef14",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/c4b05361-bd2b-433e-ab58-9e397c2aef14/products-botanical-clean.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/c4b05361-bd2b-433e-ab58-9e397c2aef14/products-botanical-clean.webp",
	original_filename: "products-botanical-clean.webp",
	size: 11154,
	content_type: "image/webp",
	created_at: "2026-10-09T05:58:51Z"
};
var reference_photo_webp_asset_default = {
	version: 1,
	asset_id: "51e35787-282d-4a6a-9913-80dac9796aa5",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/51e35787-282d-4a6a-9913-80dac9796aa5/products-reference-photo.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/51e35787-282d-4a6a-9913-80dac9796aa5/products-reference-photo.webp",
	original_filename: "products-reference-photo.webp",
	size: 24220,
	content_type: "image/webp",
	created_at: "2026-10-09T06:42:09Z"
};
var chapterIcons = [
	House,
	Users,
	Info,
	Globe,
	Image$1,
	FileText,
	Lightbulb,
	ChartNoAxesCombined
];
var rideTypes = [
	"Bike",
	"Auto",
	"Cab"
];
function RidePhone({ before = false, compact = false }) {
	const { t } = useLanguage();
	const [ride, setRide] = (0, import_react.useState)(0);
	const [confirmed, setConfirmed] = (0, import_react.useState)(false);
	const [location, setLocation] = (0, import_react.useState)("Current location");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `product-phone ${before ? "is-before" : ""} ${compact ? "is-compact" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "phone-status",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "9:41" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signal, { size: 10 })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "phone-location",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 10 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					"aria-label": t(before ? "Pick a location" : "Current location"),
					value: location === "Current location" ? t(before ? "Pick a location" : location) : location,
					onChange: (e) => {
						setLocation(e.target.value);
						setConfirmed(false);
					}
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "phone-map",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 180 100",
					"aria-label": t("Ride pickup map"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							className: "map-block",
							d: "M0 10L48 0 76 22 60 53 0 61ZM105 0L180 0 180 48 125 39ZM70 64L120 52 167 75 140 100 60 100Z"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
							className: "map-road",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M-10 80L190 17M24 -5L82 110M-5 29L190 71M116 -5L154 110M4 105L138 -5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							className: "map-route",
							d: "M75 84L61 59 103 43 89 14"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							className: "map-vehicle",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "35",
									y: "30",
									children: "⌁"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "130",
									y: "29",
									children: "⌁"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "144",
									y: "79",
									children: "⌁"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
					className: "phone-pin",
					size: 22
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "phone-rides",
				children: rideTypes.map((type, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					className: ride === i ? "selected" : "",
					"aria-pressed": ride === i,
					"aria-label": t(`Select ${type} ride`),
					onClick: () => {
						setRide(i);
						setConfirmed(false);
					},
					children: [
						i === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bike, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Car, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t(type) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: [
							"2 min · ₹45",
							"3 min · ₹60",
							"5 min · ₹120"
						][i] })
					]
				}, type))
			}),
			!before && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "phone-confirm",
				onClick: () => setConfirmed(!confirmed),
				children: confirmed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), t("Ride confirmed")] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [t("Confirm Ride"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})] })
			})
		]
	});
}
function ProductPhone({ project, before = false, confirmation = false }) {
	const { t } = useLanguage();
	const study = getProductStudy(project);
	const [option, setOption] = (0, import_react.useState)(0);
	const [confirmed, setConfirmed] = (0, import_react.useState)(confirmation);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `product-phone ecosystem-phone theme-${project.theme} ${before ? "is-before" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "phone-status",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "9:41" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signal, { size: 10 })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ecosystem-phone-brand",
				children: project.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ecosystem-phone-art",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.art,
					alt: "",
					loading: "lazy",
					decoding: "async"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "phone-rides",
				children: study.options.map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					"aria-pressed": option === index,
					className: option === index ? "selected" : "",
					onClick: () => {
						setOption(index);
						setConfirmed(false);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t(label) })]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ecosystem-phone-selection",
				children: t(study.needs[option] ?? study.needs[0] ?? "")
			}),
			!before && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "phone-confirm",
				onClick: () => setConfirmed(!confirmed),
				children: confirmed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), t("Selected")] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [t(study.action), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})] })
			})
		]
	});
}
function Persona({ full = false, project = null }) {
	const { t } = useLanguage();
	const study = getProductStudy(project);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `product-persona ${full ? "full-persona" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t("User Persona") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "persona-identity",
				children: [project ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `persona-audience theme-${project.theme}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: persona_webp_asset_default.url,
					alt: "Aarav",
					loading: "lazy",
					decoding: "async"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t(study.audience) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t(project ? "Audience profile" : "College Student, Bengaluru") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { children: t(project ? study.context : "“I just want a quick and reliable ride without checking 3 different apps.”") })
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "persona-columns",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), t("Needs")] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: study.needs.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t(s) }, s)) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), t("Pain Points")] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: study.pains.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t(s) }, s)) })] })]
			})
		]
	});
}
function CaseStudyChapter({ project, chapter }) {
	const { t } = useLanguage();
	const study = getProductStudy(project);
	const segment = getCaseStudySegment(chapter);
	const phone = (before = false, confirmation = false) => project ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductPhone, {
		project,
		before,
		confirmation
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RidePhone, { before });
	if (segment.layout === "comparison" || segment.layout === "mockups") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rapido-overview ${segment.layout === "mockups" ? "mockup-layout" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "phone-frame before-frame",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "frame-label",
					children: t("BEFORE")
				}), phone(true)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "phone-frame after-frame",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "frame-label",
					children: t("AFTER")
				}), phone()]
			}),
			segment.layout === "mockups" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "phone-frame after-frame",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "frame-label",
					children: t("CONFIRMATION")
				}), phone(false, true)]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Persona, { project })
		]
	});
	if (segment.layout === "persona") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "product-chapter-body",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Persona, {
			full: true,
			project
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "chapter-note",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["01 / ", t("CONTEXT")] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t(project ? study.audience : "One commute. Too many apps.") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(study.context) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(study.priority) })
			]
		})]
	});
	const content = study.chapters[chapter === 2 || chapter === 5 || chapter === 6 ? chapter : 7];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "product-research",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				String(chapter + 1).padStart(2, "0"),
				" / ",
				t(segment.label)
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t(content.title) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(content.intro) }),
			project && chapter === 7 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "project-case-metrics",
				children: project.metrics.map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: value }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(label) })] }, label))
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "product-insight-list",
			children: content.items.map(([title, body], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(index + 1).padStart(2, "0") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: t(title) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(body) })] })] }, title))
		})]
	});
}
function ProductShowcase() {
	const { t } = useLanguage();
	const [chapter, setChapter] = (0, import_react.useState)(0);
	const [selected, setSelected] = (0, import_react.useState)(0);
	const [dialog, setDialog] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [expanded, setExpanded] = (0, import_react.useState)(false);
	const project = selected === 0 ? null : showcaseProjects[selected - 1] ?? null;
	const choose = (index) => {
		setSelected(index);
		setChapter(0);
	};
	const code = `<section aria-label="${project?.name ?? "Rapido"}">\n  <h1>${project?.name ?? "Rapido"}</h1>\n  <p>${project?.description ?? rapidoCase.description}</p>\n</section>`;
	const copy = async (value) => {
		try {
			await navigator.clipboard.writeText(value);
			setCopied(true);
		} catch {
			setCopied(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "products",
		className: `products-section ${expanded ? "product-expanded" : ""}`,
		"aria-labelledby": "products-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "products-background",
				src: reference_photo_webp_asset_default.url,
				alt: "",
				"aria-hidden": "true",
				loading: "lazy",
				decoding: "async",
				fetchPriority: "low"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "products-inner",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "products-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							t("CHAPTER 5"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "/" }),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "heading-category",
								children: t("PRODUCTS")
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							id: "products-title",
							children: [
								t("Things built because"),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: t("nobody else could.") })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "product-browser",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "product-browser-toolbar",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "browser-lights",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									"aria-label": t("Previous project"),
									onClick: () => choose(nextShowcaseIndex(selected, -1)),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									"aria-label": t("Next project"),
									onClick: () => choose(nextShowcaseIndex(selected, 1)),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "browser-address",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, {}), "portfolio.shivam.dev"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									title: t("Share project"),
									"aria-label": t("Share project"),
									onClick: () => {
										setCopied(false);
										setDialog("share");
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									title: t("Next project"),
									"aria-label": t("Browse another project"),
									onClick: () => choose(nextShowcaseIndex(selected, 1)),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									title: t("Expand showcase"),
									"aria-label": t("Expand showcase"),
									"aria-pressed": expanded,
									onClick: () => setExpanded(!expanded),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "product-browser-body",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
								className: "product-sidebar",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "product-wordmark",
										children: "certifier"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
										"aria-label": t("Product case study chapters"),
										children: productChapters.map((label, index) => {
											const Icon = chapterIcons[index] ?? House;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												variant: "ghost",
												className: chapter === index ? "active" : "",
												"aria-pressed": chapter === index,
												onClick: () => setChapter(index),
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(index + 1).padStart(2, "0") }),
													t(label)
												]
											}, label);
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: botanical_webp_asset_default.url,
										alt: "",
										loading: "lazy",
										decoding: "async"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "product-main",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "product-chapter-top",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											t("CHAPTER 5"),
											" / ",
											t("PRODUCTS")
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "——— 2024" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
										className: "featured-product",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `featured-logo ${project ? `theme-${project.theme}` : ""}`,
												children: project ? project.name.slice(0, 1) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
													viewBox: "0 0 60 64",
													"aria-hidden": "true",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
															cx: "13",
															cy: "13",
															rx: "4",
															ry: "6",
															transform: "rotate(-28 13 13)"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
															cx: "26",
															cy: "10",
															rx: "4",
															ry: "5"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
															cx: "39",
															cy: "13",
															rx: "4",
															ry: "5",
															transform: "rotate(25 39 13)"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
															cx: "48",
															cy: "20",
															rx: "3.5",
															ry: "4.5",
															transform: "rotate(45 48 20)"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17 29Q28 22 40 28L39 45Q38 58 28 58Q18 58 17 46Z" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13 22Q28 29 46 23L44 28Q28 33 15 27Z" })
													]
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: project?.name ?? "Rapido" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(project?.description ?? rapidoCase.description) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "featured-tags",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), t("Live Product")] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(project ? "Ecosystem" : "Mobile App") }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(project ? "Community" : "B2C") })
													]
												})
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "featured-summary",
												children: t(project ? project.description : "Rapido focused on solving everyday commute frictions — fare transparency, long wait times, and the hassle of switching between multiple apps.")
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "product-stage",
										"aria-live": "polite",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseStudyChapter, {
											project,
											chapter
										}, `${selected}-${chapter}`)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
										className: "product-filmstrip",
										"aria-label": t("Case study previews"),
										children: productChapters.map((label, index) => {
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												variant: "ghost",
												className: chapter === index ? "active" : "",
												"aria-label": t(`Show ${label}`),
												"aria-pressed": chapter === index,
												onClick: () => setChapter(index),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `film-preview film-${index}`,
													children: index === 1 ? project ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: persona_webp_asset_default.url,
														alt: "",
														loading: "lazy"
													}) : index === 5 || index === 7 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "film-bars",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
														]
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "film-sheets",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
														]
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(label) })]
											}, label);
										})
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "product-project-shelf",
						children: showcaseProjects.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: `product-project-card theme-${item.theme} ${selected === index + 1 ? "is-selected" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								className: "project-cover",
								"aria-label": t(`Explore ${item.name}`),
								onClick: () => choose(index + 1),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "project-cover-nav",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.name }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												t("Product"),
												" ",
												t("Community")
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t("Join") })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t(item.headline) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: item.art,
										alt: "",
										loading: "lazy",
										decoding: "async"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "project-card-copy",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item.name }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(item.description) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "project-card-metrics",
										children: item.metrics.map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: value }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(label) })] }, label))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "project-card-actions",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											onClick: () => {
												choose(index + 1);
												document.getElementById("products-title")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
											},
											children: [t(item.id === "hat" ? "Join Community" : item.id === "nexus" ? "Explore Ecosystem" : item.id === "hela" ? "Explore" : "Explore Platform"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "outline",
											onClick: () => {
												choose(index + 1);
												setDialog("code");
											},
											children: [item.id === "hela" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, {}), t(item.id === "hela" ? "View Work" : "View Code")]
										})]
									})
								]
							})]
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "product-pagination",
						"aria-label": t("Select featured product"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": t("Previous featured product"),
								onClick: () => choose(nextShowcaseIndex(selected, -1)),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {})
							}),
							["Rapido", ...showcaseProjects.map((p) => p.name)].map((name, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: selected === index ? "active" : "",
								"aria-label": t(`Feature ${name}`),
								"aria-pressed": selected === index,
								onClick: () => choose(index),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
							}, name)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": t("Next featured product"),
								onClick: () => choose(nextShowcaseIndex(selected, 1)),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: dialog !== null,
				onOpenChange: (open) => {
					if (!open) setDialog(null);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "product-dialog",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: [
							project?.name ?? "Rapido",
							" / ",
							t(dialog === "share" ? "Share" : "Interface preview")
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: t(dialog === "share" ? "Products & case studies" : "Reference interface study") }),
						dialog === "share" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => copy(`${window.location.origin}/#products`),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), t(copied ? "Copied" : "Copy link")]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: code }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => copy(code),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), t(copied ? "Copied" : "Copy code")]
						})] })
					]
				})
			})
		]
	});
}
function MuseumRecord({ portrait, close, step, visit }) {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: portrait !== null,
		onOpenChange: (open) => {
			if (!open) close();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "mw-card",
			overlayClassName: "mw-card-overlay",
			children: portrait && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mw-card-top",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						t("Memory record"),
						" · ",
						portrait.number,
						" / 12"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "mw-card-x",
							"aria-label": t("Close"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mw-card-scroll",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mw-card-media",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: portrait.imageSrc,
								alt: t(portrait.title),
								decoding: "async"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mw-eyebrow",
							children: portrait.organization ?? t("Personal notebook")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "mw-card-title",
							children: t(portrait.title)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
							className: "mw-card-body",
							title: t(portrait.caption),
							children: t(portrait.caption)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mw-pills",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("Chapter") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: portrait.number })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("Period") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t(portrait.organizationPeriod) })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("Theme") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: portrait.tags.slice(0, 2).map((tag) => t(tag)).join(" · ") })] })
							]
						})
					]
				}, portrait.id),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mw-card-actions",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							className: "mw-btn mw-btn-dark",
							onClick: visit,
							children: [t(portrait.ctaLabel), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "mw-btn",
							onClick: () => step(-1),
							"aria-label": t("Previous"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "mw-btn",
							onClick: () => step(1),
							"aria-label": t("Next"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
						})
					]
				})
			] })
		})
	});
}
var portraits = [
	{
		id: "explorer",
		number: "01",
		title: "THE EXPLORER",
		caption: "New cities, strange roads, and familiar skies. Always up for a plan, a detour, or a last-minute trip.",
		orientation: "landscape",
		wallPosition: {
			x: 3,
			y: 8,
			width: 9
		},
		stopIndex: 0,
		hintLine: "Draft · A memory to share",
		organization: null,
		organizationPeriod: "Period to be added",
		experienceAnchorId: null,
		ctaLabel: "Continue the journey",
		story: "Sample story — to be replaced with my own memory. I followed my curiosity into something unfamiliar. The people I met changed how I saw the world. What stayed with me was not a milestone, but a small moment. This is where I will share what happened, what challenged me, and what I learned.",
		tags: ["Curiosity", "Connection"],
		imageSrc: {
			version: 1,
			asset_id: "f3e0c418-b72a-481d-a341-841258124343",
			project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
			url: "/__l5e/assets-v1/f3e0c418-b72a-481d-a341-841258124343/museum-portrait-1-clean.webp",
			r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/f3e0c418-b72a-481d-a341-841258124343/museum-portrait-1-clean.webp",
			original_filename: "museum-portrait-1-clean.webp",
			size: 9150,
			content_type: "image/webp",
			created_at: "2026-10-11T12:49:20Z"
		}.url
	},
	{
		id: "cultures",
		number: "02",
		title: "THE CULTURES",
		caption: "People, places and stories that make the world feel a little smaller and a lot kinder.",
		orientation: "portrait",
		wallPosition: {
			x: 12.5,
			y: 47,
			width: 6
		},
		stopIndex: 0,
		hintLine: "Draft · A memory to share",
		organization: null,
		organizationPeriod: "Period to be added",
		experienceAnchorId: null,
		ctaLabel: "Continue the journey",
		story: "Sample story — to be replaced with my own memory. I followed my curiosity into something unfamiliar. The people I met changed how I saw the world. What stayed with me was not a milestone, but a small moment. This is where I will share what happened, what challenged me, and what I learned.",
		tags: ["Curiosity", "Connection"],
		imageSrc: {
			version: 1,
			asset_id: "5ab02886-75a7-4d5c-ab56-9ac04903daa8",
			project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
			url: "/__l5e/assets-v1/5ab02886-75a7-4d5c-ab56-9ac04903daa8/museum-portrait-2-clean.webp",
			r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/5ab02886-75a7-4d5c-ab56-9ac04903daa8/museum-portrait-2-clean.webp",
			original_filename: "museum-portrait-2-clean.webp",
			size: 5242,
			content_type: "image/webp",
			created_at: "2026-10-11T12:49:23Z"
		}.url
	},
	{
		id: "builder",
		number: "03",
		title: "THE BUILDER",
		caption: "Ideas, products, communities and a little chaos. Turning curiosity into things that actually matter.",
		orientation: "landscape",
		wallPosition: {
			x: 20,
			y: 12,
			width: 9
		},
		stopIndex: 1,
		hintLine: "Draft · A memory to share",
		organization: "DoraDAO",
		organizationPeriod: "Period to be added",
		experienceAnchorId: "experience-dora",
		ctaLabel: "Explore DoraDAO",
		story: "Sample story — to be replaced with my own memory. I followed my curiosity into something unfamiliar. The people I met changed how I saw the world. What stayed with me was not a milestone, but a small moment. This is where I will share what happened, what challenged me, and what I learned.",
		tags: ["Curiosity", "Connection"],
		imageSrc: {
			version: 1,
			asset_id: "23fa9671-ced4-48d1-a036-a1968ebadc8a",
			project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
			url: "/__l5e/assets-v1/23fa9671-ced4-48d1-a036-a1968ebadc8a/museum-portrait-3-clean.webp",
			r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/23fa9671-ced4-48d1-a036-a1968ebadc8a/museum-portrait-3-clean.webp",
			original_filename: "museum-portrait-3-clean.webp",
			size: 8504,
			content_type: "image/webp",
			created_at: "2026-10-11T12:49:26Z"
		}.url
	},
	{
		id: "places",
		number: "04",
		title: "THE PLACES",
		caption: "From crowded streets to quiet temples, every place teaches me something new about life and people.",
		orientation: "landscape",
		wallPosition: {
			x: 29,
			y: 51,
			width: 7
		},
		stopIndex: 1,
		hintLine: "Draft · A memory to share",
		organization: null,
		organizationPeriod: "Period to be added",
		experienceAnchorId: null,
		ctaLabel: "Continue the journey",
		story: "Sample story — to be replaced with my own memory. I followed my curiosity into something unfamiliar. The people I met changed how I saw the world. What stayed with me was not a milestone, but a small moment. This is where I will share what happened, what challenged me, and what I learned.",
		tags: ["Curiosity", "Connection"],
		imageSrc: {
			version: 1,
			asset_id: "661461b2-b53b-47e7-ad4c-39b36a98caca",
			project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
			url: "/__l5e/assets-v1/661461b2-b53b-47e7-ad4c-39b36a98caca/museum-portrait-4-clean.webp",
			r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/661461b2-b53b-47e7-ad4c-39b36a98caca/museum-portrait-4-clean.webp",
			original_filename: "museum-portrait-4-clean.webp",
			size: 6136,
			content_type: "image/webp",
			created_at: "2026-10-11T12:49:29Z"
		}.url
	},
	{
		id: "foodie",
		number: "05",
		title: "THE FOODIE",
		caption: "Good food, better conversations. Street food, home cooked meals, and the kind of places you remember.",
		orientation: "portrait",
		wallPosition: {
			x: 36,
			y: 43,
			width: 6
		},
		stopIndex: 2,
		hintLine: "Draft · A memory to share",
		organization: null,
		organizationPeriod: "Period to be added",
		experienceAnchorId: null,
		ctaLabel: "Continue the journey",
		story: "Sample story — to be replaced with my own memory. I followed my curiosity into something unfamiliar. The people I met changed how I saw the world. What stayed with me was not a milestone, but a small moment. This is where I will share what happened, what challenged me, and what I learned.",
		tags: ["Curiosity", "Connection"],
		imageSrc: {
			version: 1,
			asset_id: "9ee8e0a4-9d80-4f61-949b-efbe9b3bef06",
			project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
			url: "/__l5e/assets-v1/9ee8e0a4-9d80-4f61-949b-efbe9b3bef06/museum-portrait-5-clean.webp",
			r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/9ee8e0a4-9d80-4f61-949b-efbe9b3bef06/museum-portrait-5-clean.webp",
			original_filename: "museum-portrait-5-clean.webp",
			size: 4976,
			content_type: "image/webp",
			created_at: "2026-10-11T12:49:32Z"
		}.url
	},
	{
		id: "learner",
		number: "06",
		title: "THE LEARNER",
		caption: "Books, ideas, long conversations and random rabbit holes. Always learning, always questioning, always curious.",
		orientation: "landscape",
		wallPosition: {
			x: 40,
			y: 7,
			width: 9
		},
		stopIndex: 2,
		hintLine: "Draft · A memory to share",
		organization: null,
		organizationPeriod: "Period to be added",
		experienceAnchorId: null,
		ctaLabel: "Continue the journey",
		story: "Sample story — to be replaced with my own memory. I followed my curiosity into something unfamiliar. The people I met changed how I saw the world. What stayed with me was not a milestone, but a small moment. This is where I will share what happened, what challenged me, and what I learned.",
		tags: ["Curiosity", "Connection"],
		imageSrc: {
			version: 1,
			asset_id: "98257b97-daf2-4a36-a038-31c26fc07561",
			project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
			url: "/__l5e/assets-v1/98257b97-daf2-4a36-a038-31c26fc07561/museum-portrait-6-clean.webp",
			r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/98257b97-daf2-4a36-a038-31c26fc07561/museum-portrait-6-clean.webp",
			original_filename: "museum-portrait-6-clean.webp",
			size: 10318,
			content_type: "image/webp",
			created_at: "2026-10-11T12:49:35Z"
		}.url
	},
	{
		id: "traveller",
		number: "07",
		title: "THE TRAVELLER",
		caption: "Mountains, cities, beaches or small towns — I just love being somewhere new, collecting memories and perspectives.",
		orientation: "landscape",
		wallPosition: {
			x: 61,
			y: 5,
			width: 9
		},
		stopIndex: 4,
		hintLine: "Draft · A memory to share",
		organization: null,
		organizationPeriod: "Period to be added",
		experienceAnchorId: null,
		ctaLabel: "Continue the journey",
		story: "Sample story — to be replaced with my own memory. I followed my curiosity into something unfamiliar. The people I met changed how I saw the world. What stayed with me was not a milestone, but a small moment. This is where I will share what happened, what challenged me, and what I learned.",
		tags: ["Curiosity", "Connection"],
		imageSrc: {
			version: 1,
			asset_id: "bd872d44-9574-49ef-9964-ae70a4c8966f",
			project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
			url: "/__l5e/assets-v1/bd872d44-9574-49ef-9964-ae70a4c8966f/museum-portrait-7-clean.webp",
			r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/bd872d44-9574-49ef-9964-ae70a4c8966f/museum-portrait-7-clean.webp",
			original_filename: "museum-portrait-7-clean.webp",
			size: 8322,
			content_type: "image/webp",
			created_at: "2026-10-11T12:49:38Z"
		}.url
	},
	{
		id: "moments",
		number: "08",
		title: "THE MOMENTS",
		caption: "Slow mornings, old streets, good coffee, and little moments that make life feel special.",
		orientation: "portrait",
		wallPosition: {
			x: 70,
			y: 42,
			width: 6
		},
		stopIndex: 4,
		hintLine: "Draft · A memory to share",
		organization: null,
		organizationPeriod: "Period to be added",
		experienceAnchorId: null,
		ctaLabel: "Continue the journey",
		story: "Sample story — to be replaced with my own memory. I followed my curiosity into something unfamiliar. The people I met changed how I saw the world. What stayed with me was not a milestone, but a small moment. This is where I will share what happened, what challenged me, and what I learned.",
		tags: ["Curiosity", "Connection"],
		imageSrc: {
			version: 1,
			asset_id: "4b5f2a08-5a37-441f-9f68-1d06a7ea6101",
			project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
			url: "/__l5e/assets-v1/4b5f2a08-5a37-441f-9f68-1d06a7ea6101/museum-portrait-8-clean.webp",
			r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/4b5f2a08-5a37-441f-9f68-1d06a7ea6101/museum-portrait-8-clean.webp",
			original_filename: "museum-portrait-8-clean.webp",
			size: 7102,
			content_type: "image/webp",
			created_at: "2026-10-11T12:49:41Z"
		}.url
	},
	{
		id: "human",
		number: "09",
		title: "THE HUMAN",
		caption: "A little chaotic, very caring. I value meaningful connections, good people and the kind of bonds that feel like home.",
		orientation: "landscape",
		wallPosition: {
			x: 61,
			y: 57,
			width: 9
		},
		stopIndex: 4,
		hintLine: "Draft · A memory to share",
		organization: null,
		organizationPeriod: "Period to be added",
		experienceAnchorId: null,
		ctaLabel: "Continue the journey",
		story: "Sample story — to be replaced with my own memory. I followed my curiosity into something unfamiliar. The people I met changed how I saw the world. What stayed with me was not a milestone, but a small moment. This is where I will share what happened, what challenged me, and what I learned.",
		tags: ["Curiosity", "Connection"],
		imageSrc: {
			version: 1,
			asset_id: "f930193d-b434-4c99-93f0-21e25d2161fa",
			project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
			url: "/__l5e/assets-v1/f930193d-b434-4c99-93f0-21e25d2161fa/museum-portrait-9-clean.webp",
			r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/f930193d-b434-4c99-93f0-21e25d2161fa/museum-portrait-9-clean.webp",
			original_filename: "museum-portrait-9-clean.webp",
			size: 5898,
			content_type: "image/webp",
			created_at: "2026-10-11T12:49:43Z"
		}.url
	},
	{
		id: "dreamer",
		number: "10",
		title: "THE DREAMER",
		caption: "Bigger ideas, bolder possibilities. Always curious about what's next and how we can make a positive impact.",
		orientation: "portrait",
		wallPosition: {
			x: 83,
			y: 5,
			width: 6
		},
		stopIndex: 5,
		hintLine: "Draft · A memory to share",
		organization: null,
		organizationPeriod: "Period to be added",
		experienceAnchorId: null,
		ctaLabel: "Continue the journey",
		story: "Sample story — to be replaced with my own memory. I followed my curiosity into something unfamiliar. The people I met changed how I saw the world. What stayed with me was not a milestone, but a small moment. This is where I will share what happened, what challenged me, and what I learned.",
		tags: ["Curiosity", "Connection"],
		imageSrc: {
			version: 1,
			asset_id: "231ffa9f-9355-4452-a757-1022447fe9d8",
			project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
			url: "/__l5e/assets-v1/231ffa9f-9355-4452-a757-1022447fe9d8/museum-portrait-10-clean.webp",
			r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/231ffa9f-9355-4452-a757-1022447fe9d8/museum-portrait-10-clean.webp",
			original_filename: "museum-portrait-10-clean.webp",
			size: 4670,
			content_type: "image/webp",
			created_at: "2026-10-11T12:49:46Z"
		}.url
	},
	{
		id: "friend",
		number: "11",
		title: "THE FRIEND",
		caption: "Deep talks, silly jokes, late night plans. I cherish the people who make life lighter, louder and better.",
		orientation: "landscape",
		wallPosition: {
			x: 80,
			y: 49,
			width: 9
		},
		stopIndex: 5,
		hintLine: "Draft · A memory to share",
		organization: null,
		organizationPeriod: "Period to be added",
		experienceAnchorId: null,
		ctaLabel: "Continue the journey",
		story: "Sample story — to be replaced with my own memory. I followed my curiosity into something unfamiliar. The people I met changed how I saw the world. What stayed with me was not a milestone, but a small moment. This is where I will share what happened, what challenged me, and what I learned.",
		tags: ["Curiosity", "Connection"],
		imageSrc: {
			version: 1,
			asset_id: "829a8411-7614-4210-93d3-7e17a48132c8",
			project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
			url: "/__l5e/assets-v1/829a8411-7614-4210-93d3-7e17a48132c8/museum-portrait-11-clean.webp",
			r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/829a8411-7614-4210-93d3-7e17a48132c8/museum-portrait-11-clean.webp",
			original_filename: "museum-portrait-11-clean.webp",
			size: 6466,
			content_type: "image/webp",
			created_at: "2026-10-11T12:49:49Z"
		}.url
	},
	{
		id: "everyday",
		number: "12",
		title: "THE EVERYDAY",
		caption: "Cooking, music, movies, walks, gym, chai, and the simple things that keep me grounded.",
		orientation: "landscape",
		wallPosition: {
			x: 90,
			y: 43,
			width: 7
		},
		stopIndex: 5,
		hintLine: "Draft · A memory to share",
		organization: null,
		organizationPeriod: "Period to be added",
		experienceAnchorId: null,
		ctaLabel: "Continue the journey",
		story: "Sample story — to be replaced with my own memory. I followed my curiosity into something unfamiliar. The people I met changed how I saw the world. What stayed with me was not a milestone, but a small moment. This is where I will share what happened, what challenged me, and what I learned.",
		tags: ["Curiosity", "Connection"],
		imageSrc: {
			version: 1,
			asset_id: "23f0f755-7193-410e-9f42-effd1cfb6a15",
			project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
			url: "/__l5e/assets-v1/23f0f755-7193-410e-9f42-effd1cfb6a15/museum-portrait-12-clean.webp",
			r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/23f0f755-7193-410e-9f42-effd1cfb6a15/museum-portrait-12-clean.webp",
			original_filename: "museum-portrait-12-clean.webp",
			size: 5734,
			content_type: "image/webp",
			created_at: "2026-10-11T12:49:52Z"
		}.url
	}
];
var opening_tv_scene_default = "/assets/opening-tv-scene-B4cErd6U.webp";
var international_wall_default = "/assets/international-wall-BYo8dRze.webp";
var museumOpeningScreens = [
	{
		value: "5M+",
		label: "Total Impressions",
		x: 20.5,
		y: 37.6,
		w: 16,
		h: 15,
		record: 2
	},
	{
		value: "100K+",
		label: "Users",
		x: 55,
		y: 40.5,
		w: 17.5,
		h: 14,
		record: 9
	},
	{
		value: "60K+",
		label: "Community Members",
		x: 9.6,
		y: 58.4,
		w: 17,
		h: 15,
		record: 8
	},
	{
		value: "1M+",
		label: "Users in 8 Days",
		x: 38,
		y: 58.6,
		w: 22.6,
		h: 16,
		record: 2
	},
	{
		value: "1500+",
		label: "Fellowship Participants",
		x: 70.5,
		y: 59.8,
		w: 15.4,
		h: 14.6,
		record: 5
	},
	{
		value: "40+",
		label: "Global Partners",
		x: 3,
		y: 78,
		w: 20,
		h: 15.6,
		record: 1
	},
	{
		value: "10L+",
		label: "Views",
		x: 33.7,
		y: 80.6,
		w: 21.5,
		h: 14,
		record: 9
	},
	{
		value: "30+",
		label: "Events & Collaborations",
		x: 71,
		y: 80,
		w: 22,
		h: 15,
		record: 10
	}
];
function MuseumOpening({ open }) {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mw-opening",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "mw-opening-wall",
				src: international_wall_default,
				alt: "",
				"aria-hidden": "true",
				loading: "lazy",
				decoding: "async",
				fetchPriority: "low"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mw-inscription",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						t("A curious mind,"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						t("an active life,"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						t("a builder at heart.")
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("Exploring technology, people and ideas across borders — trying to create opportunities that help more people build, belong and become their best selves.") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						asChild: true,
						className: "mw-about-link",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							children: [t("More about me"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mw-handwritten",
						children: [
							t("Same person."),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							t("Just a little more curious everyday."),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "⌣ \xA0 ⤵"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mw-tv-installation",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: opening_tv_scene_default,
					width: 1024,
					height: 1024,
					alt: t("Shivam seated on a stack of vintage televisions"),
					loading: "lazy",
					decoding: "async"
				}), museumOpeningScreens.map((screen, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					className: `mw-tv-screen mw-tv-screen-${i}`,
					style: {
						"--sx": `${screen.x}%`,
						"--sy": `${screen.y}%`,
						"--sw": `${screen.w}%`,
						"--sh": `${screen.h}%`
					},
					"aria-label": `${screen.value} ${t(screen.label)}`,
					onClick: () => {
						const portrait = portraits[screen.record];
						if (portrait) open(portrait);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: screen.value }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(screen.label) })]
				}, screen.label))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mw-opening-memories",
				children: portraits.slice(0, 2).map((portrait) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					className: "mw-opening-memory",
					onClick: () => open(portrait),
					"aria-label": `${portrait.number}. ${t(portrait.title)}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: portrait.imageSrc,
						alt: "",
						loading: "lazy",
						decoding: "async"
					})
				}, portrait.id))
			})
		]
	});
}
var carved_wall_webp_asset_default = {
	version: 1,
	asset_id: "d18bf816-4aea-4f89-8049-2abeba02dc35",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/d18bf816-4aea-4f89-8049-2abeba02dc35/carved-wall.webp",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/d18bf816-4aea-4f89-8049-2abeba02dc35/carved-wall.webp",
	original_filename: "carved-wall.webp",
	size: 38146,
	content_type: "image/webp",
	created_at: "2026-10-11T17:12:37Z"
};
var museumLayouts = [
	{
		start: 0,
		end: 3,
		placements: [
			[
				2,
				6,
				19,
				1.6
			],
			[
				3,
				66,
				12,
				1.25
			],
			[
				78,
				29,
				18,
				.95
			]
		],
		narrow: [
			[
				4,
				62,
				34,
				1.6
			],
			[
				6,
				38,
				28,
				1.5
			],
			[
				64,
				26,
				30,
				1.2
			]
		]
	},
	{
		start: 3,
		end: 8,
		placements: [
			[
				4,
				10,
				20,
				1.7
			],
			[
				43,
				2,
				14,
				.95
			],
			[
				77,
				28,
				19,
				1.65
			],
			[
				9,
				65,
				17,
				1.5
			],
			[
				46,
				66,
				21,
				1.9
			]
		],
		narrow: [
			[
				5,
				3,
				36,
				1.7
			],
			[
				67,
				15,
				27,
				1.1
			],
			[
				6,
				40,
				33,
				1.65
			],
			[
				61,
				53,
				32,
				1.5
			],
			[
				10,
				79,
				35,
				1.9
			]
		]
	},
	{
		start: 8,
		end: 12,
		placements: [
			[
				4,
				12,
				20,
				1.6
			],
			[
				45,
				2,
				15,
				.95
			],
			[
				14,
				67,
				23,
				1.8
			],
			[
				77,
				47,
				19,
				1.5
			]
		],
		narrow: [
			[
				5,
				3,
				36,
				1.6
			],
			[
				67,
				17,
				27,
				1.1
			],
			[
				8,
				54,
				36,
				1.8
			],
			[
				63,
				72,
				30,
				1.5
			]
		]
	}
];
function Frame({ portrait, slot, placement, narrow, progress, at, reduced, open }) {
	const { t } = useLanguage();
	const [left, top, width, aspect] = placement;
	const delay = slot * .018;
	const opacity = useTransform(progress, [at - .22 + delay, at - .06 + delay], [reduced ? 1 : 0, 1]);
	const y = useTransform(progress, [at - .22 + delay, at - .06 + delay], [reduced ? 0 : 36, 0]);
	const rotate = useTransform(progress, [at - .22 + delay, at - .06 + delay], [reduced ? 0 : slot % 2 ? 2.5 : -2.5, 0]);
	const style = {
		"--fx": `${left}%`,
		"--fy": `${top}%`,
		"--fw": `${width}%`,
		"--fa": aspect,
		"--nx": `${narrow[0]}%`,
		"--ny": `${narrow[1]}%`,
		"--nw": `${narrow[2]}%`,
		"--na": narrow[3]
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
		className: "mw-frame",
		style: {
			...style,
			opacity,
			y,
			rotate
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "mw-frame-button",
			"aria-label": `${portrait.number}. ${t(portrait.title)}`,
			onClick: open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: portrait.imageSrc,
				alt: t(portrait.title),
				loading: "lazy",
				decoding: "async",
				draggable: false
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [
			portrait.number,
			". ",
			t(portrait.title)
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			title: t(portrait.caption),
			children: t(portrait.caption)
		})] })]
	});
}
function MuseumWall() {
	const { t } = useLanguage();
	const reduced = useReducedMotion();
	const [selected, setSelected] = (0, import_react.useState)(null);
	const step = (dir) => {
		if (!selected) return;
		const i = portraits.findIndex((p) => p.id === selected.id);
		setSelected(portraits[(i + dir + portraits.length) % portraits.length] ?? null);
	};
	const visit = () => {
		const anchor = selected?.experienceAnchorId;
		if (!anchor) {
			step(1);
			return;
		}
		setSelected(null);
		window.dispatchEvent(new CustomEvent("museum-company-select", { detail: anchor.replace("experience-", "") }));
		setTimeout(() => document.getElementById(anchor)?.scrollIntoView({
			behavior: reduced ? "instant" : "smooth",
			block: "center"
		}), 60);
	};
	const section = (0, import_react.useRef)(null);
	const track = (0, import_react.useRef)(null);
	const [travel, setTravel] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const node = track.current;
		if (!node) return;
		const measure = () => setTravel(Math.max(0, (node.children.length - 1) * node.clientWidth));
		measure();
		const ro = new ResizeObserver(measure);
		ro.observe(node);
		return () => ro.disconnect();
	}, []);
	const { scrollYProgress } = useScroll({
		target: section,
		offset: ["start start", "end end"]
	});
	const smooth = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30,
		mass: .6
	});
	const progress = reduced ? scrollYProgress : smooth;
	const x = useTransform(progress, (v) => -v * travel);
	const farX = useTransform(progress, (v) => -v * travel * .85);
	const count = museumLayouts.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: section,
		className: "museum-section",
		id: "museum",
		"aria-label": t("6 years of Shivam"),
		style: { height: `calc(100svh + ${travel}px)` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `mw-sticky${selected ? " mw-sticky-open" : ""}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mw-stage",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "mw-wall-texture",
						src: carved_wall_webp_asset_default.url,
						width: 1536,
						height: 1024,
						alt: "",
						"aria-hidden": "true",
						loading: "lazy",
						decoding: "async",
						fetchPriority: "low"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "mw-far",
						style: {
							x: farX,
							width: `${count * 100}%`
						},
						"aria-hidden": "true",
						children: Array.from({ length: count * 2 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
							className: "mw-lamp",
							style: { left: `${(i + .5) / (count * 2) * 100}%` }
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "mw-track",
						ref: track,
						style: { x },
						children: museumLayouts.map((layout, pi) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mw-panel",
							children: [pi > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: `mw-panel-wall${pi % 2 ? " mw-panel-wall-flip" : ""}`,
								src: "/assets/international-wall-BYo8dRze.webp",
								alt: "",
								"aria-hidden": "true",
								loading: "lazy",
								decoding: "async",
								fetchPriority: "low"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `mw-board${pi === 0 ? " mw-board-centre" : ""}`,
								children: pi === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MuseumOpening, { open: setSelected }) : portraits.slice(layout.start, layout.end).map((p, si) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
									portrait: p,
									slot: si,
									placement: layout.placements[si] ?? [
										0,
										0,
										20,
										1.5
									],
									narrow: layout.narrow[si] ?? [
										0,
										0,
										40,
										1.5
									],
									progress,
									at: pi / (count - 1),
									reduced,
									open: () => setSelected(p)
								}, p.id))
							})]
						}, pi))
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MuseumRecord, {
			portrait: selected,
			close: () => setSelected(null),
			step,
			visit
		})]
	});
}
var TESTIMONIAL_DWELL_MS = 18e3;
var testimonialNudge = {
	name: "Alex",
	target: "#testimonials"
};
function canShowTestimonialNudge(visible, blocked, dismissed) {
	return visible && !blocked && !dismissed;
}
var nudgeCopy = {
	en: {
		sample: "Sample testimonial",
		line: "See what {name} has to say about Shivam.",
		close: "Dismiss testimonial popup",
		preview: "This is a preview. The real person and testimonial will be connected here later."
	},
	de: {
		sample: "Beispielstimme",
		line: "Erfahre, was {name} über Shivam sagt.",
		close: "Hinweis schließen",
		preview: "Dies ist eine Vorschau. Die echte Person und ihre Empfehlung werden später verknüpft."
	},
	es: {
		sample: "Testimonio de ejemplo",
		line: "Mira lo que {name} dice sobre Shivam.",
		close: "Cerrar aviso",
		preview: "Esta es una vista previa. La persona y el testimonio reales se conectarán más adelante."
	},
	fr: {
		sample: "Témoignage exemple",
		line: "Découvrez ce que {name} dit de Shivam.",
		close: "Fermer le message",
		preview: "Ceci est un aperçu. La personne et le témoignage réels seront ajoutés plus tard."
	},
	hi: {
		sample: "नमूना प्रशंसापत्र",
		line: "देखें {name}, Shivam के बारे में क्या कहते हैं।",
		close: "संदेश बंद करें",
		preview: "यह एक नमूना है। वास्तविक व्यक्ति और प्रशंसापत्र बाद में जोड़े जाएँगे।"
	},
	"zh-CN": {
		sample: "示例推荐",
		line: "看看 {name} 对 Shivam 的评价。",
		close: "关闭提示",
		preview: "这只是预览。真实人物和推荐内容将在之后添加。"
	},
	ms: {
		sample: "Contoh testimoni",
		line: "Lihat pendapat {name} tentang Shivam.",
		close: "Tutup pemberitahuan",
		preview: "Ini ialah pratonton. Individu dan testimoni sebenar akan dihubungkan kemudian."
	},
	ko: {
		sample: "추천사 예시",
		line: "{name}이 Shivam에 대해 하는 이야기를 보세요.",
		close: "알림 닫기",
		preview: "미리보기입니다. 실제 인물과 추천사는 나중에 연결됩니다."
	}
};
function TestimonialNudge() {
	const { language } = useLanguage();
	const copy = nudgeCopy[language] ?? nudgeCopy["en"];
	const [visible, setVisible] = (0, import_react.useState)(false);
	const [preview, setPreview] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let timer;
		let current = null;
		let dismissed = false;
		const sections = [...document.querySelectorAll("section")].filter((section) => !section.parentElement?.closest("section"));
		const clear = () => {
			clearTimeout(timer);
			timer = void 0;
		};
		const blocked = () => document.visibilityState !== "visible" || Boolean(document.querySelector("[role=\"dialog\"], [role=\"menu\"]"));
		const update = () => {
			const middle = window.innerHeight / 2;
			const next = sections.find((section) => {
				const rect = section.getBoundingClientRect();
				return rect.top <= middle && rect.bottom > middle;
			}) ?? null;
			if (next !== current || blocked() || dismissed) {
				clear();
				setVisible(false);
				current = next;
			}
			if (timer || !canShowTestimonialNudge(Boolean(next), blocked(), dismissed)) return;
			timer = setTimeout(() => {
				if (!canShowTestimonialNudge(Boolean(current), blocked(), dismissed)) {
					clear();
					return;
				}
				setVisible(true);
			}, TESTIMONIAL_DWELL_MS);
		};
		const dismiss = () => {
			dismissed = true;
			clear();
			setVisible(false);
		};
		const escape = (event) => {
			if (event.key === "Escape") dismiss();
		};
		window.addEventListener("testimonial-nudge-dismiss", dismiss);
		window.addEventListener("scroll", update, { passive: true });
		window.addEventListener("resize", update);
		window.addEventListener("keydown", escape);
		document.addEventListener("visibilitychange", update);
		const observer = new MutationObserver(update);
		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
		update();
		return () => {
			clear();
			observer.disconnect();
			window.removeEventListener("testimonial-nudge-dismiss", dismiss);
			window.removeEventListener("scroll", update);
			window.removeEventListener("resize", update);
			window.removeEventListener("keydown", escape);
			document.removeEventListener("visibilitychange", update);
		};
	}, []);
	const dismiss = () => window.dispatchEvent(new Event("testimonial-nudge-dismiss"));
	const visit = () => {
		dismiss();
		const target = document.querySelector(testimonialNudge.target);
		if (target) target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
		else setPreview(true);
	};
	if (!copy) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [visible && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "testimonial-nudge",
		"aria-label": copy.sample,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "ghost",
			className: "testimonial-nudge-link",
			onClick: visit,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "testimonial-nudge-avatar",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: "A"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: avatar_1_webp_asset_default.url,
						alt: "",
						width: "44",
						height: "44",
						decoding: "async",
						onError: (event) => {
							event.currentTarget.hidden = true;
						}
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "testimonial-nudge-copy",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: copy.sample }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: copy.line.replace("{name}", testimonialNudge.name) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { "aria-hidden": "true" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "icon",
			className: "testimonial-nudge-close",
			"aria-label": copy.close,
			title: copy.close,
			onClick: dismiss,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: preview,
		onOpenChange: setPreview,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: copy.sample }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: copy.preview })] })
	})] });
}
/**
* Merged Home Route — integrates both Codebase A "The Trail" experience and
* Codebase B sections (Introduction, ExpertiseGrid, WorkHistory, GtmShowcase,
* JourneySection, ProductShowcase, MuseumWall, TestimonialNudge) into one unified page.
*
* Architecture:
*  - Codebase A provides: opening animation, navigation chrome, JourneyProvider, Sky
*    background transitions, Passport/Stamps gamification, ChalkDoodles ambient layer,
*    VoicePrompt, Gate / Village / NightCamp / Postcards / Hooman / BaseCampEnd stops.
*  - Codebase B sections are inserted between the TrailTopBar and the A-specific stops
*    so they share the same page scroll and receive the LanguageProvider context from
*    __root.tsx.  The SiteNav from B is rendered INSTEAD of A's TopBar when the B-sections
*    viewport is active, but both navbars co-exist in the DOM hierarchy.
*
* Navigation:
*   A's TopBar handles: Home, Community, Resources, Products, Testimonials, CV, Menu.
*   SiteNav (B) handles: Expertise, Work, GTM Map, Journey, About, Say Hello, Language.
*   Combined, all 11 destinations + CV + contact are reachable.
*/
function MergedTrail() {
	const [menu, setMenu] = (0, import_react.useState)(false);
	const [opening, setOpening] = (0, import_react.useState)(true);
	const finishOpening = (0, import_react.useCallback)(() => setOpening(false), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpeningBeat, { onComplete: finishOpening }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		inert: opening,
		"aria-hidden": opening ? true : void 0,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-16 focus:z-[100] focus:bg-paper focus:p-3",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sky, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, { onMenu: () => setMenu(true) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuOverlay, {
				open: menu,
				onClose: () => setMenu(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "sr-only",
				"aria-label": "All stops",
				children: stops.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${s.id}`,
					children: s.name
				}, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "b-sections",
				"aria-label": "Portfolio sections",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, { page: "home" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Introduction, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpertiseGrid, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkHistory, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GtmShowcase, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneySection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductShowcase, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MuseumWall, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialNudge, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main",
				className: "trail-stage relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChalkDoodles, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gate, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Village, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NightCamp, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Postcards, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoomanSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoomanBoard, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BaseCampEnd, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoicePrompt, { enabled: !opening && !menu })
		]
	})] });
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneyProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MergedTrail, {}) });
//#endregion
export { SplitComponent as component };
