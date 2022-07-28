// Add Navigation functionality
const navBtn = document.querySelector(".nav-mobile-btn");
const headerNav = document.querySelector(".header");
const navItem = document.querySelectorAll(".nav-item");

navBtn.addEventListener("click", () => {
  headerNav.classList.toggle("active");
});

[].forEach.call(navItem, (element) => {
  element.addEventListener("click", () => {
    headerNav.classList.remove("active");
  });
});

// Add More button functionality
const moreBtn = document.querySelector("#btn-more");
const lessBtn = document.querySelector("#btn-less");
const partner = document.querySelector(".partner");
const footer = document.querySelector(".footer");

const showData = () => {
  partner.classList.add("show-partner");
  footer.classList.add("show-footer");
  moreBtn.classList.add("more-btn");
  lessBtn.classList.remove("less-btn");
};

const hideData = () => {
  partner.classList.remove("show-partner");
  footer.classList.remove("show-footer");
  moreBtn.classList.remove("more-btn");
  lessBtn.classList.add("less-btn");
};

moreBtn.addEventListener("click", showData);
lessBtn.addEventListener("click", hideData);

// Add Dynamic data to the Featured Speakers lists
document.addEventListener("DOMContentLoaded", () => {
  const speakers = document.querySelector("#speakers");

  const speakersData = [
    {
      id: 1,
      name: "David",
      caption: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque tenetur quaerat repellat sint doloribus numquam hic! Fugiat illo at eligendi a nihil ullam eos voluptatem nesciunt?",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      hide: false,
    },
    {
      id: 2,
      name: "Richal",
      caption: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque tenetur quaerat repellat sint doloribus numquam hic! Fugiat illo at eligendi a nihil ullam eos voluptatem nesciunt?",
      avatar: "https://randomuser.me/api/portraits/women/50.jpg",
      hide: false,
    },
    {
      id: 3,
      name: "Robert",
      caption: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque tenetur quaerat repellat sint doloribus numquam hic! Fugiat illo at eligendi a nihil ullam eos voluptatem nesciunt?",
      avatar: "https://randomuser.me/api/portraits/men/40.jpg",
      hide: true,
    },
    {
      id: 4,
      name: "Alice",
      caption: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque tenetur quaerat repellat sint doloribus numquam hic! Fugiat illo at eligendi a nihil ullam eos voluptatem nesciunt?",
      avatar: "https://randomuser.me/api/portraits/women/60.jpg",
      hide: true,
    },
    {
      id: 5,
      name: "John Doe",
      caption: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque tenetur quaerat repellat sint doloribus numquam hic! Fugiat illo at eligendi a nihil ullam eos voluptatem nesciunt?",
      avatar: "https://randomuser.me/api/portraits/men/70.jpg",
      hide: true,
    },
    {
      id: 6,
      name: "Michael",
      caption: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque tenetur quaerat repellat sint doloribus numquam hic! Fugiat illo at eligendi a nihil ullam eos voluptatem nesciunt?",
      avatar: "https://randomuser.me/api/portraits/women/40.jpg",
      hide: true,
    },
  ];

  let showData = "";
  speakersData.map((speaker) => {
    showData += `
    <div class="col-12 col-md-6">
    <div class="speaker-card">
      <div class="speaker-image">
        <img
          src="./assets/images/speaker-bg-image.jpg"
          alt="speaker image"
          class="bg-img"
        />
        <img
          src=${speaker.avatar}
          alt="speaker image"
          class="avatar"
        />
      </div>
      <div class="speaker-content">
        <h1>${speaker.name}</h1>
        <p class="caption">
          ${speaker.caption}
        </p>
        <hr />
        <p>
          ${speaker.desc}
        </p>
      </div>
    </div>
  </div>
    `;
    return showData;
  });
  speakers.innerHTML = showData;
});
