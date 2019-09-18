import React from 'react';
import { SimpleForm, DisabledInput, TextInput, Edit } from 'react-admin';


const CargoTitle = ({ record }) => {
      return <span>Cargo {record ? `"Editando - ${record.descricao}"` : ''}</span>;
};

export const CargosEdit = props => (
    <Edit title={<CargoTitle />} {...props}>
        <SimpleForm>
           <DisabledInput source="id" />
           <TextInput source="descricao" />
        </SimpleForm>
    </Edit>
);