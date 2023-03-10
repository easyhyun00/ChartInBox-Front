import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import MenuItem from '@mui/material/MenuItem';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import FormGroup from '@mui/material/FormGroup';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuBar from '../../components/menubar/MenuBar';
import { Paper } from '@mui/material';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import { styled } from '@mui/material/styles';
import { borderBottom } from '@mui/system';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import Footer from '../../components/footer/Footer';
//import ReactHtmlParser from 'react-html-parser';

function Writing() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#333D41',
            },
            secondary: {
                main: '#757575',
            },
            line: {
                main: '#C2C2C2',
            },
            text: {
                primary: '#1A1A1A',
            },
        },
        typography: {
            fontFamily: "'Pretendard', sans-serif",
        },
    });
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [board, setBoard] = React.useState('');
    const handleBoardChange = event => {
        setBoard(event.target.value);
    };
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const a = (
        <img
            width="12px"
            height="11px"
            src="../../image/good.png"
            alt="?????????"
        ></img>
    );
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MenuBar></MenuBar>
            <Box
                sx={{
                    height: '60px',
                    width: '100%',
                    alignItems: 'left',
                    justifyContent: 'space-around',
                    borderTop: '0.063rem solid #D9D9D9',
                    borderBottom: '0.063rem solid #D9D9D9',
                }}
            >
                <Box
                    sx={{
                        ml: '8rem',
                        display: 'flex',
                        width: '31.25rem',
                        height: '60px',
                        justifyContent: 'space-around',
                    }}
                >
                    <Button
                        href="../totalboard"
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '0.875rem',
                            color: 'secondary.main',
                        }}
                    >
                        {' '}
                        ?????????{' '}
                    </Button>
                    <Button
                        href="../freeboard"
                        sx={{
                            width: '31.25rem',
                            mr: '1rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            //fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '0.875rem',
                            color: 'secondary.main',
                        }}
                    >
                        {' '}
                        ???????????????{' '}
                    </Button>
                    <Button
                        href="../reviewboard"
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '0.875rem',
                            color: 'secondary.main',
                        }}
                    >
                        {' '}
                        ???????????????{' '}
                    </Button>
                    <Button
                        href="../qnaboard"
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '0.875rem',
                            color: 'secondary.main',
                        }}
                    >
                        {' '}
                        Q&A{' '}
                    </Button>
                </Box>
            </Box>
            <main>
                <Box
                    sx={{
                        pb: 1,
                        pt: 5,
                        width: '76.125rem',
                        borderBottom: 1,
                        display: 'flex',
                        alignItems: 'center',
                        margin: 'auto',
                        justifyContent: 'space-around',
                    }}
                >
                    <Typography
                        sx={{
                            width: '70%',
                            fontSize: '1.5rem',
                            fontWeight: '500',
                            textAlign: 'left',
                        }}
                    >
                        ?????????
                    </Typography>
                    <div>
                        <Checkbox {...label} defaultChecked />
                        ???????????? ????????????
                    </div>
                    <FormGroup>
                        <FormControlLabel
                            control={<Switch defaultChecked />}
                            label="????????????"
                        />
                    </FormGroup>
                    <Button variant="outlined">??????</Button>
                </Box>
                <Container
                    sx={{
                        maxWidth: '85.125rem',
                        display: 'flex',
                        alignItems: 'center',
                        margin: 'auto',
                        pt: 3,
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={9}>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': {
                                        width: '53.5rem',
                                    },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="outlined-basic"
                                    label="????????? ????????? ?????????."
                                    variant="outlined"
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box>
                                <FormControl sx={{ width: 300 }}>
                                    <Select
                                        displayEmpty
                                        inputProps={{
                                            'aria-label': 'Without label',
                                        }}
                                        value={board}
                                        label="Board"
                                        onChange={handleBoardChange}
                                    >
                                        <MenuItem value="">???????????????</MenuItem>
                                        <MenuItem value={10}>
                                            ???????????????
                                        </MenuItem>
                                        <MenuItem value={20}>Q&A</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid item xs={9}>
                            <Box
                                className="App"
                                sx={{
                                    '& > :not(style)': {
                                        maxWidth: '53.5rem',
                                    },
                                }}
                            >
                                <TextField
                                    sx={{
                                        width: '53.5rem',
                                    }}
                                    multiline
                                    rows={15}
                                    id="outlined-basic"
                                    label="????????? ????????? ?????????."
                                    variant="outlined"
                                />
                                {/* <CKEditor
                                    sx={{
                                        border: 1,
                                    }}
                                    height="30rem"
                                    editor={ClassicEditor}
                                    config={{
                                        placeholder: '????????? ???????????????.',
                                    }}
                                    onReady={editor => {
                                        console.log(
                                            'Editor is ready to use!',
                                            editor,
                                        );
                                    }}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        console.log({ event, editor, data });
                                    }}
                                    onBlur={(event, editor) => {
                                        console.log('Blur.', editor);
                                    }}
                                    onFocus={(event, editor) => {
                                        console.log('Focus.', editor);
                                    }}
                                /> */}
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            {/*  <Box sx={{ border: 1 }}> */}
                            <Box
                                sx={{
                                    border: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    //alignItems: 'flex-end',
                                    width: '18.8rem',
                                    p: '20px 15px 40px 7px',
                                    gap: '8px',
                                    border: 0,
                                    textAlign: 'left',
                                    borderRadius: '0.25rem',
                                    backgroundColor: '#F5F5F5',
                                }}
                            >
                                <Typography color={'#616161'}>
                                    ??? ???????????? ?????? ????????? ??????????????????.
                                </Typography>
                                <Typography color={'#616161'}>
                                    ??? ???????????? ???????????? ?????? ??????, ????????? ??????
                                    ?????? ????????? ?????? ?????? ???????????? ?????? ??????
                                    ????????? ??? ????????????.
                                </Typography>
                            </Box>
                            <Button
                                align="left"
                                variant="contained"
                                endIcon={<ThumbUpAltIcon />}
                                sx={{
                                    backgroundColor: '#EDEDED',
                                    ml: -9,
                                    mt: 2.5,
                                }}
                            >
                                ??? ????????? ???????????????.
                            </Button>
                            <Button
                                variant="contained"
                                endIcon={<ThumbDownAltIcon />}
                                sx={{
                                    backgroundColor: '#EDEDED',
                                    ml: -4.2,
                                    mt: 1,
                                }}
                            >
                                ??? ????????? ???????????? ????????????.
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </main>

            <Footer></Footer>
        </ThemeProvider>
    );
}
export default Writing;
