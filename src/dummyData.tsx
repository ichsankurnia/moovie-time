import ww from './assets/ww.png'
import boys from './assets/image 12 (1).png'
import ss from './assets/image 12.png'

const imgPath = `${process.env.PUBLIC_URL}/assets`

export const DUMMY_SEARCH_LIST = [
    { id: 11, title: 'One Piece Film Red' },
    { id: 8, title: 'Final Fantasy' },
    { id: 1, title: 'Wonder Woman 1984' },
    { id: 10, title: 'One Piece Film Gold' },
    { id: 2, title: 'Wonder Woman' },
    { id: 3, title: 'Wonder' },
    { id: 4, title: 'Wonder Woman' },
    { id: 5, title: 'Wonder Woman: Bloodlines' },
    { id: 9, title: 'One Piece' },
    { id: 7, title: 'Wonder Boys' },
]

export const CATEGORY_LIST = [
    'Action',
    'Adventure',
    'Animation',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'History',
    'Horror'
]

export const FILM_LIST = [
    { 
        title: 'Wonder Woman 1984', 
        rating: '7.0', 
        release: '2020', 
        thumbnail: ww, 
        category: ['Fantasy', 'Action', 'Adventure'] 
    },
    { 
        title: 'Below Zero', 
        rating: '6.4', 
        release: '2021', 
        thumbnail: imgPath + '/below-zero.png', 
        category: ['Fantasy', 'Action', 'Adventure'] 
    },
    { 
        title: 'The Little Things', 
        rating: '6.3', 
        release: '2021', 
        thumbnail: imgPath + '/the-little-things.png', 
        category: ['Fantasy', 'Action', 'Adventure'] 
    },
    { 
        title: 'Outside the Wire', 
        rating: '6.5', 
        release: '2021', 
        thumbnail: imgPath + '/outside-of-the-wire.png', 
        category: ['Fantasy', 'Action', 'Adventure'] 
    },
    { 
        title: 'Black Water: Abyss', 
        rating: '5.1', 
        release: '2020', 
        thumbnail: imgPath + '/abyss.png', 
        category: ['Fantasy', 'Action', 'Adventure'] 
    },
    { 
        title: 'Breach', 
        rating: '4.6', 
        release: '2021', 
        thumbnail: imgPath + '/breach.png', 
        category: ['Fantasy', 'Action', 'Adventure'] 
    },
    { 
        title: 'Soul', 
        rating: '8.3', 
        release: '2020', 
        thumbnail: imgPath + '/soul.png', 
        category: ['Fantasy', 'Action', 'Adventure'] 
    },
    { 
        title: 'Fast & Furious Presents', 
        rating: '6.9', 
        release: '2019', 
        thumbnail: imgPath + '/ff.png', 
        category: ['Fantasy', 'Action', 'Adventure'] 
    },
    { 
        title: 'The Croods: A New Age', 
        rating: '7.6', 
        release: '2020', 
        thumbnail: imgPath + '/croods.png', 
        category: ['Fantasy', 'Action', 'Adventure'] 
    },
    { 
        title: 'Vanguard', 
        rating: '6.3', 
        release: '2020', 
        thumbnail: imgPath + '/vanguard.png', 
        category: ['Fantasy', 'Action', 'Adventure'] 
    },
    { 
        title: 'Tenet', 
        rating: '7.3', 
        release: '2020', 
        thumbnail: imgPath + '/tenet.png', 
        category: ['Fantasy', 'Action', 'Adventure'] 
    },
    { 
        title: '100% Wolf', 
        rating: '5.9', 
        release: '2020', 
        thumbnail: imgPath + '/wolf.png', 
        category: ['Fantasy', 'Action', 'Adventure'] 
    },
    { 
        title: 'The New Mutants', 
        rating: '7.0', 
        release: '2020', 
        thumbnail: imgPath + '/mutants.png', 
        category: ['Fantasy', 'Action', 'Adventure'] 
    },
    { 
        title: 'The Old Guard', 
        rating: '7.0', 
        release: '2020', 
        thumbnail: imgPath + '/old-guard.png',
        category: ['Fantasy', 'Action', 'Adventure'] 
    },
    { 
        title: 'Project Power', 
        rating: '7.0', 
        release: '2020', 
        thumbnail: imgPath + '/project-power.png',
        category: ['Fantasy', 'Action', 'Adventure'] 
    },
]

export const SLIDER_FILM_LIST = [
    { thumbnail: ww, rating: '7.2', title: 'News of the World', release: '2021', category: 'Drama', overview: "A Texan traveling across the wild West bringing the news of the world to local townspeople, agrees to help rescue a young girl who was kidnapped." },
    { thumbnail: ss, rating: '7.3', title: 'Space Sweepers', release: '2021', category: 'Sci-Fi', overview: "When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that's known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake." },
    { thumbnail: boys, rating: '8.1', title: 'To All the Boys: Always and Forever', release: '2021', category: 'Drama', overview: "Senior year of high school takes center stage as Lara Jean returns from a family trip to Korea and considers her college plans — with and without Peter." },
    { thumbnail: ss, rating: '7.3', title: 'Space Sweepers', release: '2021', category: 'Sci-Fi', overview: "When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that's known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake." },
]

export const DROPDOWNS_SORT_LIST = [
    { label: 'Popularity Ascending', value: 'Popularity', type: 'up' },
    { label: 'Popularity Descending', value: 'Popularity', type: 'down' },
    { label: 'Release Date Ascending', value: 'Release', type: 'up' },
    { label: 'Release Date Descending', value: 'Release', type: 'down' },
    { label: 'Rating Ascending', value: 'Rating', type: 'up' },
    { label: 'Rating Descending', value: 'Rating', type: 'down' }
]

export const REVIEW_LIST = [
    { name: 'SWITCH.', date: 'December 18, 2020', rating: '7.0', review: "It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos... read the rest." },
    { name: 'msbreviews', date: 'October 14, 2020', rating: '8.0', review: "If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com\nThe superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only " },
]