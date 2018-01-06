var select = document.querySelector('select');
var para = document.querySelector('p');
var head = document.querySelector('h1');

select.addEventListener('change', setWeather);

head.textContent= 'Well dont stand around all day! Pick one!';

function setWeather() {
  var choice = select.value;

  if (choice === 'sunny') {
    head.textContent = 'Well Thats Fucking Great! eh?';
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    head.textContent = 'Well Thats just Fucking Great! eh?';
    para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    head.textContent = 'Oh, Thats Fucking Great! eh?';
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    head.textContent = 'Shite, thats Fucking Great! eh?';
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    head.textContent = 'Well Pick something why don\'t ya?';
    para.textContent = '';
  }
}

function addSeven(num){
  var temp = num + 7;
  return temp;
}

function multi(num, num2){
  var temp = num * num2;
  return temp;
}
