import * as React from "react";

interface IStudiesBodyProps {
  item: {
    id?: number;
    name?: string;
    age?: number;
  };
  index:number;
  changeView(): void;
  editItem(data:object): void;
}

export class StudiesBody extends React.Component<IStudiesBodyProps,any> {
  myNameRef:any;
  myAgeRef:any;
  constructor(props:IStudiesBodyProps){
    super(props);
    this.myNameRef = React.createRef();
    this.myAgeRef = React.createRef();
  }

  onEdit = () => {
    this.props.editItem({
      id: this.props.item.id,
      name: this.myNameRef.current.value,
      age: parseInt(this.myAgeRef.current.value, 10)
    });
    this.props.changeView();
  };

  render() {
    const { item, index } = this.props;
    return (
      <div style={{ border: "2px solid skyblue" }}>
        <h3>{item.name}</h3>
        <form>
          <div>
            <label>Nombre: </label>
            <input  ref={this.myNameRef} type="text" defaultValue={item.name} />
          </div>
          <div>
            <label>Edad: </label>
            <input ref={this.myAgeRef}  type="text" defaultValue={item.age} />
          </div>
          <button type="button" onClick={this.onEdit}>
            Guardar
          </button>
        </form>
      </div>
    );
  }
}
