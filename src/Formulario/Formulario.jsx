import './Formulario.css'

export function Formulario(){
    return(
        <>
            <section className="container wrapper mt-5">
                <div className="row justify-content-center text-center">
                    <div className="col12">
                        <img src="../../src/assets/logoSura.png" alt="logo de sura" className="img-fluid" />
                        <form action="" className="border rounded p-3">
                            <h2 className='titleContain mb-0'>Iniciar Sesión</h2>
                            <h2 className='lbltitleContain'><span >Sucursal virtual</span></h2>
                            <div class="input-group mb-3 mt-5">
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-vcard"></i></span>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Número de cédula"
                                    id="identificacion"
                                />
                            </div>

                            <div class="input-group mb-3 mt-5">
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-lock"></i></span>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Password"
                                    id="contraseña"
                                />
                            </div>

                            <div className='containerbtn mt-5 mb-3'>
                                <div className='left'><a href="https://login.sura.com/RecoveryPass.aspx?service=clienteseguros" className='linko'>¿Has olvidado tu contraseña?</a></div>
                                <div className='right'><button type="submit" className="btn colorbtn">Ingresar</button></div>
                            </div>
                            
                        </form>
                        
                    </div>
                </div>
            </section> 
        </>
    )
}