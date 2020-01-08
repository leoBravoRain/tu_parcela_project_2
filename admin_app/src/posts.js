// in src/posts.js
import React from 'react';
import { Filter, Create, SelectInput, Edit, SimpleForm, ReferenceInput, TextInput,  EditButton, List, Datagrid, TextField, ReferenceField } from 'react-admin';

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);

export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users"><SelectInput optionText="id" /></ReferenceInput>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const PostList = props => (
    <List filters={<PostFilter />} {...props}>
        {/* <Datagrid rowClick="edit"> */}
        <Datagrid>
            <ReferenceField source="userId" reference="users">
                <TextField source="id" />
                {/* <TextField source="name" /> */}
            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            {/* <TextField source="body" /> */}
            <EditButton />
        </Datagrid>
    </List>
);