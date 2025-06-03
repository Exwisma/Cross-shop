function like(element) {
  const currentSrc = element.src.split('/').pop();
  element.src = currentSrc === 'Heart.svg' ? './i (2).webp' : './Heart.svg';
}

const wrapper = document.createElement('div');
wrapper.classList.add('flex', 'flex-wrap', 'justify-center', 'gap-[40px]', 'p-8');
document.body.append(wrapper);

const colors = [
   '#5CA7FF', '#D083FF', '#FF99E2', '#5CFF62',
  '#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9', '#C5CAE9',
  '#BBDEFB', '#B3E5FC', '#B2EBF2', '#B2DFDB', '#C8E6C9',
  '#DCEDC8', '#F0F4C3', '#FFF9C4', '#FFECB3', '#FFE0B2',
  '#FFCCBC', '#D7CCC8', '#CFD8DC', '#F5F5F5', '#E0E0E0',
  '#B0BEC5', '#90CAF9', '#80DEEA', '#A5D6A7', '#FFAB91',
  '#F48FB1', '#CE93D8', '#B39DDB', '#9FA8DA', '#81D4FA'
];

fetch("./data.json")
  .then(data => data.json())
  .then(data =>
    data.forEach((element, index) => {
      const isma = document.createElement('div');

``
      const color = colors[Math.round(Math.random() * 34)];
      isma.style.backgroundColor = color;

      isma.classList.add(
        'w-[400px]', 'h-[560px]',
        'pl-[28px]', 'pt-[28px]', 'mt-[10px]',
        'rounded-[28px]', 'flex', 'flex-col',
        'justify-between', 'mb-[10px]',
        'border-2', 'border-black', 'border-b-[6px]'
      );

      isma.innerHTML = `
        <div>
          <div class='relative w-[344px] h-[284px]'>
            <img onclick="like(this)" class='w-[33px] h-[27px] absolute top-[26px] right-[26px] z-10 ml-[280px]' src='./Heart.svg' alt="heart">
            <img class='absolute z-1 w-[344px] h-[284px] object-cover rounded-[16px]' src="${element.img}" alt="${element.title}">
          </div>
          <h1 class='font-semibold mt-[26px] mb-[8px] text-xl'>${element.title}</h1>
          <p class='font-semibold text-lg'>${element.price}</p>
          <p class='w-[335px] font-medium mt-[14px] text-sm'>${element.descr}</p>
        </div>
        <button class=' custom-btn border-2 border-black border-b-[9px] mb-[15px] rounded-[28px] text-black w-[344px] h-[74px] bg-[#A5A5A5] flex items-center justify-start text-base font-semibold'>
          <img src="./Cart.svg" alt="cart" class="ml-[21px] mr-[66.5px]"> Add to cart
        </button>
      `;


      const button = isma.querySelector('.custom-btn');
      const buttonColor = colors[Math.floor(Math.random() * colors.length)];
      button.style.backgroundColor = buttonColor;


      wrapper.append(isma);
    })
  )
  .catch(error => console.error("Ошибка загрузки данных:", error));
