import * as components from "./components/index"
import { objectWithImages } from "./data/data";
import card, { pixel } from "./components/card/card";

class AppContainer extends HTMLElement{
    cards: card[] = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"});

        objectWithImages.forEach((cards) =>{
            const card = this.ownerDocument.createElement("my-card") as Card;
            card.setAttribute(pixel.color);
            this.cards.push(card);
        })

        for (let i = 0; i < objectWithImages.images; i++) {

            
        }
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.cards.forEach((mycard)=>{
                this.shadowRoot?.appendChild(mycard);
            })
        }
    }
}

customElements.define("app-container", AppContainer);