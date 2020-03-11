import React, { Component } from 'react';
import { JsonToTable } from "react-json-to-table";
import mockupdata from "../mockupdata";
import DataTable from 'react-data-table-component';
import Button from 'react-bootstrap/Button';

// render every component for the website
export default class TableSpace extends Component {

    render() {

        const columns = [
            {
                name: 'Answer ID',
                selector: 'AnswerID',
                sortable: true,
            },
            {
                name: 'Organization Name',
                selector: 'OrganizationName',
                sortable: true,
            },
            {
                name: 'Organization Description',
                selector: 'OrganizationDesc',
                sortable: true,
            },
            {
                name: 'Report Name',
                selector: 'ReportName',
                sortable: true,
            },
            {
                name: 'Report Description',
                selector: 'ReportDesc',
                sortable: true,
            },
            {
                name: 'Year',
                selector: 'ReportInstanceYear',
                sortable: true,
            },
            {
                name: 'Jurisdiction',
                selector: 'JurisdictionName',
                sortable: true,
            },
            {
                name: 'Question Code',
                selector: 'QuestionCode',
                sortable: true,
            },
            {
                name: 'Question Description',
                selector: 'QuestionDesc',
                sortable: true,
            },
            {
                name: 'Question Type',
                selector: 'QuestionType',
                sortable: true,
            },
            {
                name: 'Count',
                selector: 'IntAnswerValue',
                sortable: true,
            }
        ];

        return (
            <div id='tableSpace'>
                <Button variant="outline-dark" id='dl-button'>Download CSV</Button>
                <DataTable
                    columns={columns}
                    data={this.props.data}
                    pagination
                />
            </div>

            // <div id='tableSpace'>
            //     <JsonToTable json={this.props.data} />
            // </div>
        )
    }
}