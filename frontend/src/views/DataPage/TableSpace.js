import React from 'react';
import DataTable from 'react-data-table-component';

export function TableSpace(props) {
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
            <DataTable
                columns={columns}
                //data={props.dat}
                pagination
            />
        </div>
    )
}
