const marvel = ["thor","spiderman","ironman"]
const dc = ["superman","batman","flash"]

marvel.push(dc)
// this will store the array dc as array as single entry 
// console.log(marvel);
// console.log(marvel[3][1]);


// const allhero = marvel.concat(dc)
// console.log(allhero);
// Same as simple push

// const all_hero = [...marvel,...dc]
// console.log(all_hero);
// spread operator

// const anotherarr = [1,2,3,[5,6],[7,8,9],[45,43,[2,35,1]]]
// const realanotherarr = anotherarr.flat(Infinity)
// console.log(realanotherarr);


// console.log(Array.isArray("aditya"))
// console.log(Array.from({name: "aditya"}))
// intresting case becuse it can directly convert this give empty array

// let score1 = 10
// let score2 = 20
// let score3 = 30
// console.log(Array.of(score1,score2,score3))