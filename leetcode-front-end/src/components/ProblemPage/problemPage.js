import React, { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';
import Button from '@mui/material/Button';

import { Box, Paper } from '@mui/material';
import submit from '../../Apis/Submission/submissionApis.js';
import { useParams } from 'react-router-dom';
import { getProblem } from '../../Apis/Problem/problemApis.js';
import SubmissionResult from '../SubmissionResult/submissionResult.js';


function ProblemPage() {
  const [width, setWidth] = useState(300); // Initial width for the left section
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [code, setCode] = useState("// Write your code here");
    const { problemId } = useParams();
    const [problem, setProblem] = useState(null);
    const [displayResult, setDisplayResult] = useState(false);
    const [result, setResult] = useState("");

    const handleMouseDown = (event) => {
        setIsDragging(true);
    };

    const handleMouseMove = (event) => {
        if (!isDragging) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const newWidth = event.clientX - containerRect.left;
        setWidth(newWidth);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handlCodeSubmission = async () => {
        const res = await submit(code)
        console.log(res)
        setDisplayResult(true);
        setResult(res);
    }

    React.useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    React.useEffect(() => {
        getProblem(problemId)
        .then((res) => {
            console.log('Api response', res);
            setProblem(res);
        })
        .catch((error) => {
            console.error(error)
        })
    }, [problemId]);

    console.log(displayResult)

    return (
        <Box ref={containerRef} display="flex" flexDirection="column" height="100vh">
            <Box flex={1} display="flex" overflow="hidden">
                <Box flex={`0 0 ${width}px`} padding={2} style={{ overflow: 'auto' }}>
                    <Paper elevation={3} style={{ height: '100%', padding: '20px' }}>
                        {problem ? problem.description : ""}
                        {console.log(problem)}
                    </Paper>
                </Box>
                <Box
                    style={{
                        cursor: 'ew-resize',
                        backgroundColor: '#ccc',
                        width: '10px',
                        height: '100%',
                        zIndex: 1,
                    }}
                    onMouseDown={handleMouseDown}
                />
                <Box flex={1} padding={2} style={{ overflow: 'auto' }}>
                    <Paper elevation={3} style={{ height: '100%', padding: '20px' }}>
                        <Editor
                            height="90vh"
                            defaultLanguage="cpp"
                            defaultValue={code}
                            onChange={setCode}
                        />
                    </Paper>
                </Box>
            </Box>
            <Box component="footer" bgcolor="whote" color="white" padding={2} textAlign="center"
                style={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 10,
                }}>
                <Button variant="contained" color="success" onClick={handlCodeSubmission}>
                    Submit
                </Button>
            </Box>
            {displayResult && <SubmissionResult result={result}/>}
        </Box>
    );
}

export default ProblemPage;
