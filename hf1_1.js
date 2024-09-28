let movies = [
    {
        title: "Oppenheimer",
        studio: "Universal",
        month: "July",
        reviews: [10, 1, 7, 9, 10, 10, 9],
    },
    {
        title: "Spider-Man: Across the Spider-Verse",
        studio: "Sony",
        month: "June",
        reviews: [9, 8, 9, 9, 6],
    },
    {
        title: "Dungeons & Dragons: Honor Among Thieves",
        studio: "Paramount",
        month: "March",
        reviews: [9, 8],
    },
    {
        title: "Mission: Impossible - Dead Reckoning Part One",
        studio: "Skydance",
        month: "July",
        reviews: [7, 8, 3, 9],
    },
    {
        title: "The Hunger Games: The Ballad of Songbirds and Snakes",
        studio: "Lionsgate",
        month: "November",
        reviews: [],
    },
    {
        title: "John Wick 4",
        studio: "Lionsgate",
        month: "March",
        reviews: [6, 10, 9],
    },
    {
        title: "Saw X",
        studio: "Lionsgate",
        month: "September",
        reviews: [7],
    },
    {
        title: "Barbie",
        studio: "Mattel",
        month: "July",
        reviews: [1, 10, 1, 10, 1, 10, 1, 10],
    },
]

const fel1 = movies.filter(x => (x.month == "March"));
console.log(fel1);

const fel2 = movies.sort((m1,m2) => m1.title.localeCompare(m2.title))
console.log(fel2);

const fel3 = 
[
    ...new Set(movies.map(x => x.studio))
]
console.log(fel3);

const fel4 = movies.some(x => x.month === "September")
console.log(fel4);

const fel5 = 
    movies.map(x => (
        `${x.title}: ${x.reviews.length > 0 ? x.reviews.reduce((s,a) => s + a,0) / x.reviews.length : 0}`
))
const review_sum = movies.reduce((n,x) => n + x.reviews.reduce((s,a) => s + a,0),0);
const reviews_count = movies.reduce((n,x) => n + x.reviews.length,0);
const avg = review_sum / reviews_count;

fel5.push(`Átlag: ${avg}`);
console.log(fel5)

