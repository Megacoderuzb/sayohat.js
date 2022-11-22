let dolor = 11250;
let euro = 12864;
let bilet = 350 * dolor;
let hotel = 680 * dolor;
let smth = 230 * euro;
let summa = prompt("Qancha pul bor!") * 1;

let all = bilet + hotel + smth;

if (summa >= all) {
  console.log("Oq yo'l boy aka!");
} else if (summa < all) {
  console.log(
    `Sizda pul yetarli emas.  ${
      Math.round(Math.random() * 3) + 1
    } KUNDA KELING! ${all} so'mga yetadigan pul bilan keling!`
  );
} else {
  console.log("Aka summa yani son qiymat kiriting!");
}
