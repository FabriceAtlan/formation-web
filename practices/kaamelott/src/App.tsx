import { useState } from 'react'
import Header from './assets/components/header/header';
import Input from './assets/components/input/input';
import Card from './assets/components/card/card';
import Footer from './assets/components/footer/footer';

const PrimaryLogo = 'https://seeklogo.com/images/K/kaamelott-bw-logo-752E25AA33-seeklogo.com.png';
const ListOfCharacters = [
  {
    id: 0,
    name: 'Arthur',
    arm: 'Excalibur',
    img: '/arthur.webp',
    alt: 'Le roi Arthur'
  },
  {
    id: 1,
    name: 'Leodaguan',
    arm: '...',
    img: '/leodaguan.webp',
    alt: 'Le roi Léodaguan'
  },
  {
    id: 2,
    name: 'Guenièvre',
    arm: '...',
    img: '/guenievre.jpg',
    alt: 'La reine Guenièvre'
  },
  {
    id: 3,
    name: 'Perceval',
    arm: '...',
    img: '/Perceval.webp',
    alt: 'Percevale le Gallois'
  }
];

function App() {
  const [char, setChar] = useState(0);

  return (
    <>
      <Header logoKaamelott={PrimaryLogo} />
      <main>
        <Input/>

        <button onClick={() => {
        }} className='search-wrapper__button'>Coucou</button>

        <section className='section-wrapper'>
          {
            ListOfCharacters.map((el) => {
              console.log(el.id);
              return(
                <Card key={el.id} characters={ListOfCharacters[el.id]}/>  
              )
            })
          }
        </section>
      </main>
      <Footer  logoKaamelott={PrimaryLogo}/>
    </>
  )
}

export default App