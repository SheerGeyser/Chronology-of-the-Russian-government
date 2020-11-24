import { useState } from 'react';
import { Card } from './components/card'

import './style.scss'

import rusImpireLogo from './img/ruImpire.png'
import ussrLogo from './img/ussr.png'
import rusLogo from './img/ruissian.png'

function App() {

  const [card, setCard] = useState([
    { name: 'Russian Empire', logoSrc: rusImpireLogo, bg: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 33%, rgba(246,233,132,1) 33%, rgba(245,231,121,1) 66%, rgba(19,23,33,1) 66%, rgba(19,23,33,1) 100%)' },
    { name: 'USSR', logoSrc: ussrLogo, bg: '#e15f41' },
    { name: 'Russian Federation', logoSrc: rusLogo, bg: 'linear-gradient(90deg, rgba(225,95,65,1) 0%, rgba(225,95,65,1) 33%, rgba(84,109,229,1) 33%, rgba(84,109,229,1) 66%, rgba(255,255,255,1) 66%, rgba(255,255,255,1) 100%)' }])


  return (
    <section className='mainSection'>
      <div className='list-wrapper'>
        {card.map(item => <Card logoSrc={item.logoSrc} name={item.name} bg={item.bg} />)}
      </div>
    </section>
  );
}

export default App;
