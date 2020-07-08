import { Avatar, Button, makeStyles, Paper, Typography, CircularProgress } from '@material-ui/core';
import MaterialTable from 'material-table';
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { CandidateListProps } from './candidate.types';

const useStyles = makeStyles({
    title: {
        fontSize: 30
    },
    main: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default function CandidateList(
    { candidates }: CandidateListProps
) {
    const { path } = useRouteMatch();
    const classes = useStyles();
    
    return (
        candidates.length ?
        <>
        <Paper>
            <Typography
                className={classes.title}
                color="primary"
                gutterBottom 
                align="center"
            >
                Candidate list
            </Typography>
        </Paper>
        <div className={classes.main}>
            
            <MaterialTable
                title="Candidate list table"
                columns={[
                    {
                        title: 'Avatar',
                        field: 'avatar',
                        width: 'auto',
                        render: rowData => (
                            <Avatar alt={rowData.fullName} src={rowData.avatar}/>
                        )
                    },
                    { title: 'Full Name', field: 'fullName', width: 'auto' },
                    { title: 'Job Title', field: 'job_title', width: 'auto' },
                    {
                        title: 'Show more',
                        render: rowData => (
                            <Link style={{ textDecoration: 'none' }} to={`${path}/${rowData.id}`}>
                                <Button variant="outlined" color="primary">
                                    Show
                                </Button>
                            </Link>
                        )
                    }
                ]}
                data={candidates}
                options={{
                    paginationType: 'normal',
                    pageSize: 9,
                    search: true,
                    showTitle: false,
                    header: false
                }}
            />
        </div>
        </>
        :
        <CircularProgress style={{position: 'fixed', top: '40vh', left: '50%'}} />
    );
};