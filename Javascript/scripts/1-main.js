const buttonA = document.querySelector('#buttonA')
const heading =  document.querySelector('#heading_A')

buttonA.onclick = () => {
    const name = prompt('What is your name');
    alert (`hello ${name}, nice to see you`);
    heading.textContent = `welcome ${name}`;
}
