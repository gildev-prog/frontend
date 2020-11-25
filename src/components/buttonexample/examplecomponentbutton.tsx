import React from 'react';
import './examplecomponentbutton';

type ButtonTypeProps = {
    titulo: string
  }

// const Esseeumbotao: React.FC = (props) => { abaixo esta desestruturado
const Esseeumbotao = ({titulo}: ButtonTypeProps) => {
return <button className="buttonexample">{titulo}</button>;
}

export default Esseeumbotao;