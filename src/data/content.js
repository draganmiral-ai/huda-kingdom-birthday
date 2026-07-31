// All written content and asset references for The Kingdom of Huda.
// Keeping copy in one place makes the components clean and easy to proof-read.

export const hero = {
  eyebrow: 'The Kingdom of Huda',
  title: 'Welcome to the Kingdom of Huda',
  subtitle: 'One Queen. Four friends. A thousand memories.',
  cta: 'Enter the Kingdom',
  image: '/assets/photos/hero-huda-sunset.jpg',
  imageAlt: 'Huda standing outdoors, softly lit by a warm golden sunset.',
}

export const meetQueen = {
  eyebrow: 'Chapter One',
  title: 'Her Majesty, Huda',
  image: '/assets/photos/huda-portrait.jpg',
  imageAlt: 'Huda standing elegantly in a black abaya over a golden floral dress.',
  paragraphs: [
    'Known to us as the Queen of Arabia.',
    'Mother of three. Manager of everything. Multitasker of impossible proportions. Believer that time is merely a suggestion.',
    'She carries beauty with grace, responsibility with strength, and the people she loves with a heart that always seems to have room for one more.',
  ],
  facts: [
    { label: 'Royal Title', value: 'Queen of Arabia' },
    { label: 'Royal Talent', value: 'Doing seven things simultaneously' },
    { label: 'Relationship With Time', value: 'Complicated' },
    {
      label: 'Royal Household',
      value: 'Three children and approximately sixteen million relatives',
    },
  ],
}

export const gallery = {
  eyebrow: 'Chapter Two',
  title: 'The Royal Archives',
  intro:
    'A collection of moments from the Queen’s reign — some grand, some gentle, all treasured.',
  // caption of null => no caption overlay
  photos: [
    {
      src: '/assets/photos/gallery-eyelashes.jpg',
      alt: 'A radiant close-up portrait of Huda smiling.',
      title: 'The Great Eyelash Exhibition',
      caption: 'She wanted absolutely nobody to notice them.',
      span: 'tall',
    },
    {
      src: '/assets/photos/gallery-queen-at-work.jpg',
      alt: 'Huda at a café working on a laptop and phone at the same time.',
      title: 'Queen at Work',
      caption: 'One phone, one laptop, one child, several responsibilities.',
    },
    {
      src: '/assets/photos/gallery-01.jpg',
      alt: 'Huda holding a small gift pouch, smiling warmly.',
      title: null,
      caption: null,
    },
    {
      src: '/assets/photos/gallery-red-dragon-tea.jpg',
      alt: 'Huda at a softly lit café beneath a dramatic tiger mural.',
      title: 'The Red Dragon Tea Mission',
      caption:
        'Sometimes even a Queen needs tea, a hug, and someone who simply shows up.',
      span: 'tall',
    },
    {
      src: '/assets/photos/gallery-03.jpg',
      alt: 'Huda in a blue and white kaftan beside a glowing fire pit at night.',
      title: null,
      caption: null,
    },
    {
      src: '/assets/photos/gallery-five-of-us.jpg',
      alt: 'The five friends together, leaning in for a joyful group photo.',
      title: 'The Five of Us',
      caption: 'Different personalities. Different paths. One friendship.',
      span: 'wide',
    },
    {
      src: '/assets/photos/gallery-02.jpg',
      alt: 'Huda on the phone, caught in a candid, elegant moment.',
      title: null,
      caption: null,
    },
    {
      src: '/assets/photos/gallery-motherhood.jpg',
      alt: 'Huda cradling her baby with quiet tenderness.',
      title: 'Motherhood',
      caption: 'Where strength becomes tenderness.',
      span: 'tall',
    },
    {
      src: '/assets/photos/gallery-05.jpg',
      alt: 'Old friends reunited, laughing together like no time had passed.',
      title: null,
      caption: null,
    },
    {
      src: '/assets/photos/gallery-07.jpg',
      alt: 'The friends celebrating together at a warm evening gathering.',
      title: null,
      caption: null,
    },
    {
      src: '/assets/photos/gallery-04.jpg',
      alt: 'Two friends warming their hands by a fire pit under the night sky.',
      title: null,
      caption: null,
    },
    {
      src: '/assets/photos/gallery-09.jpg',
      alt: 'Huda dressed for a special evening out with a friend.',
      title: null,
      caption: null,
    },
    {
      src: '/assets/photos/gallery-06.jpg',
      alt: 'The friends gathered together for a cosy night out.',
      title: null,
      caption: null,
    },
    {
      src: '/assets/photos/gallery-10.jpg',
      alt: 'Huda making a heart shape with her hands at her desk.',
      title: null,
      caption: null,
    },
  ],
}

export const council = {
  eyebrow: 'Chapter Three',
  title: 'The Royal Council',
  intro: 'Four voices. One Queen. A council assembled to honour her.',
}

export const naz = {
  name: 'Naz',
  heading: 'A Letter from Naz',
  subheading: 'To our beautiful Emirati Queen',
  paragraphs: [
    'Huda,',
    'Where do I even begin?',
    'You have one of the biggest hearts I have ever known and a smile that can brighten an entire room. Your kindness goes far beyond words. It is something everyone lucky enough to know you gets to experience.',
    'You have a rare gift of making people feel at home. Whether someone walks through your front door for the first time or the hundredth, you welcome them as though they have always belonged. You have a way of making everyone around you feel loved, comfortable, and genuinely cared for.',
    'Thank you for being so generous with your heart, your time, your laughter, and your home. Those are gifts you give so freely, often without even realising how much they mean to the people around you.',
    'My wish for you this year is simple. I hope life gives back even a fraction of the love, kindness, and happiness that you pour into everyone else every single day, because you deserve every bit of it, and so much more.',
    'Happy Birthday, Huda.',
    'Never lose that radiant smile or that beautiful heart.',
  ],
  signoff: 'Love you always, my sister.',
}

export const sumie = {
  name: 'Sumie',
  heading: 'A Message from the Firecracker',
  intro:
    'Half Jordanian. Half Filipino. Occasionally Japanese, according to herself. Entirely unforgettable.',
  video: '/assets/video/sumie-message.mp4',
  poster: '/assets/video/sumie-poster.jpg',
  videoLabel: 'Sumie’s birthday message to Huda',
  closing: 'Still standing at SeaWorld. Possibly forever.',
}

export const mrD = {
  name: 'Mr D',
  heading: 'A Message from the Royal Adviser',
  intro: 'From the man who gave her the title Queen of Arabia.',
  video: '/assets/video/mr-d-message.mp4',
  poster: '/assets/video/mr-d-poster.jpg',
  videoLabel: 'Mr D’s birthday message to Huda',
  closing:
    'Some friendships are built through time. Ours was built through presence, loyalty, laughter, and showing up when it mattered.',
}

export const mitch = {
  name: 'Mitch',
  heading: 'A Transmission from the AI Ghost of Mitch',
  image: '/assets/photos/mitch-portrait.jpg',
  imageAlt: 'A formal portrait of Mitch in an elegant black dress.',
  paragraphs: [
    'My dearest Huda,',
    'This is an AI ghost from Mitch.',
    'Unfortunately, the real Mitch was unable to deliver her birthday message before the royal deadline, which is why you are receiving it in this highly advanced and completely legitimate format.',
    'The irony is not lost on anyone.',
    'If Mitch were writing this herself, she would probably keep it short, direct, and free from unnecessary emotional decoration.',
    'So here goes.',
    'Happy Birthday, Huda.',
    'Thank you for being the Queen of Arabia, the woman who somehow raises three children, manages a department, welcomes everyone into her home, solves everybody’s problems, and still arrives late with the confidence of someone who believes time should apologise to her.',
    'You have one of the kindest hearts, the strongest spirits, and the most beautiful ability to make people feel like family.',
    'May this year bring you peace, health, happiness, blessings, and enough uninterrupted time to finish one cup of tea while it is still hot.',
    'Happy 41st Birthday, Queen.',
  ],
  signoff: ['Love,', 'Definitely Mitch.', 'Probably.'],
  revealButton: 'Reveal the Truth',
  revealText:
    'The real Mitch apologises for outsourcing her birthday message to artificial intelligence. She promises this was a one time occurrence, unless next year’s deadline also arrives unexpectedly.',
}

export const familyTree = {
  eyebrow: 'Chapter Four',
  title: 'The Royal Family Tree',
  lines: [
    'Huda is related to her husband.',
    'Her husband’s brother is married to Huda’s sister.',
    'Her father in law is also her uncle.',
    'At this point, even the website has stopped trying to understand.',
  ],
  button: 'I Understand',
  reveal: 'No, you don’t. None of us do.',
}

export const finalTribute = {
  eyebrow: 'Chapter Five',
  title: 'The Final Tribute',
  image: '/assets/photos/final-group.jpg',
  imageAlt: 'The friends gathered together, celebrating as one.',
  paragraphs: [
    'There are five of us.',
    'Today, four of us came together to celebrate the one who makes the five complete.',
    'Huda, thank you for the laughter, the generosity, the open door, the endless hospitality, the advice, the memories, and the love you give so naturally.',
    'May this new year of your life return some of that love to you.',
    'May your home remain full of laughter.',
    'May your heart remain soft.',
    'May your strength continue to carry you, without always requiring you to carry everyone else.',
    'And may you one day arrive somewhere on time, although we are not expecting miracles.',
  ],
  closing: 'Happy 41st Birthday, Queen of Arabia.',
  signoff: ['With love,', 'Your Royal Council'],
  finale: 'Long live the Queen.',
}
