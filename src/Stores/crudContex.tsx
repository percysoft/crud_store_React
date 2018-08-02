import * as React from "react";
import { User } from '../Models/user'

const crudContext = React.createContext({});

export class CrudProvider extends React.Component<any, any > {
  constructor(props:any) {
    super(props);
    this.state = {
      data: this.setData(this.props.data),
      reducers: {
        addNewItem: this.addNewItem,
        deleteItem: this.deleteItem,
        editItem: this.editItem,
      }
    };
  }
  setData = (data:any) =>{
    const newValues = data.map((item:any) => {
      const user = new User(item);
      return user;
    });
    return newValues;
  }
  addNewItem = (data:User) => {
    const items = [...this.state.data];
    const user = new User({});
    user.setName(data.name);
    user.setAge(data.age);
    items.concat(user)
    this.setState({
      data: items.concat(user),
    });
  }

  deleteItem = (id:number) => {
    const data = [...this.state.data];
    const newValues = data.filter(item => {
      return item.id !== id;
    });
    this.setState({ data: newValues });
  };

  editItem = (study:User) => {
    const data = [...this.state.data];
    const newValues = data.map(item => {
      if (item.id === study.id) {
        return study;
      }
      return item;
    });
    this.setState({ data: newValues });
  };

  render() {
    return (
      <crudContext.Provider value={this.state}>
        {this.props.children}
      </crudContext.Provider>
    );
  }
}

export function withcrudContext(Component:any) {
  return function crudContextComponent(props:any) {
    return (
      <crudContext.Consumer>
        {store => <Component {...props} store={store} />}
      </crudContext.Consumer>
    );
  };
}
