import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Button, Box, TextField, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { cadastroUsuario } from '../../services/Service';
import User from '../../model/User';
import './CadastroUsuario.css';


function CadastroUsuario() {
    let history = useHistory();

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id !== 0) {
            history.push("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (confirmarSenha === user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            toast.success('Usuario cadastrado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })

        } else {
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={12} className="background">

                <Box padding={0} >

                    <form onSubmit={onSubmit}>
                        <Box display="flex" justifyContent="center" alignItems="center" >

                            <Box className="card" width={500} height="50vh" borderRadius={5}

                                marginTop={12} display="flex" justifyContent="center" alignItems="center">

                                <Grid><Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='t1'>
                                    Cadastrar
                                </Typography>
                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center" className='t1'
                                >
                                    <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' className='t1' fullWidth />
                                    <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' className='t1' fullWidth />
                                    <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' className='t1' fullWidth />
                                    <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' className='t1' fullWidth />

                                    <Box marginTop={2} textAlign='center'>
                                        <Link to='/login' className="text-decorator-none">
                                            <Button variant='contained' color='secondary' className="btnCancelar">
                                                Cancelar
                                            </Button>
                                        </Link>
                                        <Button type="submit" variant='contained' color='primary'>
                                            Cadastrar
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                </Box>

            </form>
        </Box>
            </Grid >
        </Grid >
    )
}

export default CadastroUsuario