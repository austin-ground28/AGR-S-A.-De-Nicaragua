import React from "react";

const artistas = [
  "Austin Ground","I S A B E L","Tom Lion","IZA","DJ Lydia","Mark Muller","Ale Basser","y más"
];

const releasesSemana = [
  { titulo: "Close Friends", artista: "Austin Ground" },
  { titulo: "Ponte Risky", artista: "IZA" },
  { titulo: "ES LA KILLA", artista: "Tom Lion" }
];

const proximos = [
  { titulo: "Austin Ground Haters Club V.1", artista: "Austin Ground" }
];

export default function App() {
  return (
    <div style={{background:"black",color:"white",minHeight:"100vh",fontFamily:"sans-serif"}}>

      <section style={{textAlign:"center",padding:"120px 20px"}}>
        <h1 style={{fontSize:"60px"}}>ÚNETE A NOSOTROS</h1>
        <p style={{opacity:.6}}>Electrónica, R&B, Latin Pop</p>
      </section>

      <section style={{textAlign:"center",padding:"60px"}}>
        <h2>Lanzamientos de la semana</h2>
        {releasesSemana.map((r,i)=>(
          <div key={i} style={{margin:"20px auto",maxWidth:"400px",border:"1px solid #333",padding:"20px"}}>
            <p style={{opacity:.5}}>{r.artista}</p>
            <h3>{r.titulo}</h3>
          </div>
        ))}
      </section>

      <section style={{textAlign:"center",padding:"60px"}}>
        <h2>Próximos lanzamientos</h2>
        {proximos.map((r,i)=>(
          <div key={i} style={{margin:"20px auto",maxWidth:"400px",border:"1px solid #333",padding:"20px"}}>
            <p style={{opacity:.5}}>{r.artista}</p>
            <h3>{r.titulo}</h3>
            <p style={{opacity:.4}}>PRÓXIMAMENTE</p>
          </div>
        ))}
      </section>

      <section style={{textAlign:"center",padding:"60px"}}>
        <h2>Roster</h2>
        <div style={{maxWidth:"600px",margin:"auto"}}>
          {artistas.map((a,i)=>(
            <div key={i} style={{border:"1px solid #333",margin:"10px",padding:"10px"}}>
              {a}
            </div>
          ))}
        </div>
      </section>

      <section style={{textAlign:"center",padding:"60px"}}>
        <h2>Newsletter</h2>
        <input placeholder="Tu email" style={{padding:"10px"}}/>
        <button style={{padding:"10px",marginLeft:"10px"}}>Suscribirse</button>
      </section>

      <section style={{textAlign:"center",padding:"60px"}}>
        <h2>Enviar Demo</h2>
        <input placeholder="Nombre" /><br/>
        <input placeholder="Correo" /><br/>
        <input placeholder="País" /><br/>
        <input placeholder="Link (Drive/Dropbox/SoundCloud)" /><br/>
        <textarea placeholder="Por qué quieres ser parte"></textarea><br/>
        <button>Enviar</button>
      </section>

      <section style={{textAlign:"center",padding:"60px"}}>
        <p style={{fontSize:"24px"}}>
          “Si crees en tu sonido, este es tu momento. Envía tu demo.”
        </p>
        <p style={{opacity:.5}}>— Austin Ground</p>
      </section>

    </div>
  );
}