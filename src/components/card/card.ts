export enum pixel {
    "color" = "color"
}

class card extends HTMLElement {

    static get observedAttributes(){
        const attrs: Record<pixel, null> = {
            color: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: pixel, 
        oldValue: string | undefined, 
        newValue: string | undefined) {
            switch (propName) {
                case pixel.color:
                this.color = newValue ? Number(newValue) : undefined;
                break;
                
                default:
                (this as any)[propName] = newValue;
                break;
            }
        }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){ 
        if(this.shadowRoot){
            const backgroundColor = this. == 0 ? 'white' : 'black';
            this.shadowRoot.innerHTML = `
            <div style= "background-color: ${backgroundColor};"></div>
            `;
        }
    }
}

customElements.define("my-card", card);
export default card;