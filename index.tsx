import React, { useState, useEffect } from 'react'
import { Paper, Typography, Container, TextField, Button, Box, Checkbox, Divider } from '@material-ui/core'
import { makeStyles, ThemeProvider, createTheme, createStyles } from '@material-ui/core/styles'
import { Theme as AugmentedTheme } from '@material-ui/core/styles'
import { deepPurple, lightBlue } from '@material-ui/core/colors'
import { ISignUp } from './Interfaces/ISignUp'
import '@fontsource/roboto'
import { Link, NavLink } from 'react-router-dom'

const theme = createTheme({
    palette: {
        primary: {
            main: lightBlue[500],
        },
        secondary: {
            main: deepPurple[400]
        }
    }
});

const useStyles = makeStyles((theme: AugmentedTheme) => createStyles({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.info.main,
        padding: '40px',
    }, checked: {},
    paper: {
        height: '75vh',
        width: '30vw',
    },
    outterBox: {
        marginTop: '4%',
        display: 'flex',
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    box: {
        margin: '20px'
    },
    nameDiv: {
        display: 'flex',
        margin: theme.spacing(2),
    },
    nameField: {
        paddingRight: '18px',
        width: '45%'
    },
    inputField: {
        paddingRight: '18px',
        width: '100%'
    },
    btnDiv: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '15.5px',
    },
    btn: {
        color: 'white',
        width: '10vw'
    },
    upperBox1: {
        padding: '10px 25px',
    },
    box1UpperText: {
        marginTop: '10px',
        textAlign: 'left',
        fontWeight: 'bold'
    },
    box1LowerText: {
        marginTop: '3px',
        color: 'grey',
        textAlign: 'left',
    },
    divCheckBox: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '2.35px',
    },
    checkBoxText: {
        fontSize: '13px',
    },
    checkBox: {
        transform: 'scale(00.77)',
    },
    divLink: {
        marginTop: '45px'
    },
    link: {
        textDecoration: 'none',
        color: '#00b0ff',
        '&:hover': {
            color: '#007bb2',
            textDecoration: 'underline'
        },
    },
    navlink: {
        textDecoration: 'none',
        color: 'white'
    }

}))

const SignUp: React.FC<ISignUp> = (props) => {
    const { firstName, lastName, email, password, confirmPassword } = props;

    const [formField, setFormField] = useState({
        firstName: '', lastName: '', email: '', password: '', confirmPassword: ''
    })
    const [btnState, setBtnState] = useState<boolean>(true)
    // const [signUp, setSignUp] = useState<boolean>(false);
    // const [firstName, setFirstName] = useState<string>('');
    // const [lastName, setLastName] = useState<string>('');
    // const [email, setEmail] = useState<string>('');
    // const [password, setPassword] = useState<string>('');
    // const [confirmPassword, setConfirmPassword] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        // if (email !== '' && password !== '' && firstName !== '' &&
        //     lastName !== '' && confirmPassword !== '') {
        //     setBtnState(false);
        // }
        // // if (email === '' || password === '' || firstName === '' ||
        // //     lastName === '' || confirmPassword === '') {
        // //     setBtnState(true);
        // // }

        //     if (e.target.name === 'firstName') {
        //         setFirstName(e.target.value);
        //     }
        //     if (e.target.name === "email") {
        //         setEmail(e.target.value)
        //     }
        //     if (e.target.name === "password") {
        //         setPassword(e.target.value)
        //     }
        //     if (e.target.name === 'lastName') {
        //         setLastName(e.target.value)
        //     }
        //     if (e.target.name === 'confirmPassword') {
        //         setConfirmPassword(e.target.value)
        //     }
        const targetValue = e.target.value;
        const targetName = e.target.name;
        setFormField({
            ...formField,
            [targetName]: targetValue
        })
    }
    const submit = () => {
        if (formField.firstName.length <= 3 && formField.lastName.length <= 3) {
            alert("FirstName And LastName Should Be More Than 3 Characters")
        }
        if (formField.email === "") {
            alert("Email is required");
        } else {
            let rejex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
            if (rejex.test(formField.email) === false) {
                alert("Enter a valid Email");
            }
        }
        if (formField.password === "") {
            alert("Enter a password");
            return false;
        } else {
            let min = 6;
            let max = 20;
            let rejex = /^[a-zA-Z0-9]{6,20}$/;
            if (formField.password.length < min || formField.password.length > max) {
                alert("Password must be between 6 to 20 character");
                return false;
            }
            if (!rejex.test(formField.password)) {
                alert("Password should not have symbols");
                return false;
            }
        }
        if (formField.password !== formField.confirmPassword) {
            alert('Password Miss Match!')
        }
    }
    // console.log(`FirstName: ${firstName}`, `LastName: ${lastName}`, `Email: ${email}`, `Password: ${password}`, `ConfirmPassword: ${confirmPassword}`)

    const classes = useStyles();
    return (
        <div style={{ backgroundColor: 'black' }}>
            <Container className={classes.root}>
                <ThemeProvider theme={theme}>
                    <Box className={classes.outterBox}>
                        <Paper className={classes.paper}>
                            <Box className={classes.upperBox1}>
                                <Typography className={classes.box1UpperText} variant='h5'>Sign Up</Typography>
                                <Typography className={classes.box1LowerText} variant='subtitle2'>Please Fill In This Form To Create An Account</Typography>
                            </Box>
                            <Divider />
                            <Box className={classes.box}>
                                <form>
                                    <div className={classes.nameDiv}>
                                        <TextField
                                            autoComplete='off'
                                            label='First Name'
                                            className={classes.nameField}
                                            size="small"
                                            name="firstName"
                                            type="text"
                                            variant="outlined"
                                            value={formField.firstName}
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            autoComplete='off'
                                            label='Last Name'
                                            className={classes.nameField}
                                            size="small"
                                            name="lastName"
                                            type="text"
                                            variant="outlined"
                                            value={formField.lastName}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className={classes.nameDiv}>
                                        <TextField
                                            label='Email'
                                            autoComplete='off'
                                            className={classes.inputField}
                                            size="small"
                                            name="email"
                                            type="text"
                                            variant="outlined"
                                            value={formField.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className={classes.nameDiv}>
                                        <TextField
                                            label='Password'
                                            autoComplete='off'
                                            className={classes.inputField}
                                            size="small"
                                            name="password"
                                            type="password"
                                            variant="outlined"
                                            value={formField.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className={classes.nameDiv}>
                                        <TextField
                                            label='Confirm Password'
                                            autoComplete='off'
                                            className={classes.inputField}
                                            size="small"
                                            name="confirmPassword"
                                            type="password"
                                            variant="outlined"
                                            value={formField.confirmPassword}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className={classes.divCheckBox}>
                                        <Checkbox className={classes.checkBox} color='primary' />
                                        <Typography className={classes.checkBoxText} >
                                            I accept the
                                            <Link className={classes.link} to='privacyPolicy'>
                                                Terms of Use</Link> &
                                                 <Link className={classes.link} to='privacyPolicy'>
                                                Privacy Policy
                                                     </Link>
                                        </Typography>
                                    </div>
                                    <div className={classes.btnDiv}> <NavLink className={classes.navlink} isActive={()=>true} to='/signin'>
                                        <Button variant="contained" onClick={submit}
                                            className={classes.btn} color='primary'>
                                            Sign Up
                                        </Button></NavLink></div>
                                </form>
                                <div className={classes.divLink}>
                                    <Typography>Already have an account? <Link className={classes.link} to='/signin'>LogIn Here</Link></Typography>
                                </div>
                            </Box>
                        </Paper>
                    </Box>
                </ThemeProvider>
            </Container>
        </div>
    )
}
export default SignUp


import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SignIn from '../src/Components/SignIn'
import SignUp from '../src/Components/SignUp'
import DashBoard from '../src/Components/DashBoard'
import PrivacyPolicy from './Components/PrivacyPolicy'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
    <Route exact path= '/' component= {SignUp} />
    <Route exact path= '/signin' component= {SignIn} />
    <Route exact path= '/dashBoard' component= {DashBoard} />
    <Route exact path= '/privacyPolicy' component= {PrivacyPolicy} />
    </Switch>
    </BrowserRouter> 
    </div>
  );
}

export default App;
