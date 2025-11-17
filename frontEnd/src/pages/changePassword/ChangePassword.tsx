import './ChangePassword.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function ChangePassword(){
    const navigate = useNavigate();

    // 1. ESTADO: Adicionado 'senhaAtual' e 'novaSenha'
    const [formDados, setFormDados] = useState({
        email: '',
        senhaAtual: '',
        novaSenha: '', 
    });

    // Função auxiliar para atualizar o estado
    const atualizaEstado = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value}= e.target;
        setFormDados ( prevState =>({
            ...prevState,
            [name]:value
        }));
    };

    // 2. FUNÇÃO PRINCIPAL: Lógica de Troca de Senha (Autentica e Atualiza)
    const envioDeDados = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        // Verifica se a nova senha é diferente da atual (uma validação comum)
        if (formDados.senhaAtual === formDados.novaSenha) {
            alert('A nova senha deve ser diferente da senha atual.');
            return;
        }

        // ⚠️ ATENÇÃO: Ajuste a porta se o seu JSON Server não estiver na 3000
        const apiUrl = 'http://localhost:3000/users';

        try{
            // PASSO 1: Buscar o usuário para autenticar a senha atual
            const response = await fetch(`${apiUrl}?email=${formDados.email}`);
            
            if (!response.ok) {
                throw new Error(`Erro ao buscar usuário: ${response.status}`);
            }

            const usuariosEncontrados = await response.json();
            
            // Verifica se o usuário foi encontrado
            if (usuariosEncontrados.length === 0) {
                alert("Email não encontrado.");
                return;
            }
            
            const usuario = usuariosEncontrados[0];

            // PASSO 2: Validar a Senha Atual
            if(usuario.senha !== formDados.senhaAtual){
                alert("A senha atual fornecida está incorreta.");
                return;
            }
            
            // PASSO 3: Atualizar a senha do usuário
            const usuarioID = usuario.id; 
            const novaSenhaDados = { 
                ...usuario, // Mantém todos os outros dados
                senha: formDados.novaSenha // Atualiza apenas a senha
            };

            const updateResponse = await fetch(`${apiUrl}/${usuarioID}`, {
                method: 'PUT', // PUT para substituir todo o recurso
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novaSenhaDados),
            });
            
            if(updateResponse.ok){
                alert("Sua senha foi atualizada com sucesso! Por favor, faça login com a nova senha.");
                navigate('/'); // Redireciona para o login
            } else {
                 throw new Error(`Erro ao atualizar senha: ${updateResponse.status}`);
            }

        }catch (error) {
            console.error("Erro na requisição:", error);
            alert("Erro ao tentar mudar a senha. Verifique a conexão com o servidor.");
        }
    }

    return(
        // Classes de CSS renomeadas para refletir a mudança (de 'login' para 'password-change')
        <div className='password-change-page'> 
            <div className='password-change-container'>
                <div className='inside-container'>
                    {/* Título alterado */}
                    <div className='header-change'>Alterar Senha</div> 
                    <div className='body-change'>
                        <form onSubmit={envioDeDados} className='formulario-change'>
                            
                            {/* CAMPO: E-mail */}
                            <div className='campo-form'>
                                <label htmlFor="email">E-mail:</label>
                                <input type="email" id='email' name='email' placeholder="Insira seu endereço de e-mail" value={formDados.email} 
                                    onChange={atualizaEstado} required/>
                            </div>
                            
                            {/* CAMPO: Senha Atual */}
                            <div className='campo-form'>
                                <label htmlFor='senhaAtual'>Senha Atual:</label>
                                <input type='password' id='senhaAtual' name='senhaAtual' placeholder="Insira sua senha atual" value={formDados.senhaAtual}
                                    onChange={atualizaEstado} required/>
                            </div>
                            
                            {/* CAMPO: Nova Senha */}
                            <div className='campo-form'>
                                <label htmlFor='novaSenha'>Nova Senha:</label>
                                <input type='password' id='novaSenha' name='novaSenha' placeholder="Insira sua nova senha" value={formDados.novaSenha}
                                    onChange={atualizaEstado} required/>
                            </div>
                            
                            {/* Botão */}
                            <button type="submit" className="botao-principal">Salvar Nova Senha</button>
                        </form> 
                        
                        {/* Removido o divisor 'Ou' e login social, pois são irrelevantes para a troca de senha. */}
                    </div>
                    
                    {/* Link para voltar ao Login */}
                    <div className='footer-change'>
                        <Link to="/">Voltar ao Login</Link> 
                    </div>
                </div>
            </div>
        </div>
    )
}