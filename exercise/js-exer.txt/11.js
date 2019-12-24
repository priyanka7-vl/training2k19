11.Write a javascript function to hide email addresses to protect from unauthorized user."abc...@example.com"


email = function (user_email) {
    let avg, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};
console.log(email("lucky.priya@example.com"));
