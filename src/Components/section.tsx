import * as React from "react";

interface ICrudProps {
  title: string;
  data: object[];
  children(item:object, index: number): React.Props<HTMLElement>;
  newItem: any;
}

export class Section extends React.Component<ICrudProps,any> {
  render() {
    const { children, data, title, newItem } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        {data && data.map((item, index) => {
          return(
            <div key={index}>
              {children(item, index)}
            </div>
          );
        })}
        {newItem}
      </div>
    );
  }
}
