import React from 'react';
import {
    Box,
    Button,
    createTheme,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    ThemeProvider,
    Typography,
} from '@mui/material';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function ShortTable(props) {
    function createData(title, author, date, view, like) {
        return { title, author, date, view, like };
    }
    const tableName = props.tableName;
    const rows = [
        createData('알리딘 포디엑스 본 사람?', '양윤서', '22.01.03', 34, 7),
        createData('알리딘 포디엑스 본 사람?', '김다은', '22.01.03', 34, 7),
        createData('알리딘 포디엑스 본 사람?', '이지현', '22.01.03', 34, 7),
        createData('알리딘 포디엑스 본 사람?', '곽지우', '22.01.03', 34, 7),
        createData('알리딘 포디엑스 본 사람?', '박가현', '22.01.03', 34, 7),
    ];
    const theme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
            secondary: {
                main: '#CF5E53',
            },
            third: {
                main: '#001F28',
            },
            background: {
                default: 'white',
            },
            text: {
                primary: '#001F28',
            },
        },
        typography: {
            fontFamily: "'Pretendard', sans-serif",
        },
    });
    const [time, setTime] = React.useState('');
    const handleTimeChange = event => {
        setTime(event.target.value);
    };

    const [scope, setScope] = React.useState('');
    const handleScopeChange = event => {
        setScope(event.target.value);
    };

    const [lineup, setLineup] = React.useState('');
    const handleLineupChange = event => {
        setLineup(event.target.value);
    };

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box>
                    <TableContainer>
                        <Table
                            sx={{
                                mt: '1.4rem',
                                borderTop: '2px solid #424242',
                                borderRight: '1px solid white',
                                borderLeft: '1px solid white',
                                borderBottom: '1px solid #424242',
                            }}
                            aria-label="simple table"
                        >
                            <TableHead
                                sx={{
                                    borderRight: '1px solid white',
                                    borderLeft: '1px solid white',
                                    borderBottom: '0.063rem solid #424242',
                                }}
                            >
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            width: '40.4rem',
                                            textAlign: 'center',
                                            fontSize: '0.8rem',
                                            fontWeight: '400',
                                            border: '0px',
                                        }}
                                    >
                                        제목
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        sx={{
                                            fontSize: '0.8rem',
                                            fontWeight: '400',
                                            border: '0px',
                                        }}
                                    >
                                        작성자
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        sx={{
                                            fontSize: '0.8rem',
                                            fontWeight: '400',
                                            border: '0px',
                                        }}
                                    >
                                        작성일
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        sx={{
                                            fontSize: '0.8rem',
                                            fontWeight: '400',
                                            border: '0px',
                                        }}
                                    >
                                        조회
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        sx={{
                                            fontSize: '0.8rem',
                                            fontWeight: '400',
                                            border: '0px',
                                        }}
                                    >
                                        좋아요
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody
                                sx={{
                                    borderBottom: '0.063rem solid #0000001A',
                                }}
                            >
                                {rows.map(row => (
                                    <TableRow key={row.author}>
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            sx={{
                                                fontSize: '0.8rem',
                                                fontWeight: '400',
                                                border: '0px',
                                                borderBottom:
                                                    '0.063rem solid #D9D9D9',
                                            }}
                                        >
                                            {row.title}
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            sx={{
                                                fontSize: '0.8rem',
                                                fontWeight: '400',
                                                border: '0px',
                                                borderBottom:
                                                    '0.063rem solid #D9D9D9',
                                            }}
                                        >
                                            {row.author}
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            sx={{
                                                fontSize: '0.8rem',
                                                fontWeight: '400',
                                                border: '0px',
                                                borderBottom:
                                                    '0.063rem solid #D9D9D9',
                                            }}
                                        >
                                            {row.date}
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            sx={{
                                                fontSize: '0.8rem',
                                                fontWeight: '400',
                                                border: '0px',
                                                borderBottom:
                                                    '0.063rem solid #D9D9D9',
                                            }}
                                        >
                                            {row.view}
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            sx={{
                                                fontSize: '0.8rem',
                                                fontWeight: '400',
                                                border: '0px',
                                                borderBottom:
                                                    '0.063rem solid #D9D9D9',
                                            }}
                                        >
                                            {row.like}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box
                        sx={{
                            height: '3.125rem',
                            display: 'flex',
                            //mr: 'auto',
                            justifyContent: 'flex-end',
                            mt: '0.2rem',
                        }}
                    ></Box>
                    <Box
                        sx={{
                            ml: 14,
                            display: 'flex',
                            justifyContent: 'space-around',
                            width: '38.45rem',
                            alignItems: 'center',
                        }}
                    >
                        <Box sx={{ height: '2.18rem', m: '0.3rem' }}>
                            <FormControl fullWidth sx={{ width: '7.45rem' }}>
                                <Select
                                    displayEmpty
                                    inputProps={{
                                        'aria-label': 'Without label',
                                    }}
                                    value={time}
                                    label="Time"
                                    onChange={handleTimeChange}
                                >
                                    <MenuItem value="">전체기간</MenuItem>
                                    <MenuItem value={10}>1일</MenuItem>
                                    <MenuItem value={20}>1주</MenuItem>
                                    <MenuItem value={30}>한 달</MenuItem>
                                    <MenuItem value={40}>6개월</MenuItem>
                                    <MenuItem value={50}>1년</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ height: '2.18rem', m: '0.3rem' }}>
                            <FormControl fullWidth sx={{ width: '7.45rem' }}>
                                <Select
                                    value={scope}
                                    label="Scope"
                                    displayEmpty
                                    inputProps={{
                                        'aria-label': 'Without label',
                                    }}
                                    onChange={handleScopeChange}
                                >
                                    <MenuItem value="">제목+내용</MenuItem>
                                    <MenuItem value={10}>제목만</MenuItem>
                                    <MenuItem value={20}>본문만</MenuItem>
                                    <MenuItem value={30}>댓글만</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <InputBase
                            sx={{
                                ml: 1,
                                flex: 1,
                                mt: 2.4,
                                border: '0.031rem solid #757575',
                                borderRadius: '0.25rem',
                                width: '15.688rem',
                                height: '3.25rem',
                                fontStyle: 'normal',
                                fontWeight: '300',
                                fontSize: '0.938rem',
                            }}
                            placeholder="  검색어를 입력하세요"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <Button
                            sx={{
                                m: '0.3rem',
                                backgroundColor: '#EDEDED',
                                color: '#757575',
                                width: '4.063rem',
                                mt: 2.7,
                                height: '3.25rem',
                                borderRadius: '0.25rem',
                                opacity: '70%',
                            }}
                        >
                            검색
                        </Button>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default ShortTable;
