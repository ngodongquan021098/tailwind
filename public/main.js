// Menu
// const menu = document.querySelector("#menu")
// const menuButton = document.querySelector("#menu-button")

// menuButton.addEventListener("click", () => {
//     menu.classList.toggle("invisible")
// })

//
// Fashion page
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
let dataCarousel = [
  {
    title: "Shop1",
    img: "./img-fashion/shop_01.png",
  },
  {
    title: "Shop2",
    img: "./img-fashion/shop_02.png",
  },
  {
    title: "Shop3",
    img: "./img-fashion/shop_02.png",
  },
  {
    title: "Shop4",
    img: "./img-fashion/shop_04.png",
  },
  {
    title: "Shop5",
    img: "./img-fashion/shop_05.png",
  },
];

const divCarousel = document.getElementById("carousel");
const divInnerCarousel = document.getElementById("inner-carousel");
let offSetWidthCarousel = divInnerCarousel.offsetWidth;
let widthCarousel = 0;
let column = 3;

function setColumn() {
  if (window.innerWidth >= 640 && window.innerWidth < 1024) {
    column = 2;
  } else if (window.innerWidth < 640) {
    column = 1;
  } else {
    column = 3;
  }
}

function renderDivCarousel(i) {
  const newDivCarousel = document.createElement("div");
  newDivCarousel.className = "group card-carousel cursor-pointer";
  offSetWidthCarousel = divInnerCarousel.offsetWidth;
  widthCarousel = offSetWidthCarousel / column;
  newDivCarousel.style.width = `${widthCarousel}px`;

  // create img in div carousel
  const imgDiv = document.createElement("img");
  imgDiv.setAttribute("src", i.img);

  // create div title in div carousel
  const titleDiv = document.createElement("p");
  titleDiv.className = "title-carousel";
  titleDiv.innerHTML = i.title;

  newDivCarousel.appendChild(titleDiv);
  newDivCarousel.appendChild(imgDiv);

  return newDivCarousel;
}

setColumn();
for (const i of dataCarousel) {
  // create div carousel
  const newDivCarousel = renderDivCarousel(i);
  divCarousel.appendChild(newDivCarousel);
}

window.addEventListener(
  "resize",
  function () {
    setColumn();
    offSetWidthCarousel = divInnerCarousel.offsetWidth;
    const collections = document.getElementsByClassName("card-carousel");
    for (const i of collections) {
      i.style.width = `${offSetWidthCarousel / column}px`;
    }
    widthCarousel = offSetWidthCarousel / column;
    divCarousel.style.transform = `translateX(${0}px)`;
    index = 0;
    backBtnElem.disabled = true;
    nextBtnElem.disabled = false;
  },
  true
);

// event click and next in carousel
let index = 0;
let currentBack = 0;
let currentNext = 0;
const backBtnElem = document.getElementById("btn-back");
const nextBtnElem = document.getElementById("btn-next");

function clickNext() {
  index = index + 1;
  backBtnElem.disabled = false;
  // if (index === dataCarousel.length - column -1) {
  //   nextBtnElem.disabled = true
  // }
  if (index === dataCarousel.length - column) {
    nextBtnElem.disabled = true;
  }
  if (index > dataCarousel.length - column) {
    // const newDivCarousel = renderDivCarousel(dataCarousel[currentNext])
    // const listChild = document.getElementsByClassName('card-carousel');
    // divCarousel.insertBefore(newDivCarousel, listChild[listChild.length - 1].nextSibling);

    // listChild[0].remove()
    // if (currentNext >= dataCarousel.length - 1) {
    //   index = 0
    //   currentNext = 0
    // }
    // currentNext = currentNext + 1
    // index = index - 1
    index = index - 1;
    return;
  }
  const widthTransform = index * -widthCarousel;
  divCarousel.style.transform = `translateX(${widthTransform}px)`;
}

setInterval(() => {
  clickNext();
}, 10000);

nextBtnElem.addEventListener("click", function () {
  clickNext();
});

backBtnElem.addEventListener("click", function () {
  index = index - 1;
  const widthTransform = index * -widthCarousel;
  divCarousel.style.transform = `translateX(${widthTransform}px)`;
  nextBtnElem.disabled = false;
  if (index === 0) {
    backBtnElem.disabled = true;
    // index = 0
    // currentBack = currentBack - 1
    // const newDivCarousel = renderDivCarousel(dataCarousel[dataCarousel.length + currentBack])
    // const listChild = document.getElementsByClassName('card-carousel');
    // divCarousel.insertBefore(newDivCarousel, listChild[0]);
    // listChild[listChild.length - 1].remove()
    // if (-currentBack >= dataCarousel.length) {
    //   currentBack = 0
  }
});

// observation get two params list entries, callback is being invoked
// function asyncTimeout() {
//   return new Promise((resolve, reject) => {
//     try {
//       resolve();
//     } catch (err) {
//       reject(err);
//     }
//   });
// }
function asyncTimeout(callback, timer) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        callback();
        resolve();
      }, timer);
    } catch (err) {
      reject(err);
    }
  });
}

let firstLoadBanner = true;

function onObservation(entries) {
  entries.forEach(async (el) => {
    if (
      el.target.className.includes("banner-main") &&
      el.isIntersecting &&
      firstLoadBanner
    ) {
      document.getElementById("img-banner").className +=
        " opacity-100 translate-x-0";
      document.getElementById("irina-img").className += " -translate-y-0";

      await asyncTimeout(() => {
        document.getElementById("img-sub-banner").className +=
          " opacity-100 translate-x-0";
        document.getElementById("title-fashion").classList +=
          "  opacity-100 -translate-y-0";
      }, 500);
      // .then(() => {
      //   setTimeout(() => {
      //     document.getElementById('description-fashion').classList += "  opacity-100 -translate-y-0"
      //   }, 100)
      // })

      await asyncTimeout(() => {
        document.getElementById("description-fashion").classList +=
          "  opacity-100 -translate-y-0";
      }, 100);

      // asyncTimeout()
      //   .then(() =>{
      //     return new Promise((resolve, reject) => {
      //       setTimeout(() => {
      //         console.log('3')
      //         document.getElementById("img-sub-banner").className +=
      //           " opacity-100 translate-x-0";
      //         document.getElementById("title-fashion").classList +=
      //           "  opacity-100 -translate-y-0";
      //         resolve()
      //       }, 1000);
      //     })
      //   })
      //   .then(() => {
      //     console.log('2')
      //     setTimeout(() => {
      //       console.log('4')
      //           document.getElementById('description-fashion').classList += "  opacity-100 -translate-y-0"
      //         }, 100)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
    } else if (
      el.target.className.includes("bg-banner-ecommerce") &&
      el.isIntersecting
    ) {
      const elementImgEcommerce =
        document.getElementsByClassName("img-ecommerce");
      for (let i = 0; i < elementImgEcommerce.length; i++) {
        elementImgEcommerce[i].className += " opacity-100 translate-y-0";
      }
    }
  });
}

const observation = new IntersectionObserver(onObservation, {
  threshold: 0,
});
const elementBanner = document.querySelector(".banner-main");
observation.observe(elementBanner);

const elementBannerEcommerce = document.querySelector(".bg-banner-ecommerce");
observation.observe(elementBannerEcommerce);

// promise
async function test() {
  let a = [1, 2, 3];
  const abb = new Promise((resolve, reject) => {
    setTimeout(() => {
      a.push(4);
      resolve();
    }, 100);
  });
  await abb;
  a.push(5);
  console.log(a);
}
test();

// promise all
const promise1 = Promise.resolve(9);
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});
const promise3 = () => {
  return new Promise((resolve, reject) => {
    try {
      const a = 11;
      resolve(a);
    } catch (error) {
      reject(error);
    }
  });
};
Promise.all([promise1, promise2, promise3()])
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    alert(err);
  });

async function test2() {
  const a = await promise1;
  const b = await promise2;
  const c = await promise3();
  console.log(a, b, c);
}
test2();
