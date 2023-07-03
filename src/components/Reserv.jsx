
import "./Reserv.css"

const Reserv = () => {
    return(
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                   <h1 className="c-title">
                    lest discuss your project
                   </h1>
                   <div className="c-info">
                    <div className="c-info-item">
                        <img   alt="" className="c-icon"/>
                        125 526 854 495
                    </div>
                    <div className="c-info-item">
                        <img className="c-icon"   alt="" />
                           coyuing@gmail.com
                    </div>

                    <div className="c-info-item">
                        <img className="c-icon"   alt="" />
                           241 king street touterie 
                    </div>

                     
                   </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore voluptas saepe laborum architecto quod ad assumenda sed cumque. Minus voluptatem quia quos laudantium. Aliquid est laudantium quod corporis unde.
                    </p>
                    <form>
                        <input type="text" placeholder="Name" name="user_name"/>
                        <input type="text" placeholder="Suject" name="user_suject"/>
                        <input type="text" placeholder="Email" name="user_email"/>
                        <textarea rows="5" placeholder="Message" name="message"/>
                        <button>Submit</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Reserv