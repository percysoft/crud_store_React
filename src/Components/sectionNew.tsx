import * as React from 'react';

export class SectionNew extends React.Component<any, any> {
  myNameRef:any;
  myAgeRef:any;
  constructor(props:any){
    super(props);
    this.myNameRef = React.createRef();
    this.myAgeRef = React.createRef();
  }

  onNew = (event:any) => {
    this.props.addItem({
      id: null,
      name: this.myNameRef.current.value,
      age: parseInt(this.myAgeRef.current.value, 10)
    });

      this.myNameRef.current.value = "";
      this.myAgeRef.current.value = "";
  };

  render() {
    const { item, index, changeView } = this.props;
    return (
      <div style={{ border: "2px solid skyblue" }}>
        <h3>Nuevo item: </h3>
        <form>
          <div>
            <label>Nombre: </label>
            <input ref={this.myNameRef} type="text" />
          </div>
          <div>
            <label>Edad: </label>
            <input ref={this.myAgeRef} type="number" />
          </div>
          <button type="button" onClick={this.onNew}>
            Guardar
          </button>
        </form>
      </div>
    );
  }
}
