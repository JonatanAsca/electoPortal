import "./Home.css"

export function Home({user}) {

  return (
    
    <body>
         <h1>ElectoPortal</h1>
        <h2>Bienvenido, {user}</h2> 
        <div class="navigation">
            
            <a href="Inicio.jsx">Inicio</a>
            <a href="AgregarVotantes.jsx">Agregar Votantes</a>
            <a href="AgregarBarrios.jsx">Agregar Barrios</a>
            <a href="CerrarSesion.jsx">Cerrar Sesion</a>
        </div>

        <div class="footer">
            <p>Derechos de autor © 2024 Tienda en línea. Todos los derechos reservados.</p>
        </div>

        <img src="Desktop/Imagen1.jpg" alt="logo" />
    </body>
     
  )
}


