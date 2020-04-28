import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 30,
        marginTop: 30,
        width: "20vw"
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 2),
    },
    formControl: {
        margin: 20
    }
}));

export function FilterSpace(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = name => event => {
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <div>
            {/* HIDDEN for MVP
            <div className={classes.search}>
                <InputBase
                    placeholder="Search"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div> */}
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                    State
                </InputLabel>
                <Select
                    native
                    value={state.jurisdiction}
                    onChange={props.handleChange('jurisdiction')}
                    labelWidth={labelWidth}
                    inputProps={{
                        name: 'jurisdiction',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option value="" />
                    <option value={'Alabama'}>Alabama</option>
                   <option value={'Alaska'}>Alaska</option>
                   <option value={'American Samoa'}>American Samoa</option>
                   <option value={'Arizona'}>Arizona</option>
                   <option value={'Arkansas'}>Arkansas</option>
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                    Year
                </InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={props.handleChange('year')}
                    labelWidth={labelWidth}
                    inputProps={{
                        name: 'year',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option value="" />
                    <option value={2011}>2011</option>
                   <option value={2012}>2012</option>
                   <option value={2013}>2013</option>
                   <option value={2014}>2014</option>
                   <option value={2015}>2015</option>
                   <option value={2016}>2016</option>
                   <option value={2017}>2017</option>
                   <option value={2018}>2018</option>
                   <option value={2019}>2019</option>
                   <option value={2020}>2020</option>
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                    Report
                </InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange('report')}
                    labelWidth={labelWidth}
                    inputProps={{
                        name: 'report',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option value="" />
                    <option value={'One PPR'}>One PPR</option>
                    <option value={'Census'}>Census</option>
                </Select>
            </FormControl>
        </div>
    );
}