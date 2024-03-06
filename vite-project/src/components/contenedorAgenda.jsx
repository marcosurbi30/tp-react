import React from 'react'
import './contenedorAgenda.css';
import avatar from '../assets/images/avatar.png'
import casa from '../assets/images/casa.png'
import email from '../assets/images/email.png'
import telefono from '../assets/images/llamada-telefonica.png'

export const ContenedorAgenda = () => {
  return (
    <>
            <section class="contenedor">
            <div class="contenedor-directorio">
                <div class="formulario-tel">
                    <h3>Contacto</h3>
                    <div class="renglones">
                        <div class="icono-contacto">
                            <img src={avatar} alt="persona" />
                        </div>
                        <div class="datos-sinimg">
                            <span class="datos-llenar">Nombre y Apellido</span>
                            <p>Erin Urbisaglia</p>
                        </div>
                    </div>
                    <div class="renglones">
                        <div class="icono-contacto">
                            <img src={casa} alt="casa" />
                        </div>
                        <div class="datos-sinimg">
                            <span class="datos-llenar">Direccion</span>
                            <p>Av. Stochman 333</p>
                            <span class="datos-llenar">CP</span>
                            <p>4063</p>
                        </div>
                    </div>
                    <div class="renglones">
                        <div class="icono-contacto">
                            <img src={email} alt="email" />
                        </div>

                        <div class="datos-sinimg">
                            <span class="datos-llenar">
                                Email
                            </span>
                            <p>Erin-mu@gmail.com</p>
                        </div>
                    </div>
                    <div class="renglones">
                        <div class="icono-contacto">
                            <img src={telefono} alt="telefono" />
                        </div>
                        <div class="datos-sinimg">
                            <span class="datos-llenar">
                                Numero telefonico
                            </span>
                            <p>+491753554722</p>
                        </div>

                    </div>
                    <h3>Contacto</h3>
                    <div class="renglones">
                        <div class="icono-contacto">
                            <img src={avatar} alt="persona" />
                        </div>
                        <div class="datos-sinimg">
                            <span class="datos-llenar">Nombre y Apellido</span>
                            <p></p>
                        </div>
                    </div>
                    <div class="renglones">
                        <div class="icono-contacto">
                            <img src={casa} alt="direccion" />
                        </div>
                        <div class="datos-sinimg">
                            <span class="datos-llenar">Direccion</span>
                            <p></p>
                            <span class="datos-llenar">CP</span>
                            <p></p>
                        </div>
                    </div>
                    <div class="renglones">
                        <div class="icono-contacto">
                            <img src={email} alt="email" />
                        </div>

                        <div class="datos-sinimg">
                            <span class="datos-llenar">
                                Email
                            </span>
                            <p></p>
                        </div>
                    </div>
                    <div class="renglones">
                        <div class="icono-contacto">
                            <img src={telefono} alt="telefono" />
                        </div>
                        <div class="datos-sinimg">
                            <span class="datos-llenar">
                                Numero telefonico
                            </span>
                            <p></p>
                        </div>

                    </div>
                </div>
            </div>

        </section>
        </>
  )
}
