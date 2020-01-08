// in src/users.js
import React from 'react';
import { UrlField, List, Datagrid, TextField, EmailField } from 'react-admin';

const MyUrlField = ({ record = {}, source }) =>
    <a href = {record[source]}>
        {record[source]}
    </a>;

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <MyUrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);