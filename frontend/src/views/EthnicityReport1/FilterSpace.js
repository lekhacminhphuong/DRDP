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
                    <option value={'Alabama'}>Alabama</option>
                    <option value={'Alaska'}>Alaska</option>
                    <option value={'American Samoa'}>American Samoa</option>
                    <option value={'Arizona'}>Arizona</option>
                    <option value={'Arkansas'}>Arkansas</option>
                    <option value={'California'}>California</option>
                    <option value={'Colorado'}>Colorado</option>
                    <option value={'Connecticut'}>Connecticut</option>
                    <option value={'Delaware'}>Delaware</option>
                    <option value={'District of Columbia'}>District of Columbia</option> 
                    <option value={'Florida'}>Florida</option>
                    <option value={'Georgia'}>Georgia</option>
                    <option value={'Guam'}>Guam</option>
                    <option value={'Hawaii'}>Hawaii</option>
                    <option value={'Idaho'}>Idaho</option>
                    <option value={'Illinois'}>Illinois</option>
                    <option value={'Indiana'}>Indiana</option>
                    <option value={'Iowa'}>Iowa</option>
                    <option value={'Kansas'}>Kansas</option>
                    <option value={'Kentucky'}>Kentucky</option>
                    <option value={'Louisiana'}>Louisiana</option>
                    <option value={'Maine'}>Maine</option>
                    <option value={'Maryland'}>Maryland</option>
                    <option value={'Massachusetts'}>Massachusetts</option>
                    <option value={'Michigan'}>Michigan</option>
                    <option value={'Minnesota'}>Minnesota</option>
                    <option value={'Minor Outlying Islands'}>Minor Outlying Islands</option>
                    <option value={'Mississippi'}>Mississippi</option>
                    <option value={'Missouri'}>Missouri</option>
                    <option value={'Montana'}>Montana</option>
                    <option value={'Nebraska'}>Nebraska</option>
                    <option value={'Nevada'}>Nevada</option>
                    <option value={'New Hampshire'}>New Hampshire</option>
                    <option value={'New Jersey'}>New Jersey</option>
                    <option value={'New Mexico'}>New Mexico</option>
                    <option value={'New York'}>New York</option>
                    <option value={'North Carolina'}>North Carolina</option>
                    <option value={'North Dakota'}>North Dakota</option>
                    <option value={'Northern Mariana Islands'}>Northern Mariana Islands</option>
                    <option value={'Ohio'}>Ohio</option>
                    <option value={'Oklahoma'}>Oklahoma</option>
                    <option value={'Oregon'}>Oregon</option>
                    <option value={'Pennsylvania'}>Pennsylvania</option>
                    <option value={'Puerto Rico'}>Puerto Rico</option>
                    <option value={'Rhode Island'}>Rhode Island</option>
                    <option value={'South Carolina'}>South Carolina</option>
                    <option value={'South Dakota'}>South Dakota</option>
                    <option value={'Tennessee'}>Tennessee</option>
                    <option value={'Texas'}>Texas</option>
                    <option value={'U.S. Virgin Islands'}>U.S. Virgin Islands</option>
                    <option value={'Utah'}>Utah</option>
                    <option value={'Vermont'}>Vermont</option>
                    <option value={'Virginia'}>Virginia</option>
                    <option value={'Washington'}>Washington</option>
                    <option value={'West Virginia'}>West Virginia</option>
                    <option value={'Wisconsin'}>Wisconsin</option>
                    <option value={'Wyoming'}>Wyoming</option>
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                    Year
                </InputLabel>
                <Select
                    native
                    value={state.year}
                    onChange={props.handleChange('year')}
                    labelWidth={labelWidth}
                    inputProps={{
                        name: 'year',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option value={2010}>2010</option>
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
                    Section
                </InputLabel>
                <Select
                    native
                    value={state.subReport}
                    onChange={props.handleChange('subReport')}
                    labelWidth={labelWidth}
                    inputProps={{
                        name: 'subReport',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option value={'One PPR'}>One PPR (All)</option>
                    <option value={'PADD'}>PADD</option>
                    <option value={'PAAT'}>PAAT</option>
                    <option value={'PATBI'}>PATBI</option>
                    <option value={'PAVA'}>PAVA</option>
                </Select>
            </FormControl>
        </div>
    );
}