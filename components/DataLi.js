export default class ExpandingList extends HTMLLIElement {
    constructor() {
      // Always call super first in constructor
      const self = super();
      self.textContent = this.display()
    }
    display() {
        if(!this.dspData){
            return data;
        }

        const props = this.dspData.split(".");

        if(!this.data) {
            return;
        }
        let dspData = this.data;

        props.forEach(prop => {
            dspData = dspData[prop]
        });

        return dspData
    }
    write(data) {
        this.data = data
    }
    read() {
        return this.data
    }
  }