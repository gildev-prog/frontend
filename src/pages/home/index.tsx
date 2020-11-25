import React from 'react';


const Home: React.FC = () => {
  const [text, settext] = React.useState('');
  const [loading, setloading] = React.useState(false);

  React.useEffect(()=>{
    if(text.length >0){
      setloading(true)
    }
setTimeout(()=>{
  setloading(false)
}, 1000)    
  },[text]);
  return (
    <>
      <p>Home</p>
      <input name="testo01" placeholder="digite um texto" value={text} 
      onChange={e =>settext(e.target.value)}/>
      <p>{loading ? 'carregando....' : ''} {text}</p>
      </>
  );
}

export default Home;