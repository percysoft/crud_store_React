import * as React from 'react'
import { withcrudContext } from "../Stores/crudContex";
import {Section} from '../Components/section'
import {SectionNew} from '../Components/sectionNew'
import {SectionItem} from '../Components/sectionItem'
import {StudiesHeader} from '../Containers/StudiesHeader'
import {StudiesBody} from '../Containers/StudiesBody'

interface ISectionStudiesProps {
  store: {
    data: any;
    reducers: {
      addNewItem(data: any): void;
      deleteItem(id: number): void;
      editItem(study: any): void;
    };
  };
}

export class StudiesSection extends React.Component<ISectionStudiesProps,any> {
  render() {
    return(
      <div>
        <Section
          title="Estudios"
          data={this.props.store.data}
          newItem={<SectionNew addItem={this.props.store.reducers.addNewItem}/>}>
          {(item, index) => (
              <SectionItem
                header={(changeView) => {
                  return(
                    <StudiesHeader
                    item={item}
                    index={index}
                    changeView={changeView}
                    deleteItem={this.props.store.reducers.deleteItem}
                  />
                  );
                }}
                body={(changeView) => (
                  <StudiesBody
                    item={item}
                    index={index}
                    changeView={changeView}
                    editItem={this.props.store.reducers.editItem}
                  />
                )}
              />
          )}
      </Section>
      </div>
    );
  }
};

export const StudiesContainer = withcrudContext(StudiesSection);
