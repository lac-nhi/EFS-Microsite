import type { Crop } from '../components/CroppedImage'
import { PERSONAS_URL } from './links'

/** One labelled card (Potential impact / Disruptions grids). */
export type InfoCard = { title: string; body: string }

export type Persona = {
  role: string // e.g. "The student"
  story: string
  name: string
  descriptor: string // shown after the name, e.g. "Nursing student, 30"
  avatar: { src: string; crop?: Crop }
  personaHref?: string // "View persona →" link (on the original site), when the design shows one
}

export type BigIdeaDetail = {
  /** Figma gives a few long titles a 650px column instead of 600px */
  wideTitle?: boolean
  intro: string
  hero: { src: string; alt: string; crop: Crop }
  atAGlance: { designQuestion: string; shift: string }
  bigIdea: string[]
  challenge: string
  opportunity: string
  potentialImpact: { intro?: string; cards: InfoCard[] }
  disruptions: { intro: string; cards: InfoCard[] }
  photos: { src: string; alt: string; crop?: Crop }[] // no crop = fill the frame (object-cover)
  dayInTheFuture: { heading: string; intro: string; note: string; personas: Persona[] }
}

export type BigIdea = {
  slug: string
  title: string
  /** Short label for the tab bar on detail pages */
  tabLabel: string
  /** Home page card */
  body: string
  shift: string
  accent: string
  /** Detail page content; ideas without it show "coming soon" until their Figma frame is built */
  detail?: BigIdeaDetail
}

const PATHWAYS_DETAIL: BigIdeaDetail = {
  intro:
    'A university where every learner designs their own path through learning, choosing what, when, where and how fast they learn. They can step out and come back at any point in their lives, on pathways that employers help validate.',
  hero: {
    src: '/images/big-ideas/pathways-hero.jpg',
    alt: 'Two women collaborate over papers at a bright office table; one gestures while explaining, and the other listens, creating a focused, welcoming tone.',
    crop: { w: 110.43, h: 179.76, left: -7.66, top: -41.97 },
  },
  atAGlance: {
    designQuestion:
      'How might we redesign university structures, curricula, and learning models to provide personalized pathways that are not constrained by time, place, or traditional credentials?',
    shift: 'From a fixed four-year sequence to a self-defined, lifelong path.',
  },
  bigIdea: [
    'Pathways without Walls takes down the walls that sort students into fixed tracks: the four-year sequence, the single major, the semester calendar, the campus. In their place is a modular, interdisciplinary learning architecture. Students explore early, each step deliberately builds on the last, and a single dedicated advisor helps each learner put together and revise a path that fits their needs and timeline.',
    'The walls between “student” and “alumnus” come down too. Teams imagined a “60-year curriculum”: graduates return again and again as their work and lives change, through something closer to a lifelong membership than a one-time transaction. The university stops rewarding completion and starts rewarding continuity.',
  ],
  challenge:
    'Teams described today’s structures as forcing students into “rigid, pre-defined paths” designed around legacy and convenience, not around a student population that is more diverse every year. Working adults, returning learners and students who need to pivot mid-career are poorly served by a model built on seat time, a fixed calendar and a single entry point. As one team put it, the current model is “co-embedded in the institution. Change is hard.”',
  opportunity:
    'The university becomes a lifelong learning home instead of a four-year stop. Students become co-designers of their education. Institutions gain a continuing relationship with learners and alumni, and a clearer value proposition. Employers gain a say in pathways that lead to real work.',
  potentialImpact: {
    intro:
      'The team proposed measuring return on investment for students and institutions, student satisfaction, continued student and alumni engagement, time to degree, placement with partner employers, and jobs after graduation.',
    cards: [
      { title: 'Students', body: 'Learning tailored to their goals and timelines, with on-ramps and off-ramps that don’t penalize life happening.' },
      { title: 'Faculty and staff', body: 'New roles as learning path designers and builders of modular, interdisciplinary content.' },
      { title: 'Institutions', body: 'Continued engagement with alumni and adult learners, and a less ambiguous value proposition.' },
      { title: 'Public universities', body: 'A credible way to re-engage the millions of adults with some college and no credential.' },
      { title: 'Communities and higher education', body: 'A move away from the major-based degree as the only unit of value.' },
    ],
  },
  disruptions: {
    intro:
      'During presentations of the big idea, participants were asked to name what this idea would disrupt and where change would have to happen.',
    cards: [
      {
        title: 'Structures',
        body: 'Financial aid and Pell eligibility tied to credit hours and terms; the academic calendar; specialized accreditation; major-based degrees and departmental ownership of curriculum; graduate education built on the same model.',
      },
      {
        title: 'Relationships',
        body: 'Faculty hiring, promotion and workload policies that reward course ownership, plus likely union resistance. Personalization at scale also raises coordination costs.',
      },
      {
        title: 'Mental models',
        body: 'The university’s identity as a primarily degree-granting institution, and the public’s perception of what a credential is.',
      },
      {
        title: 'Assumptions to test',
        body: 'Students will value flexibility and use it well; faculty can be incentivized to redesign curricula; employers will engage in pathway design.',
      },
    ],
  },
  photos: [
    {
      src: '/images/big-ideas/pathways-photo-1.jpg',
      alt: 'At a bright office gathering, a smiling woman with curly gray hair and glasses chats with an older man as coworkers mingle nearby, creating a warm, friendly mood.',
      crop: { w: 112.01, h: 123.81, left: -3.54, top: -11.84 },
    },
    {
      src: '/images/big-ideas/pathways-photo-2.jpg',
      alt: 'Conference attendees gather around a table covered with papers, cups and QR-code signs, sharing ideas in a focused, collaborative discussion.',
      crop: { w: 108.13, h: 119.48, left: -5.25, top: -5.25 },
    },
  ],
  dayInTheFuture: {
    heading: 'A day in this future with Amina',
    intro:
      'It is 2036. Amina, 30, is a nursing student, waitress and parent. Her biggest fear is having to choose between finishing school and being there for her child.',
    note: 'An illustrative scenario created by the University Design Institute, featuring a student persona developed by student designers for the Studio. It is not a workshop output.',
    personas: [
      {
        role: 'The student',
        story:
          'At 6:40 a.m., before her child wakes up, Amina finishes a short module on patient communication on her phone. Last spring, when her child was sick for a month, her pathway advisor (the same person since she enrolled) moved her to a lighter summer sequence. She lost no aid, no momentum and no place in her program. This afternoon she has clinical hours at a neighborhood clinic, scheduled around her restaurant shifts and family pickups, and they count toward both her nursing pathway and her career readiness. She is on track for her licensure exam, and she knows she can come back for a specialty credential when her child is older.',
        name: 'Amina',
        descriptor: 'Nursing student, 30',
        avatar: { src: '/images/big-ideas/avatar-amina.jpg' },
        personaHref: PERSONAS_URL,
      },
      {
        role: 'The faculty member',
        story:
          'Rafael used to teach three 15-week courses to 40 students at a time. Now he is a learning path designer who maintains three modules in the system’s nursing pathway, used by learners at very different points in their lives. His workload counts the modules he looks after, not just the credit hours he teaches. This morning he is reviewing where working parents slow down, and redesigning one module’s entry point so it starts from what they already know. Last year’s redesign helped parents like Amina stay on pace.',
        name: 'Dr. Rafael Ortiz',
        descriptor: 'Learning path designer',
        avatar: { src: '/images/big-ideas/avatar-rafael.jpg', crop: { w: 215, h: 120.36, left: -57.5, top: -10.18 } },
      },
      {
        role: 'The employer',
        story:
          'Dana helped validate the nursing pathway, and today she signs off on Amina’s clinical hours. Two of her own medical assistants are working toward nursing in modules from the same pathway. For Dana, the university is somewhere her people keep coming back to, not just where her new hires once came from.',
        name: 'Dana Whitfield',
        descriptor: 'Clinic operations manager',
        avatar: { src: '/images/big-ideas/avatar-dana.jpg', crop: { w: 160.19, h: 287, left: -59.75, top: -106.37 } },
      },
    ],
  },
}

const HOLISTIC_DETAIL: BigIdeaDetail = {
  intro:
    'A university that recognizes and credentials the whole person: emotional intelligence, creative expression, civic engagement, athletic and leadership ability, and the capacity to find and pursue purpose, alongside academic learning. Career becomes something that serves a person’s purpose, not the other way around.',
  hero: {
    src: '/images/big-ideas/holistic-hero.jpg',
    alt: 'Two professional men converse warmly at a networking event, one in a plaid blazer and glasses, the other in a white shirt, with guests in the background.',
    crop: { w: 100, h: 162.78, left: 0, top: -8.16 },
  },
  atAGlance: {
    designQuestion:
      'How might we cultivate human capabilities and purpose-driven lives while supporting learning and growth across a lifetime?',
    shift: 'From academic knowledge only to the whole person and their purpose',
  },
  bigIdea: [
    'Holistic credentialing starts from a simple critique: credentials are defined too narrowly, so the university ends up cultivating and honoring only part of the person. In this future, reflection on purpose runs through the curriculum, the co-curriculum and the institution itself. Students explore their “why” early and often, use their skills in social-impact work, and are coached by faculty, staff and trained alumni mentors.',
    'What students do outside the classroom stops being invisible. Civic participation, service, creative work, vocational reflection and study abroad all earn recognized credentials alongside the bachelor’s degree. They are captured in a portfolio the learner owns and uses to tell employers and communities who they are, not just what they studied.',
  ],
  challenge:
    'Traditional credentials do not recognize holistic human development, and employers have narrow visibility into who a candidate actually is. Teams in the Transformation future pushed further: if the meaning of work changes, a university organized only around entry-level employment loses its reason for being. True career readiness is more than a demonstration of knowledge and skills.',
  opportunity:
    'The university could become the place where people find and build purpose, as well as a place to earn a qualification. Employers get a fuller picture of candidates. Communities get graduates prepared as civic agents. Higher education gets a renewed public-good argument: “Earning more” alone is no longer a convincing pitch.',
  potentialImpact: {
    cards: [
      { title: 'Students', body: 'The ability to articulate strengths beyond academic knowledge, and a life and career built around purpose.' },
      { title: 'Faculty and staff', body: 'Roles that include mentoring, coaching and modeling purpose-driven lives, as “lifelong learners together.”' },
      { title: 'Institutions', body: 'A distinctive identity and a stronger community that reaches beyond campus.' },
      { title: 'Public universities', body: 'A concrete expression of the civic mission.' },
      { title: 'Communities', body: 'Greater civic engagement and connectedness.' },
      { title: 'Higher education', body: 'A shift in how the sector defines success, from earnings alone to lives of meaning and contribution.' },
    ],
  },
  disruptions: {
    intro:
      'During presentations of the Big Idea, participants were asked to name what this idea would disrupt and where change would have to happen.',
    cards: [
      {
        title: 'Structures',
        body: 'The transcript, which participants called the wrong “container” for a holistic credential; grade-based assessment; time-to-degree definitions; admissions criteria; and financial aid that funds only degree requirements.',
      },
      {
        title: 'Relationships',
        body: 'Employers and other institutions must be able to read and trust personalized credentials. Teams suggested co-designing with employers how qualities such as emotional intelligence are judged.',
      },
      {
        title: 'Mental models',
        body: 'The belief that the whole person can’t be measured. Participants also raised two risks: the idea could exclude people who can’t be evaluated in every domain, and it could “turn universities into honor societies, not just learning interventions.” They also asked what happens to students who can’t find a purpose.',
      },
      {
        title: 'Assumptions to test',
        body: 'People inherently value purpose-driven lives and lifelong learning; employers would value a more complete picture of a person; institutions can disrupt their own internal power dynamics.',
      },
    ],
  },
  photos: [
    {
      src: '/images/big-ideas/holistic-photo-1.jpg',
      alt: 'Two women discuss ideas beside a large whiteboard by bright office windows; one holds a marker as the other listens, creating a focused, collaborative mood.',
      crop: { w: 123.55, h: 136.52, left: -23.62, top: -14.59 },
    },
    {
      src: '/images/big-ideas/holistic-photo-2.jpg',
      alt: 'A diverse group sits around a table with brochures and papers, listening thoughtfully during a collaborative meeting in a bright room.',
      crop: { w: 146.83, h: 162.25, left: -13.12, top: -26.24 },
    },
  ],
  dayInTheFuture: {
    heading: 'A day in this future with Maya',
    intro:
      'It is 2036. Maya, 18, is a first-generation studio art student who works part-time at a café. Her biggest fear is having to give up a creative career because it can’t provide enough financial stability.',
    note: 'An illustrative scenario created by the University Design Institute, featuring a student persona developed by student designers for the Studio. It is not a workshop output.',
    personas: [
      {
        role: 'The student',
        story:
          'Maya spends the morning in the studio and the afternoon leading a paid mural commission with a neighborhood association. The fee covers two weeks of café shifts, and the project counts toward her civic engagement credential. Then she meets her alumni mentor, an artist who makes a living from a mix of commissions, teaching and a small studio, to map out what that kind of income could look like for her. Her portfolio already holds three paid projects alongside her sketches, community feedback and reflections. A creative career that pays, without compromising what makes her work her own, is starting to look real.',
        name: 'Maya',
        descriptor: 'Studio art student, 18',
        avatar: { src: '/images/big-ideas/avatar-maya.jpg' },
        personaHref: PERSONAS_URL,
      },
      {
        role: 'The faculty member',
        story:
          'Lin teaches design and is also a purpose coach for twelve students. She spends the afternoon on portfolio reviews, assessing reflection and civic contribution against a rubric co-designed with employers and community partners. Her annual review counts this mentoring as core work. Seeing students like Maya connect their craft to their community is the part of the job she values most.',
        name: 'Professor Lin Okafor',
        descriptor: 'Design faculty and purpose coach',
        avatar: { src: '/images/big-ideas/avatar-lin.jpg', crop: { w: 300, h: 167.43, left: -104.95, top: -30.93 } },
      },
      {
        role: 'The employer',
        story:
          'Marcus reads portfolios like Maya’s for evidence of collaboration, resilience and community work, and he sat on the panel that defined how “creative collaboration” is assessed. He offers Maya contract work for the summer, based on her well-rounded experiences and how deliberately she chose them to connect her creative talent with her commitment to her community.',
        name: 'Marcus Reyes',
        descriptor: 'Creative director, regional agency',
        avatar: { src: '/images/big-ideas/avatar-marcus.jpg', crop: { w: 143, h: 102.15, left: -32.54, top: -1.66 } },
      },
    ],
  },
}

const NO_DEGREE_DETAIL: BigIdeaDetail = {
  intro:
    'A university no longer organized around the four-year degree. Learners prove readiness through a portfolio of demonstrated work, skills assessments and an applied residency or apprenticeship, validated jointly by faculty, industry and other experts. They are “done” when they can show they are ready, not when the clock runs out.',
  hero: {
    src: '/images/big-ideas/no-degree-hero.jpg',
    alt: 'Three men talk in a bright office beside a wall covered with sticky notes, sharing a relaxed, collaborative moment during a meeting.',
    crop: { w: 100, h: 162.78, left: 0, top: -23 },
  },
  atAGlance: {
    designQuestion:
      'How might we translate learning and real-world experience into trusted, validated signals of capability that have value in the labor market beyond traditional credentials?',
    shift: 'From time served and credits earned to demonstrated capability',
  },
  bigIdea: [
    'In the no degree future, length of time in a program stops mattering. Students demonstrate career capability continuously while they learn, and can show they are ready at any point. Evidence builds up in a learning and employment record that replaces the transcript. Mastery is judged by a committee of faculty and industry professionals rather than an accumulation of credit hours. Every program includes applied work experience verified by employers, and ends in a residency or apprenticeship.',
    'The idea is deliberately provocative. It responds to the Collapse future, where trust in the degree as a market signal breaks down, and to the frontier of AI, where “old ways of verification may not work.” In that world, the most valuable thing a university can offer is verifiable expertise: evidence of human judgment, reasoning and creativity that employers believe.',
  ],
  challenge:
    'A degree tells employers that a student completed a program, not that they are ready for work. Teams found that not every student gets real-world experience, that internships are scarce and unevenly distributed, and that degrees are often misaligned with labor-market signals. Meanwhile, AI is raising the value of exactly the capabilities a transcript can’t show: judgment, ethical reasoning, adaptability and the ability to check AI’s work.',
  opportunity:
    'Higher education could reclaim its role as the trusted validator of capability, rebuilding the “moat” around the quality of evidence rather than the brand of the credential. Programs could adapt faster to workforce signals, and individual capability could count for more than institutional prestige.',
  potentialImpact: {
    intro: 'The team proposed measuring post-graduate employment, salary and five-year mobility.',
    cards: [
      { title: 'Students', body: 'A direct line from learning to demonstrated readiness, more control over when they are “complete,” and less dependence on institutional brand.' },
      { title: 'Faculty and staff', body: 'New roles as assessors and mentors of applied work, alongside industry partners.' },
      { title: 'Institutions', body: 'Programs that change faster than traditional degree approval allows, and credibility based on graduates’ outcomes.' },
      { title: 'Public universities', body: 'A way to serve learners who can’t afford the time or cost of a traditional degree.' },
      { title: 'Communities and employers', body: 'A talent pipeline judged by what people can do.' },
      { title: 'Higher education', body: 'A move from a single, uniform endpoint for every student to a spectrum of validated readiness.' },
    ],
  },
  disruptions: {
    intro:
      'During presentations of the Big Idea, participants were asked to name what this idea would disrupt and where change would have to happen.',
    cards: [
      {
        title: 'Structures',
        body: 'Statutes, policies and financial aid tied to credit hours; seat-time-based scheduling; prerequisite-based progression; transfer and transcript rules; state and system approval of programs and curriculum.',
      },
      {
        title: 'Relationships',
        body: 'Employers still require four-year degrees, a chicken-and-egg problem. Employers need a reason to invest in assessment and apprenticeships. Support for applied learning has to scale to thousands of students.',
      },
      {
        title: 'Mental models',
        body: 'A uniform end-game for every student; community skepticism of non-traditional credentials; discomfort that “it won’t look like your educational experience.” Participants also asked how to assess objectively, and whether there’s still room for generalists.',
      },
      {
        title: 'Assumptions to test',
        body: 'Financial aid can still flow in this structure; regulators and employers will be receptive; the pendulum won’t swing back to the traditional degree. The team recommended backstops so “no degree” students aren’t harmed, such as still awarding credentials or credit, and a crosswalk modeled on military experience translation.',
      },
    ],
  },
  photos: [
    {
      src: '/images/big-ideas/no-degree-photo-1.jpg',
      alt: 'At a conference booth, a woman and man share an animated conversation across a table of brochures and coffee, with growth posters behind them.',
      crop: { w: 117.19, h: 129.5, left: -17.25, top: -7.69 },
    },
    { src: '/images/big-ideas/no-degree-photo-2.jpg', alt: 'Colleagues attend a conference meeting around a table with laptops and coffee, smiling and listening in a bright room; the mood is engaged and friendly.' },
  ],
  dayInTheFuture: {
    heading: 'A day in this future with Jesse',
    intro:
      'It is 2036. Jesse, 46, is a former lineman apprentice building a second career in engineering technology. His biggest fear is having to relocate for a better opportunity when his family makes moving unrealistic.',
    note: 'An illustrative scenario created by the University Design Institute, featuring a student persona developed by student designers for the Studio. It is not a workshop output.',
    personas: [
      {
        role: 'The student',
        story:
          'Jesse spent years as a lineman apprentice. In his first week, a crosswalk modeled on how military experience is translated mapped his field experience to competencies, so he skipped the foundational courses and went straight to the engineering technology work he hadn’t yet proved. He pays from savings while he keeps working, and his apprenticeship is with the regional electric cooperative twenty minutes from home. Today he presents a grid-modernization project to his assessment committee: two faculty members and an engineer from the co-op. The engineer presses him on the crew-safety plan, and Jesse walks the room through how he has kept crews safe in the field for years. The faculty push him to connect that experience to his power-systems analysis. By the end, the committee agrees he is ready, and his record shows exactly what he can do. He’ll build his second career without having to move.',
        name: 'Jesse',
        descriptor: 'Engineering technology learner, 46',
        avatar: { src: '/images/big-ideas/avatar-jesse.jpg', crop: { w: 177.78, h: 100, left: -65.67, top: 0 } },
        personaHref: PERSONAS_URL,
      },
      {
        role: 'The faculty member',
        story:
          'Priya lectures less and assesses and coaches more. She spent the morning with the co-op’s engineers, calibrating the shared rubric so faculty and industry judges work the same way. In Jesse’s session, the committee’s questions build on each other rather than compete. She also keeps the backstop in view: everything a learner demonstrates converts to recognized credit, even if they have to step away for awhile.',
        name: 'Dr. Priya Natarajan',
        descriptor: 'Assessor and coach',
        avatar: { src: '/images/big-ideas/avatar-priya.jpg', crop: { w: 135, h: 135, left: -17.5, top: -11.45 } },
      },
      {
        role: 'The employer',
        story:
          'Two years ago, the co-op dropped the bachelor’s degree requirement for engineering technician and project roles. Tom trusts the assessment because his own engineers help run it. When the committee signs off, he offers Jesse a project technician role, and keeps an experienced person in the community instead of losing him to a bigger city.',
        name: 'Tom Brannigan',
        descriptor: 'Operations director, regional electric cooperative',
        avatar: { src: '/images/big-ideas/avatar-tom.jpg', crop: { w: 226, h: 150.35, left: -99.2, top: -1.33 } },
      },
    ],
  },
}

const INDUSTRY_DETAIL: BigIdeaDetail = {
  intro:
    'Industry moves from the advisory board into the classroom and the governance structure. Industry experts hold recognized co-educator roles and co-design degrees with faculty. They share responsibility for teaching, assessing and validating what students learn, with feedback flowing continuously in both directions.',
  hero: {
    src: '/images/big-ideas/industry-hero.jpg',
    alt: 'At a conference poster session, a woman points to a display and takes notes while a bald man listens; another attendee watches nearby.',
    crop: { w: 100, h: 162.54, left: 0, top: -16.43 },
  },
  atAGlance: {
    designQuestion:
      'How might we create authentic, trust-based partnerships that generate continuous feedback and shared responsibility for workforce development?',
    shift: 'From faculty-only expertise to a shared teaching partnership with industry',
  },
  bigIdea: [
    'In this future, partnership is mission critical rather than an add-on. Universities create new positions and titles for industry co-educators who teach alongside faculty, mentor students and help assess applied work. With industry associations and community partners, institutions identify three to five growth areas for their region and co-design programs around them. Career services moves into the curriculum, so career preparation happens “inside every class.”',
    'The partnership runs on a feedback loop. Employers report how graduates perform and where gaps appear, and the university adjusts quickly. Governance links local, regional, national and global networks of industry and intermediary organizations, and treats the whole ecosystem (K-12, community colleges, employers, civic organizations, government) as a co-creator of career readiness from day one.',
  ],
  challenge:
    'Higher education and industry are disconnected on both sides. Students are not career ready, which undermines the return on their investment. Employers can’t find graduates prepared to accelerate and advance. Partnerships today are minimal, slowed by bureaucracy, and out of step with the pace of industry change. Even where industry is at the table, incentives aren’t aligned, and faculty are rarely rewarded for partnership work.',
  opportunity:
    'Universities could become valued, trusted partners for employers’ upskilling and reskilling needs as well as pipelines of entry-level talent. Learning and earning could blend into new frameworks. Universities could become engines of economic mobility and regional growth, with shared responsibility for workforce development replacing the one-way “handoff” at graduation.',
  potentialImpact: {
    cards: [
      { title: 'Students', body: 'Learning from both faculty and practitioners, more real-world experience, and better employability and earnings.' },
      { title: 'Faculty', body: 'Collaboration with industry experts, with faculty bringing learning-design expertise and current practice coming from industry.' },
      { title: 'Institutions', body: 'Trust-based partnerships, continuous curricular feedback, and new sources of investment.' },
      { title: 'Public universities', body: 'A visible role in regional economic development.' },
      { title: 'Communities and employers', body: 'A talent pipeline matched to local growth areas.' },
      { title: 'Higher education', body: 'A more expansive view of who holds expertise worth teaching.' },
    ],
  },
  disruptions: {
    intro:
      'During presentations of the Big Idea, participants were asked to name what this idea would disrupt and where change would have to happen.',
    cards: [
      {
        title: 'Structures',
        body: 'Specialized and institutional accreditation standards for who may teach; shared governance that doesn’t include external partners; compensation and leadership structures; the lack of public incentives (tax breaks, Pell-style investment) for employer participation.',
      },
      {
        title: 'Relationships',
        body: 'Employers need a clear answer to “what do we get out of this?” Industry and higher education move at different speeds. Industry experts need time and teaching training. Faculty and unions may resist.',
      },
      {
        title: 'Mental models',
        body: 'Faculty may not recognize industry expertise as legitimate, and some will see the idea as a threat to “learning for its own sake” and to the central role of faculty.',
      },
      {
        title: 'Assumptions to test',
        body: 'Incentives can be put in place to mobilize employers; universities will be open to the change. The team recommended starting with government incentives (including outreach to the Department of Labor) and said presidents have to lead it.',
      },
    ],
  },
  photos: [
    {
      src: '/images/big-ideas/industry-photo-1.jpg',
      alt: 'Professionals share a friendly discussion around a conference table with brochures, papers, and coffee in a bright office, creating a collaborative mood.',
      crop: { w: 109.95, h: 121.5, left: -9.9, top: -10.56 },
    },
    {
      src: '/images/big-ideas/industry-photo-2.jpg',
      alt: 'At a bright conference table, a curly-haired woman gestures while speaking beside a smiling colleague; books and coffee suggest a lively literary event.',
      crop: { w: 119, h: 131.5, left: -3.88, top: -21.52 },
    },
  ],
  dayInTheFuture: {
    heading: 'A day in this future with Leo',
    intro:
      'It is 2036. Leo, 20, builds apps and is a freelance developer. His biggest fear is graduating into an unstable tech industry where cuts and over-saturation leave him no way in.',
    note: 'An illustrative scenario created by the University Design Institute, featuring a student persona developed by student designers for the Studio. It is not a workshop output.',
    personas: [
      {
        role: 'The student',
        story:
          'His AI systems course has two teachers: his professor in the morning for the theoretical foundations, and an industry co-educator in the afternoon with a real-world problem her business hit last week. Leo’s team builds a fix that works. The company adopts it under a clear agreement that credits the students’ work, and Leo adds a shipped product to his portfolio. He is no longer one of a thousand anonymous applicants: two of the company’s engineers have watched him work all semester, and one has already introduced him to a startup that is hiring.',
        name: 'Leo',
        descriptor: 'AI systems student, 20',
        avatar: { src: '/images/big-ideas/avatar-leo.jpg', crop: { w: 178.4, h: 100, left: -65.09, top: -0.89 } },
        personaHref: PERSONAS_URL,
      },
      {
        role: 'The faculty member',
        story:
          'Every Monday, Samuel co-plans the week with his industry partner. He brings learning design and depth; she brings current practice. Each summer he spends a week embedded at her company, and his promotion dossier counts the partnership as teaching and scholarship. Watching his students solve problems that matter to a real company reminds him why he teaches.',
        name: 'Dr. Samuel Achebe',
        descriptor: 'Faculty co-teacher',
        avatar: { src: '/images/big-ideas/avatar-samuel.jpg', crop: { w: 156, h: 104.01, left: -17.51, top: -0.35 } },
      },
      {
        role: 'The employer',
        story:
          'Jenna holds the title of Industry Co-Educator, with paid time from her employer and a short pedagogy course behind her. This afternoon she reports how last year’s hires are performing, and the program has already revised a module based on her feedback. Her company gets early access to talent, a direct line into the curriculum, and a state tax incentive for the hours she contributes.',
        name: 'Jenna Park',
        descriptor: 'Senior engineer, regional manufacturer',
        avatar: { src: '/images/big-ideas/avatar-jenna.jpg', crop: { w: 149.98, h: 100, left: -29.12, top: 0.41 } },
      },
    ],
  },
}

const FACULTY_DETAIL: BigIdeaDetail = {
  intro:
    'A new reward system that aligns faculty careers with student futures. Part of faculty compensation is tied to shared outcomes, such as students’ internships, placement and long-term growth. Faculty are organized around competencies and career clusters rather than fixed departments. The model is tested first in a “parallel university” sandbox.',
  hero: {
    src: '/images/big-ideas/faculty-hero.jpg',
    alt: 'Business professionals network at a conference, with a man in a checked blazer speaking animatedly to colleagues in a bright, collaborative meeting space.',
    crop: { w: 100, h: 162.78, left: 0, top: -26.57 },
  },
  atAGlance: {
    designQuestion:
      'How might we evolve faculty roles, structures and support systems to keep pace with changing workforce needs while preserving the essential educational contributions of faculty?',
    shift: 'From prestige and research output to contribution to student futures',
  },
  bigIdea: [
    'The idea starts from a blunt observation: faculty prestige is tied to student outcomes “not at all.” The new incentive pay model sets a new North Star built on competencies and career clusters, and aligns everyone, faculty included, to the student’s goal of a good start in work and life.',
    'Compensation combines fixed and variable pay. The variable part is split between individual performance (such as teaching and placing students into work-integrated learning) and institutional performance. Faculty are hired for their competencies and work experience as well as their disciplinary credentials. They organize into clusters that are updated as workforce needs change, and ongoing professional development becomes part of the job.',
    'Because changing pay and structure across a whole institution at once is risky, teams proposed building it first as “NewU”: a parallel university, or a sandbox inside the current one, with its own hiring, organization and pay, governed alongside the existing institution.',
  ],
  challenge:
    'Faculty incentives are rarely aligned with students’ success after graduation. Vertical, discipline-based organization replicates itself, so the university is slow, or unable, to change as student needs evolve. Faculty development is often outdated and disconnected from the workforce. Teams asked directly: “Who is the faculty of the future?”',
  opportunity:
    'A university whose reward system pulls toward student outcomes, instead of against them. The parallel-university approach gives institutions room for real educational innovation without betting the whole institution, and a model that could be replicated. Faculty become designers and owners of the change rather than its objects.',
  potentialImpact: {
    intro:
      'The team proposed measuring experiential learning and job placement rates, enrollment growth, industry partnerships, and student earnings growth.',
    cards: [
      { title: 'Students', body: 'Learning from faculty and industry experts whose success is tied to theirs.' },
      { title: 'Faculty', body: 'New career paths, recognition for teaching and partnership work, and continuous professional growth across industries as well as disciplines.' },
      { title: 'Institutions', body: 'Tighter alignment between mission and daily work, plus a protected space to innovate.' },
      { title: 'Public universities', body: 'A credible answer to accountability pressure about graduate outcomes.' },
      { title: 'Higher education', body: 'A new model for what an academic career is, including how PhDs are prepared.' },
    ],
  },
  disruptions: {
    intro:
      'During presentations of the Big Idea, participants were asked to name what this idea would disrupt and where change would have to happen.',
    cards: [
      {
        title: 'Structures',
        body: 'Tenure and promotion; collective bargaining agreements; possible policy limits on variable pay in non-profits; departments, and who does their administrative work if they go away; doctoral training.',
      },
      {
        title: 'Relationships',
        body: 'Effects on research funding and research-intensive faculty; competition and entrepreneurship inside a culture participants called “faculty protectionism”; the leadership work of building relationships between faculty and lead employers.',
      },
      {
        title: 'Mental models',
        body: 'Faculty seeing their disciplinary training as a broader set of transferable skills. Participants also asked whether pay is the right lever at all, or whether existing structures could achieve the same alignment.',
      },
      {
        title: 'Assumptions to test',
        body: 'Boards of trustees will be bold and innovative; faculty will respond to new incentives; new hires could move to the model immediately while existing faculty opt in.',
      },
    ],
  },
  photos: [
    {
      src: '/images/big-ideas/faculty-photo-1.jpg',
      alt: 'Three women discuss ideas around a conference table, with one gesturing as others listen; papers, water, and a presentation screen suggest a collaborative workshop.',
      crop: { w: 107.01, h: 118.25, left: -7.01, top: -4.09 },
    },
    {
      src: '/images/big-ideas/faculty-photo-2.jpg',
      alt: 'Three male coworkers relax in a bright office lounge, chatting with drinks in hand; their easy smiles and casual posture create a warm, collegial mood.',
      crop: { w: 111.76, h: 123.5, left: -0.05, top: -11.41 },
    },
  ],
  dayInTheFuture: {
    heading: 'A day in this future with Jordan',
    intro:
      'It is 2036. Jordan, 22, is a senior business student with loans to repay. His biggest fear is graduating with significant debt and not finding a stable job fast enough to pay it off.',
    note: 'An illustrative scenario created by the University Design Institute, featuring a student persona developed by student designers for the Studio. It is not a workshop output.',
    personas: [
      {
        role: 'The student',
        story:
          'Jordan, who has two internships behind him, studies in “NewU,” his university’s parallel unit, in a career cluster for supply chain analytics. His faculty lead knows his career goals. Today he has two offers. The logistics firm where he did his paid project wants him full time. A regional food-bank network wants him to run its distribution logistics, work that matters deeply to him. At their check-in, Elena helps him weigh salary, loan payments and purpose side by side. He chooses the food bank, confident in his plan to pay down his loans, and knowing his program counts every good placement equally.',
        name: 'Jordan',
        descriptor: 'Senior business student, 22',
        avatar: { src: '/images/big-ideas/avatar-jordan.jpg' },
        personaHref: PERSONAS_URL,
      },
      {
        role: 'The faculty member',
        story:
          'Elena opted into NewU from the history department. Her expertise in evaluating sources and building arguments anchors the cluster’s “judgment” competency. Her pay is a fixed base plus a variable portion, half tied to her students’ placement and progress and half to institutional outcomes. Because the metrics value public-service and private-sector careers alike, her primary goal at Jordan’s check-in is to help him choose well.',
        name: 'Dr. Elena Vasquez',
        descriptor: 'NewU cluster faculty',
        avatar: { src: '/images/big-ideas/avatar-elena.jpg', crop: { w: 160, h: 106.64, left: -52.4, top: -3.32 } },
      },
      {
        role: 'The employer',
        story:
          'Andre no longer recruits cold. He works with the cluster all year, hosts students like Jordan on paid projects, and reports back on how his hires grow. That data feeds the faculty incentive metrics, so he can see his input shaping the program.',
        name: 'Andre Coleman',
        descriptor: 'Talent lead, logistics firm',
        avatar: { src: '/images/big-ideas/avatar-andre.jpg', crop: { w: 268, h: 178.69, left: -84.66, top: -2.29 } },
      },
    ],
  },
}

const HYPER_LOCAL_DETAIL: BigIdeaDetail = {
  wideTitle: true,
  intro:
    'The state system becomes a learning network. Each campus runs fast, small experiments with its own community, employers and students, built around local needs. The system supplies permission, resources and shared accountability, and scales what works.',
  hero: {
    src: '/images/big-ideas/hyper-local-hero.jpg',
    alt: 'Two women discuss sticky notes on a bright window, one pointing to “Facts,” “Flips,” and “New Worlds”—a focused brainstorming session.',
    crop: { w: 100, h: 162.54, left: 0, top: -39.01 },
  },
  atAGlance: {
    designQuestion:
      'How might we redesign university processes and incentive structures for responsiveness, adaptability and agility to respond effectively to evolving workforce and societal needs?',
    shift: 'From top-down, risk-averse planning to many local experiments the system learns from',
  },
  bigIdea: [
    'This idea reverses the usual direction of change. Instead of monolithic goals and funding set from the top, the system sets clear guardrails and incentives, such as an innovation fund and explicit permission to try things, and invites each campus to experiment with its local stakeholders. Community members, employers and students become “shareholders” with a voice, a role and accountability. Students get a real seat at the table, for example by submitting ideas that shape their programs.',
    'On campus, structures shift from disciplines to clusters formed around shared problems and interests, so coursework keeps reflecting changing input from the community. Experiments are coordinated across the system so their lessons travel. Teams called this applying the land-grant model to communities: research, teaching and service rooted in the needs of a place. The goal is a steady pipeline of prototypes, and a culture that moves from fear of loss to growth and value creation.',
  ],
  challenge:
    'Universities are anchored to the past by inertia, risk aversion and information silos. Teams described policies that are “vague intentionally,” decentralized “little fiefdoms” under central leadership, funding that is rigid and set top-down, and decisions weighted by tenure and rank. Meanwhile, the pace of change keeps accelerating, and outcomes are out of step with both career readiness and community need.',
  opportunity:
    'A state system could become more than an administrative layer: a platform for continuous, distributed innovation. Each campus could deepen its role as an anchor institution, and the system could learn faster than any single campus.',
  potentialImpact: {
    intro:
      'The team proposed measuring career exposure, how often offerings change, student engagement, the amount of stakeholder feedback, local partnerships formed, and post-completion employment.',
    cards: [
      { title: 'Students', body: 'More career exposure, programs that keep changing to stay relevant, and a real voice in design.' },
      { title: 'Faculty and staff', body: 'Permission, resources and recognition for experimenting, and a renewed role in their communities.' },
      { title: 'Institutions', body: 'Stronger ties with local employers and communities, and greater shared investment in outcomes.' },
      { title: 'Public universities and systems', body: 'A repeatable way to turn local learning into system-wide policy and practice.' },
      { title: 'Communities', body: 'Measurable improvements in local priorities, and greater trust in their university.' },
    ],
  },
  disruptions: {
    intro:
      'During presentations of the Big Idea, participants were asked to name what this idea would disrupt and where change would have to happen.',
    cards: [
      {
        title: 'Structures',
        body: 'Legislative oversight and top-down funding formulas; promotion and tenure criteria that don’t reward experimentation; accreditation requirements for assessing student learning; information systems for sharing what each experiment learns.',
      },
      {
        title: 'Relationships',
        body: 'Getting stakeholders to agree, and the time that heavy coordination takes; faculty resistance; giving students a bigger seat in co-designing curriculum; the limited capacity of local employers.',
      },
      { title: 'Mental models', body: 'Fear of loss, risk aversion, and preservation valued over innovation.' },
      {
        title: 'Assumptions to test',
        body: 'More incentives and outside input will produce more experiments; faculty will change with the right incentives and engagement; local contributors will step up if given the chance.',
      },
      {
        title: 'Context to design for',
        body: 'Participants asked whether this works better for regional institutions than statewide flagships. They noted it is easier in large metro areas with diverse industries than in isolated communities, and that institutions outside a system are already “hyper-local.” Teams also warned that a local focus must not dilute programs that need a broader geographic scope.',
      },
    ],
  },
  photos: [
    {
      src: '/images/big-ideas/hyper-local-photo-1.jpg',
      alt: 'A workshop group listens to a screen prompt about synthesizing feedback into a Big Idea, gathered around notes and books in a focused, collaborative mood.',
      crop: { w: 109.05, h: 120.5, left: 0.06, top: -5.7 },
    },
    { src: '/images/big-ideas/hyper-local-photo-2.jpg', alt: 'A presenter studies sticky notes on a bright window beside a planning chart, while two seated colleagues listen attentively in a collaborative meeting.' },
  ],
  dayInTheFuture: {
    heading: 'A day in this future with Aiyana',
    intro:
      'It is 2036. Aiyana, 21, returned to college after realizing her first career path wasn’t hers. Her biggest fear is moving from path to path without ever feeling she has gotten anywhere.',
    note: 'An illustrative scenario created by the University Design Institute, featuring a student persona developed by student designers for the Studio. It is not a workshop output.',
    personas: [
      {
        role: 'The student',
        story:
          'Aiyana came back after a few years of work. Her earlier coursework counted, because the campus water futures cluster is organized around competencies, not majors. Her last pilot, a text-message reminder system for household water use, didn’t catch on, and what she learned shaped her next idea. Today she pitches it to the campus experiment council: a 90-day pilot in which students run household water audits with the city utility. It is approved with a small seed grant. Every experiment, including the one that didn’t work, adds evidenced competencies to her record, so moving between projects feels like progress, not starting over.',
        name: 'Aiyana',
        descriptor: 'Student generalist, 21',
        avatar: { src: '/images/big-ideas/avatar-aiyana.jpg' },
        personaHref: PERSONAS_URL,
      },
      {
        role: 'The faculty member',
        story:
          'Hannah, a hydrologist, co-leads the new pilot with Aiyana’s team. The campus’s promotion criteria now recognize experimentation, so she can take the risk. She logged the earlier pilot on the system’s shared learning platform, and a campus three hours away used its lessons to launch a stronger version of its own.',
        name: 'Dr. Hannah Brooks',
        descriptor: 'Hydrologist',
        avatar: { src: '/images/big-ideas/avatar-hannah.jpg', crop: { w: 178, h: 118.68, left: -39, top: -8.51 } },
      },
      {
        role: 'The employer',
        story:
          'Ray is a “shareholder” in the cluster. He contributes data and staff time, sits on the experiment council, and shares accountability for agreed community outcomes. In return, the utility gets practical solutions and a pipeline of people who already understand the local water system.',
        name: 'Ray Delgado',
        descriptor: 'Director, city water utility',
        avatar: { src: '/images/big-ideas/avatar-ray.jpg', crop: { w: 171, h: 113.05, left: -66.62, top: 0.41 } },
      },
    ],
  },
}

export const BIG_IDEAS: BigIdea[] = [
  {
    slug: 'pathways-without-walls',
    title: 'Pathways without walls',
    tabLabel: 'Pathways',
    body: 'A university where every learner designs their own path through learning, choosing what, when, where and how fast they learn. They can step out and come back at any point in their lives, on pathways that employers help validate.',
    shift: 'From a fixed four-year sequence to a self-defined, lifelong path.',
    accent: 'border-accent-orange',
    detail: PATHWAYS_DETAIL,
  },
  {
    slug: 'holistic-credentialing',
    title: 'Holistic credentialing for purpose-driven lives',
    tabLabel: 'Holistic credentialing',
    body: 'A university that recognizes and credentials the whole person: emotional intelligence, creative expression, civic engagement, athletic and leadership ability, and the capacity to find and pursue purpose, alongside academic learning. Career becomes something that serves a person’s purpose, not the other way around.',
    shift: 'From academic knowledge only to the whole person and their purpose.',
    accent: 'border-accent-blue',
    detail: HOLISTIC_DETAIL,
  },
  {
    slug: 'no-degree-future',
    title: 'No degree future',
    tabLabel: 'No degree future',
    body: 'A university no longer organized around the four-year degree. Learners prove readiness through a portfolio of demonstrated work, skills assessments and an applied residency or apprenticeship, validated jointly by faculty, industry and other experts. They are “done” when they can show they are ready, not when the clock runs out.',
    shift: 'From time served and credits earned to demonstrated capability.',
    accent: 'border-accent-green',
    detail: NO_DEGREE_DETAIL,
  },
  {
    slug: 'industry-co-educators',
    title: 'Industry becomes co-educators',
    tabLabel: 'Industry co-educators',
    body: 'Industry moves from the advisory board into the classroom and the governance structure. Industry experts hold recognized co-educator roles and co-design degrees with faculty. They share responsibility for teaching, assessing and validating what students learn, with feedback flowing continuously in both directions.',
    shift: 'From faculty-only expertise to a shared teaching partnership with industry.',
    accent: 'border-accent-gray',
    detail: INDUSTRY_DETAIL,
  },
  {
    slug: 'faculty-incentive-pay',
    title: 'New incentive pay model for faculty',
    tabLabel: 'Faculty incentives',
    body: 'A new reward system that aligns faculty careers with student futures. Part of faculty compensation is tied to shared outcomes, such as students’ internships, placement and long-term growth. Faculty are organized around competencies and career clusters rather than fixed departments. The model is tested first in a “parallel university” sandbox.',
    shift: 'From prestige and research output to contribution to student futures.',
    accent: 'border-accent-gold',
    detail: FACULTY_DETAIL,
  },
  {
    slug: 'hyper-local-experimentation',
    title: 'System-level innovation powered by hyper-local experimentation',
    tabLabel: 'Hyper-local experimentation',
    body: 'The state system becomes a learning network. Each campus runs fast, small experiments with its own community, employers and students, built around local needs. The system supplies permission, resources and shared accountability, and scales what works.',
    shift: 'From top-down, risk-averse planning to many local experiments the system learns from.',
    accent: 'border-accent-maroon',
    detail: HYPER_LOCAL_DETAIL,
  },
]
