import React from 'react';
import { Filter, List, Datagrid, TextField, EmailField, EditButton, ReferenceInput, SelectInput, TextInput } from 'react-admin';

const ServidorFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Pesquisar" source="q" alwaysOn />
        <ReferenceInput label="Servidor" source="nome" reference="servidores" allowEmpty>
            <SelectInput optionText="nome" />
        </ReferenceInput>
    </Filter>
);

export const ServidorList = props => (
    <List {...props} filters={<ServidorFilter />}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="nome" />
            <EmailField source="email" />
            <TextField source="telefone" />
            <TextField label="Cargo" source="cargo.descricao" />
            <EditButton label="Editar" />
        </Datagrid>
    </List>
);