import React from 'react';
import { Admin, Resource } from 'react-admin';
import { ServidorList } from './servidor-list';
import { ServidorEdit } from './servidor-edit'
import { ServidorCreate } from './servidor-create'
import { CargosList } from './cargos-list';
import { CargosEdit } from './cargos-edit'
import { CargosCreate } from './cargos-create'
import authProvider from './authProvider';
import Dashboard from './dashboard';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://localhost:8080');
const App = () => (
      <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider}>
          <Resource name="servidores" list={ServidorList} edit={ServidorEdit} create={ServidorCreate} />
          <Resource name="cargos" list={CargosList} edit={CargosEdit} create={CargosCreate} />
      </Admin>
  );

export default App;