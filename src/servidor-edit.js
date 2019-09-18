import React from 'react';
import { SimpleForm, DisabledInput, TextInput, Edit, ReferenceInput, SelectInput } from 'react-admin';


const ServidorTitle = ({ record }) => {
      return <span>Servidor {record ? `"Editando - ${record.nome}"` : ''}</span>;
};

export const ServidorEdit = props => (
    <Edit title={<ServidorTitle />} {...props}>
        <SimpleForm>
           <DisabledInput source="id" />
           <TextInput source="nome" />
           <TextInput source="telefone" />
           <TextInput source="email" />
           <ReferenceInput label="Cargo" source="cargo.id" reference="cargos">
                <SelectInput optionText="descricao" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);