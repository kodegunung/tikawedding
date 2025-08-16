import { data } from '../assets/data/data.js';

export const time = () => {
  const timeContainer = document.querySelector('.time');
  const [marriageDiv, receptionDiv, locationDiv] =
    timeContainer.querySelectorAll('div div');

  const createTimeListItem = (title, details) =>
    `<h3>${title}</h3>
         <p>${details.day}, ${details.date} ${details.month} ${details.year} <br> 
         Pukul ${details.hours.start} WIB sd ${details.hours.finish}</p>`;

  const createLocation = (title, location) =>
    `<h3>${title}</h3>
         <p>${location}</p>`;

  marriageDiv.innerHTML = createTimeListItem('Akad Nikah', data.time.marriage);
  receptionDiv.innerHTML = createTimeListItem(
    "Walimatul 'Ursyi",
    data.time.reception
  );
  locationDiv.innerHTML = createLocation('Lokasi Pernikahan', data.time.address);
};
