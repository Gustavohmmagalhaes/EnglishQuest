import './LoginPage.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LoginPage(){
    const navigate = useNavigate();
    const [formDados, setFormDados] = useState({
        email: '',
        senha: '',
    });

    const atualizaEstado = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value}= e.target;
        setFormDados ( prevState =>({
            ...prevState,
            [name]:value
        }));
    };

    const envioDeDados = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const apiUrl = 'http://localhost:3000/users';
        try{
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Erro ao buscar usuários: ${response.status}`);
            }
            const usuarios = await response.json();
            const usuarioAutenticado = usuarios.find(
                (u: any) => u.email === formDados.email && u.senha === formDados.senha
            );
            if(usuarioAutenticado){
                
                navigate('/home'); 
                

            } else {
                alert("Email ou senha inválidos. Tente novamente.");
            }
        }catch (error) {
            console.error("Erro na requisição de login:", error);
            alert("Erro de conexão. Verifique se o JSON Server está ligado e a porta está correta.");
        }
    }

    return(
        <div className='login-page'>
            <div className='login-container'>
                <div className='inside-contaner'>
                    <div className='header-login'>Faça login </div>
                    <div className='body-login'>
                        <form onSubmit={envioDeDados} className='formulario-login'>
                            <div className='campo-form'>
                                <label htmlFor="email">E-mail:</label>
                                <input type="email" id='email' name='email' placeholder="Insira seu endereço de e-mail" value={formDados.email} 
                                    onChange={atualizaEstado} required/>
                            </div>
                            <div className='campo-form'>
                                <label htmlFor='senha'>Senha:</label>
                                <input type='password' id='senha' name='senha' placeholder="Insira uma senha" value={formDados.senha}
                                    onChange={atualizaEstado} required/>
                            </div>
                            <Link to="/changePassword" className="link-secundario">Esqueceu a senha?</Link>
                            <button type="submit" className="botao-principal">Entrar</button>
                        </form> 
                        <div className="divisor-ou">
                            <div className="linha"></div>
                            <span className="texto-ou">Ou</span>
                            <div className="linha"></div>
                        </div>
                        <div className='login-social'>
                            <button>Google</button>
                            <button>Facebook</button>
                        </div>
                    </div>
                    <Link to="/register" className='footer-login'>Não tem uma conta? Cadastre-se </Link>
                </div>
            </div>
        </div>
    )
}