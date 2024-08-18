import React, { useState } from "react";
import { getAllProblems } from "../../Apis/Problem/problemApis";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";

function HomePage() {
    const [problems, setProblems] = useState([])

    React.useEffect(() => {
        getAllProblems()
            .then((res) => {
                console.log('Api response', res);
                setProblems(res);
            })
            .catch((error) => {
                console.error(error)
            })
    }, []);

    return (
        <div>
            <h1>Problems</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="left">Difficulty</TableCell>
                            <TableCell align="left">Topic</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {problems.map((problem) => (
                            <TableRow
                                key={problem.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {problem.id}
                                </TableCell>
                                <TableCell align="left">
                                    <Link to={`/problem/${problem.id}`}>
                                        {problem.title}
                                    </Link>
                                </TableCell>
                                <TableCell align="left">{'Medium'}</TableCell>
                                <TableCell align="left">{'Graph'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default HomePage;