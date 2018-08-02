import * as React from 'react';
import { CrudProvider } from '../Stores/crudContex'
import { StudiesContainer } from '../Containers/studiesSection'
export class Crud extends React.Component<any,any> {

  data = {
    student: [
      { id: 1, name: "Victor", age: 23 },
      { id: 2, name: "percy", age: 18 },
      { id: 3, name: "kenner", age: 14 }
    ]
  };

  render() {
    return(
      <CrudProvider data={this.data.student}>
        <StudiesContainer/>
      </CrudProvider>
    );
  }
}
