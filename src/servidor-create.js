import React from 'react';
import { SimpleForm, TextInput, Create, ReferenceInput, SelectInput } from 'react-admin';

export const ServidorCreate = props => (
    <Create title="Novo" {...props}>
        <SimpleForm>
            <TextInput source="nome" />
           <TextInput source="telefone" />
           <TextInput source="email" />
           <ReferenceInput label="Cargo" source="cargo.id" reference="cargos">
                <SelectInput optionText="descricao" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);