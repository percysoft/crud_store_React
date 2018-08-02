import * as React from "react";

interface IStudiesHeaderProps {
  item: {
    id?: number;
    name?: string;
    age?: number;
  };
  index:number;
  changeView(): void;
  deleteItem(id:number): void;
}
export class StudiesHeader extends React.Component<IStudiesHeaderProps,any> {
  constructor(props:IStudiesHeaderProps){
    super(props);
  }
  onDelete = () => {
    this.props.deleteItem(this.props.item.id);
  };

  render() {
    const { item, index, changeView } = this.props;
    return (
      <div>
        {item.name}
        <button onClick={changeView}>Editar</button>
        <button onClick={this.onDelete}>Eliminar</button>
      </div>
    );
  }
}
