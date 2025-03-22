import React from 'react'
import { Button, ButtonGroup } from '@mui/material'
import { Link } from 'react-router-dom'

export function Navbar() {
    return (
        <div className="nav-links">
            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
            <Button component={Link} to="/">Home</Button>
            <Button component={Link} to="/about">About Me</Button>
            <Button component={Link} to="https://oregonstateuniversity-my.sharepoint.com/personal/vikramr_oregonstate_edu/Documents/Documents/College/Career/Resume.pdf" target="_blank">Resume</Button>
            </ButtonGroup>
        </div>
    )
}
