import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TextField, Typography } from '@mui/material';
import { borderBottom } from '@mui/system';

function createData(
    id: number,
    translation: string
) {
    return { id, translation };
}

const rows = [
    createData(0, 'Hello'),
    createData(1, 'World'),
    createData(2, 'Foo'),
    createData(3, 'Bar')
];

export function BasicTable() {
    return (
        <TableContainer style={{
            borderRadius: "15px",
            border: "1px solid #333",
            boxShadow: "0px 0px 35px 2px #181818",
        }}>
            <Table aria-label="simple table" >
                <TableHead>
                    <TableRow style={{ backgroundColor: '#111'}}>
                        <TableCell align="center" style={{ color: 'white', borderColor: "#333"  }}><Typography variant={"h5"}>TRANSLATION</Typography></TableCell>
                    </TableRow>
                    <TableRow style={{ backgroundColor: '#111' }}>
                        <TableCell align="left" style={{ color: 'white', borderColor: "#333" }}>
                            <TextField
                                color="primary"
                                id="outlined-basic"
                                variant="outlined"
                                size="small"
                                focused
                                style={{
                                    width: "80%",
                                }}
                            />
                            <Button
                                color="primary"
                                variant="contained"
                                size="small"
                                style={{
                                    width: "18%",
                                    height: "40px",
                                    color: 'white',
                                    marginLeft: '10px',
                                    fontWeight: 'bold',
                                }}
                            >
                                ADD
                            </Button></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            style={{ backgroundColor: '#161616' }}
                        >
                            <TableCell
                                style={{ color: 'white', borderColor: "#F3782C" }}
                                align="left">{row.translation}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}