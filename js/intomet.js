const sliderValue = document.getElementById('sldr');
const sliderValReporter = document.getElementById('invaltarget');
const output = document.getElementById('outputspan');
const conversion = d3.scaleLinear()
  .domain([0,150])
  .range([0,3.81]);

let updateSliderValue = () => {
  sliderValReporter.innerHTML = sliderValue.value + ' inches';
  output.innerHTML = Math.round(conversion(sliderValue.value)*10000)/10000 + ' meters'; 
}

sliderValue.addEventListener('input', updateSliderValue);
