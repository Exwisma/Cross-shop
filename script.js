function like(element) {
 
  const currentSrc = element.src.split('/').pop();


  if (currentSrc === 'Heart.svg') {
    element.src = './i (2).webp';
  } else {
    element.src = './Heart.svg';
  }
}



const wrapper = document.createElement('div');
wrapper.classList.add('flex', 'flex-wrap', 'justify-center', 'gap-[40px]', 'p-8');
document.body.append(wrapper);

fetch("./data.json")
  .then(data => data.json())
  .then(data =>
    data.forEach(element => {
      const isma = document.createElement('div');
      isma.classList.add(
        'w-[400px]', 'h-[560px]', 'bg-[#CBCBCB]',
        'pl-[28px]', 'pt-[28px]', 'mt-[40px]',
        'rounded-[28px]', 'flex', 'flex-col', 'justify-between', 'mb-[113px]' , 'border-2', 'border-black', 'border-b-[6px]'
      );

     isma.innerHTML = `
  <div class='  '>
    <div class='relative w-[344px] h-[284px]'>
      <img onclick="like(this)" class=' w-[33px] h-[27px] absolute top-[26px] right-[26px] z-10 ml-[280px]' src='./Heart.svg' alt="heart">
      <img class='absolute z-1 w-[344px] h-[284px] object-cover rounded-[16px]' src="${element.img}" alt="${element.title}">
    </div>
    <h1 class='font-semibold mt-[26px] mb-[8px] text-xl'>${element.title}</h1>
    <p class='font-semibold text-lg'>${element.price}</p>
    <p class='w-[335px] font-medium mt-[14px] text-sm'>${element.descr}</p>
  </div>
  <button class='   border-2 border-black border-b-[9px] mb-[15px] rounded-[28px] text-black w-[344px] h-[74px] bg-[#A5A5A5] flex items-center justify-start text-base font-semibold'>
    <img src="./Cart.svg" alt="cart" class="ml-[21px] mr-[66.5px]"> Add to cart
  </button>
`;

      wrapper.append(isma);
    })
  )
  .catch(error => console.error("Ошибка загрузки данных:", error));

