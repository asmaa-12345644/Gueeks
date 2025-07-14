const users = { user1: 18273, user2: 92833, user3: 90315 }
part1=Object.entries(users)


part2=part1.map(([key, value]) => [key,value*2] )
console.log(part2); 

