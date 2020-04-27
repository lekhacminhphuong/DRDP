import React from 'react';
import Typography from '@material-ui/core/Typography';

export function DescriptionSpace() {
    return (
        <Typography gutterBottom variant="subtitle1">
            This graph shows the total number of people served in the selected state for the selected years.
            Select a state using the State filter.
            Select years with the Year filter.
        </Typography>
    )
}
