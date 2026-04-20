import EBoardCard from '../components/EBoardCard'
import Header from '../components/Header'
import './About.css'

// E-Board data array — rendered with .map()
// data mostly coopy pasted from prev versions
const eboardMembers = [
  {
    name: 'Alex',
    role: 'E-Board Member',
    imageSrc: '/images/ASA-pics/alex.png',
    bio: "Alex is a Junior and she is majoring in Molecular Neuroscience with a minor in Sociology! 🧠📚 Some fun facts and hobbies of Alex is she loves horror movies 😳, baking 🍪🍰🧁, clay art, and she's been a full and part time EMT for three years! 🚑🫀🩺🚨 This school year, Alex is really looking forward to fun times with ASA, renting a house with her roommates, and rounding out her minor! 🥰👯‍♀️",
  },
  {
    name: 'Kenzie',
    role: 'E-Board Member',
    imageSrc: '/images/ASA-pics/kenzie.png',
    bio: "Kenzie is a Junior, majoring in Marketing! 📈👩🏻‍💻 A fun fact about her is that she was born in Changsha, China! This school year she is most excited to meet our newest ASA members!!! 🤩🤗",
  },
  {
    name: 'Franny',
    role: 'E-Board Member',
    imageSrc: '/images/ASA-pics/franny.png',
    bio: "Franny is a Junior, double majoring in Biomedical Engineering and Chinese! She also has a minor in biomedical and pharmaceutical sciences. 👩🏻‍🔬🧬🛠️ Fun fact: Franny has traveled to more countries than she has traveled states! 🛩️ Hobbies: dancing 💃, photography 📸, and she's a professional escape room artist 😏. This school year, she's excited to get more involved in school and live off-campus with her friends! 🌟🫶🏽",
  },
  {
    name: 'Natalie',
    role: 'E-Board Member',
    imageSrc: '/images/ASA-pics/natalie.png',
    bio: "Natalie is a Sophomore majoring in HDF (Human Development and Family Science) on a Pre-Health Track in PT! ☺️🩺🧠 Natalie loves photography, traveling, reading, baking, cooking, and hiking. 📸✈️📚👩🏻‍🍳🥾 Fun fact: She's moved 5️⃣ times and her secret talent is making realistic dolphin noises! 🐬 She also knows Morse Code and has been to 1/4 of the USA! 🇺🇸🛬 This upcoming year she is most excited to give more tours throughout the year, expand ASA, and come up with fun events!",
  },
  {
    name: 'Sadie',
    role: 'E-Board Member',
    imageSrc: '/images/ASA-pics/sadie.png',
    bio: "Sadie is a Sophomore majoring in Medical Laboratory Science. 🧫🔬👩🏽‍🔬 During her free time, she loves bingeing Korean dramas, shopping, and reading! 📺🛍️📚 Fun facts: She is the oldest of 4️⃣ and is also a Peer Leader for the Center of Student Leadership Development. 🩵🐏 This school year, she's looking forward to all of the new opportunities to come, as well as meeting new people!",
  },
  {
    name: 'Kenneth',
    role: 'E-Board Member',
    imageSrc: '/images/ASA-pics/kenneth.png',
    bio: "Ken is a Sophomore majoring in Biological Sciences on the Pre-Health track! 🩺🧬 Fun fact: He's got a cat named Juni with SIX toes on each paw. 🐾🐱 This year, Ken's most excited to embrace his chaotic sleep schedule. 😴📚☕",
  },
  {
    name: 'Henry & Jess',
    role: 'Treasurer (in training) & M.U.S.I.C Liaison',
    imageSrc: '/images/ASA-pics/henry-jess.png',
    bio: "Welcome to our newest E-Board members for 2026–2027! ❤️ Henry: \"Hi! My name is Henry. I am a freshman majoring in Cell and Molecular Biology. I love playing volleyball, and in my free time I like to watch kdramas and anime!\" 🏐📺 Jess: \"My name is Jessica, I am a Sophomore double majoring in Psychology and HDF. I went to Vietnam for five weeks over the Summer!\" 😎 We are so excited to have you both on the eboard! 🙌🏽",
  },
]

export default function About() {
  return (
    <div className="page-wrapper">
      <PageHeader
        tag="Who We Are"
        title="About Us"
        subtitle="Get to know the people behind ASA — our mission, our story, and our incredible E-Board."
      />
      <hr />

      <section className="about-blurb fade-up fade-up-1">
        <p>
          The <strong>Asian Students Association</strong> at the University of Rhode Island is a
          student-run organization dedicated to celebrating Asian cultures, building community,
          and fostering an inclusive environment for all students. Whether you're Asian, a part of
          the Asian diaspora, or simply passionate about Asian culture — you belong here. 🌏
        </p>
      </section>

      <section className="eboard-section fade-up fade-up-2">
        <h2 className="section-title">Meet the E-Board!</h2>
        <div className="eboard-grid">
          {/* Render all E-Board cards using .map() */}
          {eboardMembers.map((member) => (
            <EboardCard
              key={member.name}
              name={member.name}
              role={member.role}
              imageSrc={member.imageSrc}
              bio={member.bio}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
