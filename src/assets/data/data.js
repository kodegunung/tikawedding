export const data = {
  bride: {
    L: {
      id: 1,
      name: 'Swastika Dwi Rahmani, S.Pd',
      child: 'Putri dari',
      father: 'Drs. Sujiman',
      mother: 'Sri Wirasti, S.Pd',
      address: 'Kadilangu, Baki, Sukoharjo',
      image: './src/assets/images/cewe.png',
    },
    P: {
      id: 2,
      name: 'Aan Nurdianto, S.Pd',
      child: 'Putra dari',
      father: 'Suyanto',
      mother: 'Dwi Supriyati',
      address: 'Tambakreja, Cilacap Selatan, Cilacap',
      image: './src/assets/images/cowo.png',
    },

    couple: './src/assets/images/couple.jpg',
  },

  time: {
    marriage: {
      year: '2025',
      month: 'September',
      date: '6',
      day: 'Sabtu',
      hours: {
        start: '08.00',
        finish: 'Selesai',
      },
    },
    reception: {
      year: '2025',
      month: 'September',
      date: '6',
      day: 'Sabtu',
      hours: {
        start: '09.00',
        finish: 'Selesai',
      },
    },
    address:
      'Gedung Serbaguna Masjid Raya Fatimah, Jayengan, Kec. Serengan, Kota Surakarta',
  },

  link: {
    calendar: 'https://calendar.app.google/tqGA5SKeGCSCFLf77',
  },

  audio: './src/assets/audio/wedding.mp3',

  api: 'https://script.google.com/macros/s/AKfycbzm2uH51f6NSI2WWW5TJ5w3dxfmPh9wqtKLOQhqFZSp8V31GfqML0FZh00qcMsNqp8Yvw/exec',

  navbar: [
    {
      id: 1,
      teks: 'Home',
      icon: 'bx bxs-home-heart',
      path: '#home',
    },
    {
      id: 2,
      teks: 'Mempelai',
      icon: 'bx bxs-group',
      path: '#bride',
    },
    {
      id: 3,
      teks: 'Tanggal',
      icon: 'bx bxs-calendar-check',
      path: '#time',
    },
    {
      id: 4,
      teks: 'Ucapan',
      icon: 'bx bxs-message-rounded-dots',
      path: '#wishas',
    },
  ],
};
