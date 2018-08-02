import * as React from 'react';
import { Crud } from '../Containers/crud'

export class App extends React.Component<{}, {}> {

  constructor(props: any) {
    super(props);
  }
  render() {
    return(
      <React.Fragment>
       <Crud/>
      </React.Fragment>
    );
  }
}
