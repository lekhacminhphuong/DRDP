import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 100,
    },
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
        marginRight: 30,
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
        marginTop: 20,
        marginLeft: 30
    }
}));

export function FilterSpace() {
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
        <div id='filterSpace'>
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
                    value={state.age}
                    onChange={handleChange('age')}
                    labelWidth={labelWidth}
                    inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option value="" />
                    <option value={10}>Alabama</option>
                    <option value={10}>Alaska</option>
                    <option value={20}>American Samoa</option>
                    <option value={30}>Arizona</option>
                    <option value={30}>Arkansas</option>
                </Select>
            </FormControl><br />
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                    Year
                </InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange('age')}
                    labelWidth={labelWidth}
                    inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option value="" />
                    <option value={10}>2011</option>
                    <option value={20}>2012</option>
                    <option value={30}>2013</option>
                    <option value={10}>2014</option>
                    <option value={20}>2015</option>
                    <option value={30}>2016</option>
                    <option value={10}>2017</option>
                    <option value={20}>2018</option>
                </Select>
            </FormControl>
        </div>
    );
}