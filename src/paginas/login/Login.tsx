import { ChangeEvent, useState, useEffect } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';
import { login } from '../../services/Service';
import UserLogin from '../../model/UserLogin';
import "./Login.css";

function Login() {
    let history = useHistory()
    const dispatch = useDispatch()
    const [token, setToken] = useState("")

    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        usuario: '',
        senha: '',
        token: ''
    })

    useEffect(() => {
        if (token !== '') {
            dispatch(addToken(token))
            history.push('/home')
        }
    }, [token])

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        try {
            await login(`/usuarios/logar`, userLogin, setToken)
            toast.success('Usuário logado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })

        } catch (error) {
            toast.error('Dados do usuário inconsistentes. Erro ao logar', {
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
        /*<Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>

                    <form onSubmit={ onSubmit }>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>
                            Entrar
                        </Typography>

                        <TextField value={ userLogin.usuario } onChange={ (e: ChangeEvent<HTMLInputElement>) => updatedModel(e) } id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={ userLogin.senha } onChange={ (e: ChangeEvent<HTMLInputElement>) => updatedModel(e) } id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary'>
                                Logar
                            </Button>
                        </Box>
                    </form>
                    
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastro'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>
                                Cadastre-se
                            </Typography>
                        </Link>
                    </Box>

                </Box>
            </Grid>
            <Grid xs={6} className="imagem">
            </Grid>
        </Grid>*/<Grid container className="background">
            <Grid item xs={12}>

                <Box display="flex" justifyContent="center" alignItems="center" >
                    <Box className="card" width={340} height="50vh" borderRadius={5}
                        marginTop={12} display="flex" justifyContent="center" alignItems="center">
                        <Box>




                            <form className='form' onSubmit={onSubmit}>
                                <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className=' form-title'>
                                    Entrar
                                </Typography>

                                <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' className='form-input, form-title' fullWidth />
                                <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' className=' form-title' fullWidth />



                                <Box marginTop={2} textAlign='center'>
                                    <Button type='submit' variant='contained' color='primary'>
                                        Logar
                                    </Button>
                                </Box>

                            </form>
                            <Box display='flex' justifyContent='center' marginTop={2}>
                                <Box marginRight={1}>
                                    <Typography variant='subtitle1' className='form-title' gutterBottom align='center'>Não tem uma conta?</Typography>
                                </Box>
                                <Link to='/cadastro'>
                                    <Typography variant='subtitle1' gutterBottom align='center' className='texto2'>
                                        Cadastre-se
                                    </Typography>
                                </Link>


                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Grid>
        </Grid>
    )
}

export default Login