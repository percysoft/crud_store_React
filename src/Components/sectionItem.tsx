import * as React from "react";

interface ISectionItemProps {
  header(changeView:any): React.Props<HTMLElement>;
  body(changeView:any): React.Props<HTMLElement>;
}
export class SectionItem extends React.Component<ISectionItemProps,any> {
  constructor(props:ISectionItemProps){
    super(props);
    this.state = {
      show: false
    };
  }
  changeView = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    const { body, header } = this.props;
    return (
      <div style={{ marginBottom: "10px" }}>
        {header(this.changeView)}
        {this.state.show && body(this.changeView)}
      </div>
    );
  }
}
