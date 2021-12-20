import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import { userLogin } from '../Queries/Queries';

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Entro al handle  ');
        userLogin(email, password).then((result) => {
            console.log("Funciono");
        }).catch((err) => {
            console.log("Fallas");
        });
    }

    return (
        <div>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone" />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            
                            
                            
                            
                            
                            <form onSubmit={handleSubmit}>

                                <div className="form-outline mb-4">
                                    <input type="email" id="form1Example13" className="form-control form-control-lg"  value={email} placeholder='Correo' onChange={(event) => setEmail(event.target.value)}/>
                                </div>


                                <div className="form-outline mb-4">
                                    <input type="password" id="form1Example23" className="form-control form-control-lg" value={password} placeholder='Contraseña' onChange={(event) => setPassword(event.target.value)}/>
                                </div>
                                <div className="form-outline mb-4">
                                    <button type="submit" className="btn btn-primary btn-lg btn-block my-2">Iniciar sesion</button>
                                </div>
                                <div className="form-outline mb-4">
                                    <button type="submit" className="btn btn-primary btn-lg btn-block my-2"><Link className="nav-link" style={{ color: "#FFFFFF" }} exact to="/addUsuario">Registrarme</Link></button>
                                </div>
                                <div className="divider align-items-center my-2">
                                    <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                </div>
                                <a className="btn btn-primary btn-lg btn-block my-2" style={{ backgroundColor: "#3b5998" }} href="/" role="button">
                                    <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
                                </a>
                                <a className="btn btn-primary btn-lg btn-block my-1" style={{ backgroundColor: "#55acee" }} href="/" role="button">
                                    <i className="fab fa-twitter me-2"></i>Continue with Twitter....</a>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
