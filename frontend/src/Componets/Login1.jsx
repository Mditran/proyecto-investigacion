import React, { Component } from 'react'
import { allUsers } from '../Queries/Queries'
import { graphql } from '@apollo/client/react/hoc';
import { Usuario } from './Usuario';





class Login extends Component {



  constructor(props) {
    super(props);

    this.state = {
      _id: props._id,
      identification: props.identification,
      name: props.name,
      surname: props.surname,
      email: props.email,
      password: props.password,
      rol: props.rol,
      state: props.state,
    }

    console.log(props);
    let data = props.data
    console.log('vbe');
    const datos = data.userLogin(this.state.email, this.state.password)
    if (data.loading) {
      return <h2>We are loading the users</h2>
    }
    if (data.users.length === 0) {
      return <h2>Wo hay ningun Usuario</h2>
    }

    this.submitLogin = (event) => {
      event.preventDefault()
      console.log('Llego', this.email);
      console.log('Password', this.password);
      let num = 0;
      

      console.log(datos);
      data.users.map((user) => {
        if (user.email === this.state.email && user.password === this.state.password) {
          num++;
        }
        return <Usuario key={user._id}
          _id={user._id}
          identification={user.identification}
          name={user.name}
          surname={user.surname}
          email={user.email}
          password={user.password}
          rol={user.rol}
          state={user.state}
        />
      })

      if (num === 0) {
        console.log('Usuario o contraseña erroneos');
      }
    }

  }

  render() {

    return (
      <div>
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone" />
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">





                <form onSubmit={this.submitLogin}>

                  <div className="form-outline mb-4">
                    <input type="email" id="form1Example13" className="form-control form-control-lg" value={this.state.email} placeholder='Correo' onChange={(e) => this.setState({ email: e.target.value })} />
                  </div>


                  <div className="form-outline mb-4">
                    <input type="password" id="form1Example23" className="form-control form-control-lg" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} placeholder='Contraseña' />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg btn-block my-2">Iniciar sesion</button>

                  <button type="submit" className="btn btn-primary btn-lg btn-block my-2"><Link className="nav-link" style={{ color: "#FFFFFF" }} exact to="/addUsuario">Registrarme</Link></button>

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
}


export default graphql(allUsers)(Login)