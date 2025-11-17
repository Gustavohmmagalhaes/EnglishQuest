import "./RegisterPage.css" // O nome do seu arquivo CSS também deve refletir a mudança
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function RegisterPage(){ 
    const navigate = useNavigate();

    const [formDados, setFormDados] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: '',
    });

    const atualizaEstado = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target;
        setFormDados(prevState =>({
            ...prevState,
            [name]:value
        }));
    };
    
    const envioDeDados = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(formDados.senha !== formDados.confirmarSenha){
            alert('As senhas não coincidem!');
            return;
        }

        const usuarioDados = {
            nome: formDados.nome,
            email: formDados.email,
            senha: formDados.senha,
        };
        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuarioDados),
            });

            if(response.ok){
                alert("Cadastro realizado com sucesso! Faça login.");
                navigate('/login');
            }else{
                const errorData = await response.json();
                alert(`Erro ao cadastrar: ${errorData.message || 'Verifique o servidor.'}`);
            }
            
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Erro de conexão. Verifique se o JSON Server está ligado.");
        }


    };
    return(
        // Classes Renomeadas: login-page -> register-page, etc.
        <div className='register-page'> 
            <div className='register-container'>
                
                    {/* Título */}
                    <div className='header-register'>Crie sua conta</div> 
                    <div className='body-register'>
                        <form onSubmit={envioDeDados} className='formulario-register'>
                            
                            {/* CAMPO: Nome Completo */}
                            <div className='campo-form'>
                                <label htmlFor="nome-completo">Nome Completo:</label>
                                <input type="text" id='nome-completo' name='nome' placeholder="Insira seu nome completo" value={formDados.nome}
                                    onChange={atualizaEstado} required/>
                            </div>

                            {/* Campo E-mail */}
                            <div className='campo-form'>
                                <label htmlFor="email">E-mail:</label>
                                <input type="email" id='email' name='email' placeholder="Insira seu endereço de e-mail" value={formDados.email}
                                    onChange={atualizaEstado} required/>
                            </div>

                            {/* Campo Senha */}
                            <div className='campo-form'>
                                <label htmlFor='senha'>Senha:</label>
                                <input type='password' id='senha' name='senha' placeholder="Crie uma senha" value={formDados.senha}
                                    onChange={atualizaEstado} required/>
                            </div>
                            
                            {/* CAMPO: Confirmação de Senha */}
                            <div className='campo-form'>
                                <label htmlFor='confirmar-senha'>Confirmar Senha:</label>
                                <input type='password' id='confirmar-senha' name='confirmarSenha' placeholder="Confirme sua senha" value={formDados.confirmarSenha}
                                    onChange={atualizaEstado} required/>
                            </div>

                            {/* Botão */}
                            <button type="submit" className="botao-principal">Cadastrar</button> 
                        </form> 
                        
                        {/* Divisor "Ou" */}
                        <div className="divisor-ou">
                            <div className="linha"></div>
                            <span className="texto-ou">Ou</span>
                            <div className="linha"></div>
                        </div>
                        
                        {/* Login Social */}
                        <div className='register-social'> 
                            <button>Cadastrar com Google</button>
                            <button>Cadastrar com Facebook</button>
                        </div>
                    </div>
                    
                    {/* Footer com link para Login */}
                    <div className='footer-register'>Já tem uma conta? <Link to="/">Faça login</Link> </div> 
              
            </div>
        </div>
    )
}