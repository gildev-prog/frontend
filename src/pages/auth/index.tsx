
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';
import api from '../../services/api';
import './index.css';

const Login: React.FC = () => {
  const history = useHistory();

  const [loading, setloading] = useState(false);
  const [ismouted, setismouted] = useState(false);
  const [userdata, setuserdata] = useState(localStorage.getItem("user") || '');
  const [mail, setmail] = useState('admin@mail.com');
  const [password, setpassword] = useState('123456');

  useEffect(() => {
    if (!ismouted) {
      if (userdata !== '') {
        history.push('/home')
      }

      setismouted(true)
    }
  }, [ismouted]);

  // useEffect(() => {
  //     if (userdata !== '') {
  //       // history.push('/home')
  //       return <Redirect to="/home"/>
  //     }

  // }, [userdata]);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (mail === "" || password === "") {
      alert("Preencha Todos os campos!")
    } else {
      // console.log({ mail, password })
      setloading(true);

      let data = {
        mail: mail,
        password: password
      };

      api.post('/sessions', data).then(response => {
        console.log("response", response);
        let token = response.data.token;
        let user = response.data.user;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

      }).catch(error => {
        console.log("error", error)
        alert(error.response.data.message)
      });



      setTimeout(() => {
        setloading(false);
      }, 2000);

    }
  }

  if (userdata !== '') {
    return <Redirect to="/home" />
  } else {

    return (
      <div className="container">
        <div className="titlelogin">
          <h5>Granistone</h5>
        </div>
        <div className="spancolordiv" />

        <div className="cardlogin">
          <form className="formlogin" onSubmit={handleSubmit}>
            <h5>Realize Seu Acesso</h5>
            <input className="inputlogin" type="mail" value={mail} placeholder="Digite seu e-mail" autoFocus={true} onChange={e => setmail(e.target.value)} />
            <input className="inputlogin" type="password" value={password} placeholder="Sua Senha Secreta" onChange={e => setpassword(e.target.value)} />

            <button type="submit" className="buttonlogin" >{loading ? 'Carregando...' : 'Acessar'}</button>
          </form>

        </div>

      </div>
    );

  }


}

export default Login;