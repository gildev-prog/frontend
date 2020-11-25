import React from 'react';
import api from '../../services/api';
import './index.css';


const Usercomponent = () => {

    const [name, setname] = React.useState('');
    const [ismounted, setismouted] = React.useState(false);
    const [mail, setmail] = React.useState('');
    const [age, setage] = React.useState('');
    const [pass, setpass] = React.useState('');
    const [opencreate, setopencreate] = React.useState(false);
    const [Listagemdeusuario, setListagemdeusuario] = React.useState([]);



    React.useEffect(() => {
        if (!ismounted) {
            loaddata();
            setismouted(true)
        }
    }, [ismounted]);

    const loaddata = async () => {
        const response = await api.get('users')
        // console.log(response.data);
        setListagemdeusuario(response.data)
    }



    const onsubmit = async (e: any) => {
        e.preventDefault();
        let data = {
            id_city: 1,
            name,
            mail,
            age,
            pass,
            ismaster: false

        };
        // console.log(data);
        try {
            const response = await api.post('users', data);
            // console.log(response);
            if (!response) {
                alert("Falha ao cadastrar o usuário")
            } else { 
                alert(response.data.message)
                setopencreate(false);
                loaddata();
             }

            if (response.data.error) {
                alert(response.data.error.error)
            }

        } catch (error) {
            // console.log("error", error);


        }
    }

    return (
        <React.Fragment>
            {opencreate ?
                <><button onClick={() => setopencreate(false)}>Voltar</button>

                    <div className="content">
                        <h5>Cadastro de Usuário</h5>
                        <br />
                        <p>Formulário de Cadastro</p>
                        <form className="containerform" onSubmit={onsubmit}>
                            <input
                                name="name"
                                value={name}
                                onChange={e => setname(e.target.value)}
                                placeholder="Digite seu Nome"
                            />

                            <br />

                            <input
                                name="mail"
                                value={mail}
                                onChange={e => setmail(e.target.value)}
                                placeholder="Digite seu Email"
                                required={true}
                            />

                            <br />

                            <input
                                name="age"
                                value={age}
                                onChange={e => setage(e.target.value)}
                                placeholder="Digite sua Idade"
                            />

                            <br />

                            <input
                                type="password"
                                name="pass"
                                value={pass}
                                onChange={e => setpass(e.target.value)}
                                placeholder="Digite sua Senha"
                            />

                            <br />

                            <button type="submit" >Cadastrar</button>
                        </form>
                    </div></>
                :
                <>
                    <button onClick={() => setopencreate(true)}>Abrir Form</button>
                    <p className=" listagem">Listagem</p>


                    <table className="Tabelas" style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th style={{ background: 'aqua' }}>Nome</th>
                                <th style={{ background: 'aqua' }}>Email</th>
                                <th style={{ background: 'aqua' }}>Idade</th>
                            </tr>

                        </thead>
                        <tbody>

                            {Listagemdeusuario.map((item: any, index: number) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.mail}</td>
                                        <td>{item.age}</td>

                                    </tr>

                                );
                                
                        })}


                        </tbody>



                    </table>

                </>
            }
        </React.Fragment>
    );

}

export default Usercomponent;