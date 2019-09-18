import React from 'react';
import { SimpleForm, TextInput, Create } from 'react-admin';

export const CargosCreate = props => (
    <Create title="Novo" {...props}>
        <SimpleForm>
           <TextInput source="descricao" />
        </SimpleForm>
    </Create>
);