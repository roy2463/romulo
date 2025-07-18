document.getElementById('birthdayBtn').addEventListener('click', () => {
  const message = `Happy birthday kumpareng utot HAHAHA, ay ano pa ang inagawa? barik na iho 🍻

Thank you for being my solid tropa. Kahit ilang ulit ko nang sinabi 'alam mo baaaa' habang lasing,
andyan ka pa rin. Nakikinig. Uma-agree. Kahit ang gulo ko na tapos sobrang oa ng tao na ito. 

Hindi ka lang pang-inuman, pang breakdown din.
Kahit wala kang idea sa dinadrama ko, nandiyan ka pa rin.

Thank you sa bardagulan, sa pag-intindi sa ka oayan ko haha, 
tsaka salamat sa mga libreng walang sumbat at pag kakaibigang hindi sukatan ng pera.


Wishing you all the shots sa buhay na kaya mong tapusin.
Strong kidneys, strong heart, and stronger ka pa lalo. 

HAPPY 21ST BIRTHDAY, ROMS! 🎂🎉💙`;

  let i = 0;
  let typedHTML = '';

  const typeWriter = () => {
    if (i < message.length) {
      typedHTML += message.charAt(i);
      Swal.update({ html: `<p style="text-align:left; font-size:1rem;">${typedHTML}</p>` });
      i++;
      setTimeout(typeWriter, 20);
    }
  };

  Swal.fire({
    title: 'CHEERS TO 21, ROMS!',
    html: `<p style="text-align:left; font-size:1rem;"></p>`,
    confirmButtonText: 'CHEERS! 🍻',
    background: '#fff',
    backdrop: `rgba(0,0,0,0.5)`,
    didOpen: typeWriter
  });
});

// 🎞 Slideshow logic
const slideshow = document.getElementById('slideshow');
const images = [
  'images/photo1.jpg',
  'images/photo2.jpg',
  'images/photo3.jpg',
  'images/photo4.jpg',
  'images/photo5.jpg',
  'images/photo6.jpg',
  'images/photo7.jpg',
  'images/photo8.jpg'
];

let slideIndex = 0;
setInterval(() => {
  slideIndex = (slideIndex + 1) % images.length;
  slideshow.src = images[slideIndex];
}, 2500); // Change every 2.5 seconds
