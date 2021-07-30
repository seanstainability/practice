const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

addEventListener("load", () => {
  const targetRect = target.getBoundingClientRect();
  console.log(targetRect);
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // top, left보다 transform이 composite만 발생하기 때문에 성능에 더 좋다. 😎
    // horizontal.style.top = `${y}px`;
    // vertical.style.left = `${x}px`;
    horizontal.style.transform = `translateY(${y}px)`;
    vertical.style.transform = `translateX(${x}px)`;
    // target.style.top = `${y}px`;
    // target.style.left = `${x}px`;
    // tag.style.top = `${y}px`;
    // tag.style.left = `${x}px`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`;
    tag.style.transform = `translate(${x + 20}px, ${y + 20}px)`;
    tag.textContent = `${x}px ${y}px`;
  });
});
