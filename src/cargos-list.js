import React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

export const CargosList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="descricao" />
            <EditButton label="Editar" />
        </Datagrid>
    </List>
);