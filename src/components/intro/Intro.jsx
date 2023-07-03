import "./intro.css"
import mra from "../../img/imgbin-cleaning-cleaner-maid-service-house-home-maid-woman-in-blue-apron-4aBHxdrcW78NmjFNeJwmxBMV9 2.png"

const Intro = () => {
  return (
    <div  className="i">
         <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Bonjour et bienvenue </h2>
                <h1 className="i-name">chez Pur Star</h1>
                <div className="i-title">
                  <div className="i-title-wrapper">  
                     <div className="i-title-item">Nettoyage
</div>
                     <div className="i-title-item">Nettoyage </div>
                     <div className="i-title-item">Décontamination </div>
                     <div className="i-title-item">Traitement </div>
                  </div>
                </div>
            </div>
         </div>
         <div className="i-right">
           <div className="i-bg"></div>
           <img src={mra}  alt=""  className="i-img" />
         </div>
    </div>
  )
}

export default Intro
